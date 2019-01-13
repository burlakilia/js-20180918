export class ImageHelper {

    static replaceImages() {
        var images = document.querySelectorAll('.js-replace-image');
        images.forEach(image => {
            var imageClone = image.cloneNode(true);
            imageClone.src = image.dataset.src;
    
            imageClone.onload = function() {
              if (!image.parentNode) return;
              image.parentNode.replaceChild(imageClone, image);
            }
          });
    }
}