var btn = $('button') // getElementsByTagName과 같음
// console.log(btn);
// $('.className') == document.getElementsByClassName
// $('#id') == document.getElementById
// $('HTMLtag') == document.getElementsByTagName
$(document).ready(function(){
  // 1. 버튼을 클릭.
  // 1-1. 버튼을 찾아라
    var btn = $('.change-title');
    console.log(btn);

  // 1-2 클릭 이벤트 리스너 달아준다
    btn.on('click', function ()  {
      alert("버튼 누름!");
      // 2. title해당하는 부분을 찾는다.
      var str = prompt("제목을 뭘로 바꿀까?")
      $('.title').text(str);
      // 3. 내가 입력한 문자열로 바꿔준다.

    });

});
