
const buttonEl=document.getElementById("btn");
const textAreaEl=document.getElementById("texts");
const selectEl=document.getElementById("selBox");
const voiceOptionEl=[];
const speach=new SpeechSynthesisUtterance();

window.speechSynthesis.onvoiceschanged=()=>{
    voiceOptionEl=window.speechSynthesis.getVoices();
    speach.voice=voiceOptionEl[0];

   voiceOptionEl.forEach((voice,i)=>selectEl.options[i]=new option(voice.name,i))

}

buttonEl.addEventListener("click",()=>{
 speach.text=textAreaEl.value;
 window.speechSynthesis.speak(speach)
})