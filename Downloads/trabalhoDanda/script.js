let numeros = []; 

const inputNumero = document.querySelector("#input-numero");
const listaNumeros = document.querySelector("#lista-numeros");
const mediaDisplay = document.querySelector("#media-aritmetica");
const positivosDisplay = document.querySelector("#numeros-positivos");
const negativosDisplay = document.querySelector("#numeros-negativos");
const barraPositivos = document.querySelector("#barra-positivos");
const barraNegativos = document.querySelector("#barra-negativos");
const porcentagemPositivos = document.querySelector("#porcentagem-positivos"); 
const porcentagemNegativos = document.querySelector("#porcentagem-negativos"); 
const botaoAdicionar = document.querySelector("#botao-adicionar");

function atualizarEstatisticas() {
    const total = numeros.length;

    if (total === 0) {
        mediaDisplay.textContent = "0.00";
        positivosDisplay.textContent = "0";
        negativosDisplay.textContent = "0";
        barraPositivos.style.width = "0%";
        barraNegativos.style.width = "0%";
        porcentagemPositivos.textContent = "0.0%";
        porcentagemNegativos.textContent = "0.0%";
        listaNumeros.innerHTML = `
            <div class="flex items-center gap-2 text-gray-500 italic">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-4 h-4 text-gray-500">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5-3.9 19.5m-2.1-19.5-3.9 19.5" />
                </svg>
                <p>Nenhum número inserido ainda</p>
            </div>`;
        return;
    }

    const positivos = numeros.filter(n => n > 0).length;
    const negativos = numeros.filter(n => n < 0).length;
    const media = numeros.reduce((acc, curr) => acc + curr, 0) / total;

    mediaDisplay.textContent = media.toFixed(2);
    positivosDisplay.textContent = positivos.toString();
    negativosDisplay.textContent = negativos.toString();

    const positivoPorcentagem = (positivos / total) * 100;
    const negativoPorcentagem = (negativos / total) * 100;

    porcentagemPositivos.textContent = `${positivoPorcentagem.toFixed(1)}%`;
    porcentagemNegativos.textContent = `${negativoPorcentagem.toFixed(1)}%`;

    barraPositivos.style.width = `${positivoPorcentagem}%`;
    barraNegativos.style.width = `${negativoPorcentagem}%`;

    listaNumeros.innerHTML = numeros
        .map(
            (numero, index) => `
            <div class="flex items-center gap-2">
                <span class="px-4 py-2 bg-indigo-100 text-indigo-800 rounded-lg">${numero}</span>
                <button 
                    class="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                    onclick="removerNumero(${index})">
                    Remover
                </button>
            </div>`
        )
        .join("");
}

botaoAdicionar.addEventListener("click", () => {
    const valor = parseFloat(inputNumero.value);

    if (!isNaN(valor)) {
        numeros.push(valor);
        atualizarEstatisticas();
        inputNumero.value = ""; 
    }
});

function removerNumero(index) {
    numeros.splice(index, 1); 
    atualizarEstatisticas();
}
