import type { Aluno, FiltrosAlunos, LogAluno } from "./types"
import { obterAlunos, obterLogsAluno, obterCursos, obterModulos, buscarAlunos as bdBuscarAlunos } from "./bdAlunos"

// #region Estado
let filtrosAtuais: FiltrosAlunos = {}
let dadosCache: Aluno[] | null = null
let ultimaAtualizacao = 0
// #endregion

// #region Funções principais
export async function getAlunos(filtros?: FiltrosAlunos): Promise<Aluno[]> {
  try {
    const agora = Date.now()
    if (!dadosCache || agora - ultimaAtualizacao > 5 * 60 * 1000) {
      await atualizarDadosAlunos()
    }

    const filtrosEfetivos = filtros || filtrosAtuais
    return await obterAlunos(filtrosEfetivos)
  } catch (erro) {
    console.error("Erro ao obter alunos:", erro)
    return []
  }
}

async function atualizarDadosAlunos(): Promise<void> {
  try {
    dadosCache = await obterAlunos()
    ultimaAtualizacao = Date.now()
  } catch (erro) {
    console.error("Erro ao atualizar dados:", erro)
    dadosCache = []
    ultimaAtualizacao = Date.now()
  }
}

export async function atualizarFiltros(filtros: FiltrosAlunos): Promise<void> {
  filtrosAtuais = { ...filtros }
}

export async function getLogsAluno(alunoId: number): Promise<LogAluno[]> {
  try {
    return await obterLogsAluno(alunoId)
  } catch (erro) {
    console.error(`Erro ao obter logs do aluno ${alunoId}:`, erro)
    return []
  }
}

export async function obterCursosDisponiveis(): Promise<string[]> {
  try {
    return await obterCursos()
  } catch (erro) {
    console.error("Erro ao obter cursos:", erro)
    return []
  }
}

export async function obterModulosDisponiveis(): Promise<string[]> {
  try {
    return await obterModulos()
  } catch (erro) {
    console.error("Erro ao obter módulos:", erro)
    return []
  }
}

export async function buscarAlunos(termoBusca: string): Promise<Aluno[]> {
  try {
    return await bdBuscarAlunos(termoBusca)
  } catch (erro) {
    console.error("Erro ao buscar alunos:", erro)
    return []
  }
}
// #endregion
