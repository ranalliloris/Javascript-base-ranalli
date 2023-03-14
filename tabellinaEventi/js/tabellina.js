let btnCalcola=document.getElementById("btnCalcola");

btnCalcola.addEventListener("click", calcolaTab, false);

function calcolaTab(e)
{
    let divRis=document.getElementById("risultato");
    let numero=document.getElementById("numero").value;
    divRis.innerHTML="";
    for(let i=1; i<=10; i++)
    {
        divRis.innerHTML+="<p>"+numero+" x "+i+" = "+(numero*i)+"</p>";
    }
}