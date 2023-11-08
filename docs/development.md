# Programação de Funcionalidades

Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.

# Implementação do Banca Comics

## Funcionalidades do Sistema

O sistema Banca Comics é uma plataforma dedicada a fãs de quadrinhos, oferecendo informações sobre heróis, histórias em quadrinhos (HQs) e séries relacionadas ao universo dos quadrinhos. A implementação da solução envolveu a criação de várias funcionalidades que atendem aos seguintes requisitos funcionais:

## Requisitos Atendidos

As tabelas que se seguem apresentam os requisitos funcionais e não-funcionais que relacionam o escopo do projeto com os artefatos criados:

### Requisitos Funcionais

|ID    | Descrição do Requisito | Prioridade | Artefato Criado |
|------|------------------------|------------|-----------------|
|RF-001| Pemitir que o usuario crie uma conta | ALTA | cadastrar.html |
|RF-002| Detalhar herois | ALTA | detalhe.html |
|RF-003| Detalhar hqs | ALTA | detalhehq.html |
|RF-004| Detalhar series | ALTA | detalheSerie.html |
|RF-005| Permitir o usuario discutir em foruns | ALTA | forum.html |

## Descrição das estruturas:

### Listagem de HQs, Heróis e Séries
- O sistema permite aos usuários visualizar uma lista de HQs, heróis e séries disponíveis. Essas informações são consumidas a partir da API da Marvel, que fornece dados atualizados sobre personagens e histórias em quadrinhos.

- ### Detalhamento de Heróis e HQs
- Os usuários podem selecionar um herói ou HQ específico para obter informações detalhadas. Ao selecionar um item, o sistema exibe informações como nome, descrição e uma imagem representativa.
  
