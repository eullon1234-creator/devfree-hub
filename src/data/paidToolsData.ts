import type { PaidToolItem, Category } from '../types/tool';

export const PAID_CATEGORIES: Category[] = [
  {
    id: 'all',
    name: 'Todas as APIs Pagas',
    description: 'Explore as melhores APIs comerciais e premium do mercado',
    icon: 'Layers',
    color: 'from-amber-500 to-yellow-600',
  },
  {
    id: 'ai',
    name: 'IA de Ponta',
    description: 'OpenAI, Anthropic Claude, Perplexity e modelos de ponta',
    icon: 'BrainCircuit',
    color: 'from-purple-500 to-pink-600',
  },
  {
    id: 'payments',
    name: 'Pagamentos & Pix',
    description: 'Stripe, Mercado Pago e Asaas para monetizar seu aplicativo',
    icon: 'CreditCard',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    id: 'email_messaging',
    name: 'WhatsApp & Telecom',
    description: 'Twilio e automações de WhatsApp para atendimento e notificações',
    icon: 'Mail',
    color: 'from-green-500 to-emerald-600',
  },
  {
    id: 'apis_data',
    name: 'Mapas & Busca',
    description: 'Google Maps Platform, Mapbox e Algolia Search',
    icon: 'Globe',
    color: 'from-blue-500 to-cyan-600',
  },
  {
    id: 'hosting',
    name: 'Nuvem & Servidores',
    description: 'DigitalOcean, VPS e instâncias de computação dedicada',
    icon: 'Cloud',
    color: 'from-orange-500 to-amber-600',
  },
];

