//takes date and formats to
module.exports=function formatDate(string) {
      let year = string.slice(7);
      let month = string.slice(2, 5);
      let day = string.slice(0, 1)

      if (!isNaN(parseInt(string.charAt(1)))) {
        console.log('date is more than 9', parseInt(string.charAt(1)));
         year = string.slice(8);
         month = string.slice(3, 6);
         day = string.slice(0, 2);

      }
      
      if (string.length ===0 ) {
        return false;
      }
      if (day.length === 1) {
        day = '0'+day;
      }
      if (month === "January") {
        month = "01";
      } else if (month === "February") {
        month = "02";
      }
      else if (month === "March") {
        month = "03";
      }
      else if (month === "April") {
        month = "04";
      }
      else if (month === "May") {
        month = "05";
      }
      else if (month === "June") {
        month = "06";
      }
      else if (month === "July") {
        month = "07";
      }
      else if (month === "August") {
        month = "08";
      }
      else if (month === "September") {
        month = "09";
      }
      else if (month === "October") {
        month = "10";
      }
      else if (month === "November") {
        month = "11";
      }
      else if (month === "December") {
        month = "12";
      } else {
        return "date entry error";
      }
      let formattedDate = year+"-"+month+"-"+day;
      console.log(year+"-"+month+"-"+day);
      return formattedDate;
  };
//sample formData  Object {city: "san francisco", airQualityType: "", startDate: "1 May, 2017", endDate: "2 May, 2017"}
//desired ouput === 2015-10-01
