import type { Aluno, EstatisticasRisco, FiltrosAlunos } from "./types"

// #region Estado do cliente
let filtrosAtuais: FiltrosAlunos = {}
let dadosCache: Aluno[] | null = null
let estatisticasCache: EstatisticasRisco | null = null
// #endregion

// #region Funções de API
export async function filtrarAlunos(curso: string, modulo: string): Promise<void> {
  try {
    filtrosAtuais = {
      curso: curso || undefined,
      modulo: modulo || undefined,
    }

    dadosCache = null
    estatisticasCache = null

    const resposta = await fetch("/api/filtros", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(filtrosAtuais),
    })

    if (!resposta.ok) {
      throw new Error(`Erro ao aplicar filtros: ${resposta.status}`)
    }
  } catch (erro) {
    console.error("Erro ao filtrar alunos:", erro)
    throw erro
  }
}

export async function getAlunos(): Promise<Aluno[]> {
  try {
    if (dadosCache) return dadosCache

    let url = "/api/alunos"
    const params = new URLSearchParams()

    if (filtrosAtuais.curso) params.append("curso", filtrosAtuais.curso)
    if (filtrosAtuais.modulo) params.append("modulo", filtrosAtuais.modulo)
    if (params.toString()) url += `?${params.toString()}`

    const resposta = await fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      cache: "no-store",
    })

    if (!resposta.ok) {
      throw new Error(`Erro ao obter alunos: ${resposta.status}`)
    }

    const dados = await resposta.json()
    dadosCache = dados
    return dados
  } catch (erro) {
    console.error("Erro ao obter alunos:", erro)
    throw erro
  }
}

export async function getEstatisticasRisco(): Promise<EstatisticasRisco> {
  try {
    if (estatisticasCache) return estatisticasCache

    const alunos = await getAlunos()
    const estatisticas: EstatisticasRisco = { baixo: 0, medio: 0, alto: 0 }

    alunos.forEach((aluno) => {
      estatisticas[aluno.riscoEvasao]++
    })

    estatisticasCache = estatisticas
    return estatisticas
  } catch (erro) {
    console.error("Erro ao obter estatísticas:", erro)
    return { baixo: 0, medio: 0, alto: 0 }
  }
}
// #endregion
