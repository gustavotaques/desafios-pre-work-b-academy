import './style.css'

// GET
const form = document.querySelector('[data-js="data-table"]')
fetch('http://localhost:3333/cars')
  .then(result => result.json())
  .then(result => {
    haveCar(result)
  })

function haveCar(result) {
  if(result.length === 0){
    const tr = document.createElement('tr')
    tr.textContent = "Nenhum carro encontrado"
    form.appendChild(tr)
  }
}
