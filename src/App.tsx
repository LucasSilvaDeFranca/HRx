import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import AppLayout from './components/AppLayout'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Colaboradores from './pages/Colaboradores'
import ColaboradoresCadastrar from './pages/ColaboradoresCadastrar'
import ColaboradoresVisualizacao from './pages/ColaboradoresVisualizacao'
import Desempenho from './pages/desempenho'
import Metricas from './pages/desempenho/Metricas'
import ConfiguracoesGerais from './pages/desempenho/ConfiguracoesGerais'
import AvaliacaoMetas from './pages/desempenho/AvaliacaoMetas'
import AvaliacaoCompetencias from './pages/desempenho/AvaliacaoCompetencias'
import CriacaoMetas from './pages/desempenho/CriacaoMetas'
import VisualizacaoMetas from './pages/desempenho/VisualizacaoMetas'
import CriacaoCompetencias from './pages/desempenho/CriacaoCompetencias'
import ResultadosMetas from './pages/desempenho/ResultadosMetas'
import PDI from './pages/desempenho/PDI'
import PDIVisualizacao from './pages/desempenho/PDIVisualizacao'
import PDIResultado from './pages/desempenho/PDIResultado'
import VisualizacaoCompetencias from './pages/desempenho/VisualizacaoCompetencias'
import RespostaMetasColaborador from './pages/desempenho/RespostaMetasColaborador'
import PDIConfiguracao from './pages/desempenho/PDIConfiguracao'
import PDIVersoes from './pages/desempenho/PDIVersoes'
import PDIValidacao from './pages/desempenho/PDIValidacao'
import NineBox from './pages/desempenho/NineBox'
import Sucessao from './pages/desempenho/Sucessao'
import Hierarquia from './pages/hierarquia'
import TabelaSalarial from './pages/hierarquia/TabelaSalarial'
import CadastrarNiveis from './pages/hierarquia/CadastrarNiveis'
import CadastrarCargos from './pages/hierarquia/CadastrarCargos'
import CadastrarSteps from './pages/hierarquia/CadastrarSteps'
import Organograma from './pages/organograma'
import Administracao from './pages/administracao'
import DadosEmpresa from './pages/administracao/DadosEmpresa'
import CamposCadastro from './pages/administracao/CamposCadastro'
import NovoUsuario from './pages/administracao/NovoUsuario'
import Pesquisas from './pages/pesquisas'
import PesquisaDetalhe from './pages/pesquisas/PesquisaDetalhe'
import NovaPesquisa from './pages/pesquisas/NovaPesquisa'
import PesquisaConvidados from './pages/pesquisas/PesquisaConvidados'
import PesquisaRespostas from './pages/pesquisas/PesquisaRespostas'
import RespostaIntroducao from './pages/pesquisas/RespostaIntroducao'
import DashboardResultados from './pages/pesquisas/DashboardResultados'
import CentroCustos from './pages/centro-custos'
import CriarMovimentacao from './pages/centro-custos/CriarMovimentacao'
import TabelaCalculo from './pages/centro-custos/TabelaCalculo'
import AprovacaoMovimentacao from './pages/centro-custos/AprovacaoMovimentacao'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route element={<AppLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/colaboradores" element={<Colaboradores />} />
          <Route path="/colaboradores/cadastrar" element={<ColaboradoresCadastrar />} />
          <Route path="/colaboradores/visualizacao" element={<ColaboradoresVisualizacao />} />
          {/* Desempenho */}
          <Route path="/desempenho" element={<Desempenho />} />
          <Route path="/desempenho/metricas" element={<Metricas />} />
          <Route path="/desempenho/configuracoes" element={<ConfiguracoesGerais />} />
          {/* Metas */}
          <Route path="/desempenho/avaliacao-metas" element={<AvaliacaoMetas />} />
          <Route path="/desempenho/avaliacao-metas/criar" element={<CriacaoMetas />} />
          <Route path="/desempenho/avaliacao-metas/visualizar" element={<VisualizacaoMetas />} />
          <Route path="/desempenho/avaliacao-metas/resultados" element={<ResultadosMetas />} />
          {/* Competências */}
          <Route path="/desempenho/avaliacao-competencias" element={<AvaliacaoCompetencias />} />
          <Route path="/desempenho/avaliacao-competencias/criar" element={<CriacaoCompetencias />} />
          <Route path="/desempenho/avaliacao-competencias/visualizar" element={<VisualizacaoCompetencias />} />
          <Route path="/desempenho/avaliacao-metas/resposta" element={<RespostaMetasColaborador />} />
          {/* PDI */}
          <Route path="/desempenho/pdi" element={<PDI />} />
          <Route path="/desempenho/pdi/criar" element={<PDIVisualizacao />} />
          <Route path="/desempenho/pdi/resultado" element={<PDIResultado />} />
          <Route path="/desempenho/pdi/configuracao" element={<PDIConfiguracao />} />
          <Route path="/desempenho/pdi/versoes" element={<PDIVersoes />} />
          <Route path="/desempenho/pdi/validacao" element={<PDIValidacao />} />
          {/* 9Box / Sucessão */}
          <Route path="/desempenho/9box" element={<NineBox />} />
          <Route path="/desempenho/sucessao" element={<Sucessao />} />
          {/* Hierarquia */}
          <Route path="/hierarquia" element={<Hierarquia />} />
          <Route path="/hierarquia/tabela-salarial" element={<TabelaSalarial />} />
          <Route path="/hierarquia/niveis" element={<CadastrarNiveis />} />
          <Route path="/hierarquia/cargos" element={<CadastrarCargos />} />
          <Route path="/hierarquia/steps" element={<CadastrarSteps />} />
          {/* Organograma */}
          <Route path="/organograma" element={<Organograma />} />
          {/* Centro de Custos */}
          <Route path="/centro-custos" element={<CentroCustos />} />
          <Route path="/centro-custos/criar-movimentacao" element={<CriarMovimentacao />} />
          <Route path="/centro-custos/tabela-calculo" element={<TabelaCalculo />} />
          <Route path="/centro-custos/aprovacao" element={<AprovacaoMovimentacao />} />
          {/* Administração */}
          <Route path="/administracao" element={<Administracao />} />
          <Route path="/administracao/dados-empresa" element={<DadosEmpresa />} />
          <Route path="/administracao/campos-cadastro" element={<CamposCadastro />} />
          <Route path="/administracao/usuarios" element={<NovoUsuario />} />
          {/* Pesquisas */}
          <Route path="/pesquisas" element={<Pesquisas />} />
          <Route path="/pesquisas/detalhe" element={<PesquisaDetalhe />} />
          <Route path="/pesquisas/nova" element={<NovaPesquisa />} />
          <Route path="/pesquisas/convidados" element={<PesquisaConvidados />} />
          <Route path="/pesquisas/respostas" element={<PesquisaRespostas />} />
          <Route path="/pesquisas/dashboard" element={<DashboardResultados />} />
        </Route>
        {/* Rotas sem sidebar (resposta do convidado) */}
        <Route path="/pesquisas/responder" element={<RespostaIntroducao />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
