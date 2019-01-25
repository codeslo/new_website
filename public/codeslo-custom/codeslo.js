//Add organization name field to contact modal when organization is selected
$("input[name=contactform_ind_org]").change(function() {     
    if($("#individual").is(":checked")) {
        $("#modal-contactform-org").addClass("hidden");                		
    }
    else {
        $("#modal-contactform-org").removeClass("hidden");				
    }		 
    //resetAll();       
});

//Disable form submissions if there are invalid fields
(function() {
    'use strict';
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();
  
//Initialize and setup Facebook SDK   
window.fbAsyncInit = function() {
  FB.init({
  appId            : '327597658099100',
  autoLogAppEvents : true,
  xfbml            : true,
  version          : 'v2.10'
  });
  FB.AppEvents.logPageView();
};

// Load Facebook SDK for JavaScript
(function(d, s, id){
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {return;}
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

//FB Share button popup
let articleLink = document.querySelector("meta[property='og:url']").getAttribute("content");
document.getElementById('shareBtn').onclick = function() {
  FB.ui({
  method: 'share',
  display: 'popup',
  href: articleLink
  }, function(response){});
};
