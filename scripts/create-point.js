/*document
.querySelector("select[name=uf]")
.addEventListener("change", () => {
    console.log("mudei")
} )*/

function populateUFs() {
const ufSelect = 
document .querySelector("select[name=uf]")

fetch("https://servicodados.ibge.gov.br/api/v1/localidades/distritos")
.then( res =>  res.json())
.then( data => {


for ( const state of states ) {
fSelect.innerHTML = ufSelect.innerHTML + '<option value="${}"</option>'
}




})
}

populateUFs()


document
.querySelector("select[name=uf]")
.addEventListener("change", () => {
console.log("mudei")
}
)