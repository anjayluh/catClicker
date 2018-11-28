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
    //Get tags to display cat names and images
    displayNames: document.querySelector('.selector'),
    displayImage: document.querySelector('.display'),
    adminButton: document.querySelector('.admin-button'),
    inputForm: document.querySelector('form'),
    init: function() {
        this.displayNames.innerHTML = "";
        id = 0
        for (cat of data.cats) {
            if (id < data.cats.length) {
                let div = document.createElement('div');
                div.classList.add('link');
                div.innerHTML = `<p>${data.cats[id].name}</p>`;
                this.displayNames.appendChild(div);
                id++;
            }

        }

        //Hide form on on load
        this.hide(this.inputForm);
        //Invoke show form on click
        this.dispalyAdmin();
    },
    incrementCount: function(count) {
        return count += 1;
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
                            //Increment click counter
                            data.cats[index].clickCount = octopus.incrementCount(data.cats[index].clickCount);
                            document.querySelector(".count").innerText = `Count: ${data.cats[index].clickCount}`;
                        });
                        // displayImage.appendChild(div);

                    }
                }

            });
        }
    },
    hide: function(element) {
        element.classList.add('hide');
    },
    show: function(element) {
        element.classList.remove('hide');
        element.classList.add('show');
    },
    //Show form on click of admin button
    dispalyAdmin: function() {
        //Listen for click
        this.adminButton.addEventListener('click', function() {
            octopus.show(octopus.inputForm)
            octopus.insertInput();
        });
    },
    insertInput: function() {
        let submitButton = document.querySelectorAll("input[type=button]")[0],
            nameValue, srcValue, countValue;
        submitButton.addEventListener('click', function() {
            //Save values from the form
            nameValue = document.getElementById('name').value;
            srcValue = document.getElementById('src').value;
            countValue = Number(document.getElementById('count').value);
            console.log(nameValue);
            console.log(srcValue);
            console.log(countValue);
            data.cats.push({
                clickCount: countValue,
                name: nameValue,
                imgSrc: srcValue
            });
            octopus.init();
            octopus.displayClickedCat();

        });
    },
};

//Invoke display names
octopus.init();
//invoke display cat
octopus.displayClickedCat();