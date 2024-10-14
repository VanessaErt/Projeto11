document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var dataNascimento = document.getElementById('data_nascimento').value;

    console.log('Nome:', nome);
    console.log('E-mail:', email);
    console.log('Data de nascimento:', dataNascimento);
});
