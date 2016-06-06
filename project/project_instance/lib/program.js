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
function PROGRAM(s,c){var mg=this;this.DRAW_INTERVAL=APPLICATION.PROGRAM.RENDER_SPEED;this.UPDATE_INTERVAL=15;this.BASELINE="\x6D\x69\x64\x64\x6C\x65";this.GLOBAL_TRANSLATE=0;this.DO_GLOBAL_TRANSLATE=false;mg.TRANSLATE=function(A){mg.GLOBAL_TRANSLATE=A;mg.DO_GLOBAL_TRANSLATE=true};this.GAME_MAP=function(){var mh=this;this.TOTAL_LEFT=2;this.TOTAL_RIGHT=4;this.TOTAL_UP=2;this.TOTAL_DOWN=4;this.LEFT=function(){return mh.TOTAL_LEFT*-VIEW.W()};this.WIDTH=function(){return mh.TOTAL_RIGHT*VIEW.W()};this.UP=function(){return mh.TOTAL_UP*-VIEW.H()};this.HEIGHT=function(){return mh.TOTAL_DOWN*VIEW.W()}};mg.MAP= new mg.GAME_MAP();this.AUTO_UPDATE= new Array();this.ENGINE= new ENGINE(c);s.textAlign="\x73\x74\x61\x72\x74";s.textBaseline=this.BASELINE;this.DRAW=function(){s.clearRect(mg.MAP.LEFT(),mg.MAP.UP(),mg.MAP.WIDTH(),mg.MAP.HEIGHT());if(mg.DO_GLOBAL_TRANSLATE==true){mg.DO_GLOBAL_TRANSLATE=false;s.translate(mg.GLOBAL_TRANSLATE,0)};mg.ENGINE.DRAW_MODULES(s);setTimeout(function(){mg.UPDATE()},this.UPDATE_INTERVAL)};this.UPDATE=function(){mg.ENGINE.UPDATE_MODULES();for(var A=0;A<this.AUTO_UPDATE;A++){ROOT.AUTO_UPDATE[A].UPDATE()};setTimeout(function(){mg.DRAW()},this.DRAW_INTERVAL)}}