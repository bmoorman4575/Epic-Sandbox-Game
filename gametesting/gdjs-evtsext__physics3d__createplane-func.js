
if (typeof gdjs.evtsExt__Physics3D__CreatePlane !== "undefined") {
  gdjs.evtsExt__Physics3D__CreatePlane.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Physics3D__CreatePlane = {};


gdjs.evtsExt__Physics3D__CreatePlane.userFunc0x7ed130 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const scene = runtimeScene.getLayer('').getRenderer().getThreeScene();
const world = runtimeScene.__CannonJS.world;

const identifier = eventsFunctionContext.getArgument("Identifier");
const visible = eventsFunctionContext.getArgument("Visible");

const posX = eventsFunctionContext.getArgument("X");
const posY = eventsFunctionContext.getArgument("Y");
const posZ = eventsFunctionContext.getArgument("Z");

const width = eventsFunctionContext.getArgument("Width")/2;
const height = eventsFunctionContext.getArgument("Height")/2;

const angleX = eventsFunctionContext.getArgument("Rotation_X") * (Math.PI / 180);
const angleY = eventsFunctionContext.getArgument("Rotation_Y") * (Math.PI / 180); 
const angleZ = eventsFunctionContext.getArgument("Rotation_Z") * (Math.PI / 180); 

if(!runtimeScene.__physics3D.colliders.has(identifier)){
const quaternion = new CANNON.Quaternion();
quaternion.setFromEuler(angleX, angleY, angleZ);


const planeShape = new CANNON.Plane();
const planeBody = new CANNON.Body({ mass: 0 });

planeBody.position.set(posX, posY, posZ);
planeBody.quaternion.copy(quaternion);

const planeMaterial = new CANNON.Material('slipperyMaterial');
planeMaterial.friction = 0.5;

planeBody.collisionFilterGroup = 0|1|2|4|8|16;
planeBody.collisionFilterMask = 0|1|2|4|8|16;

planeBody.material = planeMaterial;
planeBody.addShape(planeShape);

world.addBody(planeBody);

const planeGeometry = new THREE.PlaneGeometry(width, height);
const rgbColor = new THREE.Color("#ff0000");

const material = new THREE.MeshBasicMaterial({ 
    color: rgbColor, 
    wireframe: true,
    visible: visible
});
const debugMesh = new THREE.Mesh(planeGeometry, material);

debugMesh.position.set(posX, posY, posZ);
debugMesh.quaternion.copy(quaternion);

scene.add(debugMesh);
runtimeScene.__physics3D.colliders.set(identifier, { 
        collider:  planeBody,
        mesh: debugMesh
        });
}
};
gdjs.evtsExt__Physics3D__CreatePlane.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Physics3D__CreatePlane.userFunc0x7ed130(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Physics3D__CreatePlane.func = function(runtimeScene, Identifier, X, Y, Z, Width, Height, Rotation_X, Rotation_Y, Rotation_Z, Visible, parentEventsFunctionContext) {
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
if (argName === "Y") return Y;
if (argName === "Z") return Z;
if (argName === "Width") return Width;
if (argName === "Height") return Height;
if (argName === "Rotation_X") return Rotation_X;
if (argName === "Rotation_Y") return Rotation_Y;
if (argName === "Rotation_Z") return Rotation_Z;
if (argName === "Visible") return Visible;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__Physics3D__CreatePlane.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__Physics3D__CreatePlane.registeredGdjsCallbacks = [];