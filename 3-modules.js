// CommonJs - every file is module (by default)
// modules - Encapsulate code (only share minimum)

const name = require('./4-names');
const sayHi = require('./5-utils');
const person = require('./6-Alternative-flavors')
require('./7-mind-grenade')
sayHi('hari');
sayHi(name.john);
sayHi(name.peter);
