image = "";
status = "";

function preload(){
 img=loadImage('IMG_2059.jpg');
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
    objectDetector.detect(img, gotResult);
}
function gotResult(error, results) {
    if(error){
        console.log(error);
    }
    console.log(results);
}
function draw(){
image(img, 0, 0, 640, 480);
fill("#FF0000");
text("TV", 275, 225);
noFill();
stroke("#FF0000");
rect(200, 95, 275, 150);



fill("#FF0000");
text("Table", 275, 275);
noFill();
stroke("#FF0000");
rect(100, 250, 275, 150);
   
    
}