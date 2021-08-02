function setup(){
    canvas = createCanvas(648, 480);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(640, 480)
    video.hide();
    classifer = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/KxtS-IzSN/model.json',modelLoaded);
}
function draw(){
    image(video, 0, 0, 640, 480);
    classifer.classify(video, gotResult);
}

function modelLoaded(){
    console.log('Model Loaded!');
}

function gotResult(error, results) {
    if(error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("result_object_name").innerHTML = results[0].label;
        document.getElementById("result_accuracy_name").innerHTML = results[0].confidence.toFixed(3);
    }
}