export const templates = [
  {
    id: "blank",
    label: "Documento em branco",
    imageUrl: "/blank-document.svg",
    initialContent: "",
  },
  {
    id: "software-proposal",
    label: "Proposta de desenvolvimento de software",
    imageUrl: "/software-proposal.svg",
    initialContent: `
        <header>
        <h1>Proposta de Desenvolvimento de Software</h1>
        <p><strong>Cliente:</strong> [Nome do Cliente]</p>
        <p><strong>Data:</strong> [Data da Proposta]</p>
    </header>
    
    <section>
        <h2>1. Introdução</h2>
        <p>Esta proposta descreve o desenvolvimento do software [Nome do Projeto], incluindo objetivos, escopo, funcionalidades e cronograma.</p>
    </section>
    
    <section>
        <h2>2. Escopo do Projeto</h2>
        <p>O projeto visa desenvolver uma solução para [Descrição do Problema]. O sistema incluirá as seguintes funcionalidades:</p>
        <ul>
            <li>Funcionalidade 1</li>
            <li>Funcionalidade 2</li>
            <li>Funcionalidade 3</li>
        </ul>
    </section>
    
    <section>
        <h2>3. Tecnologias Utilizadas</h2>
        <p>O desenvolvimento será realizado utilizando as seguintes tecnologias:</p>
        <ul>
            <li>Linguagem de programação: [Exemplo: JavaScript, Python]</li>
            <li>Frameworks: [Exemplo: React, Django]</li>
            <li>Banco de dados: [Exemplo: PostgreSQL, MongoDB]</li>
        </ul>
    </section>
    
    <section>
        <h2>4. Cronograma</h2>
        <table>
            <tr>
                <th>Fase</th>
                <th>Descrição</th>
                <th>Prazo</th>
            </tr>
            <tr>
                <td>Planejamento</td>
                <td>Definição de requisitos e análise</td>
                <td>[Data]</td>
            </tr>
            <tr>
                <td>Desenvolvimento</td>
                <td>Implementação das funcionalidades</td>
                <td>[Data]</td>
            </tr>
            <tr>
                <td>Testes</td>
                <td>Verificação e validação do sistema</td>
                <td>[Data]</td>
            </tr>
        </table>
    </section>
    
    <section>
        <h2>5. Orçamento</h2>
        <p>O orçamento estimado para o desenvolvimento do software é de R$ [Valor].</p>
    </section>
    
    <section>
        <h2>6. Considerações Finais</h2>
        <p>Aguardamos sua aprovação para dar início ao desenvolvimento. Estamos à disposição para esclarecer dúvidas.</p>
        <p><strong>Assinatura:</strong> ________________________</p>
    </section>
        `,
  },
  {
    id: "project-proposal",
    label: "Proposta de projeto",
    imageUrl: "/project-proposal.svg",
    initialContent: `
        <header>
        <h1>Proposta de Projeto</h1>
        <p><strong>Cliente:</strong> [Nome do Cliente]</p>
        <p><strong>Data:</strong> [Data da Proposta]</p>
    </header>
    
    <section>
        <h2>1. Introdução</h2>
        <p>Esta proposta apresenta um plano detalhado para o desenvolvimento do projeto [Nome do Projeto], abordando objetivos, escopo e metodologia.</p>
    </section>
    
    <section>
        <h2>2. Objetivos</h2>
        <p>O projeto tem como objetivo principal [Descrição do Objetivo Principal]. Além disso, busca alcançar:</p>
        <ul>
            <li>Objetivo 1</li>
            <li>Objetivo 2</li>
            <li>Objetivo 3</li>
        </ul>
    </section>
    
    <section>
        <h2>3. Escopo do Projeto</h2>
        <p>O escopo do projeto inclui as seguintes atividades e entregáveis:</p>
        <ul>
            <li>Atividade 1</li>
            <li>Atividade 2</li>
            <li>Atividade 3</li>
        </ul>
    </section>
    
    <section>
        <h2>4. Metodologia</h2>
        <p>O projeto será conduzido utilizando a metodologia [Nome da Metodologia], seguindo as seguintes etapas:</p>
        <ul>
            <li>Fase 1: [Descrição]</li>
            <li>Fase 2: [Descrição]</li>
            <li>Fase 3: [Descrição]</li>
        </ul>
    </section>
    
    <section>
        <h2>5. Cronograma</h2>
        <table>
            <tr>
                <th>Fase</th>
                <th>Descrição</th>
                <th>Prazo</th>
            </tr>
            <tr>
                <td>Planejamento</td>
                <td>Definição de requisitos e análise</td>
                <td>[Data]</td>
            </tr>
            <tr>
                <td>Execução</td>
                <td>Implementação e desenvolvimento</td>
                <td>[Data]</td>
            </tr>
            <tr>
                <td>Finalização</td>
                <td>Testes e entrega do projeto</td>
                <td>[Data]</td>
            </tr>
        </table>
    </section>
    
    <section>
        <h2>6. Orçamento</h2>
        <p>O orçamento estimado para a realização do projeto é de R$ [Valor].</p>
    </section>
    
    <section>
        <h2>7. Considerações Finais</h2>
        <p>Aguardamos sua aprovação para dar início ao projeto. Estamos à disposição para quaisquer esclarecimentos.</p>
        <p><strong>Assinatura:</strong> ________________________</p>
    </section>
    `,
  },
  {
    id: "business-letter",
    label: "Carta comercial",
    imageUrl: "/business-letter.svg",
    initialContent: `
        <header>
        <p><strong>Remetente:</strong> [Nome da Empresa ou Pessoa]</p>
        <p><strong>Endereço:</strong> [Endereço do Remetente]</p>
        <p><strong>Telefone:</strong> [Telefone do Remetente]</p>
        <p><strong>Email:</strong> [Email do Remetente]</p>
        <p><strong>Data:</strong> [Data]</p>
    </header>
    
    <section>
        <p><strong>Destinatário:</strong> [Nome do Destinatário]</p>
        <p><strong>Empresa:</strong> [Nome da Empresa do Destinatário]</p>
        <p><strong>Endereço:</strong> [Endereço do Destinatário]</p>
    </section>
    
    <section>
        <h2>Assunto: [Título da Carta]</h2>
        <p>Prezado(a) [Nome do Destinatário],</p>
        <p>Gostaríamos de expressar nosso interesse em [motivo da carta]. Nossa empresa, [Nome da Empresa], está empenhada em oferecer [descrição do serviço ou produto].</p>
        <p>Estamos à disposição para discutir esta oportunidade com mais detalhes. Caso tenha interesse, ficamos no aguardo de seu contato para agendarmos uma reunião.</p>
        <p>Agradecemos sua atenção e aguardamos sua resposta.</p>
    </section>
    
    <section>
        <p>Atenciosamente,</p>
        <p><strong>[Nome do Remetente]</strong></p>
        <p><strong>[Cargo]</strong></p>
        <p><strong>[Nome da Empresa]</strong></p>
    </section>
    `,
  },
  {
    id: "resume",
    label: "Resumo",
    imageUrl: "/resume.svg",
    initialContent: `
        <header>
        <h1>Resumo</h1>
        <p><strong>Autor:</strong> [Nome do Autor]</p>
        <p><strong>Data:</strong> [Data]</p>
    </header>
    
    <section>
        <h2>Introdução</h2>
        <p>[Breve introdução sobre o tema abordado no resumo.]</p>
    </section>
    
    <section>
        <h2>Desenvolvimento</h2>
        <p>[Principais pontos discutidos, análise e explicações relevantes.]</p>
    </section>
    
    <section>
        <h2>Conclusão</h2>
        <p>[Síntese dos principais resultados ou aprendizados apresentados no resumo.]</p>
    </section>
    `,
  },
  {
    id: "cover-letter",
    label: "Carta de apresentação",
    imageUrl: "/cover-letter.svg",
    initialContent: `
        <header>
        <p><strong>Remetente:</strong> [Seu Nome]</p>
        <p><strong>Endereço:</strong> [Seu Endereço]</p>
        <p><strong>Telefone:</strong> [Seu Telefone]</p>
        <p><strong>Email:</strong> [Seu Email]</p>
        <p><strong>Data:</strong> [Data]</p>
    </header>
    
    <section>
        <p><strong>Destinatário:</strong> [Nome do Destinatário]</p>
        <p><strong>Empresa:</strong> [Nome da Empresa]</p>
        <p><strong>Endereço:</strong> [Endereço da Empresa]</p>
    </section>
    
    <section>
        <h2>Assunto: Candidatura para [Nome da Posição]</h2>
        <p>Prezado(a) [Nome do Destinatário],</p>
        <p>Estou interessado(a) na oportunidade de [Nome da Posição] na [Nome da Empresa]. Com [X] anos de experiência em [Área de Atuação], desenvolvi habilidades em [Principais Competências].</p>
        <p>Minha experiência inclui [Breve Resumo de Experiência Profissional e Conquistas]. Acredito que minha expertise e motivação podem contribuir significativamente para a equipe.</p>
        <p>Gostaria de ter a oportunidade de discutir minha candidatura em uma entrevista. Aguardo seu contato para conversarmos mais sobre como posso agregar valor à sua equipe.</p>
        <p>Agradeço sua consideração e estou à disposição para fornecer mais informações.</p>
    </section>
    
    <section>
        <p>Atenciosamente,</p>
        <p><strong>[Seu Nome]</strong></p>
    </section>
    `,
  },
  {
    id: "letter",
    label: "Carta",
    imageUrl: "/letter.svg",
    initialContent: `
        <header>
        <p><strong>Remetente:</strong> [Seu Nome]</p>
        <p><strong>Endereço:</strong> [Seu Endereço]</p>
        <p><strong>Telefone:</strong> [Seu Telefone]</p>
        <p><strong>Email:</strong> [Seu Email]</p>
        <p><strong>Data:</strong> [Data]</p>
    </header>
    
    <section>
        <p><strong>Destinatário:</strong> [Nome do Destinatário]</p>
        <p><strong>Endereço:</strong> [Endereço do Destinatário]</p>
    </section>
    
    <section>
        <h2>Assunto: [Assunto da Carta]</h2>
        <p>Prezado(a) [Nome do Destinatário],</p>
        <p>Gostaria de expressar [motivo da carta, como agradecimento, solicitação ou comunicação de um fato].</p>
        <p>[Desenvolvimento da mensagem, explicando os detalhes e informações relevantes.]</p>
        <p>Agradeço desde já sua atenção e fico à disposição para qualquer esclarecimento adicional.</p>
    </section>
    
    <section>
        <p>Atenciosamente,</p>
        <p><strong>[Seu Nome]</strong></p>
    </section>
    `,
  },
];
