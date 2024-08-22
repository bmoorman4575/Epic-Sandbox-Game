
if (typeof gdjs.evtsExt__MeshMaterial__ConvertMaterialType !== "undefined") {
  gdjs.evtsExt__MeshMaterial__ConvertMaterialType.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__MeshMaterial__ConvertMaterialType = {};
gdjs.evtsExt__MeshMaterial__ConvertMaterialType.GDObjectObjects1= [];


gdjs.evtsExt__MeshMaterial__ConvertMaterialType.userFunc0xf7c270 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
if (objects.length > 0) {
    objects[0].get3DRendererObject().traverse((node) => {
        if (node.isMesh && node.material.isMaterial) {
            let targetMaterial;
            switch (eventsFunctionContext.getArgument("MaterialType")) {
                case 'Basic':
                    targetMaterial = new THREE.MeshBasicMaterial();
                    targetMaterial.copy(node.material)
                    node.material = targetMaterial;
                    break;
                case 'Lambert':
                    targetMaterial = new THREE.MeshLambertMaterial();
                    targetMaterial.copy(node.material)
                    node.material = targetMaterial;
                    break;
                case 'Matcap':
                    targetMaterial = new THREE.MeshMatcapMaterial();
                    targetMaterial.copy(node.material)
                    node.material = targetMaterial;
                    break;
                case 'Phong':
                    targetMaterial = new THREE.MeshPhongMaterial();
                    targetMaterial.copy(node.material)
                    node.material = targetMaterial;
                    break;
                case 'Toon':
                    targetMaterial = new THREE.MeshToonMaterial();
                    targetMaterial.copy(node.material)
                    node.material = targetMaterial;
                    break;
                case 'Standard':
                    targetMaterial = new THREE.MeshStandardMaterial();
                    targetMaterial.copy(node.material)
                    node.material = targetMaterial;
                    break;
                case 'Normal':
                    targetMaterial = new THREE.MeshNormalMaterial();
                    targetMaterial.copy(node.material)
                    node.material = targetMaterial;
                    break;
                case 'Depth':
                    targetMaterial = new THREE.MeshDepthMaterial();
                    targetMaterial.copy(node.material)
                    node.material = targetMaterial;
                    break;
                case 'Shadow':
                    targetMaterial = new THREE.ShadowMaterial();
                    targetMaterial.copy(node.material)
                    node.material = targetMaterial;
                    break;
                default:
                    console.warn('Invalid or no material type was given for action: Convert material type, material type: ' + node.material.type + ', object name: ' + objects[0].getName()); 
                    
            }
        }
    });
}
};
gdjs.evtsExt__MeshMaterial__ConvertMaterialType.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MeshMaterial__ConvertMaterialType.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__MeshMaterial__ConvertMaterialType.GDObjectObjects1);
gdjs.evtsExt__MeshMaterial__ConvertMaterialType.userFunc0xf7c270(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__MeshMaterial__ConvertMaterialType.func = function(runtimeScene, Object, MaterialType, parentEventsFunctionContext) {
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

gdjs.evtsExt__MeshMaterial__ConvertMaterialType.GDObjectObjects1.length = 0;

gdjs.evtsExt__MeshMaterial__ConvertMaterialType.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__MeshMaterial__ConvertMaterialType.registeredGdjsCallbacks = [];