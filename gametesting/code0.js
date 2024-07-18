gdjs.Credits_32_47_32loading_32base_32game_32instructionsCode = {};
gdjs.Credits_32_47_32loading_32base_32game_32instructionsCode.localVariables = [];
gdjs.Credits_32_47_32loading_32base_32game_32instructionsCode.GDDebugtxtObjects1= [];
gdjs.Credits_32_47_32loading_32base_32game_32instructionsCode.GDDebugtxtObjects2= [];
gdjs.Credits_32_47_32loading_32base_32game_32instructionsCode.GDDebugtxtObjects3= [];
gdjs.Credits_32_47_32loading_32base_32game_32instructionsCode.GDNewTextInputObjects1= [];
gdjs.Credits_32_47_32loading_32base_32game_32instructionsCode.GDNewTextInputObjects2= [];
gdjs.Credits_32_47_32loading_32base_32game_32instructionsCode.GDNewTextInputObjects3= [];
gdjs.Credits_32_47_32loading_32base_32game_32instructionsCode.GDcreditsObjects1= [];
gdjs.Credits_32_47_32loading_32base_32game_32instructionsCode.GDcreditsObjects2= [];
gdjs.Credits_32_47_32loading_32base_32game_32instructionsCode.GDcreditsObjects3= [];


gdjs.Credits_32_47_32loading_32base_32game_32instructionsCode.asyncCallback23324972 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Credits_32_47_32loading_32base_32game_32instructionsCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "menu", false);
}gdjs.Credits_32_47_32loading_32base_32game_32instructionsCode.localVariables.length = 0;
}
gdjs.Credits_32_47_32loading_32base_32game_32instructionsCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.Credits_32_47_32loading_32base_32game_32instructionsCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(13), (runtimeScene) => (gdjs.Credits_32_47_32loading_32base_32game_32instructionsCode.asyncCallback23324972(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Credits_32_47_32loading_32base_32game_32instructionsCode.asyncCallback23324524 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Credits_32_47_32loading_32base_32game_32instructionsCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("Debugtxt"), gdjs.Credits_32_47_32loading_32base_32game_32instructionsCode.GDDebugtxtObjects2);
gdjs.copyArray(runtimeScene.getObjects("credits"), gdjs.Credits_32_47_32loading_32base_32game_32instructionsCode.GDcreditsObjects2);
{for(var i = 0, len = gdjs.Credits_32_47_32loading_32base_32game_32instructionsCode.GDDebugtxtObjects2.length ;i < len;++i) {
    gdjs.Credits_32_47_32loading_32base_32game_32instructionsCode.GDDebugtxtObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Credits_32_47_32loading_32base_32game_32instructionsCode.GDcreditsObjects2.length ;i < len;++i) {
    gdjs.Credits_32_47_32loading_32base_32game_32instructionsCode.GDcreditsObjects2[i].play();
}
}
{ //Subevents
gdjs.Credits_32_47_32loading_32base_32game_32instructionsCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Credits_32_47_32loading_32base_32game_32instructionsCode.localVariables.length = 0;
}
gdjs.Credits_32_47_32loading_32base_32game_32instructionsCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Credits_32_47_32loading_32base_32game_32instructionsCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.Credits_32_47_32loading_32base_32game_32instructionsCode.asyncCallback23324524(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Credits_32_47_32loading_32base_32game_32instructionsCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.Credits_32_47_32loading_32base_32game_32instructionsCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("credits"), gdjs.Credits_32_47_32loading_32base_32game_32instructionsCode.GDcreditsObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Credits_32_47_32loading_32base_32game_32instructionsCode.GDcreditsObjects1.length;i<l;++i) {
    if ( gdjs.Credits_32_47_32loading_32base_32game_32instructionsCode.GDcreditsObjects1[i].getCurrentTime() > 10 ) {
        isConditionTrue_0 = true;
        gdjs.Credits_32_47_32loading_32base_32game_32instructionsCode.GDcreditsObjects1[k] = gdjs.Credits_32_47_32loading_32base_32game_32instructionsCode.GDcreditsObjects1[i];
        ++k;
    }
}
gdjs.Credits_32_47_32loading_32base_32game_32instructionsCode.GDcreditsObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Credits_32_47_32loading_32base_32game_32instructionsCode.GDcreditsObjects1 */
{for(var i = 0, len = gdjs.Credits_32_47_32loading_32base_32game_32instructionsCode.GDcreditsObjects1.length ;i < len;++i) {
    gdjs.Credits_32_47_32loading_32base_32game_32instructionsCode.GDcreditsObjects1[i].getBehavior("Tween").addObjectOpacityTween2("videofade", 0, "linear", 2, true);
}
}}

}


};

gdjs.Credits_32_47_32loading_32base_32game_32instructionsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Credits_32_47_32loading_32base_32game_32instructionsCode.GDDebugtxtObjects1.length = 0;
gdjs.Credits_32_47_32loading_32base_32game_32instructionsCode.GDDebugtxtObjects2.length = 0;
gdjs.Credits_32_47_32loading_32base_32game_32instructionsCode.GDDebugtxtObjects3.length = 0;
gdjs.Credits_32_47_32loading_32base_32game_32instructionsCode.GDNewTextInputObjects1.length = 0;
gdjs.Credits_32_47_32loading_32base_32game_32instructionsCode.GDNewTextInputObjects2.length = 0;
gdjs.Credits_32_47_32loading_32base_32game_32instructionsCode.GDNewTextInputObjects3.length = 0;
gdjs.Credits_32_47_32loading_32base_32game_32instructionsCode.GDcreditsObjects1.length = 0;
gdjs.Credits_32_47_32loading_32base_32game_32instructionsCode.GDcreditsObjects2.length = 0;
gdjs.Credits_32_47_32loading_32base_32game_32instructionsCode.GDcreditsObjects3.length = 0;

gdjs.Credits_32_47_32loading_32base_32game_32instructionsCode.eventsList2(runtimeScene);

return;

}

gdjs['Credits_32_47_32loading_32base_32game_32instructionsCode'] = gdjs.Credits_32_47_32loading_32base_32game_32instructionsCode;
