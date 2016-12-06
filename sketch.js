function setup() {
  createCanvas(windowWidth, windowHeight)
}

function preload(){
    taozi = loadImage("images/a.png");
    tong = loadImage("images/b.png");
    lingjie = loadImage("images/c.png");
    wujie = loadImage("images/d.png");
    yayan = loadImage("images/e.png");
    wo = loadImage("images/f.png");
}

function draw() {
  
  background(200,50);
  
  var friendsList = ['taozi',
                 'tong',
                 'lingjie',
                 'wujie',
                 'yayan',
                 'wo'
                    ];
    for(var i=radom(0,friendsList.length); i < friendsList.length; i++) {
    
    
    var touch = touches[i];
    fill(colorList[i]);
    ellipse(touch.x, touch.y, 150, 150);
  }

    
    
    
    
    

}