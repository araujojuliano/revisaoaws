const DOMAIN_1_QUESTIONS = [
  // Domínio 1: Conceitos de Nuvem (48 Questões)
  { id: 1, domain: 'D1', domainName: 'Conceitos de Nuvem', text: 'Qual benefício financeiro a nuvem AWS oferece em comparação com data centers tradicionais?', options: ['Substitui despesas operacionais por custos fixos', 'Substitui despesas de capital iniciais (CapEx) por despesas operacionais variáveis (OpEx)', 'Garante custos fixos anuais independentemente do uso', 'Elimina totalmente custos com pessoal de TI'], correct: 'B', exp: 'A nuvem substitui investimentos pesados iniciais em infraestrutura (CapEx) por custos variáveis conforme o consumo (OpEx).' },
  { id: 2, domain: 'D1', domainName: 'Conceitos de Nuvem', text: 'O conceito de acoplamento fraco (loose coupling) em arquitetura de nuvem tem como objetivo principal:', options: ['Garantir que todas as instâncias rodem no mesmo hardware', 'Garantir que a falha de um componente não afete diretamente os outros', 'Aumentar a dependência síncrona entre bancos de dados', 'Reduzir a velocidade de processamento'], correct: 'B', exp: 'O acoplamento fraco isola componentes para prevenir falhas em cascata no sistema.' },
  { id: 3, domain: 'D1', domainName: 'Conceitos de Nuvem', text: 'Para garantir resiliência contra a falha de um data center inteiro, uma empresa deve implantar recursos em:', options: ['Múltiplas sub-redes em uma única Zona de Disponibilidade', 'Múltiplas Zonas de Disponibilidade (AZs) na mesma Região', 'Uma única Edge Location global', 'Servidores on-premises locais'], correct: 'B', exp: 'AZs são data centers fisicamente isolados em uma Região AWS. Múltiplas AZs garantem alta disponibilidade.' },
  { id: 4, domain: 'D1', domainName: 'Conceitos de Nuvem', text: 'Qual pilar do AWS Well-Architected Framework foca na execução e monitoramento de sistemas para entregar valor ao negócio?', options: ['Segurança', 'Confiabilidade', 'Excelência Operacional', 'Eficiência de Performance'], correct: 'C', exp: 'O pilar de Excelência Operacional foca em rodar e monitorar sistemas, além de melhorar continuamente os processos.' },
  { id: 5, domain: 'D1', domainName: 'Conceitos de Nuvem', text: 'Uma aplicação recebe picos imprevisíveis de tráfego. Qual conceito da nuvem atende automaticamente essa variação de demanda?', options: ['Alta Disponibilidade', 'Tolerância a Falhas', 'Elasticidade', 'Geolocalização'], correct: 'C', exp: 'Elasticidade é a capacidade de provisionar ou remover recursos dinamicamente de acordo com a demanda.' },
  { id: 6, domain: 'D1', domainName: 'Conceitos de Nuvem', text: 'Como a AWS alcança "Economias de Escala" que beneficiam diretamente os clientes?', options: ['Agregando o uso de centenas de milhares de clientes para obter preços menores', 'Cobrando taxas fixas de manutenção', 'Obrigando contratos de longo prazo', 'Oferecendo hardware sob medida'], correct: 'A', exp: 'O uso massivo por milhares de clientes permite à AWS obter custos menores de fornecedores e repassar em descontos.' },
  { id: 7, domain: 'D1', domainName: 'Conceitos de Nuvem', text: 'Para atender usuários finais globais com a menor latência possível, uma empresa deve aproveitar:', options: ['Apenas uma Região AWS com instâncias maiores', 'Servidores dedicados on-premises', 'Presença global via Regiões AWS e Edge Locations (Amazon CloudFront)', 'Múltiplas contas do AWS Organizations'], correct: 'C', exp: 'Edge locations entregam conteúdo próximo aos usuários com baixíssima latência.' },
  { id: 8, domain: 'D1', domainName: 'Conceitos de Nuvem', text: 'A "Agilidade" na nuvem AWS refere-se principalmente a:', options: ['Velocidade da conexão física de rede', 'Redução do tempo para provisionar recursos de semanas para minutos', 'Migração de banco de dados sem nenhum downtime', 'Suporte técnico em tempo real'], correct: 'B', exp: 'Agilidade permite testar e lançar recursos rapidamente com poucos cliques ou chamadas de API.' },
  { id: 9, domain: 'D1', domainName: 'Conceitos de Nuvem', text: 'Um modelo de implantação em nuvem que conecta infraestrutura local (on-premises) com a nuvem AWS é chamado de:', options: ['Nuvem Privada Pura', 'Nuvem Híbrida', 'Nuvem Comunitária', 'Nuvem Multitenant'], correct: 'B', exp: 'A nuvem híbrida integra ambientes locais existentes com os serviços em nuvem pública da AWS.' },
  { id: 10, domain: 'D1', domainName: 'Conceitos de Nuvem', text: 'Qual pilar do Well-Architected foca no uso eficiente de recursos de computação conforme as tecnologias evoluem?', options: ['Otimização de Custos', 'Sustentabilidade', 'Confiabilidade', 'Eficiência de Performance'], correct: 'D', exp: 'Eficiência de Performance envolve escolher os tipos de recursos corretos e otimizá-los continuamente.' },
  { id: 11, domain: 'D1', domainName: 'Conceitos de Nuvem', text: 'A estratégia de migração "Rehosting" também é conhecida popularmente como:', options: ['Refactoring', 'Lift-and-Shift', 'Replatforming', 'Retiring'], correct: 'B', exp: 'Rehosting (Lift-and-Shift) move a aplicação para a nuvem sem alterar seu código ou arquitetura.' },
  { id: 12, domain: 'D1', domainName: 'Conceitos de Nuvem', text: 'Qual é a principal função das Edge Locations na infraestrutura global da AWS?', options: ['Executar bancos de dados primários', 'Hospedar instâncias EC2 de grande porte', 'Entregar conteúdo em cache com baixa latência através do CloudFront', 'Armazenar backups frios de longa duração'], correct: 'C', exp: 'Edge locations fazem o armazenamento em cache de conteúdo estático/dinâmico para usuários globais.' },
  { id: 13, domain: 'D1', domainName: 'Conceitos de Nuvem', text: 'Qual pilar recente do Well-Architected foca em minimizar o impacto ambiental das cargas de trabalho na nuvem?', options: ['Excelência Operacional', 'Sustentabilidade', 'Otimização de Custos', 'Segurança'], correct: 'B', exp: 'O pilar de Sustentabilidade foca em reduzir emissões de carbono e maximizar o aproveitamento energético.' },
  { id: 14, domain: 'D1', domainName: 'Conceitos de Nuvem', text: 'Como a AWS reduz o TCO (Custo Total de Posse) para empresas?', options: ['Eliminando a necessidade de gerenciar data centers físicos, energia e hardware', 'Fornecendo licenças de software gratuitas para todos os sistemas', 'Substituindo programadores por automação', 'Fornecendo conexão de internet residencial'], correct: 'A', exp: 'Ao terceirizar data center, refrigeração, segurança física e servidores, o TCO reduz drasticamente.' },
  { id: 15, domain: 'D1', domainName: 'Conceitos de Nuvem', text: 'A diferença crucial entre Escalabilidade e Elasticidade é:', options: ['Escalabilidade lida com crescimento de carga; Elasticidade ajusta recursos dinamicamente para cima e para baixo conforme a demanda varia', 'Elasticidade é apenas para banco de dados', 'Escalabilidade exige intervenção manual obrigatória', 'Ambas significam exatamente a mesma coisa sem diferença'], correct: 'A', exp: 'Escalabilidade é a capacidade de crescer; Elasticidade é a capacidade de se contrair e expandir sob demanda.' },
  { id: 16, domain: 'D1', domainName: 'Conceitos de Nuvem', text: 'Qual vantagem da nuvem permite a um desenvolvedor criar um ambiente de teste temporário sem comprometer orçamento anual?', options: ['Pagamento pelo que usa (Pay-as-you-go)', 'Acesso de administrador Root ilimitado', 'Contratos de suporte enterprise pré-pagos', 'Instâncias reservadas de 3 anos'], correct: 'A', exp: 'O modelo de precificação conforme o uso permite subir instâncias por poucas horas e deletá-las pagando centavos.' },
  { id: 17, domain: 'D1', domainName: 'Conceitos de Nuvem', text: 'O que define o conceito de "Tolerância a Falhas" (Fault Tolerance) em uma arquitetura de nuvem?', options: ['A capacidade de escalar recursos verticalmente', 'A capacidade de um sistema permanecer totalmente operacional mesmo se um ou mais de seus componentes falharem', 'A velocidade com que a infraestrutura é provisionada', 'A transferência automática de custos operacionais para parceiros'], correct: 'B', exp: 'Tolerância a falhas é a capacidade de operar sem interrupção (zero downtime) quando ocorrem falhas de hardware ou software.' },
  { id: 18, domain: 'D1', domainName: 'Conceitos de Nuvem', text: 'Em termos de infraestrutura global da AWS, o que é uma Região (Region)?', options: ['Um único data center isolado', 'Um conjunto de Edge Locations no mesmo país', 'Uma localização física no mundo composta por múltiplas Zonas de Disponibilidade isoladas e redundantes', 'Uma rede privada virtual conectando a empresa à AWS'], correct: 'C', exp: 'Uma Região é uma área geográfica que contém duas ou mais Zonas de Disponibilidade.' },
  { id: 19, domain: 'D1', domainName: 'Conceitos de Nuvem', text: 'Qual das opções abaixo é um exemplo de serviço gerenciado na categoria de Software as a Service (SaaS)?', options: ['Amazon EC2', 'AWS Elastic Beanstalk', 'Amazon SageMaker', 'Amazon WorkMail'], correct: 'D', exp: 'SaaS fornece um produto completo administrado pelo provedor. Amazon WorkMail é um serviço de e-mail pronto para uso do usuário final.' },
  { id: 20, domain: 'D1', domainName: 'Conceitos de Nuvem', text: 'Qual é a responsabilidade do cliente no modelo Infrastructure as a Service (IaaS) na AWS?', options: ['Gerenciar a infraestrutura física dos servidores', 'Instalar e manter o sistema operacional convidado (Guest OS)', 'Gerenciar a camada de virtualização (Hypervisor)', 'Prover resfriamento para os data centers'], correct: 'B', exp: 'No modelo IaaS, como o EC2, o cliente tem controle e responsabilidade total sobre o sistema operacional e a rede lógica da instância.' },
  { id: 21, domain: 'D1', domainName: 'Conceitos de Nuvem', text: 'O que a AWS recomenda para arquitetar sistemas na nuvem visando prevenir falhas em um único ponto (Single Point of Failure)?', options: ['Usar a maior instância EC2 disponível', 'Distribuir a carga de trabalho em múltiplas Zonas de Disponibilidade', 'Armazenar todos os dados no EBS Root Volume', 'Criar múltiplas contas AWS para a mesma aplicação'], correct: 'B', exp: 'Distribuir sistemas em múltiplas AZs garante que a falha de um data center não derrube a aplicação.' },
  { id: 22, domain: 'D1', domainName: 'Conceitos de Nuvem', text: 'A migração do modelo de banco de dados on-premises para o Amazon RDS ilustra qual conceito de computação em nuvem?', options: ['Infrastructure as a Service (IaaS)', 'Platform as a Service (PaaS)', 'Software as a Service (SaaS)', 'Function as a Service (FaaS)'], correct: 'B', exp: 'O Amazon RDS abstrai o gerenciamento do SO e as atualizações do motor do banco, funcionando como PaaS.' },
  { id: 23, domain: 'D1', domainName: 'Conceitos de Nuvem', text: 'Como a nuvem AWS apoia a estratégia de "Implantar globalmente em minutos"?', options: ['A AWS envia servidores físicos rapidamente para as filiais da empresa', 'Os clientes podem usar instâncias EC2 em múltiplas Regiões ao redor do mundo com apenas alguns cliques', 'A AWS automatiza a tradução de idiomas do código fonte', 'Os dados são replicados compulsoriamente para todos os países simultaneamente'], correct: 'B', exp: 'A presença global da AWS permite implantar infraestrutura em diversas regiões geográficas em minutos via API ou console.' },
  { id: 24, domain: 'D1', domainName: 'Conceitos de Nuvem', text: 'No AWS Well-Architected Framework, a capacidade de se recuperar rapidamente de falhas operacionais e estruturais está ligada a qual pilar?', options: ['Segurança', 'Excelência Operacional', 'Otimização de Custos', 'Confiabilidade'], correct: 'D', exp: 'O pilar de Confiabilidade (Reliability) abrange a capacidade de uma carga de trabalho funcionar corretamente e se recuperar de falhas.' },
  { id: 25, domain: 'D1', domainName: 'Conceitos de Nuvem', text: 'Qual das alternativas descreve melhor uma característica de Escalabilidade Vertical?', options: ['Adicionar mais instâncias EC2 idênticas para dividir a carga de tráfego', 'Aumentar as especificações de CPU e RAM de uma única instância EC2 existente', 'Distribuir requisições HTTP entre múltiplas regiões', 'Mover um banco de dados relacional para um modelo NoSQL'], correct: 'B', exp: 'Escalar verticalmente (Scale Up) significa aumentar o tamanho e os recursos (CPU/RAM) de uma máquina individual.' },
  { id: 26, domain: 'D1', domainName: 'Conceitos de Nuvem', text: 'O que o conceito "Right-sizing" (Dimensionamento correto) busca atingir na nuvem?', options: ['Configurar permissões de IAM para o menor privilégio', 'Escolher o serviço com o recurso computacional exato para as necessidades da aplicação, com o menor custo possível', 'Garantir que a aplicação rode em servidores dedicados', 'Utilizar sempre o plano de suporte Enterprise'], correct: 'B', exp: 'Right-sizing é o processo de combinar tipos e tamanhos de instâncias com as necessidades de desempenho e capacidade ao menor custo.' },
  { id: 27, domain: 'D1', domainName: 'Conceitos de Nuvem', text: 'O benefício "Pare de adivinhar a capacidade" significa que os clientes da AWS:', options: ['Não precisam provisionar excesso de hardware para lidar com picos sazonais de demanda', 'Devem sempre comprar hosts dedicados antecipadamente', 'Podem usar instâncias EC2 gratuitamente de forma ilimitada', 'Não precisam monitorar seus logs de segurança'], correct: 'A', exp: 'A nuvem permite escalar recursos sob demanda, eliminando a necessidade de comprar hardware ocioso apenas para "garantir" picos de uso.' },
  { id: 28, domain: 'D1', domainName: 'Conceitos de Nuvem', text: 'Qual pilar do AWS Well-Architected Framework enfatiza a proteção de dados em trânsito e em repouso?', options: ['Confiabilidade', 'Sustentabilidade', 'Eficiência de Performance', 'Segurança'], correct: 'D', exp: 'O pilar de Segurança foca na proteção de informações e sistemas, criptografia e controle de privilégios.' },
  { id: 29, domain: 'D1', domainName: 'Conceitos de Nuvem', text: 'O modelo de precificação da AWS permite aos clientes:', options: ['Pagar um valor fixo mensal independente do serviço', 'Pagar apenas pelos recursos de TI que consumirem, sem contratos de longo prazo obrigatórios', 'Evitar o pagamento de faturas se o projeto não for concluído', 'Comprar software de terceiros gratuitamente'], correct: 'B', exp: 'O modelo "Pay-as-you-go" cobra de acordo com os recursos provisionados e o tempo de uso efetivo.' },
  { id: 30, domain: 'D1', domainName: 'Conceitos de Nuvem', text: 'Qual das afirmações sobre Zonas de Disponibilidade (AZs) é verdadeira?', options: ['Múltiplas AZs dentro de uma Região compartilham a mesma infraestrutura de energia física', 'As AZs são conectadas por conexões de rede de alta largura de banda e baixa latência', 'Uma AZ pode estar localizada em múltiplos países simultaneamente', 'As AZs são focadas exclusivamente em serviços de borda'], correct: 'B', exp: 'As AZs em uma Região são isoladas fisicamente, mas interconectadas com fibra óptica dedicada de baixa latência.' },
  { id: 31, domain: 'D1', domainName: 'Conceitos de Nuvem', text: 'No contexto de arquitetura AWS, projetar componentes que não dependem do estado interno uns dos outros é conhecido como arquitetura:', options: ['Monolítica', 'Stateful (Com Estado)', 'Stateless (Sem Estado)', 'Isolada'], correct: 'C', exp: 'Arquiteturas Stateless permitem que qualquer servidor responda a qualquer requisição, pois o estado não é armazenado localmente, facilitando a elasticidade.' },
  { id: 32, domain: 'D1', domainName: 'Conceitos de Nuvem', text: 'Uma estratégia de Cloud Computing on-premises, executando serviços compatíveis com a nuvem no próprio data center do cliente usando hardware da AWS, descreve o modelo:', options: ['Nuvem Pública', 'AWS Outposts', 'Multi-cloud', 'AWS Fargate'], correct: 'B', exp: 'AWS Outposts é um serviço que traz a infraestrutura, serviços e APIs nativos da AWS para instalações on-premises do cliente.' },
  { id: 33, domain: 'D1', domainName: 'Conceitos de Nuvem', text: 'Qual princípio de design recomenda usar eventos para acionar a execução de componentes apenas quando necessário?', options: ['Dimensionamento vertical', 'Arquitetura orientada a eventos (Event-driven)', 'Acoplamento forte', 'Implantação monolítica'], correct: 'B', exp: 'Sistemas event-driven, como os baseados no AWS Lambda, reagem a gatilhos, promovendo o acoplamento fraco e eficiência.' },
  { id: 34, domain: 'D1', domainName: 'Conceitos de Nuvem', text: 'Em que cenário uma empresa estaria maximizando o pilar de "Otimização de Custos"?', options: ['Executando instâncias On-Demand 24x7 para ambientes de desenvolvimento', 'Utilizando Instâncias Reservadas para cargas de trabalho de produção contínuas e previsíveis', 'Deixando recursos órfãos rodando na nuvem', 'Evitando o uso de AWS Auto Scaling'], correct: 'B', exp: 'Instâncias Reservadas ou Savings Plans oferecem grandes descontos (até 72%) para uso previsível em comparação ao On-Demand.' },
  { id: 35, domain: 'D1', domainName: 'Conceitos de Nuvem', text: 'Qual o principal benefício da infraestrutura de "Local Zones" da AWS?', options: ['Fazer backup automatizado de dados on-premises', 'Permitir a execução de aplicações com latência de um dígito de milissegundo para usuários finais em cidades específicas', 'Reduzir os custos de processamento gráfico', 'Atuar como um firewall global'], correct: 'B', exp: 'Local Zones colocam serviços de computação, armazenamento e banco de dados mais próximos de grandes centros populacionais.' },
  { id: 36, domain: 'D1', domainName: 'Conceitos de Nuvem', text: 'Qual vantagem de usar a nuvem está relacionada a delegar o trabalho pesado e não diferenciado (undifferentiated heavy lifting) para a AWS?', options: ['Eliminação do TCO de software customizado', 'Foco principal nas atividades que geram valor direto ao negócio (core business)', 'Garantia de segurança no nível do código da aplicação', 'Controle total sobre o hardware físico'], correct: 'B', exp: 'Ao deixar a AWS cuidar dos servidores físicos, as empresas focam no que importa: inovação em seus próprios produtos e clientes.' },
  { id: 37, domain: 'D1', domainName: 'Conceitos de Nuvem', text: 'A migração "Replatforming" envolve:', options: ['Mudar do código fonte inteiro para uma nova linguagem', 'Mover a aplicação para a nuvem fazendo pequenas otimizações, como mudar para um banco de dados gerenciado', 'Mover exatamente como está sem nenhuma mudança (Lift and Shift)', 'Manter a aplicação on-premises e usar apenas backup na nuvem'], correct: 'B', exp: 'Replatforming (Lift, Tinker, and Shift) envolve algumas otimizações para nuvem sem mudar a arquitetura central da aplicação.' },
  { id: 38, domain: 'D1', domainName: 'Conceitos de Nuvem', text: 'Para que serve a estratégia de Multi-Region na AWS?', options: ['Aumentar o limite de cotas do EC2', 'Alcançar alta disponibilidade global e plano de recuperação de desastres extremo', 'Simplificar a fatura consolidada', 'Eliminar a necessidade de Zonas de Disponibilidade'], correct: 'B', exp: 'Usar Múltiplas Regiões protege a aplicação contra eventos raros e massivos que poderiam afetar uma região geográfica inteira.' },
  { id: 39, domain: 'D1', domainName: 'Conceitos de Nuvem', text: 'O que significa "Economia Baseada no Consumo" na AWS?', options: ['Um desconto progressivo baseado na antiguidade da conta', 'Pagar apenas pelo poder computacional e armazenamento efetivamente usados no período', 'Um plano onde serviços ociosos não são faturados independentemente do provisionamento', 'Comprar hardware em lotes de desconto'], correct: 'B', exp: 'Você paga pelos serviços à medida que os utiliza, de forma semelhante às contas de água ou luz residencial.' },
  { id: 40, domain: 'D1', domainName: 'Conceitos de Nuvem', text: 'Um banco que precisa manter dados rigorosamente dentro das fronteiras nacionais por razões regulatórias deve escolher cuidadosamente:', options: ['Sua Região AWS', 'A classe de armazenamento do Amazon S3', 'Sua Zona de Disponibilidade preferencial', 'As tags de alocação de custos'], correct: 'A', exp: 'Os dados armazenados na AWS permanecem na Região escolhida pelo cliente e não são movidos sem sua permissão.' },
  { id: 41, domain: 'D1', domainName: 'Conceitos de Nuvem', text: 'Segundo as práticas da AWS, como um cliente deve projetar sua infraestrutura para escalabilidade horizontal?', options: ['Substituindo máquinas virtuais fracas por máquinas muito robustas', 'Distribuindo a carga de tráfego de forma automatizada entre múltiplas instâncias que são adicionadas sob demanda', 'Rodando tudo no Elastic Beanstalk', 'Criando túneis VPN manuais'], correct: 'B', exp: 'Escalabilidade horizontal (Scale Out) envolve adicionar mais nós/instâncias à frota em vez de aumentar a capacidade de uma única instância.' },
  { id: 42, domain: 'D1', domainName: 'Conceitos de Nuvem', text: 'Qual afirmação descreve o conceito de "Serverless" na AWS?', options: ['A computação ocorre nos dispositivos de borda do usuário', 'O cliente foca no código enquanto a AWS gerencia totalmente o provisionamento, escalonamento e manutenção dos servidores', 'Instâncias virtuais dedicadas que rodam apenas em horários comerciais', 'Um data center on-premises totalmente automatizado'], correct: 'B', exp: 'Em serviços Serverless, como o AWS Lambda, o gerenciamento da infraestrutura subjacente fica oculto e a cargo da AWS.' },
  { id: 43, domain: 'D1', domainName: 'Conceitos de Nuvem', text: 'Um dos "Design Principles" do AWS Well-Architected Framework encoraja as equipes a fazerem o que com falhas e incidentes?', options: ['Ocultá-los dos stakeholders', 'Testar a recuperação (Test recovery procedures)', 'Provisionar hardware de reserva manualmente em outra conta', 'Restringir os logs apenas ao usuário Root'], correct: 'B', exp: 'Simular falhas intencionalmente garante que as equipes testem e validem seus procedimentos de recuperação antes de um desastre real.' },
  { id: 44, domain: 'D1', domainName: 'Conceitos de Nuvem', text: 'A migração "Repurchasing" (Recompra) refere-se a:', options: ['Comprar novos servidores físicos', 'Mover de um licenciamento de software tradicional para um modelo de Software as a Service (SaaS)', 'Reescrever o código do zero na nuvem', 'Mudar de Instâncias On-Demand para Reserved Instances'], correct: 'B', exp: 'Repurchasing (também conhecido como "Drop and Shop") envolve abandonar o sistema atual e assinar uma solução SaaS comercial disponível no mercado.' },
  { id: 45, domain: 'D1', domainName: 'Conceitos de Nuvem', text: 'O que significa a "Alta Disponibilidade" no contexto da AWS?', options: ['Garantir que os usuários acessem a aplicação sem atrasos', 'Garantir que o sistema permaneça acessível, minimizando o tempo de inatividade mesmo em caso de falhas de componentes', 'Criar backups diários de forma obrigatória', 'Escalar infinitamente recursos de armazenamento'], correct: 'B', exp: 'Sistemas de alta disponibilidade são projetados para estar online e operacionais durante a esmagadora maioria do tempo, tipicamente utilizando múltiplas AZs.' },
  { id: 46, domain: 'D1', domainName: 'Conceitos de Nuvem', text: 'A capacidade de experimentar novas tecnologias (Machine Learning, IoT, Analytics) sem grandes custos iniciais é um exemplo de:', options: ['Tolerância a Falhas', 'Elasticidade de Banco de Dados', 'Maior Agilidade e Inovação', 'CloudFront Caching'], correct: 'C', exp: 'O acesso fácil a serviços avançados via API permite que empresas construam e testem inovações rapidamente.' },
  { id: 47, domain: 'D1', domainName: 'Conceitos de Nuvem', text: 'A estratégia de implantação Multi-AZ afeta primariamente qual aspecto da arquitetura?', options: ['Confiabilidade e Resiliência', 'Performance de CPU de núcleo único', 'Segurança de Acesso de Identidade', 'Tempo de latência entre o cliente e a borda'], correct: 'A', exp: 'Implantar recursos em Múltiplas Zonas de Disponibilidade é a principal defesa contra desastres locais, fortalecendo a confiabilidade.' },
  { id: 48, domain: 'D1', domainName: 'Conceitos de Nuvem', text: 'Como a AWS trata a sustentabilidade no nível de seu framework de arquitetura?', options: ['É opcional e foca na reciclagem de papel nos escritórios', 'É o sexto pilar, que busca a minimização de impactos ambientais compreendendo e reduzindo o consumo de recursos na nuvem', 'Refere-se ao modelo de pagamento de longo prazo', 'Substitui o pilar de Otimização de Custos'], correct: 'B', exp: 'Adicionado recentemente, o pilar de Sustentabilidade foca nas melhores práticas para reduzir a pegada de carbono das cargas de trabalho em nuvem.' }
];

