gdjs.BEtapanelCode = {};
gdjs.BEtapanelCode.localVariables = [];
gdjs.BEtapanelCode.GDNewTextObjects1= [];
gdjs.BEtapanelCode.GDNewTextObjects2= [];
gdjs.BEtapanelCode.GDcapset_9595buttonObjects1= [];
gdjs.BEtapanelCode.GDcapset_9595buttonObjects2= [];
gdjs.BEtapanelCode.GDNewSpriteObjects1= [];
gdjs.BEtapanelCode.GDNewSpriteObjects2= [];
gdjs.BEtapanelCode.GDGiveoddjectbuttonObjects1= [];
gdjs.BEtapanelCode.GDGiveoddjectbuttonObjects2= [];
gdjs.BEtapanelCode.GDbackObjects1= [];
gdjs.BEtapanelCode.GDbackObjects2= [];
gdjs.BEtapanelCode.GDblueObjects1= [];
gdjs.BEtapanelCode.GDblueObjects2= [];
gdjs.BEtapanelCode.GDbg_9595color_9595textObjects1= [];
gdjs.BEtapanelCode.GDbg_9595color_9595textObjects2= [];
gdjs.BEtapanelCode.GDredObjects1= [];
gdjs.BEtapanelCode.GDredObjects2= [];
gdjs.BEtapanelCode.GDgreenObjects1= [];
gdjs.BEtapanelCode.GDgreenObjects2= [];
gdjs.BEtapanelCode.GDpurpleObjects1= [];
gdjs.BEtapanelCode.GDpurpleObjects2= [];
gdjs.BEtapanelCode.GDNewSprite2Objects1= [];
gdjs.BEtapanelCode.GDNewSprite2Objects2= [];
gdjs.BEtapanelCode.GDNewText2Objects1= [];
gdjs.BEtapanelCode.GDNewText2Objects2= [];
gdjs.BEtapanelCode.GDNewText3Objects1= [];
gdjs.BEtapanelCode.GDNewText3Objects2= [];


gdjs.BEtapanelCode.mapOfGDgdjs_9546BEtapanelCode_9546GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.BEtapanelCode.GDNewSpriteObjects1});
gdjs.BEtapanelCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("back"), gdjs.BEtapanelCode.GDbackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BEtapanelCode.GDbackObjects1.length;i<l;++i) {
    if ( gdjs.BEtapanelCode.GDbackObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.BEtapanelCode.GDbackObjects1[k] = gdjs.BEtapanelCode.GDbackObjects1[i];
        ++k;
    }
}
gdjs.BEtapanelCode.GDbackObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("capset_button"), gdjs.BEtapanelCode.GDcapset_9595buttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BEtapanelCode.GDcapset_9595buttonObjects1.length;i<l;++i) {
    if ( gdjs.BEtapanelCode.GDcapset_9595buttonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.BEtapanelCode.GDcapset_9595buttonObjects1[k] = gdjs.BEtapanelCode.GDcapset_9595buttonObjects1[i];
        ++k;
    }
}
gdjs.BEtapanelCode.GDcapset_9595buttonObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Giveoddjectbutton"), gdjs.BEtapanelCode.GDGiveoddjectbuttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BEtapanelCode.GDGiveoddjectbuttonObjects1.length;i<l;++i) {
    if ( gdjs.BEtapanelCode.GDGiveoddjectbuttonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.BEtapanelCode.GDGiveoddjectbuttonObjects1[k] = gdjs.BEtapanelCode.GDGiveoddjectbuttonObjects1[i];
        ++k;
    }
}
gdjs.BEtapanelCode.GDGiveoddjectbuttonObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setString("Killbox");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("blue"), gdjs.BEtapanelCode.GDblueObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BEtapanelCode.GDblueObjects1.length;i<l;++i) {
    if ( gdjs.BEtapanelCode.GDblueObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.BEtapanelCode.GDblueObjects1[k] = gdjs.BEtapanelCode.GDblueObjects1[i];
        ++k;
    }
}
gdjs.BEtapanelCode.GDblueObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "74;144;226");
}{runtimeScene.getScene().getVariables().getFromIndex(0).concatenateString("3");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("red"), gdjs.BEtapanelCode.GDredObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BEtapanelCode.GDredObjects1.length;i<l;++i) {
    if ( gdjs.BEtapanelCode.GDredObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.BEtapanelCode.GDredObjects1[k] = gdjs.BEtapanelCode.GDredObjects1[i];
        ++k;
    }
}
gdjs.BEtapanelCode.GDredObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "208;2;27");
}{runtimeScene.getScene().getVariables().getFromIndex(0).concatenateString("4");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("green"), gdjs.BEtapanelCode.GDgreenObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BEtapanelCode.GDgreenObjects1.length;i<l;++i) {
    if ( gdjs.BEtapanelCode.GDgreenObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.BEtapanelCode.GDgreenObjects1[k] = gdjs.BEtapanelCode.GDgreenObjects1[i];
        ++k;
    }
}
gdjs.BEtapanelCode.GDgreenObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "126;211;33");
}{runtimeScene.getScene().getVariables().getFromIndex(0).concatenateString("8");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("purple"), gdjs.BEtapanelCode.GDpurpleObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BEtapanelCode.GDpurpleObjects1.length;i<l;++i) {
    if ( gdjs.BEtapanelCode.GDpurpleObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.BEtapanelCode.GDpurpleObjects1[k] = gdjs.BEtapanelCode.GDpurpleObjects1[i];
        ++k;
    }
}
gdjs.BEtapanelCode.GDpurpleObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "144;19;254");
}{runtimeScene.getScene().getVariables().getFromIndex(0).concatenateString("9");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.BEtapanelCode.GDNewSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.BEtapanelCode.mapOfGDgdjs_9546BEtapanelCode_9546GDNewSpriteObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.BEtapanelCode.GDNewText2Objects1);
{for(var i = 0, len = gdjs.BEtapanelCode.GDNewText2Objects1.length ;i < len;++i) {
    gdjs.BEtapanelCode.GDNewText2Objects1[i].hide(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.BEtapanelCode.GDNewText2Objects1);
{for(var i = 0, len = gdjs.BEtapanelCode.GDNewText2Objects1.length ;i < len;++i) {
    gdjs.BEtapanelCode.GDNewText2Objects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewText3"), gdjs.BEtapanelCode.GDNewText3Objects1);
{for(var i = 0, len = gdjs.BEtapanelCode.GDNewText3Objects1.length ;i < len;++i) {
    gdjs.BEtapanelCode.GDNewText3Objects1[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)) == "4983";
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "home.", true);
}}

}


};

