
if (typeof gdjs.evtsExt__MeshMaterial__ReflectivityBySlot !== "undefined") {
  gdjs.evtsExt__MeshMaterial__ReflectivityBySlot.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__MeshMaterial__ReflectivityBySlot = {};
gdjs.evtsExt__MeshMaterial__ReflectivityBySlot.GDObjectObjects1= [];


gdjs.evtsExt__MeshMaterial__ReflectivityBySlot.userFunc0xf4e5a0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
if (objects.length > 0) {
    const slotNum = eventsFunctionContext.getArgument("Slot");
    let index = 0;
    objects[0].get3DRendererObject().traverse((node) => {
        if (index <= slotNum && node.isMesh && node.material.isMaterial) {
            if (node.material.hasOwnProperty('reflectivity')) {
                if (index === slotNum) {
                    node.material.reflectivity = eventsFunctionContext.getArgument("Reflectivity");
                }
                index++;
            } else {
                console.warn('Reflectivity property does not exist for this material type: ' + node.material.type + ', object name: ' + objects[0].getName());
            }
        }
    });
}
};
gdjs.evtsExt__MeshMaterial__ReflectivityBySlot.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MeshMaterial__ReflectivityBySlot.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__MeshMaterial__ReflectivityBySlot.GDObjectObjects1);
gdjs.evtsExt__MeshMaterial__ReflectivityBySlot.userFunc0xf4e5a0(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__MeshMaterial__ReflectivityBySlot.func = function(runtimeScene, Object, Reflectivity, Slot, parentEventsFunctionContext) {
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
if (argName === "Reflectivity") return Reflectivity;
if (argName === "Slot") return Slot;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__MeshMaterial__ReflectivityBySlot.GDObjectObjects1.length = 0;

gdjs.evtsExt__MeshMaterial__ReflectivityBySlot.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__MeshMaterial__ReflectivityBySlot.registeredGdjsCallbacks = [];