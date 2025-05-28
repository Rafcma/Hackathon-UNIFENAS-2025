import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ChevronRight, BarChart2, Brain, Users } from "lucide-react"

export default function Sobre() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="container mx-auto py-8 px-4 flex-grow">
        {/* Hero Section */}
        <div className="card-moderno mb-10">
          <div className="bg-gradient-to-r from-purple-700 to-purple-900 text-white p-8 md:p-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 font-cinzel">Sobre o Projeto</h1>
            <p className="text-lg md:text-xl text-purple-100 max-w-3xl">
              O sistema "Não se vá com IA" foi desenvolvido para combater a evasão escolar através de análise preditiva
              e intervenções personalizadas baseadas em inteligência artificial.
            </p>
          </div>
          <div className="p-8 md:p-12">
            <div className="prose max-w-none">
              <p className="text-lg">
                Este projeto nasceu da necessidade de enfrentar um dos maiores desafios da educação superior no Brasil:
                a evasão escolar. Utilizando tecnologias modernas e análise de dados, criamos uma ferramenta que permite
                às instituições identificar precocemente alunos em risco e implementar estratégias de retenção eficazes.
              </p>

              <div className="flex flex-wrap gap-2 my-6">
                <span className="tag tag-purple">Inteligência Artificial</span>
                <span className="tag tag-blue">Análise Preditiva</span>
                <span className="tag tag-green">Educação</span>
                <span className="tag tag-purple">Next.js</span>
                <span className="tag tag-blue">React</span>
                <span className="tag tag-green">TailwindCSS</span>
              </div>
            </div>
          </div>
        </div>

        {/* Visão Geral */}
        <section className="mb-12">
          <h2 className="section-title">Visão Geral</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="feature-card">
              <div className="feature-icon">
                <BarChart2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2 font-cinzel">Análise de Dados</h3>
              <p className="text-gray-600">
                Processamento avançado de métricas acadêmicas para identificar padrões de comportamento relacionados à
                evasão.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <Brain className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2 font-cinzel">Algoritmo Preditivo</h3>
              <p className="text-gray-600">
                Modelo matemático que calcula o risco de evasão com base em múltiplos fatores de engajamento do aluno.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2 font-cinzel">Intervenção Personalizada</h3>
              <p className="text-gray-600">
                Recomendações específicas para cada nível de risco, permitindo ações direcionadas e eficientes.
              </p>
            </div>
          </div>

          <div className="prose max-w-none">
            <p>
              O sistema foi projetado para ser intuitivo e eficiente, permitindo que coordenadores e professores
              monitorem facilmente o desempenho dos alunos e identifiquem aqueles que necessitam de atenção especial. A
              interface minimalista e responsiva garante uma experiência de usuário agradável em qualquer dispositivo.
            </p>
          </div>
        </section>

        {/* Metodologia */}
        <section className="mb-12">
          <h2 className="section-title">Metodologia e Cálculos</h2>

          <div className="info-box-purple mb-8">
            <h3 className="text-lg font-semibold mb-3 font-cinzel">Algoritmo de Cálculo de Risco</h3>
            <p className="mb-4">
              Nosso algoritmo utiliza um sistema de pontuação ponderada que considera cinco fatores principais para
              determinar o risco de evasão de cada aluno:
            </p>

            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg overflow-hidden">
                <thead className="bg-purple-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium text-purple-800">Fator</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-purple-800">Peso</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-purple-800">Normalização</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="px-4 py-3 text-sm">Presença nas aulas</td>
                    <td className="px-4 py-3 text-sm">30%</td>
                    <td className="px-4 py-3 text-sm">Percentual / 100</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm">Notas/Desempenho</td>
                    <td className="px-4 py-3 text-sm">25%</td>
                    <td className="px-4 py-3 text-sm">Média / 10</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm">Acessos à plataforma</td>
                    <td className="px-4 py-3 text-sm">20%</td>
                    <td className="px-4 py-3 text-sm">Min(Acessos / 25, 1)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm">Participação em fóruns</td>
                    <td className="px-4 py-3 text-sm">15%</td>
                    <td className="px-4 py-3 text-sm">Min(Participações / 5, 1)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm">Atividades concluídas</td>
                    <td className="px-4 py-3 text-sm">10%</td>
                    <td className="px-4 py-3 text-sm">Atividades / 6</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6">
              <h4 className="font-medium mb-2">Fórmula de cálculo:</h4>
              <div className="bg-white p-4 rounded-lg border border-gray-200 font-mono text-sm overflow-x-auto">
                <code>
                  scoreEngajamento = <br />
                  &nbsp;&nbsp;(presença / 100) * 0.3 + <br />
                  &nbsp;&nbsp;(notas / 10) * 0.25 + <br />
                  &nbsp;&nbsp;min(acessos / 25, 1) * 0.2 + <br />
                  &nbsp;&nbsp;min(participaçãoFóruns / 5, 1) * 0.15 + <br />
                  &nbsp;&nbsp;(atividadesConcluídas / 6) * 0.1
                </code>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg border-l-4 border-emerald-500">
                <h4 className="font-medium text-emerald-700 mb-1">Risco Baixo</h4>
                <p className="text-sm">Score ≥ 0.75</p>
              </div>
              <div className="bg-white p-4 rounded-lg border-l-4 border-amber-500">
                <h4 className="font-medium text-amber-700 mb-1">Risco Médio</h4>
                <p className="text-sm">Score entre 0.45 e 0.75</p>
              </div>
              <div className="bg-white p-4 rounded-lg border-l-4 border-red-500">
                <h4 className="font-medium text-red-700 mb-1">Risco Alto</h4>
                <p className="text-sm">Score &lt; 0.45</p>
              </div>
            </div>
          </div>

          <div className="prose max-w-none">
            <p>
              Este modelo matemático foi desenvolvido após análise extensiva de dados históricos de evasão,
              identificando os fatores mais correlacionados com a desistência dos estudantes. Os pesos foram calibrados
              para maximizar a precisão do algoritmo em identificar alunos em risco.
            </p>
            <p>
              O sistema recalcula o risco de evasão sempre que novos dados são inseridos, permitindo um monitoramento
              contínuo e em tempo real do engajamento dos alunos.
            </p>
          </div>
        </section>

        {/* Tecnologias */}
        <section className="mb-12">
          <h2 className="section-title">Tecnologias Utilizadas</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3 font-cinzel">Frontend</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium">Next.js 14</span>
                    <p className="text-sm text-gray-600">
                      Framework React com renderização híbrida para melhor performance e SEO
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium">React 18</span>
                    <p className="text-sm text-gray-600">
                      Biblioteca JavaScript para construção de interfaces de usuário
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium">TailwindCSS</span>
                    <p className="text-sm text-gray-600">
                      Framework CSS utilitário para design responsivo e customizável
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium">TypeScript</span>
                    <p className="text-sm text-gray-600">
                      Superset JavaScript com tipagem estática para código mais seguro
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3 font-cinzel">Backend e Dados</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium">API Routes (Next.js)</span>
                    <p className="text-sm text-gray-600">Endpoints serverless para comunicação com o frontend</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium">Algoritmos de Análise Preditiva</span>
                    <p className="text-sm text-gray-600">Modelos matemáticos para cálculo de risco de evasão</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium">Integração com APIs Educacionais</span>
                    <p className="text-sm text-gray-600">
                      Conexão com sistemas de gestão acadêmica para obtenção de dados
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium">Cache e Otimização</span>
                    <p className="text-sm text-gray-600">
                      Estratégias de cache para melhor performance e experiência do usuário
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Processo de Desenvolvimento */}
        <section className="mb-12">
          <h2 className="section-title">Processo de Desenvolvimento</h2>

          <div className="space-y-8 mt-6">
            <div className="timeline">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3 className="font-semibold text-lg mb-1 font-cinzel">Pesquisa e Análise</h3>
                <p className="text-gray-600 mb-2">
                  Estudo aprofundado sobre fatores de evasão escolar e coleta de requisitos com especialistas em
                  educação.
                </p>
              </div>
            </div>

            <div className="timeline">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3 className="font-semibold text-lg mb-1 font-cinzel">Prototipagem</h3>
                <p className="text-gray-600 mb-2">
                  Desenvolvimento de wireframes e protótipos interativos para validação com usuários finais.
                </p>
              </div>
            </div>

            <div className="timeline">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3 className="font-semibold text-lg mb-1 font-cinzel">Desenvolvimento</h3>
                <p className="text-gray-600 mb-2">
                  Implementação do sistema utilizando metodologias ágeis e práticas de desenvolvimento modernas.
                </p>
              </div>
            </div>

            <div className="timeline">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3 className="font-semibold text-lg mb-1 font-cinzel">Testes e Validação</h3>
                <p className="text-gray-600 mb-2">
                  Testes extensivos com dados reais e ajustes no algoritmo para garantir precisão nas previsões.
                </p>
              </div>
            </div>

            <div className="timeline">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3 className="font-semibold text-lg mb-1 font-cinzel">Implantação e Monitoramento</h3>
                <p className="text-gray-600">
                  Lançamento do sistema e acompanhamento contínuo para melhorias e ajustes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Equipe */}
        <section>
          <h2 className="section-title">Nossa Equipe</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="info-box">
              <h3 className="text-lg font-semibold mb-4 font-cinzel">Equipe de Desenvolvimento</h3>
              <p className="mb-6 text-gray-600">
                O projeto "Não se vá com IA" foi desenvolvido por uma equipe de estudantes dedicados, trabalhando em
                colaboração com a Universidade UNIFENAS para criar uma solução inovadora no combate à evasão escolar.
              </p>

              <div className="space-y-4">
                <div className="flex items-center p-3 bg-white rounded-lg border border-gray-100">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-purple-700 font-semibold text-sm">RC</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Rafael Costa Monte Alegre</h4>
                    <p className="text-sm text-gray-600">Desenvolvedor Full-Stack</p>
                  </div>
                </div>

                <div className="flex items-center p-3 bg-white rounded-lg border border-gray-100">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-purple-700 font-semibold text-sm">LV</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Lucca Valladão e Marchetti</h4>
                    <p className="text-sm text-gray-600">Analista de Dados e IA</p>
                  </div>
                </div>

                <div className="flex items-center p-3 bg-white rounded-lg border border-gray-100">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-purple-700 font-semibold text-sm">CB</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Caio Beraldo</h4>
                    <p className="text-sm text-gray-600">Designer UX/UI e Frontend</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="info-box">
              <h3 className="text-lg font-semibold mb-4 font-cinzel">Parceria Acadêmica</h3>
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">U</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 text-lg">UNIFENAS</h4>
                  <p className="text-gray-600">Universidade José do Rosário Vellano</p>
                </div>
              </div>

              <p className="mb-4 text-gray-600">
                Este projeto foi desenvolvido em parceria com a UNIFENAS, que forneceu o suporte acadêmico, orientação
                técnica e acesso aos dados necessários para o desenvolvimento e validação do sistema.
              </p>

              <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                <h4 className="font-medium text-purple-800 mb-2">Hackathon UNIFENAS 2025</h4>
                <p className="text-sm text-purple-700">
                  Projeto desenvolvido como parte do Hackathon UNIFENAS 2025, focado em soluções tecnológicas para
                  desafios educacionais.
                </p>
              </div>
            </div>
          </div>

          <div className="prose max-w-none">
            <p>
              Nossa equipe multidisciplinar combina conhecimentos em desenvolvimento de software, ciência de dados,
              design de experiência do usuário e pedagogia, sempre com o apoio e orientação da UNIFENAS, para criar uma
              solução eficaz no combate à evasão escolar.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
