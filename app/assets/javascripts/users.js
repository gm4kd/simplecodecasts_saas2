$(document).on('turbolinks:load', function(){



  Stripe.setPublishableKey( $('meta[name="stripe-key"]').attr('content') );

  //When user clicks form submit btn,
  $("#form-submit-btn").click(function(event){
    setTimeout(alert("4 seconds"),4000);
    //prevent default submission behavior.
    event.preventDefault();
    $("#form-submit-btn").val("Processing").prop('disabled', true);
    //Collect the credit card fields.
    var ccNum = $('#card_number').val(),
        cvcNum = $('#card_code').val(),
        expMonth = $('#card_month').val(),
        expYear = $('#card_year').val();
    
    if(!error) {
      // get the stripe token
      Stripe.createToken({
        number: cdNum,
        cvc: cvcNum,
        exp_month: expMonth,
        exp_year: expYear
        }, stripeResponseHandler);
    }
    
    return false;
  }); // form submission
  
  function stripeResponseHandler(status, response) {
    // get a reference to the form:
    var f = $("#new_user");
    
    // get the token from the response
    var token = response.id;
    
    // Add the token to the form:
    f.append('<input type="hidden" name= "user[stripe_card_token]" value"' + token + '" />'); 
    
    //Submit form
    f.get(0).submit();
  }
});
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
