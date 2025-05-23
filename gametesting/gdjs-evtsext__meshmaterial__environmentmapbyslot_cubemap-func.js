
if (typeof gdjs.evtsExt__MeshMaterial__EnvironmentMapBySlot_Cubemap !== "undefined") {
  gdjs.evtsExt__MeshMaterial__EnvironmentMapBySlot_Cubemap.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__MeshMaterial__EnvironmentMapBySlot_Cubemap = {};
gdjs.evtsExt__MeshMaterial__EnvironmentMapBySlot_Cubemap.GDObjectObjects1= [];


gdjs.evtsExt__MeshMaterial__EnvironmentMapBySlot_Cubemap.userFunc0xf7c270 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
if (objects.length > 0) {
    const slotNum = eventsFunctionContext.getArgument("Slot");
    let index = 0;
    objects[0].get3DRendererObject().traverse((node) => {
        if (index <= slotNum && node.isMesh && node.material.isMaterial) {
            if (node.material.hasOwnProperty('envMap')) {
                if (index === slotNum) {
                    if (node.material.envMap instanceof THREE.Texture) {
                        node.material.envMap.dispose();
                    }
                    const texture = new THREE.CubeTextureLoader().load([
                        eventsFunctionContext.getArgument("PX").substring(eventsFunctionContext.getArgument("PX").lastIndexOf('\\') + 1),
                        eventsFunctionContext.getArgument("NX").substring(eventsFunctionContext.getArgument("NX").lastIndexOf('\\') + 1),
                        eventsFunctionContext.getArgument("PZ").substring(eventsFunctionContext.getArgument("PZ").lastIndexOf('\\') + 1),
                        eventsFunctionContext.getArgument("NZ").substring(eventsFunctionContext.getArgument("NZ").lastIndexOf('\\') + 1),
                        eventsFunctionContext.getArgument("PY").substring(eventsFunctionContext.getArgument("PY").lastIndexOf('\\') + 1),
                        eventsFunctionContext.getArgument("NY").substring(eventsFunctionContext.getArgument("NY").lastIndexOf('\\') + 1),
                    ]);

                    node.material.envMap = texture;
                }
                index++;
            } else {
                console.warn('Environment map property does not exist for this material type: ' + node.material.type + ', object name: ' + objects[0].getName());
            }
        }
    });
}
};
gdjs.evtsExt__MeshMaterial__EnvironmentMapBySlot_Cubemap.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MeshMaterial__EnvironmentMapBySlot_Cubemap.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__MeshMaterial__EnvironmentMapBySlot_Cubemap.GDObjectObjects1);
gdjs.evtsExt__MeshMaterial__EnvironmentMapBySlot_Cubemap.userFunc0xf7c270(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__MeshMaterial__EnvironmentMapBySlot_Cubemap.func = function(runtimeScene, Object, PX, NX, PZ, NZ, PY, NY, Slot, parentEventsFunctionContext) {
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
if (argName === "PX") return PX;
if (argName === "NX") return NX;
if (argName === "PZ") return PZ;
if (argName === "NZ") return NZ;
if (argName === "PY") return PY;
if (argName === "NY") return NY;
if (argName === "Slot") return Slot;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__MeshMaterial__EnvironmentMapBySlot_Cubemap.GDObjectObjects1.length = 0;

gdjs.evtsExt__MeshMaterial__EnvironmentMapBySlot_Cubemap.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__MeshMaterial__EnvironmentMapBySlot_Cubemap.registeredGdjsCallbacks = [];