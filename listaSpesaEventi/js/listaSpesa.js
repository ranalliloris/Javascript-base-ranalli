let btnAggiungi=document.getElementById("btnAggiungi");
//btnAggiungi.onclick=aggiungiProdotto; //nome funzione senza parentesi

btnAggiungi.addEventListener("click",aggiungiProdotto,false);

let btnCancella=document.getElementById("btnCancella");
btnCancella.onclick=rimuoviTutto;

function aggiungiProdotto(e)
{
    console.log(e.type);
    //seleziono input con id="prodotto"
    let prodotto=document.getElementById("prodotto");
    //seleziono elemento ul con id="lista"
    let lista=document.getElementById("lista");

    let p=prodotto.value;
    lista.innerHTML+='<li class="prod-item">'+p+'</li>';

    let listaProdotti=document.getElementsByClassName("prod-item");
    for(let i=0; i<listaProdotti.length;i++)
    {
        listaProdotti[i].ondblclick=rimuoviElemento;
    }
    e.target.removeEventListener("click",aggiungiProdotto);
}

function rimuoviTutto()
{
    let lista=document.getElementById("lista");
    lista.innerHTML="";
}

function rimuoviElemento(e)
{

    e.target.remove();
}


