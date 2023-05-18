
// console.log("fired");
let submitBtn = document.querySelector("#submit");
submitBtn.addEventListener("click", carousel);

async function getImages() {
    let url = "";
    function query() {
        let perPage = document.querySelector(".perPage");
        let pageNumer = document.querySelector(".pageNumer");
        // alert()
        if (perPage.value == "" || pageNumer.value == "") {
            url = "https://picsum.photos/v2/list?page=5&limit=5";
            console.log(url);
            // return url
        } else {
            url = `https://picsum.photos/v2/list?page=${pageNumer.value}&limit=${perPage.value}`;
            console.log(url);
            // return url
        }
        perPage.value = "";
        pageNumer.value = "";
        return url
    }
    url = query();
    try {
        let data = await fetch(`${url}`, {
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
    try {
        let images = await getImages();
        // console.log(images);
        let index = 0;
        let html = "";
        let imgCont = document.querySelector(".img-container");
        images.forEach(element => {
            html += `<img class="slide w-100 h-100" id="${index}" src="${element["download_url"]}" alt="123">`
            index++;
        });
        imgCont.innerHTML = html;
        let slideObj = document.querySelectorAll(".slide");
        return slideObj;
    } catch (error) {
        console.log(error)
    }

}

async function carousel() {
    let slides = await displayImages();

    let counter = 0;
    // let slides = document.querySelectorAll(".slide");
    console.log(slides);

    let prevBtn = document.querySelector(".prev");

    let next = document.querySelector(".next");


    slides.forEach((slide, index) => {
        slide.style.left = `${index * 100}%`;
    })

    let slideImage = function slideImage() {
        slides.forEach((slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`;
        })
    }

    function nextImage() {
        // alert()
        if (counter < slides.length - 1) {
            counter++;
        }
        else {
            counter = 0;
        }
        slideImage();
    }

    function prevImage() {
        // alert()
        if (counter > 0) {
            counter--;
        }
        else {
            counter = slides.length - 1;
            // counter = 0;
        }
        slideImage();
    }
    prevBtn.addEventListener("click", prevImage);
    next.addEventListener("click", nextImage);

    function autoSlide() {
        setInterval(() => {
            nextImage();
        }, 2000)
    }
    autoSlide();
}

carousel();






