
if (typeof gdjs.evtsExt__PointLights__CreatePointLightShadowCameraHelper !== "undefined") {
  gdjs.evtsExt__PointLights__CreatePointLightShadowCameraHelper.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__PointLights__CreatePointLightShadowCameraHelper = {};


gdjs.evtsExt__PointLights__CreatePointLightShadowCameraHelper.userFunc0xfc1a30 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
if (runtimeScene._pointLightsExtension.pointLights.has(eventsFunctionContext.getArgument("Identifier"))) {
    const tempObj = runtimeScene._pointLightsExtension.pointLights.get(eventsFunctionContext.getArgument("Identifier"));
    const shadowCameraHelper = new THREE.CameraHelper(tempObj.pointLight.shadow.camera);
    runtimeScene.getLayer('').getRenderer().getThreeScene().add(shadowCameraHelper);
    shadowCameraHelper.matrix = tempObj.pointLight.matrix;
    runtimeScene._pointLightsExtension.pointLightShadowCameraHelpers.set(eventsFunctionContext.getArgument("Identifier"), { shadowCameraHelper });
    shadowCameraHelper.dispose();
}
};
gdjs.evtsExt__PointLights__CreatePointLightShadowCameraHelper.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__PointLights__CreatePointLightShadowCameraHelper.userFunc0xfc1a30(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__PointLights__CreatePointLightShadowCameraHelper.func = function(runtimeScene, Identifier, parentEventsFunctionContext) {
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


gdjs.evtsExt__PointLights__CreatePointLightShadowCameraHelper.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__PointLights__CreatePointLightShadowCameraHelper.registeredGdjsCallbacks = [];