
function track(){
  track1=document.querySelector('.track-js')
  erro=document.querySelector('.error')
 let inputTrack=track1.value;
 if (inputTrack.length<7||0) {
  alert('enter more')
  track1.value=' '
 }if (inputTrack==='DK-BTN-QTJ') {
  erro.innerHTML="found";
  window.location.href='pack.html'
  track1.value='追踪编码 '
  
  } 
}
  