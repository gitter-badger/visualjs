/*
 visual-js webgl2 project
 Nikola Lukic
 file : matrix-render.js
*/

//##########################################
// CUBE BUFFER INIT OR FOR DYNAMIC
//##########################################

App.operation.cube_buffer_procedure = function(object) {
    
    
    /* Vertex                                        */
   // console.log("        Buffer the " + object.type + "'s vertex");
    object.vertexPositionBuffer = world.GL.gl.createBuffer();
    world.GL.gl.bindBuffer(world.GL.gl.ARRAY_BUFFER, object.vertexPositionBuffer);
    world.GL.gl.bufferData(world.GL.gl.ARRAY_BUFFER, object.geometry.vertices , world.GL.gl.STATIC_DRAW);
    object.vertexPositionBuffer.itemSize = 3;
    object.vertexPositionBuffer.numItems = 24;
    
    
    /* Color                                         */
    if (object.color && (null !== object.shaderProgram.vertexColorAttribute) ) {
        console.log("        Buffer the " + object.type + "'s color");
        object.vertexColorBuffer = world.GL.gl.createBuffer();
        world.GL.gl.bindBuffer(world.GL.gl.ARRAY_BUFFER, object.vertexColorBuffer);
        
        var unpackedColors = [];
        for (var i in object.color) {
            var color = object.color[i];
            var looperLocal = 0;
            while (4 > looperLocal) {
                unpackedColors = unpackedColors.concat(color);
                looperLocal = looperLocal + 1;
            }
        }
        
        world.GL.gl.bufferData(world.GL.gl.ARRAY_BUFFER, new Float32Array(unpackedColors), world.GL.gl.STATIC_DRAW);
        object.vertexColorBuffer.itemSize = 4;
        object.vertexColorBuffer.numItems = 24;
    }
    
  
    
    /* Texture                                       */
    if (object.texture) {
        
        console.log("        Buffer the " + object.type + "'s texture");
        object.vertexTexCoordBuffer = world.GL.gl.createBuffer();
        world.GL.gl.bindBuffer(world.GL.gl.ARRAY_BUFFER, object.vertexTexCoordBuffer);
        world.GL.gl.bufferData(world.GL.gl.ARRAY_BUFFER, object.geometry.texCoords , world.GL.gl.STATIC_DRAW);
        object.vertexTexCoordBuffer.itemSize = 2;
        object.vertexTexCoordBuffer.numItems = 24;
        
    }
   
    /* Normals                                   */
    if (object.shaderProgram.useLightingUniform) {
        console.log("        Buffer the " + object.type + "'s normals");
        object.vertexNormalBuffer = world.GL.gl.createBuffer();
        world.GL.gl.bindBuffer(world.GL.gl.ARRAY_BUFFER, object.vertexNormalBuffer);
       
        world.GL.gl.bufferData(world.GL.gl.ARRAY_BUFFER, object.LightMap , world.GL.gl.STATIC_DRAW);
        object.vertexNormalBuffer.itemSize = 3;
        object.vertexNormalBuffer.numItems = 24;
    }

    /* Indices                                       */
    console.log("        Buffer the " + object.type + "'s indices");
    object.vertexIndexBuffer = world.GL.gl.createBuffer();
    world.GL.gl.bindBuffer(world.GL.gl.ELEMENT_ARRAY_BUFFER, object.vertexIndexBuffer);
    
    world.GL.gl.bufferData(world.GL.gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(object.geometry.indices), world.GL.gl.STATIC_DRAW);
    object.vertexIndexBuffer.itemSize = 1;
    object.vertexIndexBuffer.numItems = 36;
    
};



//##########################################
// PIRAMIDE BUFFER INIT OR FOR DYNAMIC
//##########################################


App.operation.piramide_buffer_procedure = function(object) {
    // Vertex
   // console.log("        Buffer the " + object.type + "'s vertex");
    object.vertexPositionBuffer = world.GL.gl.createBuffer();
    world.GL.gl.bindBuffer(world.GL.gl.ARRAY_BUFFER, object.vertexPositionBuffer);
    
    world.GL.gl.bufferData(world.GL.gl.ARRAY_BUFFER,   object.geometry.vertices , world.GL.gl.STATIC_DRAW);
    
    object.vertexPositionBuffer.itemSize = 3;
    object.vertexPositionBuffer.numItems = 18;
    
    /* Color                                         */
    //console.log("        Buffer the " + object.type + "'s color");
    object.vertexColorBuffer = world.GL.gl.createBuffer();
    world.GL.gl.bindBuffer(world.GL.gl.ARRAY_BUFFER, object.vertexColorBuffer);
    
    world.GL.gl.bufferData(world.GL.gl.ARRAY_BUFFER,  object.geometry.color , world.GL.gl.STATIC_DRAW);
    
    object.vertexColorBuffer.itemSize = 4;
    object.vertexColorBuffer.numItems = 18;
    
    
};



