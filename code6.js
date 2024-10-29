gdjs.walk_46Code = {};
gdjs.walk_46Code.localVariables = [];
gdjs.walk_46Code.GDsTopObjects1= [];
gdjs.walk_46Code.GDsTopObjects2= [];
gdjs.walk_46Code.GDunDEServedObjects1= [];
gdjs.walk_46Code.GDunDEServedObjects2= [];
gdjs.walk_46Code.GDNewTiledSpriteObjects1= [];
gdjs.walk_46Code.GDNewTiledSpriteObjects2= [];
gdjs.walk_46Code.GDNewTiledSprite2Objects1= [];
gdjs.walk_46Code.GDNewTiledSprite2Objects2= [];
gdjs.walk_46Code.GDhurtObjects1= [];
gdjs.walk_46Code.GDhurtObjects2= [];
gdjs.walk_46Code.GDpaINObjects1= [];
gdjs.walk_46Code.GDpaINObjects2= [];
gdjs.walk_46Code.GDmovementObjects1= [];
gdjs.walk_46Code.GDmovementObjects2= [];
gdjs.walk_46Code.GDstafeObjects1= [];
gdjs.walk_46Code.GDstafeObjects2= [];


gdjs.walk_46Code.mapOfGDgdjs_9546walk_959546Code_9546GDsTopObjects1Objects = Hashtable.newFrom({"sTop": gdjs.walk_46Code.GDsTopObjects1});
gdjs.walk_46Code.mapOfGDgdjs_9546walk_959546Code_9546GDpaINObjects1Objects = Hashtable.newFrom({"paIN": gdjs.walk_46Code.GDpaINObjects1});
gdjs.walk_46Code.mapOfGDgdjs_9546walk_959546Code_9546GDsTopObjects1Objects = Hashtable.newFrom({"sTop": gdjs.walk_46Code.GDsTopObjects1});
gdjs.walk_46Code.mapOfGDgdjs_9546walk_959546Code_9546GDmovementObjects1Objects = Hashtable.newFrom({"movement": gdjs.walk_46Code.GDmovementObjects1});
gdjs.walk_46Code.mapOfGDgdjs_9546walk_959546Code_9546GDsTopObjects1Objects = Hashtable.newFrom({"sTop": gdjs.walk_46Code.GDsTopObjects1});
gdjs.walk_46Code.mapOfGDgdjs_9546walk_959546Code_9546GDstafeObjects1Objects = Hashtable.newFrom({"stafe": gdjs.walk_46Code.GDstafeObjects1});
gdjs.walk_46Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("movement"), gdjs.walk_46Code.GDmovementObjects1);
gdjs.copyArray(runtimeScene.getObjects("sTop"), gdjs.walk_46Code.GDsTopObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.walk_46Code.GDsTopObjects1.length !== 0 ? gdjs.walk_46Code.GDsTopObjects1[0] : null), true, "", 0);
}{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.walk_46Code.GDsTopObjects1.length !== 0 ? gdjs.walk_46Code.GDsTopObjects1[0] : null), true, "jjjjjjj", 0);
}{for(var i = 0, len = gdjs.walk_46Code.GDmovementObjects1.length ;i < len;++i) {
    gdjs.walk_46Code.GDmovementObjects1[i].addPolarForce(0, 50, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("sTop"), gdjs.walk_46Code.GDsTopObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.walk_46Code.GDsTopObjects1.length;i<l;++i) {
    if ( gdjs.walk_46Code.GDsTopObjects1[i].getY() > 1489 ) {
        isConditionTrue_0 = true;
        gdjs.walk_46Code.GDsTopObjects1[k] = gdjs.walk_46Code.GDsTopObjects1[i];
        ++k;
    }
}
gdjs.walk_46Code.GDsTopObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("unDEServed"), gdjs.walk_46Code.GDunDEServedObjects1);
{for(var i = 0, len = gdjs.walk_46Code.GDunDEServedObjects1.length ;i < len;++i) {
    gdjs.walk_46Code.GDunDEServedObjects1[i].setY(-(1000));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("paIN"), gdjs.walk_46Code.GDpaINObjects1);
gdjs.copyArray(runtimeScene.getObjects("sTop"), gdjs.walk_46Code.GDsTopObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.platform.isOnPlatform(gdjs.walk_46Code.mapOfGDgdjs_9546walk_959546Code_9546GDsTopObjects1Objects, "PlatformerObject", gdjs.walk_46Code.mapOfGDgdjs_9546walk_959546Code_9546GDpaINObjects1Objects, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("movement"), gdjs.walk_46Code.GDmovementObjects1);
gdjs.copyArray(runtimeScene.getObjects("sTop"), gdjs.walk_46Code.GDsTopObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.walk_46Code.mapOfGDgdjs_9546walk_959546Code_9546GDsTopObjects1Objects, gdjs.walk_46Code.mapOfGDgdjs_9546walk_959546Code_9546GDmovementObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("sTop"), gdjs.walk_46Code.GDsTopObjects1);
gdjs.copyArray(runtimeScene.getObjects("stafe"), gdjs.walk_46Code.GDstafeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.walk_46Code.mapOfGDgdjs_9546walk_959546Code_9546GDsTopObjects1Objects, gdjs.walk_46Code.mapOfGDgdjs_9546walk_959546Code_9546GDstafeObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level1", false);
}}

}


};

