
if (typeof gdjs.evtsExt__VR__onScenePostEvents !== "undefined") {
  gdjs.evtsExt__VR__onScenePostEvents.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__VR__onScenePostEvents = {};


gdjs.evtsExt__VR__onScenePostEvents.userFunc0x16cf9d8 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const threeRenderer = runtimeScene.getGame().getRenderer().getThreeRenderer();
if (gdjs.vr.wasPresenting && !threeRenderer.xr.isPresenting) {
    // Going from headset back to normal screen, the game resolution has been resized
    // but for some reason the browser does not pick up on it, so we have to call
    // the callback ourselves.
    runtimeScene.onGameResolutionResized();
}

gdjs.vr.wasPresenting = threeRenderer.xr.isPresenting;

};
gdjs.evtsExt__VR__onScenePostEvents.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__VR__onScenePostEvents.userFunc0x16cf9d8(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__VR__onScenePostEvents.func = function(runtimeScene, parentEventsFunctionContext) {
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


gdjs.evtsExt__VR__onScenePostEvents.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__VR__onScenePostEvents.registeredGdjsCallbacks = [];
gdjs.evtsExt__VR__onScenePostEvents.registeredGdjsCallbacks.push((runtimeScene) => {
    gdjs.evtsExt__VR__onScenePostEvents.func(runtimeScene, runtimeScene);
})
gdjs.registerRuntimeScenePostEventsCallback(gdjs.evtsExt__VR__onScenePostEvents.registeredGdjsCallbacks[gdjs.evtsExt__VR__onScenePostEvents.registeredGdjsCallbacks.length - 1]);
