const { Ranking, Category } = require('../../db');


const getRanking = ("/", async (req, res, next) => {
    const { category } = req.params;
    try {
        const allRanking = await Ranking.findAll({
            include: {
                model: Category,
                attributes: ['name']
            }
        });
        let result = allRanking.filter(e => e.category.name.toLowerCase() === category.toLowerCase());
        result.sort(function(a,b){
            if(a.score > b.score) return -1;
            if(b.score > a.score) return 1;
            return 0;
        })
        result = result.slice(0, 10);
        res.send(result);
    
    } catch (error) {
        next(error);
    }

});

module.exports = { getRanking };