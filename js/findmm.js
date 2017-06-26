window.onload=function () {
  var shuru=document.querySelector("#shuru");
  var next=document.querySelector("#f-next")
      shuru.onfocus=function () {
          shuru.style.border=" 1px solid #2CDB1A";
          shuru.style.boxShadow="0 0 3px  2px #CBE5C9"
      }
    shuru.onblur=function () {
        shuru.style.border=" 1px solid #CCC";
        shuru.style.boxShadow="0 0 0  0 white"
    }
    
}