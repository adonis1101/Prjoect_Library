function totalBooksCount(books) {
  return books.length
}

function totalAccountsCount(accounts) {
  return accounts.length
}

function booksBorrowedCount(books) {
    //{booksBorrowed++}
    //console.log(booksBorrowed)
  }
  /*let out = 0
  for (let i=0; i<books.length; i++){
    if(!books.borrows[i] === true){
      console.log(out)
      return out +=
      //console.log(books[i].borrows)
    }
  }*/

  function getMostCommonGenres(books) {
    const items = books.map(book => book.genre);
    const genres = [...new Set(items)];
    const countGenres = [];
    for(let genre of genres){
      let counter = 0;
      for(let item of items){
        if(genre === item) counter++;
      };
      const input = {name: genre,
                      count: counter};
      countGenres.push(input);
    };
    return formatList(countGenres);
  }

function getMostPopularBooks(books) {
  newList = sortList(books)
  return newList.map(a => {
    return {
    name: a.title,
    count: a.borrows.length}
  }).slice(0,5)
}

function getMostPopularAuthors(books, authors) {
const sortedBooks = sortList(books)
console.log(sortedBooks)
//return sortedBooks.map(a => {
  //return {
//   name: a.name,
//   count: a.borrows.length}
// }).slice(0,5)
// 
}



function formatList (array){
    array.sort((acc, value) => acc.count > value.count ? -10 : 10);
    while(array.length > 5){
      array.pop();
    }
    return array;
  };

  function sortList(list) {
    return newList = list.sort((a,b) => b.borrows.length - a.borrows.length)
  }

module.exports = {
  totalBooksCount,
  totalAccountsCount,
  booksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
