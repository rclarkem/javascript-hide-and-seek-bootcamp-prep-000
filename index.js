
function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function increaseRankBy(n){
  let parsed = document.querySelectorAll('ul.ranked-list li')
  for(let i = 0; i < parsed.length; i++){
    parsed[i].innerHTML = parseInt(parsed[i].innerHTML) + n
  }
}

function deepestChild(){
  let tester;
  let base = document.querySelector('#grand-node').querySelectorAll('div')
  for(let i = 0; i < base.length; i++){
    tester = base[i]
  }
}
