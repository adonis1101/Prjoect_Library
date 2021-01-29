function findAccountById(accounts, id) {
  for (let i=0; i<accounts.length; i++){
  if (accounts[i].id === id)
  return accounts[i]
  //console.log(accounts)
  }
}

function sortAccountsByLastName(accounts) {

  accounts[name].lastName.sort((a, b) => a-b)
  console.log(accounts)
  

}

function numberOfBorrows(account, books) {}

function getBooksPossessedByAccount(account, books, authors) {}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  numberOfBorrows,
  getBooksPossessedByAccount,
};
