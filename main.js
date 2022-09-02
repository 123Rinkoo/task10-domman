let nme=document.getElementById("name");
let email=document.getElementById("email")
let form=document.getElementById("my-form");
form.addEventListener("submit", nmelocal);
function nmelocal(e)
{
    e.preventDefault();
    localStorage.setItem("Name",`${nme.value}`);
    localStorage.setItem("Email",`${email.value}`);
    
}