const DOMAIN_2_QUESTIONS = [
  // Domínio 2: Segurança e Conformidade (57 Questões)
  { id: 49, domain: 'D2', domainName: 'Segurança e Conformidade', text: 'No Modelo de Responsabilidade Compartilhada, qual item é responsabilidade EXCLUSIVA do cliente em uma instância EC2?', options: ['Manutenção do hardware do hipervisor', 'Atualização do Sistema Operacional convidado (Guest OS)', 'Segurança física dos data centers', 'Descarte seguro de discos rígidos com defeito'], correct: 'B', exp: 'A AWS cuida da segurança DA nuvem (hardware, instalações, hipervisor), e o cliente cuida da segurança NA nuvem (SO da instância, dados, firewall).' },
  { id: 50, domain: 'D2', domainName: 'Segurança e Conformidade', text: 'No Amazon RDS, qual tarefa de segurança é gerenciada pela AWS e não pelo cliente?', options: ['Criação das tabelas do banco de dados', 'Aplicação de patches no SO subjacente e no motor do RDS', 'Configuração das senhas dos usuários do banco', 'Criptografia de dados no nível da aplicação'], correct: 'B', exp: 'O RDS é um serviço gerenciado, logo a AWS cuida do SO e dos patches do banco de dados.' },
  { id: 51, domain: 'D2', domainName: 'Segurança e Conformidade', text: 'Qual mecanismo é a boa prática recomendada para conceder permissões a uma instância EC2 para acessar o S3?', options: ['Gravar Access Keys fixas no código do aplicativo', 'Anexar uma IAM Role (Função IAM) à instância EC2', 'Usar a senha Root da conta', 'Abrir o bucket S3 para acesso público'], correct: 'B', exp: 'IAM Roles fornecem credenciais temporárias seguras para recursos AWS sem expor chaves fixas.' },
  { id: 52, domain: 'D2', domainName: 'Segurança e Conformidade', text: 'Qual serviço da AWS oferece detecção inteligente de ameaças analisando logs do CloudTrail, VPC Flow Logs e DNS?', options: ['AWS Shield', 'Amazon Inspector', 'Amazon GuardDuty', 'AWS WAF'], correct: 'C', exp: 'Amazon GuardDuty é um serviço de detecção de ameaças com aprendizado de máquina contínuo.' },
  { id: 53, domain: 'D2', domainName: 'Segurança e Conformidade', text: 'Para obter relatórios de conformidade e auditoria de terceiros (como SOC, PCI DSS, ISO), o cliente deve usar o:', options: ['AWS Artifact', 'AWS CloudTrail', 'AWS Trusted Advisor', 'AWS Config'], correct: 'A', exp: 'AWS Artifact é o portal de acesso sob demanda a relatórios de conformidade da AWS.' },
  { id: 54, domain: 'D2', domainName: 'Segurança e Conformidade', text: 'Qual a função das Service Control Policies (SCPs) no AWS Organizations?', options: ['Conceder acesso de rede entre VPCs', 'Definir os limites máximos de permissões para contas membro', 'Criar regras de firewall para instâncias EC2', 'Rotacionar chaves do KMS'], correct: 'B', exp: 'SCPs impõem restrições globais de segurança sobre contas de uma organização, sobrepondo-se até mesmo ao administrador da conta membro.' },
  { id: 55, domain: 'D2', domainName: 'Segurança e Conformidade', text: 'O Princípio do Menor Privilégio no AWS IAM significa:', options: ['Conceder acesso de Administrador para simplificar tarefas', 'Conceder apenas as permissões estritamente necessárias para a tarefa', 'Bloquear todos os acessos à internet', 'Usar apenas a conta Root para criar recursos'], correct: 'B', exp: 'Deve-se iniciar com acesso zero e liberar estritamente o necessário para cada usuário ou função, minimizando riscos.' },
  { id: 56, domain: 'D2', domainName: 'Segurança e Conformidade', text: 'Qual serviço protege aplicações web contra explorações comuns como SQL Injection e Cross-Site Scripting (XSS)?', options: ['AWS Shield Standard', 'AWS WAF', 'Amazon GuardDuty', 'AWS KMS'], correct: 'B', exp: 'AWS WAF (Web Application Firewall) inspeciona solicitações HTTP/HTTPS na camada de aplicação (Camada 7).' },
  { id: 57, domain: 'D2', domainName: 'Segurança e Conformidade', text: 'Qual serviço registra o histórico de chamadas de API e ações realizadas na conta AWS para fins de auditoria?', options: ['Amazon CloudWatch', 'AWS CloudTrail', 'AWS X-Ray', 'Amazon Config'], correct: 'B', exp: 'O CloudTrail monitora e grava o histórico de eventos de API por toda a infraestrutura AWS (Quem fez o quê, quando e de onde).' },
  { id: 58, domain: 'D2', domainName: 'Segurança e Conformidade', text: 'Uma boa prática fundamental para proteger a conta Root da AWS é:', options: ['Usar a conta Root nas tarefas diárias de programação', 'Compartilhar a senha do Root com a equipe de TI', 'Habilitar autenticação multifator (MFA) e eliminar Access Keys do Root', 'Desativar o MFA após o primeiro acesso'], correct: 'C', exp: 'A conta Root possui acesso irrestrito; atuar com MFA ativado, esconder a senha e usar usuários IAM/SSO é vital.' },
  { id: 59, domain: 'D2', domainName: 'Segurança e Conformidade', text: 'Qual serviço é indicado para armazenar, rotacionar e recuperar senhas de banco de dados e chaves de API com segurança automática?', options: ['AWS Systems Manager Parameter Store', 'AWS Secrets Manager', 'Amazon S3', 'AWS Key Management Service (KMS)'], correct: 'B', exp: 'AWS Secrets Manager é especialista no gerenciamento do ciclo de vida e rotação automática de segredos.' },
  { id: 60, domain: 'D2', domainName: 'Segurança e Conformidade', text: 'O serviço centralizado da AWS para criação e controle de chaves de criptografia de dados é o:', options: ['AWS KMS', 'AWS Certificate Manager', 'AWS CloudHSM', 'AWS WAF'], correct: 'A', exp: 'AWS KMS (Key Management Service) gerencia chaves de criptografia integrando-se nativamente a quase todos os serviços AWS.' },
  { id: 61, domain: 'D2', domainName: 'Segurança e Conformidade', text: 'A diferença principal entre um Security Group e uma Network ACL (NACL) é que o Security Group é:', options: ['Stateless e no nível da sub-rede', 'Stateful e no nível da instância/interface de rede', 'Apenas para tráfego de saída', 'Gerenciado diretamente pelo suporte AWS'], correct: 'B', exp: 'Security Groups avaliam tráfego na interface de rede e mantêm estado (stateful); NACLs atuam na sub-rede e são stateless.' },
  { id: 62, domain: 'D2', domainName: 'Segurança e Conformidade', text: 'Qual serviço fornece proteção padrão e gratuita contra ataques DDoS nas camadas 3 e 4 para todos os clientes AWS?', options: ['AWS Shield Advanced', 'AWS Shield Standard', 'AWS WAF', 'Amazon Macie'], correct: 'B', exp: 'AWS Shield Standard é ativado automaticamente sem custo adicional para proteger contra DDoS volumétrico e de estado.' },
  { id: 63, domain: 'D2', domainName: 'Segurança e Conformidade', text: 'Para realizar varredura automatizada de vulnerabilidades em instâncias EC2 e imagens de contêineres no ECR, utiliza-se o:', options: ['Amazon GuardDuty', 'Amazon Inspector', 'AWS Trusted Advisor', 'AWS Security Hub'], correct: 'B', exp: 'Amazon Inspector avalia exposições involuntárias de rede e vulnerabilidades de software em instâncias e contêineres.' },
  { id: 64, domain: 'D2', domainName: 'Segurança e Conformidade', text: 'Para gerenciar centralizadamente o acesso de usuários e integrar identidades locais do Microsoft Active Directory à AWS, recomenda-se:', options: ['AWS IAM Identity Center (Successor to AWS SSO)', 'Chaves estáticas no IAM', 'Criar usuários locais para cada funcionário no S3', 'Usar senhas simples no Cognito'], correct: 'A', exp: 'O IAM Identity Center facilita a federação e o Single Sign-On (SSO) com diretórios on-premises ou nativos.' },
  { id: 65, domain: 'D2', domainName: 'Segurança e Conformidade', text: 'Qual serviço agrega e centraliza alertas de segurança vindos do GuardDuty, Inspector e Macie em um único painel?', options: ['AWS Security Hub', 'Amazon CloudWatch', 'AWS Control Tower', 'AWS Health Dashboard'], correct: 'A', exp: 'AWS Security Hub consolida achados de segurança de múltiplos serviços e contas em um dashboard unificado de postura.' },
  { id: 66, domain: 'D2', domainName: 'Segurança e Conformidade', text: 'Qual serviço utiliza Machine Learning para descobrir e proteger informações de identificação pessoal (PII) no Amazon S3?', options: ['Amazon Inspector', 'Amazon Macie', 'Amazon Rekognition', 'AWS Comprehend'], correct: 'B', exp: 'Amazon Macie escaneia dados no S3 identificando dados sensíveis como CPFs, cartões de crédito e outras PIIs.' },
  { id: 67, domain: 'D2', domainName: 'Segurança e Conformidade', text: 'Por que a Autenticação Multifator (MFA) deve ser obrigatória em contas AWS?', options: ['Aumenta a velocidade de conexão da API', 'Adiciona uma camada extra de proteção além de usuário e senha', 'Criptografa o disco rígido das instâncias', 'Substitui totalmente o uso de senhas'], correct: 'B', exp: 'MFA exige um token físico/temporal garantindo que apenas a posse de uma senha roubada não seja suficiente para o acesso.' },
  { id: 68, domain: 'D2', domainName: 'Segurança e Conformidade', text: 'Um cliente deseja provisionar e gerenciar certificados SSL/TLS para proteger sites rodando no Application Load Balancer. Qual serviço usar?', options: ['AWS Artifact', 'AWS Certificate Manager (ACM)', 'AWS KMS', 'Amazon Macie'], correct: 'B', exp: 'AWS ACM provisiona, gerencia e renova facilmente certificados SSL/TLS gratuitos para serviços AWS integrados.' },
  { id: 69, domain: 'D2', domainName: 'Segurança e Conformidade', text: 'Dentro do IAM, o que é uma "Policy" (Política)?', options: ['Um usuário com permissões de administrador', 'Um documento JSON que define formalmente as permissões (efeito, ação, recurso)', 'Um grupo de instâncias EC2', 'Um token de MFA'], correct: 'B', exp: 'Políticas do IAM são documentos em formato JSON que concedem ou negam permissões específicas a usuários, grupos ou roles.' },
  { id: 70, domain: 'D2', domainName: 'Segurança e Conformidade', text: 'Qual serviço deve ser usado caso uma empresa precise de um módulo de segurança de hardware (HSM) de locatário único e dedicado (single-tenant) sob seu controle exclusivo na nuvem?', options: ['AWS KMS', 'AWS CloudHSM', 'AWS Secrets Manager', 'Amazon Macie'], correct: 'B', exp: 'AWS CloudHSM oferece hardware de criptografia dedicado e validado pelo FIPS 140-2 Nível 3, onde a AWS não tem acesso às chaves.' },
  { id: 71, domain: 'D2', domainName: 'Segurança e Conformidade', text: 'Qual é o conceito de segurança focado em monitorar e aceitar/rejeitar o tráfego que entra ou sai de uma sub-rede inteira?', options: ['Security Group', 'Network Access Control List (NACL)', 'Route Table', 'Internet Gateway'], correct: 'B', exp: 'NACLs agem como um firewall stateless na fronteira da sub-rede, aplicando regras de entrada (inbound) e saída (outbound).' },
  { id: 72, domain: 'D2', domainName: 'Segurança e Conformidade', text: 'De quem é a responsabilidade de configurar a criptografia do lado do servidor para objetos armazenados no Amazon S3?', options: ['Da AWS exclusivamente', 'Do Cliente', 'É feita automaticamente e não pode ser desativada/configurada', 'Do provedor de internet do usuário'], correct: 'B', exp: 'Embora a AWS forneça as ferramentas (KMS, S3 SSE), a decisão e configuração de habilitar a criptografia de dados é do cliente.' },
  { id: 73, domain: 'D2', domainName: 'Segurança e Conformidade', text: 'Como um desenvolvedor pode obter acesso programático à AWS via Command Line Interface (AWS CLI)?', options: ['Usando o nome de usuário e a senha do console', 'Criando e configurando Access Keys (Chave de Acesso e Chave Secreta)', 'Utilizando o Amazon Cognito', 'Configurando um Security Group para a porta 80'], correct: 'B', exp: 'Access Keys são credenciais de longo prazo usadas especificamente para acesso programático via CLI, SDKs ou APIs diretas.' },
  { id: 74, domain: 'D2', domainName: 'Segurança e Conformidade', text: 'Qual serviço a AWS recomenda para investigar rapidamente a causa raiz (root cause) de potenciais incidentes de segurança usando gráficos de comportamento de rede?', options: ['Amazon Detective', 'Amazon Inspector', 'Amazon Athena', 'AWS Trusted Advisor'], correct: 'A', exp: 'Amazon Detective analisa, investiga e identifica a causa raiz de problemas de segurança ou atividades suspeitas.' },
  { id: 75, domain: 'D2', domainName: 'Segurança e Conformidade', text: 'O que um cliente deve fazer se suspeitar que suas instâncias EC2 estão sendo usadas para enviar SPAM ou realizar ataques na internet?', options: ['Desligar sua conta imediatamente', 'Contatar a equipe do AWS Trust & Safety (AWS Abuse Team)', 'Processar a AWS', 'Comprar o AWS Shield Advanced'], correct: 'B', exp: 'A equipe de Abuse da AWS atua em atividades abusivas originadas de ou direcionadas a infraestruturas AWS (SPAM, DDoS, malwares).' },
  { id: 76, domain: 'D2', domainName: 'Segurança e Conformidade', text: 'Qual funcionalidade permite gerenciar configurações seguras, strings e senhas sem rotatividade automática, de forma gratuita e hierárquica?', options: ['AWS Secrets Manager', 'AWS Systems Manager Parameter Store', 'AWS KMS', 'Amazon S3'], correct: 'B', exp: 'O Parameter Store oferece armazenamento seguro para dados de configuração e segredos, mas sem a funcionalidade nativa de rotação automática do Secrets Manager.' },
  { id: 77, domain: 'D2', domainName: 'Segurança e Conformidade', text: 'Se uma empresa precisa garantir que dados não sejam publicamente acessíveis na AWS, qual recurso no S3 deve ser habilitado no nível da conta ou do bucket?', options: ['Versionamento', 'S3 Block Public Access', 'S3 Object Lock', 'Amazon Macie'], correct: 'B', exp: 'O S3 Block Public Access impede proativamente que objetos e buckets tornem-se públicos por erro de configuração de ACLs ou políticas.' },
  { id: 78, domain: 'D2', domainName: 'Segurança e Conformidade', text: 'De acordo com o Modelo de Responsabilidade Compartilhada, quem é responsável pelo descarte físico (destruição) de dispositivos de armazenamento de dados nos data centers AWS?', options: ['O Cliente', 'A equipe de auditoria independente', 'A AWS', 'Ninguém, os discos nunca são destruídos'], correct: 'C', exp: 'A segurança física, incluindo o processo rigoroso de desmagnetização e destruição física de mídias de armazenamento, é inteira responsabilidade da AWS.' },
  { id: 79, domain: 'D2', domainName: 'Segurança e Conformidade', text: 'Qual serviço da AWS ajuda os desenvolvedores a criar aplicativos que exigem autenticação de usuários finais web e mobile (Sign-up e Sign-in)?', options: ['AWS IAM', 'Amazon Cognito', 'AWS Shield', 'Amazon Connect'], correct: 'B', exp: 'Amazon Cognito fornece gerenciamento e autenticação de identidades de clientes para aplicações web e móveis (pools de usuários).' },
  { id: 80, domain: 'D2', domainName: 'Segurança e Conformidade', text: 'Qual é o propósito de usar Grupos (Groups) no AWS IAM?', options: ['Agrupar instâncias EC2 por departamento', 'Facilitar a atribuição de permissões idênticas a múltiplos usuários ao mesmo tempo', 'Isolar contas AWS de cobrança', 'Criar credenciais temporárias'], correct: 'B', exp: 'Grupos IAM permitem aplicar uma mesma política a vários usuários simultaneamente, facilitando a governança administrativa.' },
  { id: 81, domain: 'D2', domainName: 'Segurança e Conformidade', text: 'Se uma empresa precisa garantir que certas instâncias AWS obedeçam a regras rígidas de firewall centralizadas no nível de inspeção de pacotes na VPC, ela pode usar:', options: ['AWS Network Firewall', 'AWS WAF', 'AWS Artifact', 'AWS Cost Explorer'], correct: 'A', exp: 'O AWS Network Firewall é um serviço de firewall gerenciado que inspeciona e filtra o tráfego de entrada e saída no nível da rede VPC.' },
  { id: 82, domain: 'D2', domainName: 'Segurança e Conformidade', text: 'Para auditar se todos os usuários de uma conta AWS possuem a Autenticação Multifator (MFA) ativada, os administradores devem baixar o:', options: ['IAM Credential Report (Relatório de Credenciais)', 'AWS CloudTrail Log', 'AWS Billing Invoice', 'VPC Flow Log'], correct: 'A', exp: 'O Relatório de Credenciais lista todos os usuários da conta e o status de suas senhas, chaves de acesso e dispositivos MFA.' },
  { id: 83, domain: 'D2', domainName: 'Segurança e Conformidade', text: 'Qual recurso AWS automatiza a avaliação contínua do uso de recursos em relação às diretrizes de segurança, gerando relatórios de risco simplificados?', options: ['AWS Control Tower', 'AWS Audit Manager', 'AWS Config', 'Amazon Macie'], correct: 'B', exp: 'AWS Audit Manager mapeia continuamente o uso da AWS a controles de conformidade para simplificar auditorias internas e externas.' },
  { id: 84, domain: 'D2', domainName: 'Segurança e Conformidade', text: 'De acordo com as diretrizes da AWS, a concessão de permissões de acesso "Cross-Account" (entre contas diferentes da AWS) deve ser feita preferencialmente através de:', options: ['Compartilhamento da senha Root', 'Troca de Chaves de Acesso (Access Keys) por e-mail', 'IAM Roles (Funções IAM) com políticas de confiança (Trust Policies)', 'Cópia física do banco de dados'], correct: 'C', exp: 'A delegação de acesso entre contas segura é feita usando IAM Roles (AssumeRole), não através do compartilhamento de chaves ou credenciais duradouras.' },
  { id: 85, domain: 'D2', domainName: 'Segurança e Conformidade', text: 'Qual serviço da AWS permite avaliar a configuração de todos os recursos da sua conta e rastrear alterações dessas configurações ao longo do tempo?', options: ['AWS CloudFormation', 'AWS Config', 'AWS CloudTrail', 'AWS Artifact'], correct: 'B', exp: 'O AWS Config monitora as configurações dos recursos da AWS e registra inventário e histórico de mudanças de configuração.' },
  { id: 86, domain: 'D2', domainName: 'Segurança e Conformidade', text: 'Como um administrador pode forçar todos os usuários do IAM a criarem senhas com pelo menos 14 caracteres e letras maiúsculas/minúsculas?', options: ['Usando o AWS Shield', 'Configurando uma IAM Password Policy (Política de Senhas)', 'Usando o AWS Cognito', 'Enviando um e-mail aos funcionários'], correct: 'B', exp: 'A Password Policy do IAM define requisitos mínimos de complexidade, comprimento e rotação para senhas de usuários.' },
  { id: 87, domain: 'D2', domainName: 'Segurança e Conformidade', text: 'No contexto de Security Groups, qual afirmativa é correta sobre as regras padrão na sua criação?', options: ['Todas as entradas (inbound) e saídas (outbound) são negadas', 'Todas as entradas (inbound) são negadas e todas as saídas (outbound) são permitidas', 'Todas as entradas e saídas são permitidas', 'Apenas a porta 80 é permitida na entrada'], correct: 'B', exp: 'Ao criar um novo Security Group, o padrão de segurança é negar todo tráfego Inbound e permitir todo tráfego Outbound.' },
  { id: 88, domain: 'D2', domainName: 'Segurança e Conformidade', text: 'Um cliente está usando o AWS Lambda (FaaS). Quem é responsável por atualizar o sistema operacional subjacente que executa as funções Lambda?', options: ['O Cliente', 'A AWS', 'A equipe de redes corporativa', 'Nenhum sistema operacional é usado no Lambda'], correct: 'B', exp: 'Por ser um serviço Serverless abstrato, a AWS cuida do provisionamento, sistema operacional e atualizações de segurança das funções Lambda.' },
  { id: 89, domain: 'D2', domainName: 'Segurança e Conformidade', text: 'Qual serviço AWS fornece suporte premium e mitigação 24x7 através do time SRT (Shield Response Team) em ataques cibernéticos complexos?', options: ['AWS Shield Standard', 'AWS WAF', 'AWS Shield Advanced', 'Amazon Inspector'], correct: 'C', exp: 'O AWS Shield Advanced é o serviço pago que inclui acesso direto a especialistas (SRT) e proteção financeira contra picos causados por DDoS.' },
  { id: 90, domain: 'D2', domainName: 'Segurança e Conformidade', text: 'Ao armazenar credenciais estáticas de banco de dados no código-fonte da aplicação, a empresa está violando qual pilar do AWS Well-Architected Framework?', options: ['Excelência Operacional', 'Otimização de Custos', 'Segurança', 'Confiabilidade'], correct: 'C', exp: 'O pilar de Segurança exige proteção e gerenciamento adequado de segredos, nunca codificando-os em texto plano no código-fonte (hardcoding).' },
  { id: 91, domain: 'D2', domainName: 'Segurança e Conformidade', text: 'Para garantir que uma aplicação apenas permita acesso oriundo de um IP ou país específico na camada de aplicação HTTP, qual recurso deve ser usado?', options: ['Network ACL', 'AWS WAF', 'Route 53', 'Amazon CloudFront Cache'], correct: 'B', exp: 'O AWS WAF permite criar regras personalizadas para bloquear/permitir tráfego baseado em IP, país, cabeçalhos HTTP ou URIs na camada 7.' },
  { id: 92, domain: 'D2', domainName: 'Segurança e Conformidade', text: 'Qual a principal utilidade do Amazon VPC Flow Logs em uma arquitetura de nuvem?', options: ['Registrar erros de código de aplicação web', 'Monitorar chamadas de API feitas por usuários do IAM', 'Capturar informações sobre o tráfego IP entrando e saindo de interfaces de rede em uma VPC', 'Identificar gargalos de CPU no EC2'], correct: 'C', exp: 'Os VPC Flow Logs são essenciais para solucionar problemas de rede, monitorar padrões de tráfego e realizar auditorias de segurança de rede.' },
  { id: 93, domain: 'D2', domainName: 'Segurança e Conformidade', text: 'Qual serviço da AWS permite configurar e governar um ambiente AWS multi-contas seguro com base em práticas recomendadas em minutos?', options: ['AWS Control Tower', 'AWS Security Hub', 'AWS Single Sign-On', 'AWS Auto Scaling'], correct: 'A', exp: 'O AWS Control Tower automatiza a criação de landing zones e aplica guardrails de governança de forma automática sobre o AWS Organizations.' },
  { id: 94, domain: 'D2', domainName: 'Segurança e Conformidade', text: 'Uma "Custom Managed Key" (CMK) no AWS KMS possui qual característica?', options: ['A AWS gera, rotaciona e controla as políticas da chave', 'O Cliente tem total controle sobre a chave, incluindo rotação e políticas de uso', 'É gratuita independentemente do uso', 'Só pode ser usada no Amazon S3'], correct: 'B', exp: 'Chaves gerenciadas pelo cliente dão controle total sobre as permissões do KMS, permitindo até mesmo a importação de material criptográfico próprio.' },
  { id: 95, domain: 'D2', domainName: 'Segurança e Conformidade', text: 'Qual pilar do Well-Architected enfatiza a rastreabilidade usando logs, métricas e auditorias de sistema contínuas?', options: ['Segurança', 'Sustentabilidade', 'Eficiência de Performance', 'Otimização de Custos'], correct: 'A', exp: 'A rastreabilidade (Traceability) é um princípio fundamental de design de segurança na AWS (saber tudo que ocorre no ambiente).' },
  { id: 96, domain: 'D2', domainName: 'Segurança e Conformidade', text: 'Sobre o AWS IAM, qual das afirmativas abaixo é Falsa?', options: ['O IAM é usado para controlar quem pode acessar recursos da AWS', 'IAM permite configurar MFA (Autenticação Multifator)', 'O IAM cobra uma taxa mensal por usuário criado na conta', 'IAM Roles fornecem acesso temporário'], correct: 'C', exp: 'O AWS IAM é um serviço global e gratuito. Não há cobrança por usuários, grupos, roles ou políticas criadas.' },
  { id: 97, domain: 'D2', domainName: 'Segurança e Conformidade', text: 'Na classificação de segurança de dados em nuvem, "Data in Transit" refere-se a:', options: ['Dados gravados permanentemente em discos rígidos (EBS/S3)', 'Dados sendo movidos de um lugar para outro, como pela rede interna ou pela internet', 'Dados impressos em papel', 'Dados excluídos de um banco de dados'], correct: 'B', exp: 'Dados em trânsito (ou em movimento) precisam ser protegidos na rede por meio de protocolos criptografados como SSL/TLS.' },
  { id: 98, domain: 'D2', domainName: 'Segurança e Conformidade', text: 'Se um cliente deseja realizar um Teste de Intrusão (Penetration Test) na sua própria infraestrutura da AWS, qual é a regra geral?', options: ['Apenas a AWS pode realizar Pen Tests', 'O cliente pode realizar Pen Tests contra a maioria dos serviços, mas deve respeitar as regras de engajamento da AWS', 'É estritamente proibido sob o Modelo de Responsabilidade', 'É preciso solicitar autorização com 30 dias de antecedência'], correct: 'B', exp: 'A AWS permite que clientes realizem avaliações de segurança/Pen Tests na própria infraestrutura (EC2, RDS, API Gateway) conforme regras pré-estabelecidas, sem aviso prévio.' },
  { id: 99, domain: 'D2', domainName: 'Segurança e Conformidade', text: 'Qual conceito de arquitetura foca em aplicar medidas de segurança em várias camadas (rede, computação, aplicação, dados)?', options: ['Defesa em Profundidade (Defense in Depth)', 'Design Monolítico', 'Estratégia Lift-and-Shift', 'Alta Disponibilidade'], correct: 'A', exp: 'Defesa em Profundidade usa múltiplas camadas sobrepostas de controles de segurança (ex: WAF + Security Group + NACL + IAM).' },
  { id: 100, domain: 'D2', domainName: 'Segurança e Conformidade', text: 'O que deve ser usado para atribuir dinamicamente credenciais temporárias para uma aplicação em execução no EC2 poder consultar tabelas do DynamoDB?', options: ['Access Keys embutidas no código da aplicação', 'Grupos IAM', 'Uma Role IAM (Função de Instância EC2)', 'Políticas de bucket do S3'], correct: 'C', exp: 'Uma EC2 Instance Profile vinculada a uma IAM Role fornece credenciais dinâmicas com rotação automática, maximizando a segurança.' },
  { id: 101, domain: 'D2', domainName: 'Segurança e Conformidade', text: 'Como um administrador restringe a capacidade de todos os usuários em sua organização AWS de excluírem backups (snapshots), mesmo se tiverem acesso Root de conta?', options: ['Através de Service Control Policies (SCPs) aplicadas na raiz da Organização', 'Excluindo o serviço do EC2', 'Através de Security Groups', 'Com o AWS WAF'], correct: 'A', exp: 'As SCPs no AWS Organizations podem sobrepor permissões administrativas locais e bloquear ações perigosas em todas as contas membros.' },
  { id: 102, domain: 'D2', domainName: 'Segurança e Conformidade', text: 'O serviço gerenciado que ajuda a auditar e mitigar o risco de conformidade com normativas e regulações setoriais globais fornecendo evidências é o:', options: ['Amazon EMR', 'AWS Config', 'AWS Audit Manager', 'AWS Shield'], correct: 'C', exp: 'O Audit Manager avalia o risco e reúne evidências continuamente de acordo com frameworks de auditoria.' },
  { id: 103, domain: 'D2', domainName: 'Segurança e Conformidade', text: 'No contexto de identidade da AWS, qual é a principal diferença entre um Usuário IAM e uma Função IAM (Role)?', options: ['Usuários IAM não podem acessar o S3; Roles podem', 'Um usuário IAM possui credenciais permanentes (senha/access keys); uma Role possui credenciais temporárias assumidas', 'Roles custam dinheiro, usuários são gratuitos', 'Não há diferença técnica'], correct: 'B', exp: 'Roles (Funções) não têm credenciais estáticas associadas; em vez disso, são assumidas para conceder permissões limitadas no tempo (via STS).' },
  { id: 104, domain: 'D2', domainName: 'Segurança e Conformidade', text: 'Qual das alternativas é a melhor prática se um administrador descobrir que a chave de acesso (Access Key) de um usuário foi exposta publicamente no GitHub?', options: ['Ignorar e aguardar a rotação mensal', 'Desativar ou excluir a chave exposta imediatamente no console do IAM e auditar o CloudTrail para verificar uso indevido', 'Deletar toda a conta AWS', 'Mudar o nome do usuário'], correct: 'B', exp: 'Credenciais expostas devem ser invalidadas instantaneamente para bloquear acessos maliciosos, seguido de investigação.' },
  { id: 105, domain: 'D2', domainName: 'Segurança e Conformidade', text: 'Qual serviço da AWS publica um boletim de segurança alertando sobre potenciais eventos de segurança pública ou privacidade que podem afetar serviços em nuvem?', options: ['AWS Security Bulletins', 'Amazon EventBridge', 'AWS Budgets', 'AWS X-Ray'], correct: 'A', exp: 'A AWS lança Security Bulletins (Avisos de Segurança) publicamente para orientar clientes sobre falhas globais, patches e vulnerabilidades zero-day.' }
];

