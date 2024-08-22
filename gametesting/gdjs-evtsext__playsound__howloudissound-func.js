
if (typeof gdjs.evtsExt__PlaySound__howloudissound !== "undefined") {
  gdjs.evtsExt__PlaySound__howloudissound.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__PlaySound__howloudissound = {};
gdjs.evtsExt__PlaySound__howloudissound.GDParameterObjects1= [];
gdjs.evtsExt__PlaySound__howloudissound.GDParameterObjects2= [];


gdjs.evtsExt__PlaySound__howloudissound.userFunc0x1141b00 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
try {
  const channel = "syllabux_" + eventsFunctionContext.getArgument("channel");
  let currentTimeValue = null; // Initialize the variable
  let volumeValue = 0; // Initialize volume variable

  if (window.syllabuxAudioChannels && window.syllabuxAudioChannels[channel]) {
    const audioSource = window.syllabuxAudioChannels[channel];

    // Check if the channel has its own audio context and filter setup
    if (!audioSource.audioContext) {
      // Create a new AudioContext for this channel
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      audioSource.audioContext = audioContext;

      // Create a MediaElementSource from the audio source
      const source = audioContext.createMediaElementSource(audioSource);

      // Create a GainNode for normal audio playback
      const normalGainNode = audioContext.createGain();


      // Create a BiquadFilterNode for band-pass filtering
      const bandPassFilter = audioContext.createBiquadFilter();
      bandPassFilter.type = "bandpass";
      bandPassFilter.frequency.value = 150; // Center frequency in Hz (e.g., 150 Hz)
      bandPassFilter.Q.value = 1; // Quality factor (adjust to narrow or widen the band)

      // Create an AnalyserNode and connect it to the filter
      const analyser = audioContext.createAnalyser();
      bandPassFilter.connect(analyser);

      // Connect the source to the normal gain node for normal playback
      source.connect(normalGainNode);
      normalGainNode.connect(audioContext.destination);

      // Connect the source to the max gain node for background audio
      source.connect(maxGainNode);
      maxGainNode.connect(audioContext.destination);

      // Connect the source to the band-pass filter for analysis
      source.connect(bandPassFilter);

      audioSource.analyser = analyser;
      audioSource.bandPassFilter = bandPassFilter;
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
  }

  // Set the current time and volume in the runtime scene variables
  runtimeScene.getVariables().get("timetemp").setNumber(currentTimeValue);
  runtimeScene.getVariables().get("volume").setNumber(volumeValue);
} catch (err) {
  console.error(err);
}

};
gdjs.evtsExt__PlaySound__howloudissound.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__PlaySound__howloudissound.userFunc0x1141b00(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("volume")); }}}

}


};

gdjs.evtsExt__PlaySound__howloudissound.func = function(runtimeScene, channel, Parameter, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Parameter": Parameter
},
  _objectArraysMap: {
"Parameter": gdjs.objectsListsToArray(Parameter)
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

gdjs.evtsExt__PlaySound__howloudissound.GDParameterObjects1.length = 0;
gdjs.evtsExt__PlaySound__howloudissound.GDParameterObjects2.length = 0;

gdjs.evtsExt__PlaySound__howloudissound.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__PlaySound__howloudissound.registeredGdjsCallbacks = [];