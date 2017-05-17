module.exports.appID = function (type) {
  var applicationID = 'nprone_trial_AXnEVgCO8LuX';
  var secret = 'rR7UzG1xlmZP6XGmeVaIkeztbxVaSjw4RzrQBzEf';
  if (type === 'id') {
    return applicationID;
  } else if (type === 'secret') {
    return secret;
  } else {
    console.log('please enter either an id or secret');
  }
};
