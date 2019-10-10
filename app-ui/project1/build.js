const _ = require("lodash")
const ver = _.random();
_.each([1,2,3], (each) => {
  console.log(each);
})
console.log('Node Version: ', process.version);
console.log('Lodash Version: ',ver);