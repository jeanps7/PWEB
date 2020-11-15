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
    const nome = document.formFormulario.elements[0].value;
    if (!validaNome(nome)) {
        alert('Nome inválido: No mínimo 10 caracteres!');
        return;
    }
    const email = document.formFormulario.elements[1].value;
    if (!validaEmail(email)) {
        alert('Email inválido!');
        return;
    }
    const comentario = document.formFormulario.elements[2].value;
    if (!validaComentario(comentario)) {
        alert('Comentário deve ter no mínimo 20 caracteres!');
        return;
    }
    const sim = document.formFormulario.elements[3].checked, nao = document.formFormulario.elements[4].checked;
    if (!validaPesquisa(sim, nao)) {
        alert('A pesquisa é obrigatória!');
        return;
    }
    if (nao) {
        alert('Volte sempre!');
    }
    else {
        alert('Que bom que você voltou');
    }
}