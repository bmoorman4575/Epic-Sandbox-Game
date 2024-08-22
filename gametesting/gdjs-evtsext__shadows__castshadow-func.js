
if (typeof gdjs.evtsExt__Shadows__CastShadow !== "undefined") {
  gdjs.evtsExt__Shadows__CastShadow.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Shadows__CastShadow = {};
gdjs.evtsExt__Shadows__CastShadow.GDObjectObjects1= [];


gdjs.evtsExt__Shadows__CastShadow.userFunc0xfc1a30 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
objects[0].get3DRendererObject().traverse((node) => {
    if (node instanceof THREE.Mesh && node.isMesh) {
        node.castShadow = eventsFunctionContext.getArgument("CastShadow");
    }
});
};
gdjs.evtsExt__Shadows__CastShadow.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Shadows__CastShadow.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Shadows__CastShadow.GDObjectObjects1);
gdjs.evtsExt__Shadows__CastShadow.userFunc0xfc1a30(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Shadows__CastShadow.func = function(runtimeScene, Object, CastShadow, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": gdjs.objectsListsToArray(Object)
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
if (argName === "CastShadow") return CastShadow;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Shadows__CastShadow.GDObjectObjects1.length = 0;

gdjs.evtsExt__Shadows__CastShadow.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__Shadows__CastShadow.registeredGdjsCallbacks = [];