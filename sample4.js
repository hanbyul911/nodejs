const numbers = [1,2,3];
const student = {
  "name" : "홍길동",
  "age" : 20,
  "score" : 90,
  "school" : "kosta"
}

for (let  i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// property (forOf)
for (let number of numbers) { // 꺼내서 바꾸려면 let으로 그러지 않으려면 const 사용, 실제 값을 바꾸는 것은 아니다.
  console.log(number);
  number += 1;
}

// 객체에서 사용 (forIn)
for (const key in student) {
    const element = student[key];
    console.log(key + " : " + element);
}


// 2-1. filter method
const words = ["aaa", "bbbb", "cccc", "ddddd", "eeeeee"];
const words2 = ["hello", "hell", "hi", "hey"];

const filteredWords = words.filter((word) => word.length >= 4)
                                      .forEach(word => console.log(word));

// console.log(filteredWords)
// // for (const word of filteredWords) {
// //   console.log(word);
// // }

// filteredWords.forEach(word => console.log(word));

words2.filter(word => word.includes('h')).forEach(word => console.log(word));