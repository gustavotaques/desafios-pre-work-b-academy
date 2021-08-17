import './style.css'

document.querySelector('#app').innerHTML = `
  <h1>B. Academy</h1>
  <p>Boas vindas à semana de pré-work para o Bootcamp em React.js 😁</p>
`

const cliqueAlterarVisibilidade = document.querySelector('[data-js="app2"]')

cliqueAlterarVisibilidade.addEventListener('click', (event) => {
  event.preventDefault()

  const texto = document.querySelector('[data-js="app"]')

  if(texto.style.display === "none"){
    texto.style.display = "block"
  }else{
    texto.style.display = "none"
  }


})
