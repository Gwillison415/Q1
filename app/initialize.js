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
      console.log(formData.startDate);
    });
    //formData.airQualityType = $(":checkbox").get().map(elem => elem.checked);  //$("#pm10switch").val();
    //console.log('submit happened', 'form input', inputArr);
      //$(":checkbox").val()

    // BuildURL
    buildURL(byMeasurementBaseURL, formData.city, formData.startDate, formData.endDate, formData.airQualityType2)
    // call API Fn


    //API call
      // let request = fetch(buildURL(byMeasurementBaseURL, formData.city, formData.startDate, formData.endDate, formData.airQualityType2));
      // request
      //   .then(response => {
      //     console.log(response.json());
      //      return response.json();
      //     console.log(JSON.parse(response));
      //   })
      //   .then( resolvedValue => {
      //     console.log(resolvedValue.body());
      //   })
      //   .catch(err => {
      //     console.log(err);
      //     return err;
      //   })
      // .then(jsonData =>{
      //   console.log(jsonData.body.results);
      //   console.log('body', jsonData.body(), '@zero', jsonData[0]);
      //   return jsonData.body();
      // })
      // .then(response => {
      //   console.log(response);
      // })

      //'templateUrl': 'app/endpoints/cities-form.directive.html',
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



    // Initialize collapsible (uncomment the line below if you use the dropdown variation)
    //$('.collapsible').collapsible();
  //   let div = $('<div>')
  // $('#main').append(div).text()
  // var promiseRadio1 = new Promise()



});
