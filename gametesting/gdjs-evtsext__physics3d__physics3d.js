
gdjs.evtsExt__Physics3D__Physics3D = gdjs.evtsExt__Physics3D__Physics3D || {};

/**
 * Behavior generated from Physics 3D Body
 */
gdjs.evtsExt__Physics3D__Physics3D.Physics3D = class Physics3D extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__Physics3D__Physics3D.Physics3D.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.Mass = behaviorData.Mass !== undefined ? behaviorData.Mass : Number("1") || 0;
    this._behaviorData.Friction = behaviorData.Friction !== undefined ? behaviorData.Friction : Number("0.5") || 0;
    this._behaviorData.Restitution = behaviorData.Restitution !== undefined ? behaviorData.Restitution : Number("0.2") || 0;
    this._behaviorData.LinearDamping = behaviorData.LinearDamping !== undefined ? behaviorData.LinearDamping : Number("0") || 0;
    this._behaviorData.AngularDamping = behaviorData.AngularDamping !== undefined ? behaviorData.AngularDamping : Number("0") || 0;
    this._behaviorData.FixedRotation = behaviorData.FixedRotation !== undefined ? behaviorData.FixedRotation : false;
    this._behaviorData.Sleep = behaviorData.Sleep !== undefined ? behaviorData.Sleep : true;
    this._behaviorData.Type = behaviorData.Type !== undefined ? behaviorData.Type : "Dynamic";
    this._behaviorData.Group1 = behaviorData.Group1 !== undefined ? behaviorData.Group1 : true;
    this._behaviorData.Group2 = behaviorData.Group2 !== undefined ? behaviorData.Group2 : false;
    this._behaviorData.Group3 = behaviorData.Group3 !== undefined ? behaviorData.Group3 : false;
    this._behaviorData.Group4 = behaviorData.Group4 !== undefined ? behaviorData.Group4 : false;
    this._behaviorData.Group5 = behaviorData.Group5 !== undefined ? behaviorData.Group5 : false;
    this._behaviorData.Mask1 = behaviorData.Mask1 !== undefined ? behaviorData.Mask1 : true;
    this._behaviorData.Mask2 = behaviorData.Mask2 !== undefined ? behaviorData.Mask2 : false;
    this._behaviorData.Mask3 = behaviorData.Mask3 !== undefined ? behaviorData.Mask3 : false;
    this._behaviorData.Mask4 = behaviorData.Mask4 !== undefined ? behaviorData.Mask4 : false;
    this._behaviorData.Mask5 = behaviorData.Mask5 !== undefined ? behaviorData.Mask5 : false;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.Mass !== newBehaviorData.Mass)
      this._behaviorData.Mass = newBehaviorData.Mass;
    if (oldBehaviorData.Friction !== newBehaviorData.Friction)
      this._behaviorData.Friction = newBehaviorData.Friction;
    if (oldBehaviorData.Restitution !== newBehaviorData.Restitution)
      this._behaviorData.Restitution = newBehaviorData.Restitution;
    if (oldBehaviorData.LinearDamping !== newBehaviorData.LinearDamping)
      this._behaviorData.LinearDamping = newBehaviorData.LinearDamping;
    if (oldBehaviorData.AngularDamping !== newBehaviorData.AngularDamping)
      this._behaviorData.AngularDamping = newBehaviorData.AngularDamping;
    if (oldBehaviorData.FixedRotation !== newBehaviorData.FixedRotation)
      this._behaviorData.FixedRotation = newBehaviorData.FixedRotation;
    if (oldBehaviorData.Sleep !== newBehaviorData.Sleep)
      this._behaviorData.Sleep = newBehaviorData.Sleep;
    if (oldBehaviorData.Type !== newBehaviorData.Type)
      this._behaviorData.Type = newBehaviorData.Type;
    if (oldBehaviorData.Group1 !== newBehaviorData.Group1)
      this._behaviorData.Group1 = newBehaviorData.Group1;
    if (oldBehaviorData.Group2 !== newBehaviorData.Group2)
      this._behaviorData.Group2 = newBehaviorData.Group2;
    if (oldBehaviorData.Group3 !== newBehaviorData.Group3)
      this._behaviorData.Group3 = newBehaviorData.Group3;
    if (oldBehaviorData.Group4 !== newBehaviorData.Group4)
      this._behaviorData.Group4 = newBehaviorData.Group4;
    if (oldBehaviorData.Group5 !== newBehaviorData.Group5)
      this._behaviorData.Group5 = newBehaviorData.Group5;
    if (oldBehaviorData.Mask1 !== newBehaviorData.Mask1)
      this._behaviorData.Mask1 = newBehaviorData.Mask1;
    if (oldBehaviorData.Mask2 !== newBehaviorData.Mask2)
      this._behaviorData.Mask2 = newBehaviorData.Mask2;
    if (oldBehaviorData.Mask3 !== newBehaviorData.Mask3)
      this._behaviorData.Mask3 = newBehaviorData.Mask3;
    if (oldBehaviorData.Mask4 !== newBehaviorData.Mask4)
      this._behaviorData.Mask4 = newBehaviorData.Mask4;
    if (oldBehaviorData.Mask5 !== newBehaviorData.Mask5)
      this._behaviorData.Mask5 = newBehaviorData.Mask5;

    return true;
  }

  // Network sync:
  getNetworkSyncData() {
    return {
      ...super.getNetworkSyncData(),
      props: {
        
    Mass: this._behaviorData.Mass,
    Friction: this._behaviorData.Friction,
    Restitution: this._behaviorData.Restitution,
    LinearDamping: this._behaviorData.LinearDamping,
    AngularDamping: this._behaviorData.AngularDamping,
    FixedRotation: this._behaviorData.FixedRotation,
    Sleep: this._behaviorData.Sleep,
    Type: this._behaviorData.Type,
    Group1: this._behaviorData.Group1,
    Group2: this._behaviorData.Group2,
    Group3: this._behaviorData.Group3,
    Group4: this._behaviorData.Group4,
    Group5: this._behaviorData.Group5,
    Mask1: this._behaviorData.Mask1,
    Mask2: this._behaviorData.Mask2,
    Mask3: this._behaviorData.Mask3,
    Mask4: this._behaviorData.Mask4,
    Mask5: this._behaviorData.Mask5,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData) {
    super.updateFromNetworkSyncData(networkSyncData);
    
    if (networkSyncData.props.Mass !== undefined)
      this._behaviorData.Mass = networkSyncData.props.Mass;
    if (networkSyncData.props.Friction !== undefined)
      this._behaviorData.Friction = networkSyncData.props.Friction;
    if (networkSyncData.props.Restitution !== undefined)
      this._behaviorData.Restitution = networkSyncData.props.Restitution;
    if (networkSyncData.props.LinearDamping !== undefined)
      this._behaviorData.LinearDamping = networkSyncData.props.LinearDamping;
    if (networkSyncData.props.AngularDamping !== undefined)
      this._behaviorData.AngularDamping = networkSyncData.props.AngularDamping;
    if (networkSyncData.props.FixedRotation !== undefined)
      this._behaviorData.FixedRotation = networkSyncData.props.FixedRotation;
    if (networkSyncData.props.Sleep !== undefined)
      this._behaviorData.Sleep = networkSyncData.props.Sleep;
    if (networkSyncData.props.Type !== undefined)
      this._behaviorData.Type = networkSyncData.props.Type;
    if (networkSyncData.props.Group1 !== undefined)
      this._behaviorData.Group1 = networkSyncData.props.Group1;
    if (networkSyncData.props.Group2 !== undefined)
      this._behaviorData.Group2 = networkSyncData.props.Group2;
    if (networkSyncData.props.Group3 !== undefined)
      this._behaviorData.Group3 = networkSyncData.props.Group3;
    if (networkSyncData.props.Group4 !== undefined)
      this._behaviorData.Group4 = networkSyncData.props.Group4;
    if (networkSyncData.props.Group5 !== undefined)
      this._behaviorData.Group5 = networkSyncData.props.Group5;
    if (networkSyncData.props.Mask1 !== undefined)
      this._behaviorData.Mask1 = networkSyncData.props.Mask1;
    if (networkSyncData.props.Mask2 !== undefined)
      this._behaviorData.Mask2 = networkSyncData.props.Mask2;
    if (networkSyncData.props.Mask3 !== undefined)
      this._behaviorData.Mask3 = networkSyncData.props.Mask3;
    if (networkSyncData.props.Mask4 !== undefined)
      this._behaviorData.Mask4 = networkSyncData.props.Mask4;
    if (networkSyncData.props.Mask5 !== undefined)
      this._behaviorData.Mask5 = networkSyncData.props.Mask5;
  }

  // Properties:
  
  _getMass() {
    return this._behaviorData.Mass !== undefined ? this._behaviorData.Mass : Number("1") || 0;
  }
  _setMass(newValue) {
    this._behaviorData.Mass = newValue;
  }
  _getFriction() {
    return this._behaviorData.Friction !== undefined ? this._behaviorData.Friction : Number("0.5") || 0;
  }
  _setFriction(newValue) {
    this._behaviorData.Friction = newValue;
  }
  _getRestitution() {
    return this._behaviorData.Restitution !== undefined ? this._behaviorData.Restitution : Number("0.2") || 0;
  }
  _setRestitution(newValue) {
    this._behaviorData.Restitution = newValue;
  }
  _getLinearDamping() {
    return this._behaviorData.LinearDamping !== undefined ? this._behaviorData.LinearDamping : Number("0") || 0;
  }
  _setLinearDamping(newValue) {
    this._behaviorData.LinearDamping = newValue;
  }
  _getAngularDamping() {
    return this._behaviorData.AngularDamping !== undefined ? this._behaviorData.AngularDamping : Number("0") || 0;
  }
  _setAngularDamping(newValue) {
    this._behaviorData.AngularDamping = newValue;
  }
  _getFixedRotation() {
    return this._behaviorData.FixedRotation !== undefined ? this._behaviorData.FixedRotation : false;
  }
  _setFixedRotation(newValue) {
    this._behaviorData.FixedRotation = newValue;
  }
  _toggleFixedRotation() {
    this._setFixedRotation(!this._getFixedRotation());
  }
  _getSleep() {
    return this._behaviorData.Sleep !== undefined ? this._behaviorData.Sleep : true;
  }
  _setSleep(newValue) {
    this._behaviorData.Sleep = newValue;
  }
  _toggleSleep() {
    this._setSleep(!this._getSleep());
  }
  _getType() {
    return this._behaviorData.Type !== undefined ? this._behaviorData.Type : "Dynamic";
  }
  _setType(newValue) {
    this._behaviorData.Type = newValue;
  }
  _getGroup1() {
    return this._behaviorData.Group1 !== undefined ? this._behaviorData.Group1 : true;
  }
  _setGroup1(newValue) {
    this._behaviorData.Group1 = newValue;
  }
  _toggleGroup1() {
    this._setGroup1(!this._getGroup1());
  }
  _getGroup2() {
    return this._behaviorData.Group2 !== undefined ? this._behaviorData.Group2 : false;
  }
  _setGroup2(newValue) {
    this._behaviorData.Group2 = newValue;
  }
  _toggleGroup2() {
    this._setGroup2(!this._getGroup2());
  }
  _getGroup3() {
    return this._behaviorData.Group3 !== undefined ? this._behaviorData.Group3 : false;
  }
  _setGroup3(newValue) {
    this._behaviorData.Group3 = newValue;
  }
  _toggleGroup3() {
    this._setGroup3(!this._getGroup3());
  }
  _getGroup4() {
    return this._behaviorData.Group4 !== undefined ? this._behaviorData.Group4 : false;
  }
  _setGroup4(newValue) {
    this._behaviorData.Group4 = newValue;
  }
  _toggleGroup4() {
    this._setGroup4(!this._getGroup4());
  }
  _getGroup5() {
    return this._behaviorData.Group5 !== undefined ? this._behaviorData.Group5 : false;
  }
  _setGroup5(newValue) {
    this._behaviorData.Group5 = newValue;
  }
  _toggleGroup5() {
    this._setGroup5(!this._getGroup5());
  }
  _getMask1() {
    return this._behaviorData.Mask1 !== undefined ? this._behaviorData.Mask1 : true;
  }
  _setMask1(newValue) {
    this._behaviorData.Mask1 = newValue;
  }
  _toggleMask1() {
    this._setMask1(!this._getMask1());
  }
  _getMask2() {
    return this._behaviorData.Mask2 !== undefined ? this._behaviorData.Mask2 : false;
  }
  _setMask2(newValue) {
    this._behaviorData.Mask2 = newValue;
  }
  _toggleMask2() {
    this._setMask2(!this._getMask2());
  }
  _getMask3() {
    return this._behaviorData.Mask3 !== undefined ? this._behaviorData.Mask3 : false;
  }
  _setMask3(newValue) {
    this._behaviorData.Mask3 = newValue;
  }
  _toggleMask3() {
    this._setMask3(!this._getMask3());
  }
  _getMask4() {
    return this._behaviorData.Mask4 !== undefined ? this._behaviorData.Mask4 : false;
  }
  _setMask4(newValue) {
    this._behaviorData.Mask4 = newValue;
  }
  _toggleMask4() {
    this._setMask4(!this._getMask4());
  }
  _getMask5() {
    return this._behaviorData.Mask5 !== undefined ? this._behaviorData.Mask5 : false;
  }
  _setMask5(newValue) {
    this._behaviorData.Mask5 = newValue;
  }
  _toggleMask5() {
    this._setMask5(!this._getMask5());
  }
}

/**
 * Shared data generated from Physics 3D Body
 */
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.SharedData = class Physics3DSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._Physics3D_Physics3DSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._Physics3D_Physics3DSharedData = new gdjs.evtsExt__Physics3D__Physics3D.Physics3D.SharedData(
      initialData
    );
  }
  return instanceContainer._Physics3D_Physics3DSharedData;
}

