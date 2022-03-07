const router = require("express").Router();
const { Question } = require("../../db");

const postQuestions =
  ("/",
  async (req, res) => {
    const { question, category, answer } = req.body
    try {
      let questionCreate = await Question.create({ question, answer })
      res.send(questionCreate)
    } catch(err) {
      console.log(err)
    }
  });

module.exports = { postQuestions };