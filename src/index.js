console.log('%c HI', 'color: firebrick')
 // Base URL
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = "https://dog.ceo/api/breeds/list/all"

document.addEventListener('DOMContentLoaded', () => {
    addImgElement();
    addBreeds();
    sortBreed();
})

// Another function

// Upon page load fetch images from api
const addImgElement = () => {
    // Grab image container html
    const imgContainer = document.querySelector('#dog-image-container');
    
    // Creates ul element
    let ul = document.createElement('ul');
    ul.className = "img-list"
    ul.style.listStyleType = "none";
    ul.style.display = "grid"
    ul.style.gridTemplateColumns = "21vw 21vw 21vw 21vw"
    ul.style.gridTemplateRows = "auto"

    imgContainer.appendChild(ul)
    
    // fetch images from api
    fetch(imgUrl)
        .then(res => res.json())
        .then(imgData => imgData.message.forEach((img) => {
        // create li element and add images
        let li = document.createElement('li');
        let imgEl = document.createElement('img')
        imgEl.style.width = "100%"
        imgEl.style.height = "100%"
        imgEl.src = img
        li.style.overflow = "hidden"
        li.style.objectFit = "cover"
        li.append(imgEl)
        ul.appendChild(li)
    }))
}


// fetchs api for breeds and adds breed to ul
const addBreeds = () => { 

    // grab dog breed ul
    const breedContainer = document.getElementById("dog-breeds")

    // fetches breed from api and appends created li to ul
    fetch(breedUrl)
    .then(res => res.json())
    .then(breedData => {
        for (breed in breedData.message) {
            let li = document.createElement('li');
        li.innerText = breed
        breedContainer.appendChild(li)
        }
    // using Object.keys
    // .then(breedData => console.log(Object.keys(breedData.message).forEach(breed))
    // )
        for (let i = 0; i < breedContainer.children.length; i++) {
            breedContainer.addEventListener("click", (event = breedContainer.children[i]) => { 
                debugger 
                event.target.style.color = "blue"
            })  
        }   
    }) 
    
}

// Sort function
const sortBreed = () => {
    // event listener for dropdown
    document.querySelector("#breed-dropdown").addEventListener('change', (event) => {
        value = event.target.value
        // fetch(breedUrl)
        //     .then(res => res.json())
        //     .then(breedData => {
        //         const breedContainer = document.getElementById("dog-breeds")
        //         breedContainer.innerHTML = '';

        //         Object.keys(breedData.message).filter((breed) => {
        //             return breed.startsWith(value);
        //         }).forEach((breed) => {
        //             let li = document.createElement('li');
        //             li.innerText = breed
        //             breedContainer.appendChild(li)
        //         });
        //     });
        
        const breedContainer = document.getElementById("dog-breeds");

        for (element of breedContainer.children) {
            if (element.innerText.startsWith(value)) {
                element.setAttribute('style', 'display: list-item');
            } else {
                element.setAttribute('style', 'display: none');
            }
        }
    })
    
}

// document.addEventListener("DOMContentLoaded", function(e){
//     fetch ('https://dog.ceo/api/breeds/image/random/4')
//     .then(res => res.json())
//     .then(json => loadImages(json))

//  })

// function loadImages(obj){
//     obj.message.forEach(renderImage => {
//     let ele = document.createElement("img")
//     ele.src = renderImage
//     document.getElementById("dog-image-container").appendChild(ele)
//     li = document.createElement("li")
//     li.innerText = renderImage.split('breeds/')[1].split('/')[0]
//     // debugger
//     document.getElementById("dog-breeds").appendChild(li)
//     // debugger
// })

// let ul = document.getElementById("dog-breeds").children
// for (i=0; i<ul.length; i++ ){
//     ul[i].addEventListener('click', (s = ul[i]) => {
//         // debugger
//         s.target.style.color = 'red'
//     })}

//     // debugger

//     document.getElementById("breed-dropdown").addEventListener('change', (s = ul) => {
//         value = document.getElementById("breed-dropdown").value
//         // debugger
//         for (i=0; i<ul.length; i++){
//         if (ul[i].innerText[0] == value){
//             ul[i].style.display = ""
//         } else if (ul[i].innerText[0] != value) {
//             ul[i].style.display = "none"
//         }
//     }
// })

//     // ul[0].innerText[0]

// } 