//##########################################
// SQUARE BUFFER INIT OR FOR DYNAMIC
//##########################################


App.operation.square_buffer_procedure = function(object) {
    /* Vertex                                        */
    console.log("        Buffer the " + object.type + "'s vertex");
    object.vertexPositionBuffer = world.GL.gl.createBuffer();
    world.GL.gl.bindBuffer(world.GL.gl.ARRAY_BUFFER, object.vertexPositionBuffer);

    
    world.GL.gl.bufferData(world.GL.gl.ARRAY_BUFFER, object.geometry.vertices , world.GL.gl.STATIC_DRAW);
    
    object.vertexPositionBuffer.itemSize = 3;
    object.vertexPositionBuffer.numItems = 4;
    
    /* Color                                         */
    console.log("        Buffer the " + object.type + "'s color");
    object.vertexColorBuffer = world.GL.gl.createBuffer();
    world.GL.gl.bindBuffer(world.GL.gl.ARRAY_BUFFER, object.vertexColorBuffer);
    world.GL.gl.bufferData(world.GL.gl.ARRAY_BUFFER, new Float32Array(object.color), world.GL.gl.STATIC_DRAW);
    
    object.vertexColorBuffer.itemSize = 4;
    object.vertexColorBuffer.numItems = 4;
}



//##########################################
// TRIANGLE BUFFER INIT OR FOR DYNAMIC
//##########################################


App.operation.triangle_buffer_procedure = function(object) {
    
    
    /* Vertex                                        */
    
    object.vertexPositionBuffer = world.GL.gl.createBuffer();
    world.GL.gl.bindBuffer(world.GL.gl.ARRAY_BUFFER, object.vertexPositionBuffer);
    world.GL.gl.bufferData(world.GL.gl.ARRAY_BUFFER,  object.geometry.vertices , world.GL.gl.STATIC_DRAW);
    
    object.vertexPositionBuffer.itemSize = 3;
    object.vertexPositionBuffer.numItems = 3;
    
    
    
    /* Color                                         */
    
    object.vertexColorBuffer = world.GL.gl.createBuffer();
    world.GL.gl.bindBuffer(world.GL.gl.ARRAY_BUFFER, object.vertexColorBuffer);
    world.GL.gl.bufferData(world.GL.gl.ARRAY_BUFFER, new Float32Array(object.color), world.GL.gl.STATIC_DRAW);
    
    object.vertexColorBuffer.itemSize = 4;
    object.vertexColorBuffer.numItems = 3;
    
    console.log("Buffer the " + object.type + "'s color loaded success.");
    
    
    
};






//##########################################
// OBJ FILE BUFFER INIT OR FOR DYNAMIC
//##########################################


App.operation.obj_buffer_procedure = function(object) {
 
    
    
    /* Vertex          not here for obj                */
    // /* Color
    if (object.color && (null !== object.shaderProgram.vertexColorAttribute) ) {
        console.log("        Buffer the " + object.type + "'s color");
        object.vertexColorBuffer = world.GL.gl.createBuffer();
        world.GL.gl.bindBuffer(world.GL.gl.ARRAY_BUFFER, object.vertexColorBuffer);
        
        var unpackedColors = [];
        for (var i in object.color) {
            var color = object.color[i];
            var looperLocal = 0;
            while (4 > looperLocal) {
                unpackedColors = unpackedColors.concat(color);
                looperLocal = looperLocal + 1;
            }
        }
        
        world.GL.gl.bufferData(world.GL.gl.ARRAY_BUFFER, new Float32Array(unpackedColors), world.GL.gl.STATIC_DRAW);
        object.vertexColorBuffer.itemSize = 4;
        object.vertexColorBuffer.numItems = 4;
    }
    
    
    //  */
    
    /* Texture
     if (object.texture) {
     
     console.log("        Buffer the " + object.type + "'s texture");
     object.vertexTexCoordBuffer = world.GL.gl.createBuffer();
     world.GL.gl.bindBuffer(world.GL.gl.ARRAY_BUFFER, object.vertexTexCoordBuffer);
     world.GL.gl.bufferData(world.GL.gl.ARRAY_BUFFER, object.geometry.texCoords , world.GL.gl.STATIC_DRAW);
     object.vertexTexCoordBuffer.itemSize = 2;
     object.vertexTexCoordBuffer.numItems = 24;
     
     }
     */
    
    /* Normals                                   */
    if (object.shaderProgram.useLightingUniform) {
        console.log("        Buffer the " + object.type + "'s normals");
        //object.vertexNormalBuffer = world.GL.gl.createBuffer();
        //world.GL.gl.bindBuffer(world.GL.gl.ARRAY_BUFFER, );
        world.GL.gl.bufferData(world.GL.gl.ARRAY_BUFFER, object.mesh.normalBuffer , world.GL.gl.STATIC_DRAW);
     //   object.mesh.normalBuffer.itemSize = 3;
     //   object.mesh.normalBuffer.numItems = 24;
    }
    
    /* Indices
     console.log("        Buffer the " + object.type + "'s indices");
     object.vertexIndexBuffer = world.GL.gl.createBuffer();
     world.GL.gl.bindBuffer(world.GL.gl.ELEMENT_ARRAY_BUFFER, object.vertexIndexBuffer);
     
     world.GL.gl.bufferData(world.GL.gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(object.geometry.indices), world.GL.gl.STATIC_DRAW);
     object.vertexIndexBuffer.itemSize = 1;
     object.vertexIndexBuffer.numItems = 36;
     */
    
    
};



