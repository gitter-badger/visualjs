
/**
Copyright 2016, zlatnaspirala@gmail.com
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are
met:

    * Redistributions of source code must retain the above copyright
notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above
copyright notice, this list of conditions and the following disclaimer
in the documentation and/or other materials provided with the
distribution.
    * Neither the name of zlatnaspirala@gmail.com nor the names of its
contributors may be used to endorse or promote products derived from
this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
'AS IS' AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*//***************************************************************************/
/*                                                                         */
/*  This obfuscated code was created by Javascript Obfuscator Free Version.*/
/*  Javascript Obfuscator Free Version can be downloaded here              */
/*  http://javascriptobfuscator.com                                        */
/*                                                                         */
/***************************************************************************/
function EVENTS(lB,lE){var lF=this;this.ROOT_ENGINE=lE;if(NOMOBILE==0){lB.addEventListener("\x74\x6F\x75\x63\x68\x73\x74\x61\x72\x74",function(lG){lG.preventDefault();var lH=lG.changedTouches;SYS.MOUSE.x=lH[0].pageX;SYS.MOUSE.y=lH[0].pageY;lF.CALCULATE_TOUCH_OR_CLICK()},false);lB.addEventListener("\x74\x6F\x75\x63\x68\x65\x6E\x64",function(lG){lG.preventDefault();var lH=lG.changedTouches;SYS.MOUSE.PRESS=false;SYS.MOUSE.x=lH[0].pageX;SYS.MOUSE.y=lH[0].pageY;lF.CALCULATE_TOUCH_UP_OR_MOUSE_UP()},false);lB.addEventListener("\x74\x6F\x75\x63\x68\x63\x61\x6E\x63\x65\x6C",function(lG){lG.preventDefault();var lH=lG.changedTouches;SYS.MOUSE.PRESS=false;SYS.MOUSE.x=lH[0].pageX;SYS.MOUSE.y=lH[0].pageY;lF.CALCULATE_TOUCH_UP_OR_MOUSE_UP()},false);lB.addEventListener("\x74\x6F\x75\x63\x68\x6D\x6F\x76\x65",function(lG){lG.preventDefault();var lH=lG.changedTouches;SYS.MOUSE.x=lH[0].pageX;SYS.MOUSE.y=lH[0].pageY;lF.CALCULATE_TOUCH_MOVE_OR_MOUSE_MOVE()},false)}else {lB.addEventListener("\x63\x6C\x69\x63\x6B",function(lG){SYS.MOUSE.x=lG.layerX;SYS.MOUSE.y=lG.layerY;lF.CALCULATE_TOUCH_OR_CLICK()},false);lB.addEventListener("\x6D\x6F\x75\x73\x65\x75\x70",function(lG){SYS.MOUSE.PRESS=false;SYS.MOUSE.BUTTON_PRESSED=null;SYS.MOUSE.x=lG.layerX;SYS.MOUSE.y=lG.layerY;lF.CALCULATE_TOUCH_UP_OR_MOUSE_UP()},false);lB.onmousemove=function(lG){SYS.MOUSE.x=lG.layerX;SYS.MOUSE.y=lG.layerY;lF.CALCULATE_TOUCH_MOVE_OR_MOUSE_MOVE()};lB.onmousedown=function(lG){SYS.MOUSE.PRESS=true;if(lG.which==3){SYS.MOUSE.BUTTON_PRESSED="\x52\x49\x47\x48\x54";SYS.DEBUG.LOG("\x52\x69\x67\x68\x74\x20\x62\x75\x74\x74\x6F\x6E\x20\x63\x6C\x69\x63\x6B\x65\x64")}else {if(lG.which==2){SYS.MOUSE.BUTTON_PRESSED="\x4D\x49\x44";SYS.DEBUG.LOG("\x4D\x69\x64\x20\x62\x75\x74\x74\x6F\x6E\x20\x63\x6C\x69\x63\x6B\x65\x64")}else {if(lG.which==1){SYS.MOUSE.BUTTON_PRESSED="\x4C\x45\x46\x54";SYS.DEBUG.LOG("\x4C\x65\x66\x74\x20\x62\x75\x74\x74\x6F\x6E\x20\x63\x6C\x69\x63\x6B\x65\x64")}}};SYS.MOUSE.x=lG.layerX;SYS.MOUSE.y=lG.layerY;lF.CALCULATE_TOUCH_DOWN_OR_MOUSE_DOWN()}};this.CALCULATE_TOUCH_OR_CLICK=function(){for(var F=0;F<this.ROOT_ENGINE.MODULES.length;F++){for(var H=0;H<lF.ROOT_ENGINE.MODULES[F].GAME_OBJECTS.length;H++){var lI=lF.ROOT_ENGINE.MODULES[F].GAME_OBJECTS[H];if(SYS.MOUSE.x>lI.POSITION.X()&&SYS.MOUSE.x<lI.POSITION.X()+lI.DIMENSION.WIDTH()&&SYS.MOUSE.y>lI.POSITION.Y()&&SYS.MOUSE.y<lI.POSITION.Y()+lI.DIMENSION.HEIGHT()){SYS.DEBUG.LOG("\x53\x59\x53\x20\x3A\x20\x74\x6F\x75\x63\x68\x20\x6F\x72\x20\x63\x6C\x69\x63\x6B\x20\x65\x76\x65\x6E\x74\x20\x6F\x6E\x20\x67\x61\x6D\x65\x20\x6F\x62\x6A\x65\x63\x74\x20\x3A\x20"+lI.NAME);if(lF.ROOT_ENGINE.ENGINE_EDITOR==false&&lI.TYPE_OF_GAME_OBJECT!="\x4E\x4F\x5F\x52\x45\x4E\x44\x45\x52"){lI.FOCUS=true;lI.TAP()}}}}};this.CALCULATE_TOUCH_MOVE_OR_MOUSE_MOVE=function(){for(var F=0;F<this.ROOT_ENGINE.MODULES.length;F++){var lJ=false;for(var H=0;H<lF.ROOT_ENGINE.MODULES[F].GAME_OBJECTS.length;H++){var lI=lF.ROOT_ENGINE.MODULES[F].GAME_OBJECTS[H];if(SYS.MOUSE.x>lI.POSITION.X()&&SYS.MOUSE.x<lI.POSITION.X()+lI.DIMENSION.WIDTH()&&SYS.MOUSE.y>lI.POSITION.Y()&&SYS.MOUSE.y<lI.POSITION.Y()+lI.DIMENSION.HEIGHT()){if(lF.ROOT_ENGINE.ENGINE_EDITOR==false){lI.TOUCH_MOVE();if(SYS.MOUSE.PRESS==true&&lI.DRAG==true&&lJ==false&&lI.DRAG_STATUS==true){lJ=true;lI.DRAG_DELTA=(lI.DRAG_START_X);var lK=CONVERTOR.PIX_TO_PER(parseFloat(lI.DRAG_DELTA.toFixed(2)));lI.POSITION.TRANSLATE_BY_X(parseFloat(CONVERTOR.PIX_TO_PER(SYS.MOUSE.x).toFixed(2))-Math.abs(lK));lI.DRAG_DELTA=(lI.DRAG_START_Y);var lK=CONVERTOR.PIY_TO_PER(parseFloat(lI.DRAG_DELTA.toFixed(2)));lI.POSITION.TRANSLATE_BY_Y(parseFloat(CONVERTOR.PIY_TO_PER(SYS.MOUSE.y).toFixed(2))-Math.abs(lK))}}}else {};if(lI.EDITOR.ENABLE==true){if(SYS.MOUSE.PRESS==true&&lI.EDITOR.ACTOR_DRAG==true&&lJ==false){lJ=true;lI.EDITOR.ACTOR_DELTA=(lI.EDITOR.ACTOR_START_X+lI.EDITOR.ACTORS_AREA_HEIGHT);var lK=CONVERTOR.PIX_TO_PER(parseFloat(lI.EDITOR.ACTOR_DELTA.toFixed(2)));lI.POSITION.TRANSLATE_BY_X(parseFloat(CONVERTOR.PIX_TO_PER(SYS.MOUSE.x).toFixed(2))-Math.abs(lK));lI.EDITOR.ACTOR_DELTA=(lI.EDITOR.ACTOR_START_Y+lI.EDITOR.ACTORS_AREA_HEIGHT);var lK=CONVERTOR.PIY_TO_PER(parseFloat(lI.EDITOR.ACTOR_DELTA.toFixed(2)));lI.POSITION.TRANSLATE_BY_Y(parseFloat(CONVERTOR.PIY_TO_PER(SYS.MOUSE.y).toFixed(2))-Math.abs(lK))};if(lI.EDITOR.ACTOR_X_IN_MOVE==true){lI.EDITOR.ACTOR_DELTA=(lI.EDITOR.ACTOR_START_X);var lK=CONVERTOR.PIX_TO_PER(parseFloat(lI.EDITOR.ACTOR_DELTA.toFixed(1)));lI.POSITION.TRANSLATE_BY_X(parseFloat(CONVERTOR.PIX_TO_PER(SYS.MOUSE.x).toFixed(1))-Math.abs(lK))};if(lI.EDITOR.ACTOR_Y_IN_MOVE==true){lI.EDITOR.ACTOR_DELTA=(lI.EDITOR.ACTOR_START_Y);var lK=CONVERTOR.PIY_TO_PER(parseFloat(lI.EDITOR.ACTOR_DELTA.toFixed(1)));lI.POSITION.TRANSLATE_BY_Y(parseFloat(CONVERTOR.PIY_TO_PER(SYS.MOUSE.y).toFixed(1))-Math.abs(lK))};if(SYS.MOUSE.x>lI.POSITION.X()+lI.EDITOR.ACTORS_AREA_HEIGHT&&SYS.MOUSE.x<lI.POSITION.X()+lI.EDITOR.ACTORS_AREA_HEIGHT*15&&SYS.MOUSE.y>lI.POSITION.Y()&&SYS.MOUSE.y<lI.POSITION.Y()+lI.EDITOR.ACTORS_AREA_HEIGHT){lI.EDITOR.ACTOR_BLUE_HOVER=true}else {lI.EDITOR.ACTOR_BLUE_HOVER=false};if(SYS.MOUSE.x>lI.POSITION.X()&&SYS.MOUSE.x<lI.POSITION.X()+lI.EDITOR.ACTORS_AREA_HEIGHT&&SYS.MOUSE.y>lI.POSITION.Y()+lI.EDITOR.ACTORS_AREA_HEIGHT&&SYS.MOUSE.y<lI.POSITION.Y()+lI.EDITOR.ACTORS_AREA_HEIGHT*15){lI.EDITOR.ACTOR_GREEN_HOVER=true}else {lI.EDITOR.ACTOR_GREEN_HOVER=false}};if(lI.EDITOR.GAME_OBJECT_MENU.VISIBLE==true){lI.EDITOR.ACTOR_DRAG=false;for(var q=0;q<lI.EDITOR.BUTTONS.length;q++){if(SYS.MOUSE.x>lI.EDITOR.BUTTONS[q].POSITION.x&&SYS.MOUSE.x<lI.EDITOR.BUTTONS[q].POSITION.x+lI.EDITOR.BUTTONS[q].DIMENSION.WIDTH()&&SYS.MOUSE.y>lI.EDITOR.BUTTONS[q].POSITION.y+lI.EDITOR.BUTTONS[q].Y_OFFSET&&SYS.MOUSE.y<lI.EDITOR.BUTTONS[q].POSITION.y+lI.EDITOR.BUTTONS[q].Y_OFFSET+lI.EDITOR.BUTTONS[q].DIMENSION.HEIGHT()){lI.EDITOR.BUTTONS[q].HOVER=true}else {lI.EDITOR.BUTTONS[q].HOVER=false}}}}};if(lE.GUI.VISIBLE==true){for(var F=0;F<lE.GUI.BUTTONS.length;F++){if(SYS.MOUSE.x>lE.GUI.BUTTONS[F].POSITION.x&&SYS.MOUSE.x<lE.GUI.BUTTONS[F].POSITION.x+lE.GUI.BUTTONS[F].DIMENSION.WIDTH()&&SYS.MOUSE.y>lE.GUI.BUTTONS[F].POSITION.y+lE.GUI.BUTTONS[F].Y_OFFSET&&SYS.MOUSE.y<lE.GUI.BUTTONS[F].POSITION.y+lE.GUI.BUTTONS[F].Y_OFFSET+lE.GUI.BUTTONS[F].DIMENSION.HEIGHT()){lE.GUI.BUTTONS[F].HOVER=true}else {lE.GUI.BUTTONS[F].HOVER=false}}};if(lE.GUI.VISIBLE==true){for(var F=0;F<lE.GUI.LIST_OF_OBJECTS.BUTTONS_MODULES.length;F++){if(SYS.MOUSE.x>lE.GUI.LIST_OF_OBJECTS.BUTTONS_MODULES[F].POSITION.x&&SYS.MOUSE.x<lE.GUI.LIST_OF_OBJECTS.BUTTONS_MODULES[F].POSITION.x+lE.GUI.LIST_OF_OBJECTS.BUTTONS_MODULES[F].DIMENSION.WIDTH()&&SYS.MOUSE.y>lE.GUI.LIST_OF_OBJECTS.BUTTONS_MODULES[F].POSITION.y+lE.GUI.LIST_OF_OBJECTS.BUTTONS_MODULES[F].Y_OFFSET&&SYS.MOUSE.y<lE.GUI.LIST_OF_OBJECTS.BUTTONS_MODULES[F].POSITION.y+lE.GUI.LIST_OF_OBJECTS.BUTTONS_MODULES[F].Y_OFFSET+lE.GUI.LIST_OF_OBJECTS.BUTTONS_MODULES[F].DIMENSION.HEIGHT()){lE.GUI.LIST_OF_OBJECTS.BUTTONS_MODULES[F].HOVER=true}else {lE.GUI.LIST_OF_OBJECTS.BUTTONS_MODULES[F].HOVER=false}}}};this.CALCULATE_TOUCH_UP_OR_MOUSE_UP=function(){for(var F=0;F<this.ROOT_ENGINE.MODULES.length;F++){for(var H=0;H<lF.ROOT_ENGINE.MODULES[F].GAME_OBJECTS.length;H++){var lI=lF.ROOT_ENGINE.MODULES[F].GAME_OBJECTS[H];lI.EDITOR.ACTOR_X_IN_MOVE=false;lI.EDITOR.ACTOR_Y_IN_MOVE=false;if(lI.EDITOR.ENABLE==true){lI.EDITOR.ACTOR_DRAG=false};if(lF.ROOT_ENGINE.ENGINE_EDITOR==false){if(SYS.MOUSE.x>lI.POSITION.X()&&SYS.MOUSE.x<lI.POSITION.X()+lI.DIMENSION.WIDTH()&&SYS.MOUSE.y>lI.POSITION.Y()&&SYS.MOUSE.y<lI.POSITION.Y()+lI.DIMENSION.HEIGHT()){if(lI.TYPE_OF_GAME_OBJECT!="\x4E\x4F\x5F\x52\x45\x4E\x44\x45\x52"){lI.TOUCH_UP();SYS.DOM.E(SYS.RUNNING_PROGRAMS[0]).style.cursor="\x61\x75\x74\x6F"}}}}}};this.CALCULATE_TOUCH_DOWN_OR_MOUSE_DOWN=function(){var lV=false;for(var F=0;F<this.ROOT_ENGINE.MODULES.length;F++){for(var H=0;H<lF.ROOT_ENGINE.MODULES[F].GAME_OBJECTS.length;H++){var lI=lF.ROOT_ENGINE.MODULES[F].GAME_OBJECTS[H];if(SYS.MOUSE.x>lI.POSITION.X()&&SYS.MOUSE.x<lI.POSITION.X()+lI.DIMENSION.WIDTH()&&SYS.MOUSE.y>lI.POSITION.Y()&&SYS.MOUSE.y<lI.POSITION.Y()+lI.DIMENSION.HEIGHT()){lI.EDITOR.SELECTED=true;SYS.DEBUG.LOG("\x53\x59\x53\x20\x3A\x20\x74\x6F\x75\x63\x68\x44\x6F\x77\x6E\x20\x6F\x72\x20\x6D\x6F\x75\x73\x65\x44\x6F\x77\x6E\x20\x65\x76\x65\x6E\x74\x20\x6F\x6E\x20\x67\x61\x6D\x65\x20\x6F\x62\x6A\x65\x63\x74\x20\x3A\x20"+lI.NAME);lV=true;if(lI.TYPE_OF_GAME_OBJECT=="\x54\x45\x58\x54\x5F\x42\x4F\x58"&&lI.TEXTBOX.EDIT==true){lI.TEXTBOX.FOCUS=true;lF.ROOT_ENGINE.KEYBOARD.CAPTURE_CHAR=lI.TEXTBOX.TEXT;lF.ROOT_ENGINE.KEYBOARD.TARGET_MODUL=lI.PARENT;lF.ROOT_ENGINE.KEYBOARD.TARGET=lI.NAME};if(lF.ROOT_ENGINE.ENGINE_EDITOR==false&&lI.TYPE_OF_GAME_OBJECT!="\x4E\x4F\x5F\x52\x45\x4E\x44\x45\x52"){lI.FOCUS=true;lI.TOUCH_DOWN();if(lI.DRAG==true){if(SYS.MOUSE.BUTTON_PRESSED=="\x4C\x45\x46\x54"){SYS.DOM.E(lI.PROGRAM_NAME).style.cursor="\x4D\x4F\x56\x45";lI.DRAG=true;lI.DRAG_START_X=parseFloat(SYS.MOUSE.x.toFixed(2)-lI.POSITION.X());lI.DRAG_START_Y=parseFloat(SYS.MOUSE.y.toFixed(2)-lI.POSITION.Y())}}}}else {lI.FOCUS=false};if(lI.EDITOR.ENABLE==true){if(lI.EDITOR.GAME_OBJECT_MENU.VISIBLE==true){lI.EDITOR.ACTOR_DRAG=false;for(var q=0;q<lI.EDITOR.BUTTONS.length;q++){if(SYS.MOUSE.x>lI.EDITOR.BUTTONS[q].POSITION.x&&SYS.MOUSE.x<lI.EDITOR.BUTTONS[q].POSITION.x+lI.EDITOR.BUTTONS[q].DIMENSION.WIDTH()&&SYS.MOUSE.y>lI.EDITOR.BUTTONS[q].POSITION.y+lI.EDITOR.BUTTONS[q].Y_OFFSET&&SYS.MOUSE.y<lI.EDITOR.BUTTONS[q].POSITION.y+lI.EDITOR.BUTTONS[q].Y_OFFSET+lI.EDITOR.BUTTONS[q].DIMENSION.HEIGHT()){if(lI.EDITOR.BUTTONS[q].IAM=="\x31"){lF.ROOT_ENGINE.MODULES[F].DESTROY_OBJECT(lI.NAME);DESTROY(lI.NAME);SYS.DEBUG.LOG("\x44\x45\x53\x54\x52\x4F\x59\x5F\x4F\x42\x4A\x45\x43\x54")}else {if(lI.EDITOR.BUTTONS[q].IAM=="\x32"){var lR=prompt("\x44\x65\x73\x74\x72\x6F\x79\x20\x67\x61\x6D\x65\x5F\x6F\x62\x6A\x65\x63\x74\x20\x28\x20\x54\x69\x6D\x65\x20\x6E\x6F\x74\x20\x63\x6F\x75\x6E\x74\x20\x69\x6E\x20\x65\x64\x69\x74\x6F\x72\x20\x29\x3A","\x31\x30");if(!isNaN(parseFloat(lR.charAt(0)))){var lL=lI.NAME;lI.DESTROY_ME_AFTER_X_SECUND(lR,lL,F,lF)}else {alert("\x45\x52\x52\x4F\x52\x20\x4D\x53\x47\x3A\x20\x41\x44\x44\x5F\x41\x4E\x49\x4D\x41\x54\x49\x4F\x4E\x20\x6E\x6F\x74\x20\x73\x75\x63\x63\x65\x73\x73\x2E")};SYS.DEBUG.LOG("\x74\x65\x73\x74\x32")}else {if(lI.EDITOR.BUTTONS[q].IAM=="\x33"){var lU="";for(var lO in RESOURCE){if(RESOURCE.hasOwnProperty(lO)&&lO!="\x53\x55\x4D"){lU+="\x20\x20"+lO+"\x2C\x20"}};var lR=prompt("\x46\x75\x6C\x6C\x20\x6C\x69\x73\x74\x20\x6F\x66\x20\x69\x6D\x61\x67\x65\x73\x20\x73\x6F\x75\x72\x63\x65\x20\x3A\x20\x0A\x20"+lU+"\x20\x20\x20\x0A\x20\x0A\x20\x45\x6E\x74\x65\x72\x20\x6E\x61\x6D\x65\x20\x6F\x66\x20\x61\x6E\x69\x6D\x61\x74\x69\x6F\x6E\x20\x72\x65\x73\x6F\x75\x72\x63\x65\x20\x6F\x62\x6A\x65\x63\x74\x20\x3A","\x64\x65\x6D\x6F\x31");if(isNaN(parseFloat(lR.charAt(0)))){ADD_ANIMATION(lI.NAME,lI.PROGRAM_NAME,lI.PARENT,lR)}else {alert("\x45\x52\x52\x4F\x52\x20\x4D\x53\x47\x3A\x20\x41\x44\x44\x5F\x41\x4E\x49\x4D\x41\x54\x49\x4F\x4E\x20\x6E\x6F\x74\x20\x73\x75\x63\x63\x65\x73\x73\x2E")};SYS.DEBUG.LOG("\x61\x64\x64\x20\x61\x6E\x69\x6D\x61\x74\x69\x6F\x6E\x2E\x2E\x2E\x2E")}else {if(lI.EDITOR.BUTTONS[q].IAM=="\x34"){if(lI.COLLISION==null){var lR=prompt("\x45\x6E\x74\x65\x72\x20\x6F\x75\x74\x6C\x69\x6E\x65\x20\x6D\x61\x72\x67\x69\x6E\x20\x63\x6F\x6C\x6C\x69\x64\x65\x72\x2E","\x31\x2E\x30\x32");if(!isNaN(parseFloat(lR.charAt(0)))){ADD_COLLISION(lI.NAME,lI.PROGRAM_NAME,lI.PARENT,lR);lI.EDITOR.BUTTONS[q].text="\x52\x65\x6D\x6F\x76\x65\x20\x63\x6F\x6C\x6C\x69\x73\x69\x6F\x6E";SYS.DEBUG.LOG("\x61\x64\x64\x20\x63\x6F\x6C\x6C\x69\x64\x65\x72")}else {alert("\x45\x52\x52\x4F\x52\x20\x4D\x53\x47\x3A\x20\x41\x44\x44\x5F\x43\x4F\x4C\x4C\x49\x53\x49\x4F\x4E\x20\x6E\x6F\x74\x20\x73\x75\x63\x63\x65\x73\x73\x2E")}}else {if(lI.EDITOR.BUTTONS[q].text=="\x52\x65\x6D\x6F\x76\x65\x20\x63\x6F\x6C\x6C\x69\x73\x69\x6F\x6E"){REMOVE_COLLISION();lI.COLLISION=null;lI.EDITOR.BUTTONS[q].text="\x41\x64\x64\x20\x63\x6F\x6C\x6C\x69\x73\x69\x6F\x6E";SYS.DEBUG.LOG("\x72\x65\x6D\x6F\x76\x65\x20\x63\x6F\x6C\x6C\x69\x64\x65\x72")}}}else {if(lI.EDITOR.BUTTONS[q].IAM=="\x35"){if( typeof PLAYER==="\x75\x6E\x64\x65\x66\x69\x6E\x65\x64"){var lR=prompt("\x45\x6E\x74\x65\x72\x20\x70\x6C\x61\x79\x65\x72\x20\x74\x79\x70\x65\x20\x3A\x20","\x4E\x4F\x52\x4D\x41\x4C");if(isNaN(parseFloat(lR.charAt(0)))){CREATE_PLAYER(lI.NAME,lI.PROGRAM_NAME,lI.PARENT,lR,q);lI.EDITOR.BUTTONS[q].text="\x44\x65\x61\x74\x61\x63\x68\x20\x70\x6C\x61\x79\x65\x72";SYS.DEBUG.LOG("\x61\x74\x61\x63\x68\x20\x70\x6C\x61\x79\x65\x72")}}else {if( typeof lI.PLAYER!="\x75\x6E\x64\x65\x66\x69\x6E\x65\x64"){DEATACH_PLAYER(lI.NAME,lI.PROGRAM_NAME,lI.PARENT);delete (lI.PLAYER);delete (PLAYER);lI.EDITOR.BUTTONS[q].text="\x41\x74\x61\x63\x68\x20\x70\x6C\x61\x79\x65\x72";SYS.DEBUG.LOG("\x64\x65\x61\x74\x61\x63\x68\x20\x70\x6C\x61\x79\x65\x72\x20\x2C\x20\x61\x6C\x73\x6F\x20\x64\x65\x73\x74\x72\x6F\x79\x20\x50\x4C\x41\x59\x45\x52\x20\x67\x6C\x6F\x62\x61\x6C\x20\x6F\x62\x6A\x65\x63\x74\x2E")}}}else {if(lI.EDITOR.BUTTONS[q].IAM=="\x36"){if(lI.PARTICLE==null){var lR=prompt("\x45\x6E\x74\x65\x72\x20\x70\x61\x72\x74\x69\x63\x6C\x65\x20\x74\x79\x70\x65\x20\x3A\x20","\x46\x4F\x4E\x54\x41\x4E");if(isNaN(parseFloat(lR.charAt(0)))){ADD_PARTICLE(lI.NAME,lI.PROGRAM_NAME,lI.PARENT,lR);lI.CREATE_PARTICLE(lR);lI.EDITOR.BUTTONS[q].text="\x52\x65\x6D\x6F\x76\x65\x20\x70\x61\x72\x74\x69\x63\x6C\x65";SYS.DEBUG.LOG("\x61\x74\x61\x63\x68\x20\x70\x6C\x61\x79\x65\x72")}}else {if( typeof lI.PARTICLE!=null){REMOVE_PARTICLE(lI.NAME,lI.PROGRAM_NAME,lI.PARENT);lI.TYPE_OF_GAME_OBJECT="\x65\x6D\x70\x74\x79";delete (lI.PARTICLE);lI.PARTICLE=null;lI.EDITOR.BUTTONS[q].text="\x41\x64\x64\x20\x70\x61\x72\x74\x69\x63\x6C\x65";SYS.DEBUG.LOG("\x70\x61\x72\x74\x69\x63\x6C\x65\x20\x72\x65\x6D\x6F\x76\x65\x64\x20\x66\x72\x6F\x6D\x20"+lI.NAME)}}}else {if(lI.EDITOR.BUTTONS[q].IAM=="\x37"){if(lI.TEXTBOX==null){var lR=prompt("\x45\x6E\x74\x65\x72\x20\x74\x65\x78\x74\x20\x76\x61\x6C\x75\x65\x20\x3A\x20","\x48\x45\x4C\x4C\x4F");var lP=prompt("\x45\x6E\x74\x65\x72\x20\x63\x6F\x6C\x6F\x72\x20\x76\x61\x6C\x75\x65\x20\x3A\x20","\x72\x65\x64");var lS=prompt("\x45\x6E\x74\x65\x72\x20\x54\x65\x78\x74\x20\x63\x6F\x6C\x6F\x72\x20\x76\x61\x6C\x75\x65\x20\x3A\x20","\x62\x6C\x61\x63\x6B");var lQ=prompt("\x45\x6E\x74\x65\x72\x20\x72\x65\x63\x74\x20\x72\x61\x64\x69\x75\x73\x20\x20\x76\x61\x6C\x75\x65\x20\x3A\x20",15);lR=""+lR.toString();ADD_TEXTBOX(lI.NAME,lI.PROGRAM_NAME,lI.PARENT,lR,lQ,lP,lS);lI.CREATE_TEXTBOX(lR,lQ,lP,lS);lI.EDITOR.BUTTONS[q].text="\x52\x65\x6D\x6F\x76\x65\x20\x74\x65\x78\x74\x62\x6F\x78";SYS.DEBUG.LOG("\x61\x74\x61\x63\x68\x20\x74\x65\x78\x74\x62\x6F\x78")}else {if( typeof lI.TEXTBOX!=null){REMOVE_TEXTBOX(lI.NAME,lI.PROGRAM_NAME,lI.PARENT);lI.TYPE_OF_GAME_OBJECT="\x65\x6D\x70\x74\x79";delete (lI.TEXTBOX);lI.TEXTBOX=null;lI.EDITOR.BUTTONS[q].text="\x41\x64\x64\x20\x74\x65\x78\x74\x62\x6F\x78";SYS.DEBUG.LOG("\x74\x65\x78\x74\x62\x6F\x78\x20\x72\x65\x6D\x6F\x76\x65\x64\x20\x66\x72\x6F\x6D\x20"+lI.NAME+"\x20\x2E\x20\x41\x6E\x64\x20\x2E\x54\x45\x58\x54\x42\x4F\x58\x20\x69\x73\x20\x3A"+lI.TEXTBOX)}}}else {if(lI.EDITOR.BUTTONS[q].IAM=="\x38"){if(lI.WEBCAM==null){var lR=prompt("\x43\x68\x6F\x6F\x73\x65\x20\x4E\x4F\x52\x4D\x41\x4C\x20\x69\x66\x20\x79\x6F\x75\x20\x77\x61\x6E\x6E\x61\x20\x73\x69\x6D\x70\x6C\x65\x20\x77\x65\x62\x63\x61\x6D\x20\x76\x69\x65\x77\x20\x6F\x72\x20\x65\x6E\x74\x65\x72\x20\x76\x61\x6C\x75\x65\x20\x27\x4E\x55\x49\x27\x20\x66\x6F\x72\x20\x6D\x6F\x74\x69\x6F\x6E\x20\x64\x65\x74\x65\x63\x74\x20\x63\x6F\x6D\x70\x6F\x6E\x65\x6E\x74\x20\x2B\x20\x77\x65\x62\x63\x61\x6D\x20\x76\x69\x65\x77\x20\x3A\x20","\x4E\x4F\x52\x4D\x41\x4C");if(lR=="\x4E\x4F\x52\x4D\x41\x4C"){var lT=prompt("\x4A\x75\x73\x74\x20\x70\x72\x65\x73\x73\x20\x65\x6E\x74\x65\x72\x20\x74\x6F\x20\x6D\x61\x6B\x65\x20\x76\x69\x64\x65\x6F\x20\x77\x69\x74\x68\x20\x74\x68\x65\x20\x73\x61\x6D\x65\x20\x64\x69\x6D\x65\x6E\x73\x69\x6F\x6E\x73\x20\x6C\x69\x6B\x65\x20\x67\x61\x6D\x65\x5F\x6F\x62\x6A\x65\x63\x74\x20\x2C\x20\x61\x6E\x79\x20\x6F\x74\x68\x65\x72\x20\x76\x61\x6C\x75\x65\x20\x73\x65\x74\x20\x64\x69\x6D\x65\x6E\x73\x69\x6F\x6E\x73\x20\x6F\x66\x20\x77\x65\x62\x63\x61\x6D\x20\x76\x69\x64\x65\x6F\x2E\x20","\x47\x41\x4D\x45\x5F\x4F\x42\x4A\x45\x43\x54");if(lT=="\x47\x41\x4D\x45\x5F\x4F\x42\x4A\x45\x43\x54"){lI.CREATE_WEBCAM(lR,lT);ADD_WEBCAM(lI.NAME,lI.PROGRAM_NAME,lI.PARENT,lR,lT);lI.EDITOR.BUTTONS[q].text="\x52\x65\x6D\x6F\x76\x65\x20\x77\x65\x62\x63\x61\x6D";SYS.DEBUG.LOG("\x61\x74\x61\x63\x68\x20\x77\x65\x62\x63\x61\x6D")}else {lI.CREATE_WEBCAM(lR,lT);ADD_WEBCAM(lI.NAME,lI.PROGRAM_NAME,lI.PARENT,lR,"\x57\x45\x42\x43\x41\x4D\x5F\x44\x49\x4D\x45\x4E\x53\x49\x4F\x4E");lI.EDITOR.BUTTONS[q].text="\x52\x65\x6D\x6F\x76\x65\x20\x77\x65\x62\x63\x61\x6D";SYS.DEBUG.LOG("\x61\x74\x61\x63\x68\x20\x77\x65\x62\x63\x61\x6D")}}else {if(lR=="\x4E\x55\x49"){var lT=prompt("\x4A\x75\x73\x74\x20\x70\x72\x65\x73\x73\x20\x65\x6E\x74\x65\x72\x20\x74\x6F\x20\x6D\x61\x6B\x65\x20\x76\x69\x64\x65\x6F\x20\x77\x69\x74\x68\x20\x74\x68\x65\x20\x73\x61\x6D\x65\x20\x64\x69\x6D\x65\x6E\x73\x69\x6F\x6E\x73\x20\x6C\x69\x6B\x65\x20\x67\x61\x6D\x65\x5F\x6F\x62\x6A\x65\x63\x74\x20\x2C\x20\x61\x6E\x79\x20\x6F\x74\x68\x65\x72\x20\x76\x61\x6C\x75\x65\x20\x73\x65\x74\x20\x64\x69\x6D\x65\x6E\x73\x69\x6F\x6E\x73\x20\x6F\x66\x20\x77\x65\x62\x63\x61\x6D\x20\x76\x69\x64\x65\x6F\x2E\x20","\x47\x41\x4D\x45\x5F\x4F\x42\x4A\x45\x43\x54");var lN=prompt("\x20\x53\x75\x6D\x20\x6F\x66\x20\x6D\x6F\x74\x69\x6F\x6E\x20\x64\x65\x74\x65\x63\x74\x20\x70\x6F\x69\x6E\x74\x20\x66\x6F\x72\x20\x76\x65\x72\x74\x69\x63\x61\x6C\x20\x6C\x69\x6E\x65\x2C\x20\x38\x20\x69\x73\x20\x6F\x70\x74\x69\x6D\x61\x6C\x20\x66\x6F\x72\x20\x6D\x61\x78\x20\x76\x61\x6C\x75\x65\x20\x61\x6E\x64\x20\x31\x20\x69\x73\x20\x6D\x69\x6E\x69\x6D\x75\x6D\x20\x2E\x20",6);var lM=prompt("\x20\x53\x75\x6D\x20\x6F\x66\x20\x6D\x6F\x74\x69\x6F\x6E\x20\x64\x65\x74\x65\x63\x74\x20\x70\x6F\x69\x6E\x74\x20\x66\x6F\x72\x20\x68\x6F\x72\x69\x7A\x6F\x6E\x74\x61\x6C\x20\x6C\x69\x6E\x65\x2C\x20\x38\x20\x69\x73\x20\x6F\x70\x74\x69\x6D\x61\x6C\x20\x66\x6F\x72\x20\x6D\x61\x78\x20\x76\x61\x6C\x75\x65\x20\x61\x6E\x64\x20\x31\x20\x69\x73\x20\x6D\x69\x6E\x69\x6D\x75\x6D\x20\x2E\x20",6);if(!isNaN(lN)&&!isNaN(lM)&&isNaN(lT)){lI.CREATE_WEBCAM(lR,lT);ADD_WEBCAM(lI.NAME,lI.PROGRAM_NAME,lI.PARENT,lR,lT,lN,lM);lI.EDITOR.BUTTONS[q].text="\x52\x65\x6D\x6F\x76\x65\x20\x77\x65\x62\x63\x61\x6D";SYS.DEBUG.LOG("\x61\x74\x61\x63\x68\x20\x77\x65\x62\x63\x61\x6D")}else {SYS.DEBUG.WARNING("\x20\x45\x72\x72\x6F\x72\x20\x69\x6E\x20\x43\x52\x45\x41\x54\x45\x5F\x57\x45\x42\x43\x41\x4D\x20\x70\x72\x6F\x63\x65\x64\x75\x72\x65\x20\x44\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E\x20\x3A\x20\x74\x79\x70\x65\x20\x6F\x66\x20\x64\x69\x6D\x65\x6E\x73\x69\x6F\x6E\x73\x20\x6D\x75\x73\x74\x20\x62\x65\x20\x73\x74\x72\x69\x6E\x67\x20\x2C\x20\x53\x75\x6D\x20\x6F\x66\x20\x70\x6F\x69\x6E\x74\x20\x6D\x75\x73\x74\x20\x62\x65\x20\x6E\x75\x6D\x62\x65\x72\x2E")}}}}else {lI.DESTROY_WEBCAM();REMOVE_WEBCAM(lI.NAME,lI.PROGRAM_NAME,lI.PARENT)}}}}}}}}}}else {lI.EDITOR.GAME_OBJECT_MENU.VISIBLE=false}}};if(SYS.MOUSE.x>lI.EDITOR.ACTOR_DRAG_RECT_POS.X()+lI.EDITOR.ACTORS_AREA_HEIGHT&&SYS.MOUSE.x<lI.EDITOR.ACTOR_DRAG_RECT_POS.X()+lI.EDITOR.ACTOR_DRAG_RECT_DIM.WIDTH()+lI.EDITOR.ACTORS_AREA_HEIGHT&&SYS.MOUSE.y>lI.EDITOR.ACTOR_DRAG_RECT_POS.Y()+lI.EDITOR.ACTORS_AREA_HEIGHT&&SYS.MOUSE.y<lI.EDITOR.ACTOR_DRAG_RECT_POS.Y()+lI.EDITOR.ACTOR_DRAG_RECT_DIM.HEIGHT()+lI.EDITOR.ACTORS_AREA_HEIGHT){if(SYS.MOUSE.BUTTON_PRESSED=="\x4C\x45\x46\x54"){lI.EDITOR.ACTOR_DRAG=true;lI.EDITOR.ACTOR_START_X=parseFloat(SYS.MOUSE.x.toFixed(2)-lI.POSITION.X()-lI.EDITOR.ACTORS_AREA_HEIGHT);lI.EDITOR.ACTOR_START_Y=parseFloat(SYS.MOUSE.y.toFixed(2)-lI.POSITION.Y()-lI.EDITOR.ACTORS_AREA_HEIGHT)}else {if(SYS.MOUSE.BUTTON_PRESSED=="\x52\x49\x47\x48\x54"){if(lI.EDITOR.GAME_OBJECT_MENU.VISIBLE==false){for(var w=0;w<lI.EDITOR.BUTTONS.length;w++){lI.EDITOR.BUTTONS[w].POSITION.x=SYS.MOUSE.x;lI.EDITOR.BUTTONS[w].POSITION.y=SYS.MOUSE.y};lI.EDITOR.GAME_OBJECT_MENU.VISIBLE=true}}}};if(lI.EDITOR.ACTOR_BLUE_HOVER==true){lI.EDITOR.ACTOR_X_IN_MOVE=true;lI.EDITOR.ACTOR_START_X=parseFloat(SYS.MOUSE.x.toFixed(2)-lI.POSITION.X())}else {if(lI.EDITOR.ACTOR_GREEN_HOVER==true){lI.EDITOR.ACTOR_Y_IN_MOVE=true;lI.EDITOR.ACTOR_START_Y=parseFloat(SYS.MOUSE.y.toFixed(2)-lI.POSITION.Y())}};if(lV==false){lI.DESELECT_ALL()}};if(lV==false){lF.ROOT_ENGINE.KEYBOARD.TARGET_MODUL=undefined;lF.ROOT_ENGINE.KEYBOARD.TARGET=undefined}}};if(lE.ENGINE_EDITOR==true){if(lE.GUI.VISIBLE==false&&lV==false&&SYS.MOUSE.BUTTON_PRESSED=="\x52\x49\x47\x48\x54"){for(var F=0;F<lE.GUI.BUTTONS.length;F++){lE.GUI.BUTTONS[F].POSITION.x=SYS.MOUSE.x;lE.GUI.BUTTONS[F].POSITION.y=SYS.MOUSE.y};lE.GUI.VISIBLE=true}else {if(lE.GUI.VISIBLE==true){for(var F=0;F<lE.GUI.BUTTONS.length;F++){if(SYS.MOUSE.x>lE.GUI.BUTTONS[F].POSITION.x&&SYS.MOUSE.x<lE.GUI.BUTTONS[F].POSITION.x+lE.GUI.BUTTONS[F].DIMENSION.WIDTH()&&SYS.MOUSE.y>lE.GUI.BUTTONS[F].POSITION.y+lE.GUI.BUTTONS[F].Y_OFFSET&&SYS.MOUSE.y<lE.GUI.BUTTONS[F].POSITION.y+lE.GUI.BUTTONS[F].Y_OFFSET+lE.GUI.BUTTONS[F].DIMENSION.HEIGHT()){if(lE.GUI.BUTTONS[F].IAM=="\x31"){var lW=prompt("\x45\x6E\x74\x65\x72\x20\x67\x61\x6D\x65\x4F\x62\x6A\x65\x63\x74\x20\x6E\x61\x6D\x65\x20\x3A","\x6E\x6F\x6E\x61\x6D\x65");if(isNaN(parseFloat(lW.charAt(0)))){var lX=prompt("\x45\x6E\x74\x65\x72\x20\x67\x61\x6D\x65\x4F\x62\x6A\x65\x63\x74\x20\x70\x61\x72\x65\x6E\x74\x20\x6D\x6F\x64\x75\x6C\x20\x3A","\x53\x54\x41\x52\x54\x45\x52");if(isNaN(parseFloat(lW.charAt(0)))){ADD(lW,45,45,10,10,lB.id,lX)}else {alert("\x45\x52\x52\x4F\x52\x20\x4D\x53\x47\x3A\x20\x47\x61\x6D\x65\x4F\x62\x6A\x65\x63\x74\x20\x6E\x61\x6D\x65\x20\x63\x72\x65\x61\x74\x65\x64\x20\x6E\x6F\x74\x20\x73\x75\x63\x63\x65\x73\x73\x2E")}}else {alert("\x45\x52\x52\x4F\x52\x20\x4D\x53\x47\x3A\x20\x47\x61\x6D\x65\x4F\x62\x6A\x65\x63\x74\x20\x6E\x61\x6D\x65\x20\x63\x72\x65\x61\x74\x65\x64\x20\x6E\x6F\x74\x20\x73\x75\x63\x63\x65\x73\x73\x2E")}}else {if(lE.GUI.BUTTONS[F].IAM=="\x32"){for(var H=0;H<SYS.RUNNING_PROGRAMS.length;H++){window[SYS.RUNNING_PROGRAMS[H]].ENGINE.EXIT_EDIT_MODE()}}else {if(lE.GUI.BUTTONS[F].IAM=="\x33"){var lW=prompt("\x45\x6E\x74\x65\x72\x20\x20\x20\x70\x72\x6F\x67\x72\x61\x6D\x20\x44\x52\x41\x57\x5F\x49\x4E\x54\x45\x52\x56\x41\x4C\x20\x3A",15);if(!isNaN(parseFloat(lW))){var lX=prompt("\x45\x6E\x74\x65\x72\x20\x20\x70\x72\x6F\x67\x72\x61\x6D\x20\x55\x50\x44\x41\x54\x45\x5F\x49\x4E\x54\x45\x52\x56\x41\x4C\x20\x3A",15);if(!isNaN(parseFloat(lX))){SYS.DEBUG.LOG("\x50\x72\x6F\x67\x72\x61\x6D\x20\x69\x6E\x74\x65\x72\x76\x61\x6C\x20\x6E\x6F\x77\x20\x69\x73\x20\x20\x20"+lW+"\x20\x20\x2E\x20\x62\x65\x73\x74\x20\x72\x61\x6E\x67\x65\x20\x69\x73\x20\x5B\x31\x20\x2C\x20\x37\x30\x5D\x20\x20");window[lE.PROGRAM_ID].DRAW_INTERVAL=parseFloat(lW);window[lE.PROGRAM_ID].UPDATE_INTERVAL=parseFloat(lX);SET_MAIN_INTERVAL(lE.PROGRAM_ID,lW,lX)}else {alert("\x45\x52\x52\x4F\x52\x20\x4D\x53\x47\x3A\x20\x50\x72\x6F\x67\x72\x61\x6D\x20\x69\x6E\x74\x65\x72\x76\x61\x6C\x20\x6E\x6F\x74\x20\x73\x75\x63\x63\x65\x73\x73\x20\x63\x68\x61\x6E\x67\x65\x64\x2E")}}else {alert("\x45\x52\x52\x4F\x52\x20\x4D\x53\x47\x3A\x20\x50\x72\x6F\x67\x72\x61\x6D\x20\x69\x6E\x74\x65\x72\x76\x61\x6C\x20\x6E\x6F\x74\x20\x73\x75\x63\x63\x65\x73\x73\x20\x63\x68\x61\x6E\x67\x65\x64\x2E")}}else {if(lE.GUI.BUTTONS[F].IAM=="\x34"){if(APPLICATION.ACCOUNT_SERVICE_AUTO_RUN==true){APPLICATION.ACCOUNT_SERVICE_AUTO_RUN=false;lE.GUI.BUTTONS[3].text="\x53\x77\x69\x74\x63\x68\x20\x41\x75\x74\x6F\x43\x6F\x6E\x6E\x65\x63\x74\x20\x74\x6F\x20\x74\x72\x75\x65"}else {APPLICATION.ACCOUNT_SERVICE_AUTO_RUN=true;lE.GUI.BUTTONS[3].text="\x53\x77\x69\x74\x63\x68\x20\x41\x75\x74\x6F\x43\x6F\x6E\x6E\x65\x63\x74\x74\x20\x74\x6F\x20\x66\x61\x6C\x73\x65"};SAVE("\x41\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E",APPLICATION)}else {if(lE.GUI.BUTTONS[F].IAM=="\x35"){if(APPLICATION.EDITOR_AUTORUN==true){APPLICATION.EDITOR_AUTORUN=false;lE.GUI.BUTTONS[4].text="\x53\x77\x69\x74\x63\x68\x20\x65\x64\x69\x74\x6F\x72\x41\x75\x74\x6F\x52\x75\x6E\x20\x74\x6F\x20\x74\x72\x75\x65"}else {APPLICATION.EDITOR_AUTORUN=true;lE.GUI.BUTTONS[4].text="\x53\x77\x69\x74\x63\x68\x20\x65\x64\x69\x74\x6F\x72\x41\x75\x74\x6F\x52\x75\x6E\x20\x74\x6F\x20\x66\x61\x6C\x73\x65"};SAVE("\x41\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E",APPLICATION)}}}}}}};lE.GUI.VISIBLE=false}};if(lE.GUI.LIST_OF_OBJECTS.VISIBLE==true){for(var F=0;F<lE.GUI.LIST_OF_OBJECTS.BUTTONS_MODULES.length;F++){if(SYS.MOUSE.x>lE.GUI.LIST_OF_OBJECTS.BUTTONS_MODULES[F].POSITION.x&&SYS.MOUSE.x<lE.GUI.LIST_OF_OBJECTS.BUTTONS_MODULES[F].POSITION.x+lE.GUI.LIST_OF_OBJECTS.BUTTONS_MODULES[F].DIMENSION.WIDTH()&&SYS.MOUSE.y>lE.GUI.LIST_OF_OBJECTS.BUTTONS_MODULES[F].POSITION.y+lE.GUI.LIST_OF_OBJECTS.BUTTONS_MODULES[F].Y_OFFSET&&SYS.MOUSE.y<lE.GUI.LIST_OF_OBJECTS.BUTTONS_MODULES[F].POSITION.y+lE.GUI.LIST_OF_OBJECTS.BUTTONS_MODULES[F].Y_OFFSET+lE.GUI.LIST_OF_OBJECTS.BUTTONS_MODULES[F].DIMENSION.HEIGHT()){lE.GUI.LIST_OF_OBJECTS.BUTTONS_MODULES[F].TAP()}}}}}}