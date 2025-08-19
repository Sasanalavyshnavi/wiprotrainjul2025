let images = ["ex16img1.jpg","ex16img2.jpg","ex16img3.jpg","ex16img4.jpg"];
let currentIndex = 0;

    function showImage() {
        document.getElementById("gallery").src = images[currentIndex];
    }
     function nextImage() {
        currentIndex++;
        if (currentIndex >= images.length) {
            currentIndex = 0; 
        }
        showImage();
    }
    function prevImage() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = images.length - 1; 
        }
        showImage();
    }
    showImage();

