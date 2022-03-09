const { Ranking, Category } = require('../../db');

const postRanking = ("/", async (req, res, next) => {
    let { name, score, countTotal, category } = req.body;
    category = category.charAt(0).toUpperCase() + category.slice(1)
    try {
        let rankingCreate = await Ranking.create({ name, score, countTotal })
        let cat = await Category.findOne({
            where: {
              name: category,
            },
          });
        cat.addRanking(rankingCreate)
        res.send("Ranking created");
    
    } catch (error) {
        next(error);
    }

});

module.exports = { postRanking };