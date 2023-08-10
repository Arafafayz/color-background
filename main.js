let hexArray =[0,1,2,3,4,5,6,7,8,9,"A","B","c","d","e","f"]
let color=[]

for(let i=0 ; i < 6 ; i++){
    color.push(hexArray[Math.floor(Math.random()*hexArray.length)]);
}
let finalcolor= `#${color.join("")}`

document.body.style.backgroundColor = finalcolor;


