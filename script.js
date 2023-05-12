let url = "https://picsum.photos/v2/list?page=5&limit=4";

async function getImages() {
    // console.log("fired");
    try {
        let data = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        });
        let images = await data.json();
        // console.log(images);
        return images;
    } catch (error) {
        console.log(error);
    }
    // displayImages(images);
}
// getImages();

async function displayImages() {
    let images = await getImages();
    // console.log(images);
    let index = 0;
    let html = "";
    let imgCont = document.querySelector(".img-container");
    images.forEach(element => {
        html += `
    <img class="img" id="${index}" src="${element["download_url"]}" alt="123">`
        index++;
    });
    imgCont.innerHTML = html;

}

//  // setTimeout(() => {
//     html += `<div id="${index}">
//     <img id="${index}" src="${element["download_url"]}" alt="123">
//     <h1 class="title">${element["author"]}</h1>
//     </div>`;
//     console.log(`${element["download_url"]}`);
//     index++;
// // }, 1000);

displayImages();

// animation-name: slide;
// animation-duration: 4s;

function autoSlide() {
    i = 0;
setTimeout(() => {
    let imgContainers = document.querySelectorAll(".img-container>.img");
    // imgContainers[i].setAttribute("position", "relative");
     // console.log(imgContainers);
     imgContainers[i].style.left= "1500px";

    // let imgContainers = document.querySelectorAll(".img-container>.img");
    // console.log(imgContainers);
    // imgContainers[i].style.display="none";

    setTimeout(()=>{ imgContainers[i].style.display="none";}, 2000)
}, 2000);
i++;
}

// autoSlide();



