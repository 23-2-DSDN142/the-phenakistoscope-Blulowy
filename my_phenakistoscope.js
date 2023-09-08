const SLICE_COUNT = 10;

function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
  pScope.load_image_sequence("Killian" , "png", 10)
  pScope.load_image_sequence("Ki" , "png", 10)
  pScope.load_image("grass" , "png");
  pScope.load_image("void", "png");
  pScope.load_image("eye", "png");
  pScope.load_image("bush", "png");
}

function setup_layers(pScope){

  new PLayer(null, '#0534ae');  //lets us draw the whole circle background, ignoring the boundaries

  var layer1 = new PLayer(grass);
  layer1.mode( RING );
  layer1.set_boundary( 200, 1000 );
  
  var layer2 = new PLayer(Killian);
  layer2.mode( RING );
  layer2.set_boundary( 200, 1000 );

  var layer3 = new PLayer(bush);
  layer3.mode( RING );
  layer3.set_boundary( 200, 1000 );

  var layer4 = new PLayer(stars);
  layer4.mode( RING );
  layer4.set_boundary( 0, 500 );

  var layer5 = new PLayer(voi);
  layer5.mode( RING );
  layer5.set_boundary( 0, 1000 );

  var layer6 = new PLayer(cir);
  layer6.mode( RING );
  layer6.set_boundary( 0, 1000 );

  var layer7 = new PLayer(real);
  layer7.mode(RING);
  layer7.set_boundary(0, 500);
}

function grass(x, y, animation, pScope){
  push()
  rotate(360*animation.wave()/10);
  pScope.draw_image("grass", x, y);
  pop()
}

function Killian(x, y, animation, pScope){
  
  pScope.draw_image_from_sequence("Ki", x, y, animation.frame);
}

function bush(x, y, animation, pScope){
  if(animation.frame<0.08){
  push()
  rotate(360*animation.wave()/10);
  pScope.draw_image("bush", x, y);
  pop()}
}

function stars(x, y, animation, pScope){
  angleMode(DEGREES);
  let StartC = color('#8fffba');
  let EndC = color('#d8fff1');
  let StarColour = lerpColor(StartC, EndC, animation.wave());
  // this is how you set up a background for a specific layer
  let angleOffset = (360 / SLICE_COUNT) / 2
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;

  fill('#0e017a')
  arc(x,y,1100,1100,backgroundArcStart,backgroundArcEnd); // draws "pizza slice" in the background

  fill(StarColour)
  push()
  translate(x, y-415)
  rotate(animation.wave()*2);
  scale(1-animation.wave()/20)
  beginShape();
  vertex(x, y+65);
  vertex(x+20, y+23);
  vertex(x+70, y+15);
  vertex(x+30, y-13);
  vertex(x+44, y-65);
  vertex(x, y-33);
  vertex(x-44, y-65);
  vertex(x-30, y-13);
  vertex(x-70, y+15);
  vertex(x-20, y+23);
  endShape(CLOSE);
  pop()

  /*push()
  translate(x, y-30)
  rotate(animation.wave());
  scale(1-animation.wave()/20)
  beginShape();
  vertex(x, y-350);
  vertex(x+20, y-392);
  vertex(x+70, y-400);
  vertex(x+30, y-428);
  vertex(x+44, y-480);
  vertex(x, y-448);
  vertex(x-44, y-480);
  vertex(x-30, y-428);
  vertex(x-70, y-400);
  vertex(x-20, y-392);
  endShape(CLOSE);
  pop()*/

  push()
  translate(x-50, y-260);
  scale(0.25);
  rotate(-15*animation.wave()/5);
  beginShape();
  vertex(x, -350);
  vertex(x+20, -392);
  vertex(x+70, -400);
  vertex(x+30, -428);
  vertex(x+44, -480);
  vertex(x, -448);
  vertex(x-44, -480);
  vertex(x-30, -428);
  vertex(x-70, -400);
  vertex(x-20, -392);
  endShape(CLOSE);
  pop()

  push()
  translate(x+15, y-295);
  scale(0.15);
  rotate(25+animation.wave()*5);
  beginShape();
  vertex(x, -350);
  vertex(x+20, -392);
  vertex(x+70, -400);
  vertex(x+30, -428);
  vertex(x+44, -480);
  vertex(x, -448);
  vertex(x-44, -480);
  vertex(x-30, -428);
  vertex(x-70, -400);
  vertex(x-20, -392);
  endShape(CLOSE);
  pop()

  //push();
  //rotate(360*animation.frame);
  //pScope.draw_image("void", x, y);
  //pop();
  //fill('#bcffec');
  //circle(x, -250+animation.wave()*20, 20);
}

function voi(x, y, animation, pScope){
  //push()
  //rotate(360*animation.wave());
  pScope.draw_image("void", x, y);
  //pop()
}

function cir(x, y, animation, pScope){
  //push()
  //rotate(360*animation.wave()*2);
  fill('#bcffec');
  circle(x, -250+animation.wave()*35, 30);
  //pop()
}

function real(x, y, animation, pScope){
  let angleOffset = (360 / SLICE_COUNT) / 2
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;

  fill('#0e017a')
  stroke('#bcffec')
  strokeWeight(10)
  arc(x,y,350,350,backgroundArcStart,backgroundArcEnd);

  noStroke()
  /*push()
  fill('#f7902c')
  circle(x, y-140, 30)

  rotate(72)
  fill('#f7e12c')
  circle(x, y-140, 30)

  rotate(72)
  fill('#f7902c')
  circle(x, y-140, 30)

  rotate(72)
  fill('#f7e12c')
  circle(x, y-140, 30)

  rotate(36)
  fill('#f7e12c')
  circle(x, y-140, 30)*/

  push()
  scale(1.15)
  //rotate(360*animation.frame/20)
  pScope.draw_image("eye", x, y);

  

  pop()

}
