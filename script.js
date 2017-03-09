$(function(){

	//button
  	$("button").click(function(){
	    prompt("Please enter your account", "XXX-XXXX-XXXX");
	    prompt("Please enter your password", "XXXXXXXXXX");
	    alert("Bidding succesfully !");    
      });

	//輪播
	$('#jumbo1').cycle({   
        fx:    'fade',  //特效           
        speed:  1200,
        timeout:  200,
    });

	$('#auction').cycle({   
        fx:    'scrollRight',  //特效           
        speed:  750,
        pause: 1,
        timeout:  200,
    });    

	
	//倒數計時
	var note = $('#note'),
		ts = new Date(2012, 0, 1),
		newYear = true;
	
	if((new Date()) > ts){
		// The new year is here! Count towards something else.
		// Notice the *1000 at the end - time must be in milliseconds
		ts = (new Date()).getTime() + 10*24*60*60*1000;
		newYear = false;
	}
		
	$('#countdown').countdown({
		timestamp	: ts,
		callback	: function(days, hours, minutes, seconds){
			
			var message = "";
			
			message += days + " day" + ( days==1 ? '':'s' ) + ", ";
			message += hours + " hour" + ( hours==1 ? '':'s' ) + ", ";
			message += minutes + " minute" + ( minutes==1 ? '':'s' ) + " and ";
			message += seconds + " second" + ( seconds==1 ? '':'s' ) + " <br />";
			
			if(newYear){
				message += "left until the new year!";
			}
			else {
				message += "left to 10 days from now!";
			}
			
			note.html(message);
		}
	});



	//coming auction 閃爍
 	function bling(){        
        $("#coming").fadeTo('slow', 1.5);
        $("#coming").fadeTo('normal', 0.3);
        $("#coming").fadeTo('normal', 1.5);        
        setTimeout(bling,500);  
    };
    bling(); 



	  
	
});

