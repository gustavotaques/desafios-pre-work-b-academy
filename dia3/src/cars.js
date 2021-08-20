const form = document.querySelector('[data-js="form-cars"]')
const table = document.querySelector('[data-js="data-table"]')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const image = e.target['image']
  const model = e.target['model']
  const year = e.target['ano']
  const plate = e.target['plate']
  const color = e.target['color']

  const elements = [image, model, year, plate, color]
  const tr = document.createElement('tr')

  elements.forEach((element) => {
    const td = document.createElement('td')
    console.log(element.value)
    td.textContent = element.value
    tr.appendChild(td)
    console.log(tr)
  })
  table.appendChild(tr)

  e.target.reset()
  image.focus()
})
