const buyButtons = document.querySelectorAll(".product-btn")


buyButtons.forEach(button =>{
  button.addEventListener('click', () =>{
    alert('Thank you for purchasing!')
  })
})