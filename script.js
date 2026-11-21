// URL to HTML Audio File
var URL = window.location.hash.slice(1);
spaces = URL.replace(/%20/g, " ");
document.getElementById('linkurl').value = spaces;
document.getElementById('source').src = URL;
var player = document.getElementById('player');


// Autoplay Audio on Load (not working)
window.onload=function(){
 player.play();
}


// Hide Instructions onClick
function hideInst(){
 document.getElementById('instructions').style.display = "none";
}


// Repeat Button
function repeat(){
 player.currentTime -= 5.0;
}


// Autoplay + below
var fileName = URL.substring(URL.lastIndexOf('/')+1); //0123.mp3
var fileExtension = fileName.slice(-4); //.mp3
var trackNumber = fileName.slice(0, -4); //0123
var trackLength = trackNumber.length;
var trackNumberShort = parseInt(trackNumber); //123
var nextTrackShort = trackNumberShort+1; //124
var nextTrack = String(nextTrackShort).padStart(trackLength, '0'); //0124
var autoPlay = false;

function autoOn() {
 autoPlay = true;
 document.getElementById('autoon').style.display = "block";
 document.getElementById('autooff').style.display = "none";
};
function autoOff() {
 autoPlay = false;
 document.getElementById('autoon').style.display = "none";
 document.getElementById('autooff').style.display = "block";
};


// Play/Pause
var playing = false;

function togglePlay() {
  playing ? player.pause() : player.play();
};

player.onplaying = function() {
 playing = true;
 document.getElementById('pause').style.display = "block";
 document.getElementById('play').style.display = "none";
};
player.onpause = function() {
 playing = false;
 document.getElementById('pause').style.display = "none";
 document.getElementById('play').style.display = "block";
 if (document.getElementById('percent').innerHTML != "100%") {
  player.currentTime -= 3.0;
 }
 else if (autoPlay == true) {
  window.location.href = "#" + imgsrc + "/" + nextTrack + fileExtension;
  location.reload();
 }
};


var speed = '1x';


