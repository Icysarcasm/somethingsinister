gdjs.Main_32MenuCode = {};
gdjs.Main_32MenuCode.localVariables = [];
gdjs.Main_32MenuCode.GDSelectiontextObjects1= [];
gdjs.Main_32MenuCode.GDSelectiontextObjects2= [];
gdjs.Main_32MenuCode.GDPotato_9595buttonObjects1= [];
gdjs.Main_32MenuCode.GDPotato_9595buttonObjects2= [];
gdjs.Main_32MenuCode.GDPotatotextbodyObjects1= [];
gdjs.Main_32MenuCode.GDPotatotextbodyObjects2= [];
gdjs.Main_32MenuCode.GDSchool_9595ButtonObjects1= [];
gdjs.Main_32MenuCode.GDSchool_9595ButtonObjects2= [];
gdjs.Main_32MenuCode.GDSchooltextheaderObjects1= [];
gdjs.Main_32MenuCode.GDSchooltextheaderObjects2= [];
gdjs.Main_32MenuCode.GDSchooltextbodyObjects1= [];
gdjs.Main_32MenuCode.GDSchooltextbodyObjects2= [];
gdjs.Main_32MenuCode.GDSplashtextObjects1= [];
gdjs.Main_32MenuCode.GDSplashtextObjects2= [];
gdjs.Main_32MenuCode.GDlisttextObjects1= [];
gdjs.Main_32MenuCode.GDlisttextObjects2= [];


gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDPotato_95959595buttonObjects1Objects = Hashtable.newFrom({"Potato_button": gdjs.Main_32MenuCode.GDPotato_9595buttonObjects1});
gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDPotato_95959595buttonObjects1Objects = Hashtable.newFrom({"Potato_button": gdjs.Main_32MenuCode.GDPotato_9595buttonObjects1});
gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDSchool_95959595ButtonObjects1Objects = Hashtable.newFrom({"School_Button": gdjs.Main_32MenuCode.GDSchool_9595ButtonObjects1});
gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDSchool_95959595ButtonObjects1Objects = Hashtable.newFrom({"School_Button": gdjs.Main_32MenuCode.GDSchool_9595ButtonObjects1});
gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDPotato_95959595buttonObjects1Objects = Hashtable.newFrom({"Potato_button": gdjs.Main_32MenuCode.GDPotato_9595buttonObjects1});
gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDSchool_95959595ButtonObjects1Objects = Hashtable.newFrom({"School_Button": gdjs.Main_32MenuCode.GDSchool_9595ButtonObjects1});
gdjs.Main_32MenuCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Potatotextbody"), gdjs.Main_32MenuCode.GDPotatotextbodyObjects1);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDPotatotextbodyObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDPotatotextbodyObjects1[i].hide();
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Testing floor", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Potato_button"), gdjs.Main_32MenuCode.GDPotato_9595buttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDPotato_95959595buttonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Main_32MenuCode.GDPotato_9595buttonObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Potatotextbody"), gdjs.Main_32MenuCode.GDPotatotextbodyObjects1);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDPotato_9595buttonObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDPotato_9595buttonObjects1[i].getBehavior("Scale").setScale(0.8);
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDPotatotextbodyObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDPotatotextbodyObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Potato_button"), gdjs.Main_32MenuCode.GDPotato_9595buttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDPotato_95959595buttonObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.Main_32MenuCode.GDPotato_9595buttonObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Potatotextbody"), gdjs.Main_32MenuCode.GDPotatotextbodyObjects1);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDPotato_9595buttonObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDPotato_9595buttonObjects1[i].getBehavior("Scale").setScale(0.5);
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDPotatotextbodyObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDPotatotextbodyObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("School_Button"), gdjs.Main_32MenuCode.GDSchool_9595ButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDSchool_95959595ButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Main_32MenuCode.GDSchool_9595ButtonObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Schooltextbody"), gdjs.Main_32MenuCode.GDSchooltextbodyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Schooltextheader"), gdjs.Main_32MenuCode.GDSchooltextheaderObjects1);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDSchool_9595ButtonObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDSchool_9595ButtonObjects1[i].getBehavior("Scale").setScale(0.8);
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDSchooltextheaderObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDSchooltextheaderObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDSchooltextbodyObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDSchooltextbodyObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("School_Button"), gdjs.Main_32MenuCode.GDSchool_9595ButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDSchool_95959595ButtonObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.Main_32MenuCode.GDSchool_9595ButtonObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Schooltextbody"), gdjs.Main_32MenuCode.GDSchooltextbodyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Schooltextheader"), gdjs.Main_32MenuCode.GDSchooltextheaderObjects1);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDSchool_9595ButtonObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDSchool_9595ButtonObjects1[i].getBehavior("Scale").setScale(0.5);
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDSchooltextheaderObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDSchooltextheaderObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDSchooltextbodyObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDSchooltextbodyObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Potato_button"), gdjs.Main_32MenuCode.GDPotato_9595buttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDPotato_95959595buttonObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Testing floor", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("School_Button"), gdjs.Main_32MenuCode.GDSchool_9595ButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDSchool_95959595ButtonObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
}

}


};

