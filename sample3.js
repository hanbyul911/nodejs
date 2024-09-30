// 콜백(callback) 함수 : 자신이 아닌 다른 함수의 인자로 전달되는 함수

function add(n1, callBackFunction) {
  callBackFunction();
}

const f = (a) => console.log(a + "번째 함수입니다.");
function main(a, f) {
  f(a);
}

const c = (a) => {
  console.log(a);
  console.log(a);
  console.log(a);
  console.log(a);
}

main("a", f);
console.log("\n");
main("test", c);

function sub(f1) {
  f1();
}

sub(() => {console.log("매개변수가 없는 함수입니다.")});

function complex(n1, n2, f) {
  const result = f(n1, n2);
  console.log(result);
}

const addTwoNumber = (a,b) => a+b;
const mult = (a,b) => a*b;

complex(1, 2, addTwoNumber);
complex(1, 2, mult);

const student = {
  "name" : "홍길동",
  "score" : 90
}

const student1 = student;
console.log("student1 == student", student1 == student); // 얕은 비교, 참조값을 비교
console.log("student1 === student", JSON.stringify(student1) === JSON.stringify(student)); // 깊은 비교, 값을 비교

const student2 = {...student};
console.log("student2 == student", student2 == student); // 얕으 비교, 참조값 비교
console.log("student2 === student", JSON.stringify(student2)=== JSON.stringify(student)); // 깊은 비교, 값 비교

