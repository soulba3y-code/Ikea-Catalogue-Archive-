const modal = document.getElementById("previewModal"); // used google gemini for the javascript parts as I am not good at java. Please see works cited // 
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

    
    if (typeof msnry !== 'undefined') {
        msnry.layout();
    }
}

// This tells the grid to fix itself after every image is loaded
imagesLoaded('.gallery', function() {
    msnry.layout();
});

const searchInput = document.querySelector('.search-container input');
const cards = document.querySelectorAll('.card');


// ... inside your searchInput.addEventListener('input', () => { ...

  cards.forEach(card => {
    const year = card.getAttribute('data-year');
    if (year.includes(query)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });

  
  setTimeout(() => {
    if (typeof msnry !== 'undefined') {
      msnry.reloadItems(); // Forget the old positions
      msnry.layout();      // Snap the remaining ones to the top
    }
  }, 10);

  var msnry = new Masonry('.gallery', {
  itemSelector: '.card',
  columnWidth: '.card', // Use the card width as the guide
  gutter: 20,           // Space between cards
  horizontalOrder: true, // This keeps them in the order they appear in your HTML
  percentPosition: true
});

// I attempted to fix the search results so that each catalogues when searched for would snap to the top of the page instead of leaving a gap where the hidden catalogues are. i struggled with this and I made the decision to just leave it as it is with the gaps because It looked worse in my opinion. The catalogues were scattered everywhere randomly and were much smaller when I attempted to make this work. I tried to get help with gemini but I found that wasnt working either. I do know this has to do the masonry grid layout and gemini was attempting to override it but it just wasn't coming out the way I wanted so I left it as it. Also noted here is the fact that the catalogues will appear at the top when used on a tablet or phone just not on the website. 