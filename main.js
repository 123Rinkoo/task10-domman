let nme=document.getElementById("name");
let email=document.getElementById("email")
let form=document.getElementById("my-form");
form.addEventListener("submit", nmelocal);
// localStorage.clear();
function nmelocal(e)
{
    e.preventDefault();
    // localStorage.setItem("Name",`${nme.value}`);
    // localStorage.setItem("Email",`${email.value}`);

    let obj={
        "name": nme.value,
        "email": email.value
    }
    var jsonvala= JSON.stringify(obj); //JSON.parse(....) karne se vapis pehla jaise ho jayega...
    localStorage.setItem("myobj",jsonvala);
    //lekin ek dikkat hai isme ....humne object bna liya, string mai bhi conver kar diya hai but jav hum naya obj banayenge ya form mai nayi value daalenge to piche vali value hat jati hai...

}
window.onload= function()
{
    // localStorage.getItem("myobj");
    // JSON.parse(localStorage.getItem("myobj"));
    var display=JSON.parse(localStorage.getItem("myobj"));
    // console.log(display.name)
    var prevd=document.getElementById("prevdetail");
    // console.log(prevd);
    prevd.append(`${display.name}, ${display.email}`);
}