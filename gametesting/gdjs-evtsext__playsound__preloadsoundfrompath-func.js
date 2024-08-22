
if (typeof gdjs.evtsExt__PlaySound__PreloadSoundFromPath !== "undefined") {
  gdjs.evtsExt__PlaySound__PreloadSoundFromPath.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__PlaySound__PreloadSoundFromPath = {};


gdjs.evtsExt__PlaySound__PreloadSoundFromPath.userFunc0x8a8e10 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const audios = eventsFunctionContext.getArgument("SoundFiles");
const audioFiles = audios.split(',');

let loaded = 0;
const loadedAudio = () => {
    // this will be called every time an audio file is loaded
    // we keep track of the loaded files vs the requested files
    loaded++;
    
}

const confirmLoaded = () => {
    if (loaded < audioFiles.length){
    	// all have loaded
    	setTimeout(() => {confirmLoaded},500)
    }
}

const preloadAudio = (url) => {
    var audio = new Audio();
    // once this file loads, it will call loadedAudio()
    // the file will be kept by the browser as cache
    audio.addEventListener('canplaythrough', loadedAudio, false);
    audio.addEventListener('error', (e) => {    loadedAudio();  });
    audio.src = url;
    audio.load();
}

// we start preloading all the audio files
for (var i in audioFiles) {
    preloadAudio(audioFiles[i]);
}

confirmLoaded();
};
gdjs.evtsExt__PlaySound__PreloadSoundFromPath.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__PlaySound__PreloadSoundFromPath.userFunc0x8a8e10(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__PlaySound__PreloadSoundFromPath.func = function(runtimeScene, SoundFiles, parentEventsFunctionContext) {
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
if (argName === "SoundFiles") return SoundFiles;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__PlaySound__PreloadSoundFromPath.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__PlaySound__PreloadSoundFromPath.registeredGdjsCallbacks = [];