gdjs.BEtapanelCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.BEtapanelCode.GDNewTextObjects1.length = 0;
gdjs.BEtapanelCode.GDNewTextObjects2.length = 0;
gdjs.BEtapanelCode.GDcapset_9595buttonObjects1.length = 0;
gdjs.BEtapanelCode.GDcapset_9595buttonObjects2.length = 0;
gdjs.BEtapanelCode.GDNewSpriteObjects1.length = 0;
gdjs.BEtapanelCode.GDNewSpriteObjects2.length = 0;
gdjs.BEtapanelCode.GDGiveoddjectbuttonObjects1.length = 0;
gdjs.BEtapanelCode.GDGiveoddjectbuttonObjects2.length = 0;
gdjs.BEtapanelCode.GDbackObjects1.length = 0;
gdjs.BEtapanelCode.GDbackObjects2.length = 0;
gdjs.BEtapanelCode.GDblueObjects1.length = 0;
gdjs.BEtapanelCode.GDblueObjects2.length = 0;
gdjs.BEtapanelCode.GDbg_9595color_9595textObjects1.length = 0;
gdjs.BEtapanelCode.GDbg_9595color_9595textObjects2.length = 0;
gdjs.BEtapanelCode.GDredObjects1.length = 0;
gdjs.BEtapanelCode.GDredObjects2.length = 0;
gdjs.BEtapanelCode.GDgreenObjects1.length = 0;
gdjs.BEtapanelCode.GDgreenObjects2.length = 0;
gdjs.BEtapanelCode.GDpurpleObjects1.length = 0;
gdjs.BEtapanelCode.GDpurpleObjects2.length = 0;
gdjs.BEtapanelCode.GDNewSprite2Objects1.length = 0;
gdjs.BEtapanelCode.GDNewSprite2Objects2.length = 0;
gdjs.BEtapanelCode.GDNewText2Objects1.length = 0;
gdjs.BEtapanelCode.GDNewText2Objects2.length = 0;
gdjs.BEtapanelCode.GDNewText3Objects1.length = 0;
gdjs.BEtapanelCode.GDNewText3Objects2.length = 0;

gdjs.BEtapanelCode.eventsList0(runtimeScene);
gdjs.BEtapanelCode.GDNewTextObjects1.length = 0;
gdjs.BEtapanelCode.GDNewTextObjects2.length = 0;
gdjs.BEtapanelCode.GDcapset_9595buttonObjects1.length = 0;
gdjs.BEtapanelCode.GDcapset_9595buttonObjects2.length = 0;
gdjs.BEtapanelCode.GDNewSpriteObjects1.length = 0;
gdjs.BEtapanelCode.GDNewSpriteObjects2.length = 0;
gdjs.BEtapanelCode.GDGiveoddjectbuttonObjects1.length = 0;
gdjs.BEtapanelCode.GDGiveoddjectbuttonObjects2.length = 0;
gdjs.BEtapanelCode.GDbackObjects1.length = 0;
gdjs.BEtapanelCode.GDbackObjects2.length = 0;
gdjs.BEtapanelCode.GDblueObjects1.length = 0;
gdjs.BEtapanelCode.GDblueObjects2.length = 0;
gdjs.BEtapanelCode.GDbg_9595color_9595textObjects1.length = 0;
gdjs.BEtapanelCode.GDbg_9595color_9595textObjects2.length = 0;
gdjs.BEtapanelCode.GDredObjects1.length = 0;
gdjs.BEtapanelCode.GDredObjects2.length = 0;
gdjs.BEtapanelCode.GDgreenObjects1.length = 0;
gdjs.BEtapanelCode.GDgreenObjects2.length = 0;
gdjs.BEtapanelCode.GDpurpleObjects1.length = 0;
gdjs.BEtapanelCode.GDpurpleObjects2.length = 0;
gdjs.BEtapanelCode.GDNewSprite2Objects1.length = 0;
gdjs.BEtapanelCode.GDNewSprite2Objects2.length = 0;
gdjs.BEtapanelCode.GDNewText2Objects1.length = 0;
gdjs.BEtapanelCode.GDNewText2Objects2.length = 0;
gdjs.BEtapanelCode.GDNewText3Objects1.length = 0;
gdjs.BEtapanelCode.GDNewText3Objects2.length = 0;


return;

}

gdjs['BEtapanelCode'] = gdjs.BEtapanelCode;
