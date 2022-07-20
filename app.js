const calculatorForm = document.getElementById("calculate");

calculatorForm.addEventListener("submit", function (event) {
	// stop form submission
	event.preventDefault();

	// validate the form
	let totalUsPay = calculatorForm.elements["amazonUsPaymentDollar"];
    console.log(totalUsPay)
    alert("Hello!! worked")
});