// Methods:
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.onDestroyContext = {};
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.onDestroyContext.GDObjectObjects1= [];


gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.onDestroyContext.userFunc0xc89f08 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const boxBody = objects[0].collider;
const world = runtimeScene.__CannonJS.world;

if (boxBody) {
    world.removeBody(boxBody);
    objects[0].collider = null;
}

};
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.onDestroyContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.onDestroyContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.onDestroyContext.GDObjectObjects1);
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.onDestroyContext.userFunc0xc89f08(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.onDestroy = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.onDestroyContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.onDestroyContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.BoxColliderContext = {};
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.BoxColliderContext.GDObjectObjects1= [];


gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.BoxColliderContext.userFunc0xc89f08 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const scene = runtimeScene.getLayer('').getRenderer().getThreeScene();
const world = runtimeScene.__CannonJS.world;
const objectsArray = runtimeScene.__CannonJS.objects;
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
const behavior = objects[0].getBehavior(behaviorName);

const width = eventsFunctionContext.getArgument("Width") / 2;
const height = eventsFunctionContext.getArgument("Height") / 2;
const depth = eventsFunctionContext.getArgument("Depth") / 2;
const visible = eventsFunctionContext.getArgument("Visible");
const offsetX = eventsFunctionContext.getArgument("OffsetX");
const offsetY = eventsFunctionContext.getArgument("OffsetY");
const offsetZ = eventsFunctionContext.getArgument("OffsetZ");
const type = behavior._getType();

const boxOffset = new CANNON.Vec3(offsetX,offsetY,offsetZ);

if (!objects[0].collider) {


    const boxShape = new CANNON.Box(new CANNON.Vec3(width, height, depth));
    const boxBody = new CANNON.Body({ mass: behavior._getMass() });

    const boxMaterial = new CANNON.Material('slipperyMaterial');
    boxMaterial.friction = behavior._getFriction();
    boxMaterial.restitution = behavior._getRestitution();
    boxBody.material = boxMaterial;

    boxBody.position.set(objects[0].getX(), objects[0].getY(), objects[0].getZ()); 
    boxBody.quaternion.copy(objects[0].get3DRendererObject().quaternion);
    boxBody.fixedRotation = behavior._getFixedRotation();
    boxBody.allowSleep = behavior._getSleep();

    boxBody.linearDamping = behavior._getLinearDamping();
    boxBody.angularDamping = behavior._getAngularDamping();

    if(type == "Dynamic"){
    boxBody.type = CANNON.Body.DYNAMIC;
    }else if(type == "Static"){
    boxBody.type = CANNON.Body.STATIC;
    }else {
    boxBody.type = CANNON.Body.KINEMATIC;
    }

    
    boxBody.collisionFilterGroup = 0;

    if (behavior._getGroup1()) {
        boxBody.collisionFilterGroup |= 1;
    }
    if (behavior._getGroup2()) {
        boxBody.collisionFilterGroup |= 2;
    }
    if (behavior._getGroup3()) {
        boxBody.collisionFilterGroup |= 4;
    }
    if (behavior._getGroup4()) {
        boxBody.collisionFilterGroup |= 8;
    }
    if (behavior._getGroup5()) {
        boxBody.collisionFilterGroup |= 16;
    }

    boxBody.collisionFilterMask = 0;

    if (behavior._getMask1()) {
        boxBody.collisionFilterMask |= 1;
    }
    if (behavior._getMask2()) {
        boxBody.collisionFilterMask |= 2;
    }
    if (behavior._getMask3()) {
        boxBody.collisionFilterMask |= 4;
    }
    if (behavior._getMask4()) {
        boxBody.collisionFilterMask |= 8;
    }
    if (behavior._getMask5()) {
        boxBody.collisionFilterMask |= 16;
    }


    boxBody.addShape(boxShape, boxOffset);
    world.addBody(boxBody);

    objectsArray.push({ object: objects[0], body: boxBody });
    objects[0].collider = boxBody;

    debugCreate();

    
} else {
    const boxBody = objects[0].collider;
    const boxShape = new CANNON.Box(new CANNON.Vec3(width, height, depth));

    boxBody.addShape(boxShape, boxOffset);

    debugCreate();

}

function debugCreate() {
    const boxDebug = new THREE.BoxGeometry(width*2, height*2, depth*2);
    const rgbColorGD = gdjs.rgbOrHexToRGBColor(eventsFunctionContext.getArgument("Color"));
    const rgbColor = new THREE.Color("rgb(" + rgbColorGD[0] + ", " + rgbColorGD[1] + ", " + rgbColorGD[2] + ")")

    const material = new THREE.MeshBasicMaterial({ 
        color: rgbColor, 
        wireframe: true,
        visible: visible 
    });
    const debugMesh = new THREE.Mesh(boxDebug, material);

    boxDebug.translate(offsetX, offsetY, offsetZ);
    debugMesh.position.set(objects[0].getX(), objects[0].getY(), objects[0].getZ());
    debugMesh.quaternion.copy(objects[0].get3DRendererObject().quaternion);
    
    scene.add(debugMesh);
    objects[0].get3DRendererObject().attach(debugMesh);
}
};
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.BoxColliderContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.BoxColliderContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.BoxColliderContext.GDObjectObjects1);
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.BoxColliderContext.userFunc0xc89f08(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.BoxCollider = function(Width, Height, Depth, OffsetX, OffsetY, OffsetZ, Color, Visible, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
if (argName === "Width") return Width;
if (argName === "Height") return Height;
if (argName === "Depth") return Depth;
if (argName === "OffsetX") return OffsetX;
if (argName === "OffsetY") return OffsetY;
if (argName === "OffsetZ") return OffsetZ;
if (argName === "Color") return Color;
if (argName === "Visible") return Visible;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.BoxColliderContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.BoxColliderContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SphereColliderContext = {};
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SphereColliderContext.GDObjectObjects1= [];


gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SphereColliderContext.userFunc0xc89f08 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
    const scene = runtimeScene.getLayer('').getRenderer().getThreeScene();
    const world = runtimeScene.__CannonJS.world;
    const objectsArray = runtimeScene.__CannonJS.objects;
    const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
    const behavior = objects[0].getBehavior(behaviorName);

    const radius = eventsFunctionContext.getArgument("Radius")/2;
    const visible = eventsFunctionContext.getArgument("Visible");
    const offsetX = eventsFunctionContext.getArgument("OffsetX");
    const offsetY = eventsFunctionContext.getArgument("OffsetY");
    const offsetZ = eventsFunctionContext.getArgument("OffsetZ");
    const type = behavior._getType();

    const sphereOffset = new CANNON.Vec3(offsetX * -1,offsetY * -1,offsetZ);

if (!objects[0].collider) {

    const sphereShape = new CANNON.Sphere(radius);
    const sphereBody = new CANNON.Body({ mass: behavior._getMass() });

    const sphereMaterial = new CANNON.Material('slipperyMaterial');
    sphereMaterial.friction = behavior._getFriction();
    sphereMaterial.restitution = behavior._getRestitution();
    sphereBody.material = sphereMaterial;

    sphereBody.position.set(objects[0].getX(), objects[0].getY(), objects[0].getZ());
    sphereBody.quaternion.copy(objects[0].get3DRendererObject().quaternion);
    sphereBody.fixedRotation = behavior._getFixedRotation();
    sphereBody.allowSleep = behavior._getSleep();

    sphereBody.linearDamping = behavior._getLinearDamping();
    sphereBody.angularDamping = behavior._getAngularDamping();

    if(type == "Dynamic"){
    sphereBody.type = CANNON.Body.DYNAMIC;
    }else if(type == "Static"){
    sphereBody.type = CANNON.Body.STATIC;
    }else {
    sphereBody.type = CANNON.Body.KINEMATIC;
    }

    sphereBody.collisionFilterGroup = 0;

    if (behavior._getGroup1()) {
        sphereBody.collisionFilterGroup |= 1;
    }
    if (behavior._getGroup2()) {
        sphereBody.collisionFilterGroup |= 2;
    }
    if (behavior._getGroup3()) {
        sphereBody.collisionFilterGroup |= 4;
    }
    if (behavior._getGroup4()) {
        sphereBody.collisionFilterGroup |= 8;
    }
    if (behavior._getGroup5()) {
        sphereBody.collisionFilterGroup |= 16;
    }

    sphereBody.collisionFilterMask = 0;

    if (behavior._getMask1()) {
        sphereBody.collisionFilterMask |= 1;
    }
    if (behavior._getMask2()) {
        sphereBody.collisionFilterMask |= 2;
    }
    if (behavior._getMask3()) {
        sphereBody.collisionFilterMask |= 4;
    }
    if (behavior._getMask4()) {
        sphereBody.collisionFilterMask |= 8;
    }
    if (behavior._getMask5()) {
        sphereBody.collisionFilterMask |= 16;
    }

    sphereBody.addShape(sphereShape, sphereOffset);
    world.addBody(sphereBody);

    objectsArray.push({ object: objects[0], body: sphereBody });
    objects[0].collider = sphereBody;

    debugCreate();


} else {
    
    const sphereShape = new CANNON.Sphere(radius);
    const sphereBody = objects[0].collider;

    sphereBody.addShape(sphereShape, sphereOffset);

    debugCreate();

}

function debugCreate() {
    const sphereDebug = new THREE.SphereGeometry(radius, 16, 16); 
    const rgbColorGD = gdjs.rgbOrHexToRGBColor(eventsFunctionContext.getArgument("Color"));
    const rgbColor = new THREE.Color("rgb(" + rgbColorGD[0] + ", " + rgbColorGD[1] + ", " + rgbColorGD[2] + ")")

    const material = new THREE.MeshBasicMaterial({ 
        color: rgbColor, 
        wireframe: true,
        visible: visible
    });
    const debugMesh = new THREE.Mesh(sphereDebug, material);

    sphereDebug.rotateX(Math.PI / 2);

    sphereDebug.translate(offsetX, offsetY, offsetZ);
    debugMesh.position.set(objects[0].getX(), objects[0].getY(), objects[0].getZ());
    debugMesh.quaternion.copy(objects[0].get3DRendererObject().quaternion);


    scene.add(debugMesh);
    objects[0].get3DRendererObject().attach(debugMesh);
}

};
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SphereColliderContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SphereColliderContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SphereColliderContext.GDObjectObjects1);
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SphereColliderContext.userFunc0xc89f08(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SphereCollider = function(Radius, OffsetX, OffsetY, OffsetZ, Color, Visible, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
if (argName === "Radius") return Radius;
if (argName === "OffsetX") return OffsetX;
if (argName === "OffsetY") return OffsetY;
if (argName === "OffsetZ") return OffsetZ;
if (argName === "Color") return Color;
if (argName === "Visible") return Visible;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SphereColliderContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SphereColliderContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.CylinderColliderContext = {};
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.CylinderColliderContext.GDObjectObjects1= [];


gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.CylinderColliderContext.userFunc0xc89f08 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
    const scene = runtimeScene.getLayer('').getRenderer().getThreeScene();
    const world = runtimeScene.__CannonJS.world;
    const objectsArray = runtimeScene.__CannonJS.objects;
    const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
    const behavior = objects[0].getBehavior(behaviorName);

    const radius = eventsFunctionContext.getArgument("Radius") / 2;
    const height = eventsFunctionContext.getArgument("Height");
    const segments = eventsFunctionContext.getArgument("Segments");
    const visible = eventsFunctionContext.getArgument("Visible");
    const type = behavior._getType();
    
    const offsetX = eventsFunctionContext.getArgument("OffsetX");
    const offsetY = eventsFunctionContext.getArgument("OffsetY");
    const offsetZ = eventsFunctionContext.getArgument("OffsetZ");
    const cylOffset = new CANNON.Vec3(offsetX,offsetY,offsetZ);

if (!objects[0].collider) {

    const cylShape = new CANNON.Cylinder(radius, radius, height, segments); 
    const cylBody = new CANNON.Body({ mass: behavior._getMass() });

    const cylMaterial = new CANNON.Material('slipperyMaterial');
    cylMaterial.friction = behavior._getFriction();
    cylMaterial.restitution = behavior._getRestitution();
    cylBody.material = cylMaterial;

    cylBody.position.set(objects[0].getX(), objects[0].getY(), objects[0].getZ());
    cylBody.quaternion.copy(objects[0].get3DRendererObject().quaternion);
    cylBody.fixedRotation = behavior._getFixedRotation();
    cylBody.allowSleep = behavior._getSleep();

    cylBody.linearDamping = behavior._getLinearDamping();
    cylBody.angularDamping = behavior._getAngularDamping();

    if(type == "Dynamic"){
    cylBody.type = CANNON.Body.DYNAMIC;
    }else if(type == "Static"){
    cylBody.type = CANNON.Body.STATIC;
    }else {
    cylBody.type = CANNON.Body.KINEMATIC;
    }

    cylBody.collisionFilterGroup = 0;

    if (behavior._getGroup1()) {
        cylBody.collisionFilterGroup |= 1;
    }
    if (behavior._getGroup2()) {
        cylBody.collisionFilterGroup |= 2;
    }
    if (behavior._getGroup3()) {
        cylBody.collisionFilterGroup |= 4;
    }
    if (behavior._getGroup4()) {
        cylBody.collisionFilterGroup |= 8;
    }
    if (behavior._getGroup5()) {
        cylBody.collisionFilterGroup |= 16;
    }

    cylBody.collisionFilterMask = 0;

    if (behavior._getMask1()) {
        cylBody.collisionFilterMask |= 1;
    }
    if (behavior._getMask2()) {
        cylBody.collisionFilterMask |= 2;
    }
    if (behavior._getMask3()) {
        cylBody.collisionFilterMask |= 4;
    }
    if (behavior._getMask4()) {
        cylBody.collisionFilterMask |= 8;
    }
    if (behavior._getMask5()) {
        cylBody.collisionFilterMask |= 16;
    }

    cylBody.addShape(cylShape, cylOffset);
    world.addBody(cylBody);

    objectsArray.push({ object: objects[0], body: cylBody });
    objects[0].collider = cylBody;

    debugCreate();

}else {
    const cylShape = new CANNON.Cylinder(radius, radius, height, segments); 
    const cylBody = objects[0].collider;

    cylBody.addShape(cylShape, cylOffset);

    debugCreate()
}

function debugCreate() {
    const cylDebug  = new THREE.CylinderGeometry(radius,radius,height,segments)
    const rgbColorGD = gdjs.rgbOrHexToRGBColor(eventsFunctionContext.getArgument("Color"));
    const rgbColor = new THREE.Color("rgb(" + rgbColorGD[0] + ", " + rgbColorGD[1] + ", " + rgbColorGD[2] + ")")

    const material = new THREE.MeshBasicMaterial({ 
        color: rgbColor, 
        wireframe: true,
        visible: visible 
    });

    const debugMesh = new THREE.Mesh(cylDebug, material);

    cylDebug.rotateX(Math.PI / 2);

    cylDebug.translate(offsetX, offsetY, offsetZ);
    debugMesh.position.set(objects[0].getX(), objects[0].getY(), objects[0].getZ());
    debugMesh.quaternion.copy(objects[0].get3DRendererObject().quaternion);


   scene.add(debugMesh);
   objects[0].get3DRendererObject().attach(debugMesh);

}

};
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.CylinderColliderContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.CylinderColliderContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.CylinderColliderContext.GDObjectObjects1);
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.CylinderColliderContext.userFunc0xc89f08(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.CylinderCollider = function(Radius, Height, Segments, OffsetX, OffsetY, OffsetZ, Color, Visible, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
if (argName === "Radius") return Radius;
if (argName === "Height") return Height;
if (argName === "Segments") return Segments;
if (argName === "OffsetX") return OffsetX;
if (argName === "OffsetY") return OffsetY;
if (argName === "OffsetZ") return OffsetZ;
if (argName === "Color") return Color;
if (argName === "Visible") return Visible;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.CylinderColliderContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.CylinderColliderContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.CapsuleColliderContext = {};
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.CapsuleColliderContext.GDObjectObjects1= [];


gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.CapsuleColliderContext.userFunc0xc89f08 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
    const scene = runtimeScene.getLayer('').getRenderer().getThreeScene();
    const world = runtimeScene.__CannonJS.world;
    const objectsArray = runtimeScene.__CannonJS.objects;
    const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
    const behavior = objects[0].getBehavior(behaviorName);

    const radius = eventsFunctionContext.getArgument("Radius") / 2;
    const height = eventsFunctionContext.getArgument("Height");
    const massBody = eventsFunctionContext.getArgument("Mass");
    const visible = eventsFunctionContext.getArgument("Visible");
    const type = behavior._getType();

    const offsetX = eventsFunctionContext.getArgument("OffsetX");
    const offsetY = eventsFunctionContext.getArgument("OffsetY");
    const offsetZ = eventsFunctionContext.getArgument("OffsetZ");

    const offsetCenter = new CANNON.Vec3(offsetX,offsetY,offsetZ);
    const offsetTop = new CANNON.Vec3(offsetX, offsetY, (height - radius * 2) / 2  + offsetZ);
    const offsetBottom = new CANNON.Vec3(offsetX, offsetY, (height - radius * 2) / 2 * -1 + offsetZ);
    

if (!objects[0].collider) {

    const cylShape = new CANNON.Cylinder(radius, radius, height-radius, 16);
    const sphereShapeTop = new CANNON.Sphere(radius);
    const sphereShapeBottom = new CANNON.Sphere(radius);

    const cylBody = new CANNON.Body({ mass: behavior._getMass() });

    const cylMaterial = new CANNON.Material('slipperyMaterial');
    cylMaterial.friction = behavior._getFriction();
    cylMaterial.restitution = behavior._getRestitution();
    cylBody.material = cylMaterial;

    cylBody.position.set(objects[0].getX(), objects[0].getY(), objects[0].getZ());
    cylBody.quaternion.copy(objects[0].get3DRendererObject().quaternion);
    cylBody.fixedRotation = behavior._getFixedRotation();
    cylBody.allowSleep = behavior._getSleep();

    cylBody.linearDamping = behavior._getLinearDamping();
    cylBody.angularDamping = behavior._getAngularDamping();

    if(type == "Dynamic"){
    cylBody.type = CANNON.Body.DYNAMIC;
    }else if(type == "Static"){
    cylBody.type = CANNON.Body.STATIC;
    }else {
    cylBody.type = CANNON.Body.KINEMATIC;
    }

    cylBody.collisionFilterGroup = 0;

    if (behavior._getGroup1()) {
        cylBody.collisionFilterGroup |= 1;
    }
    if (behavior._getGroup2()) {
        cylBody.collisionFilterGroup |= 2;
    }
    if (behavior._getGroup3()) {
        cylBody.collisionFilterGroup |= 4;
    }
    if (behavior._getGroup4()) {
        cylBody.collisionFilterGroup |= 8;
    }
    if (behavior._getGroup5()) {
        cylBody.collisionFilterGroup |= 16;
    }

    cylBody.collisionFilterMask = 0;

    if (behavior._getMask1()) {
        cylBody.collisionFilterMask |= 1;
    }
    if (behavior._getMask2()) {
        cylBody.collisionFilterMask |= 2;
    }
    if (behavior._getMask3()) {
        cylBody.collisionFilterMask |= 4;
    }
    if (behavior._getMask4()) {
        cylBody.collisionFilterMask |= 8;
    }
    if (behavior._getMask5()) {
        cylBody.collisionFilterMask |= 16;
    }

    cylBody.addShape(cylShape, offsetCenter);
    cylBody.addShape(sphereShapeTop, offsetTop);
    cylBody.addShape(sphereShapeBottom, offsetBottom);

    world.addBody(cylBody);

    objectsArray.push({ object: objects[0], body: cylBody });
    objects[0].collider = cylBody;

    debugCreate()
    
} else{
    const cylBody = objects[0].collider
    const cylShape = new CANNON.Cylinder(radius, radius, height - radius, 16);
    const sphereShapeTop = new CANNON.Sphere(radius);
    const sphereShapeBottom = new CANNON.Sphere(radius);

    cylBody.addShape(cylShape, offsetCenter);
    cylBody.addShape(sphereShapeTop, offsetTop);
    cylBody.addShape(sphereShapeBottom, offsetBottom);

    debugCreate()
}

function debugCreate() {
    const cylDebug = new THREE.CapsuleGeometry(radius,height-radius*2,3,16)
    const rgbColorGD = gdjs.rgbOrHexToRGBColor(eventsFunctionContext.getArgument("Color"));
    const rgbColor = new THREE.Color("rgb(" + rgbColorGD[0] + ", " + rgbColorGD[1] + ", " + rgbColorGD[2] + ")")

    const material = new THREE.MeshBasicMaterial({ 
        color: rgbColor, 
        wireframe: true,
        visible: visible 
    });
    const debugMesh = new THREE.Mesh(cylDebug, material);
    
    cylDebug.rotateX(Math.PI / 2);
    cylDebug.translate(offsetX, offsetY, offsetZ);
    debugMesh.position.set(objects[0].getX(), objects[0].getY(), objects[0].getZ());
    debugMesh.quaternion.copy(objects[0].get3DRendererObject().quaternion);


   scene.add(debugMesh);
   objects[0].get3DRendererObject().attach(debugMesh);
}

};
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.CapsuleColliderContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.CapsuleColliderContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.CapsuleColliderContext.GDObjectObjects1);
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.CapsuleColliderContext.userFunc0xc89f08(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.CapsuleCollider = function(Radius, Height, OffsetX, OffsetY, OffsetZ, Color, Visible, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
if (argName === "Radius") return Radius;
if (argName === "Height") return Height;
if (argName === "OffsetX") return OffsetX;
if (argName === "OffsetY") return OffsetY;
if (argName === "OffsetZ") return OffsetZ;
if (argName === "Color") return Color;
if (argName === "Visible") return Visible;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.CapsuleColliderContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.CapsuleColliderContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.ImpulseContext = {};
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.ImpulseContext.GDObjectObjects1= [];


gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.ImpulseContext.userFunc0x1836e68 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const boxBody = objects[0].collider;

var comX = eventsFunctionContext.getArgument("ForceX");
var comY = eventsFunctionContext.getArgument("ForceY"); 
var comZ = eventsFunctionContext.getArgument("ForceZ");

var impulseDirection = new CANNON.Vec3(comX, comY, comZ);

if(boxBody){
boxBody.wakeUp();
boxBody.applyImpulse(impulseDirection, boxBody.position);
}
};
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.ImpulseContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.ImpulseContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.ImpulseContext.GDObjectObjects1);
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.ImpulseContext.userFunc0x1836e68(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.Impulse = function(ForceX, ForceY, ForceZ, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
if (argName === "ForceX") return ForceX;
if (argName === "ForceY") return ForceY;
if (argName === "ForceZ") return ForceZ;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.ImpulseContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.ImpulseContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.ImpulseAngleContext = {};
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.ImpulseAngleContext.GDObjectObjects1= [];


gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.ImpulseAngleContext.userFunc0xc89f08 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const boxBody = objects[0].collider;

var impulseForce = eventsFunctionContext.getArgument("Force"); 

var angleXDeg = eventsFunctionContext.getArgument("AngleX");
var angleYDeg = eventsFunctionContext.getArgument("AngleY"); 
var angleZDeg = eventsFunctionContext.getArgument("AngleZ");

var angleX = angleXDeg * (Math.PI / 180);
var angleY = angleYDeg * (Math.PI / 180); 
var angleZ = angleZDeg * (Math.PI / 180); 

var directionX = Math.cos(angleZ) * Math.cos(angleY);
var directionY = Math.sin(angleZ) * Math.cos(angleY);
var directionZ = -Math.sin(angleY);

var impulseDirection = new CANNON.Vec3(directionX, directionY, directionZ);

if(boxBody){
boxBody.wakeUp();
impulseDirection = impulseDirection.scale(impulseForce);
boxBody.applyImpulse(impulseDirection, boxBody.position);
}
};
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.ImpulseAngleContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.ImpulseAngleContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.ImpulseAngleContext.GDObjectObjects1);
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.ImpulseAngleContext.userFunc0xc89f08(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.ImpulseAngle = function(Force, AngleX, AngleY, AngleZ, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
if (argName === "Force") return Force;
if (argName === "AngleX") return AngleX;
if (argName === "AngleY") return AngleY;
if (argName === "AngleZ") return AngleZ;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.ImpulseAngleContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.ImpulseAngleContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.ImpulseFromPointContext = {};
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.ImpulseFromPointContext.GDObjectObjects1= [];


gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.ImpulseFromPointContext.userFunc0xc89f08 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const boxBody = objects[0].collider;

var impulseForce = eventsFunctionContext.getArgument("Force"); 
var posX = eventsFunctionContext.getArgument("X");
var posY = eventsFunctionContext.getArgument("Y"); 
var posZ = eventsFunctionContext.getArgument("Z");
var radiusCheck = eventsFunctionContext.getArgument("IfRadius"); 
var explosionRadius = eventsFunctionContext.getArgument("Radius"); 

var explosionPoint = new CANNON.Vec3(posX, posY, posZ);

var direction = boxBody.position.vsub(explosionPoint);
var distance = direction.length(); 

let scaleFactor = 0; 
let scaledImpulseForce = 0;

if (radiusCheck){
scaleFactor = 1 - Math.min(distance / explosionRadius, 1); 
scaledImpulseForce = impulseForce * scaleFactor;
} else {
scaledImpulseForce = impulseForce;
}

direction.normalize();

boxBody.wakeUp();
var impulse = direction.scale(scaledImpulseForce);
boxBody.applyImpulse(impulse, boxBody.position);

};
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.ImpulseFromPointContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.ImpulseFromPointContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.ImpulseFromPointContext.GDObjectObjects1);
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.ImpulseFromPointContext.userFunc0xc89f08(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.ImpulseFromPoint = function(Force, X, Y, Z, IfRadius, Radius, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
if (argName === "Force") return Force;
if (argName === "X") return X;
if (argName === "Y") return Y;
if (argName === "Z") return Z;
if (argName === "IfRadius") return IfRadius;
if (argName === "Radius") return Radius;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.ImpulseFromPointContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.ImpulseFromPointContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.ForceContext = {};
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.ForceContext.GDObjectObjects1= [];


gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.ForceContext.userFunc0x1836e68 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const boxBody = objects[0].collider;

var comX = eventsFunctionContext.getArgument("ForceX");
var comY = eventsFunctionContext.getArgument("ForceY"); 
var comZ = eventsFunctionContext.getArgument("ForceZ");

var forceDirection = new CANNON.Vec3(comX, comY, comZ);

boxBody.wakeUp();
boxBody.applyForce(forceDirection, boxBody.position);

};
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.ForceContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.ForceContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.ForceContext.GDObjectObjects1);
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.ForceContext.userFunc0x1836e68(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.Force = function(ForceX, ForceY, ForceZ, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
if (argName === "ForceX") return ForceX;
if (argName === "ForceY") return ForceY;
if (argName === "ForceZ") return ForceZ;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.ForceContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.ForceContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.ForceAngleContext = {};
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.ForceAngleContext.GDObjectObjects1= [];


gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.ForceAngleContext.userFunc0xc89f08 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const boxBody = objects[0].collider;

var forceLength = eventsFunctionContext.getArgument("Force"); 

var angleXDeg = eventsFunctionContext.getArgument("AngleX");
var angleYDeg = eventsFunctionContext.getArgument("AngleY"); 
var angleZDeg = eventsFunctionContext.getArgument("AngleZ");

var angleX = angleXDeg * (Math.PI / 180);
var angleY = angleYDeg * (Math.PI / 180); 
var angleZ = angleZDeg * (Math.PI / 180); 

var directionX = Math.cos(angleZ) * Math.cos(angleY);
var directionY = Math.sin(angleZ) * Math.cos(angleY);
var directionZ = -Math.sin(angleY);

var forceDirection = new CANNON.Vec3(directionX, directionY, directionZ);


boxBody.wakeUp();
forceDirection = forceDirection.scale(forceLength);
boxBody.applyForce(forceDirection, boxBody.position);

};
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.ForceAngleContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.ForceAngleContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.ForceAngleContext.GDObjectObjects1);
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.ForceAngleContext.userFunc0xc89f08(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.ForceAngle = function(Force, AngleX, AngleY, AngleZ, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
if (argName === "Force") return Force;
if (argName === "AngleX") return AngleX;
if (argName === "AngleY") return AngleY;
if (argName === "AngleZ") return AngleZ;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.ForceAngleContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.ForceAngleContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.ForceFromPointContext = {};
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.ForceFromPointContext.GDObjectObjects1= [];


gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.ForceFromPointContext.userFunc0xc89f08 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const boxBody = objects[0].collider;

var forceLength = eventsFunctionContext.getArgument("Force"); 
var posX = eventsFunctionContext.getArgument("X");
var posY = eventsFunctionContext.getArgument("Y"); 
var posZ = eventsFunctionContext.getArgument("Z");
var radiusCheck = eventsFunctionContext.getArgument("IfRadius"); 
var explosionRadius = eventsFunctionContext.getArgument("Radius"); 

var explosionPoint = new CANNON.Vec3(posX, posY, posZ);

var direction = boxBody.position.vsub(explosionPoint);
var distance = direction.length(); 

let scaleFactor = 0; 
let scaledForceLenght = 0;

if (radiusCheck){
scaleFactor = 1 - Math.min(distance / explosionRadius, 1); 
scaledForceLenght = forceLength * scaleFactor;
} else {
scaledForceLenght = forceLength;
}

direction.normalize();

boxBody.wakeUp();
var force = direction.scale(scaledForceLenght);
boxBody.applyForce(force, boxBody.position);

};
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.ForceFromPointContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.ForceFromPointContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.ForceFromPointContext.GDObjectObjects1);
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.ForceFromPointContext.userFunc0xc89f08(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.ForceFromPoint = function(Force, X, Y, Z, IfRadius, Radius, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
if (argName === "Force") return Force;
if (argName === "X") return X;
if (argName === "Y") return Y;
if (argName === "Z") return Z;
if (argName === "IfRadius") return IfRadius;
if (argName === "Radius") return Radius;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.ForceFromPointContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.ForceFromPointContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetVelocityContext = {};
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetVelocityContext.GDObjectObjects1= [];


gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetVelocityContext.userFunc0xc89f08 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const body = objects[0].collider;

var newX = eventsFunctionContext.getArgument("X"); 
var newY = eventsFunctionContext.getArgument("Y"); 
var newZ = eventsFunctionContext.getArgument("Z"); 

if(body){
body.wakeUp();
body.velocity.set(newX,newY,newZ);
}
};
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetVelocityContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetVelocityContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetVelocityContext.GDObjectObjects1);
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetVelocityContext.userFunc0xc89f08(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetVelocity = function(X, Y, Z, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
if (argName === "X") return X;
if (argName === "Y") return Y;
if (argName === "Z") return Z;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetVelocityContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetVelocityContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetVelocityAngleContext = {};
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetVelocityAngleContext.GDObjectObjects1= [];


gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetVelocityAngleContext.userFunc0xc89f08 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const body = objects[0].collider;

const angleX = eventsFunctionContext.getArgument("X") * (Math.PI / 180); 
const angleY = eventsFunctionContext.getArgument("Y") * (Math.PI / 180); 
const angleZ = eventsFunctionContext.getArgument("Z") * (Math.PI / 180); 
const speed = eventsFunctionContext.getArgument("Value");

var directionX = Math.cos(angleZ) * Math.cos(angleY);
var directionY = Math.sin(angleZ) * Math.cos(angleY);
var directionZ = -Math.sin(angleY);

if(body){

const direction = new CANNON.Vec3(directionX * speed, directionY * speed, directionZ * speed);

body.wakeUp();
body.velocity.x += direction.x;
body.velocity.y += direction.y;
body.velocity.z += direction.z;

}
};
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetVelocityAngleContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetVelocityAngleContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetVelocityAngleContext.GDObjectObjects1);
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetVelocityAngleContext.userFunc0xc89f08(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetVelocityAngle = function(Value, X, Y, Z, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
if (argName === "Value") return Value;
if (argName === "X") return X;
if (argName === "Y") return Y;
if (argName === "Z") return Z;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetVelocityAngleContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetVelocityAngleContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetVelocityXContext = {};
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetVelocityXContext.GDObjectObjects1= [];


gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetVelocityXContext.userFunc0xc89f08 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const body = objects[0].collider;

var newX = eventsFunctionContext.getArgument("Value"); 

if(body){
body.wakeUp();
body.velocity.x = newX;
}
};
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetVelocityXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetVelocityXContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetVelocityXContext.GDObjectObjects1);
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetVelocityXContext.userFunc0xc89f08(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetVelocityX = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetVelocityXContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetVelocityXContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetVelocityYContext = {};
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetVelocityYContext.GDObjectObjects1= [];


gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetVelocityYContext.userFunc0xc89f08 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const body = objects[0].collider;

var newY = eventsFunctionContext.getArgument("Value"); 

if(body) {
body.wakeUp();
body.velocity.y = newY;
}

};
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetVelocityYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetVelocityYContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetVelocityYContext.GDObjectObjects1);
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetVelocityYContext.userFunc0xc89f08(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetVelocityY = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetVelocityYContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetVelocityYContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetVelocityZContext = {};
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetVelocityZContext.GDObjectObjects1= [];


gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetVelocityZContext.userFunc0xc89f08 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const body = objects[0].collider;

var newZ = eventsFunctionContext.getArgument("Value"); 

if(body){
body.wakeUp();
body.velocity.z = newZ;
}
};
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetVelocityZContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetVelocityZContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetVelocityZContext.GDObjectObjects1);
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetVelocityZContext.userFunc0xc89f08(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetVelocityZ = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetVelocityZContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetVelocityZContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetRotationContext = {};
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetRotationContext.GDObjectObjects1= [];


gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetRotationContext.userFunc0xc89f08 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const body = objects[0].collider;

const angleX = eventsFunctionContext.getArgument("RotationX") * (Math.PI / 180);
const angleY = eventsFunctionContext.getArgument("RotationY") * (Math.PI / 180); 
const angleZ = eventsFunctionContext.getArgument("RotationZ") * (Math.PI / 180); 

const quaternion = new CANNON.Quaternion();
quaternion.setFromEuler(angleX, angleY, angleZ);


if (body) {

    body.quaternion.copy(quaternion);
}


};
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetRotationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetRotationContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetRotationContext.GDObjectObjects1);
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetRotationContext.userFunc0xc89f08(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetRotation = function(RotationX, RotationY, RotationZ, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
if (argName === "RotationX") return RotationX;
if (argName === "RotationY") return RotationY;
if (argName === "RotationZ") return RotationZ;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetRotationContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetRotationContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetPosContext = {};
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetPosContext.GDObjectObjects1= [];


gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetPosContext.userFunc0x1836e68 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const body = objects[0].collider;

var newX = eventsFunctionContext.getArgument("X"); 
var newY = eventsFunctionContext.getArgument("Y"); 
var newZ = eventsFunctionContext.getArgument("Z"); 

if(body){
body.position.set(newX,newY,newZ);
}
};
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetPosContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetPosContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetPosContext.GDObjectObjects1);
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetPosContext.userFunc0x1836e68(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetPos = function(X, Y, Z, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
if (argName === "X") return X;
if (argName === "Y") return Y;
if (argName === "Z") return Z;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetPosContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetPosContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetXContext = {};
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetXContext.GDObjectObjects1= [];


gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetXContext.userFunc0x1836e68 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const body = objects[0].collider;
var newX = eventsFunctionContext.getArgument("X"); 

if(body){
body.position.x = newX;
}
};
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetXContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetXContext.GDObjectObjects1);
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetXContext.userFunc0x1836e68(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetX = function(X, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
if (argName === "X") return X;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetXContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetXContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetYContext = {};
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetYContext.GDObjectObjects1= [];


gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetYContext.userFunc0x1836e68 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const body = objects[0].collider;
var newY = eventsFunctionContext.getArgument("Y"); 

if(body){
body.position.y = newY;
}
};
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetYContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetYContext.GDObjectObjects1);
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetYContext.userFunc0x1836e68(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetY = function(Y, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
if (argName === "Y") return Y;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetYContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetYContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetZContext = {};
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetZContext.GDObjectObjects1= [];


gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetZContext.userFunc0x1836e68 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const body = objects[0].collider;
var newZ = eventsFunctionContext.getArgument("Z"); 

if(body){
body.position.z = newZ;
}
};
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetZContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetZContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetZContext.GDObjectObjects1);
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetZContext.userFunc0x1836e68(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetZ = function(Z, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
if (argName === "Z") return Z;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetZContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetZContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SleepContext = {};
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SleepContext.GDObjectObjects1= [];


gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SleepContext.userFunc0x1836e68 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const body = objects[0].collider;

if (body) {
    body.sleep()
}

};
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SleepContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SleepContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SleepContext.GDObjectObjects1);
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SleepContext.userFunc0x1836e68(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.Sleep = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SleepContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SleepContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetAllowSleepContext = {};
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetAllowSleepContext.GDObjectObjects1= [];


gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetAllowSleepContext.userFunc0xc89f08 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const body = objects[0].collider;

if (body) {
    body.allowSleep = eventsFunctionContext.getArgument("Value")
}

};
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetAllowSleepContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetAllowSleepContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetAllowSleepContext.GDObjectObjects1);
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetAllowSleepContext.userFunc0xc89f08(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetAllowSleep = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetAllowSleepContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetAllowSleepContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.WakeupContext = {};
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.WakeupContext.GDObjectObjects1= [];


gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.WakeupContext.userFunc0x1836e68 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const body = objects[0].collider;

if (body) {
    body.wakeUp()
}

};
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.WakeupContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.WakeupContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.WakeupContext.GDObjectObjects1);
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.WakeupContext.userFunc0x1836e68(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.Wakeup = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.WakeupContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.WakeupContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.DelColliderContext = {};
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.DelColliderContext.GDObjectObjects1= [];


gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.DelColliderContext.userFunc0xc89f08 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const boxBody = objects[0].collider;
const world = runtimeScene.__CannonJS.world;

if (boxBody) {
    world.removeBody(boxBody);
    objects[0].collider = null;
}

};
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.DelColliderContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.DelColliderContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.DelColliderContext.GDObjectObjects1);
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.DelColliderContext.userFunc0xc89f08(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.DelCollider = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.DelColliderContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.DelColliderContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.RigidConstraintContext = {};
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.RigidConstraintContext.GDObjectObjects1= [];
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.RigidConstraintContext.GDObject2Objects1= [];


gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.RigidConstraintContext.userFunc0x17fa938 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const object2 = eventsFunctionContext.getObjects("Object2");
const bodyA = objects[0].collider;
const bodyB = object2[0].collider;

const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
const behavior = object2[0].getBehavior(behaviorName);

const world = runtimeScene.__CannonJS.world;

if(behavior){
    var constraint = new CANNON.LockConstraint(bodyA, bodyB, {
    maxForce: eventsFunctionContext.getArgument("MaxForce")
});

world.addConstraint(constraint);
}

};
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.RigidConstraintContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.RigidConstraintContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.RigidConstraintContext.GDObjectObjects1);
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.RigidConstraintContext.userFunc0x17fa938(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.RigidConstraint = function(Object2, MaxForce, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Object2": Object2
},
  _objectArraysMap: {
"Object": thisObjectList
, "Object2": gdjs.objectsListsToArray(Object2)
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
if (argName === "MaxForce") return MaxForce;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.RigidConstraintContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.RigidConstraintContext.GDObject2Objects1.length = 0;

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.RigidConstraintContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.HingeConstraintContext = {};
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.HingeConstraintContext.GDObjectObjects1= [];
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.HingeConstraintContext.GDObject2Objects1= [];


gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.HingeConstraintContext.userFunc0xc89f08 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const object2 = eventsFunctionContext.getObjects("Object2");
const bodyA = objects[0].collider;
const bodyB = object2[0].collider;

const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
const behavior = object2[0].getBehavior(behaviorName);

const world = runtimeScene.__CannonJS.world;

if(behavior){

const pivotXA = eventsFunctionContext.getArgument("PivotX1");
const pivotYA = eventsFunctionContext.getArgument("PivotY1");
const pivotZA = eventsFunctionContext.getArgument("PivotZ1");
const axisInfoA = eventsFunctionContext.getArgument("Axis1");
let axisA = 0;

if (axisInfoA == "X"){
    axisA = new CANNON.Vec3(1, 0, 0)
}else if (axisInfoA == "Y"){
    axisA = new CANNON.Vec3(0, 1, 0)
}else if (axisInfoA == "Z"){
    axisA = new CANNON.Vec3(0, 0, 1)
}else{
    axisA = new CANNON.Vec3(0, 0, 0)
}

const pivotXB = eventsFunctionContext.getArgument("PivotX2");
const pivotYB = eventsFunctionContext.getArgument("PivotY2");
const pivotZB = eventsFunctionContext.getArgument("PivotZ2");
const axisInfoB = eventsFunctionContext.getArgument("Axis2");
let axisB = 0;

if (axisInfoB == "X"){
    axisB = new CANNON.Vec3(1, 0, 0)
}else if (axisInfoB == "Y"){
    axisB = new CANNON.Vec3(0, 1, 0)
}else if (axisInfoB == "Z"){
    axisB = new CANNON.Vec3(0, 0, 1)
}else{
    axisB = new CANNON.Vec3(0, 0, 0)
}

var hingeConstraint = new CANNON.HingeConstraint(bodyA, bodyB, {
    collideConnected: false,
    pivotA: new CANNON.Vec3(pivotXA, pivotYA, pivotZA), 
    pivotB: new CANNON.Vec3(pivotXB, pivotYB, pivotZB), 
    axisA: axisA,
    axisB: axisB,
    maxForce: eventsFunctionContext.getArgument("MaxForce")
});


world.addConstraint(hingeConstraint);
}

};
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.HingeConstraintContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.HingeConstraintContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.HingeConstraintContext.GDObjectObjects1);
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.HingeConstraintContext.userFunc0xc89f08(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.HingeConstraint = function(PivotX1, PivotY1, PivotZ1, Axis1, Object2, PivotX2, PivotY2, PivotZ2, Axis2, MaxForce, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Object2": Object2
},
  _objectArraysMap: {
"Object": thisObjectList
, "Object2": gdjs.objectsListsToArray(Object2)
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
if (argName === "PivotX1") return PivotX1;
if (argName === "PivotY1") return PivotY1;
if (argName === "PivotZ1") return PivotZ1;
if (argName === "Axis1") return Axis1;
if (argName === "PivotX2") return PivotX2;
if (argName === "PivotY2") return PivotY2;
if (argName === "PivotZ2") return PivotZ2;
if (argName === "Axis2") return Axis2;
if (argName === "MaxForce") return MaxForce;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.HingeConstraintContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.HingeConstraintContext.GDObject2Objects1.length = 0;

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.HingeConstraintContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetMassContext = {};
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetMassContext.GDObjectObjects1= [];


gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetMassContext.userFunc0x1836e68 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const body = objects[0].collider;

if(body){
body.mass = eventsFunctionContext.getArgument("Value");
}

};
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetMassContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetMassContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetMassContext.GDObjectObjects1);
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetMassContext.userFunc0x1836e68(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetMass = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetMassContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetMassContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetFrictionContext = {};
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetFrictionContext.GDObjectObjects1= [];


gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetFrictionContext.userFunc0xc89f08 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const body = objects[0].collider;

if(body){
body.friction = eventsFunctionContext.getArgument("Value");
}

};
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetFrictionContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetFrictionContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetFrictionContext.GDObjectObjects1);
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetFrictionContext.userFunc0xc89f08(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetFriction = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetFrictionContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetFrictionContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetRestitutionContext = {};
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetRestitutionContext.GDObjectObjects1= [];


gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetRestitutionContext.userFunc0xc89f08 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const body = objects[0].collider;

if(body){
body.restitution = eventsFunctionContext.getArgument("Value");
}

};
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetRestitutionContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetRestitutionContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetRestitutionContext.GDObjectObjects1);
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetRestitutionContext.userFunc0xc89f08(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetRestitution = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetRestitutionContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetRestitutionContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetTypeContext = {};
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetTypeContext.GDObjectObjects1= [];


gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetTypeContext.userFunc0x1836e68 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const body = objects[0].collider;

if(body){
body.type = eventsFunctionContext.getArgument("Value");
}

};
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetTypeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetTypeContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetTypeContext.GDObjectObjects1);
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetTypeContext.userFunc0x1836e68(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetType = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetTypeContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetTypeContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetAngDamplingContext = {};
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetAngDamplingContext.GDObjectObjects1= [];


gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetAngDamplingContext.userFunc0xc89f08 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const body = objects[0].collider;

if(body){
body.angularDamping = eventsFunctionContext.getArgument("Value");
}

};
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetAngDamplingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetAngDamplingContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetAngDamplingContext.GDObjectObjects1);
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetAngDamplingContext.userFunc0xc89f08(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetAngDampling = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetAngDamplingContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetAngDamplingContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetLinDamplingContext = {};
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetLinDamplingContext.GDObjectObjects1= [];


gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetLinDamplingContext.userFunc0xc89f08 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const body = objects[0].collider;

if(body){
body.linearDamping = eventsFunctionContext.getArgument("Value");
}

};
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetLinDamplingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetLinDamplingContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetLinDamplingContext.GDObjectObjects1);
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetLinDamplingContext.userFunc0xc89f08(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetLinDampling = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetLinDamplingContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetLinDamplingContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetFixedRotationContext = {};
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetFixedRotationContext.GDObjectObjects1= [];


gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetFixedRotationContext.userFunc0xc89f08 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const body = objects[0].collider;

if(body){
body.fixedRotation = eventsFunctionContext.getArgument("Value");
}

};
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetFixedRotationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetFixedRotationContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetFixedRotationContext.GDObjectObjects1);
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetFixedRotationContext.userFunc0xc89f08(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetFixedRotation = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetFixedRotationContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetFixedRotationContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetLayersContext = {};
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetLayersContext.GDObjectObjects1= [];
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetLayersContext.GDObjectObjects2= [];
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetLayersContext.GDObjectObjects3= [];


gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetLayersContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Activate") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetLayersContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetLayersContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetLayersContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setGroup1(true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Activate") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetLayersContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetLayersContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetLayersContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setGroup1(false);
}
}}

}


};gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetLayersContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Activate") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetLayersContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetLayersContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetLayersContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setGroup2(true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Activate") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetLayersContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetLayersContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetLayersContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setGroup2(false);
}
}}

}


};gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetLayersContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Activate") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetLayersContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetLayersContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetLayersContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setGroup3(true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Activate") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetLayersContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetLayersContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetLayersContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setGroup3(false);
}
}}

}


};gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetLayersContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Activate") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetLayersContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetLayersContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetLayersContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setGroup4(true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Activate") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetLayersContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetLayersContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetLayersContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setGroup4(false);
}
}}

}


};gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetLayersContext.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Activate") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetLayersContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetLayersContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetLayersContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setGroup5(true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Activate") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetLayersContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetLayersContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetLayersContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setGroup5(false);
}
}}

}


};gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetLayersContext.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Layer") : "") == "Layer #1");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetLayersContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Layer") : "") == "Layer #2");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetLayersContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Layer") : "") == "Layer #3");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetLayersContext.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Layer") : "") == "Layer #4");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetLayersContext.eventsList3(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Layer") : "") == "Layer #5");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetLayersContext.eventsList4(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetLayers = function(Layer, Activate, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
if (argName === "Layer") return Layer;
if (argName === "Activate") return Activate;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetLayersContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetLayersContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetLayersContext.GDObjectObjects3.length = 0;

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetLayersContext.eventsList5(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetMaskContext = {};
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetMaskContext.GDObjectObjects1= [];
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetMaskContext.GDObjectObjects2= [];
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetMaskContext.GDObjectObjects3= [];


gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetMaskContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Activate") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetMaskContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetMaskContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetMaskContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setMask1(true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Activate") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetMaskContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetMaskContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetMaskContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setMask1(false);
}
}}

}


};gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetMaskContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Activate") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetMaskContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetMaskContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetMaskContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setMask2(true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Activate") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetMaskContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetMaskContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetMaskContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setMask2(false);
}
}}

}


};gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetMaskContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Activate") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetMaskContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetMaskContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetMaskContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setMask3(true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Activate") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetMaskContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetMaskContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetMaskContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setMask3(false);
}
}}

}


};gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetMaskContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Activate") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetMaskContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetMaskContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetMaskContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setMask4(true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Activate") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetMaskContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetMaskContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetMaskContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setMask4(false);
}
}}

}


};gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetMaskContext.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Activate") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetMaskContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetMaskContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetMaskContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setMask5(true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Activate") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetMaskContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetMaskContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetMaskContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setMask5(false);
}
}}

}


};gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetMaskContext.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Mask") : "") == "Mask #1");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetMaskContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Mask") : "") == "Mask #2");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetMaskContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Mask") : "") == "Mask #3");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetMaskContext.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Mask") : "") == "Mask #4");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetMaskContext.eventsList3(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Mask") : "") == "Mask #5");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetMaskContext.eventsList4(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetMask = function(Mask, Activate, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
if (argName === "Mask") return Mask;
if (argName === "Activate") return Activate;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetMaskContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetMaskContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetMaskContext.GDObjectObjects3.length = 0;

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.SetMaskContext.eventsList5(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.CollisionContext = {};
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.CollisionContext.GDObjectObjects1= [];
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.CollisionContext.GDObject2Objects1= [];


gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.CollisionContext.userFunc0xc89f08 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const world = runtimeScene.__CannonJS.world;

const objects2 = eventsFunctionContext.getObjects("Object2");

var bodyA = objects[0].collider;
var bodyB = objects2[0].collider;

if(bodyA && bodyB){
var contacts = [];
world.narrowphase.getContacts([bodyA], [bodyB], world, contacts, [], [], []);

if (contacts.length > 0) {
    eventsFunctionContext.returnValue = true;
}}

};
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.CollisionContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.CollisionContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.CollisionContext.GDObjectObjects1);
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.CollisionContext.userFunc0xc89f08(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.Collision = function(Object2, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Object2": Object2
},
  _objectArraysMap: {
"Object": thisObjectList
, "Object2": gdjs.objectsListsToArray(Object2)
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.CollisionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.CollisionContext.GDObject2Objects1.length = 0;

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.CollisionContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.IsSleepContext = {};
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.IsSleepContext.GDObjectObjects1= [];


gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.IsSleepContext.userFunc0x1836e68 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
var body = objects[0].collider;

if(body && body.sleepState === CANNON.Body.SLEEPING){
    eventsFunctionContext.returnValue = true;
}

};
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.IsSleepContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.IsSleepContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.IsSleepContext.GDObjectObjects1);
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.IsSleepContext.userFunc0x1836e68(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.IsSleep = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.IsSleepContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.IsSleepContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.XVelocityContext = {};
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.XVelocityContext.GDObjectObjects1= [];


gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.XVelocityContext.userFunc0xc89f08 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const boxBody = objects[0].collider;
if(boxBody){
const xVel = boxBody.velocity.x;
eventsFunctionContext.returnValue = xVel;
}


};
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.XVelocityContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.XVelocityContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.XVelocityContext.GDObjectObjects1);
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.XVelocityContext.userFunc0xc89f08(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.XVelocity = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.XVelocityContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.XVelocityContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.YVelocityContext = {};
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.YVelocityContext.GDObjectObjects1= [];


gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.YVelocityContext.userFunc0xc89f08 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const boxBody = objects[0].collider;
if(boxBody){
const yVel = boxBody.velocity.y;
eventsFunctionContext.returnValue = yVel;
}


};
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.YVelocityContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.YVelocityContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.YVelocityContext.GDObjectObjects1);
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.YVelocityContext.userFunc0xc89f08(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.YVelocity = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.YVelocityContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.YVelocityContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.ZVelocityContext = {};
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.ZVelocityContext.GDObjectObjects1= [];


gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.ZVelocityContext.userFunc0xc89f08 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const boxBody = objects[0].collider;
if(boxBody){
const zVel = boxBody.velocity.z;
eventsFunctionContext.returnValue = zVel;
}


};
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.ZVelocityContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.ZVelocityContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.ZVelocityContext.GDObjectObjects1);
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.ZVelocityContext.userFunc0xc89f08(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.ZVelocity = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.ZVelocityContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.ZVelocityContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.MassContext = {};
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.MassContext.GDObjectObjects1= [];


gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.MassContext.userFunc0x1836e68 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const body = objects[0].collider;
if(body){
const value = body.mass;
eventsFunctionContext.returnValue = value;
}


};
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.MassContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.MassContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.MassContext.GDObjectObjects1);
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.MassContext.userFunc0x1836e68(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.Mass = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.MassContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.MassContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.FrictionContext = {};
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.FrictionContext.GDObjectObjects1= [];


gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.FrictionContext.userFunc0x1836e68 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const body = objects[0].collider;
if(body){
const value = body.friction;
eventsFunctionContext.returnValue = value;
}


};
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.FrictionContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.FrictionContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.FrictionContext.GDObjectObjects1);
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.FrictionContext.userFunc0x1836e68(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.Friction = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.FrictionContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.FrictionContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.RestitutionContext = {};
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.RestitutionContext.GDObjectObjects1= [];


gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.RestitutionContext.userFunc0xc89f08 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const body = objects[0].collider;
if(body){
const value = body.restitution;
eventsFunctionContext.returnValue = value;
}


};
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.RestitutionContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.RestitutionContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.RestitutionContext.GDObjectObjects1);
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.RestitutionContext.userFunc0xc89f08(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.Restitution = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.RestitutionContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.RestitutionContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.AngularDampingContext = {};
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.AngularDampingContext.GDObjectObjects1= [];


gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.AngularDampingContext.userFunc0xc89f08 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const body = objects[0].collider;
if(body){
const value = body.angularDamping;
eventsFunctionContext.returnValue = value;
}


};
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.AngularDampingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.AngularDampingContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.AngularDampingContext.GDObjectObjects1);
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.AngularDampingContext.userFunc0xc89f08(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.AngularDamping = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.AngularDampingContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.AngularDampingContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.LinearDampingContext = {};
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.LinearDampingContext.GDObjectObjects1= [];


gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.LinearDampingContext.userFunc0xc89f08 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const body = objects[0].collider;
if(body){
const value = body.linearDamping;
eventsFunctionContext.returnValue = value;
}


};
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.LinearDampingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.LinearDampingContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.LinearDampingContext.GDObjectObjects1);
gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.LinearDampingContext.userFunc0xc89f08(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.LinearDamping = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.LinearDampingContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.LinearDampingContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__Physics3D__Physics3D.Physics3D.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("Physics3D::Physics3D", gdjs.evtsExt__Physics3D__Physics3D.Physics3D);
