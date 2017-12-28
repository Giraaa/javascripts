// 제목바꾸기
// 1. 버튼을 클릭
// 1-1. 버튼에 해당하는 HTML element를 찾는다.
// getElementsByTagName => 배열을 리턴
// getElementsByClassName
// getElementsByName
// getElementById => 1개만 리턴
var btn = document.getElementsByTagName('button')[1];
css selector
var btn = $('button')  //  겟엘리먼트바이테그네임을 요걸로 줄여벌임 ㄷㄷ
$('.button') //  클래스가 버튼이다
$('#button') //  아이디가 버튼이다



// console.log(btn);
// // 1.2. 해당 element에 click 이벤트 리스너를 달아준다.
// btn.onclick = function() {
//   alert("버튼이 클릭됨!");
//   var answer = prompt("제목을 뭐로 바꿀래?");
//   console.log(answer);
//   // 2. index 제목에 해당하는 부분을 찾아(HTML element)
//   var titles = document.getElementsByClassName('title');
//   for(var i=0; i<titles.length; i++) {
//     // 3. 사용자가 입력한 텍스트로 모두 바꿔줌
//     titles[i].textContent = answer;
//   }
//   alert("제목이 바뀜!");
// }
