function totalBooksCount(books) {
  return books.length
}

function totalAccountsCount(accounts) {
  return accounts.length
}

function booksBorrowedCount(books) {
  let filtered = books.filter((book)=> {
  const [item] = book.borrows;
  return !item.returned}).length
  return filtered 
}

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
  let rentals = sortList(books);
  let found = rentals.map((a) => a.authorId);
  let foundAuthors = found.map((b, idx) => {
  const thisAuthor = authors.find((a => a.id === b))
  return  {name  : `${thisAuthor.name.first} ${thisAuthor.name.last}`,
          count : rentals[idx].borrows.length}
}); return foundAuthors.slice(0,5);

}

  //let author = authors.map((x) => x.id)
//console.log(foundAuthors)
  //for( i=0; i<found.length; i++){

  
    //console.log(authors)
  
    //console.log()
  //let match = authors.find((b) => fo);
  //console.log(found)

  //return authors.find()
  //const num = books.reduce((acc, {authorId, borrows}) => {
    //console.log(num)})}
  //(acc[authorId]) {
  // acc[authorId].push(borrows.length)
  // } else {
  //   acc[author] = borrows.length
  // }
  // console.log(acc)
  // },{} ) }
//for (let number of num ){
  //const total = num[number].reduce((a,b) => a + b);
  //num[number] = sum;
  //console.log(sum)
//}

  // const authors = sortedBooks.map((a => {return authors.find(b => a.authorId === b.id)}))
  // return authors
// }
// name: `${author.name.first} ${author.name.last}`
// count: sortedBooks.reduce(x,y) => 
  //const match = sortedBooks.map((b) => b.id === a.id)
  //return `${first.name}` 
//console.log(sortedBooks)
  //let result = (sortedBooks.id = ids); {
  //console.log(books) 
  //return sortedAuthors.push(result)
   
  //const ids = sortList(authors).map(a => a.author.id)




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
