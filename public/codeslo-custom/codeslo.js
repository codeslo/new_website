$("input[name=contactform-ind-org]").change(function() {     
    if($("#individual").is(":checked")) {
        $("#modal-contactform-org").addClass("hidden");                		
    }
    else {
        $("#modal-contactform-org").removeClass("hidden");				
    }		 
    resetAll();       
});