document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('formulario');
  const resultadoCompletoBox = document.getElementById('resultado-completo');
  const resultadoResumidoBox = document.getElementById('resultado-resumido');
  const seletorEquipamento = document.getElementById('cpdeq');
  const campoEquipamento = document.getElementById('campo-equipamento');

  // Mostrar ou ocultar os campos de equipamento
  seletorEquipamento.addEventListener('change', () => {
    campoEquipamento.style.display = seletorEquipamento.value === 'SIM' ? 'block' : 'none';
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Dados principais
    const admv = document.getElementById('ADNV').value;
    const plano = document.getElementById('PLANO').value;
    const valor = document.getElementById('VALOR').value.trim();
    const vencimento = document.getElementById('VENCIMENTO').value.trim();
    const valorads = document.getElementById('VALORADS').value.trim();
    const fidelidade = document.getElementById('FIDELIDADE').value.trim();
    const telefone = document.getElementById('TELEFONE').value.trim();
    const numero = document.getElementById('numero').value.trim();
    const complemento = document.getElementById('complemento').value.trim();

    // Endereço via CEP
    const logradouro = document.getElementById('logradouro')?.textContent || '';
    const bairro = document.getElementById('bairro')?.textContent || '';
    const cidade = document.getElementById('localidade')?.textContent || '';
    const estado = document.getElementById('uf')?.textContent || '';

    // Coordenadas
    const externaLatitude = window.latitude || '';
    const externaLongitude = window.longitude || '';

    // Equipamentos
    const compraEquipamento = seletorEquipamento.value;
    let textoEquipamentos = '';

    if (compraEquipamento === 'SIM') {
      const roteador = document.getElementById('ROTEADOR')?.value || '';
      const qtdroteador = document.getElementById('qtdroteador')?.value || '0';
      const ONU_2 = document.getElementById('ONU_2')?.value || '';
      const qtdonu = document.getElementById('qtdonu')?.value || '0';
      const box = document.getElementById('box')?.value || '';
      const qtdbox = document.getElementById('qtdbox')?.value || '0';
      const cabo1 = document.getElementById('cabo1')?.value || '';
      const qtdcabo = document.getElementById('qtdcabo')?.value || '0';

      textoEquipamentos = 'Equipamentos:';

      if (roteador && qtdroteador !== '0') {
        textoEquipamentos += `\n- Roteador: ${roteador} (Qtd: ${qtdroteador})`;
      }
      if (ONU_2 && qtdonu !== '0') {
        textoEquipamentos += `\n- ONU: ${ONU_2} (Qtd: ${qtdonu})`;
      }
      if (box && qtdbox !== '0') {
        textoEquipamentos += `\n- TV Box: ${box} (Qtd: ${qtdbox})`;
      }
      if (cabo1 && qtdcabo !== '0') {
        textoEquipamentos += `\n- Cabo: ${cabo1} (Qtd: ${qtdcabo})`;
      }

      if (textoEquipamentos === 'Equipamentos Vendidos:') {
        textoEquipamentos = '';
      }
    }

    // Texto completo
    let resultadoCompleto = `
Adesão Nova: ${admv}
Plano Contratado: ${plano}
Valor Mensal: ${valor}
Dia do Vencimento: ${vencimento}
Valor da Adesão: ${valorads}
Fidelidade: ${fidelidade}
Nome Contato: ${telefone}
Endereço: ${logradouro}, ${numero}, ${bairro}, ${cidade} - ${estado}, ${complemento}
Coordenadas: ${externaLatitude} ${externaLongitude}
`;

    if (textoEquipamentos) {
      resultadoCompleto += `\n\n${textoEquipamentos}`;
    }

    // Texto resumido
    let resultadoResumido = `
Plano: ${plano}
Nome Contato: ${telefone}
ndereço: ${logradouro}, ${numero}, ${bairro}, ${cidade} - ${estado}, ${complemento}
Coordenadas: ${externaLatitude} ${externaLongitude}
`;

    if (textoEquipamentos) {
      resultadoResumido += `\n${textoEquipamentos}`;
    }

    // Exibir nos campos
    resultadoCompletoBox.value = resultadoCompleto.trim();
    resultadoResumidoBox.value = resultadoResumido.trim();
  });
});