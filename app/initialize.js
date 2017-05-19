document.addEventListener('DOMContentLoaded', function() {
  // do your setup here
  console.log('Initialized app');
  $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
  });
  // Initialize collapse button
  $(".button-collapse").sideNav();
  //reday a background image
  $(document).ready(function(){
      $('.parallax').parallax();
      $('select').material_select();

      $('.dropdown-button').dropdown({
     inDuration: 300,
     outDuration: 225,
     constrainWidth: false, // Does not change width of dropdown to that of the activator
     hover: true, // Activate on hover
     gutter: 0, // Spacing from edge
     belowOrigin: false, // Displays dropdown below the button
     alignment: 'left', // Displays dropdown with edge aligned to the left of button
     stopPropagation: false // Stops event propagation
   }
 );
 });
  var byLocationBaseURL = "https://api.openaq.org/v1/locations";
  var byMeasurementBaseURL = "https://api.openaq.org/v1/measurements?";  //used in APICall
  let dateFormatter = require('./dateFormatter');
  //let APIcallFormatter = require('./APIcallFormatter');
  let capitalize = require('./capitalizeWords');

  //pipe in DUMMY data no longer needed
  //var dummyData = require('./dummyData')
  let formData = {
    city: '',
    //airQualityType: [],  // probably should automate object #2
    startDate: '',
    endDate: false,
    airQualityType2: { },
  }
  $('form').submit(event => {
    //var inputArr = $('form :input')
    event.preventDefault();
    formData.city = capitalize($("#city").val());
    formData.startDate = dateFormatter($("#startDate").val());
    formData.endDate = dateFormatter($("#endDate").val());
    $(":checkbox").get().forEach(elem => {
      formData.airQualityType2[elem.id] = elem.checked;
      //console.log('start date from form:', formData.startDate);
    });
    //formData.airQualityType = $(":checkbox").get().map(elem => elem.checked);  //$("#pm10switch").val();
    //console.log('submit happened', 'form input', inputArr);
      //$(":checkbox").val()

    // BuildURL
    buildURL(byMeasurementBaseURL, formData.city, formData.startDate, formData.endDate, formData.airQualityType2)
    //buildURL(byMeasurementBaseURL, formData.city, formData.startDate, formData.endDate, formData.airQualityType2) //pro tip build a fake input set
    // call API Fn

//.json() takes response and returns a promise that resolves to parse body
    //API call
      let request = fetch(buildURL(byMeasurementBaseURL, formData.city, formData.startDate, formData.endDate, formData.airQualityType2));
      request
        .then(response => {
          //console.log(response.json());  one can only call .json method ONCE
           return response.json();
        })
        .then( resolvedValue => {
          createTable(formatDataForTableBuilding(resolvedValue));
          //console.log(resolvedValue);
        })
        .catch(err => {
          console.log(err);
          return err;
        })

  })
//Allowed values: pm25, pm10, so2, no2, o3, co, bc
//takes date and formats to
function buildURL(BaseURL, cityID, dateFrom, dateTo, airQualityParametersObj ) {
    parameterKeys = Object.keys(airQualityParametersObj);
    // creates a collection of all selected parameters (so2, CO2 etc)
    let parameters = parameterKeys.filter(param => {
      if(airQualityParametersObj[param] === true) {
      return param;
    }
  })
    let semiBuiltURL = `${BaseURL}city=${cityID}`;
    let allParametersString = parameters.map(elem => `&parameter=${elem}`).join('');
    if (dateTo) {
      var completeURL = semiBuiltURL+ allParametersString +`&date_from=${dateFrom}&date_to=${dateTo}`;
    } else {

      var completeURL = semiBuiltURL+ allParametersString +`&date_from=${dateFrom}`;
    }
    console.log(completeURL);
    return completeURL;
}

//renders data into 2d array for table build
function formatDataForTableBuilding(data) {
    var collectionToAppend = data.results.map((valueSet, idx) =>  [formatDate(valueSet.date.local), valueSet.location, valueSet.parameter, valueSet.value, valueSet.unit ])

    //console.log(collectionToAppend);
    return collectionToAppend;
}

// formats the date used in formatDataForTableBuilding
function formatDate(string) {
  // console.log(string.slice(0, 10));
  return string.slice(0, 10);
}

function timeFormatter(string) {
  return string.slice(11, 16);
}
//creates and projects a table onto page
function createTable(formattedJSONData2Darray) {
  let headerArr = ["Date", "Location", "Type", "Value", "Unit"];
  // var table = $('<table>');
  var thead = $('<thead>');
  $('table').append(thead);
  let trHead = $('<tr>')


  //append head with names
  for (var i = 0; i < headerArr.length; i++) {
    var tr = $('<tr>');
    let th = $('<th>')
    th.appendTo(trHead);
    th.text(headerArr[i]);
  }
  trHead.appendTo($(thead));
  //append table with values to head
  for (var i = 0; i < formattedJSONData2Darray.length; i++) {
    let tr = $('<tr>');
    $('#insertLocation').append($(tr)); //apends 1 value
      for (var ii = 0; ii < formattedJSONData2Darray[i].length; ii++) {
        var td = $('<td>');
        $(tr).append(td.text(formattedJSONData2Darray[i][ii]));
      }
    // formattedJSONData2Darray[i].forEach(columnElemText =>
    //     $(tr).append(td.text(columnElemText))
    //  );
  }
  console.log(formattedJSONData2Darray.length);


}
//createTable(formatDataForTableBuilding(dummyData));


});
