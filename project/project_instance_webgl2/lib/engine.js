
function initApp () {

    /* Calculate Width and Height before rendering       */
    wd = document.body.clientWidth  - 4;
    if (document.body.clientHeight > document.documentElement.clientHeight) {
        ht = document.body.clientHeight - 10;
    }
    else {
        ht = document.documentElement.clientHeight - 4;
    }
    
    drawCanvas();
    
    
    window.canvas  = document.getElementById("canvas");
    /////////////////
    // MAKE INSTANCE
    /////////////////
    
    
    if (App.events == true){
        
        window["EVENTS_INSTANCE"] = new EVENTS( E('canvas') );
        
    }
    
    
    
    Start();
    
 

};


function isReady () {

    if (0 == world) {
        return false;
    }
    else {
        return true;
    }

}



window.load_shaders = function (href)
{
    
    function handler() {
        if(this.status == 200 && this.responseText != null ) {
            // success!
            document.getElementById('shaders').innerHTML = this.responseText;
        } else {
            // something went wrong
            console.log("something went wrong on shaders load procces!");
        }
    }
    
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = handler;
    xmlhttp.open("GET", href, false);
    xmlhttp.send();
    
};


//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//WebGL start
//Base environment property for totality of WEBGL
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
function defineWebGLWorld(cavnas) {
    console.log("      Define the WEBGL base pocket");
    var world = new Object();
    /* Constructor for a particular GL environment   */
    try {
        var gl            = WebGLUtils.setupWebGL(canvas);
        gl.viewportWidth  = canvas.width;
        gl.viewportHeight = canvas.height;
        world.gl     = gl;
        console.log("      WEBGL base pocket: SUCCESS");
    }
    catch (e) {
        /* Exception: Could not initialise WebGL     */
        console.log("      Exception in WEBGL base pocket: " + e);
    }
    /* Destructor                                    */
    world.destroy = function() {
        delete this.gl;
        delete this;
    };
    return world;
}
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//* Update the frame rate FPS counter
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
function updateFPS(elements) {
    //console.log("    Update FPS");
    var now      = (new Date()).getTime();
    
    var delta    = now - lastTime;
    lastTime     = now;
    
    totalTime    = totalTime  + delta;
    updateTime   = updateTime + delta;
    
    frames       = frames       + 1;
    updateFrames = updateFrames + 1;
    
    if (1000 < updateTime) {
        document.getElementById('fps').innerHTML = "FPS AVG: " + Math.floor((1000*frames/totalTime)/elements)
        + " CUR: " + Math.floor((1000*updateFrames/updateTime)/elements);
        updateTime   = 0;
        updateFrames = 0;
    }
}

function drawCanvas () {
    console.log("  Draw the canvas");
    printf('<canvas id="canvas" style="border: none;" width="'+wd+'" height="'+ht+'"></canvas>');
}

function drawFPS() {
    printf('<button id="stopRender" type="button" >stopRender</button>');
    console.log("  Draw the FPS section");
    printf('<font color = "white"><b id="fps"></b></font>');
}

/* Render the text as it is then and there C style   */
function printf(text) {
    document.writeln(text);
}

/* Degree to Radian converter                        */
function degToRad(degrees) {
    return degrees * Math.PI / 180;
}

/* One time initiation of FPS to store initial time  */
function initiateFPS() {
    console.log("    Initiate FPS");
    lastTime = (new Date()).getTime();
}

//Help the browser Garbage collect
window.onbeforeunload = onExit;

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$



//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// Provides cancelRequestAnimFrame in a cross browser way.
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
window.cancelRequestAnimFrame = (function() {
                                 return window.cancelAnimationFrame           ||
                                 window.webkitCancelRequestAnimationFrame ||
                                 window.mozCancelRequestAnimationFrame    ||
                                 window.oCancelRequestAnimationFrame      ||
                                 window.msCancelRequestAnimationFrame     ||
                                     function(callback) {
                                     window.clearTimeout(callback);
                                     };
                                 })();
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// Dispose off the dangling objects
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
function onExit() {
    /* RIP Mouse object                              */
    //mouseLoc.destroy();
    
    /* RIP Objects                                   */
    looper = 0;
    while(looper <= objListToDispose.length-1) {
        objListToDispose[looper].destroy();
        looper = looper + 1;
    }
    
    objListToDispose.length = 0;
}



