function validarFormulario() {
    var nome = document.getElementById('nome').value;
    var dataNascimento = document.getElementById('dataNascimento').value;
    var nomeMae = document.getElementById('nomeMae').value;
    var nomePai = document.getElementById('nomePai').value;
    var telefone = document.getElementById('telefone').value;
    var email = document.getElementById('email').value;
    var atividades = document.querySelectorAll('input[name="atividades"]:checked');
    var aceite = document.getElementById('aceite');

    if (!nome || !dataNascimento || !nomeMae || !nomePai || !telefone || !email || atividades.length === 0) {
        alert('Todos os campos são obrigatórios.');
        return false;
    }

    var dataNascimentoObj = new Date(dataNascimento);
    if (isNaN(dataNascimentoObj.getTime())) {
        alert('Data de nascimento inválida.');
        return false;
    }

    if (email.indexOf('@') === -1 || email.lastIndf('.') === -1) {
        alert('Email inválido.');
        return false;
    }

    var dddsValidos = ['61','62','64','65','66','67','82','71','73','74','75','77','85','88','98','99','83','81','87','86','89','84','79','68','96','92','97','91','93','94','69','95','63','27','28','31','32','33','34','35','37','38','21','22','24','11','12','13','14',15,16,17,'18,19','41','42','43','44','45','46','51','53','54','55','47','48','49'];
    var d = telefone.substring(0, 2);
    if (dddsValidos.indexOf(ddd) === -1) {
        alert('DDD de telefone inválido.');
        return false;
    }

    if (atividades.length > 3) {
        alert('Máximo de 3 atividades extracurriculares permitidas.');
        return false;
    }

    if (!aceite.checked) {
        alert('Você deve aceitar os termos e condições.');
        return false;
    }

    return true;
}
