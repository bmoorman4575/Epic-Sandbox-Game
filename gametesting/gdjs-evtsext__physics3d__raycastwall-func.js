
if (typeof gdjs.evtsExt__Physics3D__RayCastWall !== "undefined") {
  gdjs.evtsExt__Physics3D__RayCastWall.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Physics3D__RayCastWall = {};


gdjs.evtsExt__Physics3D__RayCastWall.userFunc0x1212458 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const world = runtimeScene.__CannonJS.world;

const startX = eventsFunctionContext.getArgument('StartX');
const startY = eventsFunctionContext.getArgument('StartY');
const startZ = eventsFunctionContext.getArgument('StartZ');

const endX = eventsFunctionContext.getArgument('EndX');
const endY = eventsFunctionContext.getArgument('EndY');
const endZ = eventsFunctionContext.getArgument('EndZ');

const identifier = eventsFunctionContext.getArgument("Identifier");

const rayFrom = new CANNON.Vec3(startX, startY, startZ);
const rayTo = new CANNON.Vec3(endX, endY, endZ);

const result = new CANNON.RaycastResult();

if (runtimeScene.__physics3D.colliders.has(identifier)) {
    
const colliderInfo = runtimeScene.__physics3D.colliders.get(identifier);
const targetObject = colliderInfo.collider;

world.raycastClosest(rayFrom, rayTo, { skipBackfaces: true, collisionFilterMask: targetObject.collisionFilterGroup }, result);

if (result.hasHit && result.body === targetObject) {
    eventsFunctionContext.returnValue = true;
    runtimeScene.__physics3D.ray = result;
}}
};
gdjs.evtsExt__Physics3D__RayCastWall.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


var objects = [];
gdjs.evtsExt__Physics3D__RayCastWall.userFunc0x1212458(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Physics3D__RayCastWall.func = function(runtimeScene, StartX, StartY, StartZ, EndX, EndY, EndZ, Identifier, parentEventsFunctionContext) {
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
if (argName === "StartX") return StartX;
if (argName === "StartY") return StartY;
if (argName === "StartZ") return StartZ;
if (argName === "EndX") return EndX;
if (argName === "EndY") return EndY;
if (argName === "EndZ") return EndZ;
if (argName === "Identifier") return Identifier;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__Physics3D__RayCastWall.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__Physics3D__RayCastWall.registeredGdjsCallbacks = [];