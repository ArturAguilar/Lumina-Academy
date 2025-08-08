import React, { useState } from "react";

// Ícones das matérias (usando Boxicons como no materias.jsx)
const bx = (name, color) => <i className={`bx ${name}`} style={{ fontSize: 22, color }}></i>;

const materias = [
  {
    nome: 'Matemática', questoes: 15, tempo: '45 min', ultima: '7.5/10', tentativas: 3, cor: '#2563eb', barra: '#2563eb', ponto: '#f59e42', botao: '#2563eb', botaoTxt: '#fff', novo: false, icone: bx('bx-calculator', '#2563eb')
  },
  {
    nome: 'Português', questoes: 14, tempo: '40 min', ultima: '8.2/10', tentativas: 4, cor: '#a855f7', barra: '#a855f7', ponto: '#f59e42', botao: '#a855f7', botaoTxt: '#fff', novo: false, icone: bx('bx-pencil', '#a855f7')
  },
  {
    nome: 'Inglês', questoes: 12, tempo: '35 min', ultima: '7.0/10', tentativas: 2, cor: '#a855f7', barra: '#a855f7', ponto: '#f43f5e', botao: '#a855f7', botaoTxt: '#fff', novo: false, icone: bx('bx-globe', '#a855f7')
  },
  {
    nome: 'Espanhol', questoes: 10, tempo: '30 min', ultima: '6.5/10', tentativas: 1, cor: '#a855f7', barra: '#a855f7', ponto: '#f59e42', botao: '#a855f7', botaoTxt: '#fff', novo: false, icone: bx('bx-book-open', '#a855f7')
  },
  {
    nome: 'Literatura', questoes: 11, tempo: '40 min', ultima: '9.0/10', tentativas: 3, cor: '#a855f7', barra: '#a855f7', ponto: '#22c55e', botao: '#a855f7', botaoTxt: '#fff', novo: false, icone: bx('bx-book', '#a855f7')
  },
  {
    nome: 'Arte', questoes: 8, tempo: '25 min', ultima: '8.8/10', tentativas: 2, cor: '#a855f7', barra: '#a855f7', ponto: '#22c55e', botao: '#a855f7', botaoTxt: '#fff', novo: false, icone: bx('bx-palette', '#a855f7')
  },
  {
    nome: 'Física', questoes: 12, tempo: '40 min', ultima: '6.8/10', tentativas: 2, cor: '#22c55e', barra: '#22c55e', ponto: '#f43f5e', botao: '#22c55e', botaoTxt: '#fff', novo: false, icone: bx('bx-bolt', '#22c55e')
  },
  {
    nome: 'Química', questoes: 10, tempo: '35 min', ultima: null, tentativas: 0, cor: '#22c55e', barra: '#22c55e', ponto: '#f59e42', botao: '#22c55e', botaoTxt: '#fff', novo: true, icone: bx('bx-medical-flask', '#22c55e')
  },
  {
    nome: 'Biologia', questoes: 13, tempo: '38 min', ultima: '7.2/10', tentativas: 2, cor: '#22c55e', barra: '#22c55e', ponto: '#f59e42', botao: '#22c55e', botaoTxt: '#fff', novo: false, icone: bx('bx-leaf', '#22c55e')
  },
  {
    nome: 'História', questoes: 15, tempo: '50 min', ultima: '8.0/10', tentativas: 3, cor: '#eab308', barra: '#eab308', ponto: '#22c55e', botao: '#eab308', botaoTxt: '#fff', novo: false, icone: bx('bx-landmark', '#eab308')
  },
  {
    nome: 'Filosofia', questoes: 9, tempo: '28 min', ultima: '6.0/10', tentativas: 1, cor: '#eab308', barra: '#eab308', ponto: '#f59e42', botao: '#eab308', botaoTxt: '#fff', novo: false, icone: bx('bx-brain', '#eab308')
  },
  {
    nome: 'Sociologia', questoes: 10, tempo: '30 min', ultima: '7.8/10', tentativas: 2, cor: '#eab308', barra: '#eab308', ponto: '#22c55e', botao: '#eab308', botaoTxt: '#fff', novo: false, icone: bx('bx-group', '#eab308')
  },
  {
    nome: 'Geografia', questoes: 12, tempo: '36 min', ultima: '7.0/10', tentativas: 2, cor: '#eab308', barra: '#eab308', ponto: '#f59e42', botao: '#eab308', botaoTxt: '#fff', novo: false, icone: bx('bx-globe-alt', '#eab308')
  },
];

