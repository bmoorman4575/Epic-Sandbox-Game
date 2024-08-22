
if (typeof gdjs.evtsExt__MeshMaterial__ChangeMaterialType !== "undefined") {
  gdjs.evtsExt__MeshMaterial__ChangeMaterialType.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__MeshMaterial__ChangeMaterialType = {};
gdjs.evtsExt__MeshMaterial__ChangeMaterialType.GDObjectObjects1= [];


gdjs.evtsExt__MeshMaterial__ChangeMaterialType.userFunc0xf7c270 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
if (objects.length > 0) {
    objects[0].get3DRendererObject().traverse((node) => {
        if (node.isMesh && node.material.isMaterial) {
            switch (eventsFunctionContext.getArgument("MaterialType")) {
                case 'Basic':
                    node.material = new THREE.MeshBasicMaterial();
                    break;
                case 'Lambert':
                    node.material = new THREE.MeshLambertMaterial();
                    break;
                case 'Matcap':
                    node.material = new THREE.MeshMatcapMaterial();
                    break;
                case 'Phong':
                    node.material = new THREE.MeshPhongMaterial();
                    break;
                case 'Toon':
                    node.material = new THREE.MeshToonMaterial();
                    break;
                case 'Standard':
                    node.material = new THREE.MeshStandardMaterial();
                    break;
                case 'Normal':
                    node.material = new THREE.MeshNormalMaterial();
                    break;
                case 'Depth':
                    node.material = new THREE.MeshDepthMaterial();
                    break;
                case 'Shadow':
                    node.material = new THREE.ShadowMaterial();
                    break;
                default:
                    console.warn('Invalid or no material type was given for action: change material type, object name: ' + objects[0].getName());
            }
        }
    });
}
};
gdjs.evtsExt__MeshMaterial__ChangeMaterialType.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MeshMaterial__ChangeMaterialType.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__MeshMaterial__ChangeMaterialType.GDObjectObjects1);
gdjs.evtsExt__MeshMaterial__ChangeMaterialType.userFunc0xf7c270(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__MeshMaterial__ChangeMaterialType.func = function(runtimeScene, Object, MaterialType, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": gdjs.objectsListsToArray(Object)
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("MeshMaterial"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("MeshMaterial"),
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
if (argName === "MaterialType") return MaterialType;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__MeshMaterial__ChangeMaterialType.GDObjectObjects1.length = 0;

gdjs.evtsExt__MeshMaterial__ChangeMaterialType.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__MeshMaterial__ChangeMaterialType.registeredGdjsCallbacks = [];