const DOMAIN_3_QUESTIONS = [
  // Domínio 3: Tecnologia e Serviços em Nuvem (66 Questões)
  
  // -- Originais adaptadas para o novo ID (106 a 127) --
  { id: 106, domain: 'D3', domainName: 'Tecnologia e Serviços', text: 'Qual opção de compra do EC2 oferece maior desconto (até 90%) para cargas de trabalho tolerantes a interrupções?', options: ['Instâncias On-Demand', 'Instâncias Reservadas', 'Instâncias Spot', 'Hosts Dedicados'], correct: 'C', exp: 'Instâncias Spot aproveitam capacidade ociosa com descontos massivos, podendo ser interrompidas com aviso de 2 min.' },
  { id: 107, domain: 'D3', domainName: 'Tecnologia e Serviços', text: 'O serviço de computação Serverless orientado a eventos da AWS que executa código sem gerenciar servidores é o:', options: ['Amazon EC2', 'AWS Lambda', 'AWS Elastic Beanstalk', 'Amazon ECS'], correct: 'B', exp: 'AWS Lambda roda código em resposta a eventos pagando estritamente pelo tempo de execução em milissegundos.' },
  { id: 108, domain: 'D3', domainName: 'Tecnologia e Serviços', text: 'Para arquivamento de dados de longo prazo com o menor custo possível, onde a recuperação pode levar horas, qual classe do S3 usar?', options: ['S3 Standard', 'S3 Intelligent-Tiering', 'S3 Glacier Deep Archive', 'S3 Express One Zone'], correct: 'C', exp: 'S3 Glacier Deep Archive é a classe de menor custo para retenção de anos.' },
  { id: 109, domain: 'D3', domainName: 'Tecnologia e Serviços', text: 'Qual serviço de armazenamento fornece um sistema de arquivos compartilhado via NFS para múltiplas instâncias Linux EC2 simultâneas?', options: ['Amazon EBS', 'Amazon EFS', 'Amazon S3', 'Amazon Storage Gateway'], correct: 'B', exp: 'Amazon EFS (Elastic File System) é um sistema de arquivos NFS nativo e elástico.' },
  { id: 110, domain: 'D3', domainName: 'Tecnologia e Serviços', text: 'Qual banco de dados relacional proprietário da AWS oferece alta performance compatível com MySQL e PostgreSQL?', options: ['Amazon DynamoDB', 'Amazon Redshift', 'Amazon Aurora', 'Amazon ElastiCache'], correct: 'C', exp: 'Amazon Aurora é um banco relacional gerenciado até 5x mais rápido que MySQL padrão.' },
  { id: 111, domain: 'D3', domainName: 'Tecnologia e Serviços', text: 'Um desenvolvedor deseja implantar uma aplicação web sem se preocupar com provisionamento de infraestrutura subjacente. Ele deve usar:', options: ['AWS CloudFormation', 'AWS Elastic Beanstalk', 'Amazon EC2', 'AWS OpsWorks'], correct: 'B', exp: 'Elastic Beanstalk é um PaaS: você envia o código e ele cuida do scaling, load balancing e provisionamento.' },
  { id: 112, domain: 'D3', domainName: 'Tecnologia e Serviços', text: 'O armazenamento em bloco persistente conectado diretamente a instâncias EC2 é denominado:', options: ['Amazon EFS', 'Amazon EBS', 'Amazon S3', 'Amazon EC2 Instance Store'], correct: 'B', exp: 'Amazon EBS (Elastic Block Store) funciona como um disco rígido virtual para EC2.' },
  { id: 113, domain: 'D3', domainName: 'Tecnologia e Serviços', text: 'Qual motor Serverless permite executar contêineres Docker sem gerenciar instâncias de servidores EC2?', options: ['Amazon EKS', 'AWS Fargate', 'Amazon EC2', 'AWS Batch'], correct: 'B', exp: 'AWS Fargate é a camada de computação serverless para ECS e EKS.' },
  { id: 114, domain: 'D3', domainName: 'Tecnologia e Serviços', text: 'Como permitir que instâncias em uma sub-rede privada na VPC atualizem pacotes na internet sem receber conexões de entrada?', options: ['Internet Gateway', 'NAT Gateway', 'VPC Peering', 'Direct Connect'], correct: 'B', exp: 'O NAT Gateway estende saída para a internet de sub-redes privadas bloqueando acessos externos diretos.' },
  { id: 115, domain: 'D3', domainName: 'Tecnologia e Serviços', text: 'O serviço gerenciado de DNS (Domain Name System) altamente disponível e escalável da AWS é o:', options: ['Amazon CloudFront', 'Amazon Route 53', 'AWS Direct Connect', 'AWS Global Accelerator'], correct: 'B', exp: 'Amazon Route 53 faz o roteamento DNS global de solicitações de usuários.' },
  { id: 116, domain: 'D3', domainName: 'Tecnologia e Serviços', text: 'Para transferir petabytes de dados offline para a AWS com um dispositivo físico seguro, utiliza-se a família:', options: ['AWS DataSync', 'AWS Snowball', 'AWS Direct Connect', 'AWS Storage Gateway'], correct: 'B', exp: 'Dispositivos AWS Snowball transportam terabytes/petabytes de dados fisicamente.' },
  { id: 117, domain: 'D3', domainName: 'Tecnologia e Serviços', text: 'Qual serviço permite definir toda a infraestrutura como código (IaC) através de modelos JSON ou YAML?', options: ['AWS Config', 'AWS Systems Manager', 'AWS CloudFormation', 'AWS Service Catalog'], correct: 'C', exp: 'AWS CloudFormation automatiza o provisionamento repetível de recursos via código.' },
  { id: 118, domain: 'D3', domainName: 'Tecnologia e Serviços', text: 'O barramento de eventos serverless que conecta aplicações via dados de eventos de serviços AWS e SaaS é o:', options: ['Amazon SQS', 'Amazon EventBridge', 'Amazon SNS', 'AWS Step Functions'], correct: 'B', exp: 'Amazon EventBridge facilita arquiteturas orientadas a eventos conectando fontes de dados.' },
  { id: 119, domain: 'D3', domainName: 'Tecnologia e Serviços', text: 'Qual serviço oferece sistema de mensageria Pub/Sub (Publicador/Assinante) para envio de notificações por SMS, e-mail e push?', options: ['Amazon SQS', 'Amazon SNS', 'Amazon MQ', 'AWS Kinesis'], correct: 'B', exp: 'Amazon SNS (Simple Notification Service) envia mensagens para múltiplos assinantes.' },
  { id: 120, domain: 'D3', domainName: 'Tecnologia e Serviços', text: 'O serviço gerenciado de filas de mensagens utilizado para desacoplar componentes em arquiteturas distribuídas é o:', options: ['Amazon SQS', 'Amazon SNS', 'Amazon EventBridge', 'AWS Transit Gateway'], correct: 'A', exp: 'Amazon SQS (Simple Queue Service) armazena mensagens em filas assíncronas.' },
  { id: 121, domain: 'D3', domainName: 'Tecnologia e Serviços', text: 'Qual serviço de Business Intelligence (BI) e criação de painéis gráficos interativos é nativo da AWS?', options: ['Amazon Athena', 'Amazon QuickSight', 'Amazon Redshift', 'AWS Glue'], correct: 'C', exp: 'Amazon QuickSight cria visualizações de dados e dashboards em escala.' },
  { id: 122, domain: 'D3', domainName: 'Tecnologia e Serviços', text: 'Qual serviço Serverless permite consultar dados diretamente no Amazon S3 utilizando sintaxe SQL padrão?', options: ['Amazon EMR', 'Amazon Athena', 'Amazon Redshift', 'AWS Lake Formation'], correct: 'B', exp: 'Amazon Athena faz consultas interativas em arquivos no S3 sem carregar bancos de dados.' },
  { id: 123, domain: 'D3', domainName: 'Tecnologia e Serviços', text: 'Qual serviço de IA converte automaticamente arquivos de áudio gravados em texto legível?', options: ['Amazon Polly', 'Amazon Transcribe', 'Amazon Translate', 'Amazon Lex'], correct: 'B', exp: 'Amazon Transcribe utiliza aprendizado de máquina para conversão de fala em texto.' },
  { id: 124, domain: 'D3', domainName: 'Tecnologia e Serviços', text: 'Qual serviço gerenciado simplifica o acesso a Modelos de Base (Foundation Models) para desenvolvimento de IA Generativa?', options: ['Amazon SageMaker', 'Amazon Bedrock', 'Amazon Rekognition', 'AWS DeepRacer'], correct: 'B', exp: 'Amazon Bedrock fornece modelos de fundação via API para construir soluções de IA Generativa.' },
  { id: 125, domain: 'D3', domainName: 'Tecnologia e Serviços', text: 'O recurso que ajusta automaticamente a quantidade de instâncias EC2 ativas de acordo com metas de CPU é o:', options: ['AWS Load Balancer', 'AWS Auto Scaling', 'Amazon CloudWatch Logs', 'AWS Elastic Beanstalk'], correct: 'B', exp: 'AWS Auto Scaling dimensiona a capacidade computacional para manter o desempenho desejado.' },
  { id: 126, domain: 'D3', domainName: 'Tecnologia e Serviços', text: 'Para criar uma conexão de rede privada e dedicada entre um data center corporativo e a AWS sem passar pela internet pública, usa-se:', options: ['VPC Peering', 'AWS Client VPN', 'AWS Direct Connect', 'Internet Gateway'], correct: 'C', exp: 'AWS Direct Connect estabelece uma linha dedicada privada de alta performance.' },
  { id: 127, domain: 'D3', domainName: 'Tecnologia e Serviços', text: 'Qual serviço é o repositório totalmente gerenciado para armazenar, gerenciar e implantar imagens de contêineres Docker?', options: ['Amazon ECS', 'Amazon EKS', 'Amazon ECR', 'AWS CodeCommit'], correct: 'C', exp: 'Amazon ECR (Elastic Container Registry) armazena registros e imagens de contêineres.' },

  // -- Novas Questões Exclusivas (128 a 171) --
  { id: 128, domain: 'D3', domainName: 'Tecnologia e Serviços', text: 'Qual serviço AWS é ideal para desenvolvedores que precisam de um Virtual Private Server (VPS) simples, com preço fixo e previsível?', options: ['Amazon EC2', 'AWS Elastic Beanstalk', 'Amazon Lightsail', 'AWS Fargate'], correct: 'C', exp: 'Amazon Lightsail é um VPS fácil de usar que oferece instâncias, bancos de dados e redes por um preço mensal fixo.' },
  { id: 129, domain: 'D3', domainName: 'Tecnologia e Serviços', text: 'Qual serviço executa centenas de milhares de tarefas de computação em lote (batch computing) de forma dinâmica e eficiente?', options: ['AWS Step Functions', 'AWS Batch', 'Amazon EMR', 'AWS Lambda'], correct: 'B', exp: 'AWS Batch planeja, agenda e executa cargas de trabalho de computação em lote provisionando a quantidade ideal de recursos.' },
  { id: 130, domain: 'D3', domainName: 'Tecnologia e Serviços', text: 'O serviço AWS gerenciado que facilita a execução do Kubernetes na nuvem sem precisar instalar o software de controle (Control Plane) é o:', options: ['Amazon ECS', 'Amazon ECR', 'Amazon EKS', 'AWS CloudFormation'], correct: 'C', exp: 'Amazon EKS (Elastic Kubernetes Service) é o serviço gerenciado de Kubernetes da AWS.' },
  { id: 131, domain: 'D3', domainName: 'Tecnologia e Serviços', text: 'Qual classe de armazenamento do Amazon S3 move automaticamente os dados entre camadas de acesso frequente e infrequente para otimizar custos sem taxa de recuperação?', options: ['S3 Standard', 'S3 One Zone-IA', 'S3 Glacier', 'S3 Intelligent-Tiering'], correct: 'D', exp: 'S3 Intelligent-Tiering otimiza custos movendo dados com padrões de acesso desconhecidos ou variáveis.' },
  { id: 132, domain: 'D3', domainName: 'Tecnologia e Serviços', text: 'Como um cliente pode acelerar uploads de arquivos grandes de usuários globais para um bucket S3 centralizado?', options: ['Amazon S3 Transfer Acceleration', 'AWS Snowball', 'Amazon CloudFront', 'AWS Direct Connect'], correct: 'A', exp: 'S3 Transfer Acceleration utiliza as Edge Locations do CloudFront para acelerar uploads de longas distâncias para o S3.' },
  { id: 133, domain: 'D3', domainName: 'Tecnologia e Serviços', text: 'Qual serviço fornece um sistema de arquivos nativo do Windows Server totalmente gerenciado e compartilhado (SMB)?', options: ['Amazon EFS', 'Amazon FSx for Windows File Server', 'Amazon EBS', 'Amazon S3'], correct: 'B', exp: 'O Amazon FSx for Windows File Server fornece armazenamento de arquivos compartilhado compatível com Windows.' },
  { id: 134, domain: 'D3', domainName: 'Tecnologia e Serviços', text: 'Qual serviço de armazenamento híbrido permite que aplicações on-premises acessem armazenamento em nuvem da AWS de forma transparente?', options: ['AWS Storage Gateway', 'AWS DataSync', 'AWS Snowball Edge', 'AWS Outposts'], correct: 'A', exp: 'AWS Storage Gateway conecta appliances locais ao armazenamento em nuvem (S3, FSx, EBS) para backup e acesso de baixa latência.' },
  { id: 135, domain: 'D3', domainName: 'Tecnologia e Serviços', text: 'Qual banco de dados NoSQL de chave-valor gerenciado pela AWS oferece latência de milissegundos de um dígito em qualquer escala?', options: ['Amazon RDS', 'Amazon DocumentDB', 'Amazon DynamoDB', 'Amazon Neptune'], correct: 'C', exp: 'Amazon DynamoDB é o banco NoSQL rápido e flexível da AWS, amplamente usado para serverless e web apps.' },
  { id: 136, domain: 'D3', domainName: 'Tecnologia e Serviços', text: 'O serviço de Data Warehouse em escala de petabytes gerenciado pela AWS, projetado para analisar grandes volumes de dados, é o:', options: ['Amazon Athena', 'Amazon EMR', 'Amazon Aurora', 'Amazon Redshift'], correct: 'D', exp: 'Amazon Redshift é um data warehouse rápido e totalmente gerenciado para análise de dados complexa (OLAP).' },
  { id: 137, domain: 'D3', domainName: 'Tecnologia e Serviços', text: 'Para melhorar a performance de um banco de dados relacional fazendo cache de consultas frequentes em memória (Redis/Memcached), deve-se usar:', options: ['Amazon DynamoDB Accelerator (DAX)', 'Amazon ElastiCache', 'AWS Global Accelerator', 'Amazon CloudFront'], correct: 'B', exp: 'Amazon ElastiCache é o serviço gerenciado de cache em memória (Redis e Memcached).' },
  { id: 138, domain: 'D3', domainName: 'Tecnologia e Serviços', text: 'O bloco fundamental de rede da AWS que permite lançar recursos em uma rede virtual isolada logicamente é o:', options: ['Amazon VPC', 'AWS Direct Connect', 'Internet Gateway', 'Route 53'], correct: 'A', exp: 'A Amazon Virtual Private Cloud (VPC) cria um ambiente de rede virtualizado e isolado na nuvem.' },
  { id: 139, domain: 'D3', domainName: 'Tecnologia e Serviços', text: 'Qual serviço atua como um roteador em nuvem (hub) conectando múltiplas VPCs e redes on-premises simultaneamente?', options: ['VPC Peering', 'AWS Transit Gateway', 'NAT Gateway', 'AWS Direct Connect'], correct: 'B', exp: 'AWS Transit Gateway simplifica redes conectando VPCs e redes on-premises a um único gateway central.' },
  { id: 140, domain: 'D3', domainName: 'Tecnologia e Serviços', text: 'Para rotear tráfego de usuários globais para a aplicação usando a rede backbone da AWS e fornecer IPs estáticos Anycast, utiliza-se:', options: ['Amazon CloudFront', 'AWS Global Accelerator', 'Elastic Load Balancing', 'Amazon Route 53'], correct: 'B', exp: 'AWS Global Accelerator melhora a disponibilidade e performance de aplicações usando a infraestrutura global da AWS.' },
  { id: 141, domain: 'D3', domainName: 'Tecnologia e Serviços', text: 'O serviço totalmente gerenciado para criar, publicar, manter e monitorar APIs (REST, HTTP, WebSocket) em qualquer escala é o:', options: ['AWS AppSync', 'Amazon API Gateway', 'AWS Elastic Beanstalk', 'AWS Lambda'], correct: 'B', exp: 'Amazon API Gateway é a "porta da frente" para que aplicações acessem dados e lógicas de negócios back-end.' },
  { id: 142, domain: 'D3', domainName: 'Tecnologia e Serviços', text: 'Qual serviço monitora o desempenho de recursos AWS em tempo real através da coleta e rastreamento de métricas (como % de CPU)?', options: ['AWS CloudTrail', 'Amazon CloudWatch', 'AWS Config', 'AWS X-Ray'], correct: 'B', exp: 'Amazon CloudWatch é o serviço de monitoramento que coleta dados operacionais em forma de logs, métricas e eventos.' },
  { id: 143, domain: 'D3', domainName: 'Tecnologia e Serviços', text: 'Onde uma empresa pode centralizar, monitorar e armazenar logs de aplicação gerados por instâncias EC2 e funções Lambda?', options: ['Amazon SQS', 'Amazon CloudWatch Logs', 'AWS CloudTrail', 'AWS Artifact'], correct: 'B', exp: 'CloudWatch Logs permite ingerir, visualizar e pesquisar arquivos de log de diferentes fontes de recursos AWS.' },
  { id: 144, domain: 'D3', domainName: 'Tecnologia e Serviços', text: 'Qual serviço permite aplicar patches de SO, executar comandos e gerenciar frotas de instâncias EC2 remotamente sem usar SSH ou RDP?', options: ['AWS OpsWorks', 'AWS Systems Manager', 'AWS CloudFormation', 'Amazon Inspector'], correct: 'B', exp: 'AWS Systems Manager (Session Manager e Patch Manager) oferece controle operacional visível e seguro sobre instâncias.' },
  { id: 145, domain: 'D3', domainName: 'Tecnologia e Serviços', text: 'Qual serviço centraliza e automatiza a proteção de dados (backups) em todos os serviços da AWS (EBS, RDS, EFS)?', options: ['AWS Storage Gateway', 'Amazon S3 Glacier', 'AWS Backup', 'AWS DataSync'], correct: 'C', exp: 'AWS Backup é um serviço de backup gerenciado que centraliza e automatiza o backup de dados em serviços da AWS.' },
  { id: 146, domain: 'D3', domainName: 'Tecnologia e Serviços', text: 'Para ingerir, processar e analisar fluxos de dados de streaming em tempo real (como logs de cliques e telemetria), usa-se:', options: ['Amazon SQS', 'Amazon Kinesis', 'Amazon Redshift', 'AWS Batch'], correct: 'B', exp: 'Amazon Kinesis facilita a coleta, o processamento e a análise de dados de streaming em tempo real.' },
  { id: 147, domain: 'D3', domainName: 'Tecnologia e Serviços', text: 'O serviço de orquestração visual serverless usado para coordenar múltiplos serviços AWS em fluxos de trabalho (workflows) é o:', options: ['AWS Step Functions', 'Amazon SNS', 'Amazon EventBridge', 'AWS Glue'], correct: 'A', exp: 'AWS Step Functions orquestra microserviços e funções Lambda criando fluxos de trabalho visuais.' },
  { id: 148, domain: 'D3', domainName: 'Tecnologia e Serviços', text: 'O serviço totalmente gerenciado para cientistas de dados construírem, treinarem e implantarem modelos de Machine Learning (ML) rapidamente é o:', options: ['Amazon Comprehend', 'Amazon SageMaker', 'AWS DeepComposer', 'Amazon Lex'], correct: 'B', exp: 'Amazon SageMaker elimina o trabalho pesado do processo de ML, fornecendo ferramentas integradas para todo o ciclo de vida do modelo.' },
  { id: 149, domain: 'D3', domainName: 'Tecnologia e Serviços', text: 'Qual serviço de IA pré-treinado analisa imagens e vídeos para detectar objetos, rostos e conteúdo impróprio?', options: ['Amazon Textract', 'Amazon Rekognition', 'Amazon Comprehend', 'Amazon Transcribe'], correct: 'B', exp: 'Amazon Rekognition oferece recursos de visão computacional (Computer Vision) prontos para uso.' },
  { id: 150, domain: 'D3', domainName: 'Tecnologia e Serviços', text: 'Para criar interfaces de conversação (Chatbots e Voicebots) usando a mesma tecnologia de Deep Learning da Alexa, utiliza-se o:', options: ['Amazon Lex', 'Amazon Polly', 'Amazon Connect', 'Amazon Translate'], correct: 'A', exp: 'Amazon Lex é o serviço focado em construir chatbots com reconhecimento de fala e compreensão de linguagem natural.' },
  { id: 151, domain: 'D3', domainName: 'Tecnologia e Serviços', text: 'O serviço AWS que transforma textos em falas (Text-to-Speech) de forma realista e em dezenas de idiomas é o:', options: ['Amazon Lex', 'Amazon Transcribe', 'Amazon Polly', 'Amazon Comprehend'], correct: 'C', exp: 'Amazon Polly sintetiza falas que soam naturais a partir de texto (TTS).' },
  { id: 152, domain: 'D3', domainName: 'Tecnologia e Serviços', text: 'Qual serviço de NLP (Processamento de Linguagem Natural) descobre insights e sentimentos (positivo, negativo) em textos?', options: ['Amazon Comprehend', 'Amazon Textract', 'Amazon Lex', 'Amazon Kendra'], correct: 'A', exp: 'Amazon Comprehend extrai relações e sentimentos em documentos de texto não estruturados.' },
  { id: 153, domain: 'D3', domainName: 'Tecnologia e Serviços', text: 'Qual plataforma de Big Data da AWS processa grandes quantidades de dados usando ferramentas open-source como Apache Hadoop e Spark?', options: ['Amazon EMR', 'Amazon Athena', 'AWS Glue', 'Amazon Redshift'], correct: 'A', exp: 'Amazon EMR (Elastic MapReduce) é a solução gerenciada de clusters Hadoop e Spark na nuvem.' },
  { id: 154, domain: 'D3', domainName: 'Tecnologia e Serviços', text: 'O serviço de integração de dados Serverless (ETL - Extract, Transform, Load) que descobre, prepara e combina dados é o:', options: ['AWS Data Pipeline', 'AWS Glue', 'Amazon EMR', 'AWS Step Functions'], correct: 'B', exp: 'AWS Glue é um serviço ETL que prepara e carrega dados de forma automatizada para análise.' },
  { id: 155, domain: 'D3', domainName: 'Tecnologia e Serviços', text: 'Como um cliente pode obter infraestrutura nativa da AWS instalada fisicamente dentro de seu próprio data center?', options: ['AWS Outposts', 'AWS Wavelength', 'AWS Local Zones', 'AWS Snowcone'], correct: 'A', exp: 'AWS Outposts leva racks de hardware da AWS para as instalações do cliente para cargas de trabalho de baixa latência.' },
  { id: 156, domain: 'D3', domainName: 'Tecnologia e Serviços', text: 'Extensões de regiões da AWS que aproximam computação e armazenamento de grandes centros urbanos e indústrias são chamadas de:', options: ['Edge Locations', 'AWS Local Zones', 'AWS Outposts', 'AWS Direct Connect'], correct: 'B', exp: 'Local Zones colocam serviços mais próximos dos usuários finais em cidades específicas, sem precisar montar um data center próprio.' },
  { id: 157, domain: 'D3', domainName: 'Tecnologia e Serviços', text: 'Qual infraestrutura da AWS permite que desenvolvedores construam aplicações de baixíssima latência para dispositivos móveis operando em redes 5G?', options: ['AWS Wavelength', 'AWS Outposts', 'Amazon CloudFront', 'AWS Global Accelerator'], correct: 'A', exp: 'AWS Wavelength incorpora serviços de computação e armazenamento da AWS nas bordas das redes 5G das operadoras de telecomunicações.' },
  { id: 158, domain: 'D3', domainName: 'Tecnologia e Serviços', text: 'Um cliente precisa garantir que suas instâncias EC2 rodem em hardware físico dedicado apenas a ele, devido a licenças de software restritas. Ele deve usar:', options: ['EC2 On-Demand', 'EC2 Reserved Instances', 'EC2 Dedicated Hosts', 'EC2 Spot Instances'], correct: 'C', exp: 'Dedicated Hosts fornecem servidores físicos com capacidade de EC2 totalmente dedicados ao cliente, ajudando em licenciamento BYOL.' },
  { id: 159, domain: 'D3', domainName: 'Tecnologia e Serviços', text: 'Se uma empresa tem previsibilidade de que utilizará instâncias EC2 ininterruptamente por 1 ou 3 anos, a melhor forma de reduzir custos é comprar:', options: ['Instâncias Spot', 'Savings Plans / Instâncias Reservadas', 'Instâncias On-Demand', 'Hosts Dedicados'], correct: 'B', exp: 'O compromisso de 1 a 3 anos com Reserved Instances ou Savings Plans oferece até 72% de desconto sobre a tarifa On-Demand.' },
  { id: 160, domain: 'D3', domainName: 'Tecnologia e Serviços', text: 'O Amazon S3 possui uma classe de armazenamento focada na reprodução fiel do modelo "Cold Storage" de fitas magnéticas on-premises. Essa classe é:', options: ['S3 Standard', 'S3 Glacier Deep Archive', 'S3 Intelligent-Tiering', 'S3 One Zone-IA'], correct: 'B', exp: 'S3 Glacier Deep Archive é a opção de armazenamento mais barata da AWS, desenhada para retenção de anos em vez de acessos imediatos.' },
  { id: 161, domain: 'D3', domainName: 'Tecnologia e Serviços', text: 'Qual serviço em nuvem foca em automatizar, simplificar e acelerar a movimentação (cópia) de dados entre sistemas de armazenamento on-premises e a AWS?', options: ['AWS DataSync', 'AWS Snowball', 'AWS Direct Connect', 'AWS VPN'], correct: 'A', exp: 'AWS DataSync é um serviço de transferência de dados online seguro e de alta velocidade para o S3, EFS ou FSx.' },
  { id: 162, domain: 'D3', domainName: 'Tecnologia e Serviços', text: 'Ao projetar um site de comércio eletrônico, qual serviço da AWS pode ser usado para proteger a aplicação contra ataques volumétricos de negação de serviço (DDoS)?', options: ['AWS Shield', 'Amazon Macie', 'Amazon Inspector', 'AWS CloudTrail'], correct: 'A', exp: 'AWS Shield é um serviço gerenciado de proteção contra DDoS focado na resiliência de aplicações.' },
  { id: 163, domain: 'D3', domainName: 'Tecnologia e Serviços', text: 'O uso principal do Amazon CloudFront é:', options: ['Provisionar instâncias virtuais globais', 'Atuar como Rede de Distribuição de Conteúdo (CDN) para acelerar a entrega de sites e APIs', 'Roteamento DNS', 'Fazer backup de instâncias EC2'], correct: 'B', exp: 'CloudFront é o CDN da AWS que armazena cache de dados em Edge Locations globais para diminuir a latência do usuário.' },
  { id: 164, domain: 'D3', domainName: 'Tecnologia e Serviços', text: 'Qual política de roteamento do Amazon Route 53 direciona o tráfego de um usuário para a Região da AWS que fornece o menor tempo de resposta?', options: ['Weighted Routing', 'Failover Routing', 'Latency Routing', 'Geolocation Routing'], correct: 'C', exp: 'A política baseada em latência avalia a conexão do usuário e o envia para a região AWS que responderá mais rápido.' },
  { id: 165, domain: 'D3', domainName: 'Tecnologia e Serviços', text: 'Qual ferramenta ajuda a migrar bancos de dados de forma segura para a AWS, mantendo o banco de dados de origem totalmente operacional durante a migração?', options: ['AWS Server Migration Service', 'AWS Database Migration Service (DMS)', 'AWS Snowball', 'AWS DataSync'], correct: 'B', exp: 'AWS DMS facilita a migração relacional e NoSQL de forma rápida, segura e com mínimo tempo de inatividade (zero downtime).' },
  { id: 166, domain: 'D3', domainName: 'Tecnologia e Serviços', text: 'Para transferir 100 Petabytes de dados contidos em um data center antigo para a AWS em poucas semanas, o serviço físico mais adequado é o:', options: ['AWS Direct Connect', 'AWS Snowmobile', 'AWS Snowcone', 'Amazon S3 Multipart Upload'], correct: 'B', exp: 'AWS Snowmobile é um caminhão que transporta até 100 PB de dados fisicamente em escala Exabyte.' },
  { id: 167, domain: 'D3', domainName: 'Tecnologia e Serviços', text: 'Qual banco de dados da AWS é especificamente otimizado e desenhado para trabalhar com modelos de grafos (relacionamentos altamente conectados, como redes sociais)?', options: ['Amazon DynamoDB', 'Amazon RDS', 'Amazon Neptune', 'Amazon DocumentDB'], correct: 'C', exp: 'Amazon Neptune é um serviço de banco de dados de grafos rápido, confiável e totalmente gerenciado.' },
  { id: 168, domain: 'D3', domainName: 'Tecnologia e Serviços', text: 'Se uma empresa utiliza MongoDB on-premises e deseja migrar para um serviço compatível gerenciado na AWS, ela deve usar:', options: ['Amazon DocumentDB', 'Amazon DynamoDB', 'Amazon RDS', 'Amazon Redshift'], correct: 'A', exp: 'Amazon DocumentDB (com compatibilidade com MongoDB) é o banco NoSQL de documentos gerenciado pela AWS.' },
  { id: 169, domain: 'D3', domainName: 'Tecnologia e Serviços', text: 'O serviço que permite aos usuários acessar aplicativos de desktop via navegador web sem precisarem instalar o aplicativo localmente é o:', options: ['Amazon WorkSpaces', 'Amazon AppStream 2.0', 'AWS Elastic Beanstalk', 'Amazon EC2'], correct: 'B', exp: 'Amazon AppStream 2.0 é um serviço de streaming de aplicativos que entrega apps desktop para qualquer computador de forma segura.' },
  { id: 170, domain: 'D3', domainName: 'Tecnologia e Serviços', text: 'Qual serviço fornece uma solução completa e segura de Desktop as a Service (DaaS) baseada na nuvem (Virtual Desktop Infrastructure)?', options: ['Amazon WorkSpaces', 'Amazon EC2', 'Amazon Lightsail', 'AWS Fargate'], correct: 'A', exp: 'Amazon WorkSpaces substitui infraestruturas complexas de VDI, fornecendo áreas de trabalho completas Windows/Linux gerenciadas na nuvem.' },
  { id: 171, domain: 'D3', domainName: 'Tecnologia e Serviços', text: 'O serviço de contact center em nuvem omnicanal da AWS, usado para configurar atendimento ao cliente e suporte por voz/chat, é o:', options: ['Amazon Connect', 'Amazon Chime', 'Amazon SES', 'AWS Pinpoint'], correct: 'A', exp: 'Amazon Connect é a solução de Contact Center da AWS fácil de usar, baseada em IA e escalável.' }
];

