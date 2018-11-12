var db = require('../database');
var question = {
  getAllquestions: function(callback) {
    return db.query('select * from question', callback);
  },
  getquestionByid: function(question_id, callback) {
    return db.query(
      'select * from question where id=?',
      [question_id],
      callback
    );
  },
  getAlloptions: function(question_id, callback) {
    return db.query(
      'select * from answer_options where questionFK=?',
      [question_id],
      callback
    );
  },
  addquestion: function(questions, callback) {
    return db.query(
      'insert into question values(?,?,?)',
      [questions.id, questions.question, questions.surveyFK],
      callback
    );
  },
  deletequestion: function(question_id, callback) {
    return db.query('delete from question where id=?', [question_id], callback);
  },
  updatequestion: function(question_id, questions, callback) {
    return db.query(
      'update question set question=?, surveyFK=? where id=?',
      [questions.question, questeions.surveyFK, question_id],
      callback
    );
  }
};
module.exports = question;
