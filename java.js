const modal = document.getElementById("previewModal");
const iframe = document.getElementById("imgPreview");
const closeBtn = document.querySelector(".close");

document.querySelectorAll('.card').forEach(card => {
  card.onclick = function() {
    modal.style.display = "block";
    // This pulls the link from your data-url attribute
    iframe.src = this.getAttribute('data-url'); 
  }
});

closeBtn.onclick = function() {
  modal.style.display = "none";
  iframe.src = ""; // This "kills" the flipbook so it's fresh next time
}
  // Wait for images to load so the math is accurate
  window.onload = function() {
    var elem = document.querySelector('.gallery');
    var msnry = new Masonry(elem, {
      // options
      itemSelector: '.card',
      columnWidth: '.card',
      percentPosition: true,
      gutter: 20 // This creates the 20px space between your tiles
    });
  };
// Target your gallery
  var grid = document.querySelector('.gallery');

  // Wait for all images to actually download
  imagesLoaded(grid, function() {
    // Now initialize Masonry
    var msnry = new Masonry(grid, {
      itemSelector: '.card',
      columnWidth: '.card',
      percentPosition: true,
      gutter: 20 // This is the space between the tiles
    });
  });

