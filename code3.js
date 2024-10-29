gdjs.Spawn_32ScreenCode = {};
gdjs.Spawn_32ScreenCode.localVariables = [];
gdjs.Spawn_32ScreenCode.GDspawn_9595bgObjects1= [];
gdjs.Spawn_32ScreenCode.GDspawn_9595bgObjects2= [];
gdjs.Spawn_32ScreenCode.GDspawn_9595bgObjects3= [];
gdjs.Spawn_32ScreenCode.GDleft_9595buttonObjects1= [];
gdjs.Spawn_32ScreenCode.GDleft_9595buttonObjects2= [];
gdjs.Spawn_32ScreenCode.GDleft_9595buttonObjects3= [];
gdjs.Spawn_32ScreenCode.GDright_9595buttonObjects1= [];
gdjs.Spawn_32ScreenCode.GDright_9595buttonObjects2= [];
gdjs.Spawn_32ScreenCode.GDright_9595buttonObjects3= [];
gdjs.Spawn_32ScreenCode.GDcounterObjects1= [];
gdjs.Spawn_32ScreenCode.GDcounterObjects2= [];
gdjs.Spawn_32ScreenCode.GDcounterObjects3= [];
gdjs.Spawn_32ScreenCode.GDAmountextObjects1= [];
gdjs.Spawn_32ScreenCode.GDAmountextObjects2= [];
gdjs.Spawn_32ScreenCode.GDAmountextObjects3= [];
gdjs.Spawn_32ScreenCode.GDoverdriveObjects1= [];
gdjs.Spawn_32ScreenCode.GDoverdriveObjects2= [];
gdjs.Spawn_32ScreenCode.GDoverdriveObjects3= [];
gdjs.Spawn_32ScreenCode.GDoverdrivetextObjects1= [];
gdjs.Spawn_32ScreenCode.GDoverdrivetextObjects2= [];
gdjs.Spawn_32ScreenCode.GDoverdrivetextObjects3= [];
gdjs.Spawn_32ScreenCode.GDRedFlatBarObjects1= [];
gdjs.Spawn_32ScreenCode.GDRedFlatBarObjects2= [];
gdjs.Spawn_32ScreenCode.GDRedFlatBarObjects3= [];
gdjs.Spawn_32ScreenCode.GDObjtextObjects1= [];
gdjs.Spawn_32ScreenCode.GDObjtextObjects2= [];
gdjs.Spawn_32ScreenCode.GDObjtextObjects3= [];
gdjs.Spawn_32ScreenCode.GDresteObjects1= [];
gdjs.Spawn_32ScreenCode.GDresteObjects2= [];
gdjs.Spawn_32ScreenCode.GDresteObjects3= [];


