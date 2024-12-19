let form=document.querySelector('form');
let input=document.querySelector("input");
let ul=document.querySelector('ul');


let saveTodo=(e)=>{
   e.preventDefault();
   let li=document.createElement('li')
   li.innerText=input.value;
   li.className="list-group-item"
   li.style.backgroundColor="orange"
   ul.appendChild(li);
   
   let dltbutton=document.createElement('button');
   dltbutton.innerText='Delete';
   dltbutton.className="btn btn-sm btn-danger float-end "
   li.appendChild(dltbutton);

   form.reset();
}
form.addEventListener('submit',saveTodo);


let dltTodo=(e)=>{
   if(e.target.className.includes('btn-danger')){
    let see= e.target.parentElement;
     if(window.confirm("Are you sure")){
        ul.removeChild(see);
     }
   
   }
  
}

ul.addEventListener('click',dltTodo);