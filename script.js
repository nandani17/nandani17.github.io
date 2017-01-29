function open_card() {
  document.getElementById('outside').className = 'open-card';

 
       var audio = document.getElementById("audio");
       audio.play();
                 }


function close_card() {
  document.getElementById('outside').className = '';
}
