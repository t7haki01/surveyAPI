var db = require('../database');
var answer = {
  getAllanswers: function(callback) {
    return db.query('select * from answers', callback);
  },
  getanswerByid: function(answer_id, callback) {
    return db.query('select * from answers where id=?', [answer_id], callback);
  },
  getanswerByQuestion: function(question, callback) {
    return db.query(
      'select user_answer as answer from answers where question=?',
      [question],
      callback
    );
  },
  addanswer: function(answers, callback) {
    return db.query(
      'insert into answers values(?,?,?,?)',
      [answers.id, answers.user_answer, answers.userFK, answers.question],
      callback
    );
  },
  deleteanswer: function(answer_id, callback) {
    return db.query('delete from answers where id=?', [answer_id], callback);
  },

  updateanswer: function(answer_id, answers, callback) {
    return db.query(
      'update answers set user_answer=?, userFK=?, question=? where id=?',
      [answers.user_answer, answers.userFK, answers.question, answer_id],
      callback
    );
  },
  getMaxId: function(callback) {
    return db.query('select MAX(id) as maxId from answers', callback);
  }
};
module.exports = answer;
