function setup() {
  createCanvas(windowWidth, windowHeight)
}

function preload(){
    taozi = loadImage("images/taozi.png");
    tong = loadImage("images/tong.png");
    wujie = loadImage("images/wujie.png");
    lingjie = loadImage("images/lingjie.png");
    yayan = loadImage("images/yayan.png");
    liyanfei = loadImage("images/liyanfei.png");
}

function draw() {
  
  background(200,50);
  
  var friendsList = [taozi,
                 tong,
                 lingjie,
                 wujie,
                 yayan,
                 liyanfei
                    ];
    for(var i=0; i < touches.length; i++) {
        
    var a = random(friendsList);
    
    var touch = touches[i];
    imageMode(CENTER);
    image(a,touchX, touchY,400,400)
  }

    
    
    
    
    

}