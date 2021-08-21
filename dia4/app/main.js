import './style.css'

const url = 'http://localhost:3333/cars'

const form = document.querySelector('[data-js="form-cars"]')
const table = document.querySelector('[data-js="data-table"]')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const data = {
    image: e.target['image'].value,
    brandModel: e.target['model'].value,
    year: e.target['ano'].value,
    plate: e.target['plate'].value,
    color: e.target['color'].value,
  }

  fetch(url, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(result => result.json())
  .catch(err => ({ error: true, message: err.message }))
  .then(result => {
    if (result.error){
      const popup = document.querySelector('[data-js="popup-wrapper"]')
      const popupContent = document.querySelector('[data-js="popup-content"]')
      const popupClose = document.querySelector('[data-js="popup-close"]')
      const h1 = document.createElement('h1')
      popup.style.display = 'block'
      h1.textContent = result.message
      popupContent.appendChild(h1)

      popupClose.addEventListener('click', () => {
        popup.style.display = 'none'
        location.reload()
      })
      console.log('deu erro na hora de cadastrar', result.message)
      return
    }
  })

  createRow(data)

  e.target.reset()
  image.focus()
})

function createRow (data) {
  const elements = [
    {value: data.image},
    {value: data.brandModel},
    {value: data.year},
    {value: data.plate},
    {value: data.color}
  ]

  const tr = document.createElement('tr')

  elements.forEach((element) => {
    const td = document.createElement('td')
    td.textContent = element.value
    tr.appendChild(td)
  })
  table.appendChild(tr)
}

function noCar() {
  const tr = document.createElement('tr')
  const td = document.createElement('td')
  const ths = document.querySelectorAll('table th').length
  td.setAttribute('colspan', ths)
  td.textContent = "Nenhum carro encontrado"
  tr.setAttribute('data-js', 'no-content')
  tr.appendChild(td)
  table.appendChild(tr)
}
// GET

fetch(url)
  .then(result => result.json())
  .catch(err => ({ error: true, message: err.message }))
  .then(result => {
    if (result.error){
      const popup = document.querySelector('[data-js="popup-wrapper"]')
      const popupContent = document.querySelector('[data-js="popup-content"]')
      const popupClose = document.querySelector('[data-js="popup-close"]')
      const h1 = document.createElement('h1')
      popup.style.display = 'block'
      h1.textContent = result.message
      popupContent.appendChild(h1)

      popupClose.addEventListener('click', () => {
        popup.style.display = 'none'
        location.reload()
      })
      console.log("Error search cars: ", result.message)
      return
    }

    if(result.length === 0){
      noCar()
      return
    }

    result.forEach(createRow)
  })

