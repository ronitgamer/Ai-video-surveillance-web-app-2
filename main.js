video="";

function preload(){
video=createVideo("video.mp4");
video.hide();


}


function setup(){
canvas=createCanvas(380,380);
canvas.center();

}

function draw(){
image(video,0,0,380,380);
}

function start(){
objectDetecter=ml5.objectDetector("cocossd",modelLoaded);
document.getElementById("status").innerHTML="Status : Object Detected"

}

function modelLoaded(){
console.log("Model loaded!");
Status=true;
video.loop();
video.speed(1);
video.volume(0);
  
}