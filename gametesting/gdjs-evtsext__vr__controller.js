
gdjs.evtsExt__VR__Controller = gdjs.evtsExt__VR__Controller || {};

/**
 * Behavior generated from Controller
 */
gdjs.evtsExt__VR__Controller.Controller = class Controller extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__VR__Controller.Controller.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.Controller = behaviorData.Controller !== undefined ? behaviorData.Controller : "left";
    this._behaviorData.Capacity3D = behaviorData.Capacity3D !== undefined ? behaviorData.Capacity3D : "";
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.Controller !== newBehaviorData.Controller)
      this._behaviorData.Controller = newBehaviorData.Controller;
    if (oldBehaviorData.Capacity3D !== newBehaviorData.Capacity3D)
      this._behaviorData.Capacity3D = newBehaviorData.Capacity3D;

    return true;
  }

  // Network sync:
  getNetworkSyncData() {
    return {
      ...super.getNetworkSyncData(),
      props: {
        
    Controller: this._behaviorData.Controller,
    Capacity3D: this._behaviorData.Capacity3D,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData) {
    super.updateFromNetworkSyncData(networkSyncData);
    
    if (networkSyncData.props.Controller !== undefined)
      this._behaviorData.Controller = networkSyncData.props.Controller;
    if (networkSyncData.props.Capacity3D !== undefined)
      this._behaviorData.Capacity3D = networkSyncData.props.Capacity3D;
  }

  // Properties:
  
  _getController() {
    return this._behaviorData.Controller !== undefined ? this._behaviorData.Controller : "left";
  }
  _setController(newValue) {
    this._behaviorData.Controller = newValue;
  }
  _getCapacity3D() {
    return this._behaviorData.Capacity3D !== undefined ? this._behaviorData.Capacity3D : "";
  }
  _setCapacity3D(newValue) {
    this._behaviorData.Capacity3D = newValue;
  }
}

/**
 * Shared data generated from Controller
 */
gdjs.evtsExt__VR__Controller.Controller.SharedData = class ControllerSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__VR__Controller.Controller.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._VR_ControllerSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._VR_ControllerSharedData = new gdjs.evtsExt__VR__Controller.Controller.SharedData(
      initialData
    );
  }
  return instanceContainer._VR_ControllerSharedData;
}

// Methods:
gdjs.evtsExt__VR__Controller.Controller.prototype.onCreatedContext = {};
gdjs.evtsExt__VR__Controller.Controller.prototype.onCreatedContext.GDObjectObjects1= [];


gdjs.evtsExt__VR__Controller.Controller.prototype.onCreatedContext.userFunc0x1be3f50 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const object = objects[0];
const behavior = object.getBehavior(eventsFunctionContext.getBehaviorName("Behavior"));
const threeRenderer = runtimeScene.getGame().getRenderer().getThreeRenderer();
const renderObject = object.get3DRendererObject();