// Countdown Text
player.addEventListener("timeupdate", function() {
 var timeleft = document.getElementById('timeleft'),
  duration = parseInt( player.duration ),
  currentTime = parseInt( player.currentTime ),
  timeLeft = duration - currentTime,
  sp, mp, sr, mr, st, mt;

 sp = currentTime % 60;
 mp = Math.floor(currentTime/60);
 sp = sp < 10 ? "0"+sp : sp;
 mp = mp < 10 ? "0"+mp : mp;

 sr = timeLeft % 60;
 mr = Math.floor(timeLeft/60);
 sr = sr < 10 ? "0"+sr : sr;
 mr = mr < 10 ? "0"+mr : mr;

 st = duration % 60;
 mt = Math.floor(duration/60);
 st = st < 10 ? "0"+st : st;
 mt = mt < 10 ? "0"+mt : mt;

var  XXSdura=duration   /0.25;
var  XXScurr=currentTime/0.25;
var  XXSleft=timeLeft   /0.25;
var   XSdura=duration   /0.50;
var   XScurr=currentTime/0.50;
var   XSleft=timeLeft   /0.50;
var    Sdura=duration   /0.75;
var    Scurr=currentTime/0.75;
var    Sleft=timeLeft   /0.75;
var    Fdura=duration   /1.25;
var    Fcurr=currentTime/1.25;
var    Fleft=timeLeft   /1.25;
var   XFdura=duration   /1.50;
var   XFcurr=currentTime/1.50;
var   XFleft=timeLeft   /1.50;
var  XXFdura=duration   /1.75;
var  XXFcurr=currentTime/1.75;
var  XXFleft=timeLeft   /1.75;
var XXXFdura=duration   /2.00;
var XXXFcurr=currentTime/2.00;
var XXXFleft=timeLeft   /2.00;

var XXSsp = Math.round(XXScurr % 60);
var XXSmp = Math.floor(XXScurr/60);
var XXSsp = XXSsp < 10 ? "0"+XXSsp : XXSsp;
var XXSmp = XXSmp < 10 ? "0"+XXSmp : XXSmp;
var XXSsr = Math.round(XXSleft % 60);
var XXSmr = Math.floor(XXSleft/60);
var XXSsr = XXSsr < 10 ? "0"+XXSsr : XXSsr;
var XXSmr = XXSmr < 10 ? "0"+XXSmr : XXSmr;
var XXSst = Math.round(XXSdura % 60);
var XXSmt = Math.floor(XXSdura/60);
var XXSst = XXSst < 10 ? "0"+XXSst : XXSst;
var XXSmt = XXSmt < 10 ? "0"+XXSmt : XXSmt;
 
var XSsp = Math.round(XScurr % 60);
var XSmp = Math.floor(XScurr/60);
var XSsp = XSsp < 10 ? "0"+XSsp : XSsp;
var XSmp = XSmp < 10 ? "0"+XSmp : XSmp;
var XSsr = Math.round(XSleft % 60);
var XSmr = Math.floor(XSleft/60);
var XSsr = XSsr < 10 ? "0"+XSsr : XSsr;
var XSmr = XSmr < 10 ? "0"+XSmr : XSmr;
var XSst = Math.round(XSdura % 60);
var XSmt = Math.floor(XSdura/60);
var XSst = XSst < 10 ? "0"+XSst : XSst;
var XSmt = XSmt < 10 ? "0"+XSmt : XSmt;
 
var Ssp = Math.round(Scurr % 60);
var Smp = Math.floor(Scurr/60);
var Ssp = Ssp < 10 ? "0"+Ssp : Ssp;
var Smp = Smp < 10 ? "0"+Smp : Smp;
var Ssr = Math.round(Sleft % 60);
var Smr = Math.floor(Sleft/60);
var Ssr = Ssr < 10 ? "0"+Ssr : Ssr;
var Smr = Smr < 10 ? "0"+Smr : Smr;
var Sst = Math.round(Sdura % 60);
var Smt = Math.floor(Sdura/60);
var Sst = Sst < 10 ? "0"+Sst : Sst;
var Smt = Smt < 10 ? "0"+Smt : Smt;
 
var Fsp = Math.round(Fcurr % 60);
var Fmp = Math.floor(Fcurr/60);
var Fsp = Fsp < 10 ? "0"+Fsp : Fsp;
var Fmp = Fmp < 10 ? "0"+Fmp : Fmp;
var Fsr = Math.round(Fleft % 60);
var Fmr = Math.floor(Fleft/60);
var Fsr = Fsr < 10 ? "0"+Fsr : Fsr;
var Fmr = Fmr < 10 ? "0"+Fmr : Fmr;
var Fst = Math.round(Fdura % 60);
var Fmt = Math.floor(Fdura/60);
var Fst = Fst < 10 ? "0"+Fst : Fst;
var Fmt = Fmt < 10 ? "0"+Fmt : Fmt;

var XFsp = Math.round(XFcurr % 60);
var XFmp = Math.floor(XFcurr/60);
var XFsp = XFsp < 10 ? "0"+XFsp : XFsp;
var XFmp = XFmp < 10 ? "0"+XFmp : XFmp;
var XFsr = Math.round(XFleft % 60);
var XFmr = Math.floor(XFleft/60);
var XFsr = XFsr < 10 ? "0"+XFsr : XFsr;
var XFmr = XFmr < 10 ? "0"+XFmr : XFmr;
var XFst = Math.round(XFdura % 60);
var XFmt = Math.floor(XFdura/60);
var XFst = XFst < 10 ? "0"+XFst : XFst;
var XFmt = XFmt < 10 ? "0"+XFmt : XFmt;

var XXFsp = Math.round(XXFcurr % 60);
var XXFmp = Math.floor(XXFcurr/60);
var XXFsp = XXFsp < 10 ? "0"+XXFsp : XXFsp;
var XXFmp = XXFmp < 10 ? "0"+XXFmp : XXFmp;
var XXFsr = Math.round(XXFleft % 60);
var XXFmr = Math.floor(XXFleft/60);
var XXFsr = XXFsr < 10 ? "0"+XXFsr : XXFsr;
var XXFmr = XXFmr < 10 ? "0"+XXFmr : XXFmr;
var XXFst = Math.round(XXFdura % 60);
var XXFmt = Math.floor(XXFdura/60);
var XXFst = XXFst < 10 ? "0"+XXFst : XXFst;
var XXFmt = XXFmt < 10 ? "0"+XXFmt : XXFmt;

var XXXFsp = Math.round(XXXFcurr % 60);
var XXXFmp = Math.floor(XXXFcurr/60);
var XXXFsp = XXXFsp < 10 ? "0"+XXXFsp : XXXFsp;
var XXXFmp = XXXFmp < 10 ? "0"+XXXFmp : XXXFmp;
var XXXFsr = Math.round(XXXFleft % 60);
var XXXFmr = Math.floor(XXXFleft/60);
var XXXFsr = XXXFsr < 10 ? "0"+XXXFsr : XXXFsr;
var XXXFmr = XXXFmr < 10 ? "0"+XXXFmr : XXXFmr;
var XXXFst = Math.round(XXXFdura % 60);
var XXXFmt = Math.floor(XXXFdura/60);
var XXXFst = XXXFst < 10 ? "0"+XXXFst : XXXFst;
var XXXFmt = XXXFmt < 10 ? "0"+XXXFmt : XXXFmt;

 perc = (currentTime/duration)*100;
 percround = Math.floor(perc);

 if (speed==='¼x') {
  passed.innerHTML = XXSmp+":"+XXSsp;
  remaining.innerHTML = "-"+XXSmr+":"+XXSsr;
  total.innerHTML = XXSmt+":"+XXSst;
 }
 else if (speed==='½x') {
  passed.innerHTML = XSmp+":"+XSsp;
  remaining.innerHTML = "-"+XSmr+":"+XSsr;
  total.innerHTML = XSmt+":"+XSst;
 }
 else if (speed==='¾x') {
  passed.innerHTML = Smp+":"+Ssp;
  remaining.innerHTML = "-"+Smr+":"+Ssr;
  total.innerHTML = Smt+":"+Sst;
 }
 else if (speed==='1x') {
  passed.innerHTML = mp+":"+sp;
  remaining.innerHTML = "-"+mr+":"+sr;
  total.innerHTML = mt+":"+st;
 }
 else if (speed==='1¼x') {
  passed.innerHTML = Fmp+":"+Fsp;
  remaining.innerHTML = "-"+Fmr+":"+Fsr;
  total.innerHTML = Fmt+":"+Fst;
 }
 else if (speed==='1½x') {
  passed.innerHTML = XFmp+":"+XFsp;
  remaining.innerHTML = "-"+XFmr+":"+XFsr;
  total.innerHTML = XFmt+":"+XFst;
 }
 else if (speed==='1¾x') {
  passed.innerHTML = XXFmp+":"+XXFsp;
  remaining.innerHTML = "-"+XXFmr+":"+XXFsr;
  total.innerHTML = XXFmt+":"+XXFst;
 }
 else if (speed==='2x') {
  passed.innerHTML = XXXFmp+":"+XXXFsp;
  remaining.innerHTML = "-"+XXXFmr+":"+XXXFsr;
  total.innerHTML = XXXFmt+":"+XXXFst;
 } else {
  passed.innerHTML = mp+":"+sp;
  remaining.innerHTML = "-"+mr+":"+sr;
  total.innerHTML = mt+":"+st;
 }

 percent.innerHTML = percround+"%";

 progression.style.width = perc+"%";

}, false);