const vestibulares = [
  {
    sigla: 'IME',
    nome: 'Instituto Militar de Engenharia',
    tempo: '4h30min',
    questoes: 80,
    melhorNota: 6.2,
    tentativas: 2,
    dificuldade: 'Muito Difícil',
    cor: '#ef4444',
    materias: [
      { nome: 'Matemática', qtd: 40 },
      { nome: 'Física', qtd: 25 },
      { nome: 'Química', qtd: 15 },
    ],
  },
  {
    sigla: 'ITA',
    nome: 'Instituto Tecnológico de Aeronáutica',
    tempo: '5h00min',
    questoes: 90,
    melhorNota: 7.1,
    tentativas: 1,
    dificuldade: 'Muito Difícil',
    cor: '#2563eb',
    materias: [
      { nome: 'Matemática', qtd: 30 },
      { nome: 'Física', qtd: 30 },
      { nome: 'Química', qtd: 30 },
    ],
  },
  {
    sigla: 'ENEM',
    nome: 'Exame Nacional do Ensino Médio',
    tempo: '5h30min',
    questoes: 180,
    melhorNota: 8.4,
    tentativas: 3,
    dificuldade: 'Médio',
    cor: '#22c55e',
    materias: [
      { nome: 'Linguagens', qtd: 45 },
      { nome: 'Matemática', qtd: 45 },
      { nome: 'Ciências Humanas', qtd: 45 },
      { nome: 'Ciências da Natureza', qtd: 45 },
    ],
    status: 'Simulado completo',
    dificuldadeCor: '#fbbf24',
  },
  {
    sigla: 'FUVEST',
    nome: 'Fundação Universitária para o Vestibular',
    tempo: '4h00min',
    questoes: 90,
    melhorNota: 7.8,
    tentativas: 4,
    dificuldade: 'Difícil',
    cor: '#a855f7',
    materias: [
      { nome: 'Português', qtd: 15 },
      { nome: 'Matemática', qtd: 15 },
      { nome: 'Outras áreas', qtd: 60 },
    ],
    status: 'Simulado 1ª fase',
    dificuldadeCor: '#ef4444',
  },
];



