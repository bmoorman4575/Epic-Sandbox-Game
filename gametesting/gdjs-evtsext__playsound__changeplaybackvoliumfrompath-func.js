
if (typeof gdjs.evtsExt__PlaySound__changeplaybackvoliumFromPath !== "undefined") {
  gdjs.evtsExt__PlaySound__changeplaybackvoliumFromPath.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__PlaySound__changeplaybackvoliumFromPath = {};


gdjs.evtsExt__PlaySound__changeplaybackvoliumFromPath.userFunc0x1141b00 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
try {
  const channel = "syllabux_" + eventsFunctionContext.getArgument("channel");
  const newVolume = eventsFunctionContext.getArgument("newVolume");
  
  if (window.syllabuxAudioChannels && window.syllabuxAudioChannels[channel]) {
    window.syllabuxAudioChannels[channel].volume = newVolume;
  }
} catch (err) {
  
}

};
gdjs.evtsExt__PlaySound__changeplaybackvoliumFromPath.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__PlaySound__changeplaybackvoliumFromPath.userFunc0x1141b00(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__PlaySound__changeplaybackvoliumFromPath.func = function(runtimeScene, channel, newVolume, parentEventsFunctionContext) {
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
if (argName === "newVolume") return newVolume;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__PlaySound__changeplaybackvoliumFromPath.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__PlaySound__changeplaybackvoliumFromPath.registeredGdjsCallbacks = [];