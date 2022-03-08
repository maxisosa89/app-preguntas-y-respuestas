const { Category } = require('../../db');

const getCategories = ("/", async (req, res, next) => {
    try {
        const allCategories = await Category.findAll();
        res.send(allCategories);
    
    } catch (error) {
        next(error);
    }

});

module.exports = { getCategories };