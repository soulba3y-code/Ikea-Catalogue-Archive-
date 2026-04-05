const modal = document.getElementById("previewModal");
const iframe = document.getElementById("imgPreview");
const closeBtn = document.querySelector(".close");

document.querySelectorAll('.card').forEach(card => {
  card.onclick = function() {
    modal.style.display = "block";
    // This pulls the link from data-url attribute
    iframe.src = this.getAttribute('data-url'); 
  }
});

closeBtn.onclick = function() {
  modal.style.display = "none";
  iframe.src = ""; // 
}
  // Wait for images to load
  window.onload = function() {
    var elem = document.querySelector('.gallery');
    var msnry = new Masonry(elem, {
      // options
      itemSelector: '.card',
      columnWidth: '.card',
      percentPosition: true,
      gutter: 20 // This creates the 20px space between tiles
    });
  };
// Target gallery
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

function filterCatalogues() {
    let input = document.getElementById('yearSearch').value;
    let cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        let year = card.getAttribute('data-year');
        if (year && year.includes(input)) {
            card.style.display = "block"; // Ensure it's block
        } else {
            card.style.display = "none";
        }
    });

    // CRITICAL: This line forces the grid to "snap" the remaining items to the top
    if (typeof msnry !== 'undefined') {
        msnry.layout();
    }
}

// This tells the grid to fix itself after every image is loaded
imagesLoaded('.gallery', function() {
    msnry.layout();
});