behavior.controller = gdjs.vr[behavior._getController()].grip;
behavior.mirror = new THREE.Group();
behavior.mirror.scale.y = -1
behavior.mirror.add(renderObject);
behavior.controller.add(behavior.mirror);

};
gdjs.evtsExt__VR__Controller.Controller.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__VR__Controller.Controller.prototype.onCreatedContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__VR__Controller.Controller.prototype.onCreatedContext.GDObjectObjects1);
gdjs.evtsExt__VR__Controller.Controller.prototype.onCreatedContext.userFunc0x1be3f50(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__VR__Controller.Controller.prototype.onCreated = function(parentEventsFunctionContext) {

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
, "Capacity3D": this._getCapacity3D()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("VR"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("VR"),
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

gdjs.evtsExt__VR__Controller.Controller.prototype.onCreatedContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__VR__Controller.Controller.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__VR__Controller.Controller.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__VR__Controller.Controller.prototype.doStepPreEventsContext.GDObjectObjects1= [];


gdjs.evtsExt__VR__Controller.Controller.prototype.doStepPreEventsContext.userFunc0xc34228 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const object = objects[0];
const behavior = object.getBehavior(eventsFunctionContext.getBehaviorName("Behavior"));
/** @type {gdjs.Base3DBehavior} */
const b3d = object.getBehavior(eventsFunctionContext.getBehaviorName("Capacity3D"));
{
    const { x, y, z } = behavior.controller.position;
    object.setPosition(x, y);
    b3d.setZ(z)
}
{
    const { x, y, z } = behavior.controller.rotation;
    object.setAngle(z);
    b3d.setRotationX(x);
    b3d.setRotationY(y);
}


};
gdjs.evtsExt__VR__Controller.Controller.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__VR__Controller.Controller.prototype.doStepPreEventsContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__VR__Controller.Controller.prototype.doStepPreEventsContext.GDObjectObjects1);
gdjs.evtsExt__VR__Controller.Controller.prototype.doStepPreEventsContext.userFunc0xc34228(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__VR__Controller.Controller.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
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
, "Capacity3D": this._getCapacity3D()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("VR"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("VR"),
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

gdjs.evtsExt__VR__Controller.Controller.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__VR__Controller.Controller.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__VR__Controller.Controller.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__VR__Controller.Controller.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__VR__Controller.Controller.prototype.doStepPostEventsContext.GDObjectObjects2= [];


gdjs.evtsExt__VR__Controller.Controller.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__VR__Controller.Controller.prototype.doStepPostEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__VR__Controller.Controller.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__VR__Controller.Controller.prototype.doStepPostEventsContext.GDObjectObjects1[i].setPosition(0,0);
}
}{for(var i = 0, len = gdjs.evtsExt__VR__Controller.Controller.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__VR__Controller.Controller.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Capacity3D")).setZ(0);
}
}{for(var i = 0, len = gdjs.evtsExt__VR__Controller.Controller.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__VR__Controller.Controller.prototype.doStepPostEventsContext.GDObjectObjects1[i].setAngle(0);
}
}{for(var i = 0, len = gdjs.evtsExt__VR__Controller.Controller.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__VR__Controller.Controller.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Capacity3D")).setRotationX(0);
}
}{for(var i = 0, len = gdjs.evtsExt__VR__Controller.Controller.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__VR__Controller.Controller.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Capacity3D")).setRotationY(0);
}
}}

}


};

gdjs.evtsExt__VR__Controller.Controller.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

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
, "Capacity3D": this._getCapacity3D()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("VR"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("VR"),
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

gdjs.evtsExt__VR__Controller.Controller.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__VR__Controller.Controller.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__VR__Controller.Controller.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__VR__Controller.Controller.prototype.onDestroyContext = {};
gdjs.evtsExt__VR__Controller.Controller.prototype.onDestroyContext.GDObjectObjects1= [];


gdjs.evtsExt__VR__Controller.Controller.prototype.onDestroyContext.userFunc0x1be3f50 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const object = objects[0];
const behavior = object.getBehavior(eventsFunctionContext.getBehaviorName("Behavior"));
behavior.mirror.removeFromParent();

};
gdjs.evtsExt__VR__Controller.Controller.prototype.onDestroyContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__VR__Controller.Controller.prototype.onDestroyContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__VR__Controller.Controller.prototype.onDestroyContext.GDObjectObjects1);
gdjs.evtsExt__VR__Controller.Controller.prototype.onDestroyContext.userFunc0x1be3f50(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__VR__Controller.Controller.prototype.onDestroy = function(parentEventsFunctionContext) {

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
, "Capacity3D": this._getCapacity3D()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("VR"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("VR"),
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

gdjs.evtsExt__VR__Controller.Controller.prototype.onDestroyContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__VR__Controller.Controller.prototype.onDestroyContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}


gdjs.registerBehavior("VR::Controller", gdjs.evtsExt__VR__Controller.Controller);
