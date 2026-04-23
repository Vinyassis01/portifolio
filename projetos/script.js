function inicializarProjeto() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    const dados = projetosDB[id];

    if (!dados) {
        document.body.innerHTML = "<h1>Projeto não encontrado.</h1>";
        return;
    }

    // Preenchendo os conteúdos nas tags existentes
    document.getElementById('nome-projeto').textContent = dados.nome;
    document.getElementById('subtitulo-projeto').textContent = dados.subtitulo;
    // secao status
    document.getElementById('txt-status').textContent = dados.status;
    document.getElementById('descricao').textContent = dados.descricao;
    document.getElementById('objetivo').textContent = dados.objetivo;
    document.getElementById('data').textContent = dados.data;
    document.getElementById('github').textContent = dados.github;
    // secao tecnologias
    document.getElementById('tech1').textContent = dados.tech1;
    document.getElementById('tech1li1').textContent = dados.tech1li1;
    document.getElementById('tech1li2').textContent = dados.tech1li2;
    document.getElementById('tech1li3').textContent = dados.tech1li3;
    document.getElementById('tech1li4').textContent = dados.tech1li4;
    document.getElementById('tech1li5').textContent = dados.tech1li5;
    document.getElementById('tech2').textContent = dados.tech2;
    document.getElementById('tech2li1').textContent = dados.tech2li1;
    document.getElementById('tech2li2').textContent = dados.tech2li2;
    document.getElementById('tech2li3').textContent = dados.tech2li3;
    document.getElementById('tech2li4').textContent = dados.tech2li4;
    document.getElementById('tech2li5').textContent = dados.tech2li5;
    document.getElementById('tech3').textContent = dados.tech3;
    document.getElementById('tech3li1').textContent = dados.tech3li1;
    document.getElementById('tech3li2').textContent = dados.tech3li2;
    document.getElementById('tech3li3').textContent = dados.tech3li3;
    document.getElementById('tech3li4').textContent = dados.tech3li4;
    document.getElementById('tech3li5').textContent = dados.tech3li5;
    document.getElementById('tech4').textContent = dados.tech4;
    document.getElementById('tech4li1').textContent = dados.tech4li1;
    document.getElementById('tech4li2').textContent = dados.tech4li2;
    document.getElementById('tech4li3').textContent = dados.tech4li3;
    document.getElementById('tech4li4').textContent = dados.tech4li4;
    document.getElementById('tech4li5').textContent = dados.tech4li5;
    //secao detalhes 
    document.getElementById('txt-detalhes').textContent = dados.detalhes;
    document.getElementById('title1').textContent = dados.title1;
    document.getElementById('detalhes1').textContent = dados.detalhes1;
    document.getElementById('title2').textContent = dados.title2;
    document.getElementById('detalhes2').textContent = dados.detalhes2;
    document.getElementById('title3').textContent = dados.title3;
    document.getElementById('detalhes3').textContent = dados.detalhes3;
    document.getElementById('title4').textContent = dados.title4;
    document.getElementById('detalhes4').textContent = dados.detalhes4;
    // secao adr's
    document.getElementById('adrs_detalhes').textContent = dados.adrs_detalhes;
    document.getElementById('adrs_title1').textContent = dados.adrs_title1;
    document.getElementById('adrs1').textContent = dados.adrs1;
    document.getElementById('adrs_title2').textContent = dados.adrs_title2;
    document.getElementById('adrs2').textContent = dados.adrs2;
    document.getElementById('adrs_title3').textContent = dados.adrs_title3;
    document.getElementById('adrs3').textContent = dados.adrs3;
    document.getElementById('adrs_title4').textContent = dados.adrs_title4;
    document.getElementById('adrs4').textContent = dados.adrs4;
    // secao contribuicoes
    document.getElementById('txt_contribuicoes').textContent = dados.contribuicoes;
    document.getElementById('contrib_title1').textContent = dados.contrib_title1;
    document.getElementById('contrib1').textContent = dados.contrib1;
    document.getElementById('contrib_title2').textContent = dados.contrib_title2;
    document.getElementById('contrib2').textContent = dados.contrib2;
    document.getElementById('contrib_title3').textContent = dados.contrib_title3;
    document.getElementById('contrib3').textContent = dados.contrib3;
    document.getElementById('contrib_title4').textContent = dados.contrib_title4;
    document.getElementById('contrib4').textContent = dados.contrib4;


}

function mostrarSecao(idSecao) {
    // Esconde todas as seções
    const secoes = document.querySelectorAll('.conteudo');
    secoes.forEach(s => {
        s.style.display = 'none';
        s.classList.remove('active');
    });

    // Mostra a seção clicada com animação
    const alvo = document.getElementById(idSecao);
    alvo.style.display = 'block';
    // Timeout pequeno para garantir que o display block seja processado antes da animação
    setTimeout(() => { alvo.classList.add('active'); }, 10);
}

window.onload = inicializarProjeto;
mostrarSecao('status');
