toxic = "";
arcade = "";
function setup(){
    canvas = createCanvas(600,530)
    canvas.center()
  
    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,0,0,600,530)
}
function preload(){
    toxic = loadSound("BoyWithUke_192(PaglaSongs).mp3");
    arcade = loadSound("Arcade (1).mp3.crdownload")
}