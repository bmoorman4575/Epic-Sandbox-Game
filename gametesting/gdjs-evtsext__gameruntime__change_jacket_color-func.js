
if (typeof gdjs.evtsExt__gameruntime__change_jacket_color !== "undefined") {
  gdjs.evtsExt__gameruntime__change_jacket_color.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__gameruntime__change_jacket_color = {};
gdjs.evtsExt__gameruntime__change_jacket_color.GDObjectObjects1= [];
gdjs.evtsExt__gameruntime__change_jacket_color.GDObjectObjects2= [];


gdjs.evtsExt__gameruntime__change_jacket_color.userFunc0x1451f40 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
objects[0].get3DRendererObject().traverse((node) => {
    if (node instanceof THREE.Mesh && node.isMesh) {
        node.color.set(0xff0000);
    }
});
};
gdjs.evtsExt__gameruntime__change_jacket_color.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.evtsExt__gameruntime__change_jacket_color.userFunc0x1451f40(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__gameruntime__change_jacket_color.func = function(runtimeScene, Object, color, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": gdjs.objectsListsToArray(Object)
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("gameruntime"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("gameruntime"),
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
if (argName === "color") return color;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__gameruntime__change_jacket_color.GDObjectObjects1.length = 0;
gdjs.evtsExt__gameruntime__change_jacket_color.GDObjectObjects2.length = 0;

gdjs.evtsExt__gameruntime__change_jacket_color.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__gameruntime__change_jacket_color.registeredGdjsCallbacks = [];