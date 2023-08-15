img = "";

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();

}

function preLoad(){
    img = LoadImage('dog_cat.jpg');
}

function draw(){
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text ("Dog", 45, 75);
    notFill();
    stroke("#FF0000");
    rect(30, 60, 450, 350);

    fill("#FF0000");
    text ("Cat", 320, 120);
    notFill();
    stroke("#FF0000");
    rect(300, 290, 270, 320);
}