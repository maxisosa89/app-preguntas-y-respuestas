const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const {
  Category,
  Question
} = require("./src/db");
const {
    categories,
    questions
} = require("./Variables");

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3001, async () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console

    let validateCategories = await Category.findAll();
    validateCategories.length === 0 && await Category.bulkCreate(categories);

    let validateQuestions = await Question.findAll();
    validateQuestions.length === 0 && questions.map(async(e) => {
      let qCreate = await Question.create(e);
      let cat = await Category.findOne({
        where: {
          name: e.category,
        },
      });
      cat.addQuestion(qCreate)
    });
  });
});