gdjs.loadbasegamestuffCode = {};
gdjs.loadbasegamestuffCode.localVariables = [];
gdjs.loadbasegamestuffCode.GDDebugtxtObjects1= [];
gdjs.loadbasegamestuffCode.GDDebugtxtObjects2= [];
gdjs.loadbasegamestuffCode.GDDebugtxtObjects3= [];
gdjs.loadbasegamestuffCode.GDDebugtxtObjects4= [];
gdjs.loadbasegamestuffCode.GDNewTextInputObjects1= [];
gdjs.loadbasegamestuffCode.GDNewTextInputObjects2= [];
gdjs.loadbasegamestuffCode.GDNewTextInputObjects3= [];
gdjs.loadbasegamestuffCode.GDNewTextInputObjects4= [];
gdjs.loadbasegamestuffCode.GDcreditsObjects1= [];
gdjs.loadbasegamestuffCode.GDcreditsObjects2= [];
gdjs.loadbasegamestuffCode.GDcreditsObjects3= [];
gdjs.loadbasegamestuffCode.GDcreditsObjects4= [];
gdjs.loadbasegamestuffCode.GDloadingtxtObjects1= [];
gdjs.loadbasegamestuffCode.GDloadingtxtObjects2= [];
gdjs.loadbasegamestuffCode.GDloadingtxtObjects3= [];
gdjs.loadbasegamestuffCode.GDloadingtxtObjects4= [];
gdjs.loadbasegamestuffCode.GDbtmgamesObjects1= [];
gdjs.loadbasegamestuffCode.GDbtmgamesObjects2= [];
gdjs.loadbasegamestuffCode.GDbtmgamesObjects3= [];
gdjs.loadbasegamestuffCode.GDbtmgamesObjects4= [];


