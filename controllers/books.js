const db = require("../models/books");

module.exports = {
    findAll: function(req, res) {
      db.Book
        .find(req.params)
        .sort({ award_year: -1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    // findById: function(req, res) {
    //   db.Book
    //     .findById(req.params.id)
    //     .then(dbModel => res.json(dbModel))
    //     .catch(err => res.status(422).json(err));
    // },
    // create: async function(req,res) {
    //     user = req.params;
    //     id = user.id
    //     const {title, author, award_year} = req.body;
    //     const userById = await User.findById(id);
    //     const book = await Book.create({
    //         title,
    //         authors,
    //         award_year,
    //         user: userById
    //     });
    //     await book.save();
    // },    
    // userbyBook: async function(req,res) {
    //     const {id} = req.params;
    //     const userbyBook = await (await Book.findById(id)).populate('user');
    //     res.send(userbyBook);
    // }
}