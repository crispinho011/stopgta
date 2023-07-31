// Definição do alfabeto
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// Palavras encontradas pelo jogador
const foundWords = [];

// Função para verificar a letra digitada pelo jogador
function checkLetter() {
    const letterInput = document.getElementById('letter');
    const letter = letterInput.value.toUpperCase();

    // Verificar se a letra digitada está no alfabeto
    if (alphabet.includes(letter)) {
        // Adicione aqui a lógica para o jogo Stop, como verificar se a letra foi usada anteriormente e verificar se a palavra se encaixa na categoria atual.
        // Exemplo de como adicionar palavras encontradas:
        foundWords.push('Palavra Exemplo');
        updateWordList();

        document.getElementById('output').innerText = 'Letra digitada: ' + letter;
    } else {
        document.getElementById('output').innerText = 'Por favor, digite uma letra válida.';
    }

    // Limpar o campo de entrada
    letterInput.value = '';
}

// Atualizar a lista de palavras encontradas
function updateWordList() {
    const wordList = document.getElementById('words');
    wordList.innerHTML = '';

    for (const word of foundWords) {
        const li = document.createElement('li');
        li.textContent = word;
        wordList.appendChild(li);
    }
}

// Temporizador
let timeLeft = 60;
const timerElem = document.getElementById('time');

function startTimer() {
    const timer = setInterval(function () {
        timeLeft--;
        timerElem.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            alert('Tempo esgotado!');
        }
    }, 1000);
}

// Iniciar o temporizador após o carregamento da página
window.onload = function () {
    startTimer();
};
