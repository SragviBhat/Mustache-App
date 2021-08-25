function preload(){
}

function setup(){

canvas = createCanvas(450, 450);
vid = createCapture(VIDEO);
canvas.center();
vid.size(450, 450);
vid.hide();

pose = ml5.poseNet(vid, modelloaded);
pose.on('pose', gotPoses);
}

function draw(){

image(vid, 0, 0, 450, 450);
}

function take_snapshot(){

save("Mustache.jpeg");
}

function modelloaded(){

console.log("PoseNet Loaded");
}

function gotPoses(results)
{
if(results.length > 0){
console.log(results);
console.log("nose x = " + results[0].pose.nose.x);
console.log("nose y = " + results[0].pose.nose.y);
}
}