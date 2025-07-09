const apiKey = "AIzaSyCFP7lBEpVe32B_jqyWVVDYXdr7cnirpcU";
const sheetId = "1an_PVl1zh0r7WCa-iGU8G4aT0e6vMdZxJyJiLKPAWZQ";
const range = "A2:A"; // Coluna A da linha 2 em diante


async function carregarPlanos() {
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    const planos = data.values?.flat() || [];
    const selectPlano = document.getElementById("PLANO");

    planos.forEach(plano => {
      const option = document.createElement("option");
      option.value = plano;
      option.textContent = plano;
      selectPlano.appendChild(option);
    });
  } catch (error) {
    console.error("Erro ao carregar os planos:", error);
  }
}

document.addEventListener("DOMContentLoaded", carregarPlanos);
