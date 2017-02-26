function setup() {
  createCanvas(800,600)
  angleMode(DEGREES)
}

function draw() {
  background(255)
  translate(width/2,height/2);
  
  // hours
  push();
  if (hour()>12) {
    var a = hour()-13
  } else {
    var a = hour()
  }
  
  rotate((a+1)*30);
	noStroke();
	fill(47,30,150);
	ellipse(0,-135,70,70);
	pop();
	
	//minute
	push();
	rotate((minute())*6);
	noStroke();
	fill(60,200,150);
	ellipse(0,-135,40,40);
	pop();
	
	//second
	push();
	rotate((second())*6);
	noStroke(); 
	fill(200,200,150);
	ellipse(0,-135,25,25);
	pop();
 
  for (var r = 1; r <= 12; r++) {
        push();
        rotate(r * 30);
        fill(90,60,90);
        noStroke();
        ellipse(135,0,10,10);
        pop();
    }
  
  
}