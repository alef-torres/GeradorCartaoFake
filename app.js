// const cartao = document.getElementById('cartao');
// const dados = '';

// const myHeaders = new Headers();
// myHeaders.append("x-apihub-key", "A3vcxikxFitcQoEt7w9rtGW3XtskhRvXUABTCo2EvM7XKdQ2Gi");
// myHeaders.append("x-apihub-host", "Faker-API.allthingsdev.co");
// myHeaders.append("x-apihub-endpoint", "068a5941-4f63-4db1-a04d-efbbe5ed833b");

// const requestOptions = {
//   method: "GET",
//   headers: myHeaders,
//   redirect: "follow"
// };

// fetch("https://Faker-API.proxy-production.allthingsdev.co/api/v2/creditCards?_quantity=1", requestOptions)
//   .then((response) => response.text())
//   .then((result) => result = dados)
//   .catch((error) => console.error(error));

// cartao.innerHTML = `<p>${dados}</p>`

const cartoes = document.getElementById('cartoes');
const btnGerador = document.getElementById('gerar')

async function geradorCartoesAPI() {

  const myHeaders = new Headers();
  myHeaders.append("x-apihub-key", "A3vcxikxFitcQoEt7w9rtGW3XtskhRvXUABTCo2EvM7XKdQ2Gi");
  myHeaders.append("x-apihub-host", "Faker-API.allthingsdev.co");
  myHeaders.append("x-apihub-endpoint", "068a5941-4f63-4db1-a04d-efbbe5ed833b");

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  };

  fetch("https://Faker-API.proxy-production.allthingsdev.co/api/v2/creditCards?_quantity=1", requestOptions)
    .then(response => response.json())
    .then(result => {
      const cartaoInfo = result.data[0];

      const cartao = document.createElement('div');
      cartao.className = 'cartao';

      const numeroCartao = document.createElement('p');
      numeroCartao.innerHTML = `${cartaoInfo.number}`; 

      const nomeCartao = document.createElement('span');
      nomeCartao.innerHTML = `${cartaoInfo.owner}`; 

      const validadeCartao = document.createElement('span');
      validadeCartao.innerHTML = `${cartaoInfo.expiration}`;

      cartao.appendChild(numeroCartao);
      cartao.appendChild(validadeCartao);
      cartao.appendChild(nomeCartao);

      cartoes.appendChild(cartao);
    }).catch(error => console.error('Erro ao buscar dados:', error));
}

console.log("Script carregado!");
btnGerador.addEventListener('click', geradorCartoesAPI)
