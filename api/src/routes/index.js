const router = require("express").Router();

// Importe de todas las rutas:
const { getQuestions } = require("./Question/getQuestions");
const { postQuestions } = require("./Question/postQuestions");

/*          Configuracion de rutas:        */

// Reviews:
router.get("/questions", getQuestions)
router.post("/questions", postQuestions);

module.exports = router;