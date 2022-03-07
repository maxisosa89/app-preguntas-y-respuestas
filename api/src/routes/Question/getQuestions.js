const { Question, Category } = require('../../db');


const getQuestions = ("/", async (req, res, next) => {

    try {
        const allQuestion = await Question.findAll({
            include: {
                model: Category,
                attributes: ['name']
            }
        })
        res.send(allQuestion)
    
    } catch (error) {
        next(error);
    }

});

module.exports = { getQuestions };