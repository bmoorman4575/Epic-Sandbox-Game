
if (typeof gdjs.evtsExt__AnimationTransition3D__IsMovingInProgress !== "undefined") {
  gdjs.evtsExt__AnimationTransition3D__IsMovingInProgress.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__AnimationTransition3D__IsMovingInProgress = {};
gdjs.evtsExt__AnimationTransition3D__IsMovingInProgress.GDidObjects1= [];


gdjs.evtsExt__AnimationTransition3D__IsMovingInProgress.userFunc0xec0ed8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
function checkAnimationState(runtimeScene, object, animationName, frame) {
    var currentState = object.userData.currentState;
    var expectedState = `${animationName}_${frame}_active`;
    
    if (currentState === expectedState) {
        return true;
    } else {
        return false;
    }
}

if (objects.length > 0) {
    const threeScene = runtimeScene.getLayer("").getRenderer().getThreeScene();
    const threeModel = threeScene.getObjectByName(objects[0].getName());
    let animationState = false; 

    if (threeModel) {
        animationState = checkAnimationState(
            runtimeScene,
            threeModel,
            eventsFunctionContext.getArgument("animationName"),
            eventsFunctionContext.getArgument("frame")
        );
    }

    eventsFunctionContext.returnValue = animationState;
}
};
gdjs.evtsExt__AnimationTransition3D__IsMovingInProgress.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("id"), gdjs.evtsExt__AnimationTransition3D__IsMovingInProgress.GDidObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__AnimationTransition3D__IsMovingInProgress.GDidObjects1);
gdjs.evtsExt__AnimationTransition3D__IsMovingInProgress.userFunc0xec0ed8(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__AnimationTransition3D__IsMovingInProgress.func = function(runtimeScene, id, animationName, frame, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"id": id
},
  _objectArraysMap: {
"id": gdjs.objectsListsToArray(id)
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("AnimationTransition3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("AnimationTransition3D"),
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
if (argName === "animationName") return animationName;
if (argName === "frame") return frame;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__AnimationTransition3D__IsMovingInProgress.GDidObjects1.length = 0;

gdjs.evtsExt__AnimationTransition3D__IsMovingInProgress.eventsList0(runtimeScene, eventsFunctionContext);

return "" + eventsFunctionContext.returnValue;
}

gdjs.evtsExt__AnimationTransition3D__IsMovingInProgress.registeredGdjsCallbacks = [];