const userData = require('../models/userdata.model')
const User = require('../models/user.model');
const data = require('../models/data.model');

const form_submit =  async (req, res) => {
    const dta = await req.body
    const {
            _Username, 
            _location, 
            _payload, 
            _time,         
    } = dta
    console.log(dta)
    const data_ = new data({
        Username : _Username,
        location : _location,
        payload : _payload,
        time : _time,
    })
    
    data_.save().then((item) => {
        console.log(`Data has been saved successfully`)
    }).catch(err => {
       console.log(`unable to save the data`, err);
        
    })
}

module.exports = {form_submit}