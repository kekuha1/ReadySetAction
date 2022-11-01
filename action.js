function main(){
    let bigIt = document.getElementById("grow-me");

    bigIt.classList.add("big");

    console.log(bigIt);

    let shrinky= document.getElementById("shrink-me");
    
    shrinky.classList.remove("big");

    console.log(shrinky);

    let listem = document.querySelectorAll("li");

    console.log(listem);

    let link = document.querySelector(".link");
    link.setAttribute("href", "https://www.example.com")
    link.innerText = "somewhere";

    let hideMe = document.getElementById("hide-me");
    hideMe.style.display = "none";
    
    let showMe = document.getElementById("show-me");
    showMe.style.display = "block";

    let name = document.getElementById("name");

    name.innerText = "Welcome Grant!";
}
    
