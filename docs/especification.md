# Especificações do Projeto

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas
Fã de Longa Data - João: João tem 38 anos e começou a colecionar quadrinhos da Marvel quando tinha apenas 10 anos. Sua coleção é impressionante, com mais de 1.000 edições. Ele tem uma conexão sentimental com suas HQs, muitas delas passadas de geração em geração. João quer usar o Banca Comics para digitalizar e organizar cuidadosamente sua coleção, preservando-a para futuras gerações.

Novato Empolgado - Maria: Maria é uma estudante universitária de 22 anos que recentemente assistiu a um filme da Marvel e ficou fascinada pelo universo dos super-heróis. Ela está ansiosa para começar a ler quadrinhos e explorar a história por trás dos personagens. O Banca Comics será seu guia introdutório para mergulhar de cabeça nesse mundo.


Artista Amador - Pedro: Com 25 anos, Pedro sonha em se tornar um artista de quadrinhos profissional. Ele cria suas próprias histórias e personagens, mas sente falta de uma plataforma onde possa compartilhar seu trabalho, receber críticas construtivas e aprender com outros artistas mais experientes. Ele vê o Banca Comics como uma oportunidade para aprimorar suas habilidades.

Pais e Filhos - Ana e Lucas: Ana, de 35 anos, e Lucas, de 10, compartilham um amor por super-heróis. Eles procuram uma maneira de fortalecer seu vínculo familiar e estão animados para usar o Banca Comics como uma plataforma para ler histórias juntos e discutir seus personagens favoritos durante o tempo de qualidade em família.


Colecionador Digital - Carla: Carla, uma executiva ocupada de 42 anos, não tem espaço para armazenar mais quadrinhos físicos em sua casa. Ela adora a ideia de ter uma coleção digital acessível de qualquer lugar e está ansiosa para usar o Banca Comics para organizar seus quadrinhos virtuais por série e arco de história.
Fã de Discussões - 

Luiz: Luiz, de 30 anos, é conhecido entre seus amigos como o especialista em super-heróis. Ele está ansioso para se juntar a fóruns e grupos de discussão no Banca Comics para analisar teorias e enredos das histórias da Marvel. Ele pretende passar horas debatendo com outros fãs.


Estudante de Literatura - Sofia: Sofia, de 24 anos, está concluindo seu mestrado em literatura comparada. Ela está interessada em analisar os aspectos literários das histórias de super-heróis, incluindo o desenvolvimento de personagens, simbolismo e temas recorrentes. O Banca Comics será uma fonte de material valioso para suas pesquisas acadêmicas.


Professor de História - André: André, com 45 anos, é um professor de história do ensino médio. Ele reconhece o potencial educacional das histórias em quadrinhos da Marvel para tornar as aulas mais envolventes. Ele planeja usar o Banca Comics para acessar quadrinhos relevantes para suas lições e compartilhar recursos com seus alunos.


Cosplayer - Renata: Renata, de 28 anos, é uma cosplayer talentosa. Ela busca inspiração para seus trajes e adora ver como outros fãs recriam os trajes dos personagens da Marvel. Ela planeja usar o Banca Comics para descobrir detalhes precisos sobre os trajes e se conectar com outros cosplayers.


Crítico de Quadrinhos - Marcos: Marcos é um crítico de quadrinhos de 32 anos que escreve análises detalhadas das últimas edições da Marvel. Ele está ansioso para usar o Banca Comics como uma plataforma para compartilhar suas resenhas e opiniões com uma comunidade engajada de fãs, estimulando discussões e debates saudáveis


Pedro Paulo tem 26 anos, é arquiteto recém-formado e autônomo. Pensa em se desenvolver profissionalmente através de um mestrado fora do país, pois adora viajar, é solteiro e sempre quis fazer um intercâmbio. Está buscando uma agência que o ajude a encontrar universidades na Europa que aceitem alunos estrangeiros.

## Histórias de Usuários

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Nerd e fã da Mavel  | Achar HQ's novas                   | Ler e aprender sobre herois novos      |
|Cosplayer e Geek    | Buscar inspiração para perfomances |Produzir conteudos mais fierl           |
|Crítico de quadrinhos|Ler HQ's recentes                  | Criticar/Dar opinião                   |
|Especialista em HQ's| Participar de foruns               |Compartilhar experiencias               |

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | Responsável |
|------|-----------------------------------------|----| ----|
|RF-001| Permitir que o usuário crie foruns para discussão | ALTA | GUILHERME |
|RF-002| Pemitir que o usuario crie uma conta   | ALTA |GUILHERME |
|RF-003| Possibilitar a busca por quadrinhos por personagem   | MÉDIA |MARCOS |
|RF-004| Possibilitar a busca por Autores por series   | MÉDIA |RODRIGO |
|RF-005| Possibilitar a busca por Herois por HQs   | MÉDIA |ANDONI |
|RF-004| Possibilitar a busca por Series por HQS   | MÉDIA |PERDRO |








### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade | Responsável |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | ANDONI|
|RNF-002| O projeto deve ter uma Usabilidade e Acessibilidade boa   | MÉDIA |MARCOS |
|RNF-003| O projeto deve ser apenas Web   | ALTA |PEDRO |
|RNF-004| O projeto deve consumir a API da Marvel   | ALTA | TODOS|
|RNF-005| O projeto deve seguir as leis de Direitos autorais  | ALTA |TODOS |
| RNF-07| Tempo de Resposta Mínimo: O sistema deve garantir um tempo de resposta médio inferior a 2 segundos para a maioria das interações do usuário, garantindo uma experiência ágil. | ALTA |MARCOS |
| RNF-08| Manutenibilidade: O código-fonte do software deve ser bem documentado e seguir boas práticas de programação para facilitar a manutenção contínua e futuras atualizações. | ALTA | PEDRO|

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
