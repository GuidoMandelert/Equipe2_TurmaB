document.addEventListener('DOMContentLoaded', function() {
    check1=document.querySelector('#check1')
    check2=document.querySelector('#check2')
    check3=document.querySelector('#check3')
    filtrar=document.querySelector('#filtrar')
    titulo=document.querySelector('#titulo')

    check1_cliques=0
    check2_cliques=0
    check3_cliques=0

    selecionado1=false
    selecionado2=false
    selecionado3=false
    clique_negado=false
    liberado=true
    
    h2=document.createElement('h2')
    h2.innerHTML="Por favor, selecione algum igrediente!"
    main=document.querySelector('main')

    check1.addEventListener('click', function(){
        check1_cliques+=1
        if (check1_cliques % 2 == 0) {
            selecionado1=false
        } else {
           selecionado1=true
        }
    })

    check2.addEventListener('click', function(){
        check2_cliques+=1
        if (check2_cliques % 2 == 0) {
            selecionado2=false
        } else {
           selecionado2=true
        }
    })

    check3.addEventListener('click', function(){
        check3_cliques+=1
        if (check3_cliques % 2 == 0) {
            selecionado3=false
        } else {
        selecionado3=true
        }
    })
    
    filtrar.addEventListener('click', function(){
        if (!selecionado1 && !selecionado2 && !selecionado3) {
            liberado=false
            clique_negado=true
        }
        else{
            clique_negado=false
            liberado=true
        }
        
        if(!liberado){
            filtrar.href="#"
        }
        else{
            filtrar.href="Filtrados.html"
        }
        if(clique_negado){
            main.appendChild(h2)
        }
    })

})