// Playback Speed
function slow(){
 if (speed==='¼x') {
  player.playbackRate = 0.25;
  document.getElementById('speedtext').innerHTML = '¼x';
  speed = '¼x';
 }
 else if (speed==='½x') {
  player.playbackRate = 0.25;
  document.getElementById('speedtext').innerHTML = '¼x';
  speed = '¼x';
 }
 else if (speed==='¾x') {
  player.playbackRate = 0.5;
  document.getElementById('speedtext').innerHTML = '½x';
  speed = '½x';
 }
 else if (speed==='1x') {
  player.playbackRate = 0.75;
  document.getElementById('speedtext').innerHTML = '¾x';
  speed = '¾x';
 }
 else if (speed==='1¼x') {
  player.playbackRate = 1;
  document.getElementById('speedtext').innerHTML = '1x';
  speed = '1x';
 }
 else if (speed==='1½x') {
  player.playbackRate = 1.25;
  document.getElementById('speedtext').innerHTML = '1¼x';
  speed = '1¼x';
 }
 else if (speed==='1¾x') {
  player.playbackRate = 1.5;
  document.getElementById('speedtext').innerHTML = '1½x';
  speed = '1½x';
 }
 else if (speed==='2x') {
  player.playbackRate = 1.75;
  document.getElementById('speedtext').innerHTML = '1¾x';
  speed = '1¾x';
 }
  else {
  player.playbackRate = 1;
  document.getElementById('speedtext').innerHTML = '1x';
  speed = '1';
 }
}

