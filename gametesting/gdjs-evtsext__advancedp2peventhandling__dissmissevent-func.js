
if (typeof gdjs.evtsExt__AdvancedP2PEventHandling__DissmissEvent !== "undefined") {
  gdjs.evtsExt__AdvancedP2PEventHandling__DissmissEvent.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__AdvancedP2PEventHandling__DissmissEvent = {};


gdjs.evtsExt__AdvancedP2PEventHandling__DissmissEvent.userFunc0x9cda90 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
if (!gdjs.evtTools.p2p) return;
if (gdjs.evtTools.p2p.getEvent)
    gdjs.evtTools.p2p
        .getEvent()
        .popData();
// Pre beta104 compatibility
else {
    const event = gdjs.evtTools.p2p.lastEventData[eventsFunctionContext.getArgument("eventName")];
    if (Array.isArray(event) && event.length > 0) event.pop();
};

};
gdjs.evtsExt__AdvancedP2PEventHandling__DissmissEvent.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__AdvancedP2PEventHandling__DissmissEvent.userFunc0x9cda90(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__AdvancedP2PEventHandling__DissmissEvent.func = function(runtimeScene, eventName, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("AdvancedP2PEventHandling"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("AdvancedP2PEventHandling"),
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
if (argName === "eventName") return eventName;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__AdvancedP2PEventHandling__DissmissEvent.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__AdvancedP2PEventHandling__DissmissEvent.registeredGdjsCallbacks = [];