let addParameter = function(...parameters) {
//use each parameter to build a URL
console.log(parameters);
  return  parameters.map(param => `&${param}`).join('');
}
