const container = document.querySelector('.container');
const btn = document.querySelector('.reset');
const btn1=document.querySelector('.red');


let square = parseInt(prompt('Choose grid size btn 2 to 100'));
generateDivs(square);

btn.addEventListener('click',()=>{
    location.reload(true);
})

function addDiv (){
    const newDiv = document.createElement('div');
     newDiv.addEventListener('mouseover', ()=>{
         newDiv.style.backgroundColor = 'black';
         
     })
    container.appendChild(newDiv);
    return newDiv;
}


function NumberOfSquares (amount)
{
    for (let index = 0; index < amount; index++) 
    {
         addDiv();
    }
   
}

function generateDivs(amount) 
{
    let squares = amount*amount;
    NumberOfSquares(squares);
    container.style.cssText = `grid-template-columns: repeat(${amount},1fr);`
}
