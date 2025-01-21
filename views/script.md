<script>
        const numbers = [];
        const input = document.getElementById("inputNumber");
        const addButton = document.getElementById("addButton");

        // Seletores para atualizar estatísticas
        const meanDisplay = document.getElementById("meanDisplay");
        const positiveDisplay = document.getElementById("positiveDisplay");
        const negativeDisplay = document.getElementById("negativeDisplay");
        const positivePercentage = document.getElementById("positivePercentage");
        const negativePercentage = document.getElementById("negativePercentage");

        // Campo de lista para os números inseridos
        const numberList = document.getElementById("numberList");

        // Função para calcular a média com números negativos sendo subtraídos
        function calculateMean(nums) {
            const totalSum = nums.reduce((acc, num) => acc + num, 0); // Somando todos os números
            return nums.length ? (totalSum / nums.length).toFixed(2) : "0.00";
        }

        // Função para calcular os percentuais de números positivos e negativos
        function calculatePercentages(positiveCount, negativeCount, totalCount) {
            const positivePercentageValue = totalCount ? ((positiveCount / totalCount) * 100).toFixed(2) : 0;
            const negativePercentageValue = totalCount ? ((negativeCount / totalCount) * 100).toFixed(2) : 0;
            return { positivePercentageValue, negativePercentageValue };
        }

        // Função para atualizar as estatísticas
        function updateStats() {
            const positiveNumbers = numbers.filter(num => num > 0);
            const negativeNumbers = numbers.filter(num => num < 0);
            const totalNumbers = numbers.length;

            meanDisplay.textContent = calculateMean(numbers);
            positiveDisplay.textContent = positiveNumbers.length;
            negativeDisplay.textContent = negativeNumbers.length;

            const { positivePercentageValue, negativePercentageValue } = calculatePercentages(
                positiveNumbers.length,
                negativeNumbers.length,
                totalNumbers
            );

            positivePercentage.textContent = `${positivePercentageValue}%`;
            negativePercentage.textContent = `${negativePercentageValue}%`;
        }

        // Função para atualizar a lista de números
        function updateNumberList() {
            numberList.innerHTML = ''; // Limpa a lista
            numbers.forEach(num => {
                const listItem = document.createElement('li');
                listItem.textContent = num;
                numberList.appendChild(listItem);
            });
        }

        // Evento de adição de número
        addButton.addEventListener("click", () => {
            const number = parseFloat(input.value);
            if (!isNaN(number)) {
                numbers.push(number);
                updateStats();
                updateNumberList();
                input.value = ""; // Limpa o campo
            } else {
                alert("Por favor, insira um número válido.");
            }
        });
    </script>
