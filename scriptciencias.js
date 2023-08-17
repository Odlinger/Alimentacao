document.getElementById('calculate').addEventListener('click', function() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
  
    if (isNaN(weight) || isNaN(height)) {
      document.getElementById('result').innerText = "Informe valores válidos de peso e altura.";
      return;
    }
  
    const bmi = weight / (height * height);
    let category = '';
  
    if (bmi < 18.5) {
      category = 'Abaixo do peso';
    } else if (bmi < 24.9) {
      category = 'Peso normal';
    } else if (bmi < 29.9) {
      category = 'Sobrepeso';
    } else {
      category = 'Obeso';
    }
  
    const recommendations = {
      'Abaixo do peso': 'Recomenda-se consumir alimentos ricos em proteínas e nutrientes para ganhar peso de forma saudável.',
      'Peso normal': 'Continue mantendo uma dieta balanceada e praticando atividades físicas regularmente.',
      'Sobrepeso': 'Reduza o consumo de alimentos calóricos e aumente a ingestão de vegetais, frutas e proteínas magras.',
      'Obeso': 'Consulte um profissional de saúde para orientações específicas sobre dieta e exercícios.'
    };
  
    document.getElementById('result').innerText = `Seu IMC é ${bmi.toFixed(2)} (${category}).\n${recommendations[category]}`;
  });