App.operation.destroyWorld = function() {
    console.log("    Destroy at iteration:" + reDrawID);
    /* Stop the render                               */
    cancelRequestAnimFrame(reDrawID);
    delete this.pMatrix;
    delete this.mvMatrixStack;
    looper = 0;
    while (looper <= this.contentList.length-1) {
        console.log("    Destroying: " + this.contentList[looper].type);
        delete this.contentList[looper].type;
        delete this.contentList[looper].size;
        delete this.contentList[looper].sides;
        
        /* Dispose the shaders                       */
        if (this.contentList[looper].shaderProgram.fragmentShader) {
            console.log("      Dispose Fragment Shader");
            this.GL.gl.deleteShader(this.contentList[looper].shaderProgram.fragmentShader);
            delete this.contentList[looper].shaderProgram.fragmentShader;
        }
        
        if (this.contentList[looper].shaderProgram.vertexShader) {
            console.log("      Dispose Vertex Shader");
            this.GL.gl.deleteShader(this.contentList[looper].shaderProgram.vertexShader);
            delete this.contentList[looper].shaderProgram.vertexShader;
        }
        
        /* Dispose the texture                       */
        if (this.contentList[looper].texture) {
            console.log("      Dispose Texture");
            
            // must be improved Nikola Lukic
            
            try {
                
            
            this.GL.gl.deleteTexture(this.contentList[looper].texture);
            
            }catch(e){
            
            SYS.DEBUG.WARNING("Problem in destroying function : This is e log : " + e)
                
            }
            
            delete this.contentList[looper].texture;
        }
        
        /* Dispose the program                       */
        if (this.contentList[looper].shaderProgram) {
            console.log("      Dispose Shader program");
            this.GL.gl.deleteProgram(this.contentList[looper].shaderProgram);
            delete this.contentList[looper].shaderProgram;
        }
        
        /* Empty the buffers                         */
        console.log("      Dispose buffers");
        if (this.contentList[looper].vertexPositionBuffer) {
            console.log("        Dispose Vertex Position Buffer");
            this.GL.gl.deleteBuffer(this.contentList[looper].vertexPositionBuffer);
            delete this.contentList[looper].vertexPositionBuffer;
        }
        if (this.contentList[looper].vertexTexCoordBuffer) {
            console.log("        Dispose Vertex Coordinate Buffer");
            this.GL.gl.deleteBuffer(this.contentList[looper].vertexTexCoordBuffer);
            delete this.contentList[looper].vertexTexCoordBuffer;
        }
        if (this.contentList[looper].vertexColorBuffer) {
            console.log("        Dispose Vertex Color Buffer");
            this.GL.gl.deleteBuffer(this.contentList[looper].vertexColorBuffer);
            delete this.contentList[looper].vertexColorBuffer;
        }
        if (this.contentList[looper].vertexIndexBuffer) {
            console.log("        Dispose Vertex Index Buffer");
            this.GL.gl.deleteBuffer(this.contentList[looper].vertexIndexBuffer);
            delete this.contentList[looper].vertexIndexBuffer;
        }
        
        delete this.contentList[looper].rotationSpeed;
        delete this.contentList[looper].rotValue;
        delete this.contentList[looper].rotDirection;
        delete this.contentList[looper].color;
        delete this.contentList[looper].mvMatrix;
        
        looper = looper + 1;
    }
    this.contentList.length = 0;
    this.GL.destroy();
    SYS.DEBUG.WARNING("exit")
    delete this;
};


//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$


