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
function showMeal(meal) {
    const mealOptions = document.getElementById('meal-options');
    mealOptions.innerHTML = ''; // Limpa os alimentos anteriores

    let foods = [];

    switch(meal) {
        case 'breakfast':
            foods = [
                { name: 'Ovos', image: 'eggs.png' },
                { name: 'Iogurte Grego', image: 'yogurt.png' },
                { name: 'Pão Integral com Manteiga de Amendoim', image: 'bread_peanut_butter.png' },
                { name: 'Aveia com Frutas', image: 'oatmeal.png' },
                { name: 'Abacate', image: 'avocado.png' }
            ];
            break;
        case 'snack':
            foods = [
                { name: 'Shake de Proteína', image: 'protein_shake.png' },
                { name: 'Iogurte Grego com Granola', image: 'yogurt_granola.png' },
                { name: 'Batata Doce Assada', image: 'sweet_potato.png' },
                { name: 'Frutas Secas', image: 'dried_fruits.png' },
                { name: 'Nozes e Castanhas', image: 'nuts.png' }
            ];
            break;
        case 'lunch':
            foods = [
                { name: 'Peito de Frango Grelhado', image: 'chicken.png' },
                { name: 'Arroz Integral', image: 'rice.png' },
                { name: 'Quinoa com Legumes', image: 'quinoa.png' },
                { name: 'Batata Doce Assada', image: 'sweet_potato.png' },
                { name: 'Azeite de Oliva', image: 'olive_oil.png' }
            ];
            break;
        case 'dinner':
            foods = [
                { name: 'Salmão Grelhado', image: 'salmon.png' },
                { name: 'Purê de Batata', image: 'mashed_potatoes.png' },
                { name: 'Omelete com Legumes', image: 'omelette.png' },
                { name: 'Cuscuz Marroquino', image: 'couscous.png' },
                { name: 'Guacamole', image: 'guacamole.png' }
            ];
            break;
        default:
            foods = [];
    }

    foods.forEach(food => {
        const foodItem = document.createElement('div');
        foodItem.className = 'food-item';
        foodItem.innerHTML = `
            <img src="images/${food.image}" alt="${food.name}" style="width:50px; height:50px; vertical-align:middle; margin-right:10px;">
            ${food.name}
        `;
        mealOptions.appendChild(foodItem);
    });
}

