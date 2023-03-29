let username=document.getElementById("username");
let password=document.getElementById("password");
let email=document.getElementById("email");
let eta=document.getElementById("eta");

username.addEventListener("blur", checkUsername, false);
password.addEventListener("blur", checkPassword, false);
email.addEventListener("blur",checkEmail, false);
eta.addEventListener("blur",checkEta, false);


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

function checkEmail(e)
{
    let txtEmail=email.value;
    let pError=email.nextElementSibling;
    pError.textContent="";
    if(txtEmail.indexOf("@")==-1)
    {
        pError.textContent="Errore! Formato mail non valido";
    }
}

function checkEta(e)
{
    let txtEta=eta.value;
    let pError=eta.nextElementSibling;
    pError.textContent="";
    if(txtEta<0 || txtEta>99)
    {
        pError.textContent="Errore! L'età deve essere compresa tra 0 e 99";
    }
}
