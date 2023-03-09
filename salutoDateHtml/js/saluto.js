let salutoH1=document.getElementById("saluto");

let oggi=new Date();

let h=oggi.getHours();

if(h>=0 && h<=11)
{
    salutoH1.textContent="Buongiorno";
    console.log("Buongiorno");
}
else if(h>=12 && h<=17)
{
    salutoH1.textContent="Buon Pomeriggio";
    console.log("Buon Pomeriggio");
}
else
{
    salutoH1.textContent="Buona sera";
    console.log("Buona sera");
}

console.log("id= "+salutoH1.id);
console.log("class= "+salutoH1.className)
console.log(salutoH1.classList);
salutoH1.classList.toggle("mt-2");