/* JavaScript to validate the contact us form */
function validate() {

	if(document.myForm.name.value == ""){
		alert("Please provide your full name!");
		document.myForm.name.focus();
		return false;
	}	

	if (document.myForm.email.value == "") {

		alert("Please provide your email address!");
		document.myForm.email.focus();
		return false;
	}

	if(document.myForm.date.value = "") {

		alert("Please fill in the date of your event!");
		document.myForm.date.focus();
		return false;
	}

	if(document.myForm.event.value == "") {

		alert("Please select the type of event!");
		document.myForm.event.focus();
		return false;
	}

	return alert("Thank you for your request, we will get back to you as soon as we can!");
}
/* check for valid email entry */
function validateEmail() {

	var emailID = document.myForm.email.value;
	atpos = emailID.indexOf("@");
	dotpos = emailID.lastIndexOf(".");

	if(atpos < 1 || (dotpos - atpos < 2)){

		alert("Please enter the correct email ID!");
		document.myForm.email.focus();
		return false;
	}

	return alert("Thank you for your request, we will get back to you as soon as we can!");
}
