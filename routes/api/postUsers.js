const express = require('express');
const router = express.Router();
const UserModel = require('../../models/UserModel.js');

/*
	Adds the player to the database. 
*/

router.post('/', async (req,res)=>{
	let userData = req.body;
	const user = new UserModel(userData);
	await user.save();
	res.send("player saved!")
})

module.exports = router;