gdjs.Spawn_32ScreenCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 1;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("Block");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 2;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("Ball");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 3;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("Rectangle");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 4;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("Slope");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 5;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("Bounceball");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 5;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("Bounceball");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 6;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("Block");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 7;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("Block");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 8;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("Block");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 9;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("Block");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 10;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("Block");
}}

}


};gdjs.Spawn_32ScreenCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Objtext"), gdjs.Spawn_32ScreenCode.GDObjtextObjects1);
gdjs.copyArray(runtimeScene.getObjects("RedFlatBar"), gdjs.Spawn_32ScreenCode.GDRedFlatBarObjects1);
{for(var i = 0, len = gdjs.Spawn_32ScreenCode.GDObjtextObjects1.length ;i < len;++i) {
    gdjs.Spawn_32ScreenCode.GDObjtextObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)));
}
}{for(var i = 0, len = gdjs.Spawn_32ScreenCode.GDRedFlatBarObjects1.length ;i < len;++i) {
    gdjs.Spawn_32ScreenCode.GDRedFlatBarObjects1[i].SetValue(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("reste"), gdjs.Spawn_32ScreenCode.GDresteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Spawn_32ScreenCode.GDresteObjects1.length;i<l;++i) {
    if ( gdjs.Spawn_32ScreenCode.GDresteObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Spawn_32ScreenCode.GDresteObjects1[k] = gdjs.Spawn_32ScreenCode.GDresteObjects1[i];
        ++k;
    }
}
gdjs.Spawn_32ScreenCode.GDresteObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Spawn Screen", true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("counter"), gdjs.Spawn_32ScreenCode.GDcounterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Spawn_32ScreenCode.GDcounterObjects1.length;i<l;++i) {
    if ( gdjs.Spawn_32ScreenCode.GDcounterObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Spawn_32ScreenCode.GDcounterObjects1[k] = gdjs.Spawn_32ScreenCode.GDcounterObjects1[i];
        ++k;
    }
}
gdjs.Spawn_32ScreenCode.GDcounterObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)));
}{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("left_button"), gdjs.Spawn_32ScreenCode.GDleft_9595buttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Spawn_32ScreenCode.GDleft_9595buttonObjects1.length;i<l;++i) {
    if ( gdjs.Spawn_32ScreenCode.GDleft_9595buttonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Spawn_32ScreenCode.GDleft_9595buttonObjects1[k] = gdjs.Spawn_32ScreenCode.GDleft_9595buttonObjects1[i];
        ++k;
    }
}
gdjs.Spawn_32ScreenCode.GDleft_9595buttonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) > 1;
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).sub(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("right_button"), gdjs.Spawn_32ScreenCode.GDright_9595buttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Spawn_32ScreenCode.GDright_9595buttonObjects1.length;i<l;++i) {
    if ( gdjs.Spawn_32ScreenCode.GDright_9595buttonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Spawn_32ScreenCode.GDright_9595buttonObjects1[k] = gdjs.Spawn_32ScreenCode.GDright_9595buttonObjects1[i];
        ++k;
    }
}
gdjs.Spawn_32ScreenCode.GDright_9595buttonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) < 10;
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}}

}


