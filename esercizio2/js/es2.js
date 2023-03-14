let txtTesto=document.getElementById("txtTesto");
let btnInverti=document.getElementById("inverti");

txtTesto.addEventListener("keyup", copiaTesto,false);
btnInverti.addEventListener("click", inverti, false);

function copiaTesto(e)
{

    let pTestoIns=document.getElementById("testoIns");
    pTestoIns.textContent=e.target.value;
}

function inverti(e)
{
    let txtTesto=document.getElementById("txtTesto");
    let pTestoIns=document.getElementById("testoIns");
    let testo=txtTesto.value;
    let arrTesto=testo.split(""); //trasforma la stringa in array
    arrTesto=arrTesto.reverse(); //inverte gli elementi dell'array (nel nostro caso i caratteri)
    txtTesto.value=arrTesto.toString(); // trasforma l'array in stringa
    pTestoIns=arrTesto.toString();


}