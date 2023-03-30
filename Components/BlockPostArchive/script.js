import Rellax from 'rellax'

// Parallax Animation
const rellax = new Rellax('[data-parallax]', {
  speed: 7,
  center: true,
  horizontal: true,
  vertical: false
})

if (window.matchMedia('(max-width: 1280px)').matches) {
  rellax.destroy()
}
