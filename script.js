const imageArray = document.querySelectorAll('.header-slider');
const previousSlide = document.querySelector('.slide-previous');
const nextSlide = document.querySelector('.slide-next');
const scrollContainer = document.querySelectorAll('.products-list');
const designedProductSlider = document.querySelectorAll('.slider-product-designed');


function scrollListener(){
    scrollContainer.forEach((item) => {
        item.addEventListener('wheel', (event) => {
            event.preventDefault();
            item.scrollLeft += event.deltaY;
        })
    })

    designedProductSlider.forEach((item) => {
        item.addEventListener('wheel', (event) => {
            event.preventDefault();
            item.scrollLeft += event.deltaY;
        })
    })

}

function imageSlide(index){
    imageArray.forEach((image) => {
        image.style.display = 'none';
    })
    imageArray[index].style.display = 'block';
}

function slideListener(){
    let index = 0;
    previousSlide.addEventListener('click', (event) => {
        if(index>0){
            index--;
            console.log(index);
        } else {
            index = imageArray.length - 1;
        }
        imageSlide(index);
    })

    nextSlide.addEventListener('click', (event) => {
        if(index<imageArray.length-1){
            index++;    
        } else {
            index = 0;
        }
        imageSlide(index);
    })
}

slideListener();
scrollListener();