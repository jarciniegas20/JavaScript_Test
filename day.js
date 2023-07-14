// Creating my object with the current day in Text and the calculated greeting

  const objectDateFunctions = {
    currentDay: function(date) {
      const daysoftheweek = ["Sunday", "Monday", "Tuesday", "Wednesday", 
                             "Thursday", "Friday", "Saturday"];
      return daysoftheweek[date.getDay()];
    },
  
    greeting: function(date) {
        let daysCalc = 5 - date.getDay(); // Friday minus the current day index. Sunday is 0
        let daysText = daysCalc === 1 ? "day" : "days"; // If it's 1 day until Friday, use "day", else "days"
        let isAre = daysCalc === 1 ? "is" : "are"; // If it's 1 day until Friday, use "is", else "are"
        let yayOrNay = (daysCalc > -3) && (daysCalc < 1) ? "Hooray for the weekend!" : ""; // If it's 1 day until Friday, say "hooray..."
        return `Welcome to my page! The current day is ${this.currentDay(date)}.\n` +
               `There ${isAre} ${daysCalc} ${daysText} until Friday. ${yayOrNay}`
  
    }
  };

  