const DOMAIN_4_QUESTIONS = [
  // Domínio 4: Cobrança, Preços e Suporte (24 Questões)
  
  // -- Originais adaptadas para o novo ID (172 a 179) --
  { id: 172, domain: 'D4', domainName: 'Cobrança, Preços e Suporte', text: 'Qual ferramenta permite definir orçamentos personalizados de custos e uso, enviando alertas ao ultrapassar limites?', options: ['AWS Cost Explorer', 'AWS Budgets', 'AWS Pricing Calculator', 'AWS Trusted Advisor'], correct: 'B', exp: 'AWS Budgets permite criar alertas personalizados quando custos previstos ou reais ultrapassam metas.' },
  { id: 173, domain: 'D4', domainName: 'Cobrança, Preços e Suporte', text: 'Qual ferramenta visual do AWS Billing permite analisar custos passados e projetar gastos futuros com gráficos em linha do tempo?', options: ['AWS Budgets', 'AWS Cost Explorer', 'AWS License Manager', 'AWS Purchase Order Management'], correct: 'B', exp: 'AWS Cost Explorer analisa histórico e tendências de gastos por serviços e tags.' },
  { id: 174, domain: 'D4', domainName: 'Cobrança, Preços e Suporte', text: 'Para estimar o custo mensal aproximado de uma nova arquitetura ANTES de implantá-la na AWS, usa-se:', options: ['AWS Pricing Calculator', 'AWS Cost Explorer', 'AWS Budgets', 'AWS Support Center'], correct: 'A', exp: 'AWS Pricing Calculator é a calculadora de estimativa prévia de projetos.' },
  { id: 175, domain: 'D4', domainName: 'Cobrança, Preços e Suporte', text: 'O recurso Consolidated Billing no AWS Organizations oferece como benefício direto:', options: ['Uma fatura única combinando gastos e potencial desconto por volume agregado entre contas', 'Acesso gratuito ao plano Enterprise Support', 'Eliminação completa das taxas de transferência de dados', 'Criptografia automática de buckets S3'], correct: 'A', exp: 'Consolidated Billing consolida pagamentos e acumula volume de consumo para faixas com desconto.' },
  { id: 176, domain: 'D4', domainName: 'Cobrança, Preços e Suporte', text: 'Qual plano de suporte AWS oferece suporte 24/7 via chat e telefone com resposta de até 1 hora para falhas de produção?', options: ['AWS Developer Support', 'AWS Business Support', 'AWS Basic Support', 'AWS Individual Support'], correct: 'B', exp: 'Business Support cobre cargas em produção 24/7 com resposta ágil.' },
  { id: 177, domain: 'D4', domainName: 'Cobrança, Preços e Suporte', text: 'Qual recurso está disponível sem custo adicional para TODOS os planos de suporte da AWS?', options: ['Engenheiro de Suporte Técnico dedicado', 'AWS Health Dashboard e atendimento básico de conta/cobrança', 'Revisões de arquitetura individuais', 'Acesso direto a TAM (Technical Account Manager)'], correct: 'B', exp: 'Todos os clientes possuem suporte básico de faturamento e visualização do AWS Health Dashboard.' },
  { id: 178, domain: 'D4', domainName: 'Cobrança, Preços e Suporte', text: 'As cinco categorias inspecionadas pelo AWS Trusted Advisor para otimizar a conta são:', options: ['Custo, Desempenho, Segurança, Tolerância a Falhas e Limites de Serviço', 'Rede, Disco, CPU, Memória e GPU', 'Desenvolvimento, Teste, Staging, Produção e Backup', 'IAM, VPC, S3, EC2 e RDS'], correct: 'A', exp: 'Trusted Advisor avalia otimização de custo, segurança, desempenho, tolerância a falhas e limites de cota.' },
  { id: 179, domain: 'D4', domainName: 'Cobrança, Preços e Suporte', text: 'Se uma empresa suspeitar que seus recursos AWS estão envolvidos em atividades maliciosas ou spam, deve contatar:', options: ['AWS Technical Account Manager', 'AWS Abuse Team', 'AWS Concierge', 'AWS Security Hub'], correct: 'B', exp: 'A equipe da AWS Trust & Safety / Abuse trata incidentes de uso indevido de recursos.' },

  // -- Novas Questões Exclusivas (180 a 195) --
  { id: 180, domain: 'D4', domainName: 'Cobrança, Preços e Suporte', text: 'Qual relatório da AWS fornece os dados de faturamento mais abrangentes e granulares (nível de hora e recurso) para análise profunda?', options: ['AWS Cost and Usage Report (CUR)', 'AWS Billing Dashboard', 'AWS Cost Explorer', 'AWS Trusted Advisor'], correct: 'A', exp: 'O AWS Cost and Usage Report (CUR) entrega os dados de faturamento mais detalhados, geralmente exportados para o S3 para análise no Athena.' },
  { id: 181, domain: 'D4', domainName: 'Cobrança, Preços e Suporte', text: 'Para rastrear e categorizar com precisão os custos da AWS por departamento (ex: Marketing, TI) ou projeto, uma empresa deve utilizar:', options: ['Sub-redes isoladas', 'Tags de Alocação de Custos (Cost Allocation Tags)', 'Múltiplas instâncias EC2', 'Múltiplas Zonas de Disponibilidade'], correct: 'B', exp: 'Tags (etiquetas) são metadados que, quando ativados para alocação de custos, permitem filtrar o Cost Explorer por centro de custo ou projeto.' },
  { id: 182, domain: 'D4', domainName: 'Cobrança, Preços e Suporte', text: 'O acesso a um Technical Account Manager (TAM) designado, que atua como consultor de arquitetura proativo, está incluído em qual plano de suporte?', options: ['Developer', 'Business', 'Basic', 'Enterprise'], correct: 'D', exp: 'Apenas os planos Enterprise e Enterprise On-Ramp fornecem acesso a um TAM designado.' },
  { id: 183, domain: 'D4', domainName: 'Cobrança, Preços e Suporte', text: 'Qual é o princípio fundamental de cobrança sobre transferência de dados na infraestrutura AWS?', options: ['A entrada de dados (Inbound/Ingress) é sempre cobrada', 'A saída de dados (Outbound/Egress) para a internet é cobrada, mas a entrada de dados (Inbound) costuma ser gratuita', 'Não há cobrança de rede em nenhuma hipótese', 'As transferências entre Regiões diferentes são gratuitas'], correct: 'B', exp: 'A regra de ouro da AWS é: Inbound de dados é grátis. Outbound (transferência para fora da AWS para a internet) é cobrado.' },
  { id: 184, domain: 'D4', domainName: 'Cobrança, Preços e Suporte', text: 'Qual modelo de precificação oferece flexibilidade para mudar tipos de instâncias EC2, sistemas operacionais e regiões, mantendo grandes descontos em troca de um compromisso financeiro de uso (ex: US$ 10/hora) por 1 a 3 anos?', options: ['Instâncias Spot', 'AWS Budgets', 'Savings Plans (Compute Savings Plans)', 'Instâncias Reservadas Padrão'], correct: 'C', exp: 'Os Compute Savings Plans oferecem descontos profundos com muito mais flexibilidade que as Instâncias Reservadas tradicionais.' },
  { id: 185, domain: 'D4', domainName: 'Cobrança, Preços e Suporte', text: 'Qual plano de suporte AWS é o mais barato (além do plano gratuito) e fornece acesso a suporte técnico por e-mail apenas em horário comercial?', options: ['AWS Basic Support', 'AWS Developer Support', 'AWS Business Support', 'AWS Enterprise Support'], correct: 'B', exp: 'O AWS Developer Support é desenhado para testar e construir na AWS, oferecendo suporte via e-mail (geralmente com SLA de 12 a 24h).' },
  { id: 186, domain: 'D4', domainName: 'Cobrança, Preços e Suporte', text: 'Como funcionam os descontos por volume no Amazon S3 e no Data Transfer Out?', options: ['O preço por Gigabyte diminui à medida que o volume total de consumo aumenta mensalmente', 'Os descontos dependem de negociação com o CEO da AWS', 'Os descontos são ativados apenas no final do ano', 'Não existem descontos por volume na AWS'], correct: 'A', exp: 'A AWS aplica o conceito "Pague menos consumindo mais" (Tiered pricing); o custo unitário por GB cai ao atingir novos patamares de volume.' },
  { id: 187, domain: 'D4', domainName: 'Cobrança, Preços e Suporte', text: 'O nível de faturamento por segundo (Per-Second Billing) na AWS se aplica nativamente a:', options: ['Transferência de dados no Amazon CloudFront', 'Instâncias do Amazon EC2 (Linux e Ubuntu) e instâncias Spot', 'Armazenamento S3 Glacier', 'Suporte Técnico Enterprise'], correct: 'B', exp: 'Para instâncias Linux no EC2, o faturamento é feito em incrementos de um segundo (com um mínimo de 60 segundos).' },
  { id: 188, domain: 'D4', domainName: 'Cobrança, Preços e Suporte', text: 'Uma startup precisa de ajuda exclusiva e especializada em questões de faturamento e conta da AWS (Billing/Account expert). Qual recurso do suporte Enterprise foca nisso?', options: ['AWS Concierge Support Team', 'Technical Account Manager (TAM)', 'AWS Support API', 'Infrastructure Event Management (IEM)'], correct: 'A', exp: 'O Concierge Support atua como especialista sênior em questões administrativas, de faturamento e consolidação de contas no plano Enterprise.' },
  { id: 189, domain: 'D4', domainName: 'Cobrança, Preços e Suporte', text: 'Quais são as três variáveis principais que influenciam o custo mensal padrão de um banco de dados Amazon RDS?', options: ['Horas de execução do banco, quantidade de dados armazenados e taxa de transferência de dados (outbound)', 'Tipo de teclado do usuário, sistema operacional do administrador e horário de login', 'Quantidade de instâncias EC2, número de usuários IAM e tabelas criadas', 'Nenhum, RDS é totalmente gratuito'], correct: 'A', exp: 'O custo do RDS depende da classe da instância e horas rodadas, armazenamento alocado e dados transferidos para fora.' },
  { id: 190, domain: 'D4', domainName: 'Cobrança, Preços e Suporte', text: 'Ao acessar o AWS Trusted Advisor, qual check específico estaria sob a categoria "Otimização de Custos"?', options: ['Grupos de segurança (Security Groups) com portas abertas', 'Limites elásticos de IP próximos ao máximo', 'Instâncias EC2 ociosas ou com baixo uso (Underutilized)', 'Falta de backup em Múltiplas AZs'], correct: 'C', exp: 'Identificar recursos ociosos, IPs não associados e EBS desanexados são verificações típicas de otimização de custo do Trusted Advisor.' },
  { id: 191, domain: 'D4', domainName: 'Cobrança, Preços e Suporte', text: 'O programa de planejamento assistido da AWS projetado para ajudar clientes em lançamentos de produtos de grande escala, migrações e eventos de marketing (como Black Friday) chama-se:', options: ['AWS Infrastructure Event Management (IEM)', 'AWS Personal Health Dashboard', 'AWS Budgets', 'AWS Free Tier'], correct: 'A', exp: 'O IEM é um programa de suporte proativo incluído nos planos Enterprise e (por taxa adicional) no Business, garantindo que eventos de pico corram bem.' },
  { id: 192, domain: 'D4', domainName: 'Cobrança, Preços e Suporte', text: 'Como um cliente recém-criado pode testar e experimentar mais de 100 serviços da AWS (como EC2 t2.micro e S3 5GB) gratuitamente durante seu primeiro ano?', options: ['Comprando um Savings Plan', 'Utilizando as ofertas do AWS Free Tier (Nível Gratuito)', 'Negociando com um TAM', 'A AWS não possui níveis gratuitos'], correct: 'B', exp: 'O AWS Free Tier inclui ofertas gratuitas por 12 meses, testes e ofertas "sempre gratuitas" até certos limites de uso para novas contas.' },
  { id: 193, domain: 'D4', domainName: 'Cobrança, Preços e Suporte', text: 'Qual ferramenta baseada em Machine Learning da AWS permite criar alertas que avisam proativamente se os gastos da conta apresentarem anomalias e picos atípicos repentinos?', options: ['AWS Cost Anomaly Detection', 'Amazon Macie', 'Amazon Inspector', 'AWS Pricing Calculator'], correct: 'A', exp: 'O Cost Anomaly Detection utiliza ML para identificar comportamentos de faturamento anormais e emitir alertas via SNS, reduzindo surpresas na fatura.' },
  { id: 194, domain: 'D4', domainName: 'Cobrança, Preços e Suporte', text: 'Uma grande vantagem de criar um AWS Organizations para a gestão financeira de uma empresa com dezenas de setores é:', options: ['Garantir que a AWS instale servidores no escritório da empresa', 'Aplicar um limite único de velocidade de rede', 'Poder centralizar e consolidar o faturamento de todas as contas departamentais em uma única fatura pagadora', 'Desabilitar a cobrança em contas antigas'], correct: 'C', exp: 'Organizations simplifica o faturamento permitindo que a conta principal (Management Account) pague todas as faturas das contas membros unificadamente.' },
  { id: 195, domain: 'D4', domainName: 'Cobrança, Preços e Suporte', text: 'Qual nível de suporte AWS fornece SLA de tempo de resposta inferior a 15 minutos para sistemas críticos de negócios fora do ar?', options: ['AWS Basic Support', 'AWS Developer Support', 'AWS Business Support', 'AWS Enterprise Support'], correct: 'D', exp: 'O Enterprise Support é o único plano que oferece um SLA de tempo de resposta de 15 minutos ou menos para eventos críticos de indisponibilidade.' }
];

