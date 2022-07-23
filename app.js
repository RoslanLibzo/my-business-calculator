const calculatorForm = document.getElementById("calculate");
const forms = document.querySelectorAll('.needs-validation');
const amazonUsPaymentDollar = document.getElementById("amazonUsPaymentDollar");
const amazonUsPaymentPound = document.getElementById("amazonUsPaymentPound");
const combinedAmazonUsPayment = document.getElementById("combinedAmazonUsPayment");
const aslanAmazonUsPayment = document.getElementById("aslanAmazonUsPayment");
const roslanAmazonUsPayment = document.getElementById("roslanAmazonUsPayment");
const aslanAmazonUsPoundTotal = document.getElementById("aslanAmazonUsPoundTotal");
const roslanAmazonusPoundTotal = document.getElementById("roslanAmazonUsPoundTotal");
//CA Values (amazon Income + What Profit came to bank in pounds)
const amazonCaPaymentDollar = document.getElementById("amazonCaPaymentDollar");
const amazonCaPaymentPound = document.getElementById("amazonCaPaymentPound");
//Other CA Field Values
const aslanAmazonCaPayment = document.getElementById("aslanAmazonCaPayment");
const roslanAmazonCaPayment = document.getElementById("roslanAmazonCaPayment");
const combinedAmazonCaPayment = document.getElementById("combinedAmazonCaPayment");
//CA After Calculation Value fields
const aslanAmazonCaPoundTotal = document.getElementById("aslanAmazonCaPoundTotal");
const roslanAmazonCaPoundTotal = document.getElementById("roslanAmazonCaPoundTotal");
//Amazon UK Values  INCOME + Each Person's Income + Combined Income
const amazonUkPaymentPound = document.getElementById("amazonUkPaymentPound");
const aslanAmazonUkPayment = document.getElementById("aslanAmazonUkPayment");
const roslanAmazonUkPayment = document.getElementById("roslanAmazonUkPayment");
const combinedAmazonUkPayment = document.getElementById("combinedAmazonUkPayment");
//UK After calculation Value fields
const aslanAmazonUkPoundTotal = document.getElementById("aslanAmazonUkPoundTotal");
const roslanAmazonUkPoundTotal = document.getElementById("roslanAmazonUkPoundTotal");



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
      // Calculating US Payments Section
        let amazonUsConversion = await calcConversion(amazonUsPaymentDollar.value, amazonUsPaymentPound.value);
        let usCombinedPayment = await convert(amazonUsConversion, combinedAmazonUsPayment.value);
        let usCombinedPaymentSplit = await usCombinedPayment / 2 ;
        let roslanUsPaymentPound = await convert(amazonUsConversion, roslanAmazonUsPayment.value);
        let roslanUsPayment = await roslanUsPaymentPound + usCombinedPaymentSplit;
        let aslanUsPaymentPound = await convert(amazonUsConversion, aslanAmazonUsPayment.value);
        let aslanUsPayment = await aslanUsPaymentPound + usCombinedPaymentSplit;
        // Show Calculated Values 
        aslanAmazonUsPoundTotal.innerText = "£" + aslanUsPayment
        roslanAmazonusPoundTotal.innerText = "£" + roslanUsPayment
        // Amazon CA Calculations
        let amazonCaConversion = await calcConversion(amazonCaPaymentDollar.value, amazonCaPaymentPound.value);
        let caCombinedPayment = await convert(amazonCaConversion, combinedAmazonCaPayment.value);
        let caCombinedPaymentSplit = await caCombinedPayment / 2 ; 
        let roslanCaPaymentPound = await convert(amazonCaConversion, roslanAmazonCaPayment.value);
        let roslanCaPayment = await roslanCaPaymentPound + caCombinedPaymentSplit;
        let aslanCaPaymentPound = await convert(amazonCaConversion, aslanAmazonCaPayment.value);
        let aslanCaPayment = await aslanCaPaymentPound + caCombinedPaymentSplit; 
        // Show CA Calculated Values
        aslanAmazonCaPoundTotal.innerText = "£" + aslanCaPayment ;
        roslanAmazonCaPoundTotal.innerText = "£" + roslanCaPayment ;
        // Calculating Amazon UK Payments
        let ukCombinedPayment = await combinedAmazonUkPayment.value;
        let ukCombinedPaymentSplit = await ukCombinedPayment / 2 ;
        let aslanUkPayment = await parseInt(aslanAmazonUkPayment.value) + ukCombinedPaymentSplit;
        let roslanUkPayment = await parseInt(roslanAmazonUkPayment.value) + ukCombinedPaymentSplit;
        // Show UK Calculated Values
        aslanAmazonUkPoundTotal.innerText = "£" + aslanUkPayment;
        roslanAmazonUkPoundTotal.innerText = "£" + roslanUkPayment;
        }
    calcEverything();


});
