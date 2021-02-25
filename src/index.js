console.log('%c HI', 'color: firebrick')
 document.addEventListener("DOMContentLoaded", function(e){
    fetch ('https://dog.ceo/api/breeds/image/random/4')
    .then(res => res.json())
    .then(json => loadImages(json))

 })

function loadImages(obj){
    obj.message.forEach(renderImage => {
    let ele = document.createElement("img")
    ele.src = renderImage
    document.getElementById("dog-image-container").appendChild(ele)
    li = document.createElement("li")
    li.innerText = renderImage.split('breeds/')[1].split('/')[0]
    // debugger
    document.getElementById("dog-breeds").appendChild(li)
    // debugger
})

let ul = document.getElementById("dog-breeds").children
for (i=0; i<ul.length; i++ ){
    ul[i].addEventListener('click', (s = ul[i]) => {
        // debugger
        s.target.style.color = 'red'
    })}

    // debugger

    document.getElementById("breed-dropdown").addEventListener('change', (s = ul) => {
        value = document.getElementById("breed-dropdown").value
        // debugger
        for (i=0; i<ul.length; i++){
        if (ul[i].innerText[0] == value){
            ul[i].style.display = ""
        } else if (ul[i].innerText[0] != value) {
            ul[i].style.display = "none"
        }
    }
})

    // ul[0].innerText[0]

}