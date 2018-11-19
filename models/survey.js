var db = require('../database');
var survey = {
  getAllsurveys: function(callback) {
    return db.query('select * from survey', callback);
  },

  getAllquestions: function(survey_id, callback) {
    return db.query(
      'select question, question.id from survey inner join question on survey.id = question.surveyFK where survey.id=?',
      [survey_id],
      callback
    );
  },

  getResults: function(survey_id, callback) {
    return db.query(
      'select question.question, answers.user_answer, answers.userFK from survey inner join question on survey.id = question.surveyFK inner join answers on question.id = answers.question where survey.id=?',
      [survey_id],
      callback
    );
  },

  getsurveyByid: function(survey_id, callback) {
    return db.query('select * from survey where id=?', [survey_id], callback);
  },

  addsurvey: function(surveys, callback) {
    return db.query(
      'insert into survey values(?,?)',
      [surveys.id, surveys.title],
      callback
    );
  },

  deletesurvey: function(survey_id, callback) {
    return db.query('delete from survey where id=?', [survey_id], callback);
  },

  updatesurvey: function(survey_id, surveys, callback) {
    return db.query(
      'update survey set title=? where id=?',
      [surveys.title, survey_id],
      callback
    );
  },
    getMaxId: function(callback) {
        return db.query('select MAX(id) as maxId from survey', callback);
    }
};
module.exports = survey;
