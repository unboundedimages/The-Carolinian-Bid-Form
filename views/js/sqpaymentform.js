// var applicationId = "sandbox--";
var applicationId = "-";

// Set the location ID
// var locationId = "";
var locationId = "";

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
var paymentForm = new SqPaymentForm({

  // Initialize the payment form elements
  applicationId: applicationId,
  // applicationId: keys.getArr(),
  locationId: locationId,
  // locationId: keys.getArr(),
  inputClass: 'sq-input',

  // Customize the CSS for SqPaymentForm iframe elements
  inputStyles: [{
      fontSize: '.9em'
  }],

  // Initialize Apple Pay placeholder ID
  // applePay: {
  //   elementId: 'sq-apple-pay'
  // },

  // Initialize Google Pay placeholder ID
  // googlePay: {
  //   elementId: 'sq-google-pay'
  // },

  // Initialize Masterpass placeholder ID
  // masterpass: {
  //   elementId: 'sq-masterpass'
  // },

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

    /*
     * callback function: methodsSupported
     * `methodsSupported` will be called multiple times, once for each digital
     * wallet you want to enable.
     * The `methods` object will contain a single key (applePay, googlePay or
     * masterpass) with a boolean value indicating whether the digital wallet
     * is enabled or not. For example, if Google Pay is available, `methods`
     * will be the object: {googlePay: true}.
     */
    // methodsSupported: function (methods) {

    //   var applePayBtn = document.getElementById('sq-apple-pay');
    //   var googlePayBtn = document.getElementById('sq-google-pay');
    //   var masterpassBtn = document.getElementById('sq-masterpass');

    //   // Only show the button if Apple Pay on the Web is enabled
    //   // Otherwise, display the wallet not enabled message.
    //   if (methods.applePay === true) {
    //     applePayBtn.style.display = 'inline-block';
    //   }

    //   // Only show the button if Google Pay is enabled
    //   if (methods.googlePay === true) {
    //     googlePayBtn.style.display = 'inline-block';
    //   }

    //   // Only show the button if Masterpass is enabled
    //   // Otherwise, display the wallet not enabled message.
    //   if (methods.masterpass === true) {
    //     masterpassBtn.style.display = 'inline-block';
    //   }
    // },

    /*
     * callback function: createPaymentRequest
     * Triggered when: a digital wallet payment button is clicked.
     */
    createPaymentRequest: function () {
      var paymentRequestJson = {
        requestShippingAddress: true,
        requestBillingInfo: true,
        shippingContact: {
          familyName: "CUSTOMER LAST NAME",
          givenName: "CUSTOMER FIRST NAME",
          email: "mycustomer@example.com",
          country: "USA",
          region: "CA",
          city: "San Francisco",
          addressLines: [
            "1455 Market St #600"
          ],
          postalCode: "94103",
          phone:"14255551212"
        },
        currencyCode: "USD",
        countryCode: "US",
        total: {
          label: "MERCHANT NAME",
          amount: "85.00",
          pending: false
        },
        lineItems: [
          {
            label: "Subtotal",
            amount: "60.00",
            pending: false
          },
          {
            label: "Shipping",
            amount: "19.50",
            pending: true
          },
          {
            label: "Tax",
            amount: "5.50",
            pending: false
          }
        ]
      };
      return paymentRequestJson;
    },

    /*
     * callback function: cardNonceResponseReceived
     * Triggered when: SqPaymentForm completes a card nonce request
     */
    
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
