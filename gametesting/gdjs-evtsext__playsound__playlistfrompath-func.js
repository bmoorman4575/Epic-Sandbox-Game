
if (typeof gdjs.evtsExt__PlaySound__PlaylistFromPath !== "undefined") {
  gdjs.evtsExt__PlaySound__PlaylistFromPath.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__PlaySound__PlaylistFromPath = {};


gdjs.evtsExt__PlaySound__PlaylistFromPath.userFunc0x11406a8 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const audioFiles = eventsFunctionContext.getArgument("URL").split(',');
const channel = "syllabux_" + eventsFunctionContext.getArgument("channel");
const volume = eventsFunctionContext.getArgument("volume") || 100;
if (!window.syllabuxAudioChannels) window.syllabuxAudioChannels = {};





const playFile = (arr, ch, vol) => {
    window.syllabuxAudioChannels[ch] = new Audio(arr[0]);
window.syllabuxAudioChannels[channel].volume = volume / 100;
    if (arr.length > 1) {
        arr.shift();
        window.syllabuxAudioChannels[ch].addEventListener('ended', function () {
            playFile(arr, ch, vol)
        }, false);
    }
    window.syllabuxAudioChannels[ch].play();
}

playFile(audioFiles, channel, volume);
};
gdjs.evtsExt__PlaySound__PlaylistFromPath.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__PlaySound__PlaylistFromPath.userFunc0x11406a8(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__PlaySound__PlaylistFromPath.func = function(runtimeScene, URL, volume, channel, parentEventsFunctionContext) {
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
if (argName === "URL") return URL;
if (argName === "volume") return volume;
if (argName === "channel") return channel;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__PlaySound__PlaylistFromPath.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__PlaySound__PlaylistFromPath.registeredGdjsCallbacks = [];