## Herói
|  **Nome**           | **Tipo**          | **Descrição**                              | **Exemplo** |
|:-------------------:|-------------------|--------------------------------------------|-------------|
| Id                  | Número (Inteiro)  | Identificador único do herói              | 1           |
| Nome                | Texto             | Nome do herói                              | Homem-Aranha |
| Descrição           | Texto             | Descrição do herói                         | O Homem-Aranha é um dos super-heróis mais icônicos da Marvel, conhecido por suas habilidades aracnídeas e senso de responsabilidade. |
| Imagem Representativa | Imagem           | Imagem representativa do herói           | ![Homem-Aranha](https://example.com/heroi1.jpg) |
| Quadrinhos         | Lista de Quadrinhos | Quadrinhos em que o herói aparece       | [HQ 1, HQ 2, HQ 3] |
| Histórias           | Lista de Histórias  | Histórias em que o herói aparece        | [História 1, História 2, História 3] |
| Eventos             | Lista de Eventos    | Eventos em que o herói participa         | [Evento 1, Evento 2, Evento 3] |
| Séries              | Lista de Séries     | Séries em que o herói aparece            | [Série 1, Série 2, Série 3] |

## Quadrinhos (Comics)
|  **Nome**           | **Tipo**          | **Descrição**                            | **Exemplo** |
|:-------------------:|-------------------|------------------------------------------|-------------|
| Id                  | Número (Inteiro)  | Identificador único do quadrinho        | 1           |
| Título              | Texto             | Título do quadrinho                      | Homem-Aranha #1 |
| Descrição           | Texto             | Descrição do quadrinho                   | O primeiro quadrinho do Homem-Aranha, onde Peter Parker adquire seus poderes aracnídeos. |
| Imagem da Capa      | Imagem           | Imagem da capa do quadrinho              | ![Homem-Aranha #1](https://example.com/comic1.jpg) |
| Personagens         | Lista de Personagens | Personagens que aparecem no quadrinho  | [Homem-Aranha, Tio Ben, Mary Jane Watson] |
| Criadores           | Lista de Criadores   | Criadores do quadrinho                  | [Stan Lee, Steve Ditko] |
| Data de Publicação  | Data              | Data de publicação do quadrinho         | 1962-03-10  |
| Preço               | Número (Decimal)  | Preço do quadrinho                      | 1.99        |
| ISBN                | Texto             | ISBN do quadrinho                        | 978-0-7851-0015-0 |


### Registro de Usuário
- Para utilizar as funcionalidades completas do Banca Comics, os usuários têm a opção de se registrar. O registro permite que os usuários comentem em fóruns e interajam com a comunidade.

  ## Registro de Usuário
|  **Nome**           | **Tipo**           | **Descrição**                            | **Exemplo**   |
|:-------------------:|--------------------|------------------------------------------|---------------|
| Id                  | Número (Inteiro)   | Identificador único do usuário           | 1             |
| Nome de Usuário     | Texto              | Nome de usuário único                    | user123       |
| E-mail              | Texto              | Endereço de e-mail do usuário            | user@example.com |
| Senha               | Texto (Criptografado)| Senha do usuário (criptografada)        | Hash da Senha  |
| Data de Registro    | Data               | Data em que o usuário se registrou       | 2023-11-01    |


### Comentários em Fóruns
- Os usuários registrados podem participar de fóruns relacionados a quadrinhos, onde podem compartilhar opiniões, discussões e comentários sobre heróis, HQs e séries.

## Comentários em Fóruns
|  **Nome**        | **Tipo**            | **Descrição**                             | **Exemplo** |
|:----------------:|---------------------|-------------------------------------------|-------------|
| Id               | Número (Inteiro)    | Identificador único do comentário         | 1           |
| Id do Tópico     | Número (Inteiro)    | Identificador do tópico ao qual o comentário pertence | 123       |
| Id do Usuário    | Número (Inteiro)    | Identificador do usuário que fez o comentário | 456    |
| Conteúdo         | Texto               | Conteúdo do comentário                     | Ótimo tópico! |
| Data de Criação  | Data                | Data em que o comentário foi criado       | 2023-11-01  |


## Detalhamento da Tela de Herói

Uma das funcionalidades essenciais do Banca Comics é a capacidade de detalhar um herói específico, exibindo informações abrangentes sobre ele. A tela de detalhamento de herói envolve as seguintes etapas:

1. **Seleção de Herói**: Os usuários navegam pela lista de heróis disponíveis na plataforma e selecionam o herói que desejam conhecer melhor.

2. **Requisição à API da Marvel**: Quando um herói é selecionado, o sistema faz uma solicitação à API da Marvel para obter informações detalhadas sobre o herói. Isso inclui o nome, descrição e uma imagem representativa.

3. **Apresentação dos Dados**: Após receber os dados da API, o sistema exibe essas informações na tela de detalhamento do herói. Os dados são apresentados de forma clara e organizada para que os usuários possam ler e aprender sobre o herói.

4. **Interatividade**: A tela de detalhamento permite que os usuários interajam com o herói, fornecendo informações para despertar seu interesse. Os comentários de outros usuários também podem ser exibidos, promovendo a discussão sobre o herói.

5. **Navegação Adicional**: A tela de detalhamento oferece links ou botões que permitem aos usuários explorar mais informações relacionadas ao herói, como suas HQs ou participações em séries.

A implementação da tela de detalhamento de herói é um exemplo da integração do Banca Comics com a API da Marvel para fornecer informações detalhadas sobre heróis. Isso permite aos usuários aprofundar seu conhecimento sobre seus personagens favoritos e participar de discussões e interações na comunidade.

## Conclusão

O Banca Comics oferece um ambiente rico em informações e interações para os fãs de quadrinhos. A implementação do sistema envolveu a criação de várias funcionalidades que atendem aos requisitos funcionais, com destaque para a tela de detalhamento de herói, que demonstra como o sistema consome e apresenta informações da API da Marvel de forma interativa e informativa. O sistema visa fornecer uma experiência envolvente para os usuários, permitindo-lhes explorar o vasto mundo dos quadrinhos e participar de discussões com outros entusiastas.


