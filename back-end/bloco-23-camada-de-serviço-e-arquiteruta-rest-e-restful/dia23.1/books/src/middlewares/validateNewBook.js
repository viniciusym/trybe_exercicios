const validateNewBook = (req, res, next) => {
  const { body: { tittle, author_id } } = req;
  const isTittleValid = tittle.length >= 3;
  
}