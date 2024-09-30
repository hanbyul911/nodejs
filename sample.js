console.log(a); // 오잉 호이스팅 안되는데용 -> undefined  된 것 자체가 호이스팅이다.
// console.log(b); // 아래 선언한 것을 인지하지 못해서 에러가 난다.
// console.log(f(1,1));  // const 도 실행 전 할당되지 않는다.
// console.log(f2(1,1)); // 함수를 변수에 선언하는 것은 호이스팅 되지 않는다. 
//함수자체를 선언하면 메모리에 함수 전체가 올라가서 바로 실행 가능
console.log(add3(1,2));

console.log(1+1);

var a = 1; // var : 전역변수 호이스팅 -> 끌어올려서 변수 설정
let b; // let : 지역변수 값이 재할당 되는 변수
const f = function add(n1, n2) { // const : 상수, 값이 재할당 되지 않음 (함수가 할당됨)
  return n1 + n2;
}

var f2 = function add2(n1, n2) {
  return n1 + n2; 
}

function add3(n1, n2) {
  return n1 + n2;
}