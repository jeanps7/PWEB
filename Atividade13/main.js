function Abrir(select) {
    if(select.selectedIndex !=0){
        var curso = select.options[select.selectedIndex].text;
        if (!window.confirm('Deseja abrir a janela de ' + curso + '?'))
            return;
        var cursoSel = select.value;
        window.open('http://www.fatecsorocaba.edu.br/' + cursoSel,"_blank", "toolbar=yes, scrollbars=yes, resizable=yes, width=2000px, height=1000px");
    }
    
}