// Cole aqui o banco de dados do dominio 1 ao 5

// Junta todos os bancos de dados em um só lugar
const MASTER_DB = [
  ...DOMAIN_1_QUESTIONS,
  ...DOMAIN_2_QUESTIONS,
  ...DOMAIN_3_QUESTIONS,
  ...DOMAIN_4_QUESTIONS
];

// Função embaralhadora (Fisher-Yates Shuffle)
function shuffle(array) {
  let currentIndex = array.length, randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
}

// Algoritmo de geração da prova exata de 65 questões proporcionais
function generateExam() {
  const d1 = shuffle(MASTER_DB.filter(q => q.domain === 'D1')).slice(0, 16);
  const d2 = shuffle(MASTER_DB.filter(q => q.domain === 'D2')).slice(0, 19);
  const d3 = shuffle(MASTER_DB.filter(q => q.domain === 'D3')).slice(0, 22);
  const d4 = shuffle(MASTER_DB.filter(q => q.domain === 'D4')).slice(0, 8);
  
  // Concatena tudo e renomeia os IDs de 1 a 65 para visualização correta na interface
  let exam = [...d1, ...d2, ...d3, ...d4];
  exam = exam.map((q, index) => ({ ...q, id: index + 1 }));
  
  return exam;
}

// Estado Global da Aplicação
let QUESTIONS_DATA = generateExam();
let currentFilteredQuestions = [...QUESTIONS_DATA];
let currentIndex = 0;
let userAnswers = {};
let studyAnswers = {};
let proofAnswers = {};
let finalAnswers = {};
let isStudyMode = true;
let timerSeconds = 0;
let timerInterval = null;
let timerStarted = false;
let quizFinished = false;
let chartInstance = null;

