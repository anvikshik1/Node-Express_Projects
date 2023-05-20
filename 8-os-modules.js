const os = require('os');

//info about current users
const user = os.userInfo();
console.log(user);

//method returns the system uptime in seconds
console.log(`The System Up time is ${os.uptime()} seconds`);

const currentOS ={
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS);