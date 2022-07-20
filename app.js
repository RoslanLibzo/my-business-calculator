const calculatorForm = document.getElementById("calculate");
const forms = document.querySelectorAll('.needs-validation');
const amazonUsPaymentDollar = document.getElementById("amazonUsPaymentDollar");
const amazonUsPaymentPound = document.getElementById("amazonUsPaymentPound");
const combinedAmazonUsPayment = document.getElementById("combinedAmazonUsPayment");
const aslanAmazonUsPayment = document.getElementById("aslanAmazonUsPayment");
const roslanAmazonUsPayment = document.getElementById("roslanAmazonUsPayment");


// Calculate conversion from Currency Dollar payment to Currency
function calcConversion(otherCurrency, pound){
    return otherCurrency / pound
};

// Convert Money from currency to Pound using Conversion rate to Pound and Money to convert
function convert(conversionRate, amountToConvert){
    return amountToConvert / conversionRate
};




// Loop over them and prevent submission
Array.from(forms).forEach(form => {
  form.addEventListener('submit', event => {
    if (!form.checkValidity()) {
      event.preventDefault()
      event.stopPropagation()
    }

    form.classList.add('was-validated')
  }, false)
})



// Calculate Everything
calculatorForm.addEventListener("submit", function (event){
	// stop form submission
	event.preventDefault();
    let calcEverything = async calculateEverything => {
        let amazonUsConversion = await calcConversion(amazonUsPaymentDollar.value, amazonUsPaymentPound.value);
        
        let usCombinedPayment = await convert(amazonUsConversion, combinedAmazonUsPayment.value);
        let usCombinedPaymentSplit = await usCombinedPayment / 2 ;
        let roslanUsPaymentPound = await convert(amazonUsConversion, roslanAmazonUsPayment.value) ;
        let roslanUsPayment = await roslanUsPaymentPound + usCombinedPaymentSplit;
        let aslanUsPaymentPound = await convert(amazonUsConversion, aslanAmazonUsPayment.value);
        let aslanUsPayment = await aslanUsPaymentPound + usCombinedPaymentSplit;
        console.log(amazonUsConversion)
        console.log(roslanUsPayment + "Roslan Us Payment")
        console.log(aslanUsPayment + "Aslan Us Payment")
        
        
    }
    calcEverything();


});
