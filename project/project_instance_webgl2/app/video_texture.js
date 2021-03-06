/*
 
 Nikola Lukic
 webGl2 api example 
 
 */

var textuteImageSamplers = {
    source : [    "res/images/complex_texture_1/diffuse.png"   ] ,
    mix_operation : "multiply" , // ENUM : multiply , divide ,
};

world.Add("cubeLightTex" , 12  , "outsideBox"  );

App.scene.outsideBox.position.y = 0
App.scene.outsideBox.position.z = -4
App.scene.outsideBox.rotationSpeed = 50
App.scene.outsideBox.rotValue = 90
App.scene.outsideBox.LightsData.ambientLight.set(1,1,1)
App.scene.outsideBox.streamTextures = new VIDEO_TEXTURE( "Galactic_Expansion_Fractal_Morph_Official_Video.mp4" );

App.scene.outsideBox.glBlend.blendEnabled = true
App.scene.outsideBox.glBlend.blendParamSrc =  ENUMERATORS.glBlend.param[4]
App.scene.outsideBox.glBlend.blendParamDest =  ENUMERATORS.glBlend.param[4]

App.scene.outsideBox.rotDirection.SetDirection(1,1,0.5)

world.Add("cubeLightTex" , 1  , "insideBox"  );
App.scene.insideBox.streamTextures = new VIDEO_TEXTURE( "Galactic_Expansion_Fractal_Morph_Official_Video.mp4" );
App.scene.insideBox.glBlend.blendEnabled = true
App.scene.insideBox.glBlend.blendParamSrc =  ENUMERATORS.glBlend.param[6]
App.scene.insideBox.glBlend.blendParamDest =  ENUMERATORS.glBlend.param[6]

