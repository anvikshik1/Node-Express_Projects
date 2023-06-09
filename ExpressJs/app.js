const express = require('express')
const app = express();
const people = require('./route/people');
const auth = require('./route/auth');

app.use(express.static('./methods-public'));
app.use(express.urlencoded({extended:false}))

app.use('/api/people',people)
app.use('/login',auth)

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})