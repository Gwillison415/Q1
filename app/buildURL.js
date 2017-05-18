// let addParameter = function(...parameters) {
// //use each parameter to build a URL
// console.log(parameters);
//   return  parameters.map(param => `&${param}`).join('');
// }

function testParamBuilder(obj) {
  parameterKeys = Object.keys(obj);
  // creates a collection of all selected parameters (so2, CO2 etc)
  let parameters = parameterKeys.filter(param => {
    if(obj[param] === true) {
    return param;
  }
})
console.log(parameters);
}

testParamBuilder( {pm10: true, pm25: true, so2: false, co2: false, no2: false})
