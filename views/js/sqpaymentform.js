"use strict";
var applicationId = "sq0idp-JhgseKPGUJdRedabr7S9yQ";
let appID = document.getElementById("appId").innerHTML;

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
  // locationId: locationId,
  // applicationId: appID[0],
  inputClass: "sq-input",

  // Customize the CSS for SqPaymentForm iframe elements
  inputStyles: [
    {
      fontSize: ".9em"
    }
  ],

  // Initialize the credit card placeholders
  cardNumber: {
    elementId: "sq-card-number",
    placeholder: "•••• •••• •••• ••••"
  },
  cvv: {
    elementId: "sq-cvv",
    placeholder: "CVV"
  },
  expirationDate: {
    elementId: "sq-expiration-date",
    placeholder: "MM/YY"
  },
  postalCode: {
    elementId: "sq-postal-code",
    placehoder: "12345"
  },
  callbacks: {
    cardNonceResponseReceived: function(
      errors,
      nonce,
      cardData,
      billingContact,
      shippingContact
    ) {
      if (errors) {
        var error_html = "";
        for (var i = 0; i < errors.length; i++) {
          error_html += "<li> " + errors[i].message + " </li>";
        }
        document.getElementById("error").innerHTML = error_html;
        document.getElementById("sq-creditcard").disabled = false;

        return;
      } else {
        document.getElementById("error").innerHTML = "";
      }

      // Assign the nonce value to the hidden form field
      document.getElementById("card-nonce").value = nonce;

      // POST the nonce form to the payment processing page
      document.getElementById("nonce-form").submit();
    },
    inputEventReceived: function(inputEvent) {
      switch (inputEvent.eventType) {
        case "focusClassAdded":
          /* HANDLE AS DESIRED */
          break;
        case "focusClassRemoved":
          /* HANDLE AS DESIRED */
          break;
        case "errorClassAdded":
          document.getElementById("error").innerHTML =
            "Please fix card information errors before continuing.";
          break;
        case "errorClassRemoved":
          /* HANDLE AS DESIRED */
          document.getElementById("error").innerHTML = " ";
          break;
        case "cardBrandChanged":
          /* HANDLE AS DESIRED */
          break;
        case "postalCodeChanged":
          /* HANDLE AS DESIRED */
          break;
      }
    }
  }
});
