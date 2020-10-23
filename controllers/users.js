const db = require('../models');

module.exports = {
    findAll: function(req, res) {
        db.User
          .find(req.param)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    },
    // findById: function(req, res) {
    //     db.Book
    //       .findById(req.params.id)
    //       .then(dbModel => res.json(dbModel))
    //       .catch(err => res.status(422).json(err));
    // },
    // create: async function(req,res) {
    //     book = req.params;
    //     id = book.id
    //     const {name, email, password} = req.body;
    //     const bookById = await Book.findById(id);
    //     const book = await User.create({
    //         name,
    //         email,
    //         password,
    //         book: bookById
    //     });
    //     await user.save();
    // }, 
    // booksByUser: async function(req,res) {
    //     const {id} = req.params;
    //     const booksByUser = await (await User.findById(id)).populate('book');
    //     res.send(booksByUser)
    // }
}