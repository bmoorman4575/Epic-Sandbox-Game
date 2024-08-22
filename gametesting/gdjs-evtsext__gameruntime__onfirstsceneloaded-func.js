
if (typeof gdjs.evtsExt__gameruntime__onFirstSceneLoaded !== "undefined") {
  gdjs.evtsExt__gameruntime__onFirstSceneLoaded.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__gameruntime__onFirstSceneLoaded = {};


gdjs.evtsExt__gameruntime__onFirstSceneLoaded.userFunc0x1fc70d8 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
// Get the current date and time
let now = new Date();

// Get the date components
let month = now.getMonth() + 1; // Months are zero-based
let day = now.getDate();
let year = now.getFullYear();

// Get the time components
let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();

// Determine AM or PM
let ampm = hours >= 12 ? 'PM' : 'AM';

// Convert hours to 12-hour format
hours = hours % 12;
hours = hours ? hours : 12; // the hour '0' should be '12'

// Format minutes and seconds to always be two digits
minutes = minutes < 10 ? '0' + minutes : minutes;
seconds = seconds < 10 ? '0' + seconds : seconds;

// Construct the date and time strings
let dateStr = ` ${month}/${day}/${year}`;
let timeStr = ` ${hours}:${minutes}:${seconds} ${ampm}`;

// Print to the console
console.log(dateStr);
console.log(timeStr);
runtimeScene.getGame().getVariables().get("previewbuilddate").setString(dateStr);
runtimeScene.getGame().getVariables().get("previewbuildtime").setString(timeStr);

};
gdjs.evtsExt__gameruntime__onFirstSceneLoaded.asyncCallback29776716 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(eventsFunctionContext.localVariables);
{runtimeScene.getScene().getVariables().get("previewbuildtime").setString("Build date: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("previewbuilddate")));
}{gdjs.fileSystem.saveVariableToJSONFile(runtimeScene.getScene().getVariables().get("previewbuildtime"), gdjs.fileSystem.getDocumentsPath(runtimeScene) + gdjs.fileSystem.getPathDelimiter() + "Gdevelop projects" + gdjs.fileSystem.getPathDelimiter() + "BTMs epic sandbox game" + gdjs.fileSystem.getPathDelimiter() + "gamebuilddate.json", gdjs.VariablesContainer.badVariable);
}eventsFunctionContext.localVariables.length = 0;
}
gdjs.evtsExt__gameruntime__onFirstSceneLoaded.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(eventsFunctionContext.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.evtsExt__gameruntime__onFirstSceneLoaded.asyncCallback29776716(runtimeScene, eventsFunctionContext, asyncObjectsList)));
}
}

}


};gdjs.evtsExt__gameruntime__onFirstSceneLoaded.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.evtsExt__gameruntime__onFirstSceneLoaded.userFunc0x1fc70d8(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.evtsExt__gameruntime__onFirstSceneLoaded.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__gameruntime__onFirstSceneLoaded.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.window.setGameResolutionSize(runtimeScene, 1920, 1080);
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.isPreview(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.window.setWindowSize(runtimeScene, 1280, 720, false);
}{gdjs.evtTools.window.centerWindow(runtimeScene);
}
{ //Subevents
gdjs.evtsExt__gameruntime__onFirstSceneLoaded.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


};

gdjs.evtsExt__gameruntime__onFirstSceneLoaded.func = function(runtimeScene, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("gameruntime"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("gameruntime"),
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__gameruntime__onFirstSceneLoaded.eventsList2(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__gameruntime__onFirstSceneLoaded.registeredGdjsCallbacks = [];
gdjs.evtsExt__gameruntime__onFirstSceneLoaded.registeredGdjsCallbacks.push((runtimeScene) => {
    gdjs.evtsExt__gameruntime__onFirstSceneLoaded.func(runtimeScene, runtimeScene);
})
gdjs.registerFirstRuntimeSceneLoadedCallback(gdjs.evtsExt__gameruntime__onFirstSceneLoaded.registeredGdjsCallbacks[gdjs.evtsExt__gameruntime__onFirstSceneLoaded.registeredGdjsCallbacks.length - 1]);