gdjs.Main_32MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Main_32MenuCode.GDSelectiontextObjects1.length = 0;
gdjs.Main_32MenuCode.GDSelectiontextObjects2.length = 0;
gdjs.Main_32MenuCode.GDPotato_9595buttonObjects1.length = 0;
gdjs.Main_32MenuCode.GDPotato_9595buttonObjects2.length = 0;
gdjs.Main_32MenuCode.GDPotatotextbodyObjects1.length = 0;
gdjs.Main_32MenuCode.GDPotatotextbodyObjects2.length = 0;
gdjs.Main_32MenuCode.GDSchool_9595ButtonObjects1.length = 0;
gdjs.Main_32MenuCode.GDSchool_9595ButtonObjects2.length = 0;
gdjs.Main_32MenuCode.GDSchooltextheaderObjects1.length = 0;
gdjs.Main_32MenuCode.GDSchooltextheaderObjects2.length = 0;
gdjs.Main_32MenuCode.GDSchooltextbodyObjects1.length = 0;
gdjs.Main_32MenuCode.GDSchooltextbodyObjects2.length = 0;
gdjs.Main_32MenuCode.GDSplashtextObjects1.length = 0;
gdjs.Main_32MenuCode.GDSplashtextObjects2.length = 0;
gdjs.Main_32MenuCode.GDlisttextObjects1.length = 0;
gdjs.Main_32MenuCode.GDlisttextObjects2.length = 0;

gdjs.Main_32MenuCode.eventsList0(runtimeScene);
gdjs.Main_32MenuCode.GDSelectiontextObjects1.length = 0;
gdjs.Main_32MenuCode.GDSelectiontextObjects2.length = 0;
gdjs.Main_32MenuCode.GDPotato_9595buttonObjects1.length = 0;
gdjs.Main_32MenuCode.GDPotato_9595buttonObjects2.length = 0;
gdjs.Main_32MenuCode.GDPotatotextbodyObjects1.length = 0;
gdjs.Main_32MenuCode.GDPotatotextbodyObjects2.length = 0;
gdjs.Main_32MenuCode.GDSchool_9595ButtonObjects1.length = 0;
gdjs.Main_32MenuCode.GDSchool_9595ButtonObjects2.length = 0;
gdjs.Main_32MenuCode.GDSchooltextheaderObjects1.length = 0;
gdjs.Main_32MenuCode.GDSchooltextheaderObjects2.length = 0;
gdjs.Main_32MenuCode.GDSchooltextbodyObjects1.length = 0;
gdjs.Main_32MenuCode.GDSchooltextbodyObjects2.length = 0;
gdjs.Main_32MenuCode.GDSplashtextObjects1.length = 0;
gdjs.Main_32MenuCode.GDSplashtextObjects2.length = 0;
gdjs.Main_32MenuCode.GDlisttextObjects1.length = 0;
gdjs.Main_32MenuCode.GDlisttextObjects2.length = 0;


return;

}

gdjs['Main_32MenuCode'] = gdjs.Main_32MenuCode;
