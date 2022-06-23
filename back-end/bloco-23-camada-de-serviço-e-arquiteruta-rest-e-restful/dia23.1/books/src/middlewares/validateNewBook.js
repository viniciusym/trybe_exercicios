const { getAuthorById } = require('../author/author');

const validateNewBook = async (req, res, next) => {
  const { body: { tittle, author_id } } = req;
  const isTittleValid = tittle.length >= 3;
  const isAuthorValid = !!await getAuthorById(author_id);
  if(!isAuthorValid || !isTittleValid) {
    return res.status(400).json({ message: 'dados inválidos'});
  };
  next();
};

module.exports = validateNewBook;