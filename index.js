const toggles = Array.from(document.getElementsByClassName('toggle'))

/* target all toggle buttons*/ 
toggles.forEach((toggleButton) => toggleButton.addEventListener('click', function () {
  const card = toggleButton.parentElement

  /* toggle active and open classes on card and body elements on click */ 
  toggleButton.classList.toggle('active')
  card.classList.toggle('open')
  console.log(toggleButton, card)
}))