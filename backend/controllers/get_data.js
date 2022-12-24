const data = require('../models/data.model')
const userData = require('../models/userdata.model')

const get_data = async (req, res) => {
    const {_username} = await req.body
    const launch_data = data.findOne({Username: _Username});
    res.status(200).json({launch_data})
}

module.exports = {get_data}