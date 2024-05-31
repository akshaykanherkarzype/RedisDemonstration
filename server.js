require("dotenv").config();
const { createOrGetRedisClient } = require("./Src/Cache/redisCache");
const app = require("./app");
//Port
const PORT = process.env.PORT || 8080;

//Server Connection
app.listen(PORT, async () => {
  console.log("Server is listening on port:", PORT);
  await createOrGetRedisClient()
});
