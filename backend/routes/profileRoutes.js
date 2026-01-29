const router = require("express").Router();
const User = require("../models/User");

router.put("/update/:id", async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(user);
});

module.exports = router;
