
if (typeof gdjs.evtsExt__MeshMaterial__NewMaterialInstance !== "undefined") {
  gdjs.evtsExt__MeshMaterial__NewMaterialInstance.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__MeshMaterial__NewMaterialInstance = {};
gdjs.evtsExt__MeshMaterial__NewMaterialInstance.GDObjectObjects1= [];


gdjs.evtsExt__MeshMaterial__NewMaterialInstance.userFunc0xec0ed8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
if (objects.length > 0) {
    objects[0].get3DRendererObject().traverse((node) => {
        if (node.isMesh && node.material.isMaterial) {
            var clonedMaterial = node.material.clone();
            node.material = clonedMaterial
        }
    });
}
};
gdjs.evtsExt__MeshMaterial__NewMaterialInstance.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MeshMaterial__NewMaterialInstance.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__MeshMaterial__NewMaterialInstance.GDObjectObjects1);
gdjs.evtsExt__MeshMaterial__NewMaterialInstance.userFunc0xec0ed8(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__MeshMaterial__NewMaterialInstance.func = function(runtimeScene, Object, parentEventsFunctionContext) {
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__MeshMaterial__NewMaterialInstance.GDObjectObjects1.length = 0;

gdjs.evtsExt__MeshMaterial__NewMaterialInstance.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__MeshMaterial__NewMaterialInstance.registeredGdjsCallbacks = [];