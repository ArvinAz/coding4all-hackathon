let buttons = document.querySelectorAll("button");
let adventText = document.querySelector(".result");

let button = document.querySelector(".button");
console.log(button);

buttons.forEach(function(item){
    item.addEventListener("click", function(e){
        console.log(e.target.classList);
        x = e.target.classList;
        if(x.contains("option1")){
            adventText.textContent = 'You encounter a Blood Thirsty Vampire and Die! \n THe End';
        }
        else{
            adventText.textContent = "You escaped to live for another day. The End!";
        }

    })

})