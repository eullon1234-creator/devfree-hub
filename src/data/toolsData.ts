import type { Category, ToolItem } from '../types/tool';

export const CATEGORIES: Category[] = [
  {
    id: 'all',
    name: 'Todos os Recursos',
    description: 'Explore todo o ecossistema de ferramentas e APIs gratuitas',
    icon: 'Layers',
    color: 'from-indigo-500 to-purple-600',
  },
  {
    id: 'ai',
    name: 'Inteligência Artificial & LLMs',
    description: 'APIs de LLM, visão computacional, transcrição e embeddings com tiers gratuitos generosos',
    icon: 'BrainCircuit',
    color: 'from-purple-500 to-pink-600',
  },
  {
    id: 'database',
    name: 'Bancos de Dados & Storage',
    description: 'PostgreSQL, SQLite edge, MongoDB, Redis e S3 compatível sem custo inicial',
    icon: 'Database',
    color: 'from-cyan-500 to-blue-600',
  },
  {
    id: 'image_media',
    name: 'Imagens & Mídia',
    description: 'Geração de imagem por IA, remoção de fundo, CDN e repositórios de mídia em alta resolução',
    icon: 'Image',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    id: 'hosting',
    name: 'Deploy & Hospedagem',
    description: 'Hospede front-ends, APIs backend, containers e workers na nuvem gratuitamente',
    icon: 'Cloud',
    color: 'from-orange-500 to-amber-600',
  },
  {
    id: 'auth',
    name: 'Autenticação & Segurança',
    description: 'Sistemas de login, OAuth, MFA e gestão de usuários com dezenas de milhares de MAUs grátis',
    icon: 'ShieldCheck',
    color: 'from-rose-500 to-red-600',
  },
  {
    id: 'email_messaging',
    name: 'Email & Mensageria',
    description: 'Disparo transacional de emails, notificações e bots para automações',
    icon: 'Mail',
    color: 'from-violet-500 to-indigo-600',
  },
  {
    id: 'apis_data',
    name: 'APIs & Dados Públicos',
    description: 'Dados de CEP/CNPJ, clima, finanças e geolocalização prontos para consumir',
    icon: 'Globe',
    color: 'from-blue-500 to-cyan-600',
  },
];

