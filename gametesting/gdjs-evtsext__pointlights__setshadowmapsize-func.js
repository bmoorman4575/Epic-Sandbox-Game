
if (typeof gdjs.evtsExt__PointLights__SetShadowMapSize !== "undefined") {
  gdjs.evtsExt__PointLights__SetShadowMapSize.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__PointLights__SetShadowMapSize = {};


gdjs.evtsExt__PointLights__SetShadowMapSize.userFunc0x9137b8 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
if (runtimeScene._pointLightsExtension.pointLights.has(eventsFunctionContext.getArgument("Identifier"))) {
    switch (eventsFunctionContext.getArgument("ShadowMapSize")) {
        case '256':
            runtimeScene._pointLightsExtension.pointLights.get(eventsFunctionContext.getArgument("Identifier")).pointLight.shadow.mapSize.width = 256;
            runtimeScene._pointLightsExtension.pointLights.get(eventsFunctionContext.getArgument("Identifier")).pointLight.shadow.mapSize.height = 256;
            break;
        case '512':
            runtimeScene._pointLightsExtension.pointLights.get(eventsFunctionContext.getArgument("Identifier")).pointLight.shadow.mapSize.width = 512;
            runtimeScene._pointLightsExtension.pointLights.get(eventsFunctionContext.getArgument("Identifier")).pointLight.shadow.mapSize.height = 512;
            break;
        case '1024':
            runtimeScene._pointLightsExtension.pointLights.get(eventsFunctionContext.getArgument("Identifier")).pointLight.shadow.mapSize.width = 1024;
            runtimeScene._pointLightsExtension.pointLights.get(eventsFunctionContext.getArgument("Identifier")).pointLight.shadow.mapSize.height = 1024;
            break;
        case '2048':
            runtimeScene._pointLightsExtension.pointLights.get(eventsFunctionContext.getArgument("Identifier")).pointLight.shadow.mapSize.width = 2048;
            runtimeScene._pointLightsExtension.pointLights.get(eventsFunctionContext.getArgument("Identifier")).pointLight.shadow.mapSize.height = 2048;
            break;
        case '4096':
            runtimeScene._pointLightsExtension.pointLights.get(eventsFunctionContext.getArgument("Identifier")).pointLight.shadow.mapSize.width = 4096;
            runtimeScene._pointLightsExtension.pointLights.get(eventsFunctionContext.getArgument("Identifier")).pointLight.shadow.mapSize.height = 4096;
            break;
        default:
            runtimeScene._pointLightsExtension.pointLights.get(eventsFunctionContext.getArgument("Identifier")).pointLight.shadow.mapSize.width = 512;
            runtimeScene._pointLightsExtension.pointLights.get(eventsFunctionContext.getArgument("Identifier")).pointLight.shadow.mapSize.height = 512;
    }
}


};
gdjs.evtsExt__PointLights__SetShadowMapSize.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__PointLights__SetShadowMapSize.userFunc0x9137b8(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__PointLights__SetShadowMapSize.func = function(runtimeScene, Identifier, ShadowMapSize, parentEventsFunctionContext) {
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
if (argName === "ShadowMapSize") return ShadowMapSize;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__PointLights__SetShadowMapSize.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__PointLights__SetShadowMapSize.registeredGdjsCallbacks = [];