{


gdjs.Spawn_32ScreenCode.eventsList0(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) > 5;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Amountext"), gdjs.Spawn_32ScreenCode.GDAmountextObjects1);
{for(var i = 0, len = gdjs.Spawn_32ScreenCode.GDAmountextObjects1.length ;i < len;++i) {
    gdjs.Spawn_32ScreenCode.GDAmountextObjects1[i].hide(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) <= 5;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Amountext"), gdjs.Spawn_32ScreenCode.GDAmountextObjects1);
{for(var i = 0, len = gdjs.Spawn_32ScreenCode.GDAmountextObjects1.length ;i < len;++i) {
    gdjs.Spawn_32ScreenCode.GDAmountextObjects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Amountext"), gdjs.Spawn_32ScreenCode.GDAmountextObjects1);
{for(var i = 0, len = gdjs.Spawn_32ScreenCode.GDAmountextObjects1.length ;i < len;++i) {
    gdjs.Spawn_32ScreenCode.GDAmountextObjects1[i].hide();
}
}}

}


};

gdjs.Spawn_32ScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Spawn_32ScreenCode.GDspawn_9595bgObjects1.length = 0;
gdjs.Spawn_32ScreenCode.GDspawn_9595bgObjects2.length = 0;
gdjs.Spawn_32ScreenCode.GDspawn_9595bgObjects3.length = 0;
gdjs.Spawn_32ScreenCode.GDleft_9595buttonObjects1.length = 0;
gdjs.Spawn_32ScreenCode.GDleft_9595buttonObjects2.length = 0;
gdjs.Spawn_32ScreenCode.GDleft_9595buttonObjects3.length = 0;
gdjs.Spawn_32ScreenCode.GDright_9595buttonObjects1.length = 0;
gdjs.Spawn_32ScreenCode.GDright_9595buttonObjects2.length = 0;
gdjs.Spawn_32ScreenCode.GDright_9595buttonObjects3.length = 0;
gdjs.Spawn_32ScreenCode.GDcounterObjects1.length = 0;
gdjs.Spawn_32ScreenCode.GDcounterObjects2.length = 0;
gdjs.Spawn_32ScreenCode.GDcounterObjects3.length = 0;
gdjs.Spawn_32ScreenCode.GDAmountextObjects1.length = 0;
gdjs.Spawn_32ScreenCode.GDAmountextObjects2.length = 0;
gdjs.Spawn_32ScreenCode.GDAmountextObjects3.length = 0;
gdjs.Spawn_32ScreenCode.GDoverdriveObjects1.length = 0;
gdjs.Spawn_32ScreenCode.GDoverdriveObjects2.length = 0;
gdjs.Spawn_32ScreenCode.GDoverdriveObjects3.length = 0;
gdjs.Spawn_32ScreenCode.GDoverdrivetextObjects1.length = 0;
gdjs.Spawn_32ScreenCode.GDoverdrivetextObjects2.length = 0;
gdjs.Spawn_32ScreenCode.GDoverdrivetextObjects3.length = 0;
gdjs.Spawn_32ScreenCode.GDRedFlatBarObjects1.length = 0;
gdjs.Spawn_32ScreenCode.GDRedFlatBarObjects2.length = 0;
gdjs.Spawn_32ScreenCode.GDRedFlatBarObjects3.length = 0;
gdjs.Spawn_32ScreenCode.GDObjtextObjects1.length = 0;
gdjs.Spawn_32ScreenCode.GDObjtextObjects2.length = 0;
gdjs.Spawn_32ScreenCode.GDObjtextObjects3.length = 0;
gdjs.Spawn_32ScreenCode.GDresteObjects1.length = 0;
gdjs.Spawn_32ScreenCode.GDresteObjects2.length = 0;
gdjs.Spawn_32ScreenCode.GDresteObjects3.length = 0;

gdjs.Spawn_32ScreenCode.eventsList1(runtimeScene);
gdjs.Spawn_32ScreenCode.GDspawn_9595bgObjects1.length = 0;
gdjs.Spawn_32ScreenCode.GDspawn_9595bgObjects2.length = 0;
gdjs.Spawn_32ScreenCode.GDspawn_9595bgObjects3.length = 0;
gdjs.Spawn_32ScreenCode.GDleft_9595buttonObjects1.length = 0;
gdjs.Spawn_32ScreenCode.GDleft_9595buttonObjects2.length = 0;
gdjs.Spawn_32ScreenCode.GDleft_9595buttonObjects3.length = 0;
gdjs.Spawn_32ScreenCode.GDright_9595buttonObjects1.length = 0;
gdjs.Spawn_32ScreenCode.GDright_9595buttonObjects2.length = 0;
gdjs.Spawn_32ScreenCode.GDright_9595buttonObjects3.length = 0;
gdjs.Spawn_32ScreenCode.GDcounterObjects1.length = 0;
gdjs.Spawn_32ScreenCode.GDcounterObjects2.length = 0;
gdjs.Spawn_32ScreenCode.GDcounterObjects3.length = 0;
gdjs.Spawn_32ScreenCode.GDAmountextObjects1.length = 0;
gdjs.Spawn_32ScreenCode.GDAmountextObjects2.length = 0;
gdjs.Spawn_32ScreenCode.GDAmountextObjects3.length = 0;
gdjs.Spawn_32ScreenCode.GDoverdriveObjects1.length = 0;
gdjs.Spawn_32ScreenCode.GDoverdriveObjects2.length = 0;
gdjs.Spawn_32ScreenCode.GDoverdriveObjects3.length = 0;
gdjs.Spawn_32ScreenCode.GDoverdrivetextObjects1.length = 0;
gdjs.Spawn_32ScreenCode.GDoverdrivetextObjects2.length = 0;
gdjs.Spawn_32ScreenCode.GDoverdrivetextObjects3.length = 0;
gdjs.Spawn_32ScreenCode.GDRedFlatBarObjects1.length = 0;
gdjs.Spawn_32ScreenCode.GDRedFlatBarObjects2.length = 0;
gdjs.Spawn_32ScreenCode.GDRedFlatBarObjects3.length = 0;
gdjs.Spawn_32ScreenCode.GDObjtextObjects1.length = 0;
gdjs.Spawn_32ScreenCode.GDObjtextObjects2.length = 0;
gdjs.Spawn_32ScreenCode.GDObjtextObjects3.length = 0;
gdjs.Spawn_32ScreenCode.GDresteObjects1.length = 0;
gdjs.Spawn_32ScreenCode.GDresteObjects2.length = 0;
gdjs.Spawn_32ScreenCode.GDresteObjects3.length = 0;


return;

}

gdjs['Spawn_32ScreenCode'] = gdjs.Spawn_32ScreenCode;
