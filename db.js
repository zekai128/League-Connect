const mongoose = require('mongoose');
const mongoDB = 'mongodb+srv://zekai123:Iphone123@cluster0-tj9p0.mongodb.net/test?retryWrites=true&w=majority';

const connectDB = ()=> {
	console.log(__dirname);
	try{
		mongoose.connect(mongoDB, {useNewUrlParser: true});

		console.log('connected to the Database!');
	} catch(err){
		console.error(err);
		process.exit(1);
	}	
}

module.exports = connectDB;