// turbolinks way
document.addEventListener("turbolinks:load", function() {
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
      document.getElementById('augmented-btn').style.display = 'none';
    })
  }

  let imgs = document.getElementsByClassName('pointer');

  if (imgs.length > 0) {
    for (let i = 0; i < imgs.length; i++) {
      imgs[i].addEventListener('click', function() {
        let viewer = document.getElementById('viewer');
        let img = this.cloneNode();
        viewer.style.display = 'block';
        viewer.appendChild(img);

        document.addEventListener('mousedown', function() {
          viewer.style.display = 'none';
          while (viewer.firstChild) {
            viewer.removeChild(viewer.firstChild);
          }
        })
      })
    }
  }
})
