var db = require('../database');
var answer = {
  getAllanswers: function(callback) {
    return db.query('select * from answers', callback);
  },
  getanswerByid: function(answer_id, callback) {
    return db.query('select * from answers where id=?', [answer_id], callback);
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
  }
};
module.exports = answer;
