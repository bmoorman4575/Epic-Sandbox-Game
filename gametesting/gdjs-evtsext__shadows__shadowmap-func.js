
if (typeof gdjs.evtsExt__Shadows__ShadowMap !== "undefined") {
  gdjs.evtsExt__Shadows__ShadowMap.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Shadows__ShadowMap = {};


gdjs.evtsExt__Shadows__ShadowMap.userFunc0xf949b8 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
switch (eventsFunctionContext.getArgument("ShadowMapType")) {
    case 'Basic':
        runtimeScene.getGame().getRenderer().getThreeRenderer().shadowMap.type = THREE.BasicShadowMap;
        break;
    case 'PCF':
        runtimeScene.getGame().getRenderer().getThreeRenderer().shadowMap.type = THREE.PCFShadowMap;
        break;
    case 'PCF Soft':
        runtimeScene.getGame().getRenderer().getThreeRenderer().shadowMap.type = THREE.PCFSoftShadowMap;
        break;
    case 'VSM':
        runtimeScene.getGame().getRenderer().getThreeRenderer().shadowMap.type = THREE.VSMShadowMap;
        break;
    default:
        runtimeScene.getGame().getRenderer().getThreeRenderer().shadowMap.type = THREE.PCFShadowMap;
}
runtimeScene.getGame().getRenderer().getThreeRenderer().shadowMap.enabled = eventsFunctionContext.getArgument("ShadowMap");
runtimeScene.getGame().getRenderer().getThreeRenderer().shadowMap.requestAnimationFrame = 1;
runtimeScene.getGame().getRenderer().getThreeRenderer().shadowMap.needsUpdate = true;
};
gdjs.evtsExt__Shadows__ShadowMap.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Shadows__ShadowMap.userFunc0xf949b8(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Shadows__ShadowMap.func = function(runtimeScene, ShadowMap, ShadowMapType, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Shadows"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Shadows"),
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
if (argName === "ShadowMap") return ShadowMap;
if (argName === "ShadowMapType") return ShadowMapType;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__Shadows__ShadowMap.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__Shadows__ShadowMap.registeredGdjsCallbacks = [];