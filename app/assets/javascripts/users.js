$(document).ready(function () {
  Stripe.setPublishableKey($('meta[name="stripe-key"]').attr('content'));
  //Watch for a form submission
  $("#form-submit-btn").click(function(event) {
    event.preventDefault();
    $('input(type=submit)').prop('disabled', true);
    var error = false;
    var cdNum = $('#card_number').val(),
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
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
