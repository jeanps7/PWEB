function Limpar(){
    document.formFormulario.elements[0].value = "";
    document.formFormulario.elements[1].value= "";
    document.formFormulario.elements[2].value= "";
    document.formFormulario.elements[3].checked;
    document.formFormulario.elements[4].checked;
}

function validaPesquisa(sim, nao) {
    if (sim || nao) {
        return true;
    }
    return false;
}

function validaEmail(email) {
    if (email.indexOf('@') === -1 || email.indexOf('.') === -1) {
        return false;
    }
    return true;
}

function validaComentario(comentario) {
    if (comentario.length < 20) {
        return false;
    }
    return true;
}

function validaNome(nome) {
    if (nome.length < 10) {
        return false;
    }
    return true;
}

function validar() {
    var nome = document.formFormulario.elements[0].value;
    if (!validaNome(nome)) {
        alert('Nome inválido: No mínimo 10 caracteres!');
        return;
    }
    var email = document.formFormulario.elements[1].value;
    if (!validaEmail(email)) {
        alert('Email inválido!');
        return;
    }
    var comentario = document.formFormulario.elements[2].value;
    if (!validaComentario(comentario)) {
        alert('Comentário deve ter no mínimo 20 caracteres!');
        return;
    }
    var sim = document.formFormulario.elements[3].checked, nao = document.formFormulario.elements[4].checked;
    if (!validaPesquisa(sim, nao)) {
        alert('Pesquisa é obrigatória!');
        return;
    }
    if (nao) {
        alert('Volte sempre!');
    }
    else {
        alert('Que bom que você voltou');
    }
}