const { Question, Category } = require('../../db');

function fisherYatesShuffle(arr){
    for(var i =arr.length-1 ; i>0 ;i--){
        var j = Math.floor( Math.random() * (i + 1) ); //random index
        [arr[i],arr[j]]=[arr[j],arr[i]]; // swap
    }
    return arr;
}

const getQuestions = ("/", async (req, res, next) => {
    const { category } = req.params;
    try {
        const allQuestion = await Question.findAll({
            include: {
                model: Category,
                attributes: ['name']
            }
        });
        let result = allQuestion.filter(e => e.category.name.toLowerCase() === category.toLowerCase());
        fisherYatesShuffle(result);
        result = result.slice(0, 20);
        result?.map((e) => {
            fisherYatesShuffle(e.answer);
        })
        res.send(result);
    
    } catch (error) {
        next(error);
    }

});

module.exports = { getQuestions };