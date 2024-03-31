// quiz 01 책 정보 확인하기
const book1 = {
    title: "한 입 크기로 잘라먹는 리액트",
    author: "이정환",
    // publishedYear 속성은 이 객체에는 없습니다.
  };
  
  const book2 = {
    title: "한 입 크기로 잘라먹는 리액트",
    author: "이정환",
    publishedYear : 2024,
  };
  
  function ispublishedYear(book){
    console.log("publishedYear" in book ? `출판년도는 ${book.publishedYear}입니다.` : `출판년도 정보가 없습니다.`);
  }
  
  ispublishedYear(book1);
  ispublishedYear(book2);
  