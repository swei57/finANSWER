//model/expenses.js
'use strict';
//import dependency
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//create new instance of the mongoose.schema. the schema takes an object that shows
//the shape of your database entries.
var ExpensesSchema = new Schema({
  title: String,
  amount: Number,
  type: String
});

// var Type = {
//     DEPOSIT: 1,
//     WITHDRAWAL: 2,
// };

//export our module to use in server.js
module.exports = mongoose.model('Expense', ExpensesSchema);