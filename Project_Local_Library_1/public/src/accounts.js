function findAccountById(accounts, id) {
  for (let i=0; i<accounts.length; i++){
  if (accounts[i].id === id)
  return accounts[i]
  }
}

function sortAccountsByLastName(accounts) {
let allUsers = accounts.sort((a,b) =>
a.name.last.toLowerCase() < b.name.last.toLowerCase() ? -1 : 1
)
return allUsers
}


function numberOfBorrows(account, books) {
  return books.reduce((item, book) => {
    const total = book.borrows.reduce((a, borrow) => {
    return borrow.id === account.id ? +1 : a}, 0);
    return item + total; 
  }, 0);
}

function getBooksPossessedByAccount(account, books, authors) {
return books.filter((book) => {
const recents = book.borrows[0];
return !recents.returned && recents.id === account.id 
}).map((book) => {const author = authors.find((author) => author.id === book.authorId);
  return {...book, author}
  });
}


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  numberOfBorrows,
  getBooksPossessedByAccount,
};
