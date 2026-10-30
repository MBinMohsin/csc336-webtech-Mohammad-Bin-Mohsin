document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('productGrid');
  const productWrappers = Array.from(grid.querySelectorAll('[class*="col-"]'));
  const gridSearchInput = document.getElementById('live-search');
  const headerSearchInput = document.querySelector('.site-header .search-input');
  const sortBtn = document.getElementById('sort-price-btn');
  const noProductsMsg = document.getElementById('no-products-msg');
  const radioButtons = document.querySelectorAll('input[name="category-filter"]');
  let sortAscending = true;

  productWrappers.forEach(wrapper => {
    const priceText = wrapper.querySelector('.current-price').textContent;
    const price = parseInt(priceText.replace(/\D/g, ''), 10);
    if (price > 5500) {
      const badge = document.createElement('span');
      badge.className = 'premium-badge';
      badge.textContent = 'Premium';
      wrapper.querySelector('.product-card').appendChild(badge);
    }
  });

  function updateVisibility(e) {
    if (e && e.target === headerSearchInput) gridSearchInput.value = headerSearchInput.value;
    if (e && e.target === gridSearchInput) headerSearchInput.value = gridSearchInput.value;

    const query = gridSearchInput.value.toLowerCase();
    let visibleCount = 0;
    
    const checkedRadio = document.querySelector('input[name="category-filter"]:checked').id;
    const activeCategory = checkedRadio.replace('cat-', '');

    productWrappers.forEach(wrapper => {
      const title = wrapper.querySelector('.product-title').textContent.toLowerCase();
      const cardCategory = wrapper.getAttribute('data-category');
      
      if (title.includes(query)) {
        wrapper.classList.remove('hidden-by-search');
      } else {
        wrapper.classList.add('hidden-by-search');
      }

      const matchesSearch = title.includes(query);
      const matchesCategory = (activeCategory === 'all' || cardCategory === activeCategory);
      
      if (matchesSearch && matchesCategory) {
        visibleCount++;
      }
    });

    if (visibleCount === 0) {
      noProductsMsg.style.display = 'block';
    } else {
      noProductsMsg.style.display = 'none';
    }
  }

  gridSearchInput.addEventListener('input', updateVisibility);
  headerSearchInput.addEventListener('input', updateVisibility);
  radioButtons.forEach(radio => radio.addEventListener('change', updateVisibility));

  sortBtn.addEventListener('click', (e) => {
    e.preventDefault(); 
    
    productWrappers.sort((a, b) => {
      const priceTextA = a.querySelector('.current-price').textContent;
      const priceTextB = b.querySelector('.current-price').textContent;
      
      const priceA = parseInt(priceTextA.replace(/\D/g, ''), 10);
      const priceB = parseInt(priceTextB.replace(/\D/g, ''), 10);
      
      return sortAscending ? priceA - priceB : priceB - priceA;
    });
    
    productWrappers.forEach(wrapper => grid.appendChild(wrapper));
    sortAscending = !sortAscending;
  });
});
