
if (typeof gdjs.evtsExt__MeshMaterial__MetalnessMapBySlot !== "undefined") {
  gdjs.evtsExt__MeshMaterial__MetalnessMapBySlot.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__MeshMaterial__MetalnessMapBySlot = {};
gdjs.evtsExt__MeshMaterial__MetalnessMapBySlot.GDObjectObjects1= [];


gdjs.evtsExt__MeshMaterial__MetalnessMapBySlot.userFunc0xefe050 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
if (objects.length > 0) {
    const slotNum = eventsFunctionContext.getArgument("Slot");
    let index = 0;
    objects[0].get3DRendererObject().traverse((node) => {
        if (index <= slotNum && node.isMesh && node.material.isMaterial) {
            if (node.material.hasOwnProperty('metalnessMap')) {
                if (index === slotNum) {
                    if (node.material.metalnessMap instanceof THREE.Texture) {
                        node.material.metalnessMap.dispose();
                    }
                    var textureLoader = new THREE.TextureLoader();
                    var texture = textureLoader.load(eventsFunctionContext.getArgument("MetalnessMap").substring(eventsFunctionContext.getArgument("MetalnessMap").lastIndexOf('\\') + 1));
                    texture.flipY = false;
                    node.material.metalnessMap = texture;
                }
                index++;
            } else {
                console.warn('Metalness map property does not exist for this material type: ' + node.material.type + ', object name: ' + objects[0].getName());
            }
        }
    });
}
};
gdjs.evtsExt__MeshMaterial__MetalnessMapBySlot.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MeshMaterial__MetalnessMapBySlot.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__MeshMaterial__MetalnessMapBySlot.GDObjectObjects1);
gdjs.evtsExt__MeshMaterial__MetalnessMapBySlot.userFunc0xefe050(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__MeshMaterial__MetalnessMapBySlot.func = function(runtimeScene, Object, MetalnessMap, Slot, parentEventsFunctionContext) {
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
if (argName === "MetalnessMap") return MetalnessMap;
if (argName === "Slot") return Slot;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__MeshMaterial__MetalnessMapBySlot.GDObjectObjects1.length = 0;

gdjs.evtsExt__MeshMaterial__MetalnessMapBySlot.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__MeshMaterial__MetalnessMapBySlot.registeredGdjsCallbacks = [];