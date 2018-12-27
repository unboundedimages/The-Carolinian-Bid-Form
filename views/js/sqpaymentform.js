// 'use strict;'
let appID = document.getElementById('appId').innerHTML;

// console.log("this is appID: ", appID.reC)

/*
 * function: requestCardNonce
 *
 * requestCardNonce is triggered when the "Pay with credit card" button is
 * clicked
 *
 * Modifying this function is not required, but can be customized if you
 * wish to take additional action when the form button is clicked.
 */
function requestCardNonce(event) {

  // Don't submit the form until SqPaymentForm returns with a nonce
  event.preventDefault();

  // Request a nonce from the SqPaymentForm object
  paymentForm.requestCardNonce();
}

// Create and initialize a payment form object
let paymentForm = new SqPaymentForm({

  // Initialize the payment form elements
  applicationId: applicationId,
  // applicationId: appID[0],
  inputClass: 'sq-input',

  // Customize the CSS for SqPaymentForm iframe elements
  inputStyles: [{
      fontSize: '.9em'
  }],

  // Initialize the credit card placeholders
  cardNumber: {
    elementId: 'sq-card-number',
    placeholder: '•••• •••• •••• ••••'
  },
  cvv: {
    elementId: 'sq-cvv',
    placeholder: 'CVV'
  },
  expirationDate: {
    elementId: 'sq-expiration-date',
    placeholder: 'MM/YY'
  },
  postalCode: {
    elementId: 'sq-postal-code'
  },

  // SqPaymentForm callback functions
  callbacks: {
    cardNonceResponseReceived: function(errors, nonce, cardData, billingContact, shippingContact) {
      function launch_toast2() {
        var x = document.getElementById("toast2")
        x.className = "show";
        x.hidden = false;
        setTimeout(function(){ 
          x.className = x.className.replace("show", ""); 
          x.hidden = true;
        }, 5000);
    }
    function shake(){
      var sha= {
        cardnumber: document.getElementById("sq-card-number"),
        cvv: document.getElementById("sq-cvv"),
        expiration: document.getElementById("sq-expiration-date"),
        zipcode: document.getElementById("sq-postal-code"),

      }
        sha.cardnumber.classList.add('shake-in');
        sha.cvv.classList.add('shake-in');
        sha.expiration.classList.add('shake-in');
        sha.zipcode.classList.add('shake-in');
         setTimeout(function() {
        sha.cardnumber.classList.remove('shake-in');   
        sha.cvv.classList.remove('shake-in'); // Remove .fade-in class
        sha.expiration.classList.remove('shake-in');
        sha.zipcode.classList.remove('shake-in');
      }, 1000);
    } 
      if (errors) {
        launch_toast2()
        shake()
        // Log errors from nonce generation to the Javascript console
        console.log("Encountered errors:");
        errors.forEach(function(error) {
          console.log('  ' + error.message);
        });

        return;
      }

      // Assign the nonce value to the hidden form field
      document.getElementById('card-nonce').value = nonce;

      // POST the nonce form to the payment processing page
      document.getElementById('nonce-form').submit();

    }
  }
});