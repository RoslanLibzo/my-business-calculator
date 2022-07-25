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
//Youtube Income in Dollar + In Pound for conversion Rate
const youtubePaymentDollar = document.getElementById("youtubePaymentDollar");
const youtubePaymentPound = document.getElementById("youtubePaymentPound");
//Youtube Aslan / Roslan Income Fields
const aslanYoutubeDollarPayment = document.getElementById("aslanYoutubeDollarPayment");
const roslanYoutubeDollarPayment = document.getElementById("roslanYoutubeDollarPayment");
//Youtube After Calculation Fields
const aslanYoutubePoundTotal = document.getElementById("aslanYoutubePoundTotal");
const roslanYoutubePoundTotal = document.getElementById("roslanYoutubePoundTotal");
//Business Tax for Subscriptions (Deductions from Business Money)
const businessTax = document.getElementById("businessTax");
//Total Income Fields
const aslanTotalIncome = document.getElementById("aslanTotalIncome");
const roslanTotalIncome = document.getElementById("roslanTotalIncome");
//Dates
const dateOfPayment = document.getElementById("dateOfPayment");
const amazonRangeDate = document.getElementById("amazonRangeDate");
const youtubeRangeDate = document.getElementById("youtubeRangeDate");
//Amazon EU Field
const amazonEu = document.getElementById("amazonEu")





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
        amazonUsConversion = await calcConversion(amazonUsPaymentDollar.value, amazonUsPaymentPound.value);
        usCombinedPayment = await convert(amazonUsConversion, combinedAmazonUsPayment.value);
        usCombinedPaymentSplit = await usCombinedPayment / 2 ;
        roslanUsPaymentPound = await convert(amazonUsConversion, roslanAmazonUsPayment.value);
        roslanUsPayment = await roslanUsPaymentPound + usCombinedPaymentSplit;
        aslanUsPaymentPound = await convert(amazonUsConversion, aslanAmazonUsPayment.value);
        aslanUsPayment = await aslanUsPaymentPound + usCombinedPaymentSplit;
        // Show Calculated Values 
        aslanAmazonUsPoundTotal.innerText = "£" + aslanUsPayment
        roslanAmazonusPoundTotal.innerText = "£" + roslanUsPayment
        // Amazon CA Calculations
        amazonCaConversion = await calcConversion(amazonCaPaymentDollar.value, amazonCaPaymentPound.value);
        caCombinedPayment = await convert(amazonCaConversion, combinedAmazonCaPayment.value);
        caCombinedPaymentSplit = await caCombinedPayment / 2 ; 
        roslanCaPaymentPound = await convert(amazonCaConversion, roslanAmazonCaPayment.value);
        roslanCaPayment = await roslanCaPaymentPound + caCombinedPaymentSplit;
        aslanCaPaymentPound = await convert(amazonCaConversion, aslanAmazonCaPayment.value);
        aslanCaPayment = await aslanCaPaymentPound + caCombinedPaymentSplit; 
        // Show CA Calculated Values
        aslanAmazonCaPoundTotal.innerText = "£" + aslanCaPayment ;
        roslanAmazonCaPoundTotal.innerText = "£" + roslanCaPayment ;
        // Calculating Amazon UK Payments
        ukCombinedPayment = await combinedAmazonUkPayment.value;
        ukCombinedPaymentSplit = await ukCombinedPayment / 2 ;
        aslanUkPayment = await parseInt(aslanAmazonUkPayment.value) + ukCombinedPaymentSplit;
        roslanUkPayment = await parseInt(roslanAmazonUkPayment.value) + ukCombinedPaymentSplit;
        // Show UK Calculated Values
        aslanAmazonUkPoundTotal.innerText = "£" + aslanUkPayment;
        roslanAmazonUkPoundTotal.innerText = "£" + roslanUkPayment;
        //Calculate Youtube Payments
        youtubeConversion = await calcConversion(youtubePaymentDollar.value, youtubePaymentPound.value);
        aslanYoutubePayment = parseInt(aslanYoutubeDollarPayment.value) / youtubeConversion;
        roslanYoutubePayment = parseInt(roslanYoutubeDollarPayment.value) / youtubeConversion;
        //Show Youtube Calculated Values
        aslanYoutubePoundTotal.innerText = "£" + aslanYoutubePayment;
        roslanYoutubePoundTotal.innerText = "£" + roslanYoutubePayment;
        //Amazon EU Per person
        amazonEuPerPerson = parseInt(amazonEu.value) / 2
        // Final Calculations of Each Person's Profits
        aslanIncome = await parseInt(aslanYoutubePayment) + parseInt(aslanUkPayment) + parseInt(aslanCaPayment) + parseInt(aslanUsPayment) - parseInt(businessTax.value/2) + amazonEuPerPerson;
        roslanIncome = await parseInt(roslanYoutubePayment) + parseInt(aslanUkPayment) + parseInt(aslanCaPayment) + parseInt(aslanUsPayment) - parseInt(businessTax.value/2) + amazonEuPerPerson;
        aslanTotalIncome.innerText = "£" + aslanIncome
        roslanTotalIncome.innerText = "£" + roslanIncome
        }
    calcEverything();


});
window.jsPDF = window.jspdf.jsPDF
function pdfExport(){
  const doc = new jsPDF();
  doc.setFontSize(12);
  doc.text("Monthly Business Accounts for Luigi's Product reviews produced on date: " + dateOfPayment.value, 15, 15)
  doc.setFontSize(10);
  doc.text("Amazon Date-Range of Earnings Used for This Reciept: " + amazonRangeDate.value, 20, 30);
  doc.text("Youtube Date-Range of Earnings Used for this Reciept: " + youtubeRangeDate.value, 20, 35);
  doc.text("Amazon US Payment in Dollars: $" + amazonUsPaymentDollar.value, 20, 45);
  doc.text("Amazon US Payment in Pounds: £" + amazonUsPaymentPound.value, 20, 50);
  doc.text("Amazon US Conversion Rate: " + amazonUsConversion, 20, 55);
  doc.text("Aslan's Payment In Dollars $" + aslanAmazonUsPayment.value, 20, 65);
  doc.text("Roslan's Payment In Dollars $" + roslanAmazonUsPayment.value, 20, 70);
  doc.text("Combined Payment In Dollars $" + combinedAmazonUsPayment.value, 20, 75);
  doc.text("Aslan's Payment In Pounds £" + parseInt(aslanUsPaymentPound), 20, 85);
  doc.text("Roslan's Payment In Pounds £" + parseInt(roslanUsPaymentPound), 20, 90);
  doc.text("Combined Payment In Pounds £" + parseInt(usCombinedPayment), 20, 95);
  doc.setTextColor(139, 0, 0);
  doc.text("Aslan's Amazon US Payment in Pounds + Combined Payment £" + parseInt(aslanUsPayment), 20, 105);
  doc.text("Roslan's Amazon US Payment in Pounds + Combined Payment £" + parseInt(roslanUsPayment), 20, 110);
  doc.setTextColor(0, 0, 0);
  doc.text("Amazon CA Payment in CA Dollar $" + amazonCaPaymentDollar.value, 20, 120);
  doc.text("Amazon CA Payment in Pounds £" + amazonCaPaymentPound.value, 20, 125);
  doc.text("Amazon CA Conversion Rate: " + amazonCaConversion, 20, 130);
  doc.text("Aslan's Payment in Dollars CA $" + aslanAmazonCaPayment.value, 20, 140);
  doc.text("Roslan's Payment in Dollars CA $" + roslanAmazonCaPayment.value, 20, 145);
  doc.text("Combined Payment in Dollars CA $" + combinedAmazonCaPayment.value, 20, 150);
  doc.text("Aslan's Payment in Pounds £" + parseInt(aslanCaPaymentPound), 20, 160);
  doc.text("Roslan's Payment in Pounds £" + parseInt(roslanCaPaymentPound), 20, 165);
  doc.text("Combined Payment In Pounds £" + parseInt(caCombinedPayment), 20, 170);
  doc.setTextColor(0, 0, 130);
  doc.text("Aslan's Amazon CA Payment in Pounds + Combined Payment £" + parseInt(aslanCaPayment), 20, 180);
  doc.text("Roslan's Amazon CA Payment in Pounds + Combined Payment £" + parseInt(roslanCaPayment), 20, 185);
  doc.setTextColor(0, 0, 0);
  doc.text("Amazon UK Payment in Pounds: £" + amazonUkPaymentPound.value, 20, 195);
  doc.text("Aslan's Amazon UK Payment in Pounds £" + aslanAmazonUkPayment.value, 20, 200);
  doc.text("Roslan's Amazon UK Payment in Pounds £" + roslanAmazonUkPayment.value, 20, 205);
  doc.text("Roslan and Aslan Combined Amazon Payment £" + parseInt(ukCombinedPayment), 20, 210);
  doc.setTextColor(0, 139, 0);
  doc.text("Aslan's Amazon UK Payment Total With Combined: £" + parseInt(aslanUkPayment), 20, 215);
  doc.text("Roslan's Amazon UK Payment Total With Combined: £" + parseInt(roslanUkPayment), 20, 220);
  doc.setTextColor(0, 0, 0);
  doc.text("Youtube Payment in Dollars $" + youtubePaymentDollar.value, 20, 230);
  doc.text("Youtube Payment in Pounds £" + youtubePaymentPound.value , 20, 235);
  doc.text("Youtube Conversion Rate : " + youtubeConversion, 20, 240);
  doc.text("Aslan's Youtube Payment Dollars $" + aslanYoutubeDollarPayment.value, 20, 245);
  doc.text("Roslan's Youtube Payment Dollars $" + roslanYoutubeDollarPayment.value , 20, 250);
  doc.setTextColor(139, 0, 0);
  doc.text("Aslan's Youtube Payment Pounds £" + parseInt(aslanYoutubePayment), 20, 255);
  doc.text("Roslan's Youtube Payment Pounds £" + parseInt(roslanYoutubePayment), 20, 260);
  doc.setTextColor(0, 0, 0);
  doc.text("Business Tax in Pound (Deduct half from each person) £"+ businessTax.value, 20, 265);
  doc.text("Amazon EU's Total Payment (Half of this to each Person) £" + amazonEu.value, 20, 270);
  doc.setTextColor(100, 0, 0);
  doc.text("Aslan's Payment Total in Pound £" + parseInt(aslanIncome), 20, 275);
  doc.text("Roslan's Payment Total in Pound £" + parseInt(roslanIncome), 20, 280);


  


  doc.save("Reciept.pdf")
}