//##########################################
// SQUARE FILE BUFFER INIT OR FOR DYNAMIC
//##########################################


App.operation.squareTex_buffer_procedure = function(object) {
    
    
    //##########################################
    // SQUARE TEX BUFFER INIT OR FOR DYNAMIC
    //##########################################
    
  
        
        
        /* Vertex                                        */
        console.log("        Buffer the " + object.type + "'s vertex");
        object.vertexPositionBuffer = world.GL.gl.createBuffer();
        world.GL.gl.bindBuffer(world.GL.gl.ARRAY_BUFFER, object.vertexPositionBuffer);
        world.GL.gl.bufferData(world.GL.gl.ARRAY_BUFFER, object.geometry.vertices , world.GL.gl.STATIC_DRAW);
        object.vertexPositionBuffer.itemSize = 3;
        object.vertexPositionBuffer.numItems = 4;
        
        
        /* Color                                         */
        if (object.color && (null !== object.shaderProgram.vertexColorAttribute) ) {
            console.log("        Buffer the " + object.type + "'s color");
            object.vertexColorBuffer = world.GL.gl.createBuffer();
            world.GL.gl.bindBuffer(world.GL.gl.ARRAY_BUFFER, object.vertexColorBuffer);
            
            var unpackedColors = [];
            for (var i in object.color) {
                var color = object.color[i];
                var looperLocal = 0;
                while (4 > looperLocal) {
                    unpackedColors = unpackedColors.concat(color);
                    looperLocal = looperLocal + 1;
                }
            }
            
            world.GL.gl.bufferData(world.GL.gl.ARRAY_BUFFER, new Float32Array(unpackedColors), world.GL.gl.STATIC_DRAW);
            object.vertexColorBuffer.itemSize = 3;
            object.vertexColorBuffer.numItems =  4;
        }
        
        
        
        /* Texture                                       */
        if (object.texture) {
            
            console.log("        Buffer the " + object.type + "'s texture");
            object.vertexTexCoordBuffer = world.GL.gl.createBuffer();
            world.GL.gl.bindBuffer(world.GL.gl.ARRAY_BUFFER, object.vertexTexCoordBuffer);
            world.GL.gl.bufferData(world.GL.gl.ARRAY_BUFFER, object.geometry.texCoords , world.GL.gl.STATIC_DRAW);
            object.vertexTexCoordBuffer.itemSize = 2;
            object.vertexTexCoordBuffer.numItems = 4;
            
        }
        
        /* Normals                                   */
        if (object.shaderProgram.useLightingUniform) {
            console.log("        Buffer the " + object.type + "'s normals");
            object.vertexNormalBuffer = world.GL.gl.createBuffer();
            world.GL.gl.bindBuffer(world.GL.gl.ARRAY_BUFFER, object.vertexNormalBuffer);
            
            world.GL.gl.bufferData(world.GL.gl.ARRAY_BUFFER, object.LightMap , world.GL.gl.STATIC_DRAW);
            object.vertexNormalBuffer.itemSize = 4;
            object.vertexNormalBuffer.numItems = 4;
        }
        
        /* Indices                                       */
        console.log("        Buffer the " + object.type + "'s indices");
        object.vertexIndexBuffer = world.GL.gl.createBuffer();
        world.GL.gl.bindBuffer(world.GL.gl.ELEMENT_ARRAY_BUFFER, object.vertexIndexBuffer);
        
        world.GL.gl.bufferData(world.GL.gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(object.geometry.indices), world.GL.gl.STATIC_DRAW);
        object.vertexIndexBuffer.itemSize = 1;
        object.vertexIndexBuffer.numItems = 6;
        
    
    

 
    
    
    
};










