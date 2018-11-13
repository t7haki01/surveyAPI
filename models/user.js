var db = require('../database');
var user = {
  getAllusers: function(callback) {
    return db.query('select * from user', callback);
  },
  getuserByid: function(user_id, callback) {
    return db.query('select * from user where id=?', [user_id], callback);
  },
  adduser: function(users, callback) {
    return db.query(
      'insert into user values(?,?,?,?,?,?,?,?,?,?,?)',
      [
        users.id,
        users.firstname,
        users.lastname,
        users.accountFK,
        users.email,
        users.birthdate,
        users.phone,
        users.streetAddress,
        users.postalCode,
        users.rewards,
        users.modifiedDate
      ],
      callback
    );
  },
  deleteuser: function(user_id, callback) {
    return db.query('delete from user where id=?', [user_id], callback);
  },
  updateuser: function(user_id, users, callback) {
    return db.query(
      'update user set firstname=?, lastname=?, accountFK=?, email=?, birthdate=?, phone=?, streetAddress=?, postalCode=?, rewards=?, modifiedDate=? where id=?',
      [
        users.firstname,
        users.lastname,
        users.accountFK,
        users.email,
        users.birthdate,
        users.phone,
        users.streetAddress,
        users.postalCode,
        users.rewards,
        users.modifiedDate,
        user_id
      ],
      callback
    );
  }
};
module.exports = user;
