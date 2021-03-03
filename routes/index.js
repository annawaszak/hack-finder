const router = require('express').Router();

router.get('/get-user', async (req, res, next) => {
  res.json({ abc: 'abc' });
});

// You put the next routes here 👇
// example: router.use("/auth", authRoutes)

module.exports = router;
