import { ClipboardList, Save, PlusSquare, Trash2, Copy, Upload, ChevronDown, ChevronRight } from 'lucide-react'
import { Button, Input, Breadcrumbs, PageHeader } from '../../components/ui'

/**
 * Nova Pesquisa — Formulário de criação
 * Figma: 7255:1506 (1440x960)
 */

function Toggle({ label, checked }: { label: string; checked?: boolean }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '6px 0' }}>
      <div style={{ width: '44px', height: '24px', borderRadius: '12px', backgroundColor: checked ? '#456DFF' : '#E4E3FF', position: 'relative', cursor: 'pointer' }}>
        <div style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: '#FFF', position: 'absolute', top: '2px', left: checked ? '22px' : '2px', boxShadow: '0px 1px 2px rgba(16,24,40,0.1)' }} />
      </div>
      <span style={{ fontSize: '14px', color: '#363F72', fontFamily: "'DM Sans', sans-serif", lineHeight: '1.4' }}>{label}</span>
    </div>
  )
}

export default function NovaPesquisa() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <PageHeader
        breadcrumbs={<Breadcrumbs items={[{ icon: <ClipboardList size={20} color="#344054" /> }, { label: 'Pesquisas' }, { label: 'Nova pesquisa', active: true }]} />}
        title="Nova pesquisa"
        subtitle="Preencha os campos abaixo para criar uma nova pesquisa. Salve para não perder o processo."
        actions={<div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '6px 16px', backgroundColor: '#456DFF', borderRadius: '8px', cursor: 'pointer' }}><span style={{ fontSize: '14px', fontWeight: 500, color: '#FFF' }}>Em criação</span><ChevronDown size={16} color="#FFF" /></div>}
      />

      <div style={{ backgroundColor: '#FFF', border: '1px solid #E4E3FF', borderRadius: '12px', boxShadow: '0px 1px 2px rgba(16,24,40,0.05)', padding: '24px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
        {/* Título */}
        <div style={{ display: 'flex', gap: '24px' }}>
          <div style={{ width: '200px' }}><p style={{ fontSize: '14px', fontWeight: 700, color: '#456DFF', margin: '0 0 4px' }}>Título da pesquisa</p><p style={{ fontSize: '14px', color: '#667085', margin: 0 }}>[texto de acompanhamento]</p></div>
          <div style={{ flex: 1 }}><Input placeholder="Insira aqui o título" /></div>
        </div>

        {/* Descrição */}
        <div style={{ display: 'flex', gap: '24px' }}>
          <div style={{ width: '200px' }}><p style={{ fontSize: '14px', fontWeight: 700, color: '#456DFF', margin: '0 0 4px' }}>Descrição</p><p style={{ fontSize: '14px', color: '#667085', margin: 0 }}>Digite a descrição ou texto de apoio para o início do questionário.</p></div>
          <div style={{ flex: 1 }}><textarea placeholder="Insira aqui a descrição" style={{ width: '100%', minHeight: '80px', padding: '10px 14px', border: '1px solid #E4E3FF', borderRadius: '8px', boxShadow: '0px 1px 2px rgba(16,24,40,0.05)', fontSize: '16px', fontFamily: "'DM Sans', sans-serif", color: '#282A2F', resize: 'vertical' }} /></div>
        </div>

        {/* Imagem */}
        <div style={{ display: 'flex', gap: '24px' }}>
          <div style={{ width: '200px' }}><p style={{ fontSize: '14px', fontWeight: 700, color: '#456DFF', margin: '0 0 4px' }}>Imagem</p><p style={{ fontSize: '14px', color: '#667085', margin: 0 }}>[texto de acompanhamento]</p></div>
          <div style={{ flex: 1 }}>
            <div style={{ border: '1px solid #EAECF0', borderRadius: '12px', padding: '16px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <Upload size={20} color="#667085" />
              <div style={{ textAlign: 'center' }}><span style={{ fontSize: '14px', color: '#456DFF', fontWeight: 500 }}>Clique ou arraste e solte</span><span style={{ fontSize: '14px', color: '#475467' }}> aqui seu arquivo</span><p style={{ fontSize: '12px', color: '#475467', margin: '4px 0 0' }}>SVG, PNG, JPG or GIF (max. 800x400px)</p></div>
            </div>
          </div>
        </div>

        {/* Variáveis */}
        <div style={{ display: 'flex', gap: '24px' }}>
          <div style={{ width: '200px' }}><p style={{ fontSize: '14px', fontWeight: 700, color: '#456DFF', margin: '0 0 4px' }}>Variáveis</p><p style={{ fontSize: '14px', color: '#667085', margin: 0 }}>Digite em qualquer campo o nome da variável entre colchetes em qualquer lugar do texto.</p></div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'flex', gap: '12px' }}>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px', border: '1px solid #E4E3FF', borderRadius: '8px' }}><span style={{ fontSize: '16px', color: '#667085' }}>Selecionar</span><ChevronDown size={20} color="#667085" /></div>
              </div>
              <div style={{ flex: 1 }}><Input placeholder="Insira um valor" /></div>
              <button style={{ width: '36px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent', border: 'none', cursor: 'pointer' }}><Trash2 size={20} color="#98A2B3" /></button>
            </div>
            <p style={{ fontSize: '14px', color: '#667085' }}>[Nome da variável]</p>
            <Button variant="secondary" size="sm" icon={<PlusSquare size={16} />}>Adicionar Variável</Button>
          </div>
        </div>

        <div style={{ height: '1px', backgroundColor: '#E4E3FF' }} />

        {/* Seção */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', backgroundColor: '#F5F4FF', borderRadius: '8px', borderLeft: '4px solid #456DFF' }}>
          <ChevronRight size={20} color="#456DFF" />
          <div>
            <p style={{ fontSize: '16px', fontWeight: 500, color: '#456DFF', margin: 0 }}>[Insira o nome da seção]</p>
            <p style={{ fontSize: '14px', color: '#667085', margin: '2px 0 0' }}>[Insira uma descrição para a seção (opcional)]</p>
          </div>
        </div>

        {/* Pergunta */}
        <div style={{ border: '1px solid #E4E3FF', borderRadius: '12px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><ChevronRight size={20} color="#363F72" /><span style={{ fontSize: '16px', fontWeight: 500, color: '#363F72' }}>[Insira o título da pergunta]</span></div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <Button variant="secondary" size="sm">Obrigatória</Button>
              <Button variant="secondary" size="sm" icon={<Trash2 size={16} />}>Apagar</Button>
              <Button variant="secondary" size="sm" icon={<Copy size={16} />}>Duplicar</Button>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '24px' }}>
            <div style={{ width: '200px' }}><p style={{ fontSize: '14px', fontWeight: 700, color: '#456DFF', margin: '0 0 4px' }}>Descrição</p><p style={{ fontSize: '14px', color: '#667085', margin: 0 }}>Digite a descrição ou texto de apoio para a pergunta.</p></div>
            <div style={{ flex: 1 }}><textarea placeholder="Insira aqui a descrição" style={{ width: '100%', minHeight: '60px', padding: '10px 14px', border: '1px solid #E4E3FF', borderRadius: '8px', fontSize: '16px', fontFamily: "'DM Sans', sans-serif", color: '#282A2F', resize: 'vertical' }} /></div>
          </div>
          <div style={{ display: 'flex', gap: '24px' }}>
            <div style={{ width: '200px' }}><p style={{ fontSize: '14px', fontWeight: 700, color: '#456DFF', margin: '0 0 4px' }}>Resposta</p><p style={{ fontSize: '14px', color: '#667085', margin: 0 }}>[texto de acompanhamento]</p></div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', gap: '12px' }}>
                <div style={{ flex: 1 }}><Input label="Sub-pergunta (Opcional)" placeholder="Insira aqui a sub-pergunta" /></div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label style={{ fontSize: '14px', fontWeight: 500, color: '#363F72' }}>Tipo de resposta</label>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px', border: '1px solid #E4E3FF', borderRadius: '8px' }}><span style={{ fontSize: '16px', color: '#282A2F' }}>Selecionar</span><ChevronDown size={20} color="#667085" /></div>
              </div>
              <Button variant="secondary" size="sm" icon={<PlusSquare size={16} />}>Adicionar Resposta</Button>
            </div>
          </div>
          <Button variant="secondary" size="sm" icon={<PlusSquare size={16} />} fullWidth>Adicionar Pergunta</Button>
        </div>

        <Button variant="secondary" size="md" icon={<PlusSquare size={20} />} fullWidth>Adicionar Seção</Button>

        <div style={{ height: '1px', backgroundColor: '#E4E3FF' }} />

        {/* Texto final */}
        <div style={{ display: 'flex', gap: '24px' }}>
          <div style={{ width: '200px' }}><p style={{ fontSize: '14px', fontWeight: 700, color: '#456DFF', margin: '0 0 4px' }}>Texto final</p><p style={{ fontSize: '14px', color: '#667085', margin: 0 }}>Digite um texto de apoio e/ou agradecimento para o final do questionário.</p></div>
          <div style={{ flex: 1 }}><Input placeholder="Insira aqui o texto" /></div>
        </div>

        {/* Convites */}
        <div style={{ display: 'flex', gap: '24px' }}>
          <div style={{ width: '200px' }}><p style={{ fontSize: '14px', fontWeight: 700, color: '#456DFF', margin: '0 0 4px' }}>Convites</p><p style={{ fontSize: '14px', color: '#667085', margin: 0 }}>O arquivo CSV ou Excel deverá ter apenas duas colunas.</p></div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <Input label="Inserir arquivo com código e o e-mail dos convidados" placeholder="" />
            <div style={{ border: '1px solid #EAECF0', borderRadius: '12px', padding: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <Upload size={20} color="#667085" />
              <div style={{ textAlign: 'center' }}><span style={{ fontSize: '14px', color: '#456DFF', fontWeight: 500 }}>Clique ou arraste e solte</span><span style={{ fontSize: '14px', color: '#475467' }}> aqui seu arquivo</span><p style={{ fontSize: '12px', color: '#475467', margin: '4px 0 0' }}>CSV (max. XXMB)</p></div>
            </div>
            <Button variant="secondary" size="sm">Adicionar convidados manualmente</Button>
          </div>
        </div>

        {/* Corpo do e-mail */}
        <div style={{ display: 'flex', gap: '24px' }}>
          <div style={{ width: '200px' }}><p style={{ fontSize: '14px', fontWeight: 700, color: '#456DFF', margin: '0 0 4px' }}>Corpo do e-mail</p><p style={{ fontSize: '14px', color: '#667085', margin: 0 }}>Escreva o corpo do e-mail que os convidados a responder a pesquisa receberão.</p></div>
          <div style={{ flex: 1 }}><Input placeholder="Insira aqui o corpo do e-mail" /></div>
        </div>

        {/* Permissões */}
        <div style={{ display: 'flex', gap: '24px' }}>
          <div style={{ width: '200px' }}><p style={{ fontSize: '14px', fontWeight: 700, color: '#456DFF', margin: '0 0 4px' }}>Permissões dos Convidados</p><p style={{ fontSize: '14px', color: '#667085', margin: 0 }}>Ao responder a pesquisa, determine o que os convidados podem fazer.</p></div>
          <div style={{ flex: 1 }}>
            <Toggle label="Entrar e sair do questionário (suas alterações serão sempre salvas)" checked />
            <Toggle label="Navegar entre as seções do questionário (suas alterações serão sempre salvas)" checked />
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
        <Button variant="secondary" size="md">Cancelar</Button>
        <Button variant="primary" size="md" icon={<Save size={20} />}>Salvar</Button>
      </div>
    </div>
  )
}
