var config = {
    apiKey: "AIzaSyAfrk7HHCm1qZYlyHgzif0umHkwvcC-oho",
    authDomain: "groupproject-d2bdc.firebaseapp.com",
    databaseURL: "https://groupproject-d2bdc.firebaseio.com",
    storageBucket: "groupproject-d2bdc.appspot.com",
    messagingSenderId: "463679645799"
};

firebase.initializeApp(config);

var database = firebase.database();

database.ref().on("value", function(snapshot) {



}, function(errorObject) {
  console.log("The read failed: " + errorObject.code);
});

$("#submit-btn").on("click", function(event) {

	event.preventDefault();

	var employeeName = $("#employee-name").val().trim();
	var employeeRole = $("#employee-role").val().trim();
	var startDate = $("#start-date").val().trim();
	var newDate = moment().subtract(10, 'days').calendar();
	console.log(newDate);
	var monthsWorked;
	var monthlyRate = $("#monthly-rate").val().trim();
	var totalBilled = monthlyRate * monthsWorked;

});