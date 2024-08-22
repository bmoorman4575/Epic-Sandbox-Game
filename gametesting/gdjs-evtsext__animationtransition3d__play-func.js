
if (typeof gdjs.evtsExt__AnimationTransition3D__Play !== "undefined") {
  gdjs.evtsExt__AnimationTransition3D__Play.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__AnimationTransition3D__Play = {};
gdjs.evtsExt__AnimationTransition3D__Play.GDidObjects1= [];


gdjs.evtsExt__AnimationTransition3D__Play.userFunc0xec0ed8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
if (objects.length >0) {
    const objectName = objects[0].getName();
    const animationName = eventsFunctionContext.getArgument("animationName"); 
    const speedScale = eventsFunctionContext.getArgument("playSpeed"); 

    const object = runtimeScene.getObjects(objectName)[0];

    if (object && object instanceof gdjs.Model3DRuntimeObject) {
        const currentSpeed = object.getAnimationSpeedScale();

        const renderer = object.getRenderer();
        const isEnded = renderer.hasAnimationEnded();
        if (renderer.hasAnimationEnded()) {
            if (currentSpeed !== speedScale) {
                object.setAnimationSpeedScale(speedScale);
            }
            object.setAnimationElapsedTime(0)
            renderer.playAnimation(animationName);
        }
    }

};

};
gdjs.evtsExt__AnimationTransition3D__Play.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("id"), gdjs.evtsExt__AnimationTransition3D__Play.GDidObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__AnimationTransition3D__Play.GDidObjects1);
gdjs.evtsExt__AnimationTransition3D__Play.userFunc0xec0ed8(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__AnimationTransition3D__Play.func = function(runtimeScene, id, animationName, playSpeed, parentEventsFunctionContext) {
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
if (argName === "playSpeed") return playSpeed;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__AnimationTransition3D__Play.GDidObjects1.length = 0;

gdjs.evtsExt__AnimationTransition3D__Play.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__AnimationTransition3D__Play.registeredGdjsCallbacks = [];