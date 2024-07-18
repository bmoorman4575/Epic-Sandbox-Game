
if (typeof gdjs.evtsExt__PointLights__DeletePointLightShadowCameraHelper !== "undefined") {
  gdjs.evtsExt__PointLights__DeletePointLightShadowCameraHelper.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__PointLights__DeletePointLightShadowCameraHelper = {};


gdjs.evtsExt__PointLights__DeletePointLightShadowCameraHelper.userFunc0x85eba0 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
if (runtimeScene._pointLightsExtension.pointLightShadowCameraHelpers.has(eventsFunctionContext.getArgument("Identifier"))) {
    runtimeScene.getLayer('').getRenderer().getThreeScene().remove(runtimeScene._pointLightsExtension.pointLightShadowCameraHelpers.get(eventsFunctionContext.getArgument("Identifier")).cameraHelper);
    runtimeScene._pointLightsExtension.pointLightShadowCameraHelpers.delete(eventsFunctionContext.getArgument("Identifier"));
}
};
gdjs.evtsExt__PointLights__DeletePointLightShadowCameraHelper.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__PointLights__DeletePointLightShadowCameraHelper.userFunc0x85eba0(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__PointLights__DeletePointLightShadowCameraHelper.func = function(runtimeScene, Identifier, parentEventsFunctionContext) {
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
if (argName === "Identifier") return Identifier;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__PointLights__DeletePointLightShadowCameraHelper.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__PointLights__DeletePointLightShadowCameraHelper.registeredGdjsCallbacks = [];