//##################################
// LOAD SHADERS DYNAMIC
//##################################
loadShaders  = function(gl, id) {
    console.log("          Get the Shader");
    console.log("            Creating Shader:" + id);
    var shaderScript = document.getElementById(id);
    var shader;
    var str = "";
    
    if (shaderScript) {
        var k = shaderScript.firstChild;
        
        while (k) {
            if (k.nodeType == 3) {
                str += k.textContent;
            }
            k = k.nextSibling;
        }
        
        if (shaderScript.type == "x-shader/x-fragment") {
            console.log("            Creating fragment shader");
            shader = gl.createShader(gl.FRAGMENT_SHADER);
        }
        else if (shaderScript.type == "x-shader/x-vertex") {
            console.log("            Creating vertex shader");
            shader = gl.createShader(gl.VERTEX_SHADER);
        }
        else {
            return 0;
        }
        
        gl.shaderSource(shader, str);
        gl.compileShader(shader);
        
        if (gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
            console.log("            Shader Program compile success");
            return shader;
        }
        else {
            console.log("            Shader Program compile failed:" + gl.getShaderInfoLog(shader));
            return 0;
        }
    }
    else {
        console.log("            Shader Program creation failed");
        return 0;
    }
};

initShaders =  function(gl, fragment, vertex) {
    console.log("      Initialize Shader");
    console.log("        Fragment Shader:" + fragment);
    console.log("        Vertex Shader:" + vertex);
    
    var fragmentShader = this.getShader(gl, fragment);
    var vertexShader   = this.getShader(gl, vertex);
    
    if (0 == fragmentShader || 0 == vertexShader) {
        console.log("        Failed to Load shader");
        return 0;
    }
    else {
        var shaderProgram = gl.createProgram();
        console.log("        Creating Shader fragment");
        gl.attachShader(shaderProgram, vertexShader);
        gl.attachShader(shaderProgram, fragmentShader);
        gl.linkProgram(shaderProgram);
        
        if (gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
            console.log("          Returning Shader fragment successfully");
            gl.useProgram(shaderProgram);
            
            shaderProgram.vertexPositionAttribute = gl.getAttribLocation(shaderProgram, "aVertexPosition");
            gl.enableVertexAttribArray(shaderProgram.vertexPositionAttribute);
            
            if (gl.getAttribLocation(shaderProgram, "aVertexColor") >= 0) {
                shaderProgram.vertexColorAttribute    = gl.getAttribLocation(shaderProgram, "aVertexColor");
                gl.enableVertexAttribArray(shaderProgram.vertexColorAttribute);
            }
            
            if (gl.getAttribLocation(shaderProgram, "aTextureCoord") >= 0) {
                shaderProgram.textureCoordAttribute   = gl.getAttribLocation(shaderProgram, "aTextureCoord");
                gl.enableVertexAttribArray(shaderProgram.textureCoordAttribute);
                shaderProgram.samplerUniform  = gl.getUniformLocation(shaderProgram, "uSampler");
            }
            
            if (gl.getAttribLocation(shaderProgram, "aVertexNormal") >= 0) {
                shaderProgram.vertexNormalAttribute = gl.getAttribLocation(shaderProgram, "aVertexNormal");
                gl.enableVertexAttribArray(shaderProgram.vertexNormalAttribute);
            }
            

            if (null !== gl.getUniformLocation(shaderProgram, "uNMatrix")) {
                shaderProgram.nMatrixUniform           = gl.getUniformLocation(shaderProgram, "uNMatrix");
            }
            
            //for 2d sprite????
            if (  null !== gl.getUniformLocation(shaderProgram, "layer")  ) {
                shaderProgram.layerLocation           = gl.getUniformLocation(shaderProgram, "layer");
            }
            
            if (  null !== gl.getUniformLocation(shaderProgram, "numberOfsamplers")  ) {
                shaderProgram.numberOfsamplers           = gl.getUniformLocation(shaderProgram, "numberOfsamplers");
            }
            
            // multi samplers for textutes
            if (null !== gl.getUniformLocation(shaderProgram, "uSampler")) {
                shaderProgram.samplerUniform           = gl.getUniformLocation(shaderProgram, "uSampler");
            }
            if (null !== gl.getUniformLocation(shaderProgram, "uSampler1")) {
                shaderProgram.samplerUniform1           = gl.getUniformLocation(shaderProgram, "uSampler1");
            }
            if (null !== gl.getUniformLocation(shaderProgram, "uSampler2")) {
                shaderProgram.samplerUniform2           = gl.getUniformLocation(shaderProgram, "uSampler2");
            }
            if (null !== gl.getUniformLocation(shaderProgram, "uSampler3")) {
                shaderProgram.samplerUniform3           = gl.getUniformLocation(shaderProgram, "uSampler3");
            }
            if (null !== gl.getUniformLocation(shaderProgram, "uSampler4")) {
                shaderProgram.samplerUniform3           = gl.getUniformLocation(shaderProgram, "uSampler4");
            }
            if (null !== gl.getUniformLocation(shaderProgram, "uSampler5")) {
                shaderProgram.samplerUniform3           = gl.getUniformLocation(shaderProgram, "uSampler5");
            }
            if (null !== gl.getUniformLocation(shaderProgram, "uSampler6")) {
                shaderProgram.samplerUniform3           = gl.getUniformLocation(shaderProgram, "uSampler6");
            }
            if (null !== gl.getUniformLocation(shaderProgram, "uSampler7")) {
                shaderProgram.samplerUniform3           = gl.getUniformLocation(shaderProgram, "uSampler7");
            }
            
            
            if (null !== gl.getUniformLocation(shaderProgram, "uUseLighting")) {
                shaderProgram.useLightingUniform       = gl.getUniformLocation(shaderProgram, "uUseLighting");
            }
            
            if (null !== gl.getUniformLocation(shaderProgram, "uAmbientColor")) {
                shaderProgram.ambientColorUniform      = gl.getUniformLocation(shaderProgram, "uAmbientColor");
            }
            
            if (null !== gl.getUniformLocation(shaderProgram, "uLightingDirection")) {
                shaderProgram.lightingDirectionUniform = gl.getUniformLocation(shaderProgram, "uLightingDirection");
            }
            
            if (null !== gl.getUniformLocation(shaderProgram, "uDirectionalColor")) {
                shaderProgram.directionalColorUniform  = gl.getUniformLocation(shaderProgram, "uDirectionalColor");
            }
            
            shaderProgram.pMatrixUniform  = gl.getUniformLocation(shaderProgram, "uPMatrix");
            shaderProgram.mvMatrixUniform = gl.getUniformLocation(shaderProgram, "uMVMatrix");
            
            /* For destroying properly            */
            shaderProgram.fragmentShader  = fragmentShader;
            shaderProgram.vertexShader    = vertexShader;
            
            return shaderProgram;
        }
        else {
            console.log("          Returning Shader fragment failed");
            return 0;
        }
    }
};
//##################################
// END OF SHADERS DYNAMIC
//##################################


