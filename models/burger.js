var orm = require("../config/orm.js");


var burger = {

  selectAll: function (cb) {
    orm.selectAll("burger", function (res) {
      cb(res);
    });
  },

  insertOne: function (col, val, cb) {
    orm.insertOne("burger", col, val, function (res) {
      cb(res);
    });
  },

  updateOne: function (objValues, condition, cb) {
    orm.updateOne("burger", objValues, condition, function(res) {
      cb(res);
    });
  }
};


module.exports = burger;













module.exports = burger;