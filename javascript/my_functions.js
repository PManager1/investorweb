$(document).ready(function(){
    $("#togmnt").click(function(){
    	console.log('click function called');
    	$("#monthly").show();
    	$("#yearly").hide();
    	// $(this).removeClass("monthly").addClass();
    	// $("#togyr").removeClass().addClass();
    });
    $("#togyr").click(function(){
    	console.log('click function called');
    	$("#monthly").hide();
    	$("#yearly").show();
    	// $(this).removeClass("").addClass("annual");
    	// $("#togmnt").removeClass().addClass();
    });
});