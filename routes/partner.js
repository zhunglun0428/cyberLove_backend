var express = require("express");
var router = express.Router();

const auth = require("../middlewares/auth");
const partnerController = require("../controllers/partner");

router.post("/create", auth, partnerController.createPartner);
router.post("/generateImage", auth, partnerController.generatePartnerImage);
router.post("/characterSetting", auth, partnerController.characterSetting);

module.exports = router;
