
if (typeof gdjs.evtsExt__VR__camerapoint !== "undefined") {
  gdjs.evtsExt__VR__camerapoint.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__VR__camerapoint = {};


gdjs.evtsExt__VR__camerapoint.userFunc0x16cf9d8 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
// Get the Three.js renderer
const threeRenderer = runtimeScene.getGame().getRenderer().getThreeRenderer();

if (threeRenderer && threeRenderer.xr.isPresenting) {
    // Get the XR camera
    const xrCamera = threeRenderer.xr.getCamera();

    // Function to rotate the camera by 90 degrees along the Y-axis
    function rotateXRCamera() {
        const rotationAngle = THREE.MathUtils.degToRad(90); // Convert degrees to radians
        xrCamera.rotation.y += rotationAngle;
    }

    // Call the rotateXRCamera function
    rotateXRCamera();
} else {
    console.error("Three.js renderer or XR camera not found or XR session not active.");
}

};
gdjs.evtsExt__VR__camerapoint.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.evtsExt__VR__camerapoint.userFunc0x16cf9d8(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__VR__camerapoint.func = function(runtimeScene, parentEventsFunctionContext) {
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


gdjs.evtsExt__VR__camerapoint.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__VR__camerapoint.registeredGdjsCallbacks = [];