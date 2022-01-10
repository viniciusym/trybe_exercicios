const estados = ['Acre',
    'Alagoas',
    'Amapá',
    'Amazonas',
    'Bahia',
    'Ceará',
    'Distrito Federal',
    'Espírito Santo',
    'Goiás',
    'Maranhão',
    'Mato Grosso',
    'Mato Grosso do Sul',
    'Minas Gerais',
    'Pará',
    'Paraíba',
    'Paraná',
    'Pernambuco',
    'Piauí',
    'Rio de Janeiro',
    'Rio Grande do Norte',
    'Rio Grande do Sul',
    'Rondônia',
    'Roraima',
    'Santa Catarina',
    'São Paulo',
    'Sergipe',
    'Tocantins',
];

let select = document.getElementById('estados');

function options() {
    for(let i = 0;i <= estados.length; i += 1) {
        let options = document.createElement('option');
        options.className = 'estados';
        options.innerText = estados[i];
        select.appendChild(options);
    }
};

options();

let data = document.getElementById('data');

let submit = document.getElementById('submit');

submit.addEventListener('click', function(event){
    event.preventDefault();
    if(document.getElementById('nome').value.length > 2) {
        alert('dados invalidos')
    }
})