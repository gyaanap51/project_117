image2 = "";
status = "";
object = [];

function preload(){
 image2=loadImage('IMG_2060.jpg');
}

function back(){
    window.location = "index.html";
}

function setup(){
    canvas = createCanvas(640, 480);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";

}
function modelLoaded(){
    console.log("Model Loaded!")
    status = true;
    objectDetector.detect(image2, gotResult);
}
function gotResult(error, results) {
    if(error){
        console.log(error);
    }
    console.log(results);
    object = results;
}
function draw(){
image(imagde2, 0, 0, 640, 480);
if(status !="")
{
    for (i =0; i<object.length; i++)
    {
        document.getElementById("status").innerHTML = "Status :P Object Dectected";

        fill("#FF0000")
        percent = floor(object[i].confidence *100);
        text(object[i].label + " " + percent + "%", object[i].x+15, object[i].y+15);
        noFill();   
        stroke("#FF0000");
        rect(object[i].x, object[i].y, object[i].width, object[i].height);
    }
}
   
    
}