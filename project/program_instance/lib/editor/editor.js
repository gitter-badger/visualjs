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
var LOCAL_COMMUNICATOR= new Object();if(APPLICATION.EDITOR_AUTORUN== true){LOCAL_COMMUNICATOR= io.connect("\x68\x74\x74\x70\x3A\x2F\x2F"+ APPLICATION.LOCAL_SERVER+ "\x3A\x31\x30\x31\x33");LOCAL_COMMUNICATOR.on("\x63\x6F\x6E\x6E\x65\x63\x74",function(){console.log("\x43\x4F\x4E\x4E\x45\x43\x54\x45\x44\x20\x57\x49\x54\x48\x20\x4C\x4F\x43\x41\x4C\x5F\x43\x4F\x4D\x4D\x55\x4E\x49\x43\x41\x54\x4F\x52")});LOCAL_COMMUNICATOR.on("\x72\x65\x61\x6C\x74\x69\x6D\x65",function(b,a){if(a!= ""){console.log("\x63\x68\x61\x74\x20\x64\x61\x74\x61\x20\x65\x6D\x70\x74\x79",b,a)}else {console.log("\x63\x68\x61\x74\x20\x64\x61\x74\x61\x20\x65\x6D\x70\x74\x79")}});LOCAL_COMMUNICATOR.on("\x52\x45\x54\x55\x52\x4E",function(c,a){if(c== "\x47\x45\x54\x5F\x41\x4C\x4C\x5F\x47\x41\x4D\x45\x5F\x4F\x42\x4A\x45\x43\x54\x53"){console.log(a+ "\x3C\x3C\x3C\x3C\x3C\x3C\x3C\x3C\x3C\x20\x66\x72\x6F\x6D\x20")}else {if(c== "\x4C\x4F\x41\x44\x5F\x53\x43\x52\x49\x50\x54"){console.log("\x4C\x4F\x41\x44\x5F\x53\x43\x52\x49\x50\x54\x20\x3A\x20"+ a);CALL_OR_WAIT(a)}else {if(c== "\x4C\x4F\x41\x44\x5F\x53\x43\x52\x49\x50\x54\x5F\x41\x46\x54\x45\x52\x5F\x46\x35"){}else {if(c== "\x45\x52\x52\x4F\x52"){alert("\x53\x65\x72\x76\x65\x72\x20\x73\x61\x79\x73\x20\x65\x72\x72\x6F\x72\x3A"+ a)}}}}})};function CALL_OR_WAIT(a){var a=a;setTimeout(function(){SYS.DEBUG.LOG(a+ "\x2E\x2E\x2E\x2E\x2E\x2E\x2E\x2E\x2E\x2E\x2E");if(SYS.READY== true&&  typeof a!= "\x75\x6E\x64\x65\x66\x69\x6E\x65\x64"){if(a.indexOf("\x61\x32")==  -1){setTimeout(function(){SYS.SCRIPT.LOAD(a);SYS.DEBUG.LOG("\x20\x56\x49\x53\x55\x41\x4C\x20\x53\x43\x52\x49\x50\x54\x20\x45\x58\x45\x43\x55\x54\x45\x44\x20")},100)}else {SYS.SCRIPT.LOAD(a);SYS.DEBUG.LOG("\x20\x56\x49\x53\x55\x41\x4C\x20\x53\x43\x52\x49\x50\x54\x20\x45\x58\x45\x43\x55\x54\x45\x44\x20")}}else {setTimeout(function(){CALL_OR_WAIT(a)},50)}},1)}function ADD(q,t,u,s,k,r,p){LOCAL_COMMUNICATOR.emit("\x41\x44\x44\x5F\x4E\x45\x57\x5F\x47\x41\x4D\x45\x5F\x4F\x42\x4A\x45\x43\x54",q,t,u,s,k,r,p)}function GET_ALL_GAME_OBJECTS(){LOCAL_COMMUNICATOR.emit("\x47\x45\x54\x5F\x41\x4C\x4C\x5F\x47\x41\x4D\x45\x5F\x4F\x42\x4A\x45\x43\x54\x53")}function DESTROY(q){LOCAL_COMMUNICATOR.emit("\x44\x45\x53\x54\x52\x4F\x59\x5F\x47\x41\x4D\x45\x5F\x4F\x42\x4A\x45\x43\x54",q)}function DESTROY_DELAY(q,K,p,r){LOCAL_COMMUNICATOR.emit("\x44\x45\x53\x54\x52\x4F\x59\x5F\x47\x41\x4D\x45\x5F\x4F\x42\x4A\x45\x43\x54\x5F\x57\x49\x54\x48\x5F\x44\x45\x4C\x41\x59",q,K,p,r)}function SET_NEW_START_UP_POS(q,r,p,R,S,s,k){LOCAL_COMMUNICATOR.emit("\x53\x45\x54\x5F\x4E\x45\x57\x5F\x53\x54\x41\x52\x54\x5F\x55\x50\x5F\x50\x4F\x53\x49\x54\x49\x4F\x4E",q,r,p,R,S,s,k)}function ADD_ANIMATION(q,r,p,v){LOCAL_COMMUNICATOR.emit("\x41\x44\x44\x5F\x41\x4E\x49\x4D\x41\x54\x49\x4F\x4E",q,r,p,v)}function ADD_COLLISION(q,r,p,z){LOCAL_COMMUNICATOR.emit("\x41\x44\x44\x5F\x43\x4F\x4C\x4C\x49\x53\x49\x4F\x4E",q,r,p,z)}function REMOVE_COLLISION(q,r,p){LOCAL_COMMUNICATOR.emit("\x52\x45\x4D\x4F\x56\x45\x5F\x43\x4F\x4C\x4C\x49\x53\x49\x4F\x4E",q,r,p)}function CREATE_PLAYER(q,r,p,A,J){LOCAL_COMMUNICATOR.emit("\x41\x54\x41\x43\x48\x5F\x50\x4C\x41\x59\x45\x52",q,r,p,A,J)}function DEATACH_PLAYER(q,r,p,A){LOCAL_COMMUNICATOR.emit("\x44\x45\x41\x54\x41\x43\x48\x5F\x50\x4C\x41\x59\x45\x52",q,r,p,A)}function ADD_PARTICLE(q,r,p,A){LOCAL_COMMUNICATOR.emit("\x41\x44\x44\x5F\x50\x41\x52\x54\x49\x43\x4C\x45",q,r,p,A)}function REMOVE_PARTICLE(q,r,p){LOCAL_COMMUNICATOR.emit("\x52\x45\x4D\x4F\x56\x45\x5F\x50\x41\x52\x54\x49\x43\x4C\x45",q,r,p)}function ADD_TEXTBOX(q,r,p,D,C,B,E){LOCAL_COMMUNICATOR.emit("\x41\x44\x44\x5F\x54\x45\x58\x54\x42\x4F\x58",q,r,p,D,C,B,E)}function REMOVE_TEXTBOX(q,r,p){LOCAL_COMMUNICATOR.emit("\x52\x45\x4D\x4F\x56\x45\x5F\x54\x45\x58\x54\x42\x4F\x58",q,r,p)}function ADD_WEBCAM(q,r,p,H,I,G,F){LOCAL_COMMUNICATOR.emit("\x41\x44\x44\x5F\x57\x45\x42\x43\x41\x4D",q,r,p,H,I,G,F)}function REMOVE_WEBCAM(q,r,p){LOCAL_COMMUNICATOR.emit("\x52\x45\x4D\x4F\x56\x45\x5F\x57\x45\x42\x43\x41\x4D",q,r,p)}function SET_MAIN_INTERVAL(q,r,p,h,Q){LOCAL_COMMUNICATOR.emit("\x53\x45\x54\x5F\x4D\x41\x49\x4E\x5F\x49\x4E\x54\x45\x52\x56\x41\x4C",r,h,Q)}