
if (typeof gdjs.evtsExt__PlaySound__PlaySoundFromPath !== "undefined") {
  gdjs.evtsExt__PlaySound__PlaySoundFromPath.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__PlaySound__PlaySoundFromPath = {};


gdjs.evtsExt__PlaySound__PlaySoundFromPath.userFunc0x8a8e10 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const audioFile = eventsFunctionContext.getArgument("URL");
const channel = "syllabux_" + eventsFunctionContext.getArgument("channel");
const loop = eventsFunctionContext.getArgument("loop");
const volume = eventsFunctionContext.getArgument("volume") || 100;

if (!window.syllabuxAudioChannels) window.syllabuxAudioChannels = {};

const audio = new Audio(audioFile);
audio.volume = volume / 100;
if (loop == 1) {
    if (typeof audio.loop == 'boolean') {
        audio.loop = true;
    } else {
        audio.addEventListener('ended', function () {
            this.currentTime = 0;
            this.play();
        }, false);
    }
}

audio.addEventListener('canplaythrough', () => {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const source = audioContext.createMediaElementSource(audio);

    // Create audio nodes for effects
    const gainNode = audioContext.createGain();
    const reverbGainNode = audioContext.createGain();
    const echoNode = audioContext.createDelay();
    const lowpassFilter = audioContext.createBiquadFilter();
    const highpassFilter = audioContext.createBiquadFilter();

    // Get global audio effect settings
    const echo = runtimeScene.getVariables().get("echo").getAsNumber();
    const reverb = runtimeScene.getVariables().get("reverb").getAsNumber();
    const highpass = runtimeScene.getVariables().get("highpass").getAsNumber();
    const lowpass = runtimeScene.getVariables().get("lowpass").getAsNumber();

    // Configure the effect nodes
    echoNode.delayTime.value = echo / 100; // Echo effect
    reverbGainNode.gain.value = reverb / 100; // Simple reverb effect
    lowpassFilter.type = "lowpass";
    lowpassFilter.frequency.value = lowpass * 20; // Lowpass effect
    highpassFilter.type = "highpass";
    highpassFilter.frequency.value = highpass * 20; // Highpass effect

    // Connect the nodes
    source.connect(gainNode);
    gainNode.connect(echoNode);
    echoNode.connect(lowpassFilter);
    lowpassFilter.connect(highpassFilter);
    highpassFilter.connect(reverbGainNode);
    reverbGainNode.connect(audioContext.destination);
    gainNode.connect(audioContext.destination); // Connect gainNode directly to destination for dry signal

    // Store the audio context and nodes in the global object
    window.syllabuxAudioChannels[channel] = {
        audio,
        audioContext,
        gainNode,
        reverbGainNode,
        echoNode,
        lowpassFilter,
        highpassFilter
    };

    audio.play();
});

};
gdjs.evtsExt__PlaySound__PlaySoundFromPath.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__PlaySound__PlaySoundFromPath.userFunc0x8a8e10(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__PlaySound__PlaySoundFromPath.func = function(runtimeScene, URL, volume, loop, channel, parentEventsFunctionContext) {
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
if (argName === "loop") return loop;
if (argName === "channel") return channel;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__PlaySound__PlaySoundFromPath.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__PlaySound__PlaySoundFromPath.registeredGdjsCallbacks = [];