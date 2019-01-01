$("input[name=contactform_ind_org]").change(function() {     
    if($("#individual").is(":checked")) {
        $("#modal-contactform-org").addClass("hidden");                		
    }
    else {
        $("#modal-contactform-org").removeClass("hidden");				
    }		 
    resetAll();       
});