function syncModeAnswers() {
  userAnswers = isStudyMode ? { ...studyAnswers } : { ...proofAnswers };
}

function saveModeAnswers() {
  if (isStudyMode) {
    studyAnswers = { ...userAnswers };
  } else {
    proofAnswers = { ...userAnswers };
  }
}

// ==========================================
// FUNÇÕES DE UTILIDADE E TEMA
// ==========================================

function getCssVar(name) {
  if (!name) return '';
  const clean = name.replace(/^var\(/, '').replace(/\)$/, '').trim();
  return getComputedStyle(document.documentElement).getPropertyValue(clean.startsWith('--') ? clean : '--' + clean).trim();
}

function getLumiChartTokens() {
  const cs = getComputedStyle(document.documentElement);
  return {
    fontFamily: cs.getPropertyValue('--ff-sans').trim() || "sans-serif",
    monoFamily: cs.getPropertyValue('--ff-mono').trim() || "monospace",
    textColor: cs.getPropertyValue('--on-surface').trim() || '#000000',
    deEmphasisColor: cs.getPropertyValue('--on-surface-variant').trim() || 'rgba(0,0,0,0.55)',
    gridColor: cs.getPropertyValue('--stroke-default').trim() || 'rgba(0,0,0,0.08)',
    surfaceColor: cs.getPropertyValue('--surface-bright').trim() || '#ffffff',
    series: [
      cs.getPropertyValue('--chart-1').trim() || '#2575fc',
      cs.getPropertyValue('--chart-3').trim() || '#228a49',
      cs.getPropertyValue('--chart-8').trim() || '#997112',
      cs.getPropertyValue('--chart-10').trim() || '#c84288'
    ]
  };
}

