const student = {
  "name" : "홍길동",
  "score" : 90,
  "age" : 20,
  "school" : "kosta",
  instroduce : function() {
    console.log("나의 이름은 홍길동입니다.");
  }
}

// const name = "홍길동";
// const score = 90;

// const student2 = {
//   name, 
//   score
// }

console.log(student);
// console.log(student2);

// 객체의 구조분해 할당
// const name = student.name;
// const score = student.score;
// const age = student.age;
// const school = student.age;

// console.log(name, score, age, school);
let {name, score, age, school, instroduce} = student;
console.log(name);

instroduce();

// 3. 배열 구조 분해 할당
const arr = [1,2,3];

const n1 = arr[0];
const n2 = arr[1];
const n3 = arr[2];

console.log(n1,n2,n3);

const [n4, n5, n6] = arr;
console.log(n4,n5,n6);
