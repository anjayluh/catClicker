//Object containing all cats
const data = {
    //Create cats object to contain the cats details
    cats: [{
            clickCount: 0,
            name: 'Daisy',
            imgSrc: 'images/catf.jfif',
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
};
octopus = {
    id: 0,
    //Get tags to display cat names and images
    displayNames: document.querySelector('.selector'),
    displayImage: document.querySelector('.display'),
    displayCatList: function() {
        for (cat of data.cats) {
            let div = document.createElement('div');
            div.classList.add('link');
            div.innerHTML = `<p>${data.cats[this.id].name}</p>`
            this.displayNames.appendChild(div);
            this.id += 1
        }
    },
    displayClickedCat: function() {
        for (const catName of this.displayNames.children) {
            catName.addEventListener('click', function() {
                //console.log(catName.children[0].innerText)
                for (let index = 0; index < data.cats.length; index++) {
                    if (catName.children[0].innerText === data.cats[index].name) {
                        // console.log(allCats.cats[index].name);

                        //Add div tag and display the cat details in it
                        let div = document.createElement('div');
                        div.classList.add('image');
                        div.innerHTML = `Name: ${data.cats[index].name}<br/><span class="count">Count: ${data.cats[index].clickCount}</span><img class="image" src = "${data.cats[index].imgSrc}">`;
                        //add the div content to the display div in html
                        octopus.displayImage.innerHTML = div.innerHTML;
                        //Select the image tag to check for click events
                        let currentCat = document.querySelector('img');
                        //Check if image is clicked and update clickCount
                        currentCat.addEventListener('click', function() {
                            data.cats[index].clickCount += 1;
                            document.querySelector(".count").innerText = `Count: ${data.cats[index].clickCount}`;
                        });
                        // displayImage.appendChild(div);

                    }
                }

            });
        }
    }
};
//Invoke display names
octopus.displayCatList();
//invoke display cat
octopus.displayClickedCat();