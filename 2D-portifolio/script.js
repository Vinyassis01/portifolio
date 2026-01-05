// Objeto para armazenar todo o conteúdo do diálogo
const dialogos = {
    inicio: {
        texto: "Ola , Eu sou Vinycius Assis. Confira um pouco mais sobre minhas habilidades \
         ,minha experiencia e meus projetos,vc pode encontrar todos os projetos detalhados e documentados e \
         os links para minhas redes ",
        opcoes: [
            { texto: "Sobre mim", destino: "Sobre_mim" },// ok
            { texto: "Projetos", destino: "projetos" },
            { texto: "Hard Skills", destino: "Hard_Skills" },
            { texto: "Soft Skills", destino: "Soft_Skills" },
            { texto: "Contatos", destino: "contatos" }
        ]
    },
     Sobre_mim: {
        texto: " Dev Python ,Docker ,Machine Learning e API's \
        sou desenvolvedor com experiencia em projetos de automacao ,sistemas de gestao ,coleta e \
        limpeza de dados ,com desenvolvimento agil e responsavel vc pode ter ganhos de produtividade \
        e reducao de custos",
        opcoes: [
            { texto: "Hard Skills", destino: "Hard_Skills" },
            { texto: "Projetos", destino: "projetos" },
            { texto: "Contatos", destino: "contatos" },
            { texto: "Voltar", destino: "inicio", isBack: true }
        ]
    },

    projetos: {
        texto: "Meus projeto se resumen em sistemas de automacao com Machine Learning e API \
        Desenvolvimento web com django ,coleta e limpeza de dados com Beautiful Soap e API's com o rest Framework",
        opcoes: [
            { texto: "DaillyFlix", destino: "DaillyFlix"},
            { texto: "Docker-jupyter", destino: "Docker_jupyter"},
            { texto: "BoiAPI", destino: "BoiAPI"},
            { texto: "Ml - Recomendation", destino: "ML_Recomendation"},
            { texto: "Ml - Transfer Learning", destino: "ML_Transfer_Learning"},
            { texto: "STRIDE - logs gemini API", destino: "STRIDE"},
            { texto: "Ir para GitHub", destinoUrl: "github.com" },
            { texto: "Voltar", destino: "inicio", isBack: true }
        ]
    },

    DaillyFlix: {
        texto: " Um diario web no estilo da netflix para o upload e organizacao de fotos e videos (momentos)\
        pessoais em um formato similar a uma serie ou filme para uma experiencia confortavel e \
        alegre",
        opcoes: [
            { texto: "mais detalhes", destino: "detalhes1"},
            { texto: "Voltar", destino: "projetos", isBack: true }
        ]
    },
    detalhes1: {
        texto: " daillyflix",
        opcoes: [
            { texto: "Voltar", destino: "projetos", isBack: true }
        ]
    },

    Docker_jupyter: {
        texto: "um Ambiente jupyter para o desenvolvimento com tensorFlow e scikit-learn \
        para o aprendizado de maquina, aimagem estadisponivel no meu DockerHub",
        opcoes: [
            { texto: "mais detalhes", destino: "detalhes2"},
            { texto: "Voltar", destino: "projetos", isBack: true }
        ]
    },
    detalhes2: {
        texto: " ",
        opcoes: [
            { texto: "Voltar", destino: "projetos", isBack: true }
        ]
    },

    BoiAPI: {
        texto: " Uma API que fornece os valores para a arroba de boi e animais semelhantes\
        de forma organizada e limpa ,os dados sao coletados via web scraping e armazenados no banco de dados \
        do Django",
        opcoes: [
            { texto: "mais detalhes", destino: "detalhes3"},
            { texto: "Voltar", destino: "projetos", isBack: true }
        ]
    },
    detalhes3: {
        texto: " ",
        opcoes: [
            { texto: "Voltar", destino: "projetos", isBack: true }
        ]
    },

     STRIDE: {
        texto: " ",
        opcoes: [
            { texto: "mais detalhes", destino: "detalhes4"},
            { texto: "Voltar", destino: "projetos", isBack: true }
        ]
    },
    detalhes4: {
        texto: " ",
        opcoes: [
            { texto: "Voltar", destino: "projetos", isBack: true }
        ]
    },

    ML_Recomendation: {
        texto: " ",
        opcoes: [
            { texto: "mais detalhes", destino: "detalhes5"},
            { texto: "Voltar", destino: "projetos", isBack: true }
        ]
    },
    detalhes5: {
        texto: " ",
        opcoes: [
            { texto: "Voltar", destino: "projetos", isBack: true }
        ]
    },

    ML_Transfer_Learning: {
        texto: " ",
        opcoes: [
            { texto: "mais detalhes", destino: "detalhes6"},
            { texto: "Voltar", destino: "projetos", isBack: true }
        ] 
    },
    detalhes6: {
        texto: " ",
        opcoes: [
            { texto: "Voltar", destino: "projetos", isBack: true }
        ]
    },

    Hard_Skills: {
        texto: " Possuo habilidades na area backend  de modo que posso construir e \
        implantar softwares seguros e escalaveis ,em ambientes isolados e na web de \
        forma pratica e eficiente ",
        opcoes: [
            { texto: "Python", destino: "Python"},
            { texto: "Docker ", destino: "Docker"},
            { texto: "MySQL", destino: "MySQL"},
            { texto: "Rust", destino: "Rust"},
            { texto: "Django", destino: "Django"},
            { texto: "API's RestFul", destino: "API"},
            { texto: "GitHub", destino: "GitHub"},
            { texto: "TensorFlow", destino: "TensorFlow"},
            { texto: "Scikit-learn", destino: "Scikit_learn"},
            { texto: "Voltar", destino: "inicio", isBack: true }
        ]
    },
    
    Python: {
            texto: " ",
            opcoes: [
                { texto: "Voltar", destino: "Hard_Skills", isBack: true }
            ]
        },

    Docker: {
        texto: " ",
        opcoes: [
            { texto: "Voltar", destino: "Hard_Skills", isBack: true }
        ]
    },

    MySQL: {
            texto: " ",
            opcoes: [
                { texto: "Voltar", destino: "Hard_Skills", isBack: true }
            ]
        },

    Rust: {
            texto: " ",
            opcoes: [
                { texto: "Voltar", destino: "Hard_Skills", isBack: true }
            ]
        },

    Django: {
            texto: " ",
            opcoes: [
                { texto: "Voltar", destino: "Hard_Skills", isBack: true }
            ]
        },

    API: {
            texto: " ",
            opcoes: [
                { texto: "Voltar", destino: "Hard_Skills", isBack: true }
            ]
        },

    GitHub: {
            texto: " ",
            opcoes: [
                { texto: "Voltar", destino: "Hard_Skills", isBack: true }
            ]
        },

    TensorFlow: {
            texto: " ",
            opcoes: [
                { texto: "Voltar", destino: "Hard_Skills", isBack: true }
            ]
        },

    Scikit_learn: {
            texto: " ",
            opcoes: [
                { texto: "Voltar", destino: "Hard_Skills", isBack: true }
            ]
        },

    Soft_Skills: {
        texto: " ",
        opcoes: [
            { texto: "Voltar", destino: "inicio", isBack: true }
        ]
    },
    contatos: {
        texto: "Para recrutar este herói, você pode enviar uma mensagem via Email ou LinkedIn.",
        opcoes: [
            { texto: "Email", destinoUrl: "mailto:seu.email@exemplo.com" },
            { texto: "LinkedIn", destinoUrl: "linkedin.com" },
            { texto: "Voltar", destino: "inicio", isBack: true }
        ]
    }
};

const dialogContentEl = document.getElementById('dialogContent');
const dialogOptionsEl = document.getElementById('dialogOptions');

// Função para renderizar o diálogo atual
function renderDialog(key) {
    const currentDialog = dialogos[key];
    
    // Animação/transição de opacidade
    dialogContentEl.style.opacity = 0;
    setTimeout(() => {
        dialogContentEl.textContent = currentDialog.texto;
        dialogContentEl.style.opacity = 1;
    }, 200); // Espera a opacidade sumir antes de mudar o texto

    // Limpa e cria novas opções
    dialogOptionsEl.innerHTML = '';
    currentDialog.opcoes.forEach(option => {
        const button = document.createElement('button');
        button.classList.add('option-btn');
        button.textContent = option.texto;

        button.addEventListener('click', () => {
            if (option.destino) {
                renderDialog(option.destino);
            } else if (option.destinoUrl) {
                window.open(option.destinoUrl, '_blank');
            }
        });
        dialogOptionsEl.appendChild(button);
    });
}

// Inicia o diálogo com a tela inicial
document.addEventListener('DOMContentLoaded', () => {
    renderDialog('inicio');
});
