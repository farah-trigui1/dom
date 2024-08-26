document.getElementById('like1').addEventListener('click',function(){
  this.classList.toggle('liked');
})
document.getElementById('like2').addEventListener('click',function(){
  this.classList.toggle('liked');
})
document.getElementById('like3').addEventListener('click',function(){
  this.classList.toggle('liked');
})
document.addEventListener('DOMContentLoaded', () => {
  const updateTotalPrice = () => {
    let total = 0;
    document.querySelectorAll('.card').forEach(card => {
      const price = parseFloat(card.querySelector('.unit-price').textContent.replace('$', ''));
      const quantity = parseInt(card.querySelector('.quantity').textContent, 10);
      total += price * quantity;
    });
    document.querySelector('.total').textContent = `${total} $`;
  };
  const handleQuantityChange = (event) => {
    const icon = event.target;
    const quantitySpan = icon.parentElement.querySelector('.quantity');
    let quantity = parseInt(quantitySpan.textContent, 10);
    
    if (icon.classList.contains('fa-plus-circle')) {
      quantity++;
    } else if (icon.classList.contains('fa-minus-circle') && quantity > 0) {
      quantity--;
    }
    
    quantitySpan.textContent = quantity;
    updateTotalPrice();
  };


  const handleProductRemoval = (event) => {
    const icon = event.target;
    if (icon.classList.contains('fa-trash-alt')) {
      icon.closest('.card').remove();
      updateTotalPrice();
    }
  };

  document.querySelectorAll('.fa-plus-circle').forEach(icon => {
    icon.addEventListener('click', handleQuantityChange);
  });
  
  document.querySelectorAll('.fa-minus-circle').forEach(icon => {
    icon.addEventListener('click', handleQuantityChange);
  });

  document.querySelectorAll('.fa-trash-alt').forEach(icon => {
    icon.addEventListener('click', handleProductRemoval);
  });

  updateTotalPrice();
});