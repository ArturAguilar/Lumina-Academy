
import Sidebar from '../../includes/Sidebar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faSquareRootVariable, faShapes, faWaveSquare, faChartLine, faInfinity, faChartColumn, faPiggyBank, faLink, faArrowTrendUp, faTableCellsLarge, faDice, faDivide, faPalette, faMusic, faTheaterMasks, faCamera, faPaintBrush, faFilm, faCheckCircle, faTrophy, faFlask, faTint, faFire,
    faDna, faLeaf, faMicroscope, faHeartbeat, faBacteria, faFish, faTree,
    faPenNib, faProjectDiagram, faBookOpen, faBook, faScroll, faFeatherAlt, faComments, faVolumeUp, faSpellCheck, faCalculator, faGlobe,
    faBrain, faChurch, faLightbulb, faAtom, faBolt, faTemperatureHigh, faGlobeAmericas, faMapMarkedAlt, faLandmark,
    faFlag, faUsers, faCrown, faUserFriends, faChartBar, faBullseye
} from '@fortawesome/free-solid-svg-icons';

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Objeto com dados de todas as matérias
const MATERIAS_DATA = {
    sociologia: {
        titulo: 'Sociologia',
        descricao: 'Explore os principais temas da Sociologia: introdução, cultura, estratificação e movimentos sociais.',
        corPrincipal: '#f59e42',
        progressoGeral: 10,
        badges: [
            { texto: 'Todos os conceitos de sociologia', icone: faGlobe },
            { texto: '50 Conceitos', icone: faCheckCircle },
            { texto: 'Consciência social', icone: faTrophy }
        ],
        cards: [
            {
                nome: 'Introdução à Sociologia',
                descricao: 'Conceitos básicos e principais pensadores.',
                icone: 'intro',
                selo: 'Aprendendo',
                corSelo: '#eab308',
                corSeloBg: '#fffbe6',
                corBarra: '#0ea5e9',
                corIcone: '#0ea5e9',
                progresso: 15
            },
            {
                nome: 'Cultura e Sociedade',
                descricao: 'Estudo da cultura, valores e normas sociais.',
                icone: 'cultura',
                selo: 'Aprendendo',
                corSelo: '#eab308',
                corSeloBg: '#fffbe6',
                corBarra: '#22c55e',
                corIcone: '#22c55e',
                progresso: 10
            },
            {
                nome: 'Estratificação Social',
                descricao: 'Classes sociais, desigualdade e mobilidade.',
                icone: 'estratificacao',
                selo: 'Aprendendo',
                corSelo: '#eab308',
                corSeloBg: '#fffbe6',
                corBarra: '#f59e42',
                corIcone: '#f59e42',
                progresso: 5
            },
            {
                nome: 'Movimentos Sociais',
                descricao: 'Ações coletivas e transformações sociais.',
                icone: 'movimentos',
                selo: 'Aprendendo',
                corSelo: '#eab308',
                corSeloBg: '#fffbe6',
                corBarra: '#a855f7',
                corIcone: '#a855f7',
                progresso: 0
            }
        ]
    },
    quimica: {
        titulo: 'Química',
        descricao: 'Orgânica, inorgânica, físico-química, analítica e bioquímica.',
        corPrincipal: '#22c55e',
        progressoGeral: 30,
        badges: [
            { texto: 'Todos os conceitos de química', icone: faFlask },
            { texto: '100 Conceitos', icone: faCheckCircle },
            { texto: 'Domínio molecular', icone: faTrophy }
        ],
        cards: [
            { nome: 'Química Geral', descricao: 'Fundamentos, ligações, reações', icone: 'quimica_geral', selo: 'Aprendendo', corSelo: '#eab308', corSeloBg: '#fffbe6', corBarra: '#ef4444', corIcone: '#ef4444', progresso: 40 },
            { nome: 'Química Nuclear', descricao: 'Radioatividade, fissão, fusão', icone: 'quimica_nuclear', selo: 'Aprendendo', corSelo: '#eab308', corSeloBg: '#fffbe6', corBarra: '#3b82f6', corIcone: '#3b82f6', progresso: 20 },
            { nome: 'Química Ambiental', descricao: 'Poluição, reciclagem, impactos', icone: 'quimica_ambiental', selo: 'Aprendendo', corSelo: '#eab308', corSeloBg: '#fffbe6', corBarra: '#10b981', corIcone: '#10b981', progresso: 15 },
            { nome: 'Combustíveis', descricao: 'Petróleo, etanol, energias', icone: 'combustiveis', selo: 'Aprendendo', corSelo: '#eab308', corSeloBg: '#fffbe6', corBarra: '#f59e42', corIcone: '#f59e42', progresso: 10 },
            { nome: 'Fisico-Química', descricao: 'Termoquímica, soluções', icone: 'fisicoquimica', selo: 'Aprendendo', corSelo: '#eab308', corSeloBg: '#fffbe6', corBarra: '#a855f7', corIcone: '#a855f7', progresso: 25 },
            { nome: 'Química Orgânica', descricao: 'Compostos do carbono', icone: 'quimica_organica', selo: 'Aprendendo', corSelo: '#eab308', corSeloBg: '#fffbe6', corBarra: '#f43f5e', corIcone: '#f43f5e', progresso: 30 },
            { nome: 'Química Inorgânica', descricao: 'Ácidos, bases, sais e óxidos', icone: 'quimica_inorganica', selo: 'Aprendendo', corSelo: '#eab308', corSeloBg: '#fffbe6', corBarra: '#6366f1', corIcone: '#6366f1', progresso: 20 },
            { nome: 'Elementos Químicos', descricao: 'Tabela periódica, propriedades', icone: 'elementos', selo: 'Aprendendo', corSelo: '#eab308', corSeloBg: '#fffbe6', corBarra: '#22c55e', corIcone: '#22c55e', progresso: 18 },
        ]
    },
    literatura: {
        titulo: 'Literatura',
        descricao: 'Explore teoria, gêneros, movimentos, autores, obras, interpretação e teatro na literatura.',
        corPrincipal: '#a855f7',
        progressoGeral: 60,
        badges: [
            { texto: 'Todos os conceitos de literatura', icone: faBook },
            { texto: '150 Conceitos', icone: faCheckCircle },
            { texto: 'Domínio literário', icone: faTrophy }
        ],
        cards: [
            { nome: 'Teoria Literária', descricao: 'Estudo dos conceitos e fundamentos da literatura', icone: 'theory', selo: 'Aprendendo', corSelo: '#eab308', corSeloBg: '#fffbe6', corBarra: '#a855f7', corIcone: '#a855f7', progresso: 30 },
            { nome: 'Gêneros Literários', descricao: 'Conheça os principais gêneros', icone: 'genres', selo: 'Aprendendo', corSelo: '#eab308', corSeloBg: '#fffbe6', corBarra: '#2563eb', corIcone: '#2563eb', progresso: 20 },
            { nome: 'Movimentos', descricao: 'Movimentos literários e suas características', icone: 'movements', selo: 'Aprendendo', corSelo: '#eab308', corSeloBg: '#fffbe6', corBarra: '#ef4444', corIcone: '#ef4444', progresso: 10 },
            { nome: 'Autores', descricao: 'Principais autores e suas obras', icone: 'authors', selo: 'Aprendendo', corSelo: '#eab308', corSeloBg: '#fffbe6', corBarra: '#10b981', corIcone: '#10b981', progresso: 5 },
            { nome: 'Obras', descricao: 'Análise de obras literárias', icone: 'works', selo: 'Aprendendo', corSelo: '#eab308', corSeloBg: '#fffbe6', corBarra: '#f59e42', corIcone: '#f59e42', progresso: 15 },
            { nome: 'Interpretação', descricao: 'Leitura e interpretação de textos', icone: 'interpretation', selo: 'Aprendendo', corSelo: '#eab308', corSeloBg: '#fffbe6', corBarra: '#f43f5e', corIcone: '#f43f5e', progresso: 18 },
            { nome: 'Teatro', descricao: 'Estudo do teatro e dramaturgia', icone: 'theater', selo: 'Aprendendo', corSelo: '#eab308', corSeloBg: '#fffbe6', corBarra: '#3b82f6', corIcone: '#3b82f6', progresso: 8 },
        ]
    },
    historia: {
        titulo: 'História',
        descricao: 'Explore os principais temas da História do Brasil e Geral.',
        corPrincipal: '#f59e42',
        progressoGeral: 9,
        badges: [
            { texto: 'Todos os conceitos de história', icone: faFlag },
            { texto: '100 Conceitos', icone: faCheckCircle },
            { texto: 'Consciência histórica', icone: faTrophy }
        ],
        cards: [
            { nome: 'História do Brasil', descricao: 'Colonização, Império, República e movimentos sociais do Brasil.', icone: 'historia_brasil', selo: 'Aprendendo', corSelo: '#eab308', corSeloBg: '#fffbe6', corBarra: '#f59e42', corIcone: '#f59e42', progresso: 15 },
            { nome: 'História Geral', descricao: 'Principais eventos e processos históricos mundiais.', icone: 'historia_geral', selo: 'Aprendendo', corSelo: '#eab308', corSeloBg: '#fffbe6', corBarra: '#0ea5e9', corIcone: '#0ea5e9', progresso: 10 },
            { nome: 'Mitologia', descricao: 'Mitologias grega, romana, nórdica, egípcia e outras.', icone: 'mitologia', selo: 'Não Aprendeu Ainda', corSelo: '#ef4444', corSeloBg: '#fffbe6', corBarra: '#a855f7', corIcone: '#a855f7', progresso: 5 },
            { nome: 'História da África', descricao: 'Reinos, culturas e processos históricos africanos.', icone: 'africa', selo: 'Não Aprendeu Ainda', corSelo: '#ef4444', corSeloBg: '#fffbe6', corBarra: '#22c55e', corIcone: '#22c55e', progresso: 0 },
            { nome: 'História Medieval', descricao: 'Europa feudal, cruzadas, impérios e cultura medieval.', icone: 'medieval_hist', selo: 'Não Aprendeu Ainda', corSelo: '#ef4444', corSeloBg: '#fffbe6', corBarra: '#f59e42', corIcone: '#f59e42', progresso: 0 },
            { nome: 'História da América', descricao: 'Colonização, independências e sociedades americanas.', icone: 'america', selo: 'Não Aprendeu Ainda', corSelo: '#ef4444', corSeloBg: '#fffbe6', corBarra: '#0ea5e9', corIcone: '#0ea5e9', progresso: 0 },
            { nome: 'História Antiga', descricao: 'Egito, Mesopotâmia, Grécia, Roma e civilizações antigas.', icone: 'antiga_hist', selo: 'Não Aprendeu Ainda', corSelo: '#ef4444', corSeloBg: '#fffbe6', corBarra: '#a855f7', corIcone: '#a855f7', progresso: 0 },
            { nome: 'História Contemporânea', descricao: 'Séculos XIX, XX e XXI: guerras, revoluções e globalização.', icone: 'contemporanea_hist', selo: 'Não Aprendeu Ainda', corSelo: '#ef4444', corSeloBg: '#fffbe6', corBarra: '#22c55e', corIcone: '#22c55e', progresso: 0 },
            { nome: 'História Moderna', descricao: 'Renascimento, reformas, absolutismo e revoluções modernas.', icone: 'moderna_hist', selo: 'Não Aprendeu Ainda', corSelo: '#ef4444', corSeloBg: '#fffbe6', corBarra: '#f59e42', corIcone: '#f59e42', progresso: 0 },
            { nome: 'Pré-História', descricao: 'Paleolítico, Neolítico e sociedades pré-históricas.', icone: 'prehistoria', selo: 'Não Aprendeu Ainda', corSelo: '#ef4444', corSeloBg: '#fffbe6', corBarra: '#a855f7', corIcone: '#a855f7', progresso: 0 }
        ]
    },
    geografia: {
        titulo: 'Geografia',
        descricao: 'Explore os principais temas de Geografia: física, humana, geopolítica e Brasil.',
        corPrincipal: '#f59e42',
        progressoGeral: 20,
        badges: [
            { texto: 'Todos os conceitos de geografia', icone: faGlobeAmericas },
            { texto: '80 Conceitos', icone: faCheckCircle },
            { texto: 'Fluência geográfica', icone: faTrophy }
        ],
        cards: [
            { nome: 'Geografia do Brasil', descricao: 'Regiões, estados, clima, vegetação e hidrografia do Brasil.', icone: 'geografia_brasil', selo: 'Aprendendo', corSelo: '#eab308', corSeloBg: '#fffbe6', corBarra: '#22c55e', corIcone: '#22c55e', progresso: 15 },
            { nome: 'Geologia', descricao: 'Formação do relevo, placas tectônicas, solos e minerais.', icone: 'geologia', selo: 'Não Aprendeu Ainda', corSelo: '#ef4444', corSeloBg: '#fffbe6', corBarra: '#f59e42', corIcone: '#f59e42', progresso: 10 },
            { nome: 'Geopolítica em Países', descricao: 'Relações internacionais, blocos econômicos e conflitos globais.', icone: 'geopolitica', selo: 'Aprendendo', corSelo: '#eab308', corSeloBg: '#fffbe6', corBarra: '#0ea5e9', corIcone: '#0ea5e9', progresso: 5 },
            { nome: 'Geral', descricao: 'Temas gerais de geografia física e humana.', icone: 'geral_geo', selo: 'Não Aprendeu Ainda', corSelo: '#ef4444', corSeloBg: '#fffbe6', corBarra: '#a855f7', corIcone: '#a855f7', progresso: 0 }
        ]
    },
    fisica: {
        titulo: 'Física',
        descricao: 'Mecânica, óptica, termologia e ondulatória.',
        corPrincipal: '#22c55e',
        progressoGeral: 25,
        badges: [
            { texto: 'Todos os conceitos de física', icone: faBolt },
            { texto: '80 Conceitos', icone: faCheckCircle },
            { texto: 'Domínio científico', icone: faTrophy }
        ],
        cards: [
            { nome: 'Mecânica', descricao: 'Movimento, força e energia', icone: 'mecanica', selo: 'Aprendendo', corSelo: '#eab308', corSeloBg: '#fffbe6', corBarra: '#ef4444', corIcone: '#ef4444', progresso: 40 },
            { nome: 'Óptica', descricao: 'Luz, lentes e espelhos', icone: 'optica', selo: 'Aprendendo', corSelo: '#eab308', corSeloBg: '#fffbe6', corBarra: '#3b82f6', corIcone: '#3b82f6', progresso: 30 },
            { nome: 'Termologia', descricao: 'Calor e temperatura', icone: 'termologia', selo: 'Aprendendo', corSelo: '#eab308', corSeloBg: '#fffbe6', corBarra: '#f59e42', corIcone: '#f59e42', progresso: 20 },
            { nome: 'Ondulatória', descricao: 'Ondas e vibrações', icone: 'ondulatoria', selo: 'Aprendendo', corSelo: '#eab308', corSeloBg: '#fffbe6', corBarra: '#a855f7', corIcone: '#a855f7', progresso: 10 },
            { nome: 'Eletricidade', descricao: 'Cargas, circuitos e corrente', icone: 'eletricidade', selo: 'Aprendendo', corSelo: '#eab308', corSeloBg: '#fffbe6', corBarra: '#10b981', corIcone: '#10b981', progresso: 15 }
        ]
    },
    filosofia: {
        titulo: 'Filosofia',
        descricao: 'Estude as principais eras da filosofia: Antiga, Medieval, Moderna e Contemporânea.',
        corPrincipal: '#f59e42',
        progressoGeral: 15,
        badges: [
            { texto: 'Todos os conceitos de filosofia', icone: faBrain },
            { texto: '60 Conceitos', icone: faCheckCircle },
            { texto: 'Pensamento crítico', icone: faTrophy }
        ],
        cards: [
            { nome: 'Filosofia Antiga', descricao: 'Pré-socráticos, Sócrates, Platão e Aristóteles.', icone: 'antiga_filo', selo: 'Aprendendo', corSelo: '#eab308', corSeloBg: '#fffbe6', corBarra: '#a855f7', corIcone: '#a855f7', progresso: 20 },
            { nome: 'Filosofia Medieval', descricao: 'Pensamento cristão e escolástica.', icone: 'medieval_filo', selo: 'Não Aprendeu Ainda', corSelo: '#ef4444', corSeloBg: '#fffbe6', corBarra: '#f59e42', corIcone: '#f59e42', progresso: 10 },
            { nome: 'Filosofia Moderna', descricao: 'Racionalismo, empirismo e iluminismo.', icone: 'moderna_filo', selo: 'Aprendendo', corSelo: '#eab308', corSeloBg: '#fffbe6', corBarra: '#22c55e', corIcone: '#22c55e', progresso: 5 },
            { nome: 'Filosofia Contemporânea', descricao: 'Correntes filosóficas dos séculos XIX e XX.', icone: 'contemporanea_filo', selo: 'Não Aprendeu Ainda', corSelo: '#ef4444', corSeloBg: '#fffbe6', corBarra: '#0ea5e9', corIcone: '#0ea5e9', progresso: 0 }
        ]
    },
    espanhol: {
        titulo: 'Espanhol',
        descricao: 'Aprenda espanhol com foco em leitura, escrita, audição, fala, gramática, vocabulário e cultura.',
        corPrincipal: '#a855f7',
        progressoGeral: 35,
        badges: [
            { texto: 'Todos os conceitos de espanhol', icone: faGlobe },
            { texto: '120 Conceitos', icone: faCheckCircle },
            { texto: 'Fluência hispânica', icone: faTrophy }
        ],
        cards: [
            { nome: 'Leitura', descricao: 'Compreensão de textos em espanhol', icone: 'reading', selo: 'Aprendendo', corSelo: '#eab308', corSeloBg: '#fffbe6', corBarra: '#f59e42', corIcone: '#f59e42', progresso: 25 },
            { nome: 'Escrita', descricao: 'Produção de textos em espanhol', icone: 'writing', selo: 'Aprendendo', corSelo: '#eab308', corSeloBg: '#fffbe6', corBarra: '#ef4444', corIcone: '#ef4444', progresso: 15 },
            { nome: 'Audição', descricao: 'Compreensão auditiva', icone: 'listening', selo: 'Aprendendo', corSelo: '#eab308', corSeloBg: '#fffbe6', corBarra: '#2563eb', corIcone: '#2563eb', progresso: 10 },
            { nome: 'Conversação', descricao: 'Fala e conversação', icone: 'speaking', selo: 'Aprendendo', corSelo: '#eab308', corSeloBg: '#fffbe6', corBarra: '#10b981', corIcone: '#10b981', progresso: 5 },
            { nome: 'Gramática', descricao: 'Gramática espanhola', icone: 'grammar', selo: 'Aprendendo', corSelo: '#eab308', corSeloBg: '#fffbe6', corBarra: '#a855f7', corIcone: '#a855f7', progresso: 12 },
            { nome: 'Vocabulário', descricao: 'Vocabulário essencial', icone: 'vocabulary', selo: 'Aprendendo', corSelo: '#eab308', corSeloBg: '#fffbe6', corBarra: '#f43f5e', corIcone: '#f43f5e', progresso: 18 },
            { nome: 'Cultura', descricao: 'Cultura hispânica', icone: 'culture', selo: 'Aprendendo', corSelo: '#eab308', corSeloBg: '#fffbe6', corBarra: '#3b82f6', corIcone: '#3b82f6', progresso: 8 }
        ]
    },
    ingles: {
        titulo: 'Inglês',
        descricao: 'Desenvolva as quatro habilidades do inglês: leitura, escrita, compreensão auditiva e fala, além de gramática, vocabulário e cultura.',
        corPrincipal: '#a855f7',
        progressoGeral: 65,
        badges: [
            { texto: 'Todos os conceitos de inglês', icone: faGlobe },
            { texto: '198 Conceitos', icone: faCheckCircle },
            { texto: 'Fluência internacional', icone: faTrophy }
        ],
        cards: [
            { nome: 'Reading', descricao: 'Compreensão de textos', icone: 'reading', selo: 'Aprendendo', corSelo: '#eab308', corSeloBg: '#fffbe6', corBarra: '#2563eb', corIcone: '#2563eb', progresso: 40 },
            { nome: 'Writing', descricao: 'Produção de textos', icone: 'writing', selo: 'Aprendendo', corSelo: '#eab308', corSeloBg: '#fffbe6', corBarra: '#ef4444', corIcone: '#ef4444', progresso: 30 },
            { nome: 'Listening', descricao: 'Compreensão auditiva', icone: 'listening', selo: 'Aprendendo', corSelo: '#eab308', corSeloBg: '#fffbe6', corBarra: '#f59e42', corIcone: '#f59e42', progresso: 20 },
            { nome: 'Speaking', descricao: 'Conversação', icone: 'speaking', selo: 'Aprendendo', corSelo: '#eab308', corSeloBg: '#fffbe6', corBarra: '#10b981', corIcone: '#10b981', progresso: 10 },
            { nome: 'Grammar', descricao: 'Gramática', icone: 'grammar', selo: 'Aprendendo', corSelo: '#eab308', corSeloBg: '#fffbe6', corBarra: '#a855f7', corIcone: '#a855f7', progresso: 15 },
            { nome: 'Vocabulary', descricao: 'Vocabulário', icone: 'vocabulary', selo: 'Aprendendo', corSelo: '#eab308', corSeloBg: '#fffbe6', corBarra: '#f43f5e', corIcone: '#f43f5e', progresso: 25 },
            { nome: 'Culture', descricao: 'Cultura e usos', icone: 'culture', selo: 'Aprendendo', corSelo: '#eab308', corSeloBg: '#fffbe6', corBarra: '#3b82f6', corIcone: '#3b82f6', progresso: 5 }
        ]
    },
    biologia: {
        titulo: 'Biologia',
        descricao: 'Genética, ecologia, citologia, fisiologia, microbiologia, zoologia e botânica.',
        corPrincipal: '#22c55e',
        progressoGeral: 28,
        badges: [
            { texto: 'Todos os conceitos de biologia', icone: faLeaf },
            { texto: '90 Conceitos', icone: faCheckCircle },
            { texto: 'Domínio da vida', icone: faTrophy }
        ],
        cards: [
            { nome: 'Anatomia e Fisiologia Humana', descricao: 'Estruturas e funções do corpo', icone: 'fisiologia', selo: 'Aprendendo', corSelo: '#eab308', corSeloBg: '#fffbe6', corBarra: '#ef4444', corIcone: '#ef4444', progresso: 35 },
            { nome: 'Zoologia', descricao: 'Estudo dos animais', icone: 'zoologia', selo: 'Aprendendo', corSelo: '#eab308', corSeloBg: '#fffbe6', corBarra: '#3b82f6', corIcone: '#3b82f6', progresso: 20 },
            { nome: 'Ecologia', descricao: 'Relações ecológicas e meio ambiente', icone: 'ecologia', selo: 'Aprendendo', corSelo: '#eab308', corSeloBg: '#fffbe6', corBarra: '#10b981', corIcone: '#10b981', progresso: 18 },
            { nome: 'Botânica', descricao: 'Estudo das plantas', icone: 'botanica', selo: 'Aprendendo', corSelo: '#eab308', corSeloBg: '#fffbe6', corBarra: '#f59e42', corIcone: '#f59e42', progresso: 15 },
            { nome: 'Genética', descricao: 'Genes, DNA e hereditariedade', icone: 'genetica', selo: 'Aprendendo', corSelo: '#eab308', corSeloBg: '#fffbe6', corBarra: '#a855f7', corIcone: '#a855f7', progresso: 22 },
            { nome: 'Doenças', descricao: 'Patologias, prevenção e saúde', icone: 'doencas', selo: 'Aprendendo', corSelo: '#eab308', corSeloBg: '#fffbe6', corBarra: '#f43f5e', corIcone: '#f43f5e', progresso: 10 },
            { nome: 'Evolução', descricao: 'Teorias e mecanismos evolutivos', icone: 'evolucao', selo: 'Aprendendo', corSelo: '#eab308', corSeloBg: '#fffbe6', corBarra: '#6366f1', corIcone: '#6366f1', progresso: 12 },
            { nome: 'Citologia e Embriologia', descricao: 'Células, tecidos e desenvolvimento', icone: 'citologia', selo: 'Aprendendo', corSelo: '#eab308', corSeloBg: '#fffbe6', corBarra: '#22c55e', corIcone: '#22c55e', progresso: 15 },
            { nome: 'Bioquímica', descricao: 'Compostos e reações biológicas', icone: 'bioquimica', selo: 'Aprendendo', corSelo: '#eab308', corSeloBg: '#fffbe6', corBarra: '#0ea5e9', corIcone: '#0ea5e9', progresso: 18 },
            { nome: 'Meio Ambiente', descricao: 'Sustentabilidade e impactos', icone: 'meioambiente', selo: 'Aprendendo', corSelo: '#eab308', corSeloBg: '#fffbe6', corBarra: '#fbbf24', corIcone: '#fbbf24', progresso: 10 },
            { nome: 'Seres Vivos', descricao: 'Diversidade e classificação', icone: 'seresvivos', selo: 'Aprendendo', corSelo: '#eab308', corSeloBg: '#fffbe6', corBarra: '#f472b6', corIcone: '#f472b6', progresso: 8 },
            { nome: 'Microbiologia', descricao: 'Vírus, bactérias e fungos', icone: 'microbiologia', selo: 'Aprendendo', corSelo: '#eab308', corSeloBg: '#fffbe6', corBarra: '#10b981', corIcone: '#10b981', progresso: 12 },
        ]
    },
    matematica: {
        titulo: 'Matemática',
        descricao: 'Desenvolva o raciocínio lógico através de álgebra, geometria, funções e cálculo',
        corPrincipal: '#ef4444',
        progressoGeral: 65,
        badges: [
            { texto: 'Todos os conceitos matemáticos', icone: faCalculator },
            { texto: '342 Conceitos', icone: faCheckCircle },
            { texto: 'Solucionador', icone: faTrophy }
        ],
        cards: [
            { nome: 'Álgebra', descricao: 'Equações, inequações, sistemas', icone: 'algebra', selo: 'Dominado', corSelo: '#22c55e', corSeloBg: '#e6faea', corBarra: '#ef4444', corIcone: '#ef4444', progresso: 87 },
            { nome: 'Geometria', descricao: 'Plana, espacial, áreas, volumes', icone: 'geometria', selo: 'Aprendendo', corSelo: '#eab308', corSeloBg: '#fffbe6', corBarra: '#3b82f6', corIcone: '#3b82f6', progresso: 72 },
            { nome: 'Trigonometria', descricao: 'Seno, cosseno, tangente, identidades', icone: 'trigonometria', selo: 'Aprendendo', corSelo: '#eab308', corSeloBg: '#fffbe6', corBarra: '#22c55e', corIcone: '#22c55e', progresso: 58 },
            { nome: 'Funções', descricao: 'Lineares, quadráticas, exponenciais', icone: 'funcoes', selo: 'Aprendendo', corSelo: '#eab308', corSeloBg: '#fffbe6', corBarra: '#a855f7', corIcone: '#a855f7', progresso: 64 },
            { nome: 'Cálculo', descricao: 'Derivadas, integrais, limites', icone: 'calculo', selo: 'Aprendendo', corSelo: '#eab308', corSeloBg: '#fffbe6', corBarra: '#f59e42', corIcone: '#f59e42', progresso: 41 },
            { nome: 'Estatística', descricao: 'Médias, desvios, probabilidades', icone: 'estatistica', selo: 'Aprendendo', corSelo: '#eab308', corSeloBg: '#fffbe6', corBarra: '#0ea5e9', corIcone: '#0ea5e9', progresso: 29 },
            { nome: 'Matemática Financeira', descricao: 'Juros, descontos, investimentos', icone: 'financeiro', selo: 'Aprendendo', corSelo: '#eab308', corSeloBg: '#fffbe6', corBarra: '#fbbf24', corIcone: '#fbbf24', progresso: 15 },
            { nome: 'Conjuntos', descricao: 'Operações, diagramas, relações', icone: 'conjuntos', selo: 'Aprendendo', corSelo: '#eab308', corSeloBg: '#fffbe6', corBarra: '#6366f1', corIcone: '#6366f1', progresso: 20 },
            { nome: 'Progressões', descricao: 'Aritméticas, geométricas', icone: 'progressoes', selo: 'Aprendendo', corSelo: '#eab308', corSeloBg: '#fffbe6', corBarra: '#f43f5e', corIcone: '#f43f5e', progresso: 25 },
            { nome: 'Matrizes', descricao: 'Operações, determinantes', icone: 'matrizes', selo: 'Aprendendo', corSelo: '#eab308', corSeloBg: '#fffbe6', corBarra: '#10b981', corIcone: '#10b981', progresso: 30 },
            { nome: 'Análise Combinatória e Probabilidade', descricao: 'Permutações, combinações, eventos', icone: 'probabilidade', selo: 'Aprendendo', corSelo: '#eab308', corSeloBg: '#fffbe6', corBarra: '#f472b6', corIcone: '#f472b6', progresso: 35 },
            { nome: 'Aritmética', descricao: 'Operações básicas, divisibilidade', icone: 'aritmetica', selo: 'Aprendendo', corSelo: '#eab308', corSeloBg: '#fffbe6', corBarra: '#f97316', corIcone: '#f97316', progresso: 40 }
        ]
    },
    artes: {
        titulo: 'Artes',
        descricao: 'Descubra artes visuais, música, teatro, fotografia, pintura, cinema e design.',
        corPrincipal: '#a855f7',
        progressoGeral: 30,
        badges: [
            { texto: 'Todos os conceitos de artes', icone: faPalette },
            { texto: '90 Conceitos', icone: faCheckCircle },
            { texto: 'Expressão criativa', icone: faTrophy }
        ],
        cards: [
            { nome: 'Artes Visuais', descricao: 'Pintura, escultura, desenho e mais', icone: 'visuais', selo: 'Aprendendo', corSelo: '#eab308', corSeloBg: '#fffbe6', corBarra: '#a855f7', corIcone: '#a855f7', progresso: 20 },
            { nome: 'Música', descricao: 'Teoria musical, instrumentos e história', icone: 'musica', selo: 'Aprendendo', corSelo: '#eab308', corSeloBg: '#fffbe6', corBarra: '#2563eb', corIcone: '#2563eb', progresso: 15 },
            { nome: 'Teatro', descricao: 'Dramaturgia, atuação e expressão', icone: 'teatro', selo: 'Aprendendo', corSelo: '#eab308', corSeloBg: '#fffbe6', corBarra: '#ef4444', corIcone: '#ef4444', progresso: 10 },
            { nome: 'Fotografia', descricao: 'Técnicas e história da fotografia', icone: 'foto', selo: 'Aprendendo', corSelo: '#eab308', corSeloBg: '#fffbe6', corBarra: '#10b981', corIcone: '#10b981', progresso: 5 },
            { nome: 'Pintura', descricao: 'Estilos, técnicas e artistas', icone: 'pintura', selo: 'Aprendendo', corSelo: '#eab308', corSeloBg: '#fffbe6', corBarra: '#f59e42', corIcone: '#f59e42', progresso: 12 },
            { nome: 'Cinema', descricao: 'História e linguagem do cinema', icone: 'cinema', selo: 'Aprendendo', corSelo: '#eab308', corSeloBg: '#fffbe6', corBarra: '#f43f5e', corIcone: '#f43f5e', progresso: 18 },
            { nome: 'Design', descricao: 'Fundamentos do design e criatividade', icone: 'design', selo: 'Aprendendo', corSelo: '#eab308', corSeloBg: '#fffbe6', corBarra: '#3b82f6', corIcone: '#3b82f6', progresso: 8 }
        ]
    },
    portugues: {
        titulo: 'Português',
        descricao: 'Gramática, interpretação, produção textual, literatura e análise linguística.',
        corPrincipal: '#a855f7',
        progressoGeral: 40,
        badges: [
            { texto: 'Todos os conceitos de português', icone: faPenNib },
            { texto: '120 Conceitos', icone: faCheckCircle },
            { texto: 'Mestre da comunicação', icone: faTrophy }
        ],
        cards: [
            { nome: 'Gramática', descricao: 'Regras, classes de palavras e sintaxe', icone: 'sintaxe', selo: 'Aprendendo', corSelo: '#eab308', corSeloBg: '#fffbe6', corBarra: '#2563eb', corIcone: '#2563eb', progresso: 30 },
            { nome: 'Morfologia', descricao: 'Estrutura e formação das palavras', icone: 'morfologia', selo: 'Aprendendo', corSelo: '#eab308', corSeloBg: '#fffbe6', corBarra: '#a855f7', corIcone: '#a855f7', progresso: 20 },
            { nome: 'Produção de Texto', descricao: 'Redação, coesão e coerência', icone: 'producao', selo: 'Aprendendo', corSelo: '#eab308', corSeloBg: '#fffbe6', corBarra: '#22c55e', corIcone: '#22c55e', progresso: 25 },
            { nome: 'Interpretação de Texto', descricao: 'Compreensão e análise textual', icone: 'pragmatica', selo: 'Aprendendo', corSelo: '#eab308', corSeloBg: '#fffbe6', corBarra: '#f59e42', corIcone: '#f59e42', progresso: 35 },
            { nome: 'Fonologia', descricao: 'Sons da fala, fonemas e ortografia', icone: 'fonologia', selo: 'Aprendendo', corSelo: '#eab308', corSeloBg: '#fffbe6', corBarra: '#f43f5e', corIcone: '#f43f5e', progresso: 15 },
            { nome: 'Ortografia', descricao: 'Regras ortográficas e acentuação', icone: 'ortografia', selo: 'Aprendendo', corSelo: '#eab308', corSeloBg: '#fffbe6', corBarra: '#10b981', corIcone: '#10b981', progresso: 18 },
            { nome: 'Estilística', descricao: 'Figuras de linguagem e estilo', icone: 'estilistica', selo: 'Aprendendo', corSelo: '#eab308', corSeloBg: '#fffbe6', corBarra: '#f472b6', corIcone: '#f472b6', progresso: 10 }
        ]
    },

};


// Função universal para ícones de cards de qualquer matéria
function renderIcon(tipo, cor) {
    const iconMap = {
        // Sociologia
        intro: { icon: faGlobe, title: 'Introdução à Sociologia' },
        cultura: { icon: faUserFriends, title: 'Cultura e Sociedade' },
        estratificacao: { icon: faChartBar, title: 'Estratificação Social' },
        movimentos: { icon: faBullseye, title: 'Movimentos Sociais' },
        // Literatura
        theory: { icon: faLightbulb, title: 'Teoria Literária' },
        genres: { icon: faBook, title: 'Gêneros Literários' },
        movements: { icon: faScroll, title: 'Movimentos' },
        authors: { icon: faFeatherAlt, title: 'Autores' },
        works: { icon: faBook, title: 'Obras' },
        interpretation: { icon: faBookOpen, title: 'Interpretação' },
        theater: { icon: faTheaterMasks, title: 'Teatro' },
        // História
        historia_brasil: { icon: faFlag, title: 'História do Brasil' },
        historia_geral: { icon: faGlobe, title: 'História Geral' },
        mitologia: { icon: faLandmark, title: 'Mitologia' },
        africa: { icon: faUsers, title: 'História da África' },
        medieval_hist: { icon: faCrown, title: 'História Medieval' },
        america: { icon: faFlag, title: 'História da América' },
        antiga_hist: { icon: faLandmark, title: 'História Antiga' },
        contemporanea_hist: { icon: faGlobe, title: 'História Contemporânea' },
        moderna_hist: { icon: faCrown, title: 'História Moderna' },
        prehistoria: { icon: faLandmark, title: 'Pré-História' },
        // Geografia
        geografia_brasil: { icon: faGlobeAmericas, title: 'Geografia do Brasil' },
        geologia: { icon: faMapMarkedAlt, title: 'Geologia' },
        geopolitica: { icon: faLandmark, title: 'Geopolítica em Países' },
        geral_geo: { icon: faGlobe, title: 'Geral' },
        // Física
        mecanica: { icon: faBolt, title: 'Mecânica' },
        optica: { icon: faAtom, title: 'Óptica' },
        termologia: { icon: faTemperatureHigh, title: 'Termologia' },
        ondulatoria: { icon: faWaveSquare, title: 'Ondulatória' },
        eletricidade: { icon: faBolt, title: 'Eletricidade' },
        // Filosofia
        antiga_filo: { icon: faBrain, title: 'Filosofia Antiga' },
        medieval_filo: { icon: faChurch, title: 'Filosofia Medieval' },
        moderna_filo: { icon: faLightbulb, title: 'Filosofia Moderna' },
        contemporanea_filo: { icon: faAtom, title: 'Filosofia Contemporânea' },
        // Inglês/Espanhol
        reading: { icon: faBookOpen, title: 'Reading/Leitura' },
        writing: { icon: faPenNib, title: 'Writing/Escrita' },
        listening: { icon: faVolumeUp, title: 'Listening/Audição' },
        speaking: { icon: faComments, title: 'Speaking/Conversação' },
        grammar: { icon: faBookOpen, title: 'Grammar/Gramática' },
        vocabulary: { icon: faSpellCheck, title: 'Vocabulary/Vocabulário' },
        culture: { icon: faGlobe, title: 'Culture/Cultura' },
        // Português
        producao: { icon: faPenNib, title: 'Produção de Textos' },
        sintaxe: { icon: faProjectDiagram, title: 'Sintaxe' },
        morfologia: { icon: faPenNib, title: 'Morfologia' },
        pragmatica: { icon: faComments, title: 'Pragmática' },
        fonologia: { icon: faVolumeUp, title: 'Fonologia' },
        ortografia: { icon: faSpellCheck, title: 'Ortografia' },
        estilistica: { icon: faPalette, title: 'Estilística' },
        // Biologia
        fisiologia: { icon: faHeartbeat, title: 'Anatomia e Fisiologia Humana' },
        zoologia: { icon: faFish, title: 'Zoologia' },
        ecologia: { icon: faLeaf, title: 'Ecologia' },
        botanica: { icon: faTree, title: 'Botânica' },
        genetica: { icon: faDna, title: 'Genética' },
        doencas: { icon: faHeartbeat, title: 'Doenças' },
        evolucao: { icon: faDna, title: 'Evolução' },
        citologia: { icon: faMicroscope, title: 'Citologia e Embriologia' },
        bioquimica: { icon: faBacteria, title: 'Bioquímica' },
        meioambiente: { icon: faLeaf, title: 'Meio Ambiente' },
        seresvivos: { icon: faTree, title: 'Seres Vivos' },
        microbiologia: { icon: faBacteria, title: 'Microbiologia' },
        biologia: { icon: faLeaf, title: 'Biologia' },
        // Matemática
        algebra: { icon: faSquareRootVariable, title: 'Álgebra' },
        matematica: { icon: faCalculator, title: 'Matemática' },
        geometria: { icon: faShapes, title: 'Geometria' },
        trigonometria: { icon: faWaveSquare, title: 'Trigonometria' },
        funcoes: { icon: faChartLine, title: 'Funções' },
        calculo: { icon: faInfinity, title: 'Cálculo' },
        estatistica: { icon: faChartColumn, title: 'Estatística' },
        financeiro: { icon: faPiggyBank, title: 'Matemática Financeira' },
        conjuntos: { icon: faLink, title: 'Conjuntos' },
        progressoes: { icon: faArrowTrendUp, title: 'Progressões' },
        matrizes: { icon: faTableCellsLarge, title: 'Matrizes' },
        probabilidade: { icon: faDice, title: 'Probabilidade' },
        aritmetica: { icon: faDivide, title: 'Aritmética' },
        // Artes
        visuais: { icon: faPalette, title: 'Artes Visuais' },
        musica: { icon: faMusic, title: 'Música' },
        teatro: { icon: faTheaterMasks, title: 'Teatro' },
        foto: { icon: faCamera, title: 'Fotografia' },
        pintura: { icon: faPaintBrush, title: 'Pintura' },
        cinema: { icon: faFilm, title: 'Cinema' },
        design: { icon: faShapes, title: 'Design' },
        // Química
        quimica_geral: { icon: faFlask, title: 'Química Geral' },
        quimica_nuclear: { icon: faAtom, title: 'Química Nuclear' },
        quimica_ambiental: { icon: faTint, title: 'Química Ambiental' },
        combustiveis: { icon: faFire, title: 'Combustíveis' },
        fisicoquimica: { icon: faFire, title: 'Fisico-Química' },
        quimica_organica: { icon: faFlask, title: 'Química Orgânica' },
        quimica_inorganica: { icon: faAtom, title: 'Química Inorgânica' },
        elementos: { icon: faFlask, title: 'Elementos Químicos' },
    };
    const found = iconMap[tipo];
    if (!found) return null;
    return <FontAwesomeIcon icon={found.icon} style={{ fontSize: 22, color: cor }} title={found.title} />;
}

export default function MateriaPage() {
    const { materia } = useParams();
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    const data = MATERIAS_DATA[materia] || MATERIAS_DATA['matematica'];
    const { cards, titulo, corPrincipal, progressoGeral, descricao } = data;

    return (
        <div style={{ display: "flex", minHeight: "100vh" }}>
            <Sidebar activeItem="matérias" />
            <main
                style={{
                    flex: 1,
                    padding: 0,
                    paddingTop: 32,
                    marginLeft: windowWidth > 700 ? 32 : 0,
                    transition: 'margin-left 0.3s'
                }}
            >
                <div style={{ width: "100%" }}>
                    {windowWidth > 700 && (
                        <div style={{
                            background: corPrincipal,
                            borderRadius: 16,
                            padding: "24px 32px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            color: "#fff",
                            boxShadow: `0 2px 16px 0 ${corPrincipal}22`,
                            width: "100%"
                        }}>
                            <div>
                                <h2 style={{ fontWeight: 700, fontSize: 32, marginBottom: 8 }}>{titulo}</h2>
                                {descricao && (
                                    <div style={{ fontSize: 17, marginBottom: 18, color: "#fff" }}>{descricao}</div>
                                )}
                                {/* Badges dinâmicos */}
                                <div style={{ display: "flex", alignItems: "center", gap: 24, marginTop: 8 }}>
                                    {data.badges && data.badges.map((badge, idx) => (
                                        <span key={idx} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 15 }}>
                                            <FontAwesomeIcon icon={badge.icone} style={{ fontSize: 20, marginRight: 2 }} />
                                            {badge.texto}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", minWidth: 120 }}>
                                <div style={{ position: "relative", width: 80, height: 80 }}>
                                    <svg width="80" height="80" viewBox="0 0 80 80">
                                        <circle cx="40" cy="40" r="36" stroke="#fff4" strokeWidth="8" fill="none" />
                                        <circle cx="40" cy="40" r="36" stroke="#fff" strokeWidth="8" fill="none" strokeDasharray="226.1946710584651" strokeDashoffset={226.1946710584651 * (1 - (progressoGeral || 0) / 100)} style={{ transition: "stroke-dashoffset 0.5s" }} />
                                    </svg>
                                    <div style={{ position: "absolute", top: 0, left: 0, width: 80, height: 80, display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <span style={{ fontWeight: 700, fontSize: 26, color: "#fff" }}>{progressoGeral || 0}%</span>
                                    </div>
                                </div>
                                <div style={{ fontSize: 15, color: "#fff", marginTop: 4, textAlign: "center" }}>Progresso Geral</div>
                            </div>
                        </div>
                    )}
                </div>
                <div
                    style={{
                        marginTop: windowWidth > 700 ? 32 : 12,
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: windowWidth > 700 ? 24 : 12,
                        justifyContent: windowWidth > 700 ? 'flex-start' : 'center',
                    }}
                >
                    {cards.map((card, idx) => (
                        <div
                            key={idx}
                            style={{
                                background: '#fff',
                                borderRadius: 18,
                                boxShadow: `0 2px 16px 0 ${corPrincipal}22`,
                                padding: windowWidth > 700 ? '24px 24px' : '16px 10px',
                                minWidth: windowWidth > 700 ? 220 : undefined,
                                maxWidth: windowWidth > 700 ? 400 : undefined,
                                width: windowWidth > 700 ? 'calc(33.333% - 16px)' : '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 2,
                                position: 'relative',
                                marginBottom: windowWidth > 700 ? 12 : 10
                            }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                                    <div style={{ background: `${card.corIcone}22`, borderRadius: 10, width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        {renderIcon(card.icone, card.corIcone)}
                                    </div>
                                    <div>
                                        <span style={{ fontWeight: 700, color: '#18181b', fontSize: 18, display: 'block' }}>{card.nome}</span>
                                        {/* <div style={{ color: '#64748b', fontSize: 13 }}>{card.descricao}</div> */}
                                    </div>
                                </div>
                                <span style={{ background: card.corSeloBg, color: card.corSelo, fontSize: 12, fontWeight: 600, padding: '4px 14px', borderRadius: 8, whiteSpace: 'nowrap' }}>{card.selo}</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '8px 0 4px 0' }}>
                                <span style={{ color: '#64748b', fontSize: 12 }}>Progresso</span>
                                <span style={{ fontWeight: 700, fontSize: 12, color: '#18181b' }}>{card.progresso}%</span>
                            </div>
                            <div style={{ width: '100%', height: 8, background: `${card.corIcone}22`, borderRadius: 8, marginBottom: 8 }}>
                                <div style={{ height: 8, background: card.corBarra, borderRadius: 8, width: `${card.progresso}%` }}></div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: 14, marginBottom: 8 }}>
                                <div style={{ fontWeight: 700, color: '#18181b' }}>24 <span style={{ fontWeight: 400, color: '#64748b' }}>Exercícios</span></div>
                                <div style={{ fontWeight: 700, color: '#18181b' }}>4 <span style={{ fontWeight: 400, color: '#64748b' }}>Pendentes</span></div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: 12, color: '#64748b', marginTop: 8 }}>
                                <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><i className='bx bx-time-five'></i>2h atrás</span>
                                <a href="#" style={{ color: '#2563eb', fontWeight: 600, textDecoration: 'none' }}>Continuar</a>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
