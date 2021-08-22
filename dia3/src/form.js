function capitalize (word) {
  return word.charAt(0).toUpperCase() + word.slice(1)
}

const input = document.querySelector('[data-js="name"]')
const notCapitalize = ["da", "de", "do", "dos"]

input.addEventListener('input', (e) => {
  const text = e.target.value.toLowerCase().split(" ")
  e.target.value = text.map((word) => {
    if(notCapitalize.includes(word)){
      return word
    }else{
      return capitalize(word)
    }
  }).join(' ')
})


const form = document.querySelector('[data-js="form"]')
const select = document.createElement('select')
select.setAttribute('multiple', '')

const divColors = document.createElement('div')
divColors.style.display = 'flex'
const colors = ['#48D1CC', '#6699FF', '#66FF66', '#FF6666', '#FF66FF']


colors.forEach(color => {
  const option = document.createElement('option')
  option.value = color
  option.textContent = color
  select.appendChild(option)
})

select.addEventListener('change', (e) => {
  divColors.innerHTML = '',
  [...e.target.selectedOptions].map(color => {
    const div = document.createElement('div')
    div.style.width = '100px'
    div.style.height = '100px'
    div.style.background = color.value

    divColors.appendChild(div)
  })
})

form.appendChild(select)
document.body.appendChild(divColors)
