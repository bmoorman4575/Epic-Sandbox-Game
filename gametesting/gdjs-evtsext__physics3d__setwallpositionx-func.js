
if (typeof gdjs.evtsExt__Physics3D__SetWallPositionX !== "undefined") {
  gdjs.evtsExt__Physics3D__SetWallPositionX.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Physics3D__SetWallPositionX = {};


gdjs.evtsExt__Physics3D__SetWallPositionX.userFunc0x131ddb8 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const identifier = eventsFunctionContext.getArgument("Identifier");

const newX = eventsFunctionContext.getArgument("X");

if (runtimeScene.__physics3D.colliders.has(identifier)) {
    const colliderInfo = runtimeScene.__physics3D.colliders.get(identifier);
    const body = colliderInfo.collider;
    const mesh = colliderInfo.mesh;
    

    body.position.x = newX;
    mesh.position.x = newX;
}

};
gdjs.evtsExt__Physics3D__SetWallPositionX.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Physics3D__SetWallPositionX.userFunc0x131ddb8(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Physics3D__SetWallPositionX.func = function(runtimeScene, Identifier, X, parentEventsFunctionContext) {
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
if (argName === "X") return X;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__Physics3D__SetWallPositionX.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__Physics3D__SetWallPositionX.registeredGdjsCallbacks = [];