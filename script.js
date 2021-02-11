let $centimeter = document.getElementById("centimeter");
let $millimeter = document.getElementById("millimeter");
let $meter = document.getElementById("meter");
let $feet = document.getElementById( "feet");
let $miles = document.getElementById("miles");
let $inches = document.getElementById("inches");
let $yards = document.getElementById("yards");

$centimeter.addEventListener("keyup", convertCentimeter);
$millimeter.addEventListener("keyup", convertMillimeter);
$meter.addEventListener("keyup", convertMeter);

function convertCentimeter(){
if(this.value){
    $millimeter.value = this.value * 10;
    $meter.value = this.value/100;
    $feet.innerHTML = this.value * 0.0328;
    $miles.innerHTML = this.value * 0.00000621;
    $inches.innerHTML = this.value * 0.394;
    $yards.innerHTML = this.value * 0.0109361;

}else if (this.placeholder = "0"){
    millimeter.value = "";
    $meter.value = "";
    $feet.innerHTML = "0";
    $miles.innerHTML = "0"
    $inches.innerHTML = "0";
    $yards.innerHTML = "0";
}
}
function convertMillimeter() {
    if (this.value) {
        $centimeter.value = this.value/ 10;
        $meter.value = this.value / 1000;
        $feet.innerHTML = this.value *0.003281;
        $miles.innerHTML = this.value * 0.000000621;
        $inches.innerHTML = this.value * 0.0394;
        $yards.innerHTML = this.value * 0.00109361;
    }
    else if (this.placeholder = "0") {
        $centimeter.value = "";
        $meter.value = "";
        $feet.innerHTML = "0";
        $miles.innerHTML = "0"
        $inches.innerHTML = "0";
        $yards.innerHTML = "0";
    }
}
function convertMeter() {
    if (this.value) {
        $millimeter.value = this.value * 1000;
        $centimeter.value = this.value * 100;
        $feet.innerHTML = this.value *3.281;
        $miles.innerHTML = this.value / 1609;
        $inches.innerHTML = this.value * 39.37;
        $yards.innerHTML = this.value * 1.094;
    }
    else if(this.placeholder="0"){
        $centimeter.value = "";
        $millimeter.value = "";
        $feet.innerHTML = "0";
        $miles.innerHTML = "0"
        $inches.innerHTML = "0";
        $yards.innerHTML = "0";
    }
}
 