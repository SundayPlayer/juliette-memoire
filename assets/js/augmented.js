// classic way
document.addEventListener('DOMContentLoaded', function() {
  console.log('l\'event documentLOADED se charge à chaque rafraichissement.')
})
// turbolinks way
document.addEventListener("turbolinks:load", function() {
  console.log('L\'event turbolinks:load se charge à chaque visite')
  // finds agmented elements to display
  let list = document.getElementsByClassName('augmented')
  if (list.length > 0) {
    // displays augmented button
    document.getElementById('augmented-btn').style.display = 'block';
    // allows button to display agmented elements
    augmented = document.getElementById('augmented-btn')
    augmented.addEventListener('click', () => {
      for (var i = 0; i < list.length; i++) {
        list[i].style.opacity = 100
      }
    })
  }
})