gdjs.loadbasegamestuffCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtsExt__JSONResourceLoader__LoadJSONToGlobal.func(runtimeScene, "gamebuilddate.json", runtimeScene.getGame().getVariables().getFromIndex(13), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtTools.storage.loadJSONFileFromStorage("saved");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Debugtxt"), gdjs.loadbasegamestuffCode.GDDebugtxtObjects1);
{for(var i = 0, len = gdjs.loadbasegamestuffCode.GDDebugtxtObjects1.length ;i < len;++i) {
    gdjs.loadbasegamestuffCode.GDDebugtxtObjects1[i].getBehavior("Text").setText(gdjs.loadbasegamestuffCode.GDDebugtxtObjects1[i].getBehavior("Text").getText() + (gdjs.evtTools.string.newLine() + runtimeScene.getGame().getVariables().getFromIndex(13).getAsString()));
}
}{for(var i = 0, len = gdjs.loadbasegamestuffCode.GDDebugtxtObjects1.length ;i < len;++i) {
    gdjs.loadbasegamestuffCode.GDDebugtxtObjects1[i].getBehavior("Text").setText(gdjs.loadbasegamestuffCode.GDDebugtxtObjects1[i].getBehavior("Text").getText() + (gdjs.evtTools.string.newLine() + "Game version: " + gdjs.evtsExt__GetPropertiesData__ReturnGameVersion.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}{for(var i = 0, len = gdjs.loadbasegamestuffCode.GDDebugtxtObjects1.length ;i < len;++i) {
    gdjs.loadbasegamestuffCode.GDDebugtxtObjects1[i].getBehavior("Text").setText(gdjs.loadbasegamestuffCode.GDDebugtxtObjects1[i].getBehavior("Text").getText() + (gdjs.evtTools.string.newLine() + "Platform: " + runtimeScene.getGame().getVariables().getFromIndex(1).getAsString()));
}
}}

}


};gdjs.loadbasegamestuffCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(9).getChild("allowedconsole").setString(runtimeScene.getGame().getVariables().getFromIndex(8).getChild(runtimeScene.getGame().getVariables().getFromIndex(1).getAsString()).getChild("restrictions").getChild("allowedconsole").getAsString());
}{runtimeScene.getGame().getVariables().getFromIndex(9).getChild("allowedgraphicssettingschange").setString(runtimeScene.getGame().getVariables().getFromIndex(8).getChild(runtimeScene.getGame().getVariables().getFromIndex(1).getAsString()).getChild("restrictions").getChild("allowedgraphicssettingschange").getAsString());
}{runtimeScene.getGame().getVariables().getFromIndex(9).getChild("allowedmodstore").setString(runtimeScene.getGame().getVariables().getFromIndex(8).getChild(runtimeScene.getGame().getVariables().getFromIndex(1).getAsString()).getChild("restrictions").getChild("allowedmodstore").getAsString());
}{runtimeScene.getGame().getVariables().getFromIndex(9).getChild("allowedonlinemultiplayer").setString(runtimeScene.getGame().getVariables().getFromIndex(8).getChild(runtimeScene.getGame().getVariables().getFromIndex(1).getAsString()).getChild("restrictions").getChild("allowedonlinemultiplayer").getAsString());
}{runtimeScene.getGame().getVariables().getFromIndex(9).getChild("custommods").setString(runtimeScene.getGame().getVariables().getFromIndex(8).getChild(runtimeScene.getGame().getVariables().getFromIndex(1).getAsString()).getChild("restrictions").getChild("custommods").getAsString());
}{runtimeScene.getGame().getVariables().getFromIndex(9).getChild("customusername").setString(runtimeScene.getGame().getVariables().getFromIndex(8).getChild(runtimeScene.getGame().getVariables().getFromIndex(1).getAsString()).getChild("restrictions").getChild("customusername").getAsString());
}}

}


};gdjs.loadbasegamestuffCode.asyncCallback31857484 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.loadbasegamestuffCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("loadloadscreen");
}gdjs.loadbasegamestuffCode.localVariables.length = 0;
}
gdjs.loadbasegamestuffCode.eventsList2 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.loadbasegamestuffCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(5), (runtimeScene) => (gdjs.loadbasegamestuffCode.asyncCallback31857484(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.loadbasegamestuffCode.asyncCallback31856860 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.loadbasegamestuffCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("loadingtxt"), gdjs.loadbasegamestuffCode.GDloadingtxtObjects3);

{for(var i = 0, len = gdjs.loadbasegamestuffCode.GDloadingtxtObjects3.length ;i < len;++i) {
    gdjs.loadbasegamestuffCode.GDloadingtxtObjects3[i].getBehavior("Text").setText("Loading . . . (Base scenes) ");
}
}
{ //Subevents
gdjs.loadbasegamestuffCode.eventsList2(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.loadbasegamestuffCode.localVariables.length = 0;
}
gdjs.loadbasegamestuffCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.loadbasegamestuffCode.localVariables);
for (const obj of gdjs.loadbasegamestuffCode.GDloadingtxtObjects2) asyncObjectsList.addObject("loadingtxt", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.loadbasegamestuffCode.asyncCallback31856860(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.loadbasegamestuffCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("loadingtxt"), gdjs.loadbasegamestuffCode.GDloadingtxtObjects2);
{for(var i = 0, len = gdjs.loadbasegamestuffCode.GDloadingtxtObjects2.length ;i < len;++i) {
    gdjs.loadbasegamestuffCode.GDloadingtxtObjects2[i].getBehavior("Text").setText("Loading . . . (base game)");
}
}
{ //Subevents
gdjs.loadbasegamestuffCode.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.loadbasegamestuffCode.asyncCallback31862436 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.loadbasegamestuffCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Loadingscene", false);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setString("menu");
}gdjs.loadbasegamestuffCode.localVariables.length = 0;
}
gdjs.loadbasegamestuffCode.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.loadbasegamestuffCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.loadbasegamestuffCode.asyncCallback31862436(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.loadbasegamestuffCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getSceneLoadingProgress(runtimeScene, "Loadingscene") < 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("loadingtxt"), gdjs.loadbasegamestuffCode.GDloadingtxtObjects2);
{for(var i = 0, len = gdjs.loadbasegamestuffCode.GDloadingtxtObjects2.length ;i < len;++i) {
    gdjs.loadbasegamestuffCode.GDloadingtxtObjects2[i].getBehavior("Text").setText("Loading . . . (base scenes  " + gdjs.evtTools.common.toString(gdjs.evtTools.runtimeScene.getSceneLoadingProgress(runtimeScene, "Loadingscene")) + "%) ");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.areSceneAssetsLoaded(runtimeScene, "Loadingscene");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(31861932);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("loadingtxt"), gdjs.loadbasegamestuffCode.GDloadingtxtObjects1);
{for(var i = 0, len = gdjs.loadbasegamestuffCode.GDloadingtxtObjects1.length ;i < len;++i) {
    gdjs.loadbasegamestuffCode.GDloadingtxtObjects1[i].getBehavior("Text").setText("Loading . . . (Starting menu)");
}
}
{ //Subevents
gdjs.loadbasegamestuffCode.eventsList5(runtimeScene);} //End of subevents
}

}


};gdjs.loadbasegamestuffCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)) == "loadloadscreen";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(31859452);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.prioritizeLoadingOfScene(runtimeScene, "Loadingscene");
}
{ //Subevents
gdjs.loadbasegamestuffCode.eventsList6(runtimeScene);} //End of subevents
}

}


};gdjs.loadbasegamestuffCode.eventsList8 = function(runtimeScene) {

{


gdjs.loadbasegamestuffCode.eventsList4(runtimeScene);
}


{


gdjs.loadbasegamestuffCode.eventsList7(runtimeScene);
}


};gdjs.loadbasegamestuffCode.eventsList9 = function(runtimeScene) {

{



}


{



}


{



}


};gdjs.loadbasegamestuffCode.eventsList10 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.loadbasegamestuffCode.eventsList9(runtimeScene);} //End of subevents
}

}


};gdjs.loadbasegamestuffCode.eventsList11 = function(runtimeScene) {

{



}


{


gdjs.loadbasegamestuffCode.eventsList0(runtimeScene);
}


{


gdjs.loadbasegamestuffCode.eventsList1(runtimeScene);
}


{


gdjs.loadbasegamestuffCode.eventsList8(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("btmgames"), gdjs.loadbasegamestuffCode.GDbtmgamesObjects1);
gdjs.copyArray(runtimeScene.getObjects("loadingtxt"), gdjs.loadbasegamestuffCode.GDloadingtxtObjects1);
{for(var i = 0, len = gdjs.loadbasegamestuffCode.GDbtmgamesObjects1.length ;i < len;++i) {
    gdjs.loadbasegamestuffCode.GDbtmgamesObjects1[i].getBehavior("Object3D").setRotationY(gdjs.loadbasegamestuffCode.GDbtmgamesObjects1[i].getBehavior("Object3D").getRotationY() + (150 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.loadbasegamestuffCode.GDbtmgamesObjects1.length ;i < len;++i) {
    gdjs.loadbasegamestuffCode.GDbtmgamesObjects1[i].setX((( gdjs.loadbasegamestuffCode.GDloadingtxtObjects1.length === 0 ) ? 0 :gdjs.loadbasegamestuffCode.GDloadingtxtObjects1[0].getX()) + (( gdjs.loadbasegamestuffCode.GDloadingtxtObjects1.length === 0 ) ? 0 :gdjs.loadbasegamestuffCode.GDloadingtxtObjects1[0].getWidth()));
}
}{gdjs.evtsExt__CursorType__ChangeCursorType.func(runtimeScene, "progress", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


gdjs.loadbasegamestuffCode.eventsList10(runtimeScene);
}


};

gdjs.loadbasegamestuffCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.loadbasegamestuffCode.GDDebugtxtObjects1.length = 0;
gdjs.loadbasegamestuffCode.GDDebugtxtObjects2.length = 0;
gdjs.loadbasegamestuffCode.GDDebugtxtObjects3.length = 0;
gdjs.loadbasegamestuffCode.GDDebugtxtObjects4.length = 0;
gdjs.loadbasegamestuffCode.GDNewTextInputObjects1.length = 0;
gdjs.loadbasegamestuffCode.GDNewTextInputObjects2.length = 0;
gdjs.loadbasegamestuffCode.GDNewTextInputObjects3.length = 0;
gdjs.loadbasegamestuffCode.GDNewTextInputObjects4.length = 0;
gdjs.loadbasegamestuffCode.GDcreditsObjects1.length = 0;
gdjs.loadbasegamestuffCode.GDcreditsObjects2.length = 0;
gdjs.loadbasegamestuffCode.GDcreditsObjects3.length = 0;
gdjs.loadbasegamestuffCode.GDcreditsObjects4.length = 0;
gdjs.loadbasegamestuffCode.GDloadingtxtObjects1.length = 0;
gdjs.loadbasegamestuffCode.GDloadingtxtObjects2.length = 0;
gdjs.loadbasegamestuffCode.GDloadingtxtObjects3.length = 0;
gdjs.loadbasegamestuffCode.GDloadingtxtObjects4.length = 0;
gdjs.loadbasegamestuffCode.GDbtmgamesObjects1.length = 0;
gdjs.loadbasegamestuffCode.GDbtmgamesObjects2.length = 0;
gdjs.loadbasegamestuffCode.GDbtmgamesObjects3.length = 0;
gdjs.loadbasegamestuffCode.GDbtmgamesObjects4.length = 0;

gdjs.loadbasegamestuffCode.eventsList11(runtimeScene);

return;

}

gdjs['loadbasegamestuffCode'] = gdjs.loadbasegamestuffCode;
