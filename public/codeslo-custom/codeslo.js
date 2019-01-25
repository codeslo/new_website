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

  
//<!-- Load Facebook SDK for JavaScript -->
//<%# !!!!! FB.init NEEDS CONFIG !!!!! %>  
window.fbAsyncInit = function() {
  FB.init({
  appId            : '327597658099100',
  autoLogAppEvents : true,
  xfbml            : true,
  version          : 'v2.10'
  });
  FB.AppEvents.logPageView();
};

(function(d, s, id){
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {return;}
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

function getMeta(metaName) {
  const metas = document.getElementsByTagName('meta');

  for (let i = 0; i < metas.length; i++) {
    if (metas[i].getAttribute('property') === metaName) {
      return metas[i].getAttribute('content');
    }
  }  
  return '';
}

let articleLink = getMeta('og:url');

//  <%# !!!!! href NEEDS CONFIG !!!!! %>
document.getElementById('shareBtn').onclick = function() {
  FB.ui({
  method: 'share',
  display: 'popup',
  href: articleLink,
  }, function(response){});
};
