const numCep = document.getElementById('cep')
let inputRua = document.getElementById('endereco')
let inputCidade = document.getElementById('cidade')
let inputBairro = document.getElementById('bairro')
let inputEstado = document.getElementById('estado')

numCep.addEventListener('focusout', function () {
    console.log(numCep.value)

    async function consultaCep(cep) {
        try {
            const response = await fetch(` https://viacep.com.br/ws/${cep}/json/`)
            const data = await response.json()
            const rua = data.logradouro
            const cidade = data.localidade
            const bairro = data.bairro
            const estado = data.uf

            inputRua.value = rua
            inputCidade.value = cidade
            inputBairro.value = bairro
            inputEstado.value = estado

            console.log(rua)
            console.log(cidade)
            console.log(bairro)
        }
        catch (error) {
            console.error('Cep inválido ou não cadastrado', error)
        }
    }

    consultaCep(numCep.value)
})