const Simulados = () => {
  const [aba, setAba] = useState('materia');
  return (
    <div
      style={{
        minHeight: '100vh',
        fontFamily: 'Inter, Arial, sans-serif',
        width: '100%',
      }}
    >
      <style>{`
        @media (max-width: 700px) {
          .simulados-filtros {
            flex-wrap: nowrap !important;
            gap: 0.7rem !important;
            padding-left: 0.7rem !important;
            padding-right: 0.7rem !important;
          }
          .simulados-card, .simulados-card-vest {
            min-width: calc(100vw - 2.4rem) !important;
            max-width: calc(100vw - 2.4rem) !important;
            width: calc(100vw - 2.4rem) !important;
            margin-left: 0 !important;
            margin-right: 0 !important;
          }
          /* Reduzir tamanhos de fonte no mobile */
          .simulados-card .materia-title {
            font-size: 18px !important;
          }
          .simulados-card .materia-subtitle {
            font-size: 13px !important;
          }
          .simulados-card .tentativa-text {
            font-size: 12px !important;
          }
          .simulados-card .tentativas-count {
            font-size: 11px !important;
          }
          .simulados-card .btn-iniciar {
            font-size: 13px !important;
            padding: 0.4rem 1rem !important;
          }
          .simulados-filtros button {
            font-size: 0.95rem !important;
            padding: 0.6rem 1.8rem !important;
          }
          .simulados-card-vest .vest-title {
            font-size: 17px !important;
          }
          .simulados-card-vest .vest-subtitle {
            font-size: 13px !important;
          }
          .simulados-card-vest .vest-stats-number {
            font-size: 24px !important;
          }
          .simulados-card-vest .vest-stats-label {
            font-size: 12px !important;
          }
          .simulados-card-vest .vest-materias {
            font-size: 13px !important;
          }
          .simulados-card-vest .btn-iniciar-vest {
            font-size: 16px !important;
          }
        }
      `}</style>
      {/* Barra de navegação */}
      <div
        className="simulados-filtros"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '2.2rem',
          padding: '1.2rem 2.5rem 1.2rem 2.5rem',
          borderBottom: '1.5px solid #ececec',
          position: 'sticky',
          top: 0,
          zIndex: 10,
          flexWrap: 'wrap',
        }}
      >
        <button
          style={{
            background: aba === 'materia' ? '#2563eb' : 'transparent',
            color: aba === 'materia' ? '#fff' : '#23272F',
            border: 'none',
            borderRadius: '8px',
            padding: '0.7rem 2.2rem',
            fontSize: '1.08rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            boxShadow: aba === 'materia' ? '0 1px 2px rgba(37,99,235,0.10)' : 'none',
            cursor: 'pointer',
            letterSpacing: 0.1,
          }}
          onClick={() => setAba('materia')}
        >
          <i className="bx bx-file" style={{ fontSize: '1.18rem', marginRight: 4 }}></i> <span style={{fontWeight:400}}>Por Matéria</span>
        </button>
        <button
          style={{
            background: aba === 'vestibular' ? '#2563eb' : 'transparent',
            color: aba === 'vestibular' ? '#fff' : '#23272F',
            border: 'none',
            borderRadius: '8px',
            padding: '0.7rem 2.2rem',
            fontSize: '1.08rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            boxShadow: aba === 'vestibular' ? '0 1px 2px rgba(37,99,235,0.10)' : 'none',
            cursor: 'pointer',
            letterSpacing: 0.1,
          }}
          onClick={() => setAba('vestibular')}
        >
          <i className="bx bx-bank" style={{ fontSize: '1.13rem', marginRight: 2 }}></i> Vestibulares
        </button>

      </div>

      {/* Conteúdo das abas */}
      {aba === 'materia' ? (
        <div
          style={{
            display: 'flex',
            gap: '1.2rem',
            padding: '1.2rem 1.5rem',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {materias.map((mat, idx) => (
            <div
              key={mat.nome}
              className="simulados-card"
              style={{
                background: '#fff',
                border: '1.5px solid #e5e7eb',
                borderRadius: '14px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                padding: '1.3rem 1.3rem 1.1rem 1.3rem',
                minWidth: 260,
                maxWidth: 340,
                width: '100%',
                flex: '1 1 320px',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                fontFamily: 'Inter, Arial, sans-serif',
                boxSizing: 'border-box',
              }}
            >
              {/* Ícone, título e ponto alinhados conforme print */}
              <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: 15 }}>
                {/* Ícone quadrado */}
                <span style={{
                  background: mat.nome === 'Matemática' ? '#e0e7ff'
                    : mat.nome === 'Português' || mat.nome === 'Inglês' || mat.nome === 'Espanhol' || mat.nome === 'Literatura' || mat.nome === 'Arte' ? '#f3e8ff'
                    : mat.nome === 'Física' || mat.nome === 'Química' || mat.nome === 'Biologia' ? '#dcfce7'
                    : mat.nome === 'História' || mat.nome === 'Filosofia' || mat.nome === 'Sociologia' || mat.nome === 'Geografia' ? '#fef9c3'
                    : '#f3f4f6',
                  color: mat.cor,
                  borderRadius: 10,
                  width: 38,
                  height: 38,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 22,
                  marginRight: 12,
                  marginTop: 2,
                }}>
                  {mat.icone}
                </span>
                {/* Título e subtítulo */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', flex: 1 }}>
                  <span className="materia-title" style={{ fontWeight: 700, fontSize: 20, color: '#23272F', lineHeight: 1.1 }}>{mat.nome}</span>
                  <span className="materia-subtitle" style={{ color: '#555', fontSize: 15, fontWeight: 500, marginTop: 1 }}>{mat.questoes} questões • {mat.tempo}</span>
                </div>
              </div>
              {/* Última tentativa ou novo */}
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: 4 }}>
                <span className="tentativa-text" style={{ color: '#888', fontSize: 14.5, fontWeight: 500 }}>
                  {mat.novo ? 'Primeira tentativa' : 'Última tentativa:'}
                </span>
                <span style={{ flex: 1 }} />
                {mat.novo ? (
                  <span className="tentativa-text" style={{ color: '#2563eb', fontWeight: 700, fontSize: 14.5 }}>Novo!</span>
                ) : (
                  <span className="tentativa-text" style={{ color: '#222', fontWeight: 700, fontSize: 14.5 }}>{mat.ultima}</span>
                )}
              </div>
              {/* Barra de progresso */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                <div style={{ flex: 1, height: 6, background: '#e5e7eb', borderRadius: 6, overflow: 'hidden' }}>
                  <div style={{
                    width: mat.novo ? '0%' : mat.progresso ? `${mat.progresso}%` : mat.nome === 'Matemática' ? '75%' : mat.nome === 'Física' ? '68%' : '0%',
                    height: '100%',
                    background: mat.barra,
                    borderRadius: 6,
                    transition: 'width 0.4s',
                  }} />
                </div>
              </div>
              {/* Tentativas e botão */}
              <div style={{ display: 'flex', alignItems: 'center', marginTop: 8 }}>
                <span className="tentativas-count" style={{ color: '#888', fontSize: 13.5, fontWeight: 500 }}>{mat.tentativas !== undefined ? `${mat.tentativas} tentativa${mat.tentativas === 1 ? '' : 's'}` : mat.conceitos !== undefined ? `${mat.conceitos} conceitos` : ''}</span>
                <span style={{ flex: 1 }} />
                <button className="btn-iniciar" style={{
                  background: mat.botao,
                  color: mat.botaoTxt,
                  border: 'none',
                  borderRadius: 8,
                  padding: '0.45rem 1.15rem',
                  fontWeight: 700,
                  fontSize: 15.5,
                  cursor: 'pointer',
                  boxShadow: '0 1px 2px rgba(0,0,0,0.07)',
                  transition: 'background 0.2s',
                }}>
                  Iniciar
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '2rem',
            padding: '2rem 1.5rem',
            width: '100%',
            justifyContent: 'center',
            boxSizing: 'border-box',
          }}
        >
          {vestibulares.map((vest) => (
            <div
              key={vest.sigla}
              className="simulados-card-vest"
              style={{
                background: '#fff',
                border: '1.5px solid #e5e7eb',
                borderRadius: '16px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                padding: '1.3rem 1.1rem 1.1rem 1.1rem',
                minWidth: 260,
                maxWidth: 540,
                width: '100%',
                flex: '1 1 340px',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                fontFamily: 'Inter, Arial, sans-serif',
                marginBottom: '2rem',
                boxSizing: 'border-box',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 18 }}>
                <span style={{
                  background: vest.cor,
                  color: '#fff',
                  borderRadius: 12,
                  width: 54,
                  height: 54,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: 13,
                  letterSpacing: '-0.5px',
                  padding: '0 2px',
                  marginRight: 6,
                  marginTop: 2,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}>{vest.sigla}</span>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', flex: 1 }}>
                  <span className="vest-title" style={{ fontWeight: 700, fontSize: 19, color: '#23272F', lineHeight: 1.1 }}>{vest.nome}</span>
                  <span className="vest-subtitle" style={{ color: '#555', fontSize: 15, fontWeight: 500, marginTop: 2 }}>{vest.status ? vest.status : 'Simulado completo'} • {vest.tempo}</span>
                  <span style={{ color: vest.dificuldadeCor || (vest.dificuldade === 'Muito Difícil' ? '#ef4444' : '#fbbf24'), fontSize: 14, fontWeight: 600, marginTop: 2, display: 'flex', alignItems: 'center', gap: 4 }}>
                    <span style={{ fontSize: 13, marginRight: 3, display: 'inline-block', width: 8, height: 8, background: vest.dificuldadeCor || (vest.dificuldade === 'Muito Difícil' ? '#ef4444' : '#fbbf24'), borderRadius: '50%' }}></span>
                    {vest.dificuldade}
                  </span>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 0, marginTop: 22, marginBottom: 10 }}>
                <div style={{ flex: 1, textAlign: 'center' }}>
                  <span className="vest-stats-number" style={{ fontWeight: 700, fontSize: 28, color: '#23272F' }}>{vest.questoes}</span>
                  <div className="vest-stats-label" style={{ color: '#888', fontSize: 14, fontWeight: 500, marginTop: 2 }}>Questões</div>
                </div>
                <div style={{ flex: 1, textAlign: 'center' }}>
                  <span className="vest-stats-number" style={{ fontWeight: 700, fontSize: 28, color: vest.cor }}>{vest.melhorNota.toFixed(1)}</span>
                  <div className="vest-stats-label" style={{ color: vest.cor, fontSize: 14, fontWeight: 500, marginTop: 2 }}>Melhor Nota</div>
                </div>
                <div style={{ flex: 1, textAlign: 'center' }}>
                  <span className="vest-stats-number" style={{ fontWeight: 700, fontSize: 28, color: '#23272F' }}>{vest.tentativas}</span>
                  <div className="vest-stats-label" style={{ color: '#888', fontSize: 14, fontWeight: 500, marginTop: 2 }}>Tentativas</div>
                </div>
              </div>
              <div style={{ marginBottom: 12, marginLeft: 2 }}>
                {vest.materias.map((m) => (
                  <div key={m.nome} className="vest-materias" style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontSize: 15.5,
                    marginBottom: 2,
                  }}>
                    <span style={{ color: '#6b7280', fontWeight: 500 }}>{m.nome}:</span>
                    <span style={{ color: '#23272F', fontWeight: 400 }}>{m.qtd} questões</span>
                  </div>
                ))}
              </div>
              <button className="btn-iniciar-vest" style={{
                background: vest.cor,
                color: '#fff',
                border: 'none',
                borderRadius: 12,
                padding: '0.95rem 0',
                fontWeight: 700,
                fontSize: 18,
                marginTop: 18,
                cursor: 'pointer',
                boxShadow: '0 1px 2px rgba(0,0,0,0.07)',
                transition: 'background 0.2s',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 10,
              }}>
                <i className="bx bx-play" style={{ fontSize: 22, marginRight: 2 }}></i> Iniciar Simulado {vest.sigla}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Simulados;
