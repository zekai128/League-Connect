const mongoose = require('mongoose');

/*
	Defines the properties that a player must have. Notice that all fields
	are required, otherwise an error will be thrown and the document shall
	not be saved to the database.
*/

const UserSchema = new mongoose.Schema({
	name:{
		type: String,
		required: true
	},
	server:{
		type: String,
		required: true
	},
	rank:{
		type:String,
		required: true
	},
	position:{
		type: String,
		required: true
	},
	champions:{
		type: String,
		required: true
	}
})

module.exports = mongoose.model('user', UserSchema);