// Filtering cards
  
let grid = document.querySelector('.products-list');
  let filterInput = document.querySelector('#filterInput');
  filterInput.addEventListener('keyup', filterProducts);
  
  function filterProducts() {
    let filterValue = filterInput.value.toUpperCase();
    // let item = grid.querySelectorAll('.product-card');
    let item = grid.querySelectorAll('.product-item');
    for (let i = 0; i < item.length; i++) {
      let span = item[i].querySelector('.card-title, .product-availability');
      if (span.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
        item[i].style.display = "initial";
      } else {
        item[i].style.display = "none";
      }
    }
  }