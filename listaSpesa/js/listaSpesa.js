
let ulLista=document.getElementById("lista");

console.log(ulLista);

let liLista=document.getElementsByTagName("li");
console.log(liLista);

let liAlimento=document.getElementsByClassName("alimento");
console.log(liAlimento);

let liAlimento2=document.querySelectorAll(".alimento");
console.log(liAlimento2);

ulLista.innerHTML+='<li class="alimento">Prosciutto Crudo</li>';

for(let i=0; i<liAlimento.length;i++)
{
    liAlimento[i].textContent=liAlimento[i].textContent.toUpperCase();
}