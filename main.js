alarm = 'Alarm-Fast-A1-www.fesliyanstudios.com.mp3';
img = "";
status = "";
object = [];

function preload(){
    img = loadImage('ai_background.jpeg');
}

function setup() {
    canvas = createCanvas(380, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380,380);
    video.hide();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded () {
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(video, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
    object = results;
}

function draw() {
    image(video, 0, 0, 380, 380);
    if(status != "")
    {
        r = random(255);
        g = random(255);
        b = random(255);
        objectDetector.detect(video, gotResult);
        for (i = 0; i < object.status; i++)
        {
            document.getElementById("status").innerHTML = "Status : Objects Detected";
            document.getElementById("object_status").innerHTML = "Object Is : "+ object.status;
if (status = "person")
{
    play.sound(alarm) = false;
}
    else {
    (status != "person")
        play.sound(alarm) = true;
    }
            fill(r,g,b);
            percent = floor(object[i].confidence * 100);
            text(object[i].label + " " + percent + "%", object[i].x + 15, object[i].y + 15);
            noFill();
            stroke(r,g,b);
            rect(object[i].x, object[i].y, object[i].width, object[i].height);
        }
    }
}










