function findAuthorById(authors, id) {
  return authors.find(author => author.id === id)
}

function findBookById(books, id) {
  let author = books.find(book => book.id === id) 
  return author
}

function partitionBooksByBorrowedStatus(books) {


}

function getBorrowersForBook(book, accounts) {
let allB = []
let renters = {...book}
console.log(renters)
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