gdjs.walk_46Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.walk_46Code.GDsTopObjects1.length = 0;
gdjs.walk_46Code.GDsTopObjects2.length = 0;
gdjs.walk_46Code.GDunDEServedObjects1.length = 0;
gdjs.walk_46Code.GDunDEServedObjects2.length = 0;
gdjs.walk_46Code.GDNewTiledSpriteObjects1.length = 0;
gdjs.walk_46Code.GDNewTiledSpriteObjects2.length = 0;
gdjs.walk_46Code.GDNewTiledSprite2Objects1.length = 0;
gdjs.walk_46Code.GDNewTiledSprite2Objects2.length = 0;
gdjs.walk_46Code.GDhurtObjects1.length = 0;
gdjs.walk_46Code.GDhurtObjects2.length = 0;
gdjs.walk_46Code.GDpaINObjects1.length = 0;
gdjs.walk_46Code.GDpaINObjects2.length = 0;
gdjs.walk_46Code.GDmovementObjects1.length = 0;
gdjs.walk_46Code.GDmovementObjects2.length = 0;
gdjs.walk_46Code.GDstafeObjects1.length = 0;
gdjs.walk_46Code.GDstafeObjects2.length = 0;

gdjs.walk_46Code.eventsList0(runtimeScene);
gdjs.walk_46Code.GDsTopObjects1.length = 0;
gdjs.walk_46Code.GDsTopObjects2.length = 0;
gdjs.walk_46Code.GDunDEServedObjects1.length = 0;
gdjs.walk_46Code.GDunDEServedObjects2.length = 0;
gdjs.walk_46Code.GDNewTiledSpriteObjects1.length = 0;
gdjs.walk_46Code.GDNewTiledSpriteObjects2.length = 0;
gdjs.walk_46Code.GDNewTiledSprite2Objects1.length = 0;
gdjs.walk_46Code.GDNewTiledSprite2Objects2.length = 0;
gdjs.walk_46Code.GDhurtObjects1.length = 0;
gdjs.walk_46Code.GDhurtObjects2.length = 0;
gdjs.walk_46Code.GDpaINObjects1.length = 0;
gdjs.walk_46Code.GDpaINObjects2.length = 0;
gdjs.walk_46Code.GDmovementObjects1.length = 0;
gdjs.walk_46Code.GDmovementObjects2.length = 0;
gdjs.walk_46Code.GDstafeObjects1.length = 0;
gdjs.walk_46Code.GDstafeObjects2.length = 0;


return;

}

gdjs['walk_46Code'] = gdjs.walk_46Code;
