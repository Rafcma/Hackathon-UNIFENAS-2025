import type { Aluno, LogAluno, FiltrosAlunos } from "./types"
import { calcularRiscoEvasao } from "./ia"

// #region Dados base
const cursosDisponiveis = [
  "Administração",
  "Agronomia",
  "Arquitetura e Urbanismo",
  "Ciência da Computação",
  "Ciências Contábeis",
  "Direito",
  "Educação Física",
  "Enfermagem",
  "Engenharia Civil",
  "Estética e Cosmética",
  "Farmácia",
  "Fisioterapia",
  "Gastronomia",
  "Medicina",
  "Nutrição",
  "Odontologia",
]

const modulosDisponiveis = ["Módulo 1", "Módulo 2", "Módulo 3", "Módulo 4", "Módulo 5", "Módulo 6", "Módulo 7"]

const nomesAlunos = [
  "Ana Silva",
  "Carlos Oliveira",
  "Maria Santos",
  "Pedro Miguel",
  "Juliana Lima",
  "Roberto Almeida",
  "Lucas Carvalho",
  "Jorge Mendes",
  "César Augusto",
  "Leticia Ferreira",
  "Fernanda Costa",
  "Gabriel Santos",
  "Mariana Oliveira",
  "Thiago Martins",
  "Camila Rodrigues",
  "Rafael Alves",
  "Isabela Souza",
  "Bruno Ferreira",
  "Amanda Lima",
  "Leonardo Costa",
  "Patricia Rocha",
  "Diego Nascimento",
  "Larissa Pereira",
  "Marcos Vieira",
  "Natalia Barbosa",
  "Felipe Cardoso",
  "Vanessa Moreira",
  "Rodrigo Dias",
  "Beatriz Campos",
  "André Ribeiro",
  "Carolina Freitas",
  "Gustavo Monteiro",
  "Priscila Araújo",
  "Henrique Lopes",
  "Daniela Castro",
  "Vinicius Gomes",
  "Renata Machado",
  "Eduardo Pinto",
  "Aline Correia",
  "Fabio Teixeira",
  "Claudia Nunes",
  "Mauricio Ramos",
  "Tatiana Sousa",
  "Alexandre Cunha",
  "Simone Duarte",
  "Ricardo Farias",
  "Monica Rezende",
  "Sergio Melo",
  "Adriana Coelho",
  "Paulo Mendonça",
  "Cristina Borges",
  "Leandro Silva",
  "Eliane Moura",
  "Marcelo Azevedo",
  "Luciana Vargas",
  "Robson Cavalcanti",
  "Silvia Nogueira",
  "Claudio Santana",
  "Rosana Figueiredo",
  "Joao Batista",
  "Carla Medeiros",
  "Antonio Ferraz",
  "Denise Caldeira",
  "Flavio Guimarães",
  "Vera Pacheco",
  "Nelson Tavares",
  "Sonia Brandão",
  "Cesar Vasconcelos",
  "Marcia Siqueira",
  "Edson Barros",
  "Regina Andrade",
  "Luiz Henrique",
  "Solange Martins",
  "Ronaldo Peixoto",
  "Ivone Lacerda",
  "Gilberto Rocha",
  "Marlene Fonseca",
  "Valter Moraes",
  "Neusa Carvalho",
  "Geraldo Ribas",
  "Cleide Sampaio",
  "Wilson Aguiar",
  "Terezinha Lima",
  "Osvaldo Mendes",
  "Zilda Pereira",
  "Armando Costa",
  "Conceição Santos",
  "Benedito Alves",
  "Aparecida Souza",
  "Sebastião Dias",
  "Maria José",
  "Francisco Silva",
  "Antonia Oliveira",
  "José Carlos",
  "Francisca Lima",
  "Manoel Santos",
  "Raimunda Costa",
  "João Pedro",
  "Maria das Graças",
  "Luiz Carlos",
  "Ana Paula",
  "Carlos Eduardo",
  "Maria Fernanda",
  "Pedro Henrique",
  "Juliana Cristina",
  "Roberto Carlos",
  "Lucia Helena",
  "Fernando Souza",
  "Cristiane Oliveira",
  "Marcio Pereira",
  "Sandra Regina",
  "Joaquim Neto",
  "Luciana Martins",
  "Rogério Lima",
  "Elisa Ferreira",
  "Márcio Gomes",
  "Andréia Santos",
  "Cláudio Ribeiro",
  "Luciane Alves",
  "Sérgio Oliveira",
  "Márcia Regina",
  "Antônio Carlos",
  "Elaine Cristina",
  "Fábio Henrique",
  "Patrícia Helena",
  "Luís Fernando",
  "Adriana Souza",
  "Marcos Paulo",
  "Fernanda Maria",
  "Rodrigo Silva",
  "Débora Cristina",
  "Alexandre Oliveira",
  "Cláudia Regina",
  "Marcelo Augusto",
  "Rosângela Maria",
  "José Luiz",
  "Lucimara Santos",
  "Wagner Oliveira",
  "Roseli Aparecida",
  "Reinaldo Silva",
  "Luciana Cristina",
  "Júlio César",
  "Rosana Maria",
  "Márcio Luiz",
  "Andréa Cristina",
  "Valdir Santos",
  "Rosemeire Silva",
  "Celso Ricardo",
  "Adriana Aparecida",
  "Marcos Antônio",
  "Rosângela Aparecida",
  "José Roberto",
  "Luciana Aparecida",
  "Marcelo Henrique",
  "Rosana Aparecida",
  "Luiz Carlos",
  "Adriana Regina",
  "Marcos Roberto",
  "Fernanda Cristina",
  "Ricardo Augusto",
  "Daniela Regina",
  "Marcelo Ricardo",
  "Cristina Maria",
  "Roberto Augusto",
  "Luciana Maria",
  "José Augusto",
  "Márcia Cristina",
  "Antônio Marcos",
  "Adriana Maria",
  "Carlos Alberto",
  "Regina Célia",
  "Luiz Antônio",
  "Sônia Maria",
  "José Antônio",
  "Maria Aparecida",
  "João Carlos",
  "Maria Helena",
  "Antônio José",
  "Maria Cristina",
  "José Maria",
  "Maria Lúcia",
  "Carlos Alberto",
  "Maria Cecília",
  "José Carlos",
  "Maria Eduarda",
  "João Paulo",
  "Maria Clara",
  "Antônio Carlos",
  "Maria Luísa",
  "José Roberto",
  "Maria Fernanda",
  "Carlos Eduardo",
  "Maria Vitória",
  "José Eduardo",
  "Maria Valentina",
]

