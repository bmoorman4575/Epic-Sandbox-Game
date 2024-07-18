
if (typeof gdjs.evtsExt__VR__onFirstSceneLoaded !== "undefined") {
  gdjs.evtsExt__VR__onFirstSceneLoaded.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__VR__onFirstSceneLoaded = {};


gdjs.evtsExt__VR__onFirstSceneLoaded.userFunc0x10fdd88 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
class VRButton {

    static createButton(renderer) {

        const button = document.createElement('button');

        function showEnterVR( /*device*/) {

            let currentSession = null;

            async function onSessionStarted(session) {

                session.addEventListener('end', onSessionEnded);

                await renderer.xr.setSession(session);
                button.textContent = 'EXIT VR';

                currentSession = session;

            }

            function onSessionEnded( /*event*/) {

                currentSession.removeEventListener('end', onSessionEnded);

                button.textContent = 'ENTER VR';

                currentSession = null;

            }

            //

            button.style.display = '';

            button.style.cursor = 'pointer';
            button.style.left = 'calc(50% - 50px)';
            button.style.width = '100px';

            button.textContent = 'ENTER VR';

            button.onmouseenter = function () {

                button.style.opacity = '1.0';

            };

            button.onmouseleave = function () {

                button.style.opacity = '0.5';

            };

            button.onclick = function () {

                if (currentSession === null) {

                    // WebXR's requestReferenceSpace only works if the corresponding feature
                    // was requested at session creation time. For simplicity, just ask for
                    // the interesting ones as optional features, but be aware that the
                    // requestReferenceSpace call will fail if it turns out to be unavailable.
                    // ('local' is always available for immersive sessions and doesn't need to
                    // be requested separately.)

                    const sessionInit = { optionalFeatures: ['local-floor', 'bounded-floor', 'hand-tracking', 'layers'] };
                    navigator.xr.requestSession('immersive-vr', sessionInit).then(onSessionStarted);

                } else {

                    currentSession.end();

                }

            };

        }

        function disableButton() {

            button.style.display = '';

            button.style.cursor = 'auto';
            button.style.left = 'calc(50% - 75px)';
            button.style.width = '150px';

            button.onmouseenter = null;
            button.onmouseleave = null;

            button.onclick = null;

        }

        function showWebXRNotFound() {

            disableButton();

            button.textContent = 'VR NOT SUPPORTED';

        }

        function showVRNotAllowed(exception) {

            disableButton();

            console.warn('Exception when trying to call xr.isSessionSupported', exception);

            button.textContent = 'VR NOT ALLOWED';

        }

        function stylizeElement(element) {

            element.style.position = 'absolute';
            element.style.bottom = '20px';
            element.style.padding = '12px 6px';
            element.style.border = '1px solid #fff';
            element.style.borderRadius = '4px';
            element.style.background = 'rgba(0,0,0,0.1)';
            element.style.color = '#fff';
            element.style.font = 'normal 13px sans-serif';
            element.style.textAlign = 'center';
            element.style.opacity = '0.5';
            element.style.outline = 'none';
            element.style.zIndex = '999';

        }

        if ('xr' in navigator) {

            button.id = 'VRButton';
            button.style.display = 'none';

            stylizeElement(button);

            navigator.xr.isSessionSupported('immersive-vr').then(function (supported) {

                supported ? showEnterVR() : showWebXRNotFound();

                if (supported && VRButton.xrSessionIsGranted) {

                    button.click();

                }

            }).catch(showVRNotAllowed);

            return button;

        } else {

            const message = document.createElement('a');

            if (window.isSecureContext === false) {

                message.href = document.location.href.replace(/^http:/, 'https:');
                message.innerHTML = 'WEBXR NEEDS HTTPS'; // TODO Improve message

            } else {

                message.href = 'https://immersiveweb.dev/';
                message.innerHTML = 'WEBXR NOT AVAILABLE';

            }

            message.style.left = 'calc(50% - 90px)';
            message.style.width = '180px';
            message.style.textDecoration = 'none';

            stylizeElement(message);

            return message;

        }

    }

    static registerSessionGrantedListener() {

        if ('xr' in navigator) {

            // WebXRViewer (based on Firefox) has a bug where addEventListener
            // throws a silent exception and aborts execution entirely.
            if (/WebXRViewer\//i.test(navigator.userAgent)) return;

            navigator.xr.addEventListener('sessiongranted', () => {

                VRButton.xrSessionIsGranted = true;

            });

        }

    }

}

VRButton.xrSessionIsGranted = false;
VRButton.registerSessionGrantedListener();

const renderer = runtimeScene.getGame().getRenderer().getThreeRenderer();
gdjs.vr.button = VRButton.createButton(renderer);
renderer.xr.enabled = true;

const controllerSpace = new THREE.Group();
controllerSpace.scale.y = -1;

gdjs.callbacksRuntimeSceneLoaded.push((rs) => {
    rs.getLayer("").get3DRendererObject().add(controllerSpace);
})

for (const [id, name] of [[1, "left"], [0, "right"]]) {
    const that = gdjs.vr[name] = {
        grip: renderer.xr.getControllerGrip(id),
        target: renderer.xr.getController(id),
        connected: false,
        xrInput: null,
    }

    that.grip.addEventListener("connected", (event) => {
        that.connected = true;
        that.xrInput = event.data;
        controllerSpace.add(that.grip);
        controllerSpace.add(that.target);
    });

    that.grip.addEventListener("disconnected", (event) => {
        that.connected = false;
        that.xrInput = null;
        that.grip.removeFromParent()
        that.target.removeFromParent();
    });

    gdjs.callbacksRuntimeSceneUnloading.push(() => {
        for (let i = that.grip.children.length - 1; i >= 0; i--) {
            that.grip.remove(that.grip.children[i]);
        }
        for (let i = that.target.children.length - 1; i >= 0; i--) {
            that.target.remove(that.target.children[i]);
        }
    })
}

}

gdjs.vr = {};

const originalLoop = gdjs.RuntimeGamePixiRenderer.prototype.startGameLoop;
gdjs.RuntimeGamePixiRenderer.prototype.startGameLoop = function startGameLoop(fn) {
    let oldTime = 0;
    const threeRenderer = this.getThreeRenderer();
    if (!threeRenderer) {
        gdjs.RuntimeGamePixiRenderer.prototype.startGameLoop = originalLoop;
        this.startGameLoop(fn)
        throw new Error("VR requires a 3D scene - make sure you've placed at least 1 3D object on your scene!");
    }
    const start = Date.now();
    /** @type {gdjs.RuntimeGame} */
    const game = this.getGame();

    const doStep = () => {
        const time = Date.now() - start;
        const dt = oldTime ? time - oldTime : 0;
        oldTime = time;
        if (!fn(dt)) {
            threeRenderer.setAnimationLoop(null)
        }
    }

    const gameLoop = () => {
        if (threeRenderer.xr.isPresenting) {
            // Since requestAnimationFrame is disabled by the browser when in a VR session, 
            // give the game a chance to step after we fulfilled the headset's request for
            // immediate rendering. 
            game.getSceneStack().getCurrentScene().getRenderer().renderForVR();
            queueMicrotask(doStep);
        } else {
            // We are not being requested to render by the headset, we can just step and render normally.
            doStep()
        }
    };

    threeRenderer.setAnimationLoop(gameLoop)
}

{

};
gdjs.evtsExt__VR__onFirstSceneLoaded.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__VR__onFirstSceneLoaded.userFunc0x10fdd88(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__VR__onFirstSceneLoaded.func = function(runtimeScene, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("VR"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("VR"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__VR__onFirstSceneLoaded.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__VR__onFirstSceneLoaded.registeredGdjsCallbacks = [];
gdjs.evtsExt__VR__onFirstSceneLoaded.registeredGdjsCallbacks.push((runtimeScene) => {
    gdjs.evtsExt__VR__onFirstSceneLoaded.func(runtimeScene, runtimeScene);
})
gdjs.registerFirstRuntimeSceneLoadedCallback(gdjs.evtsExt__VR__onFirstSceneLoaded.registeredGdjsCallbacks[gdjs.evtsExt__VR__onFirstSceneLoaded.registeredGdjsCallbacks.length - 1]);
