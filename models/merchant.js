var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var merchantSchema = new mongoose.Schema({
	username: String,
	email: String,
	password: String,
	location: String,
	balance: Number
});

merchantSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("Merchant",merchantSchema);