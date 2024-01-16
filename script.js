var op=document.getElementById('op');
function display(n){
    op.value+=n;
}
function calculate(){
try{
   op.value=eval(op.value);
}
catch(err){
    alert('Invalid Data');
}
   
}
function clr(){
    op.value= " ";
}
function del(){

    op.value=op.value.slice(0,-1);
}

let  btnEl=document.getElementsByClassName("bg-hover");
for(let i=0;i<btnEl.length;i++){
    btnEl[i].addEventListener("click",()=>{
        btnEl[i].style.backgroundColor="rgb(56, 56, 56)";
        btnEl[i].style.borderRadius="50%";
        setTimeout(()=>{
            btnEl[i].style.backgroundColor="black";
        },120);
    })
   
}