nosex=0;
nosey=0;

function preload(){
nose=loadImage("https://i.postimg.cc/ZqS01FSX/cap-removebg-preview.png")
}

function setup(){
    canvas=createCanvas(400, 400);
    canvas.center();
    video=createCapture(VIDEO)
    video.size(400, 400)
    video.hide()
    poseNet=ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses)
}

function draw(){
    image(video, 0, 0, 400, 400);
    image(nose, nosex, nosey, 150, 150)
}

function snap(){
    save("my filtered image")
}

function modelLoaded(){
    console.log("The madel has been loaded")
}

function gotPoses(results){
    if (results.length > 0){
        console.log(results)
        console.log("The x value is, " + results[0].pose.nose.x+" and the y value is "+ results[0].pose.nose.y)
        nosex=results[0].pose.nose.x-100;
        nosey=results[0].pose.nose.y-155;
    }
}