const sobrenomes = [
  "Silva",
  "Santos",
  "Oliveira",
  "Souza",
  "Rodrigues",
  "Ferreira",
  "Alves",
  "Pereira",
  "Lima",
  "Gomes",
  "Costa",
  "Ribeiro",
  "Martins",
  "Carvalho",
  "Almeida",
  "Lopes",
  "Soares",
  "Fernandes",
  "Vieira",
  "Barbosa",
  "Rocha",
  "Dias",
  "Nascimento",
  "Andrade",
  "Moreira",
  "Nunes",
  "Marques",
  "Machado",
  "Mendes",
  "Freitas",
  "Cardoso",
  "Ramos",
  "Gonçalves",
  "Santana",
  "Teixeira",
  "Araújo",
  "Melo",
  "Correia",
  "Moraes",
  "Castro",
]

// #region Geração de alunos
function gerarNomeCompleto(): string {
  const nome = nomesAlunos[Math.floor(Math.random() * nomesAlunos.length)]
  const sobrenome = sobrenomes[Math.floor(Math.random() * sobrenomes.length)]
  return `${nome} ${sobrenome}`
}

function gerarAlunoAleatorio(id: number, curso?: string, modulo?: string): Aluno {
  const cursoAluno = curso || cursosDisponiveis[Math.floor(Math.random() * cursosDisponiveis.length)]
  const moduloAluno = modulo || modulosDisponiveis[Math.floor(Math.random() * modulosDisponiveis.length)]

  // Gerar dados com base no módulo (alunos de módulos mais avançados tendem a ter melhores métricas)
  const moduloNum = Number.parseInt(moduloAluno.replace("Módulo ", ""))
  const fatorModulo = moduloNum / 7 // 0.14 para Módulo 1, 1.0 para Módulo 7

  // Adicionar variação aleatória
  const variacao = () => Math.random() * 0.4 - 0.2 // -0.2 a +0.2

  // Calcular métricas com base no módulo + variação aleatória
  const basePresenca = 60 + fatorModulo * 30
  const presenca = Math.min(100, Math.max(30, Math.floor(basePresenca + variacao() * 40)))

  const baseNotas = 5 + fatorModulo * 4
  const notas = Math.min(10, Math.max(2, Math.round((baseNotas + variacao() * 4) * 10) / 10))

  const baseAcessos = 8 + fatorModulo * 15
  const acessos = Math.floor(Math.max(3, baseAcessos + variacao() * 15))

  const baseForuns = 1 + fatorModulo * 3
  const participacaoForuns = Math.floor(Math.max(0, Math.min(5, baseForuns + variacao() * 3)))

  const baseAtividades = 2 + fatorModulo * 3
  const atividadesConcluidas = Math.floor(Math.max(0, Math.min(6, baseAtividades + variacao() * 3)))

  const diasAleatorios = Math.floor(Math.random() * 30)
  const ultimoAcesso = new Date()
  ultimoAcesso.setDate(ultimoAcesso.getDate() - diasAleatorios)

  const alunoTemp: Aluno = {
    id,
    nome: gerarNomeCompleto(),
    curso: cursoAluno,
    modulo: moduloAluno,
    presenca,
    notas,
    acessos,
    participacaoForuns,
    atividadesConcluidas,
    riscoEvasao: "baixo",
    ultimoAcesso,
    userId: `USER_${id.toString().padStart(3, "0")}`,
  }

  return {
    ...alunoTemp,
    riscoEvasao: calcularRiscoEvasao(alunoTemp),
  }
}

