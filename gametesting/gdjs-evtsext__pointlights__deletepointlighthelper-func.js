
if (typeof gdjs.evtsExt__PointLights__DeletePointLightHelper !== "undefined") {
  gdjs.evtsExt__PointLights__DeletePointLightHelper.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__PointLights__DeletePointLightHelper = {};


gdjs.evtsExt__PointLights__DeletePointLightHelper.userFunc0xf949b8 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
if (runtimeScene._pointLightsExtension.pointLightHelpers.has(eventsFunctionContext.getArgument("Identifier"))) {
    runtimeScene.getLayer('').getRenderer().getThreeScene().remove(runtimeScene._pointLightsExtension.pointLightHelpers.get(eventsFunctionContext.getArgument("Identifier")).pointLightHelper);
    runtimeScene._pointLightsExtension.pointLightHelpers.delete(eventsFunctionContext.getArgument("Identifier"));
}
};
gdjs.evtsExt__PointLights__DeletePointLightHelper.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__PointLights__DeletePointLightHelper.userFunc0xf949b8(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__PointLights__DeletePointLightHelper.func = function(runtimeScene, Identifier, parentEventsFunctionContext) {
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


gdjs.evtsExt__PointLights__DeletePointLightHelper.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__PointLights__DeletePointLightHelper.registeredGdjsCallbacks = [];