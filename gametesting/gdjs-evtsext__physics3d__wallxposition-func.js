
if (typeof gdjs.evtsExt__Physics3D__WallXPosition !== "undefined") {
  gdjs.evtsExt__Physics3D__WallXPosition.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Physics3D__WallXPosition = {};


gdjs.evtsExt__Physics3D__WallXPosition.userFunc0x7ed130 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const identifier = eventsFunctionContext.getArgument("Identifier");

if (runtimeScene.__physics3D.colliders.has(identifier)) {
    const colliderInfo = runtimeScene.__physics3D.colliders.get(identifier);
    const body = colliderInfo.collider;
    
    eventsFunctionContext.returnValue = body.position.x;
}

};
gdjs.evtsExt__Physics3D__WallXPosition.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Physics3D__WallXPosition.userFunc0x7ed130(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Physics3D__WallXPosition.func = function(runtimeScene, Identifier, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Physics3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Physics3D"),
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


gdjs.evtsExt__Physics3D__WallXPosition.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__Physics3D__WallXPosition.registeredGdjsCallbacks = [];