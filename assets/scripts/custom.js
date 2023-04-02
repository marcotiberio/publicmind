// import Rellax from 'rellax'

const scrollContainer = document.querySelector('.page-artists .mainContent, .page-archive .mainContent, .page-news .mainContent, .single-interview .mainContent')
scrollContainer.addEventListener('wheel', (evt) => {
  evt.preventDefault()
  scrollContainer.scrollLeft += evt.deltaY
})
