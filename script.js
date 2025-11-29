let jusmptolast  = document.querySelector(".jumptolast")
let jumptofirst = document.querySelector(".jumptofirst")
let next = document.querySelector(".Next")
let previous = document.querySelector(".Previous")
let displaybox = document.querySelector(".imagebox")
let heading1 = document.querySelector("h1")


let images = [

    {
        id : 0 , color : "red"
    },
    {
        id : 1, color : "green"
    },
    {
        id : 2 , color : "blue"
    },
    {
        id : 3, color : "orange"
    },
    {
        id : 4 , color : "purple"
    },
]

let counter = 0;


jumptofirst.addEventListener("click", ()=>{
   
 counter = 0;
  heading1.textContent = ""
    heading1.textContent = `Image ${counter+1} of 5`
 displayimage(counter);
 checking(counter)
})
jusmptolast.addEventListener("click", ()=>{
 counter = 4;
  heading1.textContent = ""
    heading1.textContent = `Image ${counter+1} of 5`
 displayimage(counter);
 checking(counter)
})
next.addEventListener("click",()=>{
    if(indexofimage != 4)
        previous.classList.remove("disable")
    counter++
      heading1.textContent = ""
    heading1.textContent = `Image ${counter+1} of 5`
    displayimage(counter);
    checking(counter)
})
previous.addEventListener("click",()=>{
    if(indexofimage != 0)
        previous.classList.remove("disable")
    counter--
      heading1.textContent = ""
    heading1.textContent = `Image ${counter+1} of 5`
    displayimage(counter);
    checking(counter)
})
function checking(indexofimage){
    if(indexofimage == 0)
        previous.classList.add("disable")
    else if (indexofimage == 4)
        next.classList.add("disable")
}

function displayimage(indexofimage){
   switch(indexofimage0)
   {
    case 0:displaybox.classList.add("red")
    break
    case 1:displaybox.classList.add("purple")
    break
    case 2:displaybox.classList.add("blue")
    break
    case 3:displaybox.classList.add("green")
    break
    case 4:displaybox.classList.add("orange")
    break
   }
};