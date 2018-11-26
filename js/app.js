const cats = document.querySelectorAll('.cat')
let counterOne = 0;
let counterTwo = 0;
let nameOne = "Kitty";
let nameTwo = "Daisy";
document.querySelector(".name1").innerText = `${nameOne}`;
document.querySelector(".name2").innerText = `${nameTwo}`;
cats[0].addEventListener('click', function() {
    counterOne += 1;
    document.querySelector(".count").innerText = `${ counterOne}`;
})
cats[1].addEventListener('click', function() {
    counterTwo += 1;
    document.querySelector(".count1").innerText = `${counterTwo}`;
})