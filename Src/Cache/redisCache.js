const redis = require('redis');

let redisClient;

// Create or get a Redis client
const createOrGetRedisClient = async () => {
  if (!redisClient) {
    redisClient = redis.createClient({
      host: '127.0.0.1',
      port: 6379
    });

    redisClient.on('connect', () => {
      console.log('Connected to Redis server');
    });

    redisClient.on('error', (err) => {
      console.error('Redis error:', err);
    });

    await redisClient.connect();
  }
  return redisClient;
};

module.exports = {
  createOrGetRedisClient
};
