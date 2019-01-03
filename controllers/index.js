const questiondetails = require('../db/createquestion');
const meetup = require('../db/meetupquestion');

  const createQuestion = (req, res) => {
    const find = meetup.find(x => x.id.toString());
    const newQuestion = {
      askedOn: Date,
      askedBy: 2,
      meetup: find.id,
      title: req.body.title,
      body: req.body.body,
      vote: 0,
    };
    if (newQuestion.title && newQuestion.body) {
      questiondetails.push(newQuestion);
      return res.status(201).send({
        status: 201,
        data: [newQuestion],
      });
    }
  };

  module.exports = { createQuestion };