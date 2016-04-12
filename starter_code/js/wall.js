/* global $ */


$(document).ready(function()
{

	$("#post-btn").click(function() {
		var message = '<br/><div class="row"><div class="col-md-2"><img src="http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-7.jpg" width="100px"></div><div class="col-md-10">'; 
		message += "<h3>Imani Greenidge</h3>";
		message += $("#message").val();
		message += '</div></div>';
		$("#wall").prepend(message);
		
	});
	// YOUR CODE GOES HERE
});
