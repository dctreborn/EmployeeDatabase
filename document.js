var config = {
    apiKey: "AIzaSyAfrk7HHCm1qZYlyHgzif0umHkwvcC-oho",
    authDomain: "groupproject-d2bdc.firebaseapp.com",
    databaseURL: "https://groupproject-d2bdc.firebaseio.com",
    storageBucket: "groupproject-d2bdc.appspot.com",
    messagingSenderId: "463679645799"
};

firebase.initializeApp(config);

var database = firebase.database();

database.ref().on("child_added", function(snapshot) {

	if ( ( snapshot.child("name").exists() ) && (snapshot.child("role").exists()) && (snapshot.child("startDate").exists()) && (snapshot.child("months").exists()) && (snapshot.child("monthlyRate").exists()) && (snapshot.child("totalBilled").exists())){

		var employeeName = snapshot.val().name;
		
		var employeeRole = snapshot.val().role;
		
		var startDate = snapshot.val().startDate;
		
		var monthsWorked = snapshot.val().months;

		var monthlyRate = snapshot.val().monthlyRate;
		
		var totalBilled = snapshot.val().totalBilled;

		var now = moment(new Date()); //todays date
		
		var end = moment(startDate); // start date
		var duration = moment.duration(now.diff(end));
		var months = duration.asMonths();
		//console.log(months)


		var newRow = $("<tr>");
		var newName = $("<td>");
		var newRole = $("<td>");
		var newDate = $("<td>");
		var newMonths = $("<td>");
		var newRate = $("<td>");
		var newTotal = $("<td>");

		newName.text(employeeName);
		newRole.text(employeeRole);
		newDate.text(startDate);
		newMonths.text(monthsWorked);
		newRate.text(monthlyRate);
		newTotal.text(totalBilled);

		newRow.append(newName, newRole, newDate, newMonths, newRate, newTotal);

		$("#employee-table").append(newRow);
	}

}, function(errorObject) {
  console.log("The read failed: " + errorObject.code);
});

$("#submit-btn").on("click", function(event) {

	event.preventDefault();

	var employeeName = $("#employee-name").val().trim();
	//console.log(employeeName);
	var employeeRole = $("#employee-role").val().trim();
	//console.log(employeeRole);
	var startDate = $("#start-date").val().trim();
	//console.log(startDate);
	var newDate = moment().subtract(10, 'days').calendar();
	//console.log(newDate);
	var monthsWorked;
	var monthlyRate = $("#monthly-rate").val().trim();
	//console.log(monthlyRate);
	

	var now = moment(new Date()); //todays date
	//console.log(now);
	var end = moment(startDate); // another date
	var duration = moment.duration(now.diff(end));
	monthsWorked = duration.asMonths();
	//console.log(months)

	var totalBilled = monthlyRate * monthsWorked;

	var newRow = $("<tr>");
	var newName = $("<td>");
	var newRole = $("<td>");
	var newDate = $("<td>");
	var newMonths = $("<td>");
	var newRate = $("<td>");
	var newTotal = $("<td>");

	newName.text(employeeName);
	newRole.text(employeeRole);
	newDate.text(startDate);
	newMonths.text(monthsWorked);
	newRate.text(monthlyRate);
	newTotal.text(totalBilled);

	newRow.append(newName, newRole, newDate, newMonths, newRate, newTotal);

	$("#employee-table").append(newRow);


	database.ref().push({
        name: employeeName,
        role: employeeRole,
        startDate: startDate,
        months: monthsWorked,
        monthlyRate: monthlyRate,
        totalBilled: totalBilled
    });

});