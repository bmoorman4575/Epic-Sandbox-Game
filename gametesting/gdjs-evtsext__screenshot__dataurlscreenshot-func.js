
if (typeof gdjs.evtsExt__screenshot__dataurlscreenshot !== "undefined") {
  gdjs.evtsExt__screenshot__dataurlscreenshot.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__screenshot__dataurlscreenshot = {};


gdjs.evtsExt__screenshot__dataurlscreenshot.userFunc0x1867e68 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
function captureScreenshot(runtimeScene) {
    setTimeout(function() {
        // Get the PIXI renderer from the GDevelop runtime scene
        var renderer = runtimeScene.getGame().getRenderer().getPIXIRenderer();

        // Save the current background color
        var originalBackgroundColor = runtimeScene.getBackgroundColor();
        
        // Change the background color to black
        runtimeScene.setBackgroundColor('black');

        // Render the current scene to the canvas
        runtimeScene.renderAndStep(0);

        // Get the canvas element from the PIXI renderer
        var canvas = renderer.view;

        // Convert the canvas to a data URL
        var dataUrl = canvas.toDataURL('image/png');

        // Restore the original background color
        runtimeScene.setBackgroundColor(originalBackgroundColor);

        // Assign the Data URL to a variable (e.g., `screenshotDataUrl`)
        var screenshotDataUrl = dataUrl;
        runtimeScene.getVariables().get("sniperdataurl").setString(dataUrl);

        // Now you can use `screenshotDataUrl` wherever you need
        console.log(screenshotDataUrl); // Example: Log it to the console
    }, 100); // Delay in milliseconds
}

// Call the captureScreenshot function within a GDevelop JavaScript event
captureScreenshot(runtimeScene);

};
gdjs.evtsExt__screenshot__dataurlscreenshot.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__screenshot__dataurlscreenshot.userFunc0x1867e68(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.window.setGameResolutionSize(runtimeScene, eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0).getAsNumber(), eventsFunctionContext.sceneVariablesForExtension.getFromIndex(1).getAsNumber());
}}

}


};gdjs.evtsExt__screenshot__dataurlscreenshot.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0).setNumber(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene));
}{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(1).setNumber(gdjs.evtTools.window.getGameResolutionHeight(runtimeScene));
}{gdjs.evtTools.window.setGameResolutionSize(runtimeScene, eventsFunctionContext.getArgument("widthpar"), eventsFunctionContext.getArgument("Heightpar"));
}
{ //Subevents
gdjs.evtsExt__screenshot__dataurlscreenshot.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__screenshot__dataurlscreenshot.func = function(runtimeScene, widthpar, Heightpar, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("screenshot"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("screenshot"),
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
if (argName === "widthpar") return widthpar;
if (argName === "Heightpar") return Heightpar;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__screenshot__dataurlscreenshot.eventsList1(runtimeScene, eventsFunctionContext);

return "" + eventsFunctionContext.returnValue;
}

gdjs.evtsExt__screenshot__dataurlscreenshot.registeredGdjsCallbacks = [];