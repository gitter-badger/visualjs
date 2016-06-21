  



if (APPLICATION.MULTIRTC_PEER == true) {
	
	  TEST = new SYS.XML.READ ('lib/webrtc/public/index.html');
	
		SYS.SCRIPT.LOAD("lib/webrtc/public/RTCMultiConnection2.2.js")
		SYS.SCRIPT.LOAD("lib/webrtc/public/linkify.js")
	
	     window['MAIN_PEER'] = new Object();
		 window['MAIN_PEER'] = new Object();
		 window['MAIN_PEER'].ADDRESS = 'localhost';
		 
		 
	  ACTIVATE_PEER = function (){
		  
		  if (SYS.DOM.E('RTC_HELP').innerHTML == '') {
			  
		   SYS.DOM.E('RTC_HELP').innerHTML =  TEST.DONE();
			  
		  }
		   
 setTimeout (function(){
			
		
	 if ( typeof RTCMultiConnection == 'function'   &&  typeof rtcMultiConnection == 'undefined'  && typeof getElement == 'function' ) {
		
			
        SYS.SCRIPT.LOAD("lib/webrtc/public/ui.peer-connection.js")
		
		document.querySelector('#message-sound').src =  SYS.SOUND.RES.SOUNDS[0].src;

        SYS.SCRIPT.LOAD("lib/webrtc/public/ui.users-list.js")
        SYS.SCRIPT.LOAD("lib/webrtc/public/ui.settings.js")
        SYS.SCRIPT.LOAD("lib/webrtc/public/ui.share-files.js")
		
		 
		}
		else{
				
		SYS.SCRIPT.LOAD("lib/webrtc/public/ui.main.js");
		ACTIVATE_PEER()
			
		}

		}, 150);

	};

}


document.body.style.WebkitTransform = 'scale(1)';
document.body.style.overflow = "hidden";


function system_ready_check(){
	
if (typeof GET_ALL_GAME_OBJECTS !== 'undefined') {
	
setTimeout(function(){

	//################################################################
	// IMPORTANT - make stable system 100%
	//################################################################
	while(RESOURCE.SUM == 0 && typeof KEYBOARD != 'function')
	{console.log("res not ready");}
	
    SYS.DEBUG.LOG("SYS : DOM readyState is load.")
	SYS.READY = true;
	
if (APPLICATION.STATUS == "production" )
{
	SYS.DEBUG.LOG("APPLICATION.STATUS : production")
	SYS.SCRIPT.LOAD("starter/visual.js")
}
else if (APPLICATION.STATUS == "develop" )
{
   SYS.DEBUG.LOG("APPLICATION.STATUS : develop");
   GET_ALL_GAME_OBJECTS()
}	
	

if (APPLICATION.ACCOUNT_SERVICE_AUTO_RUN == true){
	ACCOUNT_SYSTEM.CONNECT();	
}

	
}, 10);

}else {
	
	setTimeout( system_ready_check , 25 );
	
}


}


system_ready_check()
 

 
 
 