//##################################
// MATRIX OPETARION
//##################################
App.operation.PUSH_MATRIX = function(mvMatrix, mvMatrixStack) {
    var copy = mat4.create();
    mat4.copy(mvMatrix, copy);
    mvMatrixStack.push(copy);
};

App.operation.POP_MATRIX = function(mvMatrix, mvMatrixStack) {
    if (mvMatrixStack.length == 0) {
        throw "Invalid popMatrix!";
    }
    mvMatrix = mvMatrixStack.pop();
};

App.operation.SET_MATRIX_UNIFORMS = function(object,pMatrix) {
    this.GL.gl.uniformMatrix4fv(object.shaderProgram.pMatrixUniform, false, pMatrix);
    this.GL.gl.uniformMatrix4fv(object.shaderProgram.mvMatrixUniform, false, object.mvMatrix);
};


/////////////////////////////
//REGENERATORs SHADER
/////////////////////////////

var RegenerateShader = function ( id_elem , numOfSamplerInUse , mixOperand ) {
    
    var e = document.getElementById(id_elem);
    
    if (mixOperand == "multiply") {
    
        mixOperand = 0;
        
    }
    else if (mixOperand == "divide") {
    
        mixOperand = 1;
        
    }
    
    e. innerHTML = generateShaderSrc(numOfSamplerInUse , mixOperand );
    
    
};


