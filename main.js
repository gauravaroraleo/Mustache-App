function setup() {
    c1 = createCanvas(500, 500);
    c1.center();
    v1 = createCapture(VIDEO);
    v1.hide();
    pn = ml5.poseNet(v1, modelLoaded);
    pn.on('pose', gotPoses);
}
nosex = 0;
nosey = 0;
function preload(){
    myMustache=loadImage('https://i.postimg.cc/3x3QzSGq/m.png')
    
}
function modelLoaded() {
    console.log('Model has loaded')
}

function draw() {
    image(v1, 0, 0, 500, 500)
    image(myMustache,nosex,nosey,90,50)
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results)
        nosex = results[0].pose.nose.x-112;
        nosey = results[0].pose.nose.y+20;
        console.log("My nose X is " + nosex + "My nose Y is " + nosey)
    }

}

function takepic() {
    save('joker.png');

}
