const cat = document.querySelector('.cat')
let count = 0;
cat.addEventListener('click', function() {
    count += 1;
    document.querySelector(".count").innerText = `${count}`;
})