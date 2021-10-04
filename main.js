song1 = "";
song2 = "";
leftWristX = 0;
leftWristY = 0;  
rightWristX = 0;
rightWristY = 0;
scoreLeftWrist = 0;

function preload()
{
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3")
}

function setup()
{
    canvas = createCanvas(640,480);
    canvas.position(650,200);
    video = createCapture(VIDEO);

    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);  
    poseNet.on('pose', gotPoses); 

    
    
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        scoreLeftWrist = results[0].pose.keypoints[9].score;        
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX =" + leftWristX +"leftWristY ="+ leftWristY);


        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX =" + rightWristX +"rightWristY ="+ rightWristY);
    }
}

function modelLoaded(){
    console.log('PoseNet Is Initialized');
}

function draw(){
    image(video, 0, 0, 640, 480);
    fill("#ff0000");
    stroke("#ff0000");
    if(scoreLeftWrist > 0.2 ){
        song1.play();
    }
    circle(leftWristX,leftWristY,20);

}
function play_Harry(){
    song1.play();
}
function play_Peter(){
    song2.play();
}
function pause(){
    song2.pause();
    song1.pause()
}
