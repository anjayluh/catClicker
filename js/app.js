//Get tag to display cat names
let displayNames = document.querySelector('.selector');
let displayImage = document.querySelector('.display');

//Object containing all cats
const allCats = {
        cats: [{
                clickCount: 0,
                name: 'Daisy',
                imgSrc: 'images/cat.jfif',
            },
            {
                clickCount: 0,
                name: 'Kitty',
                imgSrc: 'images/kitty-cat-kitten-pet-45201.jpeg',
            },
            {
                clickCount: 0,
                name: 'Gracie',
                imgSrc: 'images/catb.jfif',
            },
            {
                clickCount: 0,
                name: 'Smokey',
                imgSrc: 'images/catc.jfif',
            },
            {
                clickCount: 0,
                name: 'Jack',
                imgSrc: 'images/catd.jfif',
            },
            {
                clickCount: 0,
                name: 'Simba',
                imgSrc: 'images/cate.jfif',
            },
        ],
    }
    //Display cat names in the list of cats to click on
let id = 0;
for (cat of allCats.cats) {
    let div = document.createElement('div');
    div.classList.add('link');
    div.innerHTML = `<p>${allCats.cats[id].name}</p>`
    displayNames.appendChild(div);
    id += 1
}
for (const catName of displayNames.children) {
    catName.addEventListener('click', function() {
        //console.log(catName.children[0].innerText)
        for (let index = 0; index < allCats.cats.length; index++) {
            if (catName.children[0].innerText === allCats.cats[index].name) {
                // console.log(allCats.cats[index].name);
                let div = document.createElement('div');
                div.classList.add('image');
                div.innerHTML = `<span class="count"> Count: ${allCats.cats[index].clickCount}</span><img class="image" src = "${allCats.cats[index].imgSrc}">`
                displayImage.innerHTML = div.innerHTML;
                let currentCat = document.querySelector('img');
                currentCat.addEventListener('click', function() {
                    allCats.cats[index].clickCount += 1;
                    document.querySelector(".count").innerText = `Count: ${allCats.cats[index].clickCount}`;
                });
                // displayImage.appendChild(div);

            }
        }

    });
}