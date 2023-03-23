'use strict';

const pesquisaCep = async () => {
    limparFormulario();
    const cep = document.getElementById('cep').value;
    const cepValido = cep.length === 8 && !cep.includes(" ") && /^[0-9]+$/.test(cep)

    if(cepValido){
        const data = await fetch(`http://viacep.com.br/ws/${cep}/json`)
        const endereco = await data.json()
        if(endereco.hasOwnProperty('erro')){
            document.getElementById('endereco').value = 'Cep inválido!'
        }else{
            preencherFormulario(endereco)
        }
        
    }else{
        document.getElementById('endereco').value = 'Cep inválido!'
    }
    }

const preencherFormulario = (e) => {
    document.getElementById('endereco').value = e.logradouro;
    document.getElementById('bairro').value = e.bairro;
    document.getElementById('cidade').value = e.localidade;
    document.getElementById('estado').value = e.uf;

}

const limparFormulario = (e) => {
    document.getElementById('endereco').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';

}
    

document.getElementById('cep').addEventListener('focusout', pesquisaCep);

