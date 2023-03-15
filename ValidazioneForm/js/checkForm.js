let username=document.getElementById("username");
let password=document.getElementById("password");

username.addEventListener("blur", checkUsername, false);
password.addEventListener("blur", checkPassword, false);


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

function checkPassword(e)
{
    let textPass=password.value; 
    //textPass=e.target.value;
    let pError=password.nextElementSibling;
    pError.textContent="";
    if(textPass.length<8)
    {
        pError.textContent="Errore! La password deve essere di almeno 8 caratteri";
    }
}