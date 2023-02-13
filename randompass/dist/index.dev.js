"use strict";

var generatepassword = require('generate-password');

var password = generatepassword.generate({
  length: 50,
  number: true
});
console.log(password);
//# sourceMappingURL=index.dev.js.map
