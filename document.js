/*var config = {
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
});*/

$("#submit-btn").on("click", function(event) {

	event.preventDefault();

	var employeeName = $("#employee-name").val().trim();
	console.log(employeeName);
	var employeeRole = $("#employee-role").val().trim();
	console.log(employeeRole);
	var startDate = $("#start-date").val().trim();
	console.log(startDate);
	//var newDate = moment().subtract(10, 'days').calendar();
	//console.log(newDate);
	var monthsWorked;
	var monthlyRate = $("#monthly-rate").val().trim();
	console.log(monthlyRate);
	var totalBilled = monthlyRate * monthsWorked;

	var newRow = $("<tr>");
	var newName = $("<td>");
	var newRole = $("<td>");
	var newDate = $("<td>");
	var newRate = $("<td>");

	newName.text(employeeName);
	newRole.text(employeeRole);
	newDate.text(startDate);
	newDate.text(monthlyRate);

	newRow.append(newName, newRole, newDate, newRate);

	$("#employee-table").append(newRow);

});