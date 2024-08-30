document.addEventListener('DOMContentLoaded', () => {
    const plateContent = document.getElementById('plate-content');
    const chart = document.getElementById('chart');
    const progressDiv = document.getElementById('progress');
    let totalNutrients = { protein: 0, carbs: 0, fats: 0 };

    // Dados de alimentos (valores fictícios para simplificação)
    const foodData = {
        carne: { protein: 30, carbs: 0, fats: 10 },
        peixe: { protein: 25, carbs: 0, fats: 8 },
        ovo: { protein: 6, carbs: 1, fats: 5 },
        frango: { protein: 27, carbs: 0, fats: 7 },
        tofu: { protein: 8, carbs: 2, fats: 4 },
        vegetais: { protein: 2, carbs: 10, fats: 0 }
    };

    // Adiciona alimento ao prato
    document.querySelectorAll('.food-item').forEach(item => {
        item.addEventListener('click', () => {
            const foodType = item.dataset.food;
            const icon = item.querySelector('i').outerHTML;
            plateContent.innerHTML += `<div class="food-icon">${icon}</div>`;
            updateNutrients(foodType);
        });
    });

    // Atualiza os nutrientes totais
    function updateNutrients(foodType) {
        if (foodData[foodType]) {
            totalNutrients.protein += foodData[foodType].protein;
            totalNutrients.carbs += foodData[foodType].carbs;
            totalNutrients.fats += foodData[foodType].fats;
            updateChart();
        }
    }

    // Atualiza o gráfico
    function updateChart() {
        chart.innerHTML = `
            <div>Proteínas: ${totalNutrients.protein}g</div>
            <div>Carboidratos: ${totalNutrients.carbs}g</div>
            <div>Gorduras: ${totalNutrients.fats}g</div>
        `;
    }

    // Calcula o progresso
    function calculateProgress() {
        const daysInPeriod = {
            '1 mês': 30,
            '3 meses': 90,
            '6 meses': 180,
            '1 ano': 365
        };

        let progressMessage = '<h3>Progresso Estimado:</h3>';
        for (let period in daysInPeriod) {
            const days = daysInPeriod[period];
            const weightChange = (totalNutrients.protein * days) / 1000; // Exemplo simplificado
            progressMessage += `<p>${period}: ${weightChange.toFixed(2)} kg</p>`;
        }

        progressDiv.innerHTML = progressMessage;
    }
});
