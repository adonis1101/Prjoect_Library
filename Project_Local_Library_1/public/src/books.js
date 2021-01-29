function findAuthorById(authors, id) {
  return authors.find(author => author.id === id)
}

function findBookById(books, id) {
  let author = books.find(book => book.id === id) 
  return author
}

function partitionBooksByBorrowedStatus(books) {
return books.reduce(
(acc, book) => {
 const [borrowed, returned] = acc;
 const recently = book.borrows[0]; 
if (recently.returned) {
    returned.push(book);
   } else {
    borrowed.push(book);
    }
      return acc;
    }, [[], []]);
}



function getBorrowersForBook(book, accounts) {
let accountObjs = book.borrows.map(a => {
  const borrower = accounts.find(account => a.id === account.id);
  return {...borrower, "returned": a.returned};
}
);
return accountObjs.slice(0,10);
} 







module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
