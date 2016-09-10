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
function MODUL(cf,cg){var ch=this;this.PARENT= cg;this.NAME= cf;this.GAME_OBJECTS=  new Array();this.NEW_OBJECT= function(ci,x,C,w,h,cj){ch.GAME_OBJECTS.push( new GAME_OBJECT(ci,ch.NAME,x,C,w,h,cj,ch.PARENT))};this.NEW_NETWORK_OBJECT= function(ck){ch.GAME_OBJECTS.push( new GAME_OBJECT(ck.NAME,ch.NAME,ck.POSITION.x,ck.POSITION.y,ck.DIMENSION.W,ck.DIMENSION.H,ck.POSITION.thrust,ch.PARENT));if(ck.TYPE_OF_GAME_OBJECT.indexOf("\x41\x4E\x49\x4D\x41\x54\x49\x4F\x4E")!=  -1){window[ck.NAME].CREATE_ANIMATION(SURF,ck.ANIMATION.TYPE,0,RESOURCE.Tiles,123423444,"\x6E\x6F",1,11,1,1,1)}};this.NEW_NETWORK_POSITION= function(ck){if( typeof ck.nameOfObject!== "\x75\x6E\x64\x65\x66\x69\x6E\x65\x64"){window[ck.nameOfObject].POSITION.SET_POSITION(ck.x,ck.y,"\x44\x49\x41\x4D\x45\x54\x52\x49\x43")}};this.NEW_NETWORK_DIMENSION= function(ck){if( typeof ck.nameOfObject!== "\x75\x6E\x64\x65\x66\x69\x6E\x65\x64"){window[ck.nameOfObject].DIMENSION.W= ck.W;window[ck.nameOfObject].DIMENSION.H= ck.H}};this.DESTROY_OBJECT= function(ci){ch.GAME_OBJECTS.forEach(function(cm,cl,cn){if(cm.NAME== ci){if(cl>  -1){ch.GAME_OBJECTS.splice(cl,1);delete window[ci]};console.log("\x4F\x42\x4A\x20\x44\x45\x4C\x45\x54\x45\x44\x3A"+ ch.GAME_OBJECTS.indexOf(ci)+ "\x20\x20\x41\x43\x43\x45\x53\x53\x20\x47\x4C\x4F\x42\x41\x4C\x20\x20\x3A\x20"+ window["\x6E\x61\x6D\x65\x5F\x5F"])}})};this.DRAW_GAME_OBJECTS= function(s){for(var x=0;x< ch.GAME_OBJECTS.length;x++){ch.GAME_OBJECTS[x].DRAW(s);if(ch.GAME_OBJECTS[x].EDITOR.ENABLE== true){ch.GAME_OBJECTS[x].DRAW_ACTOR(s)}}};ch.BREAK_AT_MOMENT= false;this.UPDATE_GAME_OBJECTS= function(){for(var x=0;x< ch.GAME_OBJECTS.length;x++){if(ch.BREAK_AT_MOMENT== true){ch.BREAK_AT_MOMENT= false;console.log("\x42\x52\x45\x41\x4B");break};if(ch.GAME_OBJECTS[x].COLLISION!= null){for(var D=0;D< ch.GAME_OBJECTS.length;D++){if(ch.GAME_OBJECTS[D].COLLISION!= null&& ch.GAME_OBJECTS[D].NAME!= ch.GAME_OBJECTS[x].NAME&&  typeof PLAYER!= "\x75\x6E\x64\x65\x66\x69\x6E\x65\x64"&& window[ch.PARENT].ENGINE.GAME_TYPE== "\x50\x4C\x41\x54\x46\x4F\x52\x4D\x45\x52"){if( typeof PLAYER!= "\x75\x6E\x64\x65\x66\x69\x6E\x65\x64"){if((ch.GAME_OBJECTS[D].POSITION.Y()+ ch.GAME_OBJECTS[D].DIMENSION.HEIGHT())> ch.GAME_OBJECTS[x].POSITION.Y()&& (ch.GAME_OBJECTS[D].POSITION.Y()< ch.GAME_OBJECTS[x].POSITION.Y()+ ch.GAME_OBJECTS[x].DIMENSION.HEIGHT())){if((ch.GAME_OBJECTS[D].POSITION.X()+ ch.GAME_OBJECTS[D].DIMENSION.WIDTH())> ch.GAME_OBJECTS[x].POSITION.X()- 2&& (ch.GAME_OBJECTS[D].POSITION.X()+ ch.GAME_OBJECTS[D].DIMENSION.WIDTH()< ch.GAME_OBJECTS[x].POSITION.X()+ ch.GAME_OBJECTS[x].POSITION.thrust* 12)){if(ch.GAME_OBJECTS[D].POSITION.STATIC== false&& ch.GAME_OBJECTS[D].POSITION.IN_MOVE== true){SYS.DEBUG.LOG(ch.GAME_OBJECTS[D].NAME+ "\x43\x4F\x4C\x4C\x49\x44\x45\x20\x72\x69\x67\x68\x74\x31\x20\x57\x49\x54\x48\x3A"+ ch.GAME_OBJECTS[x].NAME);ch.GAME_OBJECTS[D].POSITION.x= ch.GAME_OBJECTS[x].POSITION.x- ch.GAME_OBJECTS[D].DIMENSION.W* ch.GAME_OBJECTS[D].COLLISION.margin;ch.GAME_OBJECTS[D].POSITION.targetX= ch.GAME_OBJECTS[x].POSITION.x- ch.GAME_OBJECTS[D].DIMENSION.W* ch.GAME_OBJECTS[D].COLLISION.margin}else {if( typeof ch.GAME_OBJECTS[D].PLAYER!= "\x75\x6E\x64\x65\x66\x69\x6E\x65\x64"&& ch.GAME_OBJECTS[D].PLAYER.TYPE== "\x50\x4C\x41\x54\x46\x4F\x52\x4D\x45\x52"&& ch.GAME_OBJECTS[x].POSITION.STATIC== false){SYS.DEBUG.LOG(ch.GAME_OBJECTS[D].NAME+ "\x43\x4F\x4C\x4C\x49\x44\x45\x20\x72\x69\x67\x74\x68\x32\x20\x57\x49\x54\x48\x3A"+ ch.GAME_OBJECTS[x].NAME);ch.GAME_OBJECTS[x].POSITION.x= ch.GAME_OBJECTS[D].POSITION.x+ ch.GAME_OBJECTS[x].DIMENSION.W* ch.GAME_OBJECTS[D].COLLISION.margin;ch.GAME_OBJECTS[x].POSITION.targetX= ch.GAME_OBJECTS[D].POSITION.x+ ch.GAME_OBJECTS[x].DIMENSION.W* ch.GAME_OBJECTS[D].COLLISION.margin}}}else {if((ch.GAME_OBJECTS[D].POSITION.X())< ch.GAME_OBJECTS[x].POSITION.X()+ ch.GAME_OBJECTS[x].DIMENSION.WIDTH()+ 2&& (ch.GAME_OBJECTS[D].POSITION.X()> ch.GAME_OBJECTS[x].POSITION.X()+ ch.GAME_OBJECTS[x].DIMENSION.WIDTH()- ch.GAME_OBJECTS[x].POSITION.thrust* 12)){if(ch.GAME_OBJECTS[D].POSITION.STATIC== false&& ch.GAME_OBJECTS[D].POSITION.IN_MOVE== true){SYS.DEBUG.LOG(ch.GAME_OBJECTS[D].NAME+ "\x43\x4F\x4C\x4C\x49\x44\x45\x20\x6C\x65\x66\x74\x31\x20\x57\x49\x54\x48\x3A"+ ch.GAME_OBJECTS[x].NAME);ch.GAME_OBJECTS[D].POSITION.x= ch.GAME_OBJECTS[x].POSITION.x+ ch.GAME_OBJECTS[D].DIMENSION.W* ch.GAME_OBJECTS[D].COLLISION.margin;ch.GAME_OBJECTS[D].POSITION.targetX= ch.GAME_OBJECTS[x].POSITION.x+ ch.GAME_OBJECTS[D].DIMENSION.W* ch.GAME_OBJECTS[D].COLLISION.margin}else {if( typeof ch.GAME_OBJECTS[D].PLAYER!= "\x75\x6E\x64\x65\x66\x69\x6E\x65\x64"&& ch.GAME_OBJECTS[D].PLAYER.TYPE== "\x50\x4C\x41\x54\x46\x4F\x52\x4D\x45\x52"&& ch.GAME_OBJECTS[x].POSITION.STATIC== false){SYS.DEBUG.LOG(ch.GAME_OBJECTS[D].NAME+ "\x43\x4F\x4C\x4C\x49\x44\x45\x20\x6C\x65\x66\x74\x32\x20\x57\x49\x54\x48\x3A"+ ch.GAME_OBJECTS[x].NAME);ch.GAME_OBJECTS[x].POSITION.x= ch.GAME_OBJECTS[D].POSITION.x- ch.GAME_OBJECTS[x].DIMENSION.W* ch.GAME_OBJECTS[D].COLLISION.margin;ch.GAME_OBJECTS[x].POSITION.targetX= ch.GAME_OBJECTS[D].POSITION.x- ch.GAME_OBJECTS[x].DIMENSION.W* ch.GAME_OBJECTS[D].COLLISION.margin}}}}};if(ch.GAME_OBJECTS[D].POSITION.X()+ ch.GAME_OBJECTS[D].DIMENSION.WIDTH()> ch.GAME_OBJECTS[x].POSITION.X()+ ch.GAME_OBJECTS[x].POSITION.thrust* 12&& ch.GAME_OBJECTS[D].POSITION.X()< ch.GAME_OBJECTS[x].POSITION.X()+ ch.GAME_OBJECTS[x].DIMENSION.WIDTH()- ch.GAME_OBJECTS[x].POSITION.thrust* 12){if(ch.GAME_OBJECTS[D].POSITION.Y()+ ch.GAME_OBJECTS[D].DIMENSION.HEIGHT()> ch.GAME_OBJECTS[x].POSITION.Y()&& ch.GAME_OBJECTS[D].POSITION.Y()+ ch.GAME_OBJECTS[D].DIMENSION.HEIGHT()< ch.GAME_OBJECTS[x].POSITION.Y()+ ch.GAME_OBJECTS[x].POSITION.thrust* 12){if(ch.GAME_OBJECTS[D].POSITION.STATIC== false&& ch.GAME_OBJECTS[D].POSITION.IN_MOVE== true){if( typeof ch.GAME_OBJECTS[D].PLAYER!= "\x75\x6E\x64\x65\x66\x69\x6E\x65\x64"&& ch.GAME_OBJECTS[D].PLAYER.TYPE== "\x50\x4C\x41\x54\x46\x4F\x52\x4D\x45\x52"){SYS.DEBUG.LOG(ch.GAME_OBJECTS[D].NAME+ "\x43\x4F\x4C\x4C\x49\x44\x45\x20\x54\x4F\x50\x31\x20\x57\x49\x54\x48\x3A"+ ch.GAME_OBJECTS[x].NAME);ch.GAME_OBJECTS[D].POSITION.y= ch.GAME_OBJECTS[x].POSITION.y- ch.GAME_OBJECTS[D].DIMENSION.H* ch.GAME_OBJECTS[D].COLLISION.margin;ch.GAME_OBJECTS[D].POSITION.targetY= ch.GAME_OBJECTS[x].POSITION.y- ch.GAME_OBJECTS[D].DIMENSION.H* ch.GAME_OBJECTS[D].COLLISION.margin;PLAYER.FREEZ= true;PLAYER.Y= 0;PLAYER.CONTROL.JUMP= false;if(PLAYER.BREAK_AT_MOMENT_STATUS== false){ch.BREAK_AT_MOMENT= true;PLAYER.BREAK_AT_MOMENT_STATUS= true};break}}else {if( typeof ch.GAME_OBJECTS[D].PLAYER!= "\x75\x6E\x64\x65\x66\x69\x6E\x65\x64"&& ch.GAME_OBJECTS[D].PLAYER.TYPE== "\x50\x4C\x41\x54\x46\x4F\x52\x4D\x45\x52"){SYS.DEBUG.LOG(ch.GAME_OBJECTS[D].NAME+ "\x43\x4F\x4C\x4C\x49\x44\x45\x20\x54\x4F\x50\x32\x20\x57\x49\x54\x48\x3A"+ ch.GAME_OBJECTS[x].NAME);ch.GAME_OBJECTS[x].POSITION.y= ch.GAME_OBJECTS[D].POSITION.y+ ch.GAME_OBJECTS[x].DIMENSION.H* ch.GAME_OBJECTS[D].COLLISION.margin;ch.GAME_OBJECTS[x].POSITION.targetY= ch.GAME_OBJECTS[D].POSITION.y+ ch.GAME_OBJECTS[x].DIMENSION.H* ch.GAME_OBJECTS[D].COLLISION.margin;PLAYER.FREEZ= true;PLAYER.Y= 0;PLAYER.CONTROL.JUMP= false;if(PLAYER.BREAK_AT_MOMENT_STATUS== false){ch.BREAK_AT_MOMENT= true;PLAYER.BREAK_AT_MOMENT_STATUS= true};break}}}else {if(ch.GAME_OBJECTS[D].POSITION.Y()< ch.GAME_OBJECTS[x].POSITION.Y()+ ch.GAME_OBJECTS[x].DIMENSION.HEIGHT()&& ch.GAME_OBJECTS[D].POSITION.Y()> ch.GAME_OBJECTS[x].POSITION.Y()+ ch.GAME_OBJECTS[x].DIMENSION.HEIGHT()- ch.GAME_OBJECTS[x].POSITION.thrust* 12){if(ch.GAME_OBJECTS[D].POSITION.STATIC== false&& ch.GAME_OBJECTS[D].POSITION.IN_MOVE== true){SYS.DEBUG.LOG(ch.GAME_OBJECTS[D].NAME+ "\x43\x4F\x4C\x4C\x49\x44\x45\x20\x62\x6F\x74\x74\x6F\x6E\x31\x20\x57\x49\x54\x48\x3A"+ ch.GAME_OBJECTS[x].NAME);ch.GAME_OBJECTS[D].POSITION.y= ch.GAME_OBJECTS[x].POSITION.y+ ch.GAME_OBJECTS[D].DIMENSION.H* ch.GAME_OBJECTS[D].COLLISION.margin;ch.GAME_OBJECTS[D].POSITION.targetY= ch.GAME_OBJECTS[x].POSITION.y+ ch.GAME_OBJECTS[D].DIMENSION.H* ch.GAME_OBJECTS[D].COLLISION.margin}else {if( typeof ch.GAME_OBJECTS[D].PLAYER!= "\x75\x6E\x64\x65\x66\x69\x6E\x65\x64"&& ch.GAME_OBJECTS[D].PLAYER.TYPE== "\x50\x4C\x41\x54\x46\x4F\x52\x4D\x45\x52"){SYS.DEBUG.LOG(ch.GAME_OBJECTS[D].NAME+ "\x43\x4F\x4C\x4C\x49\x44\x45\x20\x62\x6F\x74\x74\x6F\x6E\x32\x20\x57\x49\x54\x48\x3A"+ ch.GAME_OBJECTS[x].NAME);ch.GAME_OBJECTS[x].POSITION.y= ch.GAME_OBJECTS[D].POSITION.y- ch.GAME_OBJECTS[x].DIMENSION.H* ch.GAME_OBJECTS[D].COLLISION.margin;ch.GAME_OBJECTS[x].POSITION.targetY= ch.GAME_OBJECTS[D].POSITION.y- ch.GAME_OBJECTS[x].DIMENSION.H* ch.GAME_OBJECTS[D].COLLISION.margin;PLAYER.FREEZ= true;PLAYER.Y= 0;PLAYER.CONTROL.JUMP= false;if(PLAYER.BREAK_AT_MOMENT_STATUS== false){ch.BREAK_AT_MOMENT= true;PLAYER.BREAK_AT_MOMENT_STATUS= true};break}}}}}}}else {if(ch.GAME_OBJECTS[D].COLLISION!= null&& ch.GAME_OBJECTS[D].NAME!= ch.GAME_OBJECTS[x].NAME){if((ch.GAME_OBJECTS[D].POSITION.Y()+ ch.GAME_OBJECTS[D].DIMENSION.HEIGHT())> ch.GAME_OBJECTS[x].POSITION.Y()&& (ch.GAME_OBJECTS[D].POSITION.Y()< ch.GAME_OBJECTS[x].POSITION.Y()+ ch.GAME_OBJECTS[x].DIMENSION.HEIGHT())){if((ch.GAME_OBJECTS[D].POSITION.X()+ ch.GAME_OBJECTS[D].DIMENSION.WIDTH())> ch.GAME_OBJECTS[x].POSITION.X()- 2&& (ch.GAME_OBJECTS[D].POSITION.X()+ ch.GAME_OBJECTS[D].DIMENSION.WIDTH()< ch.GAME_OBJECTS[x].POSITION.X()+ ch.GAME_OBJECTS[x].POSITION.thrust* 12)){if(ch.GAME_OBJECTS[D].POSITION.STATIC== false&& ch.GAME_OBJECTS[D].POSITION.IN_MOVE== true){SYS.DEBUG.LOG(ch.GAME_OBJECTS[D].NAME+ "\x20\x43\x4F\x4C\x4C\x49\x44\x45\x20\x28\x6E\x6F\x70\x6C\x61\x79\x65\x72\x29\x20\x72\x69\x67\x68\x74\x20\x57\x49\x54\x48\x3A"+ ch.GAME_OBJECTS[x].NAME);ch.GAME_OBJECTS[D].POSITION.x= ch.GAME_OBJECTS[x].POSITION.x- ch.GAME_OBJECTS[D].DIMENSION.W* ch.GAME_OBJECTS[D].COLLISION.margin;ch.GAME_OBJECTS[D].POSITION.targetX= ch.GAME_OBJECTS[x].POSITION.x- ch.GAME_OBJECTS[D].DIMENSION.W* ch.GAME_OBJECTS[D].COLLISION.margin}else {if(ch.GAME_OBJECTS[D].POSITION.STATIC== false){SYS.DEBUG.LOG(ch.GAME_OBJECTS[D].NAME+ "\x43\x4F\x4C\x4C\x49\x44\x45\x20\x28\x6E\x6F\x70\x6C\x61\x79\x65\x72\x29\x20\x72\x69\x67\x74\x68\x20\x57\x49\x54\x48\x3A"+ ch.GAME_OBJECTS[x].NAME);ch.GAME_OBJECTS[x].POSITION.x= ch.GAME_OBJECTS[D].POSITION.x+ ch.GAME_OBJECTS[x].DIMENSION.W* ch.GAME_OBJECTS[D].COLLISION.margin;ch.GAME_OBJECTS[x].POSITION.targetX= ch.GAME_OBJECTS[D].POSITION.x+ ch.GAME_OBJECTS[x].DIMENSION.W* ch.GAME_OBJECTS[D].COLLISION.margin}}}else {if((ch.GAME_OBJECTS[D].POSITION.X())< ch.GAME_OBJECTS[x].POSITION.X()+ ch.GAME_OBJECTS[x].DIMENSION.WIDTH()+ 2&& (ch.GAME_OBJECTS[D].POSITION.X()> ch.GAME_OBJECTS[x].POSITION.X()+ ch.GAME_OBJECTS[x].DIMENSION.WIDTH()- ch.GAME_OBJECTS[x].POSITION.thrust* 12)){if(ch.GAME_OBJECTS[D].POSITION.STATIC== false&& ch.GAME_OBJECTS[D].POSITION.IN_MOVE== true){SYS.DEBUG.LOG(ch.GAME_OBJECTS[D].NAME+ "\x43\x4F\x4C\x4C\x49\x44\x45\x20\x28\x6E\x6F\x70\x6C\x61\x79\x65\x72\x29\x20\x6C\x65\x66\x74\x20\x57\x49\x54\x48\x3A"+ ch.GAME_OBJECTS[x].NAME);ch.GAME_OBJECTS[D].POSITION.x= ch.GAME_OBJECTS[x].POSITION.x+ ch.GAME_OBJECTS[D].DIMENSION.W* ch.GAME_OBJECTS[D].COLLISION.margin;ch.GAME_OBJECTS[D].POSITION.targetX= ch.GAME_OBJECTS[x].POSITION.x+ ch.GAME_OBJECTS[D].DIMENSION.W* ch.GAME_OBJECTS[D].COLLISION.margin}else {if(ch.GAME_OBJECTS[D].POSITION.STATIC== false){SYS.DEBUG.LOG(ch.GAME_OBJECTS[D].NAME+ "\x43\x4F\x4C\x4C\x49\x44\x45\x20\x28\x6E\x6F\x70\x6C\x61\x79\x65\x72\x29\x20\x6C\x65\x66\x74\x20\x57\x49\x54\x48\x3A"+ ch.GAME_OBJECTS[x].NAME);ch.GAME_OBJECTS[x].POSITION.x= ch.GAME_OBJECTS[D].POSITION.x- ch.GAME_OBJECTS[x].DIMENSION.W* ch.GAME_OBJECTS[D].COLLISION.margin;ch.GAME_OBJECTS[x].POSITION.targetX= ch.GAME_OBJECTS[D].POSITION.x- ch.GAME_OBJECTS[x].DIMENSION.W* ch.GAME_OBJECTS[D].COLLISION.margin}}}}};if(ch.GAME_OBJECTS[D].POSITION.X()+ ch.GAME_OBJECTS[D].DIMENSION.WIDTH()> ch.GAME_OBJECTS[x].POSITION.X()+ ch.GAME_OBJECTS[x].POSITION.thrust* 12&& ch.GAME_OBJECTS[D].POSITION.X()< ch.GAME_OBJECTS[x].POSITION.X()+ ch.GAME_OBJECTS[x].DIMENSION.WIDTH()- ch.GAME_OBJECTS[x].POSITION.thrust* 12){if(ch.GAME_OBJECTS[D].POSITION.Y()+ ch.GAME_OBJECTS[D].DIMENSION.HEIGHT()> ch.GAME_OBJECTS[x].POSITION.Y()&& ch.GAME_OBJECTS[D].POSITION.Y()+ ch.GAME_OBJECTS[D].DIMENSION.HEIGHT()< ch.GAME_OBJECTS[x].POSITION.Y()+ ch.GAME_OBJECTS[x].POSITION.thrust* 12){if(ch.GAME_OBJECTS[D].POSITION.STATIC== false&& ch.GAME_OBJECTS[D].POSITION.IN_MOVE== true){SYS.DEBUG.LOG(ch.GAME_OBJECTS[D].NAME+ "\x43\x4F\x4C\x4C\x49\x44\x45\x20\x28\x6E\x6F\x70\x6C\x61\x79\x65\x72\x29\x20\x74\x6F\x70\x20\x57\x49\x54\x48\x3A"+ ch.GAME_OBJECTS[x].NAME);ch.GAME_OBJECTS[D].POSITION.y= ch.GAME_OBJECTS[x].POSITION.y- ch.GAME_OBJECTS[D].DIMENSION.H* ch.GAME_OBJECTS[D].COLLISION.margin;ch.GAME_OBJECTS[D].POSITION.targetY= ch.GAME_OBJECTS[x].POSITION.y- ch.GAME_OBJECTS[D].DIMENSION.H* ch.GAME_OBJECTS[D].COLLISION.margin}else {if(ch.GAME_OBJECTS[D].POSITION.STATIC== false){SYS.DEBUG.LOG(ch.GAME_OBJECTS[D].NAME+ "\x43\x4F\x4C\x4C\x49\x44\x45\x20\x28\x6E\x6F\x70\x6C\x61\x79\x65\x72\x29\x20\x62\x6F\x74\x74\x6F\x6E\x20\x57\x49\x54\x48\x3A"+ ch.GAME_OBJECTS[x].NAME);ch.GAME_OBJECTS[x].POSITION.y= ch.GAME_OBJECTS[D].POSITION.y+ ch.GAME_OBJECTS[x].DIMENSION.H* ch.GAME_OBJECTS[D].COLLISION.margin;ch.GAME_OBJECTS[x].POSITION.targetY= ch.GAME_OBJECTS[D].POSITION.y+ ch.GAME_OBJECTS[x].DIMENSION.H* ch.GAME_OBJECTS[D].COLLISION.margin}}}else {if(ch.GAME_OBJECTS[D].POSITION.Y()< ch.GAME_OBJECTS[x].POSITION.Y()+ ch.GAME_OBJECTS[x].DIMENSION.HEIGHT()&& ch.GAME_OBJECTS[D].POSITION.Y()> ch.GAME_OBJECTS[x].POSITION.Y()+ ch.GAME_OBJECTS[x].DIMENSION.HEIGHT()- ch.GAME_OBJECTS[x].POSITION.thrust* 12){if(ch.GAME_OBJECTS[D].POSITION.STATIC== false&& ch.GAME_OBJECTS[D].POSITION.IN_MOVE== true){SYS.DEBUG.LOG(ch.GAME_OBJECTS[D].NAME+ "\x43\x4F\x4C\x4C\x49\x44\x45\x20\x28\x6E\x6F\x70\x6C\x61\x79\x65\x72\x29\x20\x6F\x6E\x54\x6F\x70\x20\x57\x49\x54\x48\x3A"+ ch.GAME_OBJECTS[x].NAME);ch.GAME_OBJECTS[D].POSITION.y= ch.GAME_OBJECTS[x].POSITION.y+ ch.GAME_OBJECTS[D].DIMENSION.H* ch.GAME_OBJECTS[D].COLLISION.margin;ch.GAME_OBJECTS[D].POSITION.targetY= ch.GAME_OBJECTS[x].POSITION.y+ ch.GAME_OBJECTS[D].DIMENSION.H* ch.GAME_OBJECTS[D].COLLISION.margin}else {if(ch.GAME_OBJECTS[D].POSITION.STATIC== false){SYS.DEBUG.LOG(ch.GAME_OBJECTS[D].NAME+ "\x43\x4F\x4C\x4C\x49\x44\x45\x20\x28\x6E\x6F\x70\x6C\x61\x79\x65\x72\x29\x20\x6F\x6E\x54\x6F\x70\x20\x57\x49\x54\x48\x3A"+ ch.GAME_OBJECTS[x].NAME);ch.GAME_OBJECTS[x].POSITION.y= ch.GAME_OBJECTS[D].POSITION.y- ch.GAME_OBJECTS[x].DIMENSION.H* ch.GAME_OBJECTS[D].COLLISION.margin;ch.GAME_OBJECTS[x].POSITION.targetY= ch.GAME_OBJECTS[D].POSITION.y- ch.GAME_OBJECTS[x].DIMENSION.H* ch.GAME_OBJECTS[D].COLLISION.margin}}}}}}}}};if( typeof ch.GAME_OBJECTS[x]!== "\x75\x6E\x64\x65\x66\x69\x6E\x65\x64"){if(ch.GAME_OBJECTS[x].DESTROY_AFTER!= null){if(ch.GAME_OBJECTS[x].DESTROY_AFTER< 1){ch.DESTROY_OBJECT(ch.GAME_OBJECTS[x].NAME)}};if( typeof ch.GAME_OBJECTS[x]!== "\x75\x6E\x64\x65\x66\x69\x6E\x65\x64"){ch.GAME_OBJECTS[x].UPDATE()}}}}}