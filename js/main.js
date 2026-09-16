// Banco de dados dos poemas
const poemas = {
    p1: {
        titulo: "A esperança é a coisa com penas (Poema #254)",
        texto: `A esperança é a coisa com penas —
Que pousa na alma —
E canta a melodia sem as palavras —
E nunca para — de modo algum —

E mais doce — na Ventania — é ouvida —
E dolorosa deve ser a tempestade —
Que pudesse abalar o passarinho
Que manteve tantos aquecidos —

Eu a ouvi na terra mais fria —
E no Mar mais estranho —
Contudo — jamais — na Extremidade,
Ela pediu uma migalha — de Mim.`
    },
    p2: {
        titulo: "Eu ouvi uma mosca zumbir (Poema #465)",
        texto: `Eu ouvi uma mosca zumbir - quando morri -
A quietude no quarto
Era como a quietude no Ar -
Entre os Impulsos do Temporal -

Os Olhos em volta - tinham esgotado Suas lágrimas -
E os Respirares se fortaleciam
Para aquele Último Surto - quando o Rei
Fosse testemunhado - na Sala -

Eu atribuí meus Remanescentes - Assinei
O que de mim era
Atribuível - e então
Surgiu uma Mosca -

Com um Zumbido - incerto - trôpego - Azul -
Entre a luz - e mim -
E então as Janelas falharam - e então
Eu não pude ver para ver -`
    },
    p3: {
        titulo: "Eu não sou ninguém! Quem é você? (Poema #288)",
        texto: `Eu não sou ninguém! Quem é você?
Você é ninguém — também?
Então somos um par!
Não conte! Eles espalhariam — você sabe!

Como é tédio — ser — Alguém!
Como é público — como uma Rã —
Dizer o seu nome — o Junho inteiro —
Para um Charco Admirador!`
    }
};

// Função para exibir o poema no card de leitura
function openPoem(id) {
    const displayTitle = document.getElementById('poem-title');
    const displayText = document.getElementById('poem-text');
    const poemDisplayArea = document.getElementById('poem-display');

    if (poemas[id]) {
        displayTitle.innerText = poemas[id].titulo;
        displayText.innerText = poemas[id].texto;

        // Efeito simples de rolagem até o poema exibido
        poemDisplayArea.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

// Rolar suavemente até os poemas ao clicar no botão da nav
function scrollToPoemas() {
    document.getElementById('poemas').scrollIntoView({ behavior: 'smooth' });
}
