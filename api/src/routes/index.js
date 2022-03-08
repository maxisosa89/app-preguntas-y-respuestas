const router = require("express").Router();

// Importe de todas las rutas:
const { getQuestions } = require("./Question/getQuestions");
const { postQuestions } = require("./Question/postQuestions");

const { getCategories } = require("./Category/getCategories");

/*          Configuracion de rutas:        */

// Reviews:
router.get("/questions/:category", getQuestions)
router.post("/questions", postQuestions);

router.get("/categories", getCategories)


module.exports = router;