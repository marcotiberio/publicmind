if (window.innerWidth > 1180) {
  const scrollContainer = document.querySelector('.blablabla')
  if (scrollContainer) {
    scrollContainer.addEventListener('wheel', (evt) => {
      evt.preventDefault()
      scrollContainer.scrollLeft += evt.deltaY
    })
  }
}

// Homepage Animation

setTimeout(function () {
  const wrapperCurtain = document.querySelector('.logo')
  wrapperCurtain.classList.remove('fade-out')
}, 1000)
