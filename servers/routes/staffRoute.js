const router = require("express").Router();
const staffCtrl = require("../controllers/staffCtrl");

router.post("/", staffCtrl.createStaff);

router.get("/", staffCtrl.getStaff);

router.delete("/:id", staffCtrl.deleteStaff);

router.patch("/update/:id", staffCtrl.updateStaff);

// router.patch("/delete/", staffCtrl.deletestaffTemp);

module.exports = router;
