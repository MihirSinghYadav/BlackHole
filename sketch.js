const c = 30;
const G = 3.54;
const dt = 0.1;

let m87;

const particles = [];
let start,end;

function setup() {
  createCanvas(windowWidth, windowHeight);
  ellipseMode(RADIUS);
  m87 = new Blackhole(width/2,height/2,10000);
  //bg = loadImage("https://images.unsplash.com/photo-1476156863127-a8f1e9dba2b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80");
  start = height/2;
  end = height/2 - m87.rs*2.6;
  for(let y = 0; y<start; y+=3){
    particles.push(new Photon(width-20,y));
  }
}

function draw() {
  background(25);
  //background(bg);
  m87.show();
  
  stroke(255);
  strokeWeight(0.5);
  line(0,start,width,start);
  line(0,end,width,end);
  
  
  for(let p of particles){
    m87.pull(p);
    
    p.update();
    p.show();
  }
  m87.show();
}