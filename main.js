left_wrist_x = 0;
right_wrist_x = 0;
difference = 0;

function preload(){

}
function setup(){
canvas = createCanvas(500, 500)
canvas.position(1200, 240)
video = createCapture(VIDEO)
video.position(75, 250)
poseNet = ml5.poseNet(video, modelLoaded)
poseNet.on('pose', gotPoses)
}
function modelDone(){
    console.log("Posenet has Initialized and Loaded");
}
function draw(){
background("black")
document.getElementById("font-size").innerHTML = " Font size Of the Text will Be - "+difference+"px";
fill("red")
textSize(difference);
text('Aribo', 50, 400);
}
function modelLoaded(){
    console.log('Model Loaded')
}
function gotPoses(results,error){
if(error)
{
        console.error(error);
}
       if(results.length > 0){
        console.log(results);

        right_wrist_x = results[0].pose.rightWrist.x;
        left_wrist_x = results[0].pose.leftWrist.x;

        difference = floor(left_wrist_x - right_wrist_x);

        console.log("rightwrist_x = "+results[0].pose.rightWrist.x+"rightwrist_y = "+results[0].pose.rightWrist.y);
        console.log("leftwrist_x = "+results[0].pose.leftWrist.x+"rightwrist_y = "+results[0].pose.leftWrist.y);
       }
}

    
