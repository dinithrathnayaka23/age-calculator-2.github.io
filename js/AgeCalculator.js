function submiting() {
    let data = document.getElementById("birthday").value;
    let dob = new Date(data);
    let months = dob.getMonth();
    let dates = dob.getDate();
    let years = dob.getFullYear();
  
    let CurrentDate = document.getElementById("currentDate").value;
    let now = new Date(CurrentDate);
    let currentDay = now.getDate();
    let currentMonth = now.getMonth();
    let currentYear = now.getFullYear();
  
    let calDates = currentDay - dates;
    let calMonths = currentMonth - months;
    let calyears = currentYear - years;
  
    if (calDates < 0 && calyears >= 0) {
      calDates = 30 + calDates;
      if (calMonths <= 0) {
        calMonths = 11 + calMonths;
        calyears = calyears - 1;
      } else {
        calMonths = calMonths - 1;
        calyears = calyears;
      }
      document.getElementById("calculatedAge").innerHTML = "You are " + calyears + " years " + calMonths + " months " + calDates + " dates old. ";
    }
  
    else if (calDates >= 0 && calMonths >= 0 && calyears >= 0) {
  
      document.getElementById("calculatedAge").innerHTML = "You are " + calyears + " years " + calMonths + " months " + calDates + " dates old. ";
    }
    else if (calDates >= 0 && calMonths <= 0 && calyears >= 0) {
      calMonths = 11 + calMonths;
      calyears = calyears - 1;
      document.getElementById("calculatedAge").innerHTML = "You are " + calyears + " years " + calMonths + " months " + calDates + " dates old. ";
    }
    if (calDates < 0 || calMonths < 0 || calyears < 0) {
      document.getElementById("calculatedAge").innerHTML = "Invalid date";
    }
  
  }
  