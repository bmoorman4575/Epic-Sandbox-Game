
if (typeof gdjs.evtsExt__Physics3D__SetWallRotationY !== "undefined") {
  gdjs.evtsExt__Physics3D__SetWallRotationY.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Physics3D__SetWallRotationY = {};


gdjs.evtsExt__Physics3D__SetWallRotationY.userFunc0x1141b00 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const identifier = eventsFunctionContext.getArgument("Identifier");
const angleY = eventsFunctionContext.getArgument("RotationY") * (Math.PI / 180);

if (runtimeScene.__physics3D.colliders.has(identifier)) {
    const colliderInfo = runtimeScene.__physics3D.colliders.get(identifier);
    const body = colliderInfo.collider;
    const mesh = colliderInfo.mesh;

    const currentEuler = new THREE.Euler().setFromQuaternion(mesh.quaternion, 'XYZ');
    const currentAngleX = currentEuler.x;
    const currentAngleZ = currentEuler.z;

    const quaternionY = new CANNON.Quaternion();
    quaternionY.setFromEuler(0, angleY, 0);

    const quaternion = new CANNON.Quaternion();
    quaternion.setFromEuler(currentAngleX, angleY, currentAngleZ);

    body.quaternion.copy(quaternion);
    mesh.quaternion.copy(quaternion);
}

};
gdjs.evtsExt__Physics3D__SetWallRotationY.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Physics3D__SetWallRotationY.userFunc0x1141b00(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Physics3D__SetWallRotationY.func = function(runtimeScene, Identifier, RotationY, parentEventsFunctionContext) {
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
if (argName === "RotationY") return RotationY;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__Physics3D__SetWallRotationY.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__Physics3D__SetWallRotationY.registeredGdjsCallbacks = [];