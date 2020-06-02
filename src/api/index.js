var router = require('express').Router();

router.use(require('@/middleware/json-response')());
router.use(require('@/middleware/param-checker')());

router.use('/shopping', require('./shopping'));

module.exports = router;