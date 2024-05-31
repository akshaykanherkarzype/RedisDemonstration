const redisCacheController = require("../Controllers/redisCacheController.js");
const router = require("express").Router();

router.post("/setToRedisCache", redisCacheController.setToRedisCache);
router.get("/getFromRedisCache/:key", redisCacheController.getFromRedisCache);

module.exports = router;
