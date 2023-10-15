

let meters    =document.getElementById("meters");
let centimeters   =document.getElementById("centimeters");
let inches   =document.getElementById("inches");
let feet      =document.getElementById("feet");
let yards    =document.getElementById("yards");
let miles     =document.getElementById("miles");
let kilometers    =document.getElementById("kilometers");



function meterToOther(val){
    centimeters.value   = val/0.01;
    inches.value = val*39.370; 
    feet.value = val*3.2808; 
    yards.value = val*1.0936;
    miles.value = val*0.00062137; 
    kilometers.value   = val/1000;
   
}

function cmToOther(val){
    meters.value = val/100;  
    inches.value = val*0.39370;
    feet.value = val*0.032808;
    yards.value = val*0.010936; 
    miles.value = val*0.0000062137;
    kilometers.value = val/100000 ;

}

function inchesToOther(val){
    meters.value = val/39.370; 
    centimeters.value = val/0.39370;
    feet.value = val*0.083333;
    yards.value = val*0.027778; 
    miles.value = val*0.000015783;
    kilometers.value = val/39370;

}

function feetToOther(val){
    meters.value =val/3.2808; 
    centimeters.value = val/0.032808; 
    inches.value = val*12;   
    yards.value  =  val*0.33333;  
    miles.value  =  val*0.00018939;  
    kilometers.value    =  val/3280.8; 
        
}

function yardsToOther(val){
    meters.value = val/1.0936; 
    centimeters.value = val/0.010936;
    inches.value = val*36;  
    feet.value = val*3;
    miles.value = val*0.00056818;
    kilometers.value = val/1093.6;
   
}

function milesToOther(val){
    meters.value = val/0.00062137;
    centimeters.value = val/0.0000062137;
    inches.value = val*63360;  
    feet.value = val*5280;
    yards.value = val*1760; 
    kilometers.value = val/0.62137;


}

function kmToOther(val){
    meters.value = val*1000;
    centimeters.value = val*100000;
    inches.value = val*39370;
    feet.value = val*3280.8;
    yards.value = val*1093.6; 
    miles.value = val*0.62137;
}
// *********************//

function convertToOthers(convertFrom,value){    
    switch(convertFrom){
        case "meters" : meterToOther(parseFloat(value)); break;
        case "centimeters": cmToOther(parseFloat(value)); break;
        case "inches" : inchesToOther(parseFloat(value)); break;
        case "feet"   : feetToOther (parseFloat(value)); break;
        case "yards"  : yardsToOther (parseFloat(value)); break;
        case "miles" : milesToOther(parseFloat(value)); break;
        case "kilometers" : kmToOther (parseFloat(value)); break;
    }
}

function resetFields() {
    meters.value = "";
    centimeters.value = "";
    inches.value = "";
    feet.value = "";
    yards.value = "";
    miles.value = "";
    kilometers.value = "";
}