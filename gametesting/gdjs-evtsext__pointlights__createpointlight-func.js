
if (typeof gdjs.evtsExt__PointLights__CreatePointLight !== "undefined") {
  gdjs.evtsExt__PointLights__CreatePointLight.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__PointLights__CreatePointLight = {};


gdjs.evtsExt__PointLights__CreatePointLight.userFunc0x144a9d8 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
if (!runtimeScene._pointLightsExtension.pointLights.has(eventsFunctionContext.getArgument("Identifier"))) {
    const rgbColorGD = gdjs.rgbOrHexToRGBColor(eventsFunctionContext.getArgument("Color"));
    const pointLight = new THREE.PointLight("rgb(" + rgbColorGD[0] + ", " + rgbColorGD[1] + ", " + rgbColorGD[2] + ")", eventsFunctionContext.getArgument("Intensity"), eventsFunctionContext.getArgument("Distance"), eventsFunctionContext.getArgument("Decay"));
    pointLight.position.set(eventsFunctionContext.getArgument("PositionX"), eventsFunctionContext.getArgument("PositionY"), eventsFunctionContext.getArgument("PositionZ"));
    pointLight.castShadow = eventsFunctionContext.getArgument("CastShadow");

    switch (eventsFunctionContext.getArgument("ShadowMapSize")) {
        case '256':
            pointLight.shadow.mapSize.width = 256;
            pointLight.shadow.mapSize.height = 256;
            break;
        case '512':
            pointLight.shadow.mapSize.width = 512;
            pointLight.shadow.mapSize.height = 512;
            break;
        case '1024':
            pointLight.shadow.mapSize.width = 1024;
            pointLight.shadow.mapSize.height = 1024;
            break;
        case '2048':
            pointLight.shadow.mapSize.width = 2048;
            pointLight.shadow.mapSize.height = 2048;
            break;
        case '4096':
            pointLight.shadow.mapSize.width = 4096;
            pointLight.shadow.mapSize.height = 4096;
            break;
        default:
            pointLight.shadow.mapSize.width = 512;
            pointLight.shadow.mapSize.height = 512;
    }

    pointLight.shadow.autoUpdate = eventsFunctionContext.getArgument("AutoUpdate");
    pointLight.shadow.needsUpdate = true;
    runtimeScene.getLayer('').getRenderer().getThreeScene().add(pointLight);
    runtimeScene._pointLightsExtension.pointLights.set(eventsFunctionContext.getArgument("Identifier"), { pointLight });
    pointLight.dispose();
}
};
gdjs.evtsExt__PointLights__CreatePointLight.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__PointLights__CreatePointLight.userFunc0x144a9d8(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__PointLights__CreatePointLight.func = function(runtimeScene, Identifier, Color, Intensity, Distance, Decay, CastShadow, AutoUpdate, ShadowMapSize, PositionX, PositionY, PositionZ, parentEventsFunctionContext) {
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
if (argName === "Color") return Color;
if (argName === "Intensity") return Intensity;
if (argName === "Distance") return Distance;
if (argName === "Decay") return Decay;
if (argName === "CastShadow") return CastShadow;
if (argName === "AutoUpdate") return AutoUpdate;
if (argName === "ShadowMapSize") return ShadowMapSize;
if (argName === "PositionX") return PositionX;
if (argName === "PositionY") return PositionY;
if (argName === "PositionZ") return PositionZ;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__PointLights__CreatePointLight.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__PointLights__CreatePointLight.registeredGdjsCallbacks = [];