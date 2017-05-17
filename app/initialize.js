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
  var byMeasurementBaseURL = "https://api.openaq.org/v1/measurements";
  //let addCity = `?city=${cityName}`;
  var buildURL = require('./buildURL');
  let dateFormatter = require('./dateFormatter');
  let formData = {
    city: '',
    airQualityType: [],  // probably should automate object #2
    startDate: '',
    endDate: '',
    airQualityType2: { },
  }
  //populate date feild
  $('form').submit(event => {
    //var inputArr = $('form :input')
    event.preventDefault();
    formData.city = $("#city").val();
    formData.startDate = dateFormatter($("#startDate").val());
    formData.endDate = dateFormatter($("#endDate").val());
    $(":checkbox").get().forEach(elem => {
      formData.airQualityType2[elem.id] = elem.checked;
    });
    //formData.airQualityType = $(":checkbox").get().map(elem => elem.checked);  //$("#pm10switch").val();
    //console.log('submit happened', 'form input', inputArr);
      //$(":checkbox").val()
    console.log(formData, formData.airQualityType2 );
  })
//Allowed values: pm25, pm10, so2, no2, o3, co, bc
//takes date and formats to


//sample formData  Object {city: "san francisco", airQualityType: "", startDate: "1 May, 2017", endDate: "2 May, 2017"}
// form submit  $('#startDate').value()

    // Initialize collapsible (uncomment the line below if you use the dropdown variation)
    //$('.collapsible').collapsible();
    let div = $('<div>')
  // $('#main').append(div).text()
  //var promiseRadio1 = new Promise()

// API call
  // let request = fetch(byMeasurementBaseURL);
  // request
  //   .then(locationResponse => {
  //     console.log(locationResponse.json());
  //      return locationResponse.json();
  //     console.log(JSON.parse(locationResponse));
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

});
