
const score={
  win:0,
  lose:0,
  tie:0,
}
let interval

function play(playerpick){
  const computerplay=computerpick()
  if (computerplay===playerpick){
      score.tie+=1
      displayplayed(computerplay,playerpick,"Tie")

  }
  else if((computerplay=="rock" && playerpick=="paper")||(computerplay=="paper" && playerpick=="scissor") || (computerplay=="scissor" && playerpick=="rock")){
    score.win+=1
    displayplayed(computerplay,playerpick,"Won")

  }
  else{
    score.lose+=1
    displayplayed(computerplay,playerpick,"Lost")
  }
  displayscore()



}
function computerpick(){
  let computerplaynum=Math.random()
  let computerplay
  if(computerplaynum<=1/3){
      computerplay="rock";
  }
  else if ((computerplaynum>1/3) && (computerplaynum<=2/3)){
      computerplay="paper";
  }
  else{
      computerplay="scissor";
  }
  return computerplay
}

function displayscore(){
  document.querySelector('.win').innerHTML=score.win;
  document.querySelector('.ties').innerHTML=score.tie;
  document.querySelector('.loss').innerHTML=score.lose;
}

function displayplayed(computerplay,playerpick,result){
  document.querySelector(".played").innerHTML=`${result}- &nbspYou Played &nbsp<img src='images/${playerpick}.png' class='display-images'>&nbsp Computer Played &nbsp<img src='images/${computerplay}.png' class='display-images'>`
}

function reset(){
  score.win=0;
  score.lose=0;
  score.tie=0;
  displayscore()
  document.querySelector(".played").innerHTML=""
}

function autoplay(){
  const auto=document.querySelector('#autoplay')
  if(auto.innerHTML==="AutoPlay"){
    auto.innerHTML=`Stop`
    console.log(auto.onClick)
    interval=setInterval(()=>{const playerpick=computerpick();
    play(playerpick)},1000)}
  else{
    const auto=document.querySelector('#autoplay')
    auto.innerHTML=`AutoPlay`
    console.log("hi")
    clearInterval(interval)
    
  }

}

document.body.addEventListener("keydown",(event)=>{
  if (event.key==="r"){
    play("rock")
  }
  else if(event.key==="p"){
    play("paper")
  }
  else if(event.key==="s"){
    play("scissor")
  }
})


