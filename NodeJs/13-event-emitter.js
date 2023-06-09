const EventEmmiter = require('events')


const CostumEmiter = new EventEmmiter();

   CostumEmiter.on('response', (name,age) =>{
    console.log(`data recieved user ${name} with age:${age}`);
   })
   
   CostumEmiter.on('response', () =>{
       console.log('some other logic here');
   })
   
   CostumEmiter.emit('response','hari','25')