// ==========================================
// LÓGICA DO CRONÓMETRO E MODOS
// ==========================================

function updateTimerHint(message) {
  const hint = document.getElementById('timer-hint');
  if (hint) hint.textContent = message;
}

function setTimerDisplay() {
  const m = String(Math.floor(timerSeconds / 60)).padStart(2, '0');
  const s = String(timerSeconds % 60).padStart(2, '0');
  const el = document.getElementById('timer-display');
  if (el) el.textContent = `${m}:${s}`;
}

function stopTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
}

function startTimer() {
  timerStarted = true;
  quizFinished = false;
  currentFilteredQuestions = [...QUESTIONS_DATA];
  currentIndex = 0;
  updateModeButtonState();
  if (timerInterval) return;

  timerInterval = setInterval(() => {
    timerSeconds++;
    setTimerDisplay();
  }, 1000);

  if (isStudyMode) {
    updateTimerHint('Cronômetro em andamento. Clique novamente para pausar.');
  } else {
    updateTimerHint('Modo prova: o cronômetro não pode ser pausado.');
  }

  updateViz();
}

function pauseTimer() {
  if (!timerStarted || !isStudyMode || !timerInterval) return;
  stopTimer();
  updateModeButtonState();
  updateTimerHint('Cronômetro pausado. Clique novamente para continuar.');
}

