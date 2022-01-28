var song="";
var leftwrist_y=0;
var leftwrist_x=0;
var rightwrist_x=0;
var rightwrist_y=0;

function setup(){
canvas=createCanvas(600,400);
canvas.center();
video=createCapture(VIDEO);
video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on("pose",gotposes);
}

function draw(){
image(video,0,0,600,400);
}

function preload(){
    song=loadSound("sound.mp3");

}

function play(){
    song.play();
song.setVolume(0.5);
song.rate(1.5);    

}

function stop(){
    song.stop();

}

function modelLoaded(){
    console.log("Posenet is intialized");
}

function gotposes(results){
if(results.length>0){
console.log(results);
leftwrist_x=results[0].pose.leftWrist.x;
leftwrist_y=results[0].pose.leftWrist.y;
console.log("Leftwrist y="+leftwrist_y);
console.log("Leftwrist x="+leftwrist_x);
rightwrist_x=results[0].pose.rightWrist.x;
rightwrist_y=results[0].pose.rightWrist.y;
console.log("Rightwrist y="+rightwrist_y);
console.log("Rightwrist x" +rightwrist_x);

}
}