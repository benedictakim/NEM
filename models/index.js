const books = require("../controllers/books");
const users = require("../controllers/users");

module.exports = {
    Book: require("./books"),
    User: require("./users")
};
  