function toggleTimer() {
  if (!timerStarted) {
    startTimer();
    return;
  }

  if (!isStudyMode) {
    updateTimerHint('Modo prova: o cronômetro não pode ser pausado.');
    return;
  }

  if (timerInterval) {
    pauseTimer();
  } else {
    startTimer();
  }
}

function updateModeButtonState() {
  const btn = document.getElementById('btn-mode');
  if (!btn) return;

  const quizActive = timerStarted || (!quizFinished && Object.keys(userAnswers).length > 0);
  btn.disabled = quizActive;
  btn.title = quizActive ? 'Finalize a prova para trocar de modo.' : 'Alternar entre Estudo e Prova';
}

function toggleMode() {
  const quizActive = timerStarted || (!quizFinished && Object.keys(userAnswers).length > 0);

  if (quizActive) {
    updateTimerHint('A prova está em andamento. Finalize a prova para trocar de modo.');
    window.alert('A prova está em andamento. Finalize a prova antes de trocar entre Estudo e Prova.');
    return;
  }

  saveModeAnswers();
  isStudyMode = !isStudyMode;
  syncModeAnswers();

  const btn = document.getElementById('btn-mode');
  const explainBtn = document.getElementById('btn-explain');

  document.body.classList.remove('dark-mode');
  document.documentElement.setAttribute('data-theme', 'light');

  if (btn) btn.textContent = `Modo: ${isStudyMode ? 'Estudo' : 'Prova'}`;
  if (explainBtn) {
    explainBtn.style.display = isStudyMode ? 'inline-flex' : 'none';
  }

  if (!isStudyMode && timerStarted && timerInterval) {
    updateTimerHint('Modo prova: o cronômetro não pode ser pausado.');
  } else if (isStudyMode && timerStarted && !timerInterval) {
    updateTimerHint('Cronômetro pausado. Clique novamente para continuar.');
  } else if (isStudyMode && timerStarted && timerInterval) {
    updateTimerHint('Cronômetro em andamento. Clique novamente para pausar.');
  } else if (!timerStarted) {
    updateTimerHint('Clique no relógio para iniciar a contagem.');
  }

  updateViz();
}

function setDomainFilter(domainKey, buttonEl = null) {
  document.querySelectorAll('#domain-filters .lumi-chip').forEach(btn => btn.classList.remove('is-active'));
  const targetButton = buttonEl || document.querySelector(`#domain-filters button[data-domain="${domainKey}"]`);
  if (targetButton) {
    targetButton.classList.add('is-active');
  }

  if (domainKey === 'ALL') {
    currentFilteredQuestions = [...QUESTIONS_DATA];
  } else {
    currentFilteredQuestions = QUESTIONS_DATA.filter(q => q.domain === domainKey);
  }
  currentIndex = 0;
  updateViz();
}

// ==========================================
// NAVEGAÇÃO E INTERAÇÃO COM A QUESTÃO
// ==========================================

function prevQuestion() {
  if (currentIndex > 0) {
    currentIndex--;
    updateViz();
  }
}

function nextQuestion() {
  if (currentIndex < currentFilteredQuestions.length - 1) {
    currentIndex++;
    updateViz();
  }
}

function jumpToQuestion(idx) {
  currentIndex = idx;
  updateViz();
}

function selectOption(optKey) {
  const q = currentFilteredQuestions[currentIndex];
  if (!q) return;
  quizFinished = false;
  userAnswers[q.id] = optKey;
  saveModeAnswers();
  updateModeButtonState();
  updateViz();
}

function toggleExplanation() {
  const box = document.getElementById('q-explanation');
  if (box) box.classList.toggle('is-visible');
}

// ==========================================
// ATUALIZAÇÃO DA INTERFACE (UI)
// ==========================================

function updateViz() {
  const explainBtn = document.getElementById('btn-explain');
  if (explainBtn) {
    explainBtn.style.display = isStudyMode ? 'inline-flex' : 'none';
  }

  const quizView = document.getElementById('quiz-view');
  const reportView = document.getElementById('report-view');
  const instructionsView = document.getElementById('instructions-view');
  const qText = document.getElementById('q-text');
  const optionContainer = document.getElementById('q-options');
  const gridContainer = document.getElementById('q-grid-container');
  const expBox = document.getElementById('q-explanation');
  const expText = document.getElementById('explanation-text');

  if (instructionsView) {
    instructionsView.style.display = (!timerStarted && !quizFinished) ? 'block' : 'none';
  }

  if (!timerStarted && !quizFinished) {
    if (quizView) quizView.style.display = 'none';
    if (reportView) reportView.classList.remove('is-active');
    if (qText) qText.textContent = 'Aguardando início do simulado...';
    if (optionContainer) optionContainer.innerHTML = '';
    if (gridContainer) gridContainer.innerHTML = '';
    if (expBox) expBox.classList.remove('is-visible');
    if (expText) expText.textContent = '';
    return;
  }

  if (quizFinished && !timerStarted) {
    if (quizView) quizView.style.display = 'none';
    if (reportView) reportView.classList.add('is-active');
    if (qText) qText.textContent = 'Aguardando início do simulado...';
    if (optionContainer) optionContainer.innerHTML = '';
    if (gridContainer) gridContainer.innerHTML = '';
    if (expBox) expBox.classList.remove('is-visible');
    if (expText) expText.textContent = '';
    return;
  }

  if (quizView) quizView.style.display = 'block';
  if (reportView) reportView.classList.remove('is-active');

  const q = currentFilteredQuestions[currentIndex];
  if (!q) {
    if (qText) qText.textContent = 'Aguardando início do simulado...';
    if (optionContainer) optionContainer.innerHTML = '';
    if (gridContainer) gridContainer.innerHTML = '';
    if (expBox) expBox.classList.remove('is-visible');
    if (expText) expText.textContent = '';
    return;
  }
  if (!q) return;

  // Atualiza Metadados
  document.getElementById('q-domain-label').textContent = `${q.domainName}`;
  document.getElementById('q-progress-label').textContent = `Questão ${currentIndex + 1} de ${currentFilteredQuestions.length}`;
  document.getElementById('q-text').textContent = `${q.id}. ${q.text}`;

  // Atualiza Opções
  const optContainer = document.getElementById('q-options');
  if (optContainer) optContainer.innerHTML = '';

  const keys = ['A', 'B', 'C', 'D'];
  const userAns = userAnswers[q.id];

  q.options.forEach((optText, i) => {
    const key = keys[i];
    const btn = document.createElement('button');
    btn.className = 'option-btn';

    if (userAns === key) {
      btn.classList.add('is-selected');
    }

    // No modo estudo, revela a resposta certa/errada imediatamente
    if (isStudyMode && userAns) {
      if (key === q.correct) {
        btn.classList.add('is-correct-reveal');
      } else if (userAns === key && userAns !== q.correct) {
        btn.classList.add('is-wrong-reveal');
      }
    }

    if (btn) btn.innerHTML = `<span class="option-key">${key}.</span> <span>${optText}</span>`;
    btn.onclick = () => selectOption(key);
    optContainer.appendChild(btn);
  });

  // Atualiza Caixa de Explicação
  if (expText) expText.textContent = q.exp;

  if (isStudyMode && userAns) {
    expBox.classList.add('is-visible');
  } else {
    expBox.classList.remove('is-visible');
  }

  renderGrid();

  // Estado dos botões de navegação
  document.getElementById('btn-prev').disabled = (currentIndex === 0);
  document.getElementById('btn-next').disabled = (currentIndex === currentFilteredQuestions.length - 1);
}

function renderGrid() {
  const grid = document.getElementById('q-grid-container');
  if (grid) grid.innerHTML = '';

  currentFilteredQuestions.forEach((q, idx) => {
    const btn = document.createElement('button');
    btn.className = 'q-num-btn';
    if (idx === currentIndex) btn.classList.add('is-current');

    const ans = userAnswers[q.id];
    if (ans) {
      btn.classList.add('is-answered');
      if (isStudyMode) {
        if (ans === q.correct) btn.classList.add('is-correct');
        else btn.classList.add('is-wrong');
      }
    }

    if (btn) btn.textContent = q.id;
    btn.onclick = () => jumpToQuestion(idx);
    grid.appendChild(btn);
  });
}

// ==========================================
// RELATÓRIO E FINALIZAÇÃO DA PROVA
// ==========================================

function finishQuiz() {
  stopTimer();
  saveModeAnswers();
  finalAnswers = { ...userAnswers };
  timerSeconds = 0;
  timerStarted = false;
  quizFinished = true;
  currentFilteredQuestions = [];
  setTimerDisplay();
  updateModeButtonState();
  updateTimerHint('Prova finalizada. Revise as respostas ou gere um novo simulado.');

  document.getElementById('quiz-view').style.display = 'none';
  const reportView = document.getElementById('report-view');
  reportView.classList.add('is-active');

  let totalCorrect = 0;
  const domainStats = {
    'D1': { name: 'Conceitos de Nuvem', total: 0, correct: 0 },
    'D2': { name: 'Segurança e Conformidade', total: 0, correct: 0 },
    'D3': { name: 'Tecnologia e Serviços', total: 0, correct: 0 },
    'D4': { name: 'Cobrança, Preços e Suporte', total: 0, correct: 0 }
  };

  QUESTIONS_DATA.forEach(q => {
    domainStats[q.domain].total++;
    if (userAnswers[q.id] === q.correct) {
      totalCorrect++;
      domainStats[q.domain].correct++;
    }
  });

  const totalPct = Math.round((totalCorrect / QUESTIONS_DATA.length) * 100);
  document.getElementById('final-score-pct').textContent = `${totalPct}%`;
  document.getElementById('final-score-count').textContent = `${totalCorrect} de ${QUESTIONS_DATA.length} acertos`;

  const statusBadge = document.getElementById('status-pill-badge');
  if (totalPct >= 70) {
    if (statusBadge) statusBadge.textContent = 'Aprovado (70%+ Target)';
    statusBadge.className = 'status-pill status-passed';
  } else {
    if (statusBadge) statusBadge.textContent = 'Abaixo da Meta (<70%)';
    statusBadge.className = 'status-pill status-failed';
  }

  // Lista de Feedback por Domínio
  const fbList = document.getElementById('domain-feedback-list');
  if (fbList) fbList.innerHTML = '';
  Object.keys(domainStats).forEach(key => {
    const d = domainStats[key];
    const pct = d.total > 0 ? Math.round((d.correct / d.total) * 100) : 0;
    const card = document.createElement('div');
    card.style.cssText = 'padding: 10px 12px; background: var(--surface-dim); border-radius: var(--r-s); display: flex; justify-content: space-between; align-items: center; font-size: 13px; border: 1px solid var(--stroke-default);';
    if (card) card.innerHTML = `
      <div>
        <strong style="color: var(--on-surface);">${d.name}</strong>
        <div style="font-size: 12px; color: var(--on-surface-variant); margin-top: 2px;">${d.correct} de ${d.total} questões certas</div>
      </div>
      <span class="lumi-code" style="font-weight: 600; color: ${pct >= 70 ? 'var(--positive)' : 'var(--error)'};">${pct}%</span>
    `;
    fbList.appendChild(card);
  });

  renderReportChart(domainStats);
}

function renderReportChart(stats) {
  if (typeof Chart === 'undefined') return;
  const ctx = document.getElementById('reportChart');
  if (!ctx) return;

  if (chartInstance) {
    chartInstance.destroy();
  }

  const t = getLumiChartTokens();
  const labels = Object.values(stats).map(d => d.name);
  const dataPct = Object.values(stats).map(d => d.total > 0 ? Math.round((d.correct / d.total) * 100) : 0);

  chartInstance = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Aproveitamento (%)',
        data: dataPct,
        backgroundColor: dataPct.map(v => v >= 70 ? t.series[1] : t.series[3]),
        borderRadius: { topLeft: 99, topRight: 99, bottomLeft: 0, bottomRight: 0 },
        maxBarThickness: 32
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: { duration: 500 },
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: t.surfaceColor,
          titleColor: t.textColor,
          bodyColor: t.deEmphasisColor,
          borderColor: t.gridColor,
          borderWidth: 1
        }
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: { color: t.deEmphasisColor, font: { family: t.monoFamily, size: 11 } }
        },
        y: {
          min: 0,
          max: 100,
          grid: { color: t.gridColor },
          ticks: {
            color: t.deEmphasisColor,
            font: { family: t.monoFamily, size: 11 },
            callback: v => `${v}%`
          }
        }
      }
    }
  });
}

function reviewQuiz() {
  currentIndex = 0;
  isStudyMode = true;
  const reviewAnswers = Object.keys(finalAnswers).length ? { ...finalAnswers } : { ...userAnswers };
  studyAnswers = { ...reviewAnswers };
  proofAnswers = { ...reviewAnswers };
  userAnswers = { ...reviewAnswers };
  document.body.classList.remove('dark-mode');
  document.documentElement.setAttribute('data-theme', 'light');
  document.getElementById('btn-mode').textContent = 'Modo: Estudo';
  setDomainFilter('ALL');
  currentFilteredQuestions = [...QUESTIONS_DATA];
  timerStarted = true;
  quizFinished = false;
  updateViz();
}

function resetQuiz() {
  userAnswers = {};
  studyAnswers = {};
  proofAnswers = {};
  finalAnswers = {};
  timerSeconds = 0;
  timerStarted = false;
  quizFinished = false;
  currentFilteredQuestions = [];
  currentIndex = 0;
  stopTimer();
  updateModeButtonState();
  setTimerDisplay();
  updateTimerHint('Clique no relógio para iniciar a contagem.');
  updateViz();
}

function generateNewSimulated() {
  QUESTIONS_DATA = generateExam();
  currentFilteredQuestions = [];
  resetQuiz(); 
  updateViz();
}

// ==========================================
// INICIALIZAÇÃO
// ==========================================

function init() {
  setTimerDisplay();
  updateTimerHint('Clique no relógio para iniciar a contagem.');
  currentFilteredQuestions = [];
  quizFinished = false;
  timerStarted = false;
  updateModeButtonState();
  const timerBadge = document.getElementById('timer-badge');
  if (timerBadge) timerBadge.addEventListener('click', toggleTimer);
  syncModeAnswers();
  updateViz();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}