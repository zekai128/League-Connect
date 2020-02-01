const express = require('express');
var router = express.Router();

router.get('/', (req,res, next)=>{
	res.sendFile(__dirname+ '/profiles.html');
});

module.exports = router;