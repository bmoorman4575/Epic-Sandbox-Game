
if (typeof gdjs.evtsExt__AnimationTransition3D__GetBonesInfoByNames !== "undefined") {
  gdjs.evtsExt__AnimationTransition3D__GetBonesInfoByNames.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__AnimationTransition3D__GetBonesInfoByNames = {};
gdjs.evtsExt__AnimationTransition3D__GetBonesInfoByNames.GDidObjects1= [];
gdjs.evtsExt__AnimationTransition3D__GetBonesInfoByNames.GDidObjects2= [];


gdjs.evtsExt__AnimationTransition3D__GetBonesInfoByNames.userFunc0xec0ed8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
if (objects.length > 0) {
    objects[0].get3DRendererObject().traverse((node) => {
        if (node.isMesh || node.type === 'ParticleEmitter' || node.isLight) {
            node.name = objects[0].getName();
        }
    });
    const scene = runtimeScene.getLayer("").getRenderer().getThreeScene();
    const threeMesh = scene.getObjectByName(objects[0].getName());
    const animationNames = eventsFunctionContext.getArgument("animationNames").split(',').map(name => name.trim());
    const speedScale = 2000;
    const renderer = objects[0].getRenderer();
    const object = runtimeScene.getObjects(objects[0].getName())[0];

    const playAnimationAndCaptureBones = (animationName, callback) => {
        threeMesh.userData[animationName + "_start"] = {};
        threeMesh.userData[animationName + "_end"] = {};

        if (object && object instanceof gdjs.Model3DRuntimeObject) {
            object.setAnimationName(animationName); 
            object.setAnimationElapsedTime(0); 

            threeMesh.traverse((node) => {
                if (node.isSkinnedMesh) {
                    node.skeleton.bones.forEach((bone) => {
                        threeMesh.userData[animationName + "_start"][bone.name] = {
                            position: bone.position.clone(),
                            rotation: bone.rotation.clone(),
                            scale: bone.scale.clone(),
                        };
                    });
                }
            });

            object.setAnimationSpeedScale(speedScale);
            renderer.playAnimation(animationName); 

            const checkAnimationEnd = () => {
                if (renderer.hasAnimationEnded()) {
                    threeMesh.traverse((node) => {
                        if (node.isSkinnedMesh) {
                            node.skeleton.bones.forEach((bone) => {
                                threeMesh.userData[animationName + "_end"][bone.name] = {
                                    position: bone.position.clone(),
                                    rotation: bone.rotation.clone(),
                                    scale: bone.scale.clone(),
                                };
                            });
                        }
                    });

                    object.setAnimationSpeedScale(1);
                    if (callback) callback();
                } else {
                    setTimeout(checkAnimationEnd, 100);
                }
            };

            checkAnimationEnd();
        }
    };

    const playAnimationsSequentially = (names, index = 0) => {
        if (index < names.length) {
            playAnimationAndCaptureBones(names[index], () => playAnimationsSequentially(names, index + 1));
        }
    };

    playAnimationsSequentially(animationNames);
}
};
gdjs.evtsExt__AnimationTransition3D__GetBonesInfoByNames.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("id"), gdjs.evtsExt__AnimationTransition3D__GetBonesInfoByNames.GDidObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__AnimationTransition3D__GetBonesInfoByNames.GDidObjects1);
gdjs.evtsExt__AnimationTransition3D__GetBonesInfoByNames.userFunc0xec0ed8(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};gdjs.evtsExt__AnimationTransition3D__GetBonesInfoByNames.userFunc0xea6d28 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
if (objects.length > 0) {
    objects[0].get3DRendererObject().traverse((node) => {
        if (node.isMesh || node.type === 'ParticleEmitter' || node.isLight) {
            node.name = objects[0].getName();
        }
    });
    const scene = runtimeScene.getLayer("").getRenderer().getThreeScene();
    const threeMesh = scene.getObjectByName(objects[0].getName());
    const speedScale = 2000;
    const renderer = objects[0].getRenderer();
    const object = runtimeScene.getObjects(objects[0].getName())[0];

    const animationNames = object._animations.map(animation => animation.source);

    const playAnimationAndCaptureBones = (animationName, callback) => {
        threeMesh.userData[animationName + "_start"] = {};
        threeMesh.userData[animationName + "_end"] = {};

        if (object && object instanceof gdjs.Model3DRuntimeObject) {
            object.setAnimationName(animationName); 
            object.setAnimationElapsedTime(0); 

            threeMesh.traverse((node) => {
                if (node.isSkinnedMesh) {
                    node.skeleton.bones.forEach((bone) => {
                        threeMesh.userData[animationName + "_start"][bone.name] = {
                            position: bone.position.clone(),
                            rotation: bone.rotation.clone(),
                            scale: bone.scale.clone(),
                        };
                    });
                }
            });

            object.setAnimationSpeedScale(speedScale); 
            renderer.playAnimation(animationName);

            const checkAnimationEnd = () => {
                if (renderer.hasAnimationEnded()) {
                    threeMesh.traverse((node) => {
                        if (node.isSkinnedMesh) {
                            node.skeleton.bones.forEach((bone) => {
                                threeMesh.userData[animationName + "_end"][bone.name] = {
                                    position: bone.position.clone(),
                                    rotation: bone.rotation.clone(),
                                    scale: bone.scale.clone(),
                                };
                            });
                        }
                    });

                    object.setAnimationSpeedScale(1); 
                    if (callback) callback();
                } else {
                    setTimeout(checkAnimationEnd, 100);
                }
            };

            checkAnimationEnd();
        }
    };

    const playAnimationsSequentially = (names, index = 0) => {
        if (index < names.length) {
            playAnimationAndCaptureBones(names[index], () => playAnimationsSequentially(names, index + 1));
        }
    };

    playAnimationsSequentially(animationNames);
}
};
gdjs.evtsExt__AnimationTransition3D__GetBonesInfoByNames.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("id"), gdjs.evtsExt__AnimationTransition3D__GetBonesInfoByNames.GDidObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__AnimationTransition3D__GetBonesInfoByNames.GDidObjects1);
gdjs.evtsExt__AnimationTransition3D__GetBonesInfoByNames.userFunc0xea6d28(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};gdjs.evtsExt__AnimationTransition3D__GetBonesInfoByNames.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("allAnimation") : false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationTransition3D__GetBonesInfoByNames.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("allAnimation") : false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationTransition3D__GetBonesInfoByNames.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__AnimationTransition3D__GetBonesInfoByNames.func = function(runtimeScene, id, animationNames, allAnimation, parentEventsFunctionContext) {
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
if (argName === "animationNames") return animationNames;
if (argName === "allAnimation") return allAnimation;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__AnimationTransition3D__GetBonesInfoByNames.GDidObjects1.length = 0;
gdjs.evtsExt__AnimationTransition3D__GetBonesInfoByNames.GDidObjects2.length = 0;

gdjs.evtsExt__AnimationTransition3D__GetBonesInfoByNames.eventsList2(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__AnimationTransition3D__GetBonesInfoByNames.registeredGdjsCallbacks = [];