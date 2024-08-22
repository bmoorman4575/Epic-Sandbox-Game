
if (typeof gdjs.evtsExt__PlaySound__changeaudioeffects !== "undefined") {
  gdjs.evtsExt__PlaySound__changeaudioeffects.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__PlaySound__changeaudioeffects = {};


gdjs.evtsExt__PlaySound__changeaudioeffects.userFunc0x1141b00 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
// Input variables ranging from 0 to 100
var echo = runtimeScene.getVariables().get("echo2").getAsNumber();
var reverb = runtimeScene.getVariables().get("reverbe").getAsNumber();
var highpass = runtimeScene.getVariables().get("highpass").getAsNumber();
var lowpass = runtimeScene.getVariables().get("lowpass").getAsNumber();

try {
  // Iterate over all audio channels
  for (const channel in window.syllabuxAudioChannels) {
    if (window.syllabuxAudioChannels.hasOwnProperty(channel)) {
      const audioSource = window.syllabuxAudioChannels[channel];
      let currentTimeValue = null; // Initialize the variable
      let volumeValue = 0; // Initialize volume variable

      // Check if the channel has its own audio context and filter setup
      if (!audioSource.audioContext) {
        // Create a new AudioContext for this channel
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        audioSource.audioContext = audioContext;

        // Create a MediaElementSource from the audio source
        const source = audioContext.createMediaElementSource(audioSource);

        // Create audio nodes for effects
        const gainNode = audioContext.createGain();
        const reverbGainNode = audioContext.createGain();
        const echoNode = audioContext.createDelay();
        const lowpassFilter = audioContext.createBiquadFilter();
        const highpassFilter = audioContext.createBiquadFilter();

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

        audioSource.gainNode = gainNode;
        audioSource.reverbGainNode = reverbGainNode;
        audioSource.echoNode = echoNode;
        audioSource.lowpassFilter = lowpassFilter;
        audioSource.highpassFilter = highpassFilter;
      }

      // Get the analyser node
      const analyser = audioSource.analyser;

      // Create a Uint8Array to hold the frequency data
      const dataArray = new Uint8Array(analyser.frequencyBinCount);
      analyser.getByteFrequencyData(dataArray);

      // Calculate the average volume in the specified frequency range
      let sum = 0;
      for (let i = 0; i < dataArray.length; i++) {
        sum += dataArray[i];
      }
      const average = sum / dataArray.length;

      // Normalize the volume to a value between 0 and 1
      volumeValue = average / 255;

      // Get the current time
      currentTimeValue = audioSource.currentTime;

      // Set the current time and volume in the runtime scene variables
      runtimeScene.getVariables().get("timetemp").setNumber(currentTimeValue);
      runtimeScene.getVariables().get("volume").setNumber(volumeValue);
    }
  }
} catch (err) {
  console.error(err);
}

};
gdjs.evtsExt__PlaySound__changeaudioeffects.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(1).setNumber(eventsFunctionContext.getArgument("echo"));
}{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0).setNumber(eventsFunctionContext.getArgument("reverb"));
}{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(3).setNumber(eventsFunctionContext.getArgument("highpassvar"));
}{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(2).setNumber(eventsFunctionContext.getArgument("lowpassvar"));
}}

}


{


gdjs.evtsExt__PlaySound__changeaudioeffects.userFunc0x1141b00(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__PlaySound__changeaudioeffects.func = function(runtimeScene, echo, reverb, highpassvar, lowpassvar, parentEventsFunctionContext) {
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
if (argName === "echo") return echo;
if (argName === "reverb") return reverb;
if (argName === "highpassvar") return highpassvar;
if (argName === "lowpassvar") return lowpassvar;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__PlaySound__changeaudioeffects.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__PlaySound__changeaudioeffects.registeredGdjsCallbacks = [];