img = "";
status = "";

function preload(){
    img = loadImage('IMG-6315.jpg');
}

function setup(){
    canvas = createCanvas(840, 620);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}
function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResult);
}
function gotResult(error, results){
    if(error){
        console.log(error);
    }
    console.log(results);
}
function draw(){
    image(img, 0, 0, 840, 620);
    fill("#FF0000");
    noFill();
    rect(330, 220, 210, 170);
    stroke("#FF0000");
    text("TV", 350, 253);
}