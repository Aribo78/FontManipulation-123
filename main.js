function preload(){

}
function setup(){
canvas = createCanvas(500, 500)
canvas.position(1200, 240)
video = createCapture(VIDEO)
video.position(75, 250)
classifier = ml5.poseNet(video, modelLoaded)
classifier.on('pose', gotPoses)
}
function draw(){
background("black")
}
function modelLoaded(){
    console.log('Model Loaded')
}
function gotPoses(results){
if(results.length > 0)
{
    console.log(results)
}
}
