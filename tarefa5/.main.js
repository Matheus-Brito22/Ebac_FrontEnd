const form = document.getElementById('form-deposito');
const nomeBenefeciario = document.getElementById('nome-Beneficiario');
let formEValido = false

function validanome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length >= 2;
    }

    form.addEventListener('submit', function(e){
        let formEValido = false
        e.preventDefault();

        const numeroContaBenefiario = document.getElementById('numero-conta');
        const valorDeposito = document.getElementById('valor-deposito');
        const menssagemSucesso = `Montante de : <b>${valorDeposito.value}</b> depositado para o cliente: <b>${nomeBenefeciario.value}</b> - conta <b>${numeroContaBenefiario.value}</b>`;

        formEValido = validanome(nomeBenefeciario.value);

        if (formEValido){
            const containermenssagemSucesso =  document.querySelector('.menssagemSucesso');
            containermenssagemSucesso.innerHTML = menssagemSucesso;
            containermenssagemSucesso.style.display = 'block';

            nomeBenefeciario.value = '';
            numeroContaBenefiario.value = '';
            valorDeposito.value = '';
            
        }
        else{
            nomeBenefeciario.style.border = ' 1px solid red';
            document.querySelector('.error-menssage').style.display = 'block';
        }
    })
    
        nomeBenefeciario.addEventListener('keyup', function(e){
        console.log(e.target.value);
        formEValido = validanome(e.target.value);
       
        if (!formEValido){
            //nomeBenefeciario.style.border = ' 1px solid red';
            nomeBenefeciario.classList.add('error');
            document.querySelector('.error-menssage').style.display = 'block'; 
        }
        else {
            nomeBenefeciario.classList.remove ('error');
            document.querySelector('.error-menssage').style.display = 'none'; 
            
        }
    })


