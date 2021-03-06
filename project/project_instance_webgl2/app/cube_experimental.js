/*
 
 Nikola Lukic
 webGl2 api example 
 
 */



// ADDING PRIMITIVE SHAPES
//world.Add("triangle",  1 , "MyTriangle" );

//world.Add("square", 1 , "MySquare");


var textuteImageSamplers = {
    source : [    "res/images/complex_texture_1/diffuse.png"   ] ,
    mix_operation : "multiply" , // ENUM : multiply , divide ,
};


for (var d=-2; d < 3 ; d++) {

    for (var t=-1; t < 2 ; t++) {
        
        world.Add("cubeLightTex", 0.3 , "MyCubeTex"+Math.abs(d) ,  textuteImageSamplers );
        eval( 'App.scene.MyCubeTex' + Math.abs(d) + '.position.x += d*0.8'   );
        eval( 'App.scene.MyCubeTex' + Math.abs(d) + '.position.y += t*0.8'     );
        eval( 'App.scene.MyCubeTex' + Math.abs(d) + '.rotationSpeed = 0;'  );
        
    }
    
}


world.Add("triangle", 1 , "MyColoredTriangle1");
world.Add("triangle", 1 , "MyColoredTriangle2");
world.Add("triangle", 1 , "MyColoredTriangle3");

// SET POSITION

App.scene.MyColoredTriangle1.position.SetX(2.5);
App.scene.MyColoredTriangle2.position.SetX(0);
App.scene.MyColoredTriangle3.position.SetX(-2.5);



delete textuteImageSamplers;



