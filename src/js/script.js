const agentes = document.querySelectorAll('.agente');

agentes.forEach((agente) => {
  agente.addEventListener('click', () => {
    if (window.innerWidth < 450) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    removerSelecaoDoAgente();

    agente.classList.add('selecionado');

    //OBJETIVO 2
    alterarImagemAgenteSelecionado(agente);

    alterarNomeAgenteSelecionado(agente);

    alterarDescricaoAgente(agente);

    alterarFuncaoAgente(agente);

    alterarDescricaoFuncao(agente);
  });
});

function alterarFuncaoAgente(agente) {
  const funcaoAgente = document.getElementById('funcao-agente');
  funcaoAgente.innerText = agente.getAttribute('data-function');
}

function alterarDescricaoFuncao(agente) {
  const descricaoFuncao = document.getElementById('descricao-da-funcao');
  descricaoFuncao.innerText = agente.getAttribute('data-description-function');
}

function alterarDescricaoAgente(agente) {
  const descricaoAgente = document.getElementById('descricao-agente');
  descricaoAgente.innerText = agente.getAttribute('data-description');
}

function alterarNomeAgenteSelecionado(agente) {
  const nomeAgente = document.getElementById('nome-agente');
  nomeAgente.innerText = agente.getAttribute('data-name');
}

function alterarImagemAgenteSelecionado(agente) {
  const imagemAgenteGrande = document.querySelector('.agente-grande');
  const idAgente = agente.attributes.id.value;
  imagemAgenteGrande.src = `./src/imagens/${idAgente}_Grande.png`;
}

function removerSelecaoDoAgente() {
  const agenteSelecionado = document.querySelector('.selecionado');
  agenteSelecionado.classList.remove('selecionado');
}
