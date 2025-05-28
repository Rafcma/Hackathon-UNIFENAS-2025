import type { Aluno } from "./types"

// #region Cálculo de risco
export function calcularRiscoEvasao(aluno: Aluno): "baixo" | "medio" | "alto" {
  const pesoPresenca = 0.3
  const pesoNotas = 0.25
  const pesoAcessos = 0.2
  const pesoForuns = 0.15
  const pesoAtividades = 0.1

  const presencaNormalizada = aluno.presenca / 100
  const notasNormalizada = aluno.notas / 10
  const acessosNormalizado = Math.min(aluno.acessos / 25, 1)
  const forunsNormalizado = Math.min(aluno.participacaoForuns / 5, 1)
  const atividadesNormalizado = aluno.atividadesConcluidas / 6

  const scoreEngajamento =
    presencaNormalizada * pesoPresenca +
    notasNormalizada * pesoNotas +
    acessosNormalizado * pesoAcessos +
    forunsNormalizado * pesoForuns +
    atividadesNormalizado * pesoAtividades

  if (scoreEngajamento >= 0.75) return "baixo"
  if (scoreEngajamento >= 0.45) return "medio"
  return "alto"
}
// #endregion

// #region Explicação de resultados
export function explicarResultadoIA(aluno: Aluno): string {
  const risco = calcularRiscoEvasao(aluno)

  if (risco === "baixo") {
    return `${aluno.nome} apresenta baixo risco de evasão com presença de ${aluno.presenca}%, média ${aluno.notas.toFixed(1)}, ${aluno.acessos} acessos e boa participação.`
  }

  if (risco === "medio") {
    return `${aluno.nome} apresenta risco médio de evasão. Recomenda-se acompanhamento com presença ${aluno.presenca}% e média ${aluno.notas.toFixed(1)}.`
  }

  return `${aluno.nome} apresenta alto risco de evasão. Intervenção necessária: presença ${aluno.presenca}%, média ${aluno.notas.toFixed(1)}.`
}
// #endregion
