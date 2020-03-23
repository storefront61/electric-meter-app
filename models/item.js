var mongoose = require('mongoose');


var itemSchema = new mongoose.Schema({
	monthBegin: {
		type: String
    },
    beginRead: {
        type: String
    },
	price: {
		type: String
    },
    endRead: {
        type: String
    },
    kwh: {
        type: Number
    },
    kwhTotal: {
        type: Number
    },
    dailyPrice: {
        type: Number
    },
    monthPrice: {
    	type: Number
    },
    created_date: {
    	type: Date,
    	default: Date.now
    }
});

var Item = mongoose.model('Item', itemSchema);

module.exports = Item;