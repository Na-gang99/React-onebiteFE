//Quiz 1. 영화 리뷰 정보 출력하기 (feat. 오펜하이머)
function printMovieReview({title, releaseYear, reviewers}) {
    console.log(` 제목 : ${title}`);
    console.log(` 개봉 : ${releaseYear}`);
    const [first_reviewer = "리뷰어 미정"] = reviewers;
    console.log( ` 첫 번째 리뷰어 : ${first_reviewer}`);
  }
  
  printMovieReview({
    title: "오펜하이머",
    releaseYear: 2023,
    reviewers: ["이정환", "김효빈", "김고은"],
  });
  
  printMovieReview({
    title: "웡카",
    releaseYear: 2024,
    reviewers: [],
  });

//Quiz 2. 평균 성적 출력하기
function printAvgScore(students) {
    for(const name in students){
        const sum = students[name].scores.reduce((a,b) => a + b , 0);
        console.log(`${name}: ${sum/students[name].scores.length}`);
    }
  }
  
  printAvgScore({
    이정환: { hobby: "테니스", scores: [10, 20, 30, 40, 50] },
    김효빈: { hobby: "테니스", scores: [90, 80, 30, 70, 50] },
    홍길동: { hobby: "의적", scores: [100, 100, 20, 20, 50] },
  });