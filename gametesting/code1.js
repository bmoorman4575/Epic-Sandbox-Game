gdjs.LoadingsceneCode = {};
gdjs.LoadingsceneCode.localVariables = [];
gdjs.LoadingsceneCode.GDNewTiledSpriteObjects1= [];
gdjs.LoadingsceneCode.GDNewTiledSpriteObjects2= [];
gdjs.LoadingsceneCode.GDloadingscreenimageObjects1= [];
gdjs.LoadingsceneCode.GDloadingscreenimageObjects2= [];
gdjs.LoadingsceneCode.GDloadingscreenmaptxtObjects1= [];
gdjs.LoadingsceneCode.GDloadingscreenmaptxtObjects2= [];
gdjs.LoadingsceneCode.GDloadingscreencurrentsteptxtObjects1= [];
gdjs.LoadingsceneCode.GDloadingscreencurrentsteptxtObjects2= [];
gdjs.LoadingsceneCode.GDloadingscreenbaseObjects1= [];
gdjs.LoadingsceneCode.GDloadingscreenbaseObjects2= [];
gdjs.LoadingsceneCode.GDgradientObjects1= [];
gdjs.LoadingsceneCode.GDgradientObjects2= [];


gdjs.LoadingsceneCode.mapOfGDgdjs_9546LoadingsceneCode_9546GDgradientObjects1Objects = Hashtable.newFrom({"gradient": gdjs.LoadingsceneCode.GDgradientObjects1});
gdjs.LoadingsceneCode.mapOfGDgdjs_9546LoadingsceneCode_9546GDloadingscreenimageObjects1Objects = Hashtable.newFrom({"loadingscreenimage": gdjs.LoadingsceneCode.GDloadingscreenimageObjects1});
gdjs.LoadingsceneCode.mapOfGDgdjs_9546LoadingsceneCode_9546GDloadingscreenbaseObjects1Objects = Hashtable.newFrom({"loadingscreenbase": gdjs.LoadingsceneCode.GDloadingscreenbaseObjects1});
gdjs.LoadingsceneCode.mapOfGDgdjs_9546LoadingsceneCode_9546GDloadingscreenmaptxtObjects1Objects = Hashtable.newFrom({"loadingscreenmaptxt": gdjs.LoadingsceneCode.GDloadingscreenmaptxtObjects1});
gdjs.LoadingsceneCode.mapOfGDgdjs_9546LoadingsceneCode_9546GDloadingscreencurrentsteptxtObjects1Objects = Hashtable.newFrom({"loadingscreencurrentsteptxt": gdjs.LoadingsceneCode.GDloadingscreencurrentsteptxtObjects1});
gdjs.LoadingsceneCode.asyncCallback31890388 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.LoadingsceneCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), true);
}gdjs.LoadingsceneCode.localVariables.length = 0;
}
gdjs.LoadingsceneCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.LoadingsceneCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.LoadingsceneCode.asyncCallback31890388(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.LoadingsceneCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.LoadingsceneCode.GDgradientObjects1.length = 0;

gdjs.LoadingsceneCode.GDloadingscreenbaseObjects1.length = 0;

gdjs.LoadingsceneCode.GDloadingscreencurrentsteptxtObjects1.length = 0;

gdjs.LoadingsceneCode.GDloadingscreenimageObjects1.length = 0;

gdjs.LoadingsceneCode.GDloadingscreenmaptxtObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.LoadingsceneCode.mapOfGDgdjs_9546LoadingsceneCode_9546GDgradientObjects1Objects, 0, 0, "ui");
}{for(var i = 0, len = gdjs.LoadingsceneCode.GDgradientObjects1.length ;i < len;++i) {
    gdjs.LoadingsceneCode.GDgradientObjects1[i].setZOrder(-(10));
}
}{for(var i = 0, len = gdjs.LoadingsceneCode.GDgradientObjects1.length ;i < len;++i) {
    gdjs.LoadingsceneCode.GDgradientObjects1[i].getBehavior("Opacity").setOpacity(200);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.LoadingsceneCode.mapOfGDgdjs_9546LoadingsceneCode_9546GDloadingscreenimageObjects1Objects, 15, 11, "ui");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.LoadingsceneCode.mapOfGDgdjs_9546LoadingsceneCode_9546GDloadingscreenbaseObjects1Objects, 0, 0, "ui");
}{for(var i = 0, len = gdjs.LoadingsceneCode.GDloadingscreenimageObjects1.length ;i < len;++i) {
    gdjs.LoadingsceneCode.GDloadingscreenimageObjects1[i].getBehavior("Resizable").setWidth(1886);
}
}{for(var i = 0, len = gdjs.LoadingsceneCode.GDloadingscreenimageObjects1.length ;i < len;++i) {
    gdjs.LoadingsceneCode.GDloadingscreenimageObjects1[i].getBehavior("Resizable").setHeight(890);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.LoadingsceneCode.mapOfGDgdjs_9546LoadingsceneCode_9546GDloadingscreenmaptxtObjects1Objects, 1, 40, "ui");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.LoadingsceneCode.mapOfGDgdjs_9546LoadingsceneCode_9546GDloadingscreencurrentsteptxtObjects1Objects, 1269, 1010, "ui");
}{for(var i = 0, len = gdjs.LoadingsceneCode.GDloadingscreencurrentsteptxtObjects1.length ;i < len;++i) {
    gdjs.LoadingsceneCode.GDloadingscreencurrentsteptxtObjects1[i].getBehavior("Text").setText("Loading . . .");
}
}{gdjs.evtTools.runtimeScene.prioritizeLoadingOfScene(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("loadingscreencurrentsteptxt"), gdjs.LoadingsceneCode.GDloadingscreencurrentsteptxtObjects1);
{for(var i = 0, len = gdjs.LoadingsceneCode.GDloadingscreencurrentsteptxtObjects1.length ;i < len;++i) {
    gdjs.LoadingsceneCode.GDloadingscreencurrentsteptxtObjects1[i].getBehavior("Text").setText("Loading scene (" + gdjs.evtTools.common.toString(gdjs.evtTools.common.trunc(gdjs.evtTools.runtimeScene.getSceneLoadingProgress(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(0).getAsString()) * 100)) + ")");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.areSceneAssetsLoaded(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
if (isConditionTrue_0) {

{ //Subevents
gdjs.LoadingsceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.LoadingsceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LoadingsceneCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.LoadingsceneCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.LoadingsceneCode.GDloadingscreenimageObjects1.length = 0;
gdjs.LoadingsceneCode.GDloadingscreenimageObjects2.length = 0;
gdjs.LoadingsceneCode.GDloadingscreenmaptxtObjects1.length = 0;
gdjs.LoadingsceneCode.GDloadingscreenmaptxtObjects2.length = 0;
gdjs.LoadingsceneCode.GDloadingscreencurrentsteptxtObjects1.length = 0;
gdjs.LoadingsceneCode.GDloadingscreencurrentsteptxtObjects2.length = 0;
gdjs.LoadingsceneCode.GDloadingscreenbaseObjects1.length = 0;
gdjs.LoadingsceneCode.GDloadingscreenbaseObjects2.length = 0;
gdjs.LoadingsceneCode.GDgradientObjects1.length = 0;
gdjs.LoadingsceneCode.GDgradientObjects2.length = 0;

gdjs.LoadingsceneCode.eventsList1(runtimeScene);

return;

}

gdjs['LoadingsceneCode'] = gdjs.LoadingsceneCode;