export const PAID_TOOLS: PaidToolItem[] = [
  // --- INTELIGÊNCIA ARTIFICIAL ---
  {
    id: 'openai-api',
    name: 'OpenAI API',
    tagline: 'A API de IA mais famosa do mundo com modelos GPT-4o, o1, o3-mini e DALL-E 3',
    description: 'Acesso direto aos modelos de linguagem de ponta que alimentam o ChatGPT. Suporta chamadas de função (function calling), visão multimodal, geração de imagens DALL-E 3, transcrição com Whisper e embeddings de texto.',
    category: 'ai',
    tags: ['GPT-4o', 'o3-mini', 'OpenAI', 'Multimodal', 'DALL-E 3'],
    websiteUrl: 'https://openai.com/api',
    docsUrl: 'https://platform.openai.com/docs',
    pricingUrl: 'https://openai.com/api/pricing',
    pricingModel: 'pay_as_you_go',
    startingPrice: '$0.15 / 1M tokens',
    hasFreeTrialOrCredits: '$5.00 em créditos de teste para novas contas elegíveis',
    starsRating: 5.0,
    isPopular: true,
    isFeatured: true,
    pricingTiers: [
      {
        name: 'GPT-4o mini',
        price: '$0.15 entrada | $0.60 saída',
        period: 'por 1M tokens',
        description: 'Modelo ultrarrápido e econômico para 95% das tarefas cotidianas.',
        features: [
          'Janela de contexto de 128k tokens',
          'Suporte a texto e visão',
          'Mais de 60% mais barato que o antigo GPT-3.5 Turbo',
          'Velocidade média de 100+ tokens/segundo'
        ],
        isPopular: true
      },
      {
        name: 'GPT-4o (Omni)',
        price: '$2.50 entrada | $10.00 saída',
        period: 'por 1M tokens',
        description: 'Modelo topo de linha para raciocínio complexo, análise de código e visão avançada.',
        features: [
          'Máxima qualidade em raciocínio e matemática',
          'Janela de 128k tokens',
          'Suporte avançado a Structured Outputs (JSON estrito)'
        ]
      },
      {
        name: 'o3-mini (Reasoning)',
        price: '$1.10 entrada | $4.40 saída',
        period: 'por 1M tokens',
        description: 'Modelo de raciocínio profundo otimizado para matemática, ciência e programação.',
        features: [
          'Cadeia de pensamento interna (Chain of Thought)',
          'Performance comparável ao o1 com custo reduzido'
        ]
      }
    ],
    codeSnippet: {
      language: 'javascript',
      title: 'Chamada oficial OpenAI Node.js SDK',
      code: `import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const completion = await openai.chat.completions.create({
  model: "gpt-4o-mini",
  messages: [{ role: "user", content: "Escreva uma query SQL para selecionar os 5 produtos mais vendidos." }],
});

console.log(completion.choices[0].message.content);`
    },
    tips: 'Use "gpt-4o-mini" por padrão: ele entrega qualidade superior ao GPT-3.5 Turbo custando menos de 10 centavos de dólar para dezenas de milhares de palavras!',
    addedAt: '2026-02-10'
  },
  {
    id: 'anthropic-claude-api',
    name: 'Anthropic Claude API',
    tagline: 'O modelo número 1 em geração de código e raciocínio técnico: Claude 3.5 Sonnet',
    description: 'A API da Anthropic para a família Claude (Haiku, Sonnet e Opus). O Claude 3.5 Sonnet é amplamente considerado o padrão-ouro de engenharia de software, refatoração de código complexo e análise de dados com janela de 200.000 tokens.',
    category: 'ai',
    tags: ['Claude 3.5 Sonnet', 'Anthropic', 'Coding', '200k Context', 'Artifacts'],
    websiteUrl: 'https://anthropic.com',
    docsUrl: 'https://docs.anthropic.com',
    pricingUrl: 'https://www.anthropic.com/pricing#anthropic-api',
    pricingModel: 'pay_as_you_go',
    startingPrice: '$0.80 / 1M tokens',
    hasFreeTrialOrCredits: '$5.00 em créditos de teste ao verificar número de telefone',
    starsRating: 5.0,
    isPopular: true,
    isFeatured: true,
    pricingTiers: [
      {
        name: 'Claude 3.5 Haiku',
        price: '$0.80 entrada | $4.00 saída',
        period: 'por 1M tokens',
        description: 'Modelo ultraleve e veloz com respostas quase instantâneas.',
        features: [
          'Janela de 200.000 tokens',
          'Excelente para classificação, filtragem e resumos rápidos'
        ]
      },
      {
        name: 'Claude 3.5 Sonnet',
        price: '$3.00 entrada | $15.00 saída',
        period: 'por 1M tokens',
        description: 'O melhor modelo do mundo para desenvolvimento de software e lógica.',
        features: [
          'Líder em benchmarks de código (SWE-bench)',
          'Excelente escrita em linguagem natural e português',
          'Janela de 200k tokens com Prompt Caching (reduz em até 90% o custo de contexto longo)'
        ],
        isPopular: true
      }
    ],
    codeSnippet: {
      language: 'javascript',
      title: 'Chamada Anthropic SDK em TypeScript',
      code: `import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const message = await anthropic.messages.create({
  model: "claude-3-5-sonnet-20241022",
  max_tokens: 1024,
  messages: [{ role: "user", content: "Refatore esta função para TypeScript estrito..." }]
});

console.log(message.content[0].text);`
    },
    tips: 'Ative o recurso de Prompt Caching do Claude para pagar 90% mais barato ao reenviar contextos longos (como documentações inteiras de bibliotecas).',
    addedAt: '2026-02-10'
  },
  {
    id: 'perplexity-sonar-api',
    name: 'Perplexity API (Sonar)',
    tagline: 'LLMs conectados à internet em tempo real com citações precisas de links',
    description: 'Permite que seus aplicativos façam perguntas que exigem informações atualizadas de hoje na web, retornando respostas sintetizadas acompanhadas dos links exatos das fontes consultadas.',
    category: 'ai',
    tags: ['Web Search', 'Perplexity', 'Citações', 'Sonar', 'Tempo Real'],
    websiteUrl: 'https://www.perplexity.ai',
    docsUrl: 'https://docs.perplexity.ai',
    pricingUrl: 'https://docs.perplexity.ai/guides/pricing',
    pricingModel: 'pay_as_you_go',
    startingPrice: '$1.00 / 1M tokens + $5/1k buscas',
    hasFreeTrialOrCredits: '$5 de crédito mensal para assinantes do Perplexity Pro',
    starsRating: 4.9,
    pricingTiers: [
      {
        name: 'Sonar (8B)',
        price: '$1.00 / 1M tokens + $5 / 1.000 buscas',
        period: 'pay-as-you-go',
        description: 'Modelo de busca leve e rápido com acesso ao índice da web.',
        features: [
          'Pesquisa em tempo real na internet',
          'Retorna array com URLs das fontes para você exibir links',
          'Contexto de 128k tokens'
        ],
        isPopular: true
      },
      {
        name: 'Sonar Pro (70B)',
        price: '$3.00 / 1M entrada ($15 saída) + $5 / 1k buscas',
        period: 'pay-as-you-go',
        description: 'Modelo de 70B parâmetros para pesquisas complexas e comparativos aprofundados.',
        features: [
          'Análise de dezenas de fontes em simultâneo',
          'Maior capacidade de síntese e redação'
        ]
      }
    ],
    tips: 'Substitui a necessidade de você mesmo montar um web crawler + embedding pipeline para ter informações ao vivo no seu bot.',
    addedAt: '2026-02-11'
  },

  // --- PAGAMENTOS & FINANÇAS ---
  {
    id: 'stripe-payments',
    name: 'Stripe API',
    tagline: 'A infraestrutura de pagamentos mais completa do mundo para SaaS e e-commerce',
    description: 'A API padrão global para processamento de pagamentos em mais de 135 moedas. Oferece Checkout pronto com conversão otimizada, cobrança recorrente de assinaturas (Stripe Billing), prevenção a fraudes com IA (Radar) e split de pagamentos.',
    category: 'payments',
    tags: ['Pagamentos', 'SaaS', 'Assinaturas', 'Checkout', 'Cartão', 'Global'],
    websiteUrl: 'https://stripe.com/br',
    docsUrl: 'https://stripe.com/docs/api',
    pricingUrl: 'https://stripe.com/br/pricing',
    pricingModel: 'transaction_fee',
    startingPrice: '3.99% + R$ 0,39 / transação',
    hasFreeTrialOrCredits: 'Sem mensalidade, sem taxa de adesão, pague apenas quando vender',
    starsRating: 5.0,
    isPopular: true,
    isFeatured: true,
    pricingTiers: [
      {
        name: 'Pagamentos Nacionais (Brasil)',
        price: '3.99% + R$ 0,39',
        period: 'por transação aprovada',
        description: 'Vendas em cartão de crédito nacional e internacional no Brasil.',
        features: [
          'Checkout pré-construído e responsivo com 1 clique',
          'Proteção contra fraudes com Stripe Radar',
          'Sem custo fixo mensal nem taxa de cancelamento',
          'Repasse automático em 30 dias (ou antecipação configurável)'
        ],
        isPopular: true
      },
      {
        name: 'Stripe Billing (Assinaturas SaaS)',
        price: '0.5% a 0.8%',
        period: 'sobre o volume faturado',
        description: 'Gestão completa de planos mensais/anuais, upgrades e cancelamentos.',
        features: [
          'Portal do cliente pronto para troca de cartão',
          'Recuperação automática de cobranças falhas (Smart Retries)',
          'Faturamento proporcional automático (proration)'
        ]
      }
    ],
    codeSnippet: {
      language: 'javascript',
      title: 'Criando sessão de Checkout com Stripe Node SDK',
      code: `import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const session = await stripe.checkout.sessions.create({
  payment_method_types: ['card'],
  line_items: [{
    price_data: {
      currency: 'brl',
      product_data: { name: 'Assinatura Pro Anual' },
      unit_amount: 19900, // R$ 199,00 em centavos
    },
    quantity: 1,
  }],
  mode: 'payment',
  success_url: 'https://seusite.com/sucesso?session_id={CHECKOUT_SESSION_ID}',
  cancel_url: 'https://seusite.com/carrinho',
});

console.log("URL de pagamento:", session.url);`
    },
    tips: 'Use o Stripe Checkout ou Stripe Payment Element: você não precisa se preocupar com certificações PCI-DSS porque os dados sensíveis do cartão nunca tocam o seu servidor.',
    addedAt: '2026-02-11'
  },
  {
    id: 'mercado-pago-api',
    name: 'Mercado Pago API',
    tagline: 'A API mais popular da América Latina para Pix com liberação imediata e parcelamento',
    description: 'Plataforma oficial do ecossistema Mercado Livre. Fornece a melhor taxa e estabilidade para pagamentos via Pix no Brasil com liberação de saldo na hora, além de cartão de crédito e boleto.',
    category: 'payments',
    tags: ['Pix', 'Mercado Pago', 'Brasil', 'Cartão', 'Checkout Pro'],
    websiteUrl: 'https://www.mercadopago.com.br/developers',
    docsUrl: 'https://www.mercadopago.com.br/developers/pt/reference',
    pricingUrl: 'https://www.mercadopago.com.br/ajuda/custo-receber-pagamentos_220',
    pricingModel: 'transaction_fee',
    startingPrice: '0.99% por Pix',
    hasFreeTrialOrCredits: 'Sem custo de mensalidade nem taxa de abertura',
    starsRating: 4.8,
    isPopular: true,
    isFeatured: true,
    pricingTiers: [
      {
        name: 'Pix (Dinheiro na Hora)',
        price: '0.99%',
        period: 'por transação recebida',
        description: 'A menor taxa para receber pagamentos instantâneos.',
        features: [
          'Geração de QR Code e Pix Copia e Cola via API em milissegundos',
          'Notificação imediata via Webhook assim que o cliente paga',
          'Saldo disponível na hora na conta Mercado Pago'
        ],
        isPopular: true
      },
      {
        name: 'Cartão de Crédito',
        price: '3.99% a 4.99%',
        period: 'conforme prazo de recebimento',
        description: 'Recebimento na hora (4.99%), em 14 dias (4.39%) ou 30 dias (3.99%).',
        features: [
          'Parcelamento em até 12x com repasse integral',
          'Checkout transparente com campos customizáveis'
        ]
      }
    ],
    codeSnippet: {
      language: 'javascript',
      title: 'Gerando cobrança Pix instantânea via Mercado Pago SDK',
      code: `import { MercadoPagoConfig, Payment } from 'mercadopago';

const client = new MercadoPagoConfig({ accessToken: process.env.MP_ACCESS_TOKEN });
const payment = new Payment(client);

const result = await payment.create({
  body: {
    transaction_amount: 50.00,
    description: 'Créditos no App',
    payment_method_id: 'pix',
    payer: { email: 'cliente@gmail.com' }
  }
});

const qrCodeBase64 = result.point_of_interaction.transaction_data.qr_code_base64;
const pixCopiaECola = result.point_of_interaction.transaction_data.qr_code;
console.log("Código Pix:", pixCopiaECola);`
    },
    tips: 'Para lojas ou SaaS com público brasileiro, oferecer Pix via Mercado Pago aumenta a taxa de conversão em até 40% em relação a boletos tradicionais.',
    addedAt: '2026-02-12'
  },
  {
    id: 'asaas-api',
    name: 'Asaas API',
    tagline: 'A conta digital e API líder de automação de cobranças recorrentes, Pix e boletos no Brasil',
    description: 'O Asaas é a plataforma preferida dos desenvolvedores brasileiros para emissão de cobranças automáticas com envio de lembretes por WhatsApp, SMS e email, geração de carnês, boletos e Pix.',
    category: 'payments',
    tags: ['Asaas', 'Boletos', 'Pix', 'Recorrência', 'Notificações WhatsApp'],
    websiteUrl: 'https://www.asaas.com',
    docsUrl: 'https://docs.asaas.com',
    pricingUrl: 'https://www.asaas.com/precos',
    pricingModel: 'transaction_fee',
    startingPrice: 'R$ 0,99 por Pix / R$ 1,99 por Boleto',
    hasFreeTrialOrCredits: 'Zero mensalidade, só paga tarifa após o cliente liquidar o pagamento',
    starsRating: 4.8,
    isPopular: true,
    pricingTiers: [
      {
        name: 'Pix Asaas',
        price: 'R$ 0,99 a R$ 1,99',
        period: 'fixo por cobrança recebida',
        description: 'Tarifa fixa em reais independente do valor do pagamento.',
        features: [
          'Preço fixo excelente para tíquetes médios e altos',
          'Notificação automática do cliente no WhatsApp'
        ],
        isPopular: true
      },
      {
        name: 'Boleto Bancário',
        price: 'R$ 1,99',
        period: 'por boleto compensado',
        description: 'Emissão, alteração e cancelamento gratuitos, cobrança apenas na liquidação.',
        features: [
          'Boleto com QR Code Pix integrado no mesmo documento',
          'Régua de cobrança automática por email e SMS'
        ]
      }
    ],
    tips: 'Por ter taxa fixa em reais (ex: R$ 0,99), o Asaas é muito mais vantajoso que o percentual de 1% do Mercado Pago para vendas acima de R$ 100!',
    addedAt: '2026-02-12'
  },

  // --- COMUNICAÇÃO & WHATSAPP ---
  {
    id: 'twilio-api',
    name: 'Twilio',
    tagline: 'A maior plataforma de telecomunicações do mundo para SMS, WhatsApp oficial e chamadas de voz',
    description: 'A API padrão global para envio de códigos de verificação 2FA por SMS, mensagens transacionais pelo WhatsApp Business API oficial, chamadas de áudio VoIP e números de telefone virtuais em centenas de países.',
    category: 'email_messaging',
    tags: ['Twilio', 'SMS', 'WhatsApp Oficial', '2FA', 'Voz', 'Telecom'],
    websiteUrl: 'https://www.twilio.com',
    docsUrl: 'https://www.twilio.com/docs',
    pricingUrl: 'https://www.twilio.com/en-us/pricing',
    pricingModel: 'pay_as_you_go',
    startingPrice: '$0.0079 / SMS ou $0.005 / WhatsApp',
    hasFreeTrialOrCredits: '$15.00 em créditos de teste ao criar conta de desenvolvedor',
    starsRating: 4.9,
    isPopular: true,
    pricingTiers: [
      {
        name: 'SMS Transacional (Brasil)',
        price: '$0.024 a $0.035',
        period: 'por SMS entregue',
        description: 'Envio de códigos OTP de segurança e notificações urgentes.',
        features: [
          'Entregabilidade de 99.9% com rotas prioritárias de operadoras',
          'Suporte a Verify API (gestão completa de verificação de telefone)'
        ]
      },
      {
        name: 'WhatsApp Business API Oficial',
        price: '$0.005 taxa Twilio + taxa Meta',
        period: 'por conversa iniciada',
        description: 'Canal oficial e verificado sem risco de banimento de número.',
        features: [
          'Templates aprovados pela Meta',
          'Atendimento humano e bots com inteligência artificial'
        ],
        isPopular: true
      }
    ],
    codeSnippet: {
      language: 'javascript',
      title: 'Enviando SMS via Twilio Node.js SDK',
      code: `import twilio from 'twilio';

const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

const message = await client.messages.create({
  body: 'Seu código de confirmação é: 849201',
  from: '+12055550100', // Seu número Twilio
  to: '+5511999998888'
});

console.log("Status do envio:", message.status);`
    },
    tips: 'Use a API "Twilio Verify" em vez de enviar SMS puro para 2FA: ela faz o fallback automático para chamada de voz se o SMS falhar!',
    addedAt: '2026-02-13'
  },
  {
    id: 'z-api-whatsapp',
    name: 'Z-API (WhatsApp Automation)',
    tagline: 'A API de WhatsApp não-oficial mais estável do Brasil para envio de mensagens ilimitadas',
    description: 'Permite conectar qualquer número de WhatsApp via leitura de QR Code em segundos e disparar mensagens de texto, áudios gravados na hora (com efeito de áudio enviado pelo microfone), imagens, botões e webhooks para receber respostas.',
    category: 'email_messaging',
    tags: ['WhatsApp', 'Z-API', 'Chatbot', 'Automação', 'Ilimitado'],
    websiteUrl: 'https://z-api.io',
    docsUrl: 'https://developer.z-api.io',
    pricingUrl: 'https://z-api.io/#precos',
    pricingModel: 'subscription',
    startingPrice: 'R$ 99,00 / mês',
    hasFreeTrialOrCredits: '3 dias de teste grátis por instância',
    starsRating: 4.8,
    isPopular: true,
    pricingTiers: [
      {
        name: 'Instância Padrão',
        price: 'R$ 99,00',
        period: '/mês por número conectado',
        description: 'Disparos ilimitados para qualquer número sem custo por mensagem.',
        features: [
          'Envio ilimitado de mensagens de texto, imagens e PDFs',
          'Simulação de digitação e gravação de áudio humano',
          'Webhooks em tempo real de mensagens recebidas e status de entrega',
          'Suporte a grupos de WhatsApp'
        ],
        isPopular: true
      }
    ],
    tips: 'Ideal para notificações transacionais rápidas (ex: "Seu pedido saiu para entrega") com custo fixo previsível sem pagar tarifas por conversa da Meta.',
    addedAt: '2026-02-13'
  },

  // --- GEOLOCALIZAÇÃO & MAPAS ---
  {
    id: 'google-maps-platform',
    name: 'Google Maps Platform',
    tagline: 'O padrão definitivo de mapas, rotas, autocomplete de endereços e visualização Street View',
    description: 'A base de dados de localização mais rica e precisa do planeta. Inclui APIs de Geocoding (converter CEP/endereço em latitude/longitude), Places Autocomplete (barra de pesquisa de endereços estilo Uber), Directions (cálculo de rotas de trânsito) e mapas interativos.',
    category: 'apis_data',
    tags: ['Google Maps', 'Geocoding', 'Places API', 'Rotas', 'Endereços'],
    websiteUrl: 'https://mapsplatform.google.com',
    docsUrl: 'https://developers.google.com/maps/documentation',
    pricingUrl: 'https://mapsplatform.google.com/pricing',
    pricingModel: 'pay_as_you_go',
    startingPrice: '$200 de crédito grátis/mês (depois $5/1k req)',
    hasFreeTrialOrCredits: 'Crédito recorrente mensal de $200,00 dólares sem custo!',
    starsRating: 5.0,
    isPopular: true,
    isFeatured: true,
    pricingTiers: [
      {
        name: 'Crédito Mensal Gratuito',
        price: '$0.00 (até $200 de consumo)',
        period: 'todo mês',
        description: 'A Google oferece $200 todo mês para cada conta de faturamento.',
        features: [
          'Equivale a até 28.000 carregamentos de mapa dinâmico',
          'Até 40.000 chamadas de Geocoding gratuitas todo mês',
          'Requer cadastro de cartão de crédito para ativar'
        ],
        isPopular: true
      },
      {
        name: 'Places API (Autocomplete de Endereços)',
        price: '$2.83 a $17.00',
        period: 'por 1.000 sessões',
        description: 'Autocompletar endereços conforme o usuário digita.',
        features: [
          'Preenchimento de rua, bairro, cidade e CEP em 1 clique',
          'Prevenção de erros de digitação em entregas de frete'
        ]
      }
    ],
    codeSnippet: {
      language: 'javascript',
      title: 'Geocodificando um endereço com Google Maps API',
      code: `const address = encodeURIComponent("Av. Paulista, 1000, São Paulo - SP");
const apiKey = process.env.GOOGLE_MAPS_API_KEY;

const response = await fetch(\`https://maps.googleapis.com/maps/api/geocode/json?address=\${address}&key=\${apiKey}\`);
const data = await response.json();

const location = data.results[0].geometry.location;
console.log("Coordenadas:", location.lat, location.lng);`
    },
    tips: 'Como o Google dá $200 de crédito renovado TODO MÊS, para 90% dos pequenos aplicativos e sites o serviço acaba saindo totalmente de graça!',
    addedAt: '2026-02-14'
  },
  {
    id: 'mapbox-api',
    name: 'Mapbox',
    tagline: 'Mapas vetoriais ultrarrápidos e totalmente customizáveis com estilos visuais incríveis',
    description: 'A alternativa favorita ao Google Maps para quem valoriza design moderno e controle total da folha de estilo dos mapas (Mapbox Studio), usada por gigantes como Strava, Shopify e The Weather Channel.',
    category: 'apis_data',
    tags: ['Mapbox', 'Mapas Vetoriais', 'Design', 'Customização', 'Navegação'],
    websiteUrl: 'https://www.mapbox.com',
    docsUrl: 'https://docs.mapbox.com',
    pricingUrl: 'https://www.mapbox.com/pricing',
    pricingModel: 'pay_as_you_go',
    startingPrice: '$5.00 / 1k loads (após 50k grátis)',
    hasFreeTrialOrCredits: '50.000 carregamentos mensais de mapa 100% gratuitos',
    starsRating: 4.8,
    isPopular: true,
    pricingTiers: [
      {
        name: 'Mapbox GL JS (Web Maps)',
        price: 'Grátis até 50k / depois $5 por 1k',
        period: 'mensal',
        description: 'Renderização em WebGL com alta taxa de quadros e estilo customizável.',
        features: [
          'Cota gratuita de 50.000 visualizações todo mês',
          'Estilos visuais escuros, monocromáticos, 3D e satélite'
        ],
        isPopular: true
      }
    ],
    tips: 'Se você quer um mapa com tema Dark personalizado que combine exatamente com a paleta de cores do seu app, o Mapbox Studio é imbatível.',
    addedAt: '2026-02-14'
  },

  // --- INFRAESTRUTURA & NUVEM ---
  {
    id: 'digitalocean-cloud',
    name: 'DigitalOcean',
    tagline: 'Servidores virtuais (VPS), bancos gerenciados e Kubernetes simples e acessíveis',
    description: 'A nuvem favorita dos desenvolvedores para hospedar backends, Docker, bancos PostgreSQL/MySQL e microsserviços com faturamento previsível em dólares sem surpresas na fatura.',
    category: 'hosting',
    tags: ['VPS', 'Droplets', 'Linux', 'PostgreSQL', 'Cloud'],
    websiteUrl: 'https://www.digitalocean.com',
    docsUrl: 'https://docs.digitalocean.com',
    pricingUrl: 'https://www.digitalocean.com/pricing',
    pricingModel: 'subscription',
    startingPrice: '$4.00 a $6.00 / mês',
    hasFreeTrialOrCredits: '$200 em créditos válidos por 60 dias para novas contas',
    starsRating: 4.9,
    isPopular: true,
    isFeatured: true,
    pricingTiers: [
      {
        name: 'Droplet Básico (VPS)',
        price: '$4.00 a $6.00',
        period: '/mês',
        description: 'Servidor virtual Linux com IP público dedicado e acesso root total via SSH.',
        features: [
          '1 vCPU e 1 GB de memória RAM',
          '25 GB de disco NVMe ultrarrápido',
          '1.000 GB (1 TB) de transferência mensal inclusa'
        ],
        isPopular: true
      },
      {
        name: 'Managed Database (Postgres/Redis)',
        price: 'A partir de $15.00',
        period: '/mês',
        description: 'Banco de dados com backups diários automáticos e updates de segurança.',
        features: [
          'Configuração em 1 clique',
          'Connection pooling automático com PgBouncer'
        ]
      }
    ],
    tips: 'Aproveite os $200 de crédito promocional para novos usuários para testar servidores potentes sem gastar nada durante 2 meses.',
    addedAt: '2026-02-14'
  },
  {
    id: 'algolia-search',
    name: 'Algolia Search API',
    tagline: 'Busca instantânea como serviço com autocomplete, tolerância a erros e IA',
    description: 'A API de busca em tempo real mais veloz da internet. Devolve resultados enquanto o usuário digita cada letra (search-as-you-type) em menos de 10 milissegundos, com tratamento inteligente de erros de digitação e filtros facetados.',
    category: 'apis_data',
    tags: ['Search API', 'Autocomplete', 'Ultra Rápido', 'E-commerce', 'Algolia'],
    websiteUrl: 'https://www.algolia.com',
    docsUrl: 'https://www.algolia.com/doc',
    pricingUrl: 'https://www.algolia.com/pricing',
    pricingModel: 'pay_as_you_go',
    startingPrice: '$0.50 / 1.000 buscas (após 10k grátis)',
    hasFreeTrialOrCredits: '10.000 requisições de busca gratuitas todo mês',
    starsRating: 4.9,
    pricingTiers: [
      {
        name: 'Plano Build (Grátis)',
        price: '$0.00 (até 10.000 buscas/mês)',
        period: 'mensal',
        description: 'Tier gratuito permanente para protótipos e sites pequenos.',
        features: [
          'Até 10.000 registros indexados',
          'Componentes prontos com InstantSearch para React e Vue'
        ],
        isPopular: true
      },
      {
        name: 'Plano Grow',
        price: '$0.50 por 1.000 buscas extras',
        period: 'pay-as-you-go',
        description: 'Pague apenas pelo excedente sem custos fixos mínimos.',
        features: [
          'Analytics de termos mais buscados e termos sem resultado',
          'Regras de relevância customizáveis'
        ]
      }
    ],
    tips: 'Use as bibliotecas InstantSearch da Algolia: você ganha uma barra de busca com autocomplete e filtros de categoria pronta em menos de 30 linhas de React.',
    addedAt: '2026-02-14'
  }
];