function fast(){
 if (speed==='¼x') {
  player.playbackRate = 0.5;
  document.getElementById('speedtext').innerHTML = '½x';
  speed = '½x';
 }
 else if (speed==='½x') {
  player.playbackRate = 0.75;
  document.getElementById('speedtext').innerHTML = '¾x';
  speed = '¾x';
 }
 else if (speed==='¾x') {
  player.playbackRate = 1;
  document.getElementById('speedtext').innerHTML = '1x';
  speed = '1x';
 }
 else if (speed==='1x') {
  player.playbackRate = 1.25;
  document.getElementById('speedtext').innerHTML = '1¼x';
  speed = '1¼x';
 }
 else if (speed==='1¼x') {
  player.playbackRate = 1.5;
  document.getElementById('speedtext').innerHTML = '1½x';
  speed = '1½x';
 }
 else if (speed==='1½x') {
  player.playbackRate = 1.75;
  document.getElementById('speedtext').innerHTML = '1¾x';
  speed = '1¾x';
 }
 else if (speed==='1¾x') {
  player.playbackRate = 2;
  document.getElementById('speedtext').innerHTML = '2x';
  speed = '2x';
 }
 else if (speed==='2x') {
  player.playbackRate = 2;
  document.getElementById('speedtext').innerHTML = '2x';
  speed = '2x';
 }
 else {
  player.playbackRate = 1;
  document.getElementById('speedtext').innerHTML = '1x';
  speed = '1';
 }
}


var artvis = 'visible';


// Togle Album Artwork
function showArt(){
 document.getElementById('progress').style.width="calc(100% - 206px)";
 document.getElementById('progress').style.left="104px";
 document.getElementById('showart').style.display="none";
 document.getElementById('hideart').style.display="block";
 artvis = 'visible';
}
function hideArt(){
 document.getElementById('progress').style.width="calc(100% - 154px)";
 document.getElementById('progress').style.left="52px";
 document.getElementById('showart').style.display="block";
 document.getElementById('hideart').style.display="none";
 artvis = 'hidden';
}


// For following functions
var link = document.getElementById('linkurl');


// Show and Hide Art with Esc
document.onkeydown = checkKey;
function checkKey(e) {
 e = e || window.event;
 
 if (artvis === 'hidden') {
  if (e.keyCode == '27') {
   showArt();
  }
 }else if (artvis === 'visible') {
  if (e.keyCode == '27') {
   hideArt();
  }
 }


// Seek and Speed with Arrows
 if (link !== document.activeElement) {
  if (e.keyCode == '38') {
   fast();
  }
  else if (e.keyCode == '40') {
   slow();
  }
  else if (e.keyCode == '37') {
   player.currentTime -= 5.0;
  }
  else if (e.keyCode == '39') {
   player.currentTime += 5.0;
  }
  else if (e.keyCode == '32') {
   togglePlay();
  }
 }
}


// New URL on Input Enter Press
link.addEventListener("keydown", function (e) {
 if (e.key === "Enter") {
  validate(e);
 }
});
function validate(e) {
 var text = e.target.value;
 window.location.href = "#" + text;
 location.reload();
}


// Propagate Art to IMG tag
imgsrc = URL.substring(0, URL.lastIndexOf('/'));
document.getElementById('art').src = imgsrc + "/folder.jpg";


// Browse Link
document.getElementById('browselink').href = imgsrc;


// Popout Player
function popoutPlayer() {
 window.open(window.location.href, "_blank", "toolbar=no,scrollbars=no,resizable=no,bottom=0,left=0,width=500,height=77");
}