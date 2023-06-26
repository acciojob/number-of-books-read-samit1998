const library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

const numberOfBooksRead = (library) => {
  // write your code here
	for (let bookInd in library) {
    if (library.hasOwnProperty(bookInd)) {
      if (library[bookInd].readingStatus === true) {
        count++;
      }
    }
  }

  return count;
};

// Do not change the code below

alert(numberOfBooksRead());
