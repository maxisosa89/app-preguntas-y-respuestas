const router = require("express").Router();

// Importe de todas las rutas:
const { getQuestions } = require("./Question/getQuestions");
const { getCategories } = require("./Category/getCategories");
const { postRanking } = require("./Ranking/postRanking");
const { getRanking } = require("./Ranking/getRanking");

/*          Configuracion de rutas:        */

// Reviews:
router.get("/questions/:category", getQuestions)
router.get("/categories", getCategories)
router.get("/ranking/:category", getRanking)
router.post("/ranking", postRanking)


module.exports = router;