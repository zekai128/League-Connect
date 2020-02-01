const express = require('express');
const router = express.Router();
const UserModel = require('../../models/UserModel.js');

/*
	Queries the database using a query string and returns a list of the users
	which match the given criterion.

	POST requests made to this route should send the search parameters in key-value 
	pairs stored in an object, and the server will return a list of all the UserModel
	documents that match the query parameters.
*/

router.post('/', async(req,res) => {
	var queryParameters = req.body;
	var result = await UserModel.find( queryParameters );
	res.send(result);
});

module.exports = router;