function generateShaderSrc(numTextures , mixOperand ) {
    
    return `
    
    // shader for ${numTextures} textures
    precision mediump float;
    
    varying vec2 vTextureCoord;
    varying vec3 vLightWeighting;
    
    uniform float textureSamplerAmount[${numTextures}];
    int MixOperandString = ${mixOperand};
    
    uniform sampler2D uSampler;
    uniform sampler2D uSampler1;
    uniform sampler2D uSampler2;
    uniform sampler2D uSampler3;
    uniform sampler2D uSampler4;
    uniform sampler2D uSampler5;
    uniform sampler2D uSampler6;
    uniform sampler2D uSampler7;
    
    void main(void) {
        
        vec4 textureColor = texture2D(uSampler, vec2(vTextureCoord.s, vTextureCoord.t));
        vec4 textureColor1 = texture2D(uSampler1, vec2(vTextureCoord.s, vTextureCoord.t));
        vec4 textureColor2 = texture2D(uSampler2, vec2(vTextureCoord.s, vTextureCoord.t));
        vec4 textureColor3 = texture2D(uSampler3, vec2(vTextureCoord.s, vTextureCoord.t));
        vec4 textureColor4 = texture2D(uSampler4, vec2(vTextureCoord.s, vTextureCoord.t));
        vec4 textureColor5 = texture2D(uSampler5, vec2(vTextureCoord.s, vTextureCoord.t));
        vec4 textureColor6 = texture2D(uSampler6, vec2(vTextureCoord.s, vTextureCoord.t));
        vec4 textureColor7 = texture2D(uSampler7, vec2(vTextureCoord.s, vTextureCoord.t));
        
        //MixOperandString  make it with eval todo task
        
        if (  ${numTextures} == 1)
            {
                
                    gl_FragColor      = vec4(textureColor.rgb * vLightWeighting, textureColor.a);
                
            }
        else if (${numTextures} == 2)
            {
                if ( ${mixOperand} == 0){
                 // gl_FragColor = textureColor * textureColor1;
                    
                  gl_FragColor      = vec4( (textureColor.rgb * textureColor1.rgb) * vLightWeighting, textureColor.a);
                }
                else if (${mixOperand} == 1){
                    
                //gl_FragColor = textureColor / textureColor1;
                  gl_FragColor      = vec4( (textureColor.rgb / textureColor1.rgb) * vLightWeighting, textureColor.a);
                }
                
            }
        else if (${numTextures} == 3)
            {
                if (MixOperandString == 0){
                    gl_FragColor = textureColor * textureColor1 * textureColor2;
                }
                else if (MixOperandString == 1){
                    gl_FragColor = textureColor / textureColor1 / textureColor2;
                }
                
            }
        else if (${numTextures} == 4)
        {
            if (MixOperandString == 0){
                gl_FragColor = textureColor * textureColor1 * textureColor2 * textureColor3;
            }
            else if (MixOperandString == 1){
                gl_FragColor = textureColor / textureColor1 / textureColor2 /  textureColor3;
            }
            
        }
      
    }
    
   // uniform sampler2D uSampler[${numTextures}];
   // uniform float uMixAmount[${numTextures}];
    
    /*
    void main() {
        vec4 color = vec4(0);
        
        for (int i = 0; i < ${numTextures}; ++i) {
            vec4 texColor = texture2D(uSampler[i], vTextureCoord);
            color = mix(color, texColor, uMixAmount[i]);
        }
        
        gl_FragColor = color;
    }
    */
    
    `;
    
}






//#############################
// VIDEO WEB CAM
//#############################

var webcamError = function(e) {alert('Webcam error!', e);};


function SET_STREAM (video) {
    
    if (navigator.getUserMedia) {
        
        navigator.getUserMedia({audio: true, video: true}, function(stream) {
                               //video.src = stream;
                               video.src = window.URL.createObjectURL(stream);
                               //initialize();
                               
                               }, webcamError);
    } else if (navigator.webkitGetUserMedia) {
        
        navigator.webkitGetUserMedia({audio: true, video: true}, function(stream) {
                                     video.src = window.URL.createObjectURL(stream);
                                     
                                     // initialize();
                                     
                                     }, webcamError);
    } 
    else {alert("webcam broken.");}
    
}


