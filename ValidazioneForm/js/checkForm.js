let username=document.getElementById("username");
username.addEventListener("blur", checkUsername,false);

function checkUsername(e)
{
    let testoUser=username.value;
    let pError=username.nextElementSibling; //è il paragrafo
    //successivo alla casella di testo username
    pError.textContent="";
    if(testoUser.indexOf(" ")!=-1)
    {
        //STAMPARE ERRORE
        pError.textContent="Errore!!! L'username non può contenere spazi.";
    }
}
