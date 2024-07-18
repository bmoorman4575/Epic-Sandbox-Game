
if (typeof gdjs.evtsExt__PointLights__onSceneLoaded !== "undefined") {
  gdjs.evtsExt__PointLights__onSceneLoaded.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__PointLights__onSceneLoaded = {};


gdjs.evtsExt__PointLights__onSceneLoaded.userFunc0xf949b8 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
runtimeScene._pointLightsExtension = {};
runtimeScene._pointLightsExtension.pointLights = new Map();
runtimeScene._pointLightsExtension.pointLightHelpers = new Map();
runtimeScene._pointLightsExtension.pointLightShadowCameraHelpers = new Map();
};
gdjs.evtsExt__PointLights__onSceneLoaded.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__PointLights__onSceneLoaded.userFunc0xf949b8(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__PointLights__onSceneLoaded.func = function(runtimeScene, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PointLights"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PointLights"),
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


gdjs.evtsExt__PointLights__onSceneLoaded.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__PointLights__onSceneLoaded.registeredGdjsCallbacks = [];
gdjs.evtsExt__PointLights__onSceneLoaded.registeredGdjsCallbacks.push((runtimeScene) => {
    gdjs.evtsExt__PointLights__onSceneLoaded.func(runtimeScene, runtimeScene);
})
gdjs.registerRuntimeSceneLoadedCallback(gdjs.evtsExt__PointLights__onSceneLoaded.registeredGdjsCallbacks[gdjs.evtsExt__PointLights__onSceneLoaded.registeredGdjsCallbacks.length - 1]);
