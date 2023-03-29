let inputTag=document.getElementsByTagName("input");

for(let i=0; i<inputTag.length; i++)
{
    inputTag[i].addEventListener("blur", checkInput, false);
}

let infoSw=document.getElementById("info_sw");
let infoWeb=document.getElementById("info_web");

infoSw.style.display="none";
infoWeb.style.display="none";

let corso=document.getElementById("corso");
corso.addEventListener("change", displayCorso, false);

function displayCorso(e)
{
    if(e.target.value=="sw")
    {
        infoSw.style.display="block";
        infoWeb.style.display="none";
    }
    else
    {
        infoWeb.style.display="block";
        infoSw.style.display="none";
    }
}


function checkInput(e)
{
    //e.target --> casella di testo sulla quale si
    //è attivato l'evento blur
    //.value preleva il contenuto di questa casella di testo
    let content=e.target.value;
    let pError=e.target.nextElementSibling;
    pError.textContent="";
    let testoErrore="";
    switch(e.target.id)
    {
        case "username":
            if(content.indexOf(" ")!=-1)
            {
                //STAMPARE ERRORE
                testoErrore="Errore!!! L'username non può contenere spazi.";
            }
            break;
        case "password":
            if(content.length<8)
            {
                testoErrore="Errore! La password deve essere di almeno 8 caratteri";
            }
            break;
        case "email":
            if(content.indexOf("@")==-1)
            {
                testoErrore="Errore! Formato mail non valido";
            }
            break;
        case "eta":
            if(content<0 || content>99)
            {
                testoErrore="Errore! L'età deve essere compresa tra 0 e 99";
            }
            break;
    }
    pError.textContent=testoErrore;
}