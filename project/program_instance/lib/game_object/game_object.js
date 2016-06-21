/*
Created by Nikola Lukic zlatnaspirala@gmail.com
Copyright (c) 2016 by Nikola Lukic , All Rights Reserved. 


Quick Summary
A highly permissive license nearly identical to the MIT license but with some added trademark restrictions.


Can
 Commercial Use 
Describes the ability to use the software for commercial purposes.
 Modify 
Describes the ability to modify the software and create derivatives.
 Distribute 
Describes the ability to distribute original or modified (derivative) works.
 Sublicense 
Describes the ability for you to grant/extend a license to the software.
 Private Use 
Describes the ability to use/modify software freely without distributing it.

Cannot
 Hold Liable 
Describes the warranty and if the software/license owner can be charged for damages.
 Use Trademark 
Describes the allowance of using contributors' names, trademarks or logos.

Must
 Include Copyright 
Describes whether the original copyright must be retained.
 Include License 
Including the full text of license in modified software.


*//***************************************************************************/
/*                                                                         */
/*  This obfuscated code was created by Javascript Obfuscator Free Version.*/
/*  Javascript Obfuscator Free Version can be downloaded here              */
/*  http://javascriptobfuscator.com                                        */
/*                                                                         */
/***************************************************************************/
function GAME_OBJECT(V,U,ba,bb,Z,h,Y,W){var X=this;if(V== "\x73\x79\x73\x74\x65\x6D"|| V.indexOf("\x5F\x5F\x5F\x56\x49\x52\x54\x55\x41\x4C\x4B\x45\x59\x42\x4F\x41\x52\x44\x5F")!=  -1){X.VISIBLE= true;window[""+ V]= this}else {window[""+ V]= this;X.VISIBLE= true};this.ID= parseFloat(Math.random()* 4560000+ Math.random()* 1230000).toFixed(0);this.PARENT= U;this.PROGRAM_NAME= W;this.NAME= V;this.AUTO_UPDATE= true;this.FOCUS= false;this.TYPE_OF_GAME_OBJECT= "\x65\x6D\x70\x74\x79";this.ENUMERATION= ["\x65\x6D\x70\x74\x79","\x41\x4E\x49\x4D\x41\x54\x49\x4F\x4E","\x54\x45\x58\x54\x5F\x42\x4F\x58","\x50\x41\x54\x52\x49\x43\x4C\x45","\x4E\x4F\x5F\x52\x45\x4E\x44\x45\x52","\x41\x4E\x49\x4D\x41\x54\x49\x4F\x4E\x5F\x54\x45\x58\x54\x5F\x42\x4F\x58","\x41\x4E\x49\x4D\x41\x54\x49\x4F\x4E\x5F\x50\x41\x54\x52\x49\x43\x4C\x45"];this.DESTROY_ON_GAMEMAP_EXIT= true;this.DRAG_STATUS= true;this.DRAG= true;this.DRAG_START_X= 0;this.DRAG_START_Y= 0;this.DRAG_DELTA= 0;this.zoom_scale= 0;this.globalAlpha= 1;if(( typeof ba&&  typeof bb)=== "\x6E\x75\x6D\x62\x65\x72"){if( typeof Y=== "\x6E\x75\x6D\x62\x65\x72"){this.POSITION=  new POSITION(ba,bb,ba,bb,Y)}else {this.POSITION=  new POSITION(ba,bb,ba,bb,1)}}else {this.POSITION=  new POSITION(10,10,200,200,1)};if(( typeof Z&&  typeof h)=== "\x6E\x75\x6D\x62\x65\x72"){this.DIMENSION=  new DIMENSION(Z,h)}else {this.DIMENSION=  new DIMENSION(10,10)};this.POSITION.parentModul= U;this.POSITION.parentGameObject= V;this.POSITION.PROGRAM_NAME= W;this.POSITION.DIMENSION= this.DIMENSION;this.ANIMATION= null;this.CREATE_ANIMATION= function(bl,bm,bd,bi,be,bc,bg,bf,bk,bj,bh){this.ANIMATION=  new ANIMATION(bl,bm,bd,bi,X,be,bc,bg,bf,bk,bj,bh);this.TYPE_OF_GAME_OBJECT= "\x41\x4E\x49\x4D\x41\x54\x49\x4F\x4E"};this.CREATE_PLAYER= function(bn){X.PLAYER= {TYPE:bn,X:X.POSITION.x,Y:X.POSITION.y,SPEED:1,CONTROL:{RIGHT:false,LEFT:false,JUMP:false,DOWN:false},POSITION:X.POSITION,BREAK_AT_MOMENT_STATUS:false};window["\x50\x4C\x41\x59\x45\x52"]= X.PLAYER;this.POSITION.PLAYER= X.PLAYER;if(bn== "\x50\x4C\x41\x54\x46\x4F\x52\x4D\x45\x52"){window[W].ENGINE.GAME_TYPE= "\x50\x4C\x41\x54\x46\x4F\x52\x4D\x45\x52"}else {window[W].ENGINE.GAME_TYPE= "\x4E\x4F\x52\x4D\x41\x4C\x5F\x43\x4F\x4E\x54\x52\x4F\x4C"}};this.TEXTBOX= null;this.TRACK_KEY= null;this.CREATE_TEXTBOX= function(bq,bp,bo,br){if(( typeof bq!= "\x75\x6E\x64\x65\x66\x69\x6E\x65\x64"&&  typeof bp!= "\x75\x6E\x64\x65\x66\x69\x6E\x65\x64"&&  typeof bo!= "\x75\x6E\x64\x65\x66\x69\x6E\x65\x64"&&  typeof br!= "\x75\x6E\x64\x65\x66\x69\x6E\x65\x64")){this.TEXTBOX=  new RECT(bq,X,bp,bo,br);this.TYPE_OF_GAME_OBJECT= "\x54\x45\x58\x54\x5F\x42\x4F\x58";this.TRACK_KEY= true;this.TEXTBOX.TEXT= bq;this.TEXTBOX.TEXT+= window[X.PROGRAM_NAME].ENGINE.KEYBOARD.CAPTURE_CHAR;this.FOCUS= true;this.TEXTBOX.ON_PRESS_ENTER= function(){};X.EDITOR.BUTTONS[6].text= "\x52\x65\x6D\x6F\x76\x65\x20\x74\x65\x78\x74\x62\x6F\x78"}else {SYS.DEBUG.WARNING("\x54\x45\x58\x54\x5F\x42\x4F\x58\x20\x65\x72\x72\x6F\x72\x20\x69\x6E\x20\x63\x6F\x6E\x73\x74\x72\x75\x63\x74\x6F\x72\x20\x3A\x20\x28\x20\x74\x65\x78\x74\x20\x2C\x20\x72\x61\x64\x69\x75\x73\x20\x2C\x20\x63\x6F\x6C\x6F\x72\x2C\x20\x74\x65\x78\x74\x43\x6F\x6C\x6F\x72\x29\x20\x63\x61\x6E\x74\x20\x62\x65\x20\x75\x6E\x64\x65\x66\x69\x6E\x65\x64\x2E")}};this.DESTROY_AFTER= null;this.DESTROY_ME_AFTER_X_SECUND= function(bt,V,ba,bs){this.DESTROY_AFTER= bt* 20;if(APPLICATION.EDITOR== true){DESTROY_DELAY(V,bt,X.PARENT,X.PROGRAM_NAME)}};this.COLLISION= null;this.POSITION.STATIC= false;this.COLIDER= function(bv,bu){this.TYPE= bv;if( typeof bu=== "\x6E\x75\x6D\x62\x65\x72"){this.margin= bu}else {this.margin= 1.02}};this.CREATE_COLLISION= function(bv,bu){X.COLLISION=  new X.COLIDER(bv,bu);X.EDITOR.BUTTONS[3].text= "\x52\x65\x6D\x6F\x76\x65\x20\x63\x6F\x6C\x6C\x69\x73\x69\x6F\x6E"};this.EDITOR= {SELECTED:false,ENABLE:HELLO_WORLD.ENGINE.ENGINE_EDITOR,ACTORS_AREA_HEIGHT:10,ACTOR_BLUE_HOVER:false,ACTOR_GREEN_HOVER:false,ACTOR_CENTER_OSCILATOR: new SYS.MATH.OSCILLATOR(0,2,0.01),ACTOR_START_X:0,ACTOR_START_Y:0,ACTOR_DELTA:0,ACTOR_X_IN_MOVE:false,ACTOR_Y_IN_MOVE:false,ACTOR_DRAG_RECT_DIM: new DIMENSION(5,5),ACTOR_DRAG_RECT_POS:this.POSITION,ACTOR_DRAG:false,BUTTONS:[ new RIGHT_MENU_BUTTON("\x44\x65\x73\x74\x72\x6F\x79\x20\x67\x61\x6D\x65\x4F\x62\x6A\x65\x63\x74",0,"\x31"), new RIGHT_MENU_BUTTON("\x44\x65\x73\x74\x72\x6F\x79\x20\x61\x66\x74\x65\x72\x20\x73\x65\x63\x75\x6E\x64\x20",20,"\x32"), new RIGHT_MENU_BUTTON("\x41\x64\x64\x20\x61\x6E\x69\x6D\x61\x74\x69\x6F\x6E\x20",40,"\x33"), new RIGHT_MENU_BUTTON("\x41\x64\x64\x20\x63\x6F\x6C\x6C\x69\x73\x69\x6F\x6E\x20",60,"\x34"), new RIGHT_MENU_BUTTON("\x41\x74\x61\x63\x68\x20\x70\x6C\x61\x79\x65\x72\x20",80,"\x35","\x72\x65\x73\x2F\x73\x79\x73\x74\x65\x6D\x2F\x69\x6D\x61\x67\x65\x73\x2F\x68\x74\x6D\x6C\x35\x2F\x70\x6C\x75\x73\x2E\x70\x6E\x67"), new RIGHT_MENU_BUTTON("\x41\x64\x64\x20\x70\x61\x72\x74\x69\x63\x6C\x65\x20",100,"\x36","\x72\x65\x73\x2F\x73\x79\x73\x74\x65\x6D\x2F\x69\x6D\x61\x67\x65\x73\x2F\x68\x74\x6D\x6C\x35\x2F\x70\x61\x72\x74\x69\x63\x6C\x65\x2E\x70\x6E\x67"), new RIGHT_MENU_BUTTON("\x41\x64\x64\x20\x74\x65\x78\x74\x62\x6F\x78\x20",120,"\x37","\x72\x65\x73\x2F\x73\x79\x73\x74\x65\x6D\x2F\x69\x6D\x61\x67\x65\x73\x2F\x68\x74\x6D\x6C\x35\x2F\x74\x65\x78\x74\x62\x6F\x78\x2E\x70\x6E\x67"), new RIGHT_MENU_BUTTON("\x41\x64\x64\x20\x77\x65\x62\x63\x61\x6D\x20\x20",140,"\x38","\x72\x65\x73\x2F\x73\x79\x73\x74\x65\x6D\x2F\x69\x6D\x61\x67\x65\x73\x2F\x68\x74\x6D\x6C\x35\x2F\x48\x54\x4D\x4C\x35\x2D\x44\x65\x76\x69\x63\x65\x2D\x41\x63\x63\x65\x73\x73\x2E\x70\x6E\x67")],GAME_OBJECT_MENU:{VISIBLE:false}};this.WEBCAM= null;this.SET_WEBCAM_VIEW= function(bn,bw){X.WEBCAM=  new Object();X.WEBCAM.VIDEO= SYS.DOM.E("\x77\x65\x62\x63\x61\x6D");SET_STREAM(X.WEBCAM.VIDEO);if(bw== "\x47\x41\x4D\x45\x5F\x4F\x42\x4A\x45\x43\x54"){X.WEBCAM.DIMENSIONS_TYPE= "\x47\x41\x4D\x45\x5F\x4F\x42\x4A\x45\x43\x54"}else {X.WEBCAM.DIMENSIONS_TYPE= "\x57\x45\x42\x43\x41\x4D\x5F\x44\x49\x4D\x45\x4E\x53\x49\x4F\x4E";X.DIMENSION.H= CONVERTOR.PIY_TO_PER(SYS.DOM.E("\x77\x65\x62\x63\x61\x6D").height);X.DIMENSION.W= CONVERTOR.PIX_TO_PER(SYS.DOM.E("\x77\x65\x62\x63\x61\x6D").width)};if(bn== "\x4E\x4F\x52\x4D\x41\x4C"){X.TYPE_OF_GAME_OBJECT= "\x57\x45\x42\x43\x41\x4D"}else {if(bn== "\x4E\x55\x49"){SYS.DOM.E("\x63\x61\x6E\x76\x61\x73\x2D\x62\x6C\x65\x6E\x64\x65\x64").height= SYS.DOM.E("\x77\x65\x62\x63\x61\x6D").height;SYS.DOM.E("\x63\x61\x6E\x76\x61\x73\x2D\x62\x6C\x65\x6E\x64\x65\x64").width= SYS.DOM.E("\x77\x65\x62\x63\x61\x6D").width;SYS.DOM.E("\x63\x61\x6E\x76\x61\x73\x2D\x72\x65\x6E\x64\x65\x72").height= SYS.DOM.E("\x77\x65\x62\x63\x61\x6D").height;SYS.DOM.E("\x63\x61\x6E\x76\x61\x73\x2D\x72\x65\x6E\x64\x65\x72").width= SYS.DOM.E("\x77\x65\x62\x63\x61\x6D").width;X.TYPE_OF_GAME_OBJECT= "\x57\x45\x42\x43\x41\x4D\x5F\x4E\x55\x49";X.WEBCAM.BLEND_CANVAS= SYS.DOM.E("\x63\x61\x6E\x76\x61\x73\x2D\x62\x6C\x65\x6E\x64\x65\x64");X.WEBCAM.RENDER_CANVAS= SYS.DOM.E("\x63\x61\x6E\x76\x61\x73\x2D\x72\x65\x6E\x64\x65\x72");X.WEBCAM.NOTES= []}}};this.CREATE_WEBCAM= function(bn,bw,by,bx){if( typeof bn!= "\x75\x6E\x64\x65\x66\x69\x6E\x65\x64"){if(bn== "\x4E\x55\x49"){X.SET_WEBCAM_VIEW("\x4E\x55\x49",bw);X.WEBCAM.numFieldV= by;X.WEBCAM.numFieldH= bx;X.WEBCAM.BS= X.WEBCAM.BLEND_CANVAS.getContext("\x32\x64");X.WEBCAM.RC= X.WEBCAM.RENDER_CANVAS.getContext("\x32\x64");X.WEBCAM._N_=  new Array();CREATE_MOTION_PARAMETERS(X);CREATE_MOTION_FIELDS(X);X.WEBCAM.HIDE_INDICATED_POINT= false;X.WEBCAM.DRAW= WEBCAM_DRAW}else {if("\x4E\x4F\x52\x4D\x41\x4C"){X.SET_WEBCAM_VIEW("\x4E\x4F\x52\x4D\x41\x4C",bw)}}}else {SYS.DEBUG.WARNING("\x50\x6C\x65\x61\x73\x20\x65\x6E\x74\x65\x72\x20\x74\x79\x70\x65\x20\x6F\x66\x20\x77\x65\x62\x63\x61\x6D\x20\x63\x6F\x6D\x70\x6F\x6E\x65\x6E\x74\x20\x2E\x20\x20\x5B\x20\x4E\x55\x49\x20\x2C\x20\x4E\x4F\x52\x4D\x41\x4C\x20\x5D\x20\x20")}};this.DESTROY_WEBCAM= function(){X.TYPE_OF_GAME_OBJECT= "\x4E\x4F\x5F\x52\x45\x4E\x44\x45\x52";X.WEBCAM.DRAW= function(){};X.WEBCAM.NOTES= [];X.WEBCAM.BS= null;X.WEBCAM.RC= null;X.WEBCAM._N_= [];delete (X.WEBCAM);X.WEBCAM= null};this.ON_PEER_CREATED= {"\x44\x4F\x4E\x45":function(){}};this.CREATE_PEER= function(){if( typeof window["\x4D\x41\x49\x4E\x5F\x50\x45\x45\x52"].REMOTE_DATA== "\x75\x6E\x64\x65\x66\x69\x6E\x65\x64"){X.MAIN_PEER= window["\x4D\x41\x49\x4E\x5F\x50\x45\x45\x52"];X.MAIN_PEER.ADDRESS= "\x6C\x6F\x63\x61\x6C\x68\x6F\x73\x74";X.MAIN_PEER.ON_PEER_CREATED= X.ON_PEER_CREATED;X.MAIN_PEER.LOADED= function(){console.log("\x70\x65\x65\x72\x20\x6C\x6F\x61\x64\x65\x64\x32")};if( typeof window[SYS.RUNNING_PROGRAMS[SYS.RUNNING_PROGRAMS.length- 1]].ENGINE.MODULES.ACCESS_MODULE("\x47\x55\x49\x5F\x53\x54\x41\x52\x54\x45\x52")== "\x75\x6E\x64\x65\x66\x69\x6E\x65\x64"){setTimeout(X.CREATE_PEER,50);return}else {if( typeof window[SYS.RUNNING_PROGRAMS[SYS.RUNNING_PROGRAMS.length- 1]].ENGINE.MODULES.ACCESS_MODULE("\x47\x55\x49\x5F\x53\x54\x41\x52\x54\x45\x52").NEW_OBJECT== "\x66\x75\x6E\x63\x74\x69\x6F\x6E"){}else {setTimeout(X.CREATE_PEER,50);return}};window[SYS.RUNNING_PROGRAMS[SYS.RUNNING_PROGRAMS.length- 1]].ENGINE.MODULES.ACCESS_MODULE("\x47\x55\x49\x5F\x53\x54\x41\x52\x54\x45\x52").NEW_OBJECT("\x73\x79\x73\x74\x65\x6D\x5F\x6F\x62\x6A\x65\x63\x74\x5F\x66\x6F\x72\x5F\x4D\x41\x49\x4E\x5F\x70\x65\x65\x72",5,5,15,8,10);var bz=window[SYS.RUNNING_PROGRAMS[SYS.RUNNING_PROGRAMS.length- 1]].ENGINE.MODULES.ACCESS_MODULE("\x47\x55\x49\x5F\x53\x54\x41\x52\x54\x45\x52").GAME_OBJECTS.ACCESS("\x73\x79\x73\x74\x65\x6D\x5F\x6F\x62\x6A\x65\x63\x74\x5F\x66\x6F\x72\x5F\x4D\x41\x49\x4E\x5F\x70\x65\x65\x72");bz.DIMENSION.W= X.DIMENSION.W;bz.CREATE_TEXTBOX("\x65\x6E\x74\x65\x72\x20\x6D\x65\x73\x73\x61\x67\x65",10,"\x62\x6C\x61\x63\x6B","\x6C\x69\x6D\x65");system_object_for_MAIN_peer.TEXTBOX.font= "\x31\x38\x70\x78\x20\x41\x72\x69\x61\x6C";system_object_for_MAIN_peer.TEXTBOX.ON_PRESS_ENTER= function(){SYS.DOM.E("\x53\x45\x4E\x44\x5F\x42\x54\x4E\x5F").value= system_object_for_MAIN_peer.TEXTBOX.TEXT;SYS.DEBUG.LOG("\x53\x45\x4E\x44\x20\x54\x45\x58\x54\x20\x4D\x53\x47\x20\x54\x4F\x20\x43\x55\x52\x52\x45\x4E\x54\x20\x43\x48\x41\x4E\x4E\x45\x4C");system_object_for_MAIN_peer.TEXTBOX.TEXT= "";X.MAIN_PEER.SEND_MSG()};window[SYS.RUNNING_PROGRAMS[SYS.RUNNING_PROGRAMS.length- 1]].ENGINE.MODULES.ACCESS_MODULE("\x47\x55\x49\x5F\x53\x54\x41\x52\x54\x45\x52").NEW_OBJECT("\x73\x79\x73\x74\x65\x6D\x5F\x6F\x62\x6A\x65\x63\x74\x5F\x66\x6F\x72\x5F\x4D\x41\x49\x4E\x5F\x70\x65\x65\x72\x5F\x42\x54\x4E\x5F\x63\x6F\x6E\x6E\x65\x63\x74",5,5,9,7,10);var bA=window[SYS.RUNNING_PROGRAMS[SYS.RUNNING_PROGRAMS.length- 1]].ENGINE.MODULES.ACCESS_MODULE("\x47\x55\x49\x5F\x53\x54\x41\x52\x54\x45\x52").GAME_OBJECTS.ACCESS("\x73\x79\x73\x74\x65\x6D\x5F\x6F\x62\x6A\x65\x63\x74\x5F\x66\x6F\x72\x5F\x4D\x41\x49\x4E\x5F\x70\x65\x65\x72\x5F\x42\x54\x4E\x5F\x63\x6F\x6E\x6E\x65\x63\x74");bA.CREATE_TEXTBOX("\x43\x6F\x6E\x6E\x65\x63\x74",10,"\x62\x6C\x61\x63\x6B","\x6C\x69\x6D\x65");bA.TEXTBOX.font= "\x31\x38\x70\x78\x20\x41\x72\x69\x61\x6C";bA.TEXTBOX.EDIT= false;bA.TAP= function(){if(rtcMultiConnection.sessionDescription== null){MAIN_PEER.CONNECT_TO_CHANNEL()}};X.ON_UPDATE= function(){bz.POSITION.SET_POSITION(X.POSITION.x,X.POSITION.y+ X.DIMENSION.H* 1.1,"\x44\x49\x41\x4D\x45\x54\x52\x49\x43");bA.POSITION.SET_POSITION(X.POSITION.x+ X.DIMENSION.W/ 1.7,X.POSITION.y,"\x44\x49\x41\x4D\x45\x54\x52\x49\x43")};X.MAIN_PEER.REMOTE_DATA= {OBJECTS:[],SHARE:function(bB){rtcMultiConnection.send({"\x73\x68\x61\x72\x65\x64\x5F\x6F\x62\x6A\x65\x63\x74":bB,"\x6F\x70\x65\x72\x61\x74\x69\x6F\x6E":"\x73\x68\x61\x72\x65"});bB.PEER_SHARED= true},SHARE_POSITION:function(bB){bB.POSITION.SHARE_POSITION= true},NEW_POSITION:function(bB){rtcMultiConnection.send({"\x6E\x61\x6D\x65\x4F\x66\x4F\x62\x6A\x65\x63\x74":bB.NAME,"\x6F\x70\x65\x72\x61\x74\x69\x6F\x6E":"\x6E\x65\x77\x5F\x70\x6F\x73","\x78":bB.POSITION.x,"\x79":bB.POSITION.y})},NEW_DIMENSION:function(bB){rtcMultiConnection.send({"\x6E\x61\x6D\x65\x4F\x66\x4F\x62\x6A\x65\x63\x74":bB.NAME,"\x6F\x70\x65\x72\x61\x74\x69\x6F\x6E":"\x6E\x65\x77\x5F\x64\x69\x6D","\x78":bB.DIMENSION.W,"\x79":bB.DIMENSION.H})},NETWORK_VIEW:function(bC){if(bC.operation== "\x73\x68\x61\x72\x65"){window[SYS.RUNNING_PROGRAMS[SYS.RUNNING_PROGRAMS.length- 1]].ENGINE.MODULES.ACCESS_MODULE("\x53\x54\x41\x52\x54\x45\x52").NEW_NETWORK_OBJECT(bC.shared_object)}else {if(bC.operation== "\x6E\x65\x77\x5F\x70\x6F\x73"){window[SYS.RUNNING_PROGRAMS[SYS.RUNNING_PROGRAMS.length- 1]].ENGINE.MODULES.ACCESS_MODULE("\x53\x54\x41\x52\x54\x45\x52").NEW_NETWORK_POSITION(bC)}else {if(bC.operation== "\x6E\x65\x77\x5F\x64\x69\x6D"){window[SYS.RUNNING_PROGRAMS[SYS.RUNNING_PROGRAMS.length- 1]].ENGINE.MODULES.ACCESS_MODULE("\x53\x54\x41\x52\x54\x45\x52").NEW_NETWORK_DIMENSION(bC)}else {if(bC.operation== "\x64\x69\x6D\x65\x6E\x73\x69\x6F\x6E\x26\x70\x6F\x73\x69\x74\x69\x6F\x6E"){}}}}}};X.MAIN_PEER.CHANNEL= {GET:function(){return SYS.DOM.E("\x72\x6F\x6F\x6D\x2D\x6E\x61\x6D\x65").value},SET:function(bD){SYS.DOM.E("\x72\x6F\x6F\x6D\x2D\x6E\x61\x6D\x65").value= bD}};X.MAIN_PEER.LOCAL_USER= {GET:function(){return SYS.DOM.E("\x79\x6F\x75\x72\x2D\x6E\x61\x6D\x65").value},SET:function(bD){SYS.DOM.E("\x79\x6F\x75\x72\x2D\x6E\x61\x6D\x65").value= bD}};X.MAIN_PEER.SEND_MSG= function(){if( typeof rtcMultiConnection!= "\x75\x6E\x64\x65\x66\x69\x6E\x65\x64"){rtcMultiConnection.send(SYS.DOM.E("\x53\x45\x4E\x44\x5F\x42\x54\x4E\x5F").value);SYS.DOM.E("\x53\x45\x4E\x44\x5F\x42\x54\x4E\x5F").value= ""}},X.MAIN_PEER.CONNECT_TO_CHANNEL= function(){SYS.DOM.E("\x63\x6F\x6E\x74\x69\x6E\x75\x65").onclick()},X.MAIN_PEER.LOGS= "\x6C\x6F\x67\x73\x21";X.TYPE_OF_GAME_OBJECT= "\x4D\x41\x49\x4E\x5F\x50\x45\x45\x52\x5F\x4F\x42\x4A\x45\x43\x54";setTimeout(function(){MAIN_PEER.ON_PEER_CREATED.DONE()},200)}else {SYS.DEBUG.WARNING("\x66\x72\x6F\x6D\x20\x66\x75\x6E\x63\x74\x69\x6F\x6E\x20\x43\x52\x45\x41\x54\x45\x5F\x50\x45\x45\x52\x20\x2D\x20\x20\x4D\x41\x49\x4E\x20\x50\x45\x45\x52\x20\x4F\x42\x4A\x45\x43\x54\x20\x41\x4C\x52\x45\x41\x44\x59\x20\x43\x52\x45\x41\x54\x45\x44\x2E")}};this.GROUP= {ADD:function(V){var bG=window[X.PROGRAM_NAME].ENGINE.MODULES.ACCESS_MODULE(X.PARENT).GAME_OBJECTS.ACCESS(V).POSITION.x;var bH=window[X.PROGRAM_NAME].ENGINE.MODULES.ACCESS_MODULE(X.PARENT).GAME_OBJECTS.ACCESS(V).POSITION.y;var bE=X.GROUP.MASTER_INITIALS.x- bG;var bF=X.GROUP.MASTER_INITIALS.y- bH;X.GROUP.GROUP_INITIALS.push({x:bE,y:bF});X.GROUP.GROUP.push(V);delete (bG);delete (bH)},GROUP:[],GROUP_INITIALS:[],MASTER:X.NAME,MASTER_INITIALS:{x:X.POSITION.x,y:X.POSITION.y},UPDATE:function(){}};this.EFFECTS= {FADE:{IN:function(bt){var bI=setTimeout(function(){X.globalAlpha+= 0.02;if(X.globalAlpha< 1){X.EFFECTS.FADE.IN()}else {X.globalAlpha= 1}},bt)},OUT:function(bt){var bI=setTimeout(function(){X.globalAlpha-= 0.02;if(X.globalAlpha> 0){X.EFFECTS.FADE.OUT()}else {X.globalAlpha= 0}},bt)}},ZOOM:{STATUS_FOR_IN:false,STATUS_FOR_OUT:false,ZOOM_IN_FINISHED:function(){console.log("\x7A\x6F\x6F\x6D\x20\x69\x6E\x20\x20\x2D\x2D\x2D\x2D\x66\x69\x6E\x69\x73\x68\x65\x64\x2E")},ZOOM_OUT_FINISHED:function(){console.log("\x7A\x6F\x6F\x6D\x20\x6F\x75\x74\x20\x2D\x2D\x2D\x2D\x66\x69\x6E\x69\x73\x68\x65\x64\x2E")},VALUE:0.5,IN:function(bt){var bt=bt;this.STATUS_FOR_IN= true;var bI=setTimeout(function(){if(X.zoom_scale< X.EFFECTS.ZOOM.VALUE){X.zoom_scale+= 0.01;X.POSITION.SET_POSITION(X.POSITION.x- X.zoom_scale,X.POSITION.y- X.zoom_scale,"\x44\x49\x41\x4D\x45\x54\x52\x49\x43");X.DIMENSION.W= X.DIMENSION.W+ X.zoom_scale* 2;X.DIMENSION.H= X.DIMENSION.H+ X.zoom_scale* 2;X.EFFECTS.ZOOM.IN(bt)}else {X.EFFECTS.ZOOM.ZOOM_IN_FINISHED();X.EFFECTS.ZOOM.STATUS_FOR_IN= false}},bt)},OUT:function(bt){var bt=bt;this.STATUS_FOR_OUT= true;var bI=setTimeout(function(){if(X.POSITION.x< X.GROUP.MASTER_INITIALS.x){X.zoom_scale-= 0.009;X.POSITION.SET_POSITION(X.POSITION.x+ X.zoom_scale,X.POSITION.y+ X.zoom_scale,"\x44\x49\x41\x4D\x45\x54\x52\x49\x43");X.DIMENSION.W= X.DIMENSION.W- X.zoom_scale* 2;X.DIMENSION.H= X.DIMENSION.H- X.zoom_scale* 2;X.EFFECTS.ZOOM.OUT(bt)}else {X.zoom_scale= 0;X.EFFECTS.ZOOM.ZOOM_OUT_FINISHED();X.EFFECTS.ZOOM.STATUS_FOR_OUT= false}},bt)}}};this.PARTICLE= null;this.CREATE_PARTICLE= function(bn){X.PARTICLE=  new PARTICLE_FONTAN(X);X.TYPE_OF_GAME_OBJECT= "\x50\x41\x54\x52\x49\x43\x4C\x45"};this.CUSTOM= function(){};this.DESELECT_ALL= function(){var bJ=""+ X.PROGRAM_NAME.toString();for(var w=0;w< window[bJ].ENGINE.MODULES.ACCESS(X.PARENT).GAME_OBJECTS.length;w++){window[bJ].ENGINE.MODULES.ACCESS(X.PARENT).GAME_OBJECTS[w].EDITOR.SELECTED= false}};this.TOUCH_DOWN= function(){SYS.DEBUG.LOG("\x4E\x6F\x20\x61\x74\x61\x63\x68\x65\x64\x20\x65\x76\x65\x6E\x74\x20\x2E\x20\x45\x56\x45\x4E\x54\x5F\x54\x4F\x55\x43\x48\x5F\x44\x4F\x57\x4E")};this.TAP= function(){SYS.DEBUG.LOG("\x4E\x6F\x20\x61\x74\x61\x63\x68\x65\x64\x20\x65\x76\x65\x6E\x74\x20\x2E\x20\x45\x56\x45\x4E\x54\x5F\x54\x41\x50\x20\x3A\x20\x73\x69\x6D\x69\x6C\x61\x72\x20\x63\x6C\x69\x63\x6B")};this.TOUCH_UP= function(){SYS.DEBUG.LOG("\x4E\x6F\x20\x61\x74\x61\x63\x68\x65\x64\x20\x65\x76\x65\x6E\x74\x20\x2E\x20\x45\x56\x45\x4E\x54\x5F\x54\x4F\x55\x43\x48\x5F\x55\x50")};this.TOUCH_MOVE= function(){};this.UPDATE_STATUS= {STOP:function(){}};this.ROTATE= {ANGLE:0,RADIANS:0,ROTATE_ARROUNT_CENTER:function(){ORBIT(50,50,X.ROTATE.ANGLE,X.POSITION)}};this.DRAW= function(s){if(X.VISIBLE== true){s.save();s.globalAlpha= X.globalAlpha;if(this.TYPE_OF_GAME_OBJECT== "\x41\x4E\x49\x4D\x41\x54\x49\x4F\x4E"){this.ANIMATION.DRAW()}else {if(this.TYPE_OF_GAME_OBJECT== "\x54\x45\x58\x54\x5F\x42\x4F\x58"){this.TEXTBOX.DRAW(s)}else {if(this.TYPE_OF_GAME_OBJECT== "\x54\x45\x58\x54\x5F\x42\x4F\x58\x5F\x41\x4E\x49\x4D\x41\x54\x49\x4F\x4E"){this.TEXTBOX.DRAW(s);this.ANIMATION.DRAW()}else {if(this.TYPE_OF_GAME_OBJECT== "\x50\x41\x54\x52\x49\x43\x4C\x45"){this.PARTICLE.DRAW(s)}else {if(this.TYPE_OF_GAME_OBJECT== "\x41\x4E\x49\x4D\x41\x54\x49\x4F\x4E\x5F\x54\x45\x58\x54\x5F\x42\x4F\x58"){this.ANIMATION.DRAW();this.TEXTBOX.DRAW(s)}else {if(this.TYPE_OF_GAME_OBJECT== "\x41\x4E\x49\x4D\x41\x54\x49\x4F\x4E\x5F\x50\x41\x54\x52\x49\x43\x4C\x45"){this.ANIMATION.DRAW();this.PARTICLE.DRAW(s)}else {if(this.TYPE_OF_GAME_OBJECT== "\x57\x45\x42\x43\x41\x4D"){if(X.WEBCAM.DIMENSIONS_TYPE= "\x47\x41\x4D\x45\x5F\x4F\x42\x4A\x45\x43\x54"){s.drawImage(X.WEBCAM.VIDEO,X.POSITION.X(),X.POSITION.Y(),X.DIMENSION.WIDTH(),X.DIMENSION.HEIGHT())}else {s.drawImage(X.WEBCAM.VIDEO,X.POSITION.X(),X.POSITION.Y(),X.WEBCAM.VIDEO.width,X.WEBCAM.VIDEO.height)}}else {if(this.TYPE_OF_GAME_OBJECT== "\x57\x45\x42\x43\x41\x4D\x5F\x4E\x55\x49"){if(X.WEBCAM.DIMENSIONS_TYPE= "\x47\x41\x4D\x45\x5F\x4F\x42\x4A\x45\x43\x54"){s.drawImage(X.WEBCAM.VIDEO,X.POSITION.X(),X.POSITION.Y(),X.DIMENSION.WIDTH(),X.DIMENSION.HEIGHT())}else {s.drawImage(X.WEBCAM.VIDEO,X.POSITION.X(),X.POSITION.Y(),X.WEBCAM.VIDEO.width,X.WEBCAM.VIDEO.height)};blend(X,s);checkAreas(X);X.WEBCAM.DRAW(s,X.WEBCAM)}else {if(this.TYPE_OF_GAME_OBJECT== "\x43\x55\x53\x54\x4F\x4D"){X.CUSTOM()}else {if(this.TYPE_OF_GAME_OBJECT== "\x4E\x4F\x5F\x52\x45\x4E\x44\x45\x52"){}else {if(this.TYPE_OF_GAME_OBJECT== "\x4D\x41\x49\x4E\x5F\x50\x45\x45\x52\x5F\x4F\x42\x4A\x45\x43\x54"){s.fillStyle= "\x23\x31\x39\x32\x38\x33\x37";s.fillRect(this.POSITION.X(),this.POSITION.Y(),this.DIMENSION.WIDTH(),this.DIMENSION.HEIGHT());s.fillStyle= "\x6C\x69\x6D\x65";s.drawImage(image_system_8,this.POSITION.X()+ this.DIMENSION.WIDTH()/ 2,this.POSITION.Y()+ 30,90,90);s.drawImage(image_system_conn,this.POSITION.X()+ this.DIMENSION.WIDTH()/ 1.4,this.POSITION.Y()+ 30,90,90);s.fillText("\x53\x69\x67\x6E\x61\x6C\x69\x6E\x67\x20\x49\x50\x20\x41\x64\x64\x72\x65\x73\x73\x20\x3A\x20"+ this.MAIN_PEER.ADDRESS,this.POSITION.X()+ this.EDITOR.ACTORS_AREA_HEIGHT,this.POSITION.Y()+ this.EDITOR.ACTORS_AREA_HEIGHT* 4);s.fillText("\x4E\x61\x6D\x65\x20\x3A\x20"+ this.MAIN_PEER.LOCAL_USER.GET(),this.POSITION.X()+ this.EDITOR.ACTORS_AREA_HEIGHT,this.POSITION.Y()+ this.EDITOR.ACTORS_AREA_HEIGHT* 5);s.fillText("\x43\x68\x61\x6E\x6E\x65\x6C\x20\x3A\x20"+ this.MAIN_PEER.CHANNEL.GET(),this.POSITION.X()+ this.EDITOR.ACTORS_AREA_HEIGHT,this.POSITION.Y()+ this.EDITOR.ACTORS_AREA_HEIGHT* 6);s.fillText("\x70\x65\x65\x72\x20\x6C\x6F\x67\x73\x20\x3A\x20"+ X.MAIN_PEER.LOGS,this.POSITION.X()+ this.EDITOR.ACTORS_AREA_HEIGHT,this.POSITION.Y()+ this.EDITOR.ACTORS_AREA_HEIGHT* 7)}}}}}}}}}}};s.restore()}};this.DRAW_ACTOR= function(s){s.save();s.font= "\x31\x33\x70\x78\x20\x41\x72\x69\x61\x6C";s.fillRect(0,this.POSITION.Y(),VIEW.W(),1);s.fillRect(this.POSITION.X(),0,1,VIEW.H());s.globalAlpha= 0.5;s.fillRect(this.POSITION.X(),this.POSITION.Y(),this.DIMENSION.WIDTH(),this.DIMENSION.HEIGHT());s.globalAlpha= 0.9;if(X.EDITOR.SELECTED== true){s.fillText("\x4E\x61\x6D\x65\x20\x3A"+ this.NAME,this.POSITION.X()+ this.EDITOR.ACTORS_AREA_HEIGHT,this.POSITION.Y()- this.EDITOR.ACTORS_AREA_HEIGHT* 4);s.fillText("\x50\x65\x72\x63\x65\x6E\x74\x20\x3A"+ CONVERTOR.PIX_TO_PER(this.POSITION.X().toString()).toFixed(2)+ "\x25\x20\x20\x79\x3A"+ CONVERTOR.PIY_TO_PER(this.POSITION.Y()).toFixed(2),this.POSITION.X()+ this.EDITOR.ACTORS_AREA_HEIGHT,this.POSITION.Y()- this.EDITOR.ACTORS_AREA_HEIGHT* 2.5);s.fillText("\x41\x63\x74\x6F\x72\x2D\x20\x78\x3A"+ this.POSITION.X().toFixed(2).toString()+ "\x20\x79\x3A"+ this.POSITION.Y().toFixed(2),this.POSITION.X()+ this.EDITOR.ACTORS_AREA_HEIGHT,this.POSITION.Y()- this.EDITOR.ACTORS_AREA_HEIGHT)};s.strokeStyle= "\x62\x6C\x75\x65";s.strokeRect(this.EDITOR.ACTOR_DRAG_RECT_POS.X()+ this.EDITOR.ACTORS_AREA_HEIGHT,this.EDITOR.ACTOR_DRAG_RECT_POS.Y()+ this.EDITOR.ACTORS_AREA_HEIGHT,this.EDITOR.ACTOR_DRAG_RECT_DIM.WIDTH(),this.EDITOR.ACTOR_DRAG_RECT_DIM.HEIGHT());if(this.EDITOR.ACTOR_BLUE_HOVER== true){s.fillStyle= "\x6C\x69\x6D\x65"}else {s.fillStyle= "\x62\x6C\x75\x65"};s.fillRect(this.POSITION.X(),this.POSITION.Y(),this.EDITOR.ACTORS_AREA_HEIGHT* 15,this.EDITOR.ACTORS_AREA_HEIGHT);s.beginPath();s.moveTo(this.POSITION.X()+ this.EDITOR.ACTORS_AREA_HEIGHT* 10* 1.5,this.POSITION.Y()- 0.5* this.EDITOR.ACTORS_AREA_HEIGHT);s.lineTo(this.POSITION.X()+ this.EDITOR.ACTORS_AREA_HEIGHT* 10* 1.5,this.POSITION.Y()+ 1.4* this.EDITOR.ACTORS_AREA_HEIGHT);s.lineTo(this.POSITION.X()+ this.EDITOR.ACTORS_AREA_HEIGHT* 12.5* 1.5,this.POSITION.Y()+ 1/ 2* this.EDITOR.ACTORS_AREA_HEIGHT);s.closePath();s.fill();if(this.EDITOR.ACTOR_GREEN_HOVER== true){s.fillStyle= "\x6C\x69\x6D\x65"}else {s.fillStyle= "\x67\x72\x65\x65\x6E"};s.fillRect(this.POSITION.X(),this.POSITION.Y(),this.EDITOR.ACTORS_AREA_HEIGHT,this.EDITOR.ACTORS_AREA_HEIGHT* 15);s.beginPath();s.moveTo(this.POSITION.X()- 0.5* this.EDITOR.ACTORS_AREA_HEIGHT,this.POSITION.Y()+ this.EDITOR.ACTORS_AREA_HEIGHT* 10* 1.5);s.lineTo(this.POSITION.X()+ 1.4* this.EDITOR.ACTORS_AREA_HEIGHT,this.POSITION.Y()+ this.EDITOR.ACTORS_AREA_HEIGHT* 10* 1.5);s.lineTo(this.POSITION.X()+ 1/ 2* this.EDITOR.ACTORS_AREA_HEIGHT,this.POSITION.Y()+ this.EDITOR.ACTORS_AREA_HEIGHT* 12.5* 1.5);s.closePath();s.fill();s.fillStyle= "\x72\x65\x64";s.beginPath();s.arc(this.POSITION.X()+ this.EDITOR.ACTORS_AREA_HEIGHT/ 2,this.POSITION.Y()+ this.EDITOR.ACTORS_AREA_HEIGHT/ 2,this.EDITOR.ACTORS_AREA_HEIGHT/ 2,(0)* Math.PI,(2)* Math.PI);s.fill();s.closePath();s.beginPath();s.lineWidth= 1;s.strokeStyle= "\x77\x68\x69\x74\x65";s.arc(this.POSITION.X()+ this.EDITOR.ACTORS_AREA_HEIGHT/ 2,this.POSITION.Y()+ this.EDITOR.ACTORS_AREA_HEIGHT/ 2,this.EDITOR.ACTORS_AREA_HEIGHT,(this.EDITOR.ACTOR_CENTER_OSCILATOR.UPDATE()+ 0.1)* Math.PI,(this.EDITOR.ACTOR_CENTER_OSCILATOR.UPDATE()- 0.1)* Math.PI);s.stroke();s.closePath();s.restore();if(X.EDITOR.GAME_OBJECT_MENU.VISIBLE== true){for(var ba=0;ba< X.EDITOR.BUTTONS.length;ba++){s.save();s.globalAlpha= 1;if(X.EDITOR.BUTTONS[ba].HOVER== false){s.fillStyle= APPLICATION.SYSTEM.COLOR;s.fillRect(X.EDITOR.BUTTONS[ba].POSITION.X(),X.EDITOR.BUTTONS[ba].POSITION.Y(),X.EDITOR.BUTTONS[ba].DIMENSION.WIDTH(),X.EDITOR.BUTTONS[ba].DIMENSION.HEIGHT());s.fillStyle= APPLICATION.SYSTEM.TEXT_COLOR;s.fillText(X.EDITOR.BUTTONS[ba].text,X.EDITOR.BUTTONS[ba].POSITION.X(),X.EDITOR.BUTTONS[ba].POSITION.Y()+ X.EDITOR.BUTTONS[ba].DIMENSION.HEIGHT()/ 2,X.EDITOR.BUTTONS[ba].DIMENSION.WIDTH())}else {s.fillStyle= APPLICATION.SYSTEM.HOVER_COLOR;s.fillRect(X.EDITOR.BUTTONS[ba].POSITION.X(),X.EDITOR.BUTTONS[ba].POSITION.Y(),X.EDITOR.BUTTONS[ba].DIMENSION.WIDTH(),X.EDITOR.BUTTONS[ba].DIMENSION.HEIGHT());s.fillStyle= APPLICATION.SYSTEM.TEXT_COLOR;s.fillText(X.EDITOR.BUTTONS[ba].text,X.EDITOR.BUTTONS[ba].POSITION.X(),X.EDITOR.BUTTONS[ba].POSITION.Y()+ X.EDITOR.BUTTONS[ba].DIMENSION.HEIGHT()/ 2,X.EDITOR.BUTTONS[ba].DIMENSION.WIDTH());if(X.EDITOR.BUTTONS[ba].icon== true){try{s.drawImage(window["\x69\x6D\x61\x67\x65\x5F\x73\x79\x73\x74\x65\x6D\x5F"+ X.EDITOR.BUTTONS[ba].IAM],X.EDITOR.BUTTONS[ba].POSITION.X()+ X.EDITOR.BUTTONS[ba].DIMENSION.WIDTH()- 30,X.EDITOR.BUTTONS[ba].POSITION.Y()- 5,30,30)}catch(e){}}};s.restore();if(X.WEBCAM!= null){}}}};this.ON_UPDATE= function(){};this.UPDATE= function(){if(this.AUTO_UPDATE== true){X.POSITION.UPDATE()};if(X.EDITOR.ENABLE== false){if(X.DESTROY_AFTER!= null){if(X.DESTROY_AFTER> 0){X.DESTROY_AFTER--}}};if(X.GROUP.GROUP.length> 0){for(var s=0;s< X.GROUP.GROUP.length;s++){window[X.PROGRAM_NAME].ENGINE.MODULES.ACCESS(X.PARENT).GAME_OBJECTS.ACCESS(X.GROUP.GROUP[s]).POSITION.x= X.POSITION.x- X.GROUP.GROUP_INITIALS[s].x;window[X.PROGRAM_NAME].ENGINE.MODULES.ACCESS(X.PARENT).GAME_OBJECTS.ACCESS(X.GROUP.GROUP[s]).POSITION.y= X.POSITION.y- X.GROUP.GROUP_INITIALS[s].y}};if(X.DESTROY_ON_GAMEMAP_EXIT== true&& X.POSITION.Y()< window[X.PROGRAM_NAME].MAP.UP()){window[X.PROGRAM_NAME].ENGINE.MODULES.ACCESS_MODULE(X.PARENT).DESTROY_OBJECT(X.NAME)};X.ON_UPDATE()};this.GAME_OBJECT_READY= function(){SYS.DEBUG.LOG("\x72\x65\x61\x64\x79\x20\x3A\x20"+ X.NAME)};setTimeout(X.GAME_OBJECT_READY,15)}