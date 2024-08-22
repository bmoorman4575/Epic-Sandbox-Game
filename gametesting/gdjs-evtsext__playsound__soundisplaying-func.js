
if (typeof gdjs.evtsExt__PlaySound__SoundIsPlaying !== "undefined") {
  gdjs.evtsExt__PlaySound__SoundIsPlaying.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__PlaySound__SoundIsPlaying = {};


gdjs.evtsExt__PlaySound__SoundIsPlaying.userFunc0x1141b00 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const channel = "syllabux_" + eventsFunctionContext.getArgument("channel");
let playing = false;
try {
    if (window.syllabuxAudioChannels) {
        playing = (!window.syllabuxAudioChannels[channel].paused);
    } 
} catch (err) {
    
}
eventsFunctionContext.returnValue = playing;
};
gdjs.evtsExt__PlaySound__SoundIsPlaying.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__PlaySound__SoundIsPlaying.userFunc0x1141b00(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__PlaySound__SoundIsPlaying.func = function(runtimeScene, channel, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PlaySound"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PlaySound"),
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
if (argName === "channel") return channel;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__PlaySound__SoundIsPlaying.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__PlaySound__SoundIsPlaying.registeredGdjsCallbacks = [];