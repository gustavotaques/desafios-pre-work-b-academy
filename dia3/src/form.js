function capitalize (word) {
  return word.charAt(0).toUpperCase() + word.slice(1)
}

const input = document.querySelector('[data-js="name"]')
const notCapitalize = ["da", "de", "do", "dos"]

input.addEventListener('input', (e) => {
  const text = e.target.value.toLowerCase().split(" ")
  e.target.value = text.map((word) => {
    if(notCapitalize.includes(word.toLowerCase())){
      return word.toLowerCase()
    }else{
      return capitalize(word)
    }
  }).join(' ')
})
