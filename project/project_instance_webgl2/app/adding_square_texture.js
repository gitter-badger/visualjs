/*
 
 Nikola Lukic
 webGl2 api example 
 
 */

// LOAD MESH FROM OBJ FILES...
// if you dont use obj or complex mesh you no need for this func





var textuteImageSamplers = {
    source : [    "res/images/complex_texture_1/diffuse.png"   ] ,
    mix_operation : "multiply" , // ENUM : multiply , divide ,
};



world.Add("squareTex", 1 , "MySquareTexure1" ,  textuteImageSamplers );

delete textuteImageSamplers;


//ACCESS YOUR OBJECT AT
// SET POSITION

// ROTATING
// Stop
App.scene.MySquareTexure1.rotValue = 0;
App.scene.MySquareTexure1.rotationSpeed = 10;

// Rotate

// Direction of rotating
//App.scene.MyCubeTex.rotDirection.SetDirectionZ()
//App.scene.MyCubeTex.rotDirection.SetDirectionX()
//App.scene.MyCubeTex.rotDirection.SetDirectionY()







