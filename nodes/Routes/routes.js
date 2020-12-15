const express = require("express");
const app = express();
const router = express.Router();

const input_controller = require("../controllers/input_controller");

router.post("/", input_controller.car_create_post);
module.exports = router;
