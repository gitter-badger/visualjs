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
function ENGINE(c){var kS=this;this.PROGRAM_ID=c.id;this.EVENTS= new EVENTS(c,kS);this.MODULES= new Array();this.GAME_TYPE="\x4E\x4F\x5F\x50\x4C\x41\x59\x45\x52";this.KEYBOARD= new KEYBOARD(c);if(APPLICATION.EDITOR==true){this.ENGINE_EDITOR=true}else {this.ENGINE_EDITOR=false};this.EXIT_EDIT_MODE=function(){kS.ENGINE_EDITOR=false;for(var D=0;D<kS.MODULES.length;D++){for(var E=0;E<kS.MODULES[D].GAME_OBJECTS.length;E++){kS.MODULES[D].GAME_OBJECTS[E].EDITOR.ENABLE=false}}};this.GO_TO_EDIT_MODE=function(){kS.ENGINE_EDITOR=true;for(var D=0;D<kS.MODULES.length;D++){for(var E=0;E<kS.MODULES[D].GAME_OBJECTS.length;E++){kS.MODULES[D].GAME_OBJECTS[E].EDITOR.ENABLE=true}}};this.GUI={VISIBLE:false,BUTTONS:[ new RIGHT_MENU_BUTTON("\x41\x64\x64\x20\x6E\x65\x77\x20\x67\x61\x6D\x65\x4F\x62\x6A\x65\x63\x74\x20",0,"\x31"), new RIGHT_MENU_BUTTON("\x45\x78\x69\x74\x20\x65\x64\x69\x74\x20\x6D\x6F\x64\x65",20,"\x32"), new RIGHT_MENU_BUTTON("\x53\x65\x74\x20\x72\x65\x6E\x64\x65\x72\x20\x73\x70\x65\x65\x64",40,"\x33"), new RIGHT_MENU_BUTTON("\x53\x77\x69\x74\x63\x68\x20\x41\x75\x74\x6F\x43\x6F\x6E\x6E\x65\x63\x74\x20\x74\x6F\x20\x74\x72\x75\x65",60,"\x34","\x72\x65\x73\x2F\x73\x79\x73\x74\x65\x6D\x2F\x69\x6D\x61\x67\x65\x73\x2F\x68\x74\x6D\x6C\x35\x2F\x48\x54\x4D\x4C\x35\x2D\x4F\x66\x66\x6C\x69\x6E\x65\x2D\x53\x74\x6F\x72\x61\x67\x65\x2E\x70\x6E\x67"), new RIGHT_MENU_BUTTON("\x53\x77\x69\x74\x63\x68\x20\x45\x64\x69\x74\x6F\x72\x41\x75\x74\x6F\x52\x75\x6E\x20\x74\x6F\x20\x74\x72\x75\x65",80,"\x35","\x72\x65\x73\x2F\x73\x79\x73\x74\x65\x6D\x2F\x69\x6D\x61\x67\x65\x73\x2F\x68\x74\x6D\x6C\x35\x2F\x48\x54\x4D\x4C\x35\x2D\x4F\x66\x66\x6C\x69\x6E\x65\x2D\x53\x74\x6F\x72\x61\x67\x65\x2E\x70\x6E\x67")],CHECK_ON_START:function(){if(LOAD("\x41\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E")==false){}else {APPLICATION=LOAD("\x41\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E");SYS.DEBUG.LOG("\x41\x50\x50\x4C\x49\x43\x41\x54\x49\x4F\x4E\x20\x6F\x62\x6A\x65\x63\x74\x20\x77\x61\x73\x20\x6C\x6F\x61\x64\x65\x64\x20\x66\x72\x6F\x6D\x20\x6C\x6F\x63\x61\x6C\x73\x74\x6F\x72\x61\x67\x65\x2E\x20"+APPLICATION.ACCOUNT_SERVICE_AUTO_RUN);if(APPLICATION.ACCOUNT_SERVICE_AUTO_RUN==true){kS.GUI.BUTTONS[3].text="\x53\x77\x69\x74\x63\x68\x20\x41\x75\x74\x6F\x43\x6F\x6E\x6E\x65\x63\x74\x20\x74\x6F\x20\x66\x61\x6C\x73\x65"}else {kS.GUI.BUTTONS[3].text="\x53\x77\x69\x74\x63\x68\x20\x41\x75\x74\x6F\x43\x6F\x6E\x6E\x65\x63\x74\x20\x74\x6F\x20\x74\x72\x75\x65"};if(APPLICATION.EDITOR_AUTORUN==true){kS.ENGINE_EDITOR=true;kS.GUI.BUTTONS[4].text="\x53\x77\x69\x74\x63\x68\x20\x65\x64\x69\x74\x6F\x72\x41\x75\x74\x6F\x52\x75\x6E\x20\x74\x6F\x20\x66\x61\x6C\x73\x65"}else {kS.ENGINE_EDITOR=false;kS.GUI.BUTTONS[4].text="\x53\x77\x69\x74\x63\x68\x20\x65\x64\x69\x74\x6F\x72\x41\x75\x74\x6F\x52\x75\x6E\x20\x74\x6F\x20\x74\x72\x75\x65"}}},GRID:{VISIBLE:true,MAP_SIZE_X:10,MAP_SIZE_Y:10,STEP:10,COLOR:APPLICATION.SYSTEM.HOVER_COLOR},LIST_OF_OBJECTS:{VISIBLE:true,LIST:kS.MODULES,BUTTONS_MODULES:[],BUTTONS_GAME_OBJECTS:[],GET_MODULES:function(){for(var s=0;s<kS.MODULES.length;s++){kS.GUI.LIST_OF_OBJECTS.BUTTONS_MODULES.push( new RIGHT_MENU_BUTTON(kS.MODULES[s].NAME,10*s,s+1));kS.GUI.LIST_OF_OBJECTS.BUTTONS_MODULES[s].TAP=function(){kS.GUI.LIST_OF_OBJECTS.BUTTONS_GAME_OBJECTS=[];for(var z=0;z<kS.MODULES[this.IAM-1].GAME_OBJECTS.length;z++){kS.GUI.LIST_OF_OBJECTS.BUTTONS_GAME_OBJECTS.push( new RIGHT_MENU_BUTTON(kS.MODULES[this.IAM-1].GAME_OBJECTS[z].NAME,10*z,z+1));kS.GUI.LIST_OF_OBJECTS.BUTTONS_GAME_OBJECTS[z].POSITION.x+=100}}}}}};this.GUI.LIST_OF_OBJECTS.GET_MODULES();this.GUI.CHECK_ON_START();this.DRAW_MODULES=function(s){if(kS.GUI.GRID.VISIBLE==true&&kS.ENGINE_EDITOR==true){s.fillStyle=kS.GUI.GRID.COLOR;for(var D=0;D<kS.GUI.GRID.MAP_SIZE_X*kS.GUI.GRID.STEP;D+=kS.GUI.GRID.STEP){s.fillRect(VIEW.W(D),VIEW.H(0),1,VIEW.H());s.fillRect(VIEW.W(0),VIEW.H(D),VIEW.W(),1)}};for(var D=0;D<kS.MODULES.length;D++){kS.MODULES[D].DRAW_GAME_OBJECTS(s)};if(kS.ENGINE_EDITOR==true){if(kS.GUI.VISIBLE==true){for(var D=0;D<kS.GUI.BUTTONS.length;D++){s.textBaseline="\x6D\x69\x64\x64\x6C\x65";if(kS.GUI.BUTTONS[D].HOVER==false){s.fillStyle=APPLICATION.SYSTEM.COLOR;s.fillRect(kS.GUI.BUTTONS[D].POSITION.X(),kS.GUI.BUTTONS[D].POSITION.Y(),kS.GUI.BUTTONS[D].DIMENSION.WIDTH(),kS.GUI.BUTTONS[D].DIMENSION.HEIGHT());s.fillStyle=APPLICATION.SYSTEM.TEXT_COLOR;s.fillText(kS.GUI.BUTTONS[D].text,kS.GUI.BUTTONS[D].POSITION.X(),kS.GUI.BUTTONS[D].POSITION.Y()+kS.GUI.BUTTONS[D].DIMENSION.HEIGHT()/2,kS.GUI.BUTTONS[D].DIMENSION.WIDTH())}else {s.fillStyle=APPLICATION.SYSTEM.HOVER_COLOR;s.fillRect(kS.GUI.BUTTONS[D].POSITION.X(),kS.GUI.BUTTONS[D].POSITION.Y(),kS.GUI.BUTTONS[D].DIMENSION.WIDTH(),kS.GUI.BUTTONS[D].DIMENSION.HEIGHT());s.fillStyle=APPLICATION.SYSTEM.TEXT_COLOR;s.fillText(kS.GUI.BUTTONS[D].text,kS.GUI.BUTTONS[D].POSITION.X(),kS.GUI.BUTTONS[D].POSITION.Y()+kS.GUI.BUTTONS[D].DIMENSION.HEIGHT()/2,kS.GUI.BUTTONS[D].DIMENSION.WIDTH());if(kS.GUI.BUTTONS[D].icon==true){try{s.drawImage(window["\x69\x6D\x61\x67\x65\x5F\x73\x79\x73\x74\x65\x6D\x5F"+kS.GUI.BUTTONS[D].IAM],kS.GUI.BUTTONS[D].POSITION.X()+kS.GUI.BUTTONS[D].DIMENSION.WIDTH()-30,kS.GUI.BUTTONS[D].POSITION.Y()-5,30,30)}catch(e){}}}}};for(var D=0;D<kS.GUI.LIST_OF_OBJECTS.BUTTONS_MODULES.length;D++){s.textBaseline="\x6D\x69\x64\x64\x6C\x65";if(kS.GUI.LIST_OF_OBJECTS.BUTTONS_MODULES[D].HOVER==false){s.fillStyle=APPLICATION.SYSTEM.COLOR;s.fillRect(kS.GUI.LIST_OF_OBJECTS.BUTTONS_MODULES[D].POSITION.X(),kS.GUI.LIST_OF_OBJECTS.BUTTONS_MODULES[D].POSITION.Y(),kS.GUI.LIST_OF_OBJECTS.BUTTONS_MODULES[D].DIMENSION.WIDTH(),kS.GUI.LIST_OF_OBJECTS.BUTTONS_MODULES[D].DIMENSION.HEIGHT());s.fillStyle=APPLICATION.SYSTEM.TEXT_COLOR;s.fillText(kS.GUI.LIST_OF_OBJECTS.BUTTONS_MODULES[D].text,kS.GUI.LIST_OF_OBJECTS.BUTTONS_MODULES[D].POSITION.X(),kS.GUI.LIST_OF_OBJECTS.BUTTONS_MODULES[D].POSITION.Y()+kS.GUI.LIST_OF_OBJECTS.BUTTONS_MODULES[D].DIMENSION.HEIGHT()/2,kS.GUI.LIST_OF_OBJECTS.BUTTONS_MODULES[D].DIMENSION.WIDTH())}else {s.fillStyle=APPLICATION.SYSTEM.HOVER_COLOR;s.fillRect(kS.GUI.LIST_OF_OBJECTS.BUTTONS_MODULES[D].POSITION.X(),kS.GUI.LIST_OF_OBJECTS.BUTTONS_MODULES[D].POSITION.Y(),kS.GUI.LIST_OF_OBJECTS.BUTTONS_MODULES[D].DIMENSION.WIDTH(),kS.GUI.LIST_OF_OBJECTS.BUTTONS_MODULES[D].DIMENSION.HEIGHT());s.fillStyle=APPLICATION.SYSTEM.COLOR;s.fillText(kS.GUI.LIST_OF_OBJECTS.BUTTONS_MODULES[D].text,kS.GUI.LIST_OF_OBJECTS.BUTTONS_MODULES[D].POSITION.X(),kS.GUI.LIST_OF_OBJECTS.BUTTONS_MODULES[D].POSITION.Y()+kS.GUI.LIST_OF_OBJECTS.BUTTONS_MODULES[D].DIMENSION.HEIGHT()/2,kS.GUI.LIST_OF_OBJECTS.BUTTONS_MODULES[D].DIMENSION.WIDTH())}};for(var D=0;D<kS.GUI.LIST_OF_OBJECTS.BUTTONS_GAME_OBJECTS.length;D++){s.textBaseline="\x6D\x69\x64\x64\x6C\x65";if(kS.GUI.LIST_OF_OBJECTS.BUTTONS_GAME_OBJECTS[D].HOVER==false){s.fillStyle=APPLICATION.SYSTEM.COLOR;s.fillRect(kS.GUI.LIST_OF_OBJECTS.BUTTONS_GAME_OBJECTS[D].POSITION.X(),kS.GUI.LIST_OF_OBJECTS.BUTTONS_GAME_OBJECTS[D].POSITION.Y(),kS.GUI.LIST_OF_OBJECTS.BUTTONS_GAME_OBJECTS[D].DIMENSION.WIDTH(),kS.GUI.LIST_OF_OBJECTS.BUTTONS_GAME_OBJECTS[D].DIMENSION.HEIGHT());s.fillStyle=APPLICATION.SYSTEM.TEXT_COLOR;s.fillText(kS.GUI.LIST_OF_OBJECTS.BUTTONS_GAME_OBJECTS[D].text,kS.GUI.LIST_OF_OBJECTS.BUTTONS_GAME_OBJECTS[D].POSITION.X(),kS.GUI.LIST_OF_OBJECTS.BUTTONS_GAME_OBJECTS[D].POSITION.Y()+kS.GUI.LIST_OF_OBJECTS.BUTTONS_GAME_OBJECTS[D].DIMENSION.HEIGHT()/2,kS.GUI.LIST_OF_OBJECTS.BUTTONS_GAME_OBJECTS[D].DIMENSION.WIDTH())}else {s.fillStyle=APPLICATION.SYSTEM.HOVER_COLOR;s.fillRect(kS.GUI.LIST_OF_OBJECTS.BUTTONS_GAME_OBJECTS[D].POSITION.X(),kS.GUI.LIST_OF_OBJECTS.BUTTONS_GAME_OBJECTS[D].POSITION.Y(),kS.GUI.LIST_OF_OBJECTS.BUTTONS_GAME_OBJECTS[D].DIMENSION.WIDTH(),kS.GUI.LIST_OF_OBJECTS.BUTTONS_GAME_OBJECTS[D].DIMENSION.HEIGHT());s.fillStyle=APPLICATION.SYSTEM.COLOR;s.fillText(kS.GUI.LIST_OF_OBJECTS.BUTTONS_GAME_OBJECTS[D].text,kS.GUI.LIST_OF_OBJECTS.BUTTONS_GAME_OBJECTS[D].POSITION.X(),kS.GUI.LIST_OF_OBJECTS.BUTTONS_GAME_OBJECTS[D].POSITION.Y()+kS.GUI.LIST_OF_OBJECTS.BUTTONS_GAME_OBJECTS[D].DIMENSION.HEIGHT()/2,kS.GUI.LIST_OF_OBJECTS.BUTTONS_GAME_OBJECTS[D].DIMENSION.WIDTH())}}}};this.UPDATE_MODULES=function(){for(var D=0;D<kS.MODULES.length;D++){kS.MODULES[D].UPDATE_GAME_OBJECTS()}};this.CREATE_MODUL=function(kT){kS.MODULES.push( new MODUL(kT,kS.PROGRAM_ID))};this.DESTROY_MODUL=function(kT){console.log(kS.MODULES.indexOf(kT));kS.MODULES.forEach(function(kV,kU,kW){if(kV.NAME==kT){if(kU> -1){kS.MODULES.splice(kU,1)};console.log(kS.MODULES.indexOf(kT))}})}}