function ACCESS_CAMERA (htmlElement) {
 
    var ROOT = this;
    
    ROOT.video = document.getElementById( htmlElement );
    SET_STREAM(ROOT.video)
    
    var DIV_CONTENT_STREAMS =  document.getElementById( 'HOLDER_STREAMS' );
    
    ROOT.videoImage = document.createElement('canvas');
    ROOT.videoImage.id = htmlElement + "IMAGE_";
    ROOT.videoImage.setAttribute('width', '512px' );
    ROOT.videoImage.setAttribute('height', '512px' );
    DIV_CONTENT_STREAMS.appendChild(ROOT.videoImage);
    
    ROOT.videoImageContext = ROOT.videoImage.getContext( '2d' );
    ROOT.videoImageContext.fillStyle = '#0000FF';
    ROOT.videoImageContext.fillRect( 0, 0, ROOT.videoImage.width, ROOT.videoImage.height );
    
    ROOT.texture       =   App.tools.loadVideoTexture ( "glVideoTexture" , ROOT.videoImage );
    
    ROOT.UPDATE = function(){
        
        if ( ROOT.video.readyState === ROOT.video.HAVE_ENOUGH_DATA )
        {
          
            ROOT.videoImageContext.drawImage( ROOT.video, 0, 0, ROOT.videoImage.width, ROOT.videoImage.height );
           
            ROOT.videoImageContext.font="30px Georgia";
            ROOT.videoImageContext.fillStyle = "black";
            ROOT.videoImageContext.fillText( " Visual-JS game engine -webGL 2 part" , 0, 85  );
            ROOT.videoImageContext.fillText("Video texture example ",20,50);
            
        }
        
    };
    
    console.log('Video 3d canvas texture created.');
    App.updateBeforeDraw.push(ROOT);
    
    // dispose for this needed !!!

}


function VIDEO_TEXTURE (  path_) {

    var ROOT = this;
    
   // ROOT.video = document.getElementById( htmlElement );
    ROOT.video = document.getElementById( 'webcam_beta' );
    
    var DIV_CONTENT_STREAMS =  document.getElementById( 'HOLDER_STREAMS' );
    
    
    
    ROOT.video.READY =  function(e){
    
        
       
        
        
    ROOT.videoImage = document.createElement('canvas');
    ROOT.videoImage.id = 'webcam_beta' + "IMAGE_";
    ROOT.videoImage.setAttribute('width', '512px' );
    ROOT.videoImage.setAttribute('height', '512px' );
    DIV_CONTENT_STREAMS.appendChild(ROOT.videoImage);
    
    ROOT.videoImageContext = ROOT.videoImage.getContext( '2d' );
    ROOT.videoImageContext.fillStyle = '#00003F';
    ROOT.videoImageContext.fillRect( 0, 0, ROOT.videoImage.width, ROOT.videoImage.height );
    
    ROOT.texture       =   App.tools.loadVideoTexture ( "glVideoTexture" , ROOT.videoImage );
    
    
    console.log('Video 3d canvas texture created.');
    App.updateBeforeDraw.push(ROOT);
    

    };
    
    ROOT.video.addEventListener('loadeddata',  ROOT.video.READY , false);

    ROOT.video.src = "res/videos/"+path_;

    
    ROOT.UPDATE = function(){
        
        if ( ROOT.video.readyState === ROOT.video.HAVE_ENOUGH_DATA )
        {
            
            ROOT.videoImageContext.drawImage( ROOT.video, 0, 0, ROOT.videoImage.width, ROOT.videoImage.height );
            
            ROOT.videoImageContext.font="30px Georgia";
            ROOT.videoImageContext.fillStyle = "black";
            ROOT.videoImageContext.fillText( " Visual-JS game engine -webGL 2 part" , 0, 85  );
            ROOT.videoImageContext.fillText("Video texture example ",20,50);
            
        }
        
    };
    
   

}




