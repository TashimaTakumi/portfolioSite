var openTiming;
var setOK=false;
var opening=false;

function modalOn(dispNo){
  opening=true;

  blackWindow.style.visibility="visible";
  blackWindow.style.opacity="0.8";

  openTiming=window.scrollTop;
  main.style.position="fixed";
  main.style.top=`${openTiming*-1}px`;
  main.style.overflowY="scroll";

  const rotater = setInterval(()=>{
    splashImg.style.transition="transform 0.5s"
    splashImg.style.transform="rotateZ(360deg)";
    setTimeout(()=>{
      splashImg.style.transition="none";
      splashImg.style.transform="";
    },0.5*1000);
    if(setOK || !opening){
      clearInterval(rotater);
    }
  },2*1000);

  const openModal=setTimeout(()=>{
    if(opening){
      console.log("open!!");
      setOK=true;
      modalWindow.style.visibility="visible";
      modalWindow.style.opacity="1";
      modalWindow.style.width="80vw";
      modalWindow.style.height="95vh";
      setTimeout(()=>{
        modalContentsContainer.style.visibility="visible";
        modalContentsContainer.style.opacity="1";
        cancelButtonContainer.style.visibility="visible";
        cancelButtonContainer.style.opacity="1";
      },1*1000);
    }
  },3.5*1000);
}


function modalOff(){
  blackWindow.style.visibility="hidden";
  blackWindow.style.opacity="0";
  modalWindow.style.visibility="hidden";
  modalWindow.style.opacity="0";
  modalContentsContainer.style.visibility="hidden";
  modalContentsContainer.style.opacity="0";
  cancelButtonContainer.style.visibility="hidden";
  cancelButtonContainer.style.opacity="0";

  setOK=false;
  opening=false;

  main.style.position="absolute";
  main.style.top=0;
  window.scrollTo(0,openTiming);

}

window.onscroll = function(){
  scrollTop=window.pageYoffset || document.documentElement.scrollTop;
  ProfileContainerTop=ProfileContainer.getBoundingClientRect().top + scrollTop;
  if(window.scrollTop >= ProfileContainerTop){
    console.log("hey!");
    nav.style.visibility="visible";
    nav.style.opacity="1";
  }else{
    nav.style.visibility="none";
    nav.style.opacity="0";
  }
}