// Gerar alunos garantindo pelo menos 2 por módulo em cada curso
const alunosBD: Aluno[] = []
let idContador = 1

// Primeiro, garantir pelo menos 2 alunos por módulo em cada curso
cursosDisponiveis.forEach((curso) => {
  modulosDisponiveis.forEach((modulo) => {
    // Adicionar 2 alunos para cada combinação curso/módulo
    for (let i = 0; i < 2; i++) {
      alunosBD.push(gerarAlunoAleatorio(idContador++, curso, modulo))
    }
  })
})

// Adicionar alunos aleatórios até chegar a 200+
while (alunosBD.length < 220) {
  alunosBD.push(gerarAlunoAleatorio(idContador++))
}
// #endregion

// #region Geração de logs
const logsBD: Record<string, LogAluno[]> = {}

alunosBD.forEach((aluno) => {
  if (!aluno.userId) return

  const logs: LogAluno[] = []
  const numLogs = Math.floor(Math.random() * 10) + 5

  const acoes = ["visualizou", "criou", "atualizou", "enviou", "participou"]
  const alvos = ["curso", "tarefa", "fórum", "material", "avaliação"]

  for (let i = 0; i < numLogs; i++) {
    const diasAleatorios = Math.floor(Math.random() * 30)
    const dataLog = new Date()
    dataLog.setDate(dataLog.getDate() - diasAleatorios)

    logs.push({
      data: dataLog,
      acao: acoes[Math.floor(Math.random() * acoes.length)],
      alvo: alvos[Math.floor(Math.random() * alvos.length)],
      componente: "sistema",
      curso: aluno.curso,
    })
  }

  logs.sort((a, b) => b.data.getTime() - a.data.getTime())
  logsBD[aluno.userId] = logs
})
// #endregion

// #region Funções do banco
export async function obterAlunos(filtros?: FiltrosAlunos): Promise<Aluno[]> {
  await new Promise((resolve) => setTimeout(resolve, 200))

  let alunosFiltrados = [...alunosBD]

  if (filtros) {
    if (filtros.curso) {
      alunosFiltrados = alunosFiltrados.filter((aluno) => aluno.curso === filtros.curso)
    }

    if (filtros.modulo) {
      alunosFiltrados = alunosFiltrados.filter((aluno) => aluno.modulo === filtros.modulo)
    }

    if (filtros.nome) {
      const termoBusca = filtros.nome.toLowerCase()
      alunosFiltrados = alunosFiltrados.filter((aluno) => aluno.nome.toLowerCase().includes(termoBusca))
    }
  }

  return alunosFiltrados.map((aluno) => ({
    ...aluno,
    riscoEvasao: calcularRiscoEvasao(aluno),
  }))
}

export async function obterLogsAluno(alunoId: number): Promise<LogAluno[]> {
  await new Promise((resolve) => setTimeout(resolve, 100))

  const aluno = alunosBD.find((a) => a.id === alunoId)
  if (!aluno || !aluno.userId) return []

  return logsBD[aluno.userId] || []
}

export async function obterCursos(): Promise<string[]> {
  await new Promise((resolve) => setTimeout(resolve, 50))
  return [...cursosDisponiveis].sort()
}

export async function obterModulos(): Promise<string[]> {
  await new Promise((resolve) => setTimeout(resolve, 50))
  return [...modulosDisponiveis].sort((a, b) => {
    const numA = Number.parseInt(a.replace("Módulo ", ""))
    const numB = Number.parseInt(b.replace("Módulo ", ""))
    return numA - numB
  })
}

export async function buscarAlunos(termoBusca: string): Promise<Aluno[]> {
  await new Promise((resolve) => setTimeout(resolve, 150))

  if (!termoBusca.trim()) return []

  const termoNormalizado = termoBusca.toLowerCase().trim()
  const alunosEncontrados = alunosBD.filter((aluno) => aluno.nome.toLowerCase().includes(termoNormalizado))

  return alunosEncontrados.map((aluno) => ({
    ...aluno,
    riscoEvasao: calcularRiscoEvasao(aluno),
  }))
}
// #endregion
