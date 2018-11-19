var db = require('../database');
const bcrypt = require('bcrypt');
const saltRounds = 10;

var account = {
  getAllaccounts: function(callback) {
    return db.query('select * from account', callback);
  },
  getaccountByid: function(account_id, callback) {
    return db.query('select * from account where id=?', [account_id], callback);
  },
  addaccount: function(accounts, callback) {
    return bcrypt.hash(accounts.password, saltRounds, function(err, hash) {
      db.query(
        'insert into account (account, password, isExpired, joinedDate, expireDate, modifiedDate) values(?,?,?,?,?,?)',
        [
          accounts.account,
          hash,
          accounts.isExpired,
          accounts.joinedDate,
          accounts.expireDate,
          accounts.modifiedDate
        ],
        callback
      );
    });
  },
  deleteaccount: function(account_id, callback) {
    return db.query('delete from account where id=?', [account_id], callback);
  },
  updateaccount: function(account_id, accounts, callback) {
    return db.query(
      'update account set account=?, password=?, isExpired=?, joinedDate=?, expireDate=?, modifiedDate=? where id=?',
      [
        accounts.account,
        accounts.password,
        accounts.isExpired,
        accounts.joinedDate,
        accounts.expireDate,
        accounts.modifiedDate,
        account_id
      ],
      callback
    );
  },
    getMaxId: function(callback) {
        return db.query('select MAX(id) as maxId from account', callback);
    }
};
module.exports = account;
