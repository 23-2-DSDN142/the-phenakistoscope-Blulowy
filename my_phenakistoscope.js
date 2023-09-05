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
}

function setup_layers(pScope){

  new PLayer(null, '#0534ae');  //lets us draw the whole circle background, ignoring the boundaries

  var layer1 = new PLayer(grass);
  layer1.mode( RING );
  layer1.set_boundary( 200, 1000 );
  
  
  
  var layer2 = new PLayer(Killian);
  layer2.mode( RING );
  layer2.set_boundary( 200, 1000 );

  var layer3 = new PLayer(squares);
  layer3.mode( RING );
  layer3.set_boundary( 0, 500 );
}

function grass(x, y, animation, pScope){
  push()
  rotate(360*animation.wave());
  pScope.draw_image("grass", x, y);
  pop()
}

function Killian(x, y, animation, pScope){
  
  pScope.draw_image_from_sequence("Ki", x, y, animation.frame);
}

function faces(x, y, animation, pScope){
  
  scale(animation.frame*2);

  ellipse(0,0,50,50); // draw head
  fill(30);
  ellipse(-10,-10,10,10); //draw eye
  ellipse(10,-10,10,10); // draw eye
  arc(0,10,20,10,0,180); // draw mouth

}

function squares(x, y, animation, pScope){

  // this is how you set up a background for a specific layer
  let angleOffset = (360 / SLICE_COUNT) / 2
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;

  fill('#0e017a')
  arc(x,y,1100,1100,backgroundArcStart,backgroundArcEnd); // draws "pizza slice" in the background

  fill('#8fffdf')
  rect(-15,-450-animation.wave()*20,40,40) // .wave is a cosine wave btw

}
