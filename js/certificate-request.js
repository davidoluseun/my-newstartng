(function() {

  "use strict";

  // jQuery document ready fn
  $(function() {

      // Bootstrap form validation
      // Fetch the form to apply custom Bootstrap validation style to
      var forms = document.getElementsByClassName("cert-request");

      // Loop over it and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
          form.addEventListener("submit", function(event) {
              if (form.checkValidity() === false) {
                  event.preventDefault();
                  event.stopPropagation();
              }
              form.classList.add("was-validated");
          }, false);
      });

  }); // jQuery document ready function

})(); // Immediately Invoked Function Expression (IIFE)