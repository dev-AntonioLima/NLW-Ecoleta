function populateUFs() {
const ufSelect = document.querySelector("select[name=uf]")

fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados/33/distritos")
.then( (res) => { return res.json() })
.then( states => {

ufSelect.innerHTML = `<option value="1">Valor</option>

