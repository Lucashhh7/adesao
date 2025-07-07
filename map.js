document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('formulario');
  const resultadoBox = document.getElementById('resultado');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const admv = document.getElementById('ADNV').value;
    const plano = document.getElementById('PLANO').value;
    const valor = document.getElementById('VALOR').value.trim();
    const vencimento = document.getElementById('VENCIMENTO').value.trim();
    const valorads = document.getElementById('VALORADS').value.trim();
    const fidelidade = document.getElementById('FIDELIDADE').value.trim();
    const telefone = document.getElementById('TELEFONE').value
    const numero = document.getElementById('numero').value.trim();
    const logradouro = document.getElementById('logradouro').textContent;
    const bairro = document.getElementById('bairro').textContent;
    const cidade = document.getElementById('localidade').textContent;
    const estado = document.getElementById('uf').textContent;
    const externaLatitude = window.latitude || '';
    const externaLongitude = window.longitude || '';

    const resultadoTexto = `Adesão nova: ${admv}
Plano: ${plano}
Valor: ${valor}
Vencimento: ${vencimento}
Valor da adesão: ${valorads}
Fidelidade: ${fidelidade}
Contato: ${telefone}
Endereço: ${logradouro}, ${numero}, ${bairro}, ${cidade} - ${estado}
Coordenadas: ${externaLatitude} ${externaLongitude}`;

    resultadoBox.value = resultadoTexto;
    resultadoBox.select();
  });
});