export const INITIAL_TOOLS: ToolItem[] = [
  // --- IA & LLMS ---
  {
    id: 'groq-cloud',
    name: 'GroqCloud',
    tagline: 'Inferência de LLMs a centenas de tokens por segundo gratuitamente',
    description: 'A Groq fornece acesso ultra-rápido via chips LPU para rodar modelos abertos como Llama 3.3 70B, Mixtral 8x7B e Whisper Large para transcrição de áudio com compatibilidade direta com a API da OpenAI.',
    category: 'ai',
    tags: ['LLM', 'Llama 3.3', 'Ultra Rápido', 'OpenAI Compatible', 'Whisper'],
    websiteUrl: 'https://groq.com',
    docsUrl: 'https://console.groq.com/docs/quickstart',
    pricingUrl: 'https://groq.com/pricing',
    requiresCreditCard: false,
    hasApi: true,
    starsRating: 5.0,
    isPopular: true,
    isFeatured: true,
    freeTierDetails: {
      quota: '30 req/min e até 14.400 requisições diárias',
      highlights: [
        'Sem necessidade de cartão de crédito',
        'Modelos de ponta: Llama 3.3 70B Versatile, Llama 3.1 8B, Whisper v3',
        'Velocidade média de 300 a 500+ tokens/segundo',
        'SDK oficial para Python e Node.js compatível com a biblioteca OpenAI'
      ],
      resetPeriod: 'Diário',
      limitations: 'Rate limit baseado em tokens por minuto (TPM) e requisições por minuto (RPM)'
    },
    codeSnippet: {
      language: 'javascript',
      title: 'Chamada Node.js / Fetch (OpenAI Compatible)',
      code: `const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
  method: "POST",
  headers: {
    "Authorization": "Bearer " + process.env.GROQ_API_KEY,
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    model: "llama-3.3-70b-versatile",
    messages: [{ role: "user", content: "Explique o que é uma API REST em 2 frases." }]
  })
});
const data = await response.json();
console.log(data.choices[0].message.content);`
    },
    tips: 'Use a base URL "https://api.groq.com/openai/v1" dentro da SDK oficial da OpenAI trocando apenas o apiKey e o model!',
    addedAt: '2026-01-10'
  },
  {
    id: 'google-ai-studio',
    name: 'Google AI Studio (Gemini API)',
    tagline: 'Janela de contexto de até 2 milhões de tokens com Gemini 1.5 Pro e Flash',
    description: 'A API oficial do Google para os modelos Gemini (Flash e Pro), permitindo envio de texto, imagens, vídeos completos e PDFs gigantescos com limites gratuitos extremamente amplos para testes e protótipos.',
    category: 'ai',
    tags: ['Gemini', 'Multimodal', 'Contexto Gigante', 'Google', 'Visão'],
    websiteUrl: 'https://aistudio.google.com',
    docsUrl: 'https://ai.google.dev/gemini-api/docs',
    pricingUrl: 'https://ai.google.dev/pricing',
    requiresCreditCard: false,
    hasApi: true,
    starsRating: 4.9,
    isPopular: true,
    isFeatured: true,
    freeTierDetails: {
      quota: '15 RPM (Requisições por minuto) e 1.500 RPD (por dia) no Gemini Flash',
      highlights: [
        'Completamente grátis sem inserir cartão de crédito',
        'Suporte a arquivos de vídeo, áudio, PDF e imagens de alta resolução',
        'Janela de contexto de 1.000.000 de tokens no Gemini 1.5 Flash',
        'SDKs oficiais para JS/TS, Python, Go, Android e Swift'
      ],
      resetPeriod: 'Diário',
      limitations: 'No plano gratuito os dados de prompt podem ser usados para aprimoramento de produtos do Google'
    },
    codeSnippet: {
      language: 'javascript',
      title: 'Chamada Google Gen AI SDK',
      code: `import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const prompt = "Liste 3 ideias criativas para aplicativos móveis.";
const result = await model.generateContent(prompt);
console.log(result.response.text());`
    },
    tips: 'Gere sua chave em segundos no Google AI Studio. O modelo Flash é incrivelmente rápido e gratuito para quase qualquer automação.',
    addedAt: '2026-01-12'
  },
  {
    id: 'openrouter',
    name: 'OpenRouter',
    tagline: 'Uma única API para dezenas de modelos de IA, incluindo opções 100% gratuitas',
    description: 'O OpenRouter unifica centenas de provedores de IA em uma interface compatível com OpenAI. Possui diversos modelos de ponta totalmente gratuitos marcados com o sufixo :free (como Llama, Gemma, DeepSeek e Mistral).',
    category: 'ai',
    tags: ['Agregador', 'Multi-Model', 'Modelos Free', 'DeepSeek', 'Llama'],
    websiteUrl: 'https://openrouter.ai',
    docsUrl: 'https://openrouter.ai/docs/quick-start',
    pricingUrl: 'https://openrouter.ai/models?max_price=0',
    requiresCreditCard: false,
    hasApi: true,
    starsRating: 4.8,
    isPopular: true,
    freeTierDetails: {
      quota: 'Até 20 requisições/minuto nos modelos gratuitos :free',
      highlights: [
        'Sem cartão para modelos gratuitos',
        'Permite alternar entre dezenas de modelos sem mudar o código',
        'Acesso a modelos como deepseek/deepseek-r1:free e meta-llama/llama-3.3-70b-instruct:free',
        'Fallback automático se um provedor estiver instável'
      ],
      resetPeriod: 'Contínuo',
      limitations: 'Modelos free podem ter fila em horários de pico'
    },
    codeSnippet: {
      language: 'javascript',
      title: 'Requisição para modelo gratuito no OpenRouter',
      code: `const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
  method: "POST",
  headers: {
    "Authorization": "Bearer " + process.env.OPENROUTER_API_KEY,
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    model: "deepseek/deepseek-r1:free",
    messages: [{ role: "user", content: "Resolva este desafio de lógica: ..." }]
  })
});
const data = await response.json();
console.log(data.choices[0].message.content);`
    },
    tips: 'Filtre no site por preço "Free" para encontrar todos os modelos com custo $0.00/1M tokens.',
    addedAt: '2026-01-15'
  },
  {
    id: 'huggingface-inference',
    name: 'Hugging Face Inference API',
    tagline: 'Milhares de modelos de IA open-source serverless prontos para uso',
    description: 'A maior comunidade de inteligência artificial do mundo disponibiliza uma API gratuita para experimentar milhares de modelos de NLP, visão computacional, tradução e áudio hospedados em seus servidores.',
    category: 'ai',
    tags: ['Hugging Face', 'Open Source', 'Embeddings', 'Transformers'],
    websiteUrl: 'https://huggingface.co',
    docsUrl: 'https://huggingface.co/docs/api-inference/index',
    pricingUrl: 'https://huggingface.co/pricing',
    requiresCreditCard: false,
    hasApi: true,
    starsRating: 4.7,
    freeTierDetails: {
      quota: 'Taxa moderada de requisições gratuitas para experimentação',
      highlights: [
        'Sem cartão de crédito',
        'Acesso a modelos de classificação, NER, tradução e embeddings',
        'SDK @huggingface/inference simples e tipado em TypeScript',
        'Possibilidade de testar modelos criados pela comunidade'
      ],
      resetPeriod: 'Contínuo',
      limitations: 'Modelos frios podem demorar alguns segundos para inicializar (cold start)'
    },
    codeSnippet: {
      language: 'javascript',
      title: 'Usando o cliente oficial Hugging Face',
      code: `import { HfInference } from "@huggingface/inference";

const hf = new HfInference(process.env.HF_TOKEN);
const result = await hf.featureExtraction({
  model: "sentence-transformers/all-MiniLM-L6-v2",
  inputs: "Banco de dados vetorial para IA"
});
console.log("Dimensões do vetor:", result.length);`
    },
    tips: 'Excelente para gerar embeddings de textos sem precisar pagar OpenAI nem configurar servidores caros.',
    addedAt: '2026-01-18'
  },
  {
    id: 'cohere-api',
    name: 'Cohere',
    tagline: 'API líder em busca semântica, rerank e embeddings para desenvolvedores',
    description: 'A Cohere fornece uma chave de API gratuita para desenvolvedores (Trial Key) que permite utilizar seus modelos líderes de Rerank (reordenação de resultados de busca) e Embeddings multilíngues.',
    category: 'ai',
    tags: ['Rerank', 'Embeddings', 'Busca Semântica', 'RAG'],
    websiteUrl: 'https://cohere.com',
    docsUrl: 'https://docs.cohere.com/reference/about',
    pricingUrl: 'https://cohere.com/pricing',
    requiresCreditCard: false,
    hasApi: true,
    starsRating: 4.7,
    freeTierDetails: {
      quota: '1.000 chamadas/mês grátis com a chave Trial',
      highlights: [
        'Não exige cartão para obter a chave Trial de desenvolvedor',
        'Modelo Cohere Rerank v3: o padrão da indústria para turbinar RAG',
        'Embeddings com suporte excelente para língua portuguesa',
        'Painel com métricas detalhadas e playground intuitivo'
      ],
      resetPeriod: 'Mensal'
    },
    tips: 'O modelo Rerank da Cohere é o melhor complemento para qualquer banco vetorial para melhorar a precisão de respostas.',
    addedAt: '2026-01-20'
  },

  // --- BANCOS DE DADOS & STORAGE ---
  {
    id: 'supabase',
    name: 'Supabase',
    tagline: 'A alternativa de código aberto ao Firebase com PostgreSQL completo',
    description: 'O Supabase oferece uma instância de PostgreSQL dedicada com autenticação de usuários, APIs REST e GraphQL geradas automaticamente, armazenamento de arquivos (Storage) e suporte a queries com vetores (pgvector) para IA.',
    category: 'database',
    tags: ['PostgreSQL', 'Auth', 'Storage', 'BaaS', 'pgvector', 'Realtime'],
    websiteUrl: 'https://supabase.com',
    docsUrl: 'https://supabase.com/docs',
    pricingUrl: 'https://supabase.com/pricing',
    requiresCreditCard: false,
    hasApi: true,
    starsRating: 5.0,
    isPopular: true,
    isFeatured: true,
    freeTierDetails: {
      quota: '2 projetos ativos, 500MB DB, 1GB Storage, 50k usuários ativos/mês',
      highlights: [
        'Sem necessidade de cartão de crédito',
        'PostgreSQL completo com suporte a extensões (pgvector, uuid-ossp, PostGIS)',
        'Armazenamento de imagens e arquivos até 1 GB',
        'Autenticação social (Google, GitHub, Discord) inclusa',
        '50.000 usuários ativos mensais (MAU)'
      ],
      resetPeriod: 'Permanente',
      limitations: 'Projetos sem atividade por 7 dias entram em pausa (restauração com 1 clique)'
    },
    codeSnippet: {
      language: 'javascript',
      title: 'Cliente Supabase em TypeScript / JavaScript',
      code: `import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://xyzcompany.supabase.co',
  'sua-chave-public-anon'
);

// Consulta simples ao banco Postgres
const { data, error } = await supabase
  .from('ferramentas')
  .select('*')
  .order('created_at', { ascending: false });

console.log(data);`
    },
    tips: 'Ative a extensão pgvector no painel do Supabase com 1 clique para transformar seu PostgreSQL num banco de busca vetorial para IA.',
    addedAt: '2026-01-05'
  },
  {
    id: 'neon-postgres',
    name: 'Neon Serverless Postgres',
    tagline: 'Postgres serverless moderno com branching instantâneo de dados',
    description: 'O Neon desacopla computação de armazenamento, oferecendo bancos de dados PostgreSQL que sobem e escalam em milissegundos. Permite criar branches do seu banco de dados igual você faz no Git para testar migrações.',
    category: 'database',
    tags: ['PostgreSQL', 'Serverless', 'Branching', 'Edge'],
    websiteUrl: 'https://neon.tech',
    docsUrl: 'https://neon.tech/docs/introduction',
    pricingUrl: 'https://neon.tech/pricing',
    requiresCreditCard: false,
    hasApi: true,
    starsRating: 4.9,
    isPopular: true,
    isFeatured: true,
    freeTierDetails: {
      quota: '0.5 GB de armazenamento, computação gratuita compartilhada',
      highlights: [
        'Sem necessidade de cartão de crédito',
        'Branching instantâneo para ambientes de preview e staging',
        'Escala automática para zero quando o banco está ocioso',
        'Compatível com Prisma, Drizzle, TypeORM e conexões HTTP de baixa latência'
      ],
      resetPeriod: 'Permanente'
    },
    codeSnippet: {
      language: 'javascript',
      title: 'Conexão via driver serverless neon',
      code: `import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL);
const posts = await sql\`SELECT * FROM posts WHERE published = true\`;
console.log(posts);`
    },
    tips: 'Ideal para projetos que rodam no Vercel ou Cloudflare Workers, pois seu driver HTTP elimina problemas de connection pooling.',
    addedAt: '2026-01-08'
  },
  {
    id: 'turso-database',
    name: 'Turso (libSQL)',
    tagline: 'SQLite distribuído na borda com latência ultrabaixa e cota generosa',
    description: 'Construído sobre o libSQL (fork aberto do SQLite), o Turso permite criar bancos de dados replicados globalmente perto dos seus usuários, com um tier gratuito impressionante de 9 GB de dados e até 500 bancos.',
    category: 'database',
    tags: ['SQLite', 'libSQL', 'Edge', 'Ultra Rápido', 'Serverless'],
    websiteUrl: 'https://turso.tech',
    docsUrl: 'https://docs.turso.tech',
    pricingUrl: 'https://turso.tech/pricing',
    requiresCreditCard: false,
    hasApi: true,
    starsRating: 4.8,
    isPopular: true,
    freeTierDetails: {
      quota: '9 GB de armazenamento total e 1 bilhão de linhas lidas por mês',
      highlights: [
        'Sem cartão para começar',
        'Até 500 bancos de dados diferentes no plano grátis (arquitetura multi-tenant)',
        'Latência inferior a 10ms com réplicas edge',
        'Driver nativo compatível com Node, Python, Rust e WebAssembly'
      ],
      resetPeriod: 'Mensal'
    },
    codeSnippet: {
      language: 'javascript',
      title: 'Consulta rápida com @libsql/client',
      code: `import { createClient } from "@libsql/client";

const client = createClient({
  url: process.env.TURSO_DATABASE_URL,
  authToken: process.env.TURSO_AUTH_TOKEN
});

const result = await client.execute("SELECT * FROM users LIMIT 10");
console.log(result.rows);`
    },
    tips: 'A cota de 9 GB é uma das maiores do mercado para planos gratuitos. Perfeito para side projects e micro-SaaS.',
    addedAt: '2026-01-14'
  },
  {
    id: 'mongodb-atlas',
    name: 'MongoDB Atlas',
    tagline: 'Banco NoSQL orientado a documentos gerenciado na nuvem',
    description: 'O cluster compartilhado M0 do MongoDB Atlas é a forma mais fácil e confiável de usar MongoDB gratuitamente, disponível em regiões da AWS, Google Cloud ou Azure.',
    category: 'database',
    tags: ['MongoDB', 'NoSQL', 'Documentos', 'JSON'],
    websiteUrl: 'https://www.mongodb.com/cloud/atlas',
    docsUrl: 'https://www.mongodb.com/docs/atlas',
    pricingUrl: 'https://www.mongodb.com/pricing',
    requiresCreditCard: false,
    hasApi: true,
    starsRating: 4.7,
    freeTierDetails: {
      quota: 'Cluster M0 com 512MB de armazenamento permanente',
      highlights: [
        'Nunca expira e não exige cartão',
        'Interface web completa para explorar coleções e índices',
        'Backups automáticos e monitoramento de performance básico',
        'Suporte a Mongoose e driver nativo do MongoDB'
      ],
      resetPeriod: 'Permanente',
      limitations: 'Limitado a 100 conexões simultâneas e 512MB de disco'
    },
    tips: 'Excelente para protótipos que necessitam de esquemas flexíveis ou armazenamento nativo de JSON.',
    addedAt: '2026-01-16'
  },
  {
    id: 'cloudflare-d1-r2',
    name: 'Cloudflare D1 & R2',
    tagline: 'Banco relacional SQLite e Object Storage S3 com zero taxa de egress',
    description: 'O Cloudflare D1 é um banco SQL serverless nativo de workers, e o Cloudflare R2 é um storage compatível com a API da Amazon S3 mas sem nenhuma taxa de saída de dados (egress).',
    category: 'database',
    tags: ['Cloudflare', 'S3 Storage', 'Zero Egress', 'SQL'],
    websiteUrl: 'https://www.cloudflare.com/developer-platform/r2',
    docsUrl: 'https://developers.cloudflare.com/r2',
    pricingUrl: 'https://www.cloudflare.com/plans/developer-platform',
    requiresCreditCard: false,
    hasApi: true,
    starsRating: 4.9,
    freeTierDetails: {
      quota: 'R2: 10 GB de armazenamento/mês grátis | D1: 5M leituras/dia',
      highlights: [
        'Zero cobrança de largura de banda na saída (diferente da AWS)',
        'Totalmente compatível com bibliotecas AWS S3 SDK (@aws-sdk/client-s3)',
        '1 milhão de operações de escrita gratuitas no R2 por mês',
        'Deploy global instantâneo'
      ],
      resetPeriod: 'Mensal'
    },
    tips: 'Economize centenas de reais em storage de arquivos trocando o AWS S3 pelo Cloudflare R2 no seu backend.',
    addedAt: '2026-01-17'
  },
  {
    id: 'upstash',
    name: 'Upstash (Redis & QStash)',
    tagline: 'Redis e filas de mensagens serverless com suporte a REST API',
    description: 'Banco de dados em memória compatível com Redis e serviço de mensageria com cobrança por comando executado. Possui endpoints REST nativos que funcionam perfeitamente no ambiente edge e serverless.',
    category: 'database',
    tags: ['Redis', 'Cache', 'Serverless', 'Rate Limiting', 'Queues'],
    websiteUrl: 'https://upstash.com',
    docsUrl: 'https://docs.upstash.com',
    pricingUrl: 'https://upstash.com/pricing',
    requiresCreditCard: false,
    hasApi: true,
    starsRating: 4.8,
    freeTierDetails: {
      quota: '10.000 comandos Redis por dia e 500 mensagens QStash/dia',
      highlights: [
        'Sem cartão para criar contas e bancos',
        'SDK @upstash/redis usa chamadas HTTP/REST (não abre socket persistente)',
        'Biblioteca pronta para Rate Limiting (@upstash/ratelimit)',
        'Armazenamento persistente e réplicas globais'
      ],
      resetPeriod: 'Diário'
    },
    codeSnippet: {
      language: 'javascript',
      title: 'Rate Limit em Next.js / Edge com Upstash',
      code: `import { Redis } from "@upstash/redis";
import { Ratelimit } from "@upstash/ratelimit";

const redis = Redis.fromEnv();
const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(10, "10 s"), // 10 requisições a cada 10 segundos
});

const { success } = await ratelimit.limit("ip_do_usuario");
if (!success) {
  console.log("Limite de requisições excedido!");
}`
    },
    tips: 'É a ferramenta número 1 para colocar proteção contra abusos (Rate Limit) em APIs gratuitas.',
    addedAt: '2026-01-19'
  },

  // --- IMAGENS & MÍDIA ---
  {
    id: 'pollinations-ai',
    name: 'Pollinations.ai',
    tagline: 'Geração de imagens por IA 100% gratuita, sem cadastro e sem chave de API',
    description: 'O Pollinations.ai é um serviço revolucionário de código aberto que gera imagens usando modelos de difusão de ponta (como Flux) simplesmente chamando uma URL com os parâmetros do prompt no formato GET.',
    category: 'image_media',
    tags: ['Geração de Imagem', 'Flux', 'Sem API Key', '100% Grátis', 'Open Source'],
    websiteUrl: 'https://pollinations.ai',
    docsUrl: 'https://github.com/pollinations/pollinations',
    pricingUrl: 'https://pollinations.ai',
    requiresCreditCard: false,
    hasApi: true,
    starsRating: 5.0,
    isPopular: true,
    isFeatured: true,
    freeTierDetails: {
      quota: 'Ilimitado para uso razoável sem cadastro',
      highlights: [
        'Sem cadastro, sem login e sem cartão de crédito',
        'Gere imagens direto na tag <img> com URLs simples',
        'Suporte a modelos como Flux, Turbo e outros',
        'Parâmetros para largura, altura, semente (seed) e estilo'
      ],
      resetPeriod: 'Ilimitado'
    },
    codeSnippet: {
      language: 'javascript',
      title: 'Gerando imagens direto via URL',
      code: `// Basta montar uma URL e colocar no src da imagem!
const prompt = encodeURIComponent("futuristic cyberpunk neon city in 4k");
const imageUrl = \`https://image.pollinations.ai/prompt/\${prompt}?width=800&height=600&nologo=true\`;

console.log("Link da imagem gerada:", imageUrl);
// Você pode usar diretamente: <img src={imageUrl} alt="Cyberpunk city" />`
    },
    tips: 'Adicione "&nologo=true" na URL para remover a marca d\'água automaticamente!',
    addedAt: '2026-01-04'
  },
  {
    id: 'cloudinary',
    name: 'Cloudinary',
    tagline: 'Gerenciamento, otimização automática e transformação de imagens e vídeos por URL',
    description: 'Plataforma líder mundial em mídia para desenvolvedores. Permite fazer upload de imagens e transformá-las dinamicamente (redimensionar, cortar faces com IA, comprimir para WebP/AVIF) modificando parâmetros na URL.',
    category: 'image_media',
    tags: ['CDN', 'Transformação', 'Otimização WebP', 'Upload'],
    websiteUrl: 'https://cloudinary.com',
    docsUrl: 'https://cloudinary.com/documentation',
    pricingUrl: 'https://cloudinary.com/pricing',
    requiresCreditCard: false,
    hasApi: true,
    starsRating: 4.9,
    isPopular: true,
    freeTierDetails: {
      quota: '25 créditos mensais (aprox. 25.000 transformações ou 25GB de banda)',
      highlights: [
        'Sem cartão de crédito necessário',
        'Conversão automática de formatos para otimizar velocidade (f_auto, q_auto)',
        'Detecção e recorte inteligente de rostos e objetos',
        'Widget de upload pré-construído para React e JS'
      ],
      resetPeriod: 'Mensal'
    },
    codeSnippet: {
      language: 'javascript',
      title: 'Transformação dinâmica de imagem via URL',
      code: `// URL original enviada:
// https://res.cloudinary.com/demo/image/upload/sample.jpg

// Imagem cortada no formato quadrado com foco automático no rosto e comprimida em WebP:
const urlOtimizada = "https://res.cloudinary.com/demo/image/upload/w_300,h_300,c_fill,g_face,f_auto,q_auto/sample.jpg";`
    },
    tips: 'Use sempre os parâmetros "f_auto,q_auto" para economizar largura de banda e acelerar seu site com pontuação máxima no Google PageSpeed.',
    addedAt: '2026-01-07'
  },
  {
    id: 'unsplash-api',
    name: 'Unsplash API',
    tagline: 'Milhões de fotos de alta resolução gratuitas e prontas para uso em apps',
    description: 'A API oficial do Unsplash permite que seu aplicativo busque, filtre e baixe fotos profissionais tiradas por fotógrafos de todo o mundo sem pagar por royalties.',
    category: 'image_media',
    tags: ['Fotos', 'Stock Photos', 'Alta Resolução', 'Galeria'],
    websiteUrl: 'https://unsplash.com/developers',
    docsUrl: 'https://unsplash.com/documentation',
    pricingUrl: 'https://unsplash.com/developers',
    requiresCreditCard: false,
    hasApi: true,
    starsRating: 4.8,
    freeTierDetails: {
      quota: '50 requisições por hora no modo demonstração/desenvolvimento',
      highlights: [
        'Sem cartão para se cadastrar como desenvolvedor',
        'Acesso a mais de 3 milhões de fotografias de alta qualidade',
        'Filtros por cor, orientação (paisagem/retrato) e palavras-chave',
        'Aprovação para 5.000 req/hora gratuita após submeter o app'
      ],
      resetPeriod: 'Horário'
    },
    tips: 'Excelente para preencher mockups, avatares de perfil e fundos de tela de dashboards dinâmicos.',
    addedAt: '2026-01-11'
  },
  {
    id: 'imgbb-api',
    name: 'ImgBB API',
    tagline: 'Hospedagem simples de imagens com links diretos e CDN rápido',
    description: 'Serviço fácil de upload de fotos que aceita envio via FormData ou codificado em Base64, devolvendo links diretos permanentes para exibição em fóruns, blogs ou apps.',
    category: 'image_media',
    tags: ['Upload', 'Hospedagem', 'Base64', 'CDN'],
    websiteUrl: 'https://imgbb.com',
    docsUrl: 'https://api.imgbb.com',
    pricingUrl: 'https://imgbb.com/pricing',
    requiresCreditCard: false,
    hasApi: true,
    starsRating: 4.6,
    freeTierDetails: {
      quota: 'Tamanho máximo de 32 MB por imagem, upload ilimitado para uso regular',
      highlights: [
        'Chave de API emitida em 1 minuto sem cartão',
        'Retorna URLs com thumbnail, imagem média e resolução total',
        'Suporte a expiração automática temporária de imagens'
      ],
      resetPeriod: 'Permanente'
    },
    tips: 'Ideal quando você só quer fazer upload de uma foto de perfil e receber uma URL pública sem configurar AWS S3.',
    addedAt: '2026-01-13'
  },

  // --- HOSPEDAGEM & DEPLOY ---
  {
    id: 'vercel',
    name: 'Vercel',
    tagline: 'A plataforma ideal para hospedar Next.js, React e sites modernos',
    description: 'Plataforma líder em experiência de desenvolvimento frontend. Integra-se diretamente ao GitHub, GitLab e Bitbucket, gerando URLs de preview para cada Pull Request e deploy em CDN global.',
    category: 'hosting',
    tags: ['Next.js', 'Frontend', 'Serverless', 'Preview URLs', 'CI/CD'],
    websiteUrl: 'https://vercel.com',
    docsUrl: 'https://vercel.com/docs',
    pricingUrl: 'https://vercel.com/pricing',
    requiresCreditCard: false,
    hasApi: true,
    starsRating: 5.0,
    isPopular: true,
    isFeatured: true,
    freeTierDetails: {
      quota: '100 GB de largura de banda mensal e 100 horas de computação serverless',
      highlights: [
        'Plano Hobby 100% gratuito sem cartão de crédito',
        'Certificados SSL automáticos para domínios personalizados',
        'Ambientes de preview a cada commit ou pull request',
        'Edge middleware e serverless functions sem configuração'
      ],
      resetPeriod: 'Mensal'
    },
    tips: 'Basta conectar seu repositório GitHub e seu site estará online em menos de 60 segundos com HTTPS!',
    addedAt: '2026-01-02'
  },
  {
    id: 'render',
    name: 'Render',
    tagline: 'Hospedagem em nuvem para aplicações Web, APIs backend e bancos',
    description: 'Uma das melhores alternativas ao Heroku. Permite hospedar backends em Node.js, Python, Go, Ruby ou Docker com certificado SSL gratuito e deploy automático via Git.',
    category: 'hosting',
    tags: ['Backend', 'Node.js', 'Python', 'Docker', 'Web Services'],
    websiteUrl: 'https://render.com',
    docsUrl: 'https://render.com/docs',
    pricingUrl: 'https://render.com/pricing',
    requiresCreditCard: false,
    hasApi: true,
    starsRating: 4.8,
    isPopular: true,
    freeTierDetails: {
      quota: '750 horas mensais de execução de Web Services gratuitos',
      highlights: [
        'Sem cartão para criar e rodar Web Services',
        'Static Sites com largura de banda de 100 GB/mês grátis',
        'Bancos de dados PostgreSQL gerenciados grátis por 30 dias',
        'Suporte nativo a Dockerfile'
      ],
      resetPeriod: 'Mensal',
      limitations: 'Web Services gratuitos entram em modo de espera (sleep) após 15 minutos sem requisições'
    },
    tips: 'Use serviços como cron-job.org ou Uptime Kuma para fazer ping a cada 10 minutos e manter o serviço acordado se necessário.',
    addedAt: '2026-01-06'
  },
  {
    id: 'cloudflare-pages-workers',
    name: 'Cloudflare Pages & Workers',
    tagline: 'Computação serverless na borda com 100.000 requisições diárias grátis',
    description: 'Execute código JavaScript/TypeScript distribuído em mais de 300 data centers ao redor do globo com tempo de inicialização de 0ms (zero cold start) e hospedagem estática ilimitada.',
    category: 'hosting',
    tags: ['Edge Computing', 'Workers', 'Jamstack', 'Zero Cold Start'],
    websiteUrl: 'https://workers.cloudflare.com',
    docsUrl: 'https://developers.cloudflare.com/workers',
    pricingUrl: 'https://developers.cloudflare.com/workers/platform/pricing',
    requiresCreditCard: false,
    hasApi: true,
    starsRating: 4.9,
    isPopular: true,
    freeTierDetails: {
      quota: '100.000 requisições diárias no Workers e banda ilimitada no Pages',
      highlights: [
        'Sem cartão de crédito obrigatório',
        'Cold start de 0 milissegundos (roda em V8 isolates)',
        'Suporte a Web standards (Fetch, Streams, WebCrypto)',
        'Proteção contra DDoS integrada da Cloudflare'
      ],
      resetPeriod: 'Diário'
    },
    tips: 'Perfeito para criar APIs proxies, manipuladores de cabeçalhos de segurança e APIs leves de alta performance.',
    addedAt: '2026-01-09'
  },

  // --- AUTENTICAÇÃO & SEGURANÇA ---
  {
    id: 'clerk-auth',
    name: 'Clerk',
    tagline: 'A melhor experiência de autenticação e gestão de usuários para React e Next.js',
    description: 'O Clerk oferece componentes pré-construídos de alta qualidade para Login, Cadastro, Perfil de Usuário e Gestão de Organizações, com suporte nativo a Passkeys, OAuth e autenticação sem senha.',
    category: 'auth',
    tags: ['Auth', 'React', 'Next.js', 'Passkeys', 'OAuth', 'UI Pronta'],
    websiteUrl: 'https://clerk.com',
    docsUrl: 'https://clerk.com/docs',
    pricingUrl: 'https://clerk.com/pricing',
    requiresCreditCard: false,
    hasApi: true,
    starsRating: 5.0,
    isPopular: true,
    isFeatured: true,
    freeTierDetails: {
      quota: 'Até 10.000 Usuários Ativos Mensais (MAU) 100% gratuitos',
      highlights: [
        'Sem cartão de crédito para começar',
        'Componentes prontos estilizados: <SignIn />, <SignUp />, <UserButton />',
        'Login social com Google, GitHub, Apple, Discord e mais',
        'Suporte a Next.js App Router e Server Actions de primeira classe'
      ],
      resetPeriod: 'Mensal'
    },
    codeSnippet: {
      language: 'javascript',
      title: 'Botão de login e proteção de rotas no Next.js',
      code: `import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Header() {
  return (
    <header className="flex justify-between p-4">
      <SignedOut>
        <SignInButton mode="modal">
          <button className="bg-indigo-600 px-4 py-2 rounded text-white">Entrar</button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton afterSignOutUrl="/" />
      </SignedIn>
    </header>
  );
}`
    },
    tips: 'Você economiza semanas de trabalho de frontend e backend em autenticação com o design pronto do Clerk.',
    addedAt: '2026-01-03'
  },
  {
    id: 'auth0',
    name: 'Auth0 by Okta',
    tagline: 'Padrão corporativo de autenticação e autorização com suporte a OpenID Connect',
    description: 'Plataforma madura e robusta que gerencia fluxos OAuth2, SAML, autenticação multifator (MFA) e detecção de ataques de força bruta com um plano generoso para desenvolvedores.',
    category: 'auth',
    tags: ['OAuth2', 'OpenID', 'MFA', 'Enterprise'],
    websiteUrl: 'https://auth0.com',
    docsUrl: 'https://auth0.com/docs',
    pricingUrl: 'https://auth0.com/pricing',
    requiresCreditCard: false,
    hasApi: true,
    starsRating: 4.7,
    freeTierDetails: {
      quota: 'Até 7.500 Usuários Ativos Mensais (MAU)',
      highlights: [
        'Login social ilimitado com 2 provedores sociais à sua escolha',
        'Página de login universal personalizável',
        'Ações com código JavaScript (Auth0 Actions) para enriquecer tokens JWT'
      ],
      resetPeriod: 'Mensal'
    },
    tips: 'Use quando você precisar de um fluxo estritamente padronizado segundo RFCs de OAuth2 e OpenID Connect.',
    addedAt: '2026-01-11'
  },

  // --- EMAIL & MENSAGERIA ---
  {
    id: 'resend',
    name: 'Resend',
    tagline: 'A API de email moderna feita para desenvolvedores com React Email',
    description: 'Criado pela equipe que desenvolveu o React Email, o Resend simplifica o envio de emails transacionais, permitindo que você escreva templates de email usando componentes React familiares e TypeScript.',
    category: 'email_messaging',
    tags: ['Email Transacional', 'React Email', 'TypeScript', 'Alta Entregabilidade'],
    websiteUrl: 'https://resend.com',
    docsUrl: 'https://resend.com/docs',
    pricingUrl: 'https://resend.com/pricing',
    requiresCreditCard: false,
    hasApi: true,
    starsRating: 4.9,
    isPopular: true,
    isFeatured: true,
    freeTierDetails: {
      quota: '3.000 emails por mês (máximo de 100 emails por dia)',
      highlights: [
        'Sem cartão para criar conta e disparar emails',
        'Domínio personalizado com checagem automática de SPF, DKIM e DMARC',
        'SDK para Node.js, Python, Go e Ruby extremamente simples',
        'Histórico e logs visuais de entrega, aberturas e cliques'
      ],
      resetPeriod: 'Mensal'
    },
    codeSnippet: {
      language: 'javascript',
      title: 'Disparo de email transacional em poucas linhas',
      code: `import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const { data, error } = await resend.emails.send({
  from: 'Acme <onboarding@seudominio.com>',
  to: ['usuario@email.com'],
  subject: 'Bem-vindo ao nosso aplicativo!',
  html: '<strong>Olá! Sua conta foi ativada com sucesso.</strong>'
});

console.log("Email enviado ID:", data?.id);`
    },
    tips: 'Combine com a biblioteca react-email para codificar seus emails com Tailwind e JSX!',
    addedAt: '2026-01-05'
  },
  {
    id: 'telegram-bot-api',
    name: 'Telegram Bot API',
    tagline: 'Envio ilimitado e 100% gratuito de mensagens, alertas e automações',
    description: 'A API oficial de Bots do Telegram é uma das mais abertas e generosas do mundo. Permite enviar mensagens de texto, botões inline, arquivos, imagens e receber webhooks instantâneos sem pagar nada.',
    category: 'email_messaging',
    tags: ['Bot', 'Alertas', 'Webhooks', '100% Grátis', 'Ilimitado'],
    websiteUrl: 'https://telegram.org',
    docsUrl: 'https://core.telegram.org/bots/api',
    pricingUrl: 'https://core.telegram.org/bots/faq#how-much-does-it-cost',
    requiresCreditCard: false,
    hasApi: true,
    starsRating: 4.9,
    isPopular: true,
    freeTierDetails: {
      quota: 'Ilimitado (até 30 mensagens por segundo por chat)',
      highlights: [
        '100% gratuito para sempre, sem nenhuma modalidade paga',
        'Sem cartão de crédito e sem burocracia (criação via @BotFather)',
        'Suporte a formatação rica em Markdown e HTML',
        'Ideal para monitorar erros de produção e alertas críticos de servidores'
      ],
      resetPeriod: 'Ilimitado'
    },
    codeSnippet: {
      language: 'javascript',
      title: 'Enviar notificação para seu canal do Telegram',
      code: `const botToken = process.env.TELEGRAM_BOT_TOKEN;
const chatId = process.env.TELEGRAM_CHAT_ID;
const message = "🚨 Alerta: Novo pedido recebido no valor de R$ 250,00!";

await fetch(\`https://api.telegram.org/bot\${botToken}/sendMessage\`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    chat_id: chatId,
    text: message,
    parse_mode: "HTML"
  })
});`
    },
    tips: 'Crie um canal privado só para você, adicione seu bot como administrador e você terá um sistema de alerta push gratuito no seu celular para sempre.',
    addedAt: '2026-01-08'
  },

  // --- APIS & DADOS PÚBLICOS ---
  {
    id: 'brasil-api',
    name: 'BrasilAPI',
    tagline: 'APIs públicas para dados brasileiros: CEP, CNPJ, bancos, feriados e FIPE',
    description: 'Projeto comunitário aberto de altíssima qualidade que centraliza e acelera consultas a serviços públicos brasileiros sem exigir qualquer tipo de cadastro, token ou cartão de crédito.',
    category: 'apis_data',
    tags: ['Brasil', 'CEP', 'CNPJ', 'Feriados', 'Bancos', 'Sem Token'],
    websiteUrl: 'https://brasilapi.com.br',
    docsUrl: 'https://brasilapi.com.br/docs',
    pricingUrl: 'https://brasilapi.com.br',
    requiresCreditCard: false,
    hasApi: true,
    starsRating: 5.0,
    isPopular: true,
    isFeatured: true,
    freeTierDetails: {
      quota: 'Totalmente aberta e gratuita sem autenticação',
      highlights: [
        'Nenhum cadastro ou API Key necessária',
        'Busca de CEP inteligente com fallback entre múltiplos provedores',
        'Consulta de dados cadastrais completos de CNPJ na Receita Federal',
        'Tabela FIPE de veículos, código DDD e lista oficial de bancos do Bacen'
      ],
      resetPeriod: 'Ilimitado'
    },
    codeSnippet: {
      language: 'javascript',
      title: 'Consulta instantânea de CEP',
      code: `const cep = "01001000";
const response = await fetch(\`https://brasilapi.com.br/api/cep/v2/\${cep}\`);
const endereco = await response.json();

console.log(\`\${endereco.street}, \${endereco.neighborhood} - \${endereco.city}/\${endereco.state}\`);`
    },
    tips: 'A consulta de CEP v2 traz inclusive as coordenadas geográficas (latitude/longitude) do local consultado!',
    addedAt: '2026-01-02'
  },
  {
    id: 'open-meteo',
    name: 'Open-Meteo',
    tagline: 'API meteorológica de alta precisão open-source sem necessidade de chave de API',
    description: 'Fornece previsões do tempo horárias e diárias, dados históricos climáticos, radiação solar e qualidade do ar usando os modelos das agências meteorológicas nacionais mais conceituadas.',
    category: 'apis_data',
    tags: ['Clima', 'Previsão do Tempo', 'Open Source', 'Sem API Key'],
    websiteUrl: 'https://open-meteo.com',
    docsUrl: 'https://open-meteo.com/en/docs',
    pricingUrl: 'https://open-meteo.com/en/pricing',
    requiresCreditCard: false,
    hasApi: true,
    starsRating: 4.8,
    freeTierDetails: {
      quota: 'Até 10.000 requisições diárias para uso não-comercial',
      highlights: [
        'Zero burocracia: não precisa de chave nem cadastro para rodar',
        'Dados de temperatura, velocidade do vento, chuva, UV e umidade',
        'Latência ultrabaixa com respostas em formato JSON comprimido'
      ],
      resetPeriod: 'Diário'
    },
    codeSnippet: {
      language: 'javascript',
      title: 'Obter previsão do tempo para São Paulo',
      code: `// Latitude e Longitude de São Paulo
const url = "https://api.open-meteo.com/v1/forecast?latitude=-23.55&longitude=-46.63&current=temperature_2m,wind_speed_10m";
const res = await fetch(url);
const data = await res.json();
console.log("Temperatura atual:", data.current.temperature_2m, "°C");`
    },
    tips: 'Não polui o código com secrets ou tokens no repositório.',
    addedAt: '2026-01-15'
  },
  {
    id: 'coingecko-api',
    name: 'CoinGecko API',
    tagline: 'A fonte mais abrangente de dados de criptomoedas, cotações e mercados',
    description: 'Acesse dados de preços ao vivo de milhares de moedas (Bitcoin, Ethereum, Solana, stablecoins), volume de negociação nas exchanges e capitalização de mercado.',
    category: 'apis_data',
    tags: ['Cripto', 'Finanças', 'Bitcoin', 'Mercado'],
    websiteUrl: 'https://www.coingecko.com',
    docsUrl: 'https://docs.coingecko.com/reference/introduction',
    pricingUrl: 'https://www.coingecko.com/en/api/pricing',
    requiresCreditCard: false,
    hasApi: true,
    starsRating: 4.7,
    freeTierDetails: {
      quota: 'Plano Demo público: 30 chamadas por minuto e 10.000 chamadas/mês',
      highlights: [
        'Sem cartão para criar a chave Demo',
        'Mais de 10.000 criptoativos rastreados',
        'Conversão automática para moedas fiduciárias como BRL, USD e EUR'
      ],
      resetPeriod: 'Mensal'
    },
    tips: 'Use o endpoint "/simple/price?ids=bitcoin&vs_currencies=brl,usd" para uma consulta ultraleve de cotação atual.',
    addedAt: '2026-01-18'
  },
  {
    id: 'rest-countries',
    name: 'REST Countries',
    tagline: 'Informações detalhadas sobre todos os países do planeta via REST API',
    description: 'API pública e gratuita que retorna dados completos sobre todos os países: capitais, bandeiras em SVG/PNG, moedas, idiomas falados, fronteiras, fusos horários e população.',
    category: 'apis_data',
    tags: ['Países', 'Geografia', 'Bandeiras', 'Sem Token'],
    websiteUrl: 'https://restcountries.com',
    docsUrl: 'https://restcountries.com',
    pricingUrl: 'https://restcountries.com',
    requiresCreditCard: false,
    hasApi: true,
    starsRating: 4.7,
    freeTierDetails: {
      quota: 'Gratuito e ilimitado para desenvolvedores sem autenticação',
      highlights: [
        'Não requer login nem token',
        'Filtro de campos específicos para economizar payload (ex: ?fields=name,capital,currencies)',
        'Imagens das bandeiras oficiais em alta qualidade'
      ],
      resetPeriod: 'Ilimitado'
    },
    tips: 'Excelente para carregar seletores de país dinâmicos com DDI e bandeira em formulários de cadastro.',
    addedAt: '2026-01-20'
  },
  // --- NOVAS FERRAMENTAS ADICIONADAS ---
  {
    id: 'elevenlabs-ai',
    name: 'ElevenLabs',
    tagline: 'Geração de voz ultra-realista por IA e clonagem de voz em dezenas de idiomas',
    description: 'A tecnologia de Text-to-Speech (TTS) com entonação humana mais avançada do mercado. Permite converter texto em fala com emoção realista, pausas naturais e sotaques perfeitos em português.',
    category: 'ai',
    tags: ['Voz IA', 'Text to Speech', 'TTS', 'Áudio', 'Dublagem'],
    websiteUrl: 'https://elevenlabs.io',
    docsUrl: 'https://elevenlabs.io/docs/api-reference',
    pricingUrl: 'https://elevenlabs.io/pricing',
    requiresCreditCard: false,
    hasApi: true,
    starsRating: 5.0,
    isPopular: true,
    isFeatured: true,
    freeTierDetails: {
      quota: '10.000 caracteres de áudio gerados por mês gratuitamente',
      highlights: [
        'Sem necessidade de cartão de crédito para a conta Free',
        'Acesso a dezenas de vozes pré-fabricadas ultra-realistas',
        'Suporte completo para 29 idiomas, incluindo Português do Brasil',
        'API REST simples com retorno em streaming de áudio MP3'
      ],
      resetPeriod: 'Mensal'
    },
    codeSnippet: {
      language: 'javascript',
      title: 'Gerando áudio via API da ElevenLabs',
      code: `const response = await fetch("https://api.elevenlabs.io/v1/text-to-speech/21m00Tcm4TlvDq8ikWAM", {
  method: "POST",
  headers: {
    "xi-api-key": process.env.ELEVENLABS_API_KEY,
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    text: "Olá! Este é um áudio de voz ultra-realista gerado por IA.",
    model_id: "eleven_multilingual_v2"
  })
});
const audioBlob = await response.blob();
console.log("Tamanho do arquivo de áudio:", audioBlob.size);`
    },
    tips: 'Use o modelo "eleven_multilingual_v2" para garantir pronúncia e acentuação brasileira impecáveis.',
    addedAt: '2026-02-01'
  },
  {
    id: 'cockroachdb-serverless',
    name: 'CockroachDB Serverless',
    tagline: 'PostgreSQL distribuído resiliente com incríveis 10 GB de armazenamento grátis',
    description: 'Banco de dados SQL distribuído compatível com Postgres que nunca sai do ar. Oferece tolerância a falhas multinodal e escalabilidade automática com um dos maiores limites de armazenamento gratuito do mercado.',
    category: 'database',
    tags: ['PostgreSQL', 'SQL Distribuído', '10GB Grátis', 'Serverless'],
    websiteUrl: 'https://www.cockroachlabs.com',
    docsUrl: 'https://www.cockroachlabs.com/docs/cockroachcloud/quickstart',
    pricingUrl: 'https://www.cockroachlabs.com/pricing',
    requiresCreditCard: false,
    hasApi: true,
    starsRating: 4.9,
    freeTierDetails: {
      quota: '10 GB de armazenamento e 50 milhões de Request Units (RU) por mês',
      highlights: [
        'Sem cartão de crédito para iniciar o cluster gratuito',
        'Compatibilidade de 99% com drivers e ORMs de PostgreSQL',
        'Backups automáticos inclusos',
        'Alta disponibilidade geográfica'
      ],
      resetPeriod: 'Mensal'
    },
    tips: 'A cota de 10 GB de storage é o dobro do Supabase, sendo ideal para sistemas que armazenam grandes históricos de dados relacionais.',
    addedAt: '2026-02-01'
  },
  {
    id: 'appwrite',
    name: 'Appwrite Cloud',
    tagline: 'Plataforma Backend-as-a-Service open-source completa para Web, Mobile e Flutter',
    description: 'Alternativa aberta ao Firebase com um painel visual lindo. Inclui Autenticação de usuários, Bancos de Dados com queries complexas, Armazenamento de arquivos com pré-visualização, Serverless Functions e Webhooks em tempo real.',
    category: 'database',
    tags: ['BaaS', 'Firebase Alternative', 'Auth', 'Storage', 'Open Source'],
    websiteUrl: 'https://appwrite.io',
    docsUrl: 'https://appwrite.io/docs',
    pricingUrl: 'https://appwrite.io/pricing',
    requiresCreditCard: false,
    hasApi: true,
    starsRating: 4.8,
    isPopular: true,
    freeTierDetails: {
      quota: '2 GB de armazenamento, 75.000 execuções de functions/mês e 10GB de banda',
      highlights: [
        'Plano Free permanente sem cartão de crédito',
        'SDKs nativos para Web, React, Vue, Flutter, iOS, Android e Node',
        'Suporte a OAuth com Google, Apple, GitHub, Facebook e mais de 30 outros',
        'Gerenciamento de permissões e controle de acesso granular por documento'
      ],
      resetPeriod: 'Mensal'
    },
    tips: 'Se você desenvolve com Flutter ou React Native, a SDK do Appwrite tem uma das melhores integrações mobile da atualidade.',
    addedAt: '2026-02-02'
  },
  {
    id: 'dicebear-avatars',
    name: 'DiceBear Avatars',
    tagline: 'Geração de avatares SVG estilizados ilimitados e 100% gratuitos via URL',
    description: 'Biblioteca e microserviço HTTP que gera ilustrações de avatares únicas (estilos bottts, adventurer, lorelei, identicon, pixel-art e dezenas de outros) usando sementes de texto aleatórias.',
    category: 'image_media',
    tags: ['Avatares', 'SVG', '100% Grátis', 'Sem API Key', 'Design'],
    websiteUrl: 'https://dicebear.com',
    docsUrl: 'https://dicebear.com/how-to-use/http-api',
    pricingUrl: 'https://dicebear.com',
    requiresCreditCard: false,
    hasApi: true,
    starsRating: 5.0,
    isPopular: true,
    freeTierDetails: {
      quota: 'Ilimitado e 100% gratuito sem qualquer autenticação',
      highlights: [
        'Sem cadastro, sem chave de API e sem custos',
        'Gera gráficos vetoriais SVG leves e nítidos em qualquer resolução',
        'Suporta formatos SVG, PNG e JPG diretamente pela URL',
        'Dezenas de estilos artísticos criados por designers profissionais'
      ],
      resetPeriod: 'Ilimitado'
    },
    codeSnippet: {
      language: 'javascript',
      title: 'Gerando avatar a partir do nome ou email',
      code: `const username = "eullon";
// Basta colocar a URL no src de qualquer tag <img>!
const avatarUrl = \`https://api.dicebear.com/7.x/bottts/svg?seed=\${encodeURIComponent(username)}\`;

console.log("URL do avatar:", avatarUrl);`
    },
    tips: 'Use o email do usuário como semente (seed) para gerar sempre o mesmo avatar exclusivo para cada usuário no seu app.',
    addedAt: '2026-02-02'
  },
  {
    id: 'ocr-space',
    name: 'OCR.space API',
    tagline: 'Extração óptica de caracteres (OCR) para converter imagens e PDFs em texto',
    description: 'Serviço em nuvem de reconhecimento óptico de caracteres que analisa imagens (PNG, JPG) ou arquivos PDF escaneados e devolve o texto extraído linha por linha com suporte a dezenas de idiomas.',
    category: 'image_media',
    tags: ['OCR', 'PDF', 'Extração de Texto', 'Scan', 'Documentos'],
    websiteUrl: 'https://ocr.space',
    docsUrl: 'https://ocr.space/ocrapi',
    pricingUrl: 'https://ocr.space/ocrapi#pricing',
    requiresCreditCard: false,
    hasApi: true,
    starsRating: 4.7,
    freeTierDetails: {
      quota: '25.000 requisições de conversão gratuitas por mês',
      highlights: [
        'Chave gratuita emitida instantaneamente sem cartão de crédito',
        'Reconhece texto em português, inglês, espanhol e mais de 20 idiomas',
        'Extração automática de tabelas e recibos',
        'Suporte a arquivos de até 1 MB no tier gratuito'
      ],
      resetPeriod: 'Mensal'
    },
    tips: 'Excelente para automatizar leitura de notas fiscais, cupons e documentos digitalizados.',
    addedAt: '2026-02-03'
  },
  {
    id: 'ngrok',
    name: 'Ngrok',
    tagline: 'Túneis HTTPS seguros instantâneos para expor seu localhost para a internet',
    description: 'A ferramenta essencial para testar Webhooks (Stripe, Mercado Pago, WhatsApp, Telegram, GitHub) na sua máquina local sem precisar fazer deploy em servidores de produção.',
    category: 'hosting',
    tags: ['Túnel', 'Localhost', 'Webhooks', 'HTTPS', 'DevTools'],
    websiteUrl: 'https://ngrok.com',
    docsUrl: 'https://ngrok.com/docs',
    pricingUrl: 'https://ngrok.com/pricing',
    requiresCreditCard: false,
    hasApi: true,
    starsRating: 5.0,
    isPopular: true,
    isFeatured: true,
    freeTierDetails: {
      quota: '1 domínio estático gratuito permanente e 1GB de tráfego/mês',
      highlights: [
        'Conta gratuita sem cartão de crédito',
        'Fornece uma URL pública fixa com certificado SSL válido',
        'Painel web local para inspecionar requisições HTTP e replay de payloads',
        'Comando único para rodar: ngrok http 3000'
      ],
      resetPeriod: 'Mensal'
    },
    tips: 'Cadastre-se para resgatar seu subdomínio estático gratuito permanente e nunca mais precisar atualizar a URL do webhook toda vez que reiniciar.',
    addedAt: '2026-02-03'
  },
  {
    id: 'ipinfo-api',
    name: 'IPinfo.io API',
    tagline: 'Geolocalização de IP rápida e precisa com dados de cidade, país e provedor',
    description: 'Descubra a localização aproximada dos visitantes do seu site (país, estado, cidade, fuso horário e coordenadas) com latência abaixo de 5ms.',
    category: 'apis_data',
    tags: ['IP', 'Geolocalização', 'GeoIP', 'País', 'Segurança'],
    websiteUrl: 'https://ipinfo.io',
    docsUrl: 'https://ipinfo.io/developers',
    pricingUrl: 'https://ipinfo.io/pricing',
    requiresCreditCard: false,
    hasApi: true,
    starsRating: 4.8,
    freeTierDetails: {
      quota: '50.000 requisições por mês 100% gratuitas',
      highlights: [
        'Sem cartão para criar a conta e gerar o token de acesso',
        'Respostas em JSON com país, região, cidade, CEP aproximado e fuso',
        'Detecção de moeda local e operadora de telecomunicações'
      ],
      resetPeriod: 'Mensal'
    },
    codeSnippet: {
      language: 'javascript',
      title: 'Consultando geolocalização do IP visitante',
      code: `const response = await fetch("https://ipinfo.io/json?token=SEU_TOKEN");
const data = await response.json();

console.log(\`Visitante em \${data.city}, \${data.region} - \${data.country}\`);
console.log("Fuso horário:", data.timezone);`
    },
    tips: 'Ideal para pré-selecionar o idioma, moeda ou DDI padrão no formulário de checkout dos clientes.',
    addedAt: '2026-02-04'
  },
  {
    id: 'discord-webhooks',
    name: 'Discord Webhooks API',
    tagline: 'Envio de notificações com cards ricos em embeds 100% gratuito e ilimitado',
    description: 'A API de Webhooks do Discord permite enviar mensagens customizadas com embeds coloridos, títulos, links e imagens direto para qualquer canal de texto de um servidor do Discord.',
    category: 'email_messaging',
    tags: ['Webhooks', 'Discord', 'Alertas', '100% Grátis', 'Ilimitado'],
    websiteUrl: 'https://discord.com',
    docsUrl: 'https://discord.com/developers/docs/resources/webhook',
    pricingUrl: 'https://discord.com',
    requiresCreditCard: false,
    hasApi: true,
    starsRating: 4.9,
    isPopular: true,
    freeTierDetails: {
      quota: '100% gratuito e ilimitado (rate limit padrão de 30 requisições/minuto)',
      highlights: [
        'Sem cartão, sem custos e sem limite de mensagens',
        'Configuração em 3 cliques nas configurações do canal do Discord',
        'Suporte a Embeds visuais com cores HEX, botões e campos estruturados'
      ],
      resetPeriod: 'Ilimitado'
    },
    codeSnippet: {
      language: 'javascript',
      title: 'Disparando notificação bonita no Discord',
      code: `const webhookUrl = "https://discord.com/api/webhooks/SEU_WEBHOOK_URL";

await fetch(webhookUrl, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    username: "Bot de Alertas",
    embeds: [{
      title: "🎉 Nova Venda Confirmada!",
      description: "O cliente concluiu o pagamento via Pix.",
      color: 5763719, // Verde esmeralda
      fields: [
        { name: "Valor", value: "R$ 149,90", inline: true },
        { name: "Plano", value: "Pro Anual", inline: true }
      ]
    }]
  })
});`
    },
    tips: 'Você pode usar o Discord como um centro de notificações gratuito para logs de erro, vendas e novos cadastros da sua aplicação.',
    addedAt: '2026-02-04'
  },
  // --- NOVA RODADA DE APIS DE ALTO VALOR ---
  {
    id: 'assembly-ai',
    name: 'AssemblyAI',
    tagline: 'Transcrição de áudio para texto com IA, identificação de locutores e análise de sentimento',
    description: 'Modelos de Speech-to-Text de altíssima precisão treinados especificamente para transcrição de podcasts, reuniões, vídeos do YouTube e chamadas telefônicas com detecção automática de quem está falando (speaker diarization).',
    category: 'ai',
    tags: ['Transcrição', 'Speech to Text', 'Áudio', 'Diarização', 'IA'],
    websiteUrl: 'https://www.assemblyai.com',
    docsUrl: 'https://www.assemblyai.com/docs',
    pricingUrl: 'https://www.assemblyai.com/pricing',
    requiresCreditCard: false,
    hasApi: true,
    starsRating: 4.9,
    isPopular: true,
    isFeatured: true,
    freeTierDetails: {
      quota: '100 horas de transcrição gratuitas no cadastro de desenvolvedor',
      highlights: [
        'Sem cartão para iniciar a conta de desenvolvedor',
        'Modelo Conformer-2 com pontuação e acentuação precisas',
        'Identificação automática de múltiplos locutores (Speaker Diarization)',
        'SDK oficial para TypeScript/Node.js e Python com suporte a streaming'
      ],
      resetPeriod: 'Crédito Inicial',
      limitations: 'Crédito generoso para até 100 horas de processamento de áudio'
    },
    codeSnippet: {
      language: 'javascript',
      title: 'Transcrevendo áudio com AssemblyAI SDK',
      code: `import { AssemblyAI } from 'assemblyai';

const client = new AssemblyAI({ apiKey: process.env.ASSEMBLYAI_API_KEY });
const audioUrl = 'https://storage.googleapis.com/aai-web-samples/espn-bears.m4a';

const transcript = await client.transcripts.transcribe({
  audio: audioUrl,
  speaker_labels: true // Separa quem falou cada frase!
});

console.log("Texto transcrito:", transcript.text);`
    },
    tips: 'Excelente para criar ferramentas de resumo de reuniões do Meet/Zoom e legendas automáticas de vídeos.',
    addedAt: '2026-02-05'
  },
  {
    id: 'tavily-ai',
    name: 'Tavily Search API',
    tagline: 'O motor de busca na web projetado especificamente para agentes de IA e sistemas RAG',
    description: 'Diferente do Google ou Bing tradicional, a Tavily extrai, limpa e sumariza o conteúdo factual das páginas da internet, devolvendo respostas contextualizadas e sem poluição de anúncios para alimentar prompts de LLMs.',
    category: 'ai',
    tags: ['Busca Web', 'RAG', 'Agentes IA', 'LLM Search'],
    websiteUrl: 'https://tavily.com',
    docsUrl: 'https://docs.tavily.com',
    pricingUrl: 'https://tavily.com/#pricing',
    requiresCreditCard: false,
    hasApi: true,
    starsRating: 4.9,
    isPopular: true,
    freeTierDetails: {
      quota: '1.000 buscas na web por mês 100% gratuitas',
      highlights: [
        'Sem cartão de crédito necessário',
        'Busca em tempo real com limpeza de HTML, anúncios e rastreadores',
        'Retorna respostas prontas e trechos relevantes para RAG',
        'Integração oficial com LangChain, LlamaIndex e CrewAI'
      ],
      resetPeriod: 'Mensal'
    },
    codeSnippet: {
      language: 'javascript',
      title: 'Busca em tempo real na web para IA com Tavily',
      code: `const response = await fetch("https://api.tavily.com/search", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    api_key: process.env.TAVILY_API_KEY,
    query: "Quais são os lançamentos mais recentes de modelos de IA este mês?",
    search_depth: "basic",
    include_answer: true
  })
});
const data = await response.json();
console.log("Resposta resumida:", data.answer);
console.log("Fontes encontradas:", data.results);`
    },
    tips: 'A propriedade "include_answer: true" já retorna um resumo conciso pronto para ser injetado no contexto do seu chatbot.',
    addedAt: '2026-02-05'
  },
  {
    id: 'tidb-serverless',
    name: 'TiDB Cloud Serverless',
    tagline: 'MySQL distribuído elástico com 5 GB de armazenamento permanente gratuito',
    description: 'Banco de dados relacional distribuído 100% compatível com a sintaxe do MySQL, oferecendo suporte nativo tanto para transações ACID (OLTP) quanto consultas analíticas em tempo real (OLAP) em uma única plataforma.',
    category: 'database',
    tags: ['MySQL', 'SQL Distribuído', 'HTAP', 'Serverless', '5GB Grátis'],
    websiteUrl: 'https://www.pingcap.com/tidb-cloud',
    docsUrl: 'https://docs.pingcap.com/tidbcloud',
    pricingUrl: 'https://www.pingcap.com/pricing',
    requiresCreditCard: false,
    hasApi: true,
    starsRating: 4.8,
    freeTierDetails: {
      quota: '5 GB de dados e até 50 milhões de Request Units (RU) por mês',
      highlights: [
        'Totalmente compatível com clientes MySQL (mysql2, Prisma, Drizzle, TypeORM)',
        'Nunca expira e não pede cartão de crédito',
        'Escala automática para acomodar picos de tráfego',
        'Painel integrado para monitorar queries lentas'
      ],
      resetPeriod: 'Mensal'
    },
    tips: 'A melhor alternativa gratuita para quem já tem projetos baseados em MySQL e quer migrar para um banco distribuído sem alterar queries.',
    addedAt: '2026-02-06'
  },
  {
    id: 'qrcode-generator-api',
    name: 'QR Code Generator API',
    tagline: 'Geração instantânea de QR Codes customizados via URL direta sem token',
    description: 'Serviço HTTP ultra-rápido para renderizar QR Codes em formato SVG ou PNG simplesmente chamando uma URL com os parâmetros de dados, tamanho, cor e margem.',
    category: 'image_media',
    tags: ['QR Code', 'SVG', '100% Grátis', 'Sem API Key', 'Pix'],
    websiteUrl: 'https://goqr.me/api',
    docsUrl: 'https://goqr.me/api/doc',
    pricingUrl: 'https://goqr.me',
    requiresCreditCard: false,
    hasApi: true,
    starsRating: 4.8,
    freeTierDetails: {
      quota: 'Ilimitado e 100% gratuito sem qualquer autenticação',
      highlights: [
        'Sem cadastro e sem chave de API',
        'Suporte a formatos vetoriais SVG nítidos para impressão',
        'Parâmetros para customizar cores de fundo e do código',
        'Gera QR Code de pagamentos Pix Copia e Cola instantaneamente'
      ],
      resetPeriod: 'Ilimitado'
    },
    codeSnippet: {
      language: 'javascript',
      title: 'Gerando QR Code Pix ou Link em SVG',
      code: `const data = encodeURIComponent("https://seusite.com.br/checkout/pedido-123");
// Gera um QR Code de 300x300 em formato SVG transparente:
const qrUrl = \`https://api.qrserver.com/v1/create-qr-code/?size=300x300&format=svg&data=\${data}\`;

console.log("URL direta do QR Code:", qrUrl);`
    },
    tips: 'Use "format=svg" para obter um QR code que não perde qualidade mesmo se ampliado em impressões ou telas retina.',
    addedAt: '2026-02-06'
  },
  {
    id: 'koyeb-hosting',
    name: 'Koyeb',
    tagline: 'Hospedagem serverless de containers Docker e microsserviços com SSL automático',
    description: 'Plataforma em nuvem moderna para rodar APIs, backends em Node.js, Go, Python, Rust ou qualquer container Docker com deploy global, balanceamento de carga e certificados TLS.',
    category: 'hosting',
    tags: ['Docker', 'Containers', 'Backend', 'Serverless', 'Microserviços'],
    websiteUrl: 'https://www.koyeb.com',
    docsUrl: 'https://www.koyeb.com/docs',
    pricingUrl: 'https://www.koyeb.com/pricing',
    requiresCreditCard: false,
    hasApi: true,
    starsRating: 4.7,
    freeTierDetails: {
      quota: '2 serviços Nano gratuitos permanentes (512MB RAM, 0.1 vCPU cada)',
      highlights: [
        'Sem cartão para criar conta no tier Eco/Free',
        'Deploy contínuo via GitHub ou registro Docker público/privado',
        'SSL automático e domínios personalizados gratuitos',
        'Health checks nativos e restart automático em caso de crash'
      ],
      resetPeriod: 'Mensal'
    },
    tips: 'Diferente do Render que desliga apps após 15 minutos, instâncias no Koyeb permanecem ativas com tempo de resposta estável.',
    addedAt: '2026-02-07'
  },
  {
    id: 'dummyjson-api',
    name: 'DummyJSON',
    tagline: 'A API Mock REST mais completa para prototipagem de front-ends e e-commerces',
    description: 'Fornece endpoints REST ricos com suporte a CRUD completo (GET, POST, PUT, DELETE) para produtos com imagens reais, categorias, carrinhos de compras, usuários, comentários, posts e autenticação JWT mockada.',
    category: 'apis_data',
    tags: ['Mock API', 'E-commerce', 'Produtos', 'Auth Mock', 'Sem Token'],
    websiteUrl: 'https://dummyjson.com',
    docsUrl: 'https://dummyjson.com/docs',
    pricingUrl: 'https://dummyjson.com',
    requiresCreditCard: false,
    hasApi: true,
    starsRating: 5.0,
    isPopular: true,
    isFeatured: true,
    freeTierDetails: {
      quota: 'Totalmente gratuito e ilimitado sem cadastro',
      highlights: [
        'Sem chave de API e sem burocracia',
        'Mais de 100 produtos reais categorizados com preços, notas e fotos',
        'Simulação de login com geração de tokens JWT reais para testes de auth',
        'Suporte a paginação, buscas por termo e filtros por categoria'
      ],
      resetPeriod: 'Ilimitado'
    },
    codeSnippet: {
      language: 'javascript',
      title: 'Buscando produtos e simulando compra',
      code: `// Listar os primeiros 10 produtos de smartphones
const response = await fetch('https://dummyjson.com/products/category/smartphones?limit=10');
const data = await response.json();

console.log("Produtos encontrados:", data.products);`
    },
    tips: 'Perfeito para quando você precisa testar componentes de listagem, paginação, filtros e checkout sem ter que criar o backend primeiro.',
    addedAt: '2026-02-07'
  },
  {
    id: 'exchangerate-api',
    name: 'ExchangeRate-API',
    tagline: 'Cotações de moedas mundiais e conversão de câmbio em tempo real',
    description: 'API confiável de câmbio que fornece cotações diárias de mais de 160 moedas internacionais (USD, BRL, EUR, GBP, JPY) com latência baixa e uptime comprovado de 99.99%.',
    category: 'apis_data',
    tags: ['Câmbio', 'Moedas', 'Dólar', 'Finanças', 'Conversão'],
    websiteUrl: 'https://www.exchangerate-api.com',
    docsUrl: 'https://www.exchangerate-api.com/docs/overview',
    pricingUrl: 'https://www.exchangerate-api.com/#pricing',
    requiresCreditCard: false,
    hasApi: true,
    starsRating: 4.8,
    freeTierDetails: {
      quota: '1.500 requisições de conversão por mês no plano Free',
      highlights: [
        'Sem necessidade de cartão de crédito',
        'Suporte a 161 moedas globais incluindo o Real (BRL)',
        'Respostas compactas em JSON ideais para cache',
        'Atualização diária das taxas de câmbio oficiais'
      ],
      resetPeriod: 'Mensal'
    },
    codeSnippet: {
      language: 'javascript',
      title: 'Consultando cotação de USD para BRL',
      code: `const response = await fetch("https://v6.exchangerate-api.com/v6/SUA_KEY/pair/USD/BRL");
const data = await response.json();

console.log(\`1 Dólar equivale a R$ \${data.conversion_rate.toFixed(2)}\`);`
    },
    tips: 'Faça cache do resultado por 12 ou 24 horas no seu backend para economizar chamadas da cota mensal.',
    addedAt: '2026-02-08'
  },
  {
    id: 'poke-api',
    name: 'PokéAPI',
    tagline: 'A API pública mais querida da web para aprendizado e testes de frontend',
    description: 'Banco de dados GraphQL e REST completo sobre Pokémons, incluindo habilidades, tipos, estatísticas de combate, evoluções e sprites em alta definição. Perfeita para aprender consumo de APIs.',
    category: 'apis_data',
    tags: ['PokéAPI', 'Sprites', 'Open Data', 'REST', 'GraphQL'],
    websiteUrl: 'https://pokeapi.co',
    docsUrl: 'https://pokeapi.co/docs/v2',
    pricingUrl: 'https://pokeapi.co',
    requiresCreditCard: false,
    hasApi: true,
    starsRating: 5.0,
    isPopular: true,
    freeTierDetails: {
      quota: 'Totalmente gratuita, aberta e sem limites razoáveis de consumo',
      highlights: [
        'Sem cadastro, sem API key e sem cartão',
        'Mais de 1.000 monstrinhos com sprites animados e oficiais em alta resolução',
        'Suporte a paginação e consultas avançadas via GraphQL'
      ],
      resetPeriod: 'Ilimitado'
    },
    codeSnippet: {
      language: 'javascript',
      title: 'Consultando detalhes e imagem de um Pokémon',
      code: `const res = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
const pikachu = await res.json();

console.log("Nome:", pikachu.name);
console.log("Sprite:", pikachu.sprites.other["official-artwork"].front_default);`
    },
    tips: 'Use os sprites da propriedade "other.official-artwork" para ter ilustrações de alta resolução e com fundo transparente.',
    addedAt: '2026-02-08'
  }
];
