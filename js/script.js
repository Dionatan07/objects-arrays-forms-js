function meuEscopo () {

    const form = document.querySelector('.form'); //Seleciona o formulário
    const resultado = document.querySelector('.resultado'); //Seleciona a DIV

    const pessoas = [];

    function recebeEventoForm(evento){
        evento.preventDefault(); //Impede que a página atualize e perca os dados do formulário;
       const nome = form.querySelector('.nome');
       const sobrenome = form.querySelector('.sobrenome');
       const peso = form.querySelector('.peso');
       const altura = form.querySelector('.altura');

       pessoas.push({
        nome: nome.value,
        sobrenome: sobrenome.value,
        peso: peso.value,
        altura: altura.value
       });

       console.log(pessoas);

       resultado.innerHTML += `<p>${nome.value} ${sobrenome.value}`
       +` ${peso.value} ${altura.value}</p>`;
       
    }

    form.addEventListener('submit', recebeEventoForm);

}
meuEscopo();