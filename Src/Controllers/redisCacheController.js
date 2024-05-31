const { createOrGetRedisClient } = require(".././Cache/redisCache");

const setToRedisCache = async (req, res) => {
  try {
    const redisClient = await createOrGetRedisClient();
    const { key, data } = req.body;
    await redisClient.set(key, data);
    return res.status(200).send({ status: 'Success', data: 'Data saved successfully' });
  } catch (err) {
    console.error(err);
    return res.status(500).send({ status: 'Failed', message: 'Internal error' });
  }
};

const getFromRedisCache = async (req, res) => {
  try {
    const redisClient = await createOrGetRedisClient();
    const { key } = req.params;
    const data = await redisClient.get(key);
    return res.status(200).send({ status: 'Success', data });
  } catch (err) {
    console.error(err);
    return res.status(500).send({ status: 'Failed', message: 'Internal error' });
  }
};

module.exports = {
  setToRedisCache,
  getFromRedisCache
};
