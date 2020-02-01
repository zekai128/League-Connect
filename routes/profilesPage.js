const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.sendFile('profiles.html');
})

module.exports = router;