const router = require('express').Router();


const usrRoutes = require('./user-routes');
const thoughtRoutes = require('./thought-routes');
router.use('/users', usrRoutes);
router.use('/thoughts', thoughtRoutes);
module.exports = router;
