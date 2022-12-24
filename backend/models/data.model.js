const mongoose = require(`mongoose`)
const {Schema}  = mongoose;

const data = new Schema ({
    Username : {
        type: String, 
        required: true,
        unique: true,
        trim: true,         
        minlength:3,
    },
    location : {
        type : String,
        required : true,
        trim: true,
    },
    payload : {
        weight : {
            type: String, 
            required: true,
        },
        faringSiza : {
            type : String,
        },
        orbit : {
            type : String,
        },
    }
    time : {
            
            year : {
                type : String
            },
            quarter : {
                type string,
            }
    },
});

const Data = mongoose.model('Data', data);

module.exports = Data;