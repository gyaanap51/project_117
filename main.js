function setup(){
    canvas = createCanvas(648, 480);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(640, 480)
    video.hide();
}
function draw(){
    image(video, 0, 0, 640, 480);
}
