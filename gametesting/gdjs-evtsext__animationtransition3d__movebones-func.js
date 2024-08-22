
if (typeof gdjs.evtsExt__AnimationTransition3D__MoveBones !== "undefined") {
  gdjs.evtsExt__AnimationTransition3D__MoveBones.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__AnimationTransition3D__MoveBones = {};
gdjs.evtsExt__AnimationTransition3D__MoveBones.GDidObjects1= [];


gdjs.evtsExt__AnimationTransition3D__MoveBones.userFunc0xec0ed8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
let isLoopActive = true;

const threeScene = runtimeScene.getLayer("").getRenderer().getThreeScene();
const speed = eventsFunctionContext.getArgument("playSpeed");

function lerp(start, end, alpha) {
  return start + (end - start) * Math.min(1, alpha);
}

function positionsAreEqual(pos1, pos2) {
  const distance = Math.sqrt(
    Math.pow(pos1.x - pos2.x, 2) +
    Math.pow(pos1.y - pos2.y, 2) +
    Math.pow(pos1.z - pos2.z, 2)
  );
  return distance < 0.001;
}

function rotationsAreEqual(rot1, rot2) {
  const distance = Math.sqrt(
    Math.pow(rot1.x - rot2.x, 2) +
    Math.pow(rot1.y - rot2.y, 2) +
    Math.pow(rot1.z - rot2.z, 2)
  );
  return distance < 0.001;
}

function scalesAreEqual(scale1, scale2) {
  const distance = Math.sqrt(
    Math.pow(scale1.x - scale2.x, 2) +
    Math.pow(scale1.y - scale2.y, 2) +
    Math.pow(scale1.z - scale2.z, 2)
  );
  return distance < 0.001;
}

function quaternionsAreEqual(quat1, quat2) {
  return quat1.angleTo(quat2) < 0.001;
}

function updateBonePositionsFromUserData(object, deltaTime, animationName, frame, callback) {
  let targetDataKey;
  switch (frame) {
    case "startFrame":
      targetDataKey = `${animationName}_start`;
      break;
    case "endFrame":
      targetDataKey = `${animationName}_end`;
      break;
    default:
      //console.log(`Unexpected frame: ${frame}`);
      return;
  }

  const targetDataCollection = object.userData[targetDataKey];

  if (!targetDataCollection) {
    return;
  }

  let allPositionsReached = true;

  object.traverse((child) => {
    if (child.isSkinnedMesh && child.skeleton) {
      child.skeleton.bones.forEach((bone) => {
        const targetData = targetDataCollection[bone.name];
        if (targetData) {
          const targetQuaternion = new THREE.Quaternion().setFromEuler(targetData.rotation);
          const currentQuaternion = bone.quaternion.clone();
          const shortestQuaternion = new THREE.Quaternion().copy(currentQuaternion).slerp(targetQuaternion, speed * deltaTime);

          const positionReached = positionsAreEqual(bone.position, targetData.position);
          const rotationReached = quaternionsAreEqual(bone.quaternion, targetQuaternion);
          const scaleReached = scalesAreEqual(bone.scale, targetData.scale);

          if (!positionReached || !rotationReached || !scaleReached) {
            allPositionsReached = false;

            bone.position.x = lerp(bone.position.x, targetData.position.x, speed * deltaTime);
            bone.position.y = lerp(bone.position.y, targetData.position.y, speed * deltaTime);
            bone.position.z = lerp(bone.position.z, targetData.position.z, speed * deltaTime);

            bone.quaternion.copy(shortestQuaternion);

            bone.scale.x = lerp(bone.scale.x, targetData.scale.x, speed * deltaTime);
            bone.scale.y = lerp(bone.scale.y, targetData.scale.y, speed * deltaTime);
            bone.scale.z = lerp(bone.scale.z, targetData.scale.z, speed * deltaTime);
          }
        }
      });
    }
  });

  if (!allPositionsReached) {
    object.userData.currentState = `${targetDataKey}_active`;
    object.userData[targetDataKey].reached = false;

    setTimeout(() => {
      updateBonePositionsFromUserData(object, deltaTime, animationName, frame, callback);
    }, 16);
  } else {
    object.userData[targetDataKey].reached = true;
    object.userData[`${targetDataKey}_reached`] = {
      position: object.position.clone(),
      rotation: object.rotation.clone(),
      scale: object.scale.clone()
    };
    
    objects[0].pauseAnimation();
    objects[0].setAnimationName(animationName);
    objects[0].setAnimationElapsedTime(0);
    objects[0].resumeAnimation();
    object.userData.currentState = `${targetDataKey}_not_active`;

    if (callback) callback();
  }
}

if (objects.length > 0) {
  const objectName = objects[0].getName();
  const threeModel = threeScene.getObjectByName(objectName);
  const deltaTime = runtimeScene.getTimeManager().getElapsedTime() / 1000.0;
  const animationName = eventsFunctionContext.getArgument("animationName");
  const frame = eventsFunctionContext.getArgument("pickFrame");

  if (threeModel) {
    updateBonePositionsFromUserData(threeModel, deltaTime, animationName, frame, () => {
      isLoopActive = false; 
    });
  }
}

};
gdjs.evtsExt__AnimationTransition3D__MoveBones.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("id"), gdjs.evtsExt__AnimationTransition3D__MoveBones.GDidObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__AnimationTransition3D__MoveBones.GDidObjects1);
gdjs.evtsExt__AnimationTransition3D__MoveBones.userFunc0xec0ed8(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__AnimationTransition3D__MoveBones.func = function(runtimeScene, id, animationName, pickFrame, playSpeed, parentEventsFunctionContext) {
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
if (argName === "pickFrame") return pickFrame;
if (argName === "playSpeed") return playSpeed;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__AnimationTransition3D__MoveBones.GDidObjects1.length = 0;

gdjs.evtsExt__AnimationTransition3D__MoveBones.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__AnimationTransition3D__MoveBones.registeredGdjsCallbacks = [];