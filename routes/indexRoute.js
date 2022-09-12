const router = require("express").Router();
// const ticket = require('./ticketRoute/ticketRoute');
// const admin = require('./adminRoute/adminRoute');
const erc = require('./Bank/erc1155');

// router.use('/ticket', ticket);
// router.use('/admin', admin);
router.use('/erc', erc);

module.exports = router;