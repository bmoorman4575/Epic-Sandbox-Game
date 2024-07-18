
gdjs.evtsExt__Physics3D__PhysicsControl = gdjs.evtsExt__Physics3D__PhysicsControl || {};

/**
 * Behavior generated from Physics control
 */
gdjs.evtsExt__Physics3D__PhysicsControl.PhysicsControl = class PhysicsControl extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__Physics3D__PhysicsControl.PhysicsControl.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    

    return true;
  }

  // Network sync:
  getNetworkSyncData() {
    return {
      ...super.getNetworkSyncData(),
      props: {
        
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData) {
    super.updateFromNetworkSyncData(networkSyncData);
    
  }

  // Properties:
  
}

/**
 * Shared data generated from Physics control
 */
gdjs.evtsExt__Physics3D__PhysicsControl.PhysicsControl.SharedData = class PhysicsControlSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__Physics3D__PhysicsControl.PhysicsControl.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._Physics3D_PhysicsControlSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._Physics3D_PhysicsControlSharedData = new gdjs.evtsExt__Physics3D__PhysicsControl.PhysicsControl.SharedData(
      initialData
    );
  }
  return instanceContainer._Physics3D_PhysicsControlSharedData;
}

// Methods:
gdjs.evtsExt__Physics3D__PhysicsControl.PhysicsControl.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__Physics3D__PhysicsControl.PhysicsControl.prototype.doStepPreEventsContext.GDObjectObjects1= [];


gdjs.evtsExt__Physics3D__PhysicsControl.PhysicsControl.prototype.doStepPreEventsContext.userFunc0x1273b08 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const boxBody = objects[0].collider; 

if (boxBody) {
    const dampingFactor = 0;
    
    if (boxBody.velocity.x !== 0 || boxBody.velocity.y !== 0) {
        const velocityX = boxBody.velocity.x * dampingFactor;
        const velocityY = boxBody.velocity.y * dampingFactor;
        boxBody.velocity.set(velocityX, velocityY, boxBody.velocity.z);
    }
}

};
gdjs.evtsExt__Physics3D__PhysicsControl.PhysicsControl.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Physics3D__PhysicsControl.PhysicsControl.prototype.doStepPreEventsContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Physics3D__PhysicsControl.PhysicsControl.prototype.doStepPreEventsContext.GDObjectObjects1);
gdjs.evtsExt__Physics3D__PhysicsControl.PhysicsControl.prototype.doStepPreEventsContext.userFunc0x1273b08(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Physics3D__PhysicsControl.PhysicsControl.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
this._onceTriggers.startNewFrame();
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

gdjs.evtsExt__Physics3D__PhysicsControl.PhysicsControl.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__Physics3D__PhysicsControl.PhysicsControl.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Physics3D__PhysicsControl.PhysicsControl.prototype.MovePlayerContext = {};
gdjs.evtsExt__Physics3D__PhysicsControl.PhysicsControl.prototype.MovePlayerContext.GDObjectObjects1= [];


gdjs.evtsExt__Physics3D__PhysicsControl.PhysicsControl.prototype.MovePlayerContext.userFunc0xf87898 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const boxBody = objects[0].collider;

const moveDistance = eventsFunctionContext.getArgument("Speed");
const angleDeg = eventsFunctionContext.getArgument("Angle");

const angleRad = angleDeg * (Math.PI / 180);

if(boxBody){
const directionX = Math.cos(angleRad);
const directionY = Math.sin(angleRad);
const direction = new CANNON.Vec3(directionX * moveDistance, directionY * moveDistance, 0);
boxBody.wakeUp();
boxBody.velocity.x += direction.x;
boxBody.velocity.y += direction.y;

const maxSpeed = moveDistance;

if (boxBody.velocity.length() > maxSpeed) {
    const velocityXY = new CANNON.Vec3(boxBody.velocity.x, boxBody.velocity.y, 0);
    velocityXY.normalize();
    boxBody.velocity.x = velocityXY.x * maxSpeed;
    boxBody.velocity.y = velocityXY.y * maxSpeed;
}
}
};
gdjs.evtsExt__Physics3D__PhysicsControl.PhysicsControl.prototype.MovePlayerContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Physics3D__PhysicsControl.PhysicsControl.prototype.MovePlayerContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Physics3D__PhysicsControl.PhysicsControl.prototype.MovePlayerContext.GDObjectObjects1);
gdjs.evtsExt__Physics3D__PhysicsControl.PhysicsControl.prototype.MovePlayerContext.userFunc0xf87898(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Physics3D__PhysicsControl.PhysicsControl.prototype.MovePlayer = function(Speed, Angle, parentEventsFunctionContext) {

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
if (argName === "Speed") return Speed;
if (argName === "Angle") return Angle;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Physics3D__PhysicsControl.PhysicsControl.prototype.MovePlayerContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__Physics3D__PhysicsControl.PhysicsControl.prototype.MovePlayerContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Physics3D__PhysicsControl.PhysicsControl.prototype.JumpContext = {};
gdjs.evtsExt__Physics3D__PhysicsControl.PhysicsControl.prototype.JumpContext.GDObjectObjects1= [];


gdjs.evtsExt__Physics3D__PhysicsControl.PhysicsControl.prototype.JumpContext.userFunc0x1386f48 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const boxBody = objects[0].collider;
const moveDistance = eventsFunctionContext.getArgument("Speed"); 
boxBody.wakeUp();
boxBody.velocity.z = moveDistance;

};
gdjs.evtsExt__Physics3D__PhysicsControl.PhysicsControl.prototype.JumpContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Physics3D__PhysicsControl.PhysicsControl.prototype.JumpContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Physics3D__PhysicsControl.PhysicsControl.prototype.JumpContext.GDObjectObjects1);
gdjs.evtsExt__Physics3D__PhysicsControl.PhysicsControl.prototype.JumpContext.userFunc0x1386f48(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Physics3D__PhysicsControl.PhysicsControl.prototype.Jump = function(Speed, parentEventsFunctionContext) {

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
if (argName === "Speed") return Speed;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Physics3D__PhysicsControl.PhysicsControl.prototype.JumpContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__Physics3D__PhysicsControl.PhysicsControl.prototype.JumpContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}


gdjs.registerBehavior("Physics3D::PhysicsControl", gdjs.evtsExt__Physics3D__PhysicsControl.PhysicsControl);
