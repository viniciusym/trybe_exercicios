const { getBookByAuthorId } = require('../book/book');

const getByAuthorId = async (req, res, next) => {
  const { query: { author_id: authorId } } = req;
  if(authorId === undefined) {
    next();
    return;
  };
  const book = await getBookByAuthorId(authorId);

  res.status(200).json(book)
};

module.exports = getByAuthorId;