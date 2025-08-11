<div align="center">
  <br />
  <h1>🏥 Flugo Care</h1>
  <h3 align="center">Sistema de Gestão de Saúde</h3>
  <br />

  <div>
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
    <img src="https://img.shields.io/badge/-Appwrite-black?style=for-the-badge&logoColor=white&logo=appwrite&color=FD366E" alt="appwrite" />
  </div>
</div>

## 📋 Índice

1. 🤖 [Sobre o Projeto](#sobre)
2. ⚙️ [Tecnologias](#tecnologias)
3. 🔋 [Funcionalidades](#funcionalidades)
4. 🤸 [Como Executar](#executar)
5. 🕸️ [Configuração](#configuracao)
6. 📁 [Estrutura do Projeto](#estrutura)

## <a name="sobre">🤖 Sobre o Projeto</a>

O **Flugo Care** é uma aplicação moderna de gestão de pacientes em saúde que facilita o agendamento e gerenciamento de consultas médicas. O sistema oferece uma interface intuitiva para pacientes se registrarem, agendarem consultas e receberem notificações, além de fornecer ferramentas administrativas completas para profissionais de saúde.

## <a name="tecnologias">⚙️ Tecnologias Utilizadas</a>

- **Next.js 14** - Framework React para desenvolvimento full-stack
- **TypeScript** - Superset JavaScript com tipagem estática
- **TailwindCSS** - Framework CSS para estilização
- **ShadCN/UI** - Biblioteca de componentes UI
- **Appwrite** - Backend-as-a-Service para autenticação e banco de dados
- **Twilio** - Serviço para envio de SMS
- **React Hook Form** - Gerenciamento de formulários
- **Zod** - Validação de esquemas TypeScript

## <a name="funcionalidades">🔋 Funcionalidades</a>

### Para Pacientes
- ✅ Registro e criação de perfil pessoal
- ✅ Agendamento de consultas com médicos
- ✅ Visualização e gerenciamento de consultas
- ✅ Recebimento de notificações SMS
- ✅ Upload seguro de documentos médicos

### Para Administradores
- ✅ Dashboard administrativo completo
- ✅ Visualização de todas as consultas agendadas
- ✅ Confirmação e reagendamento de consultas
- ✅ Cancelamento de consultas com motivo
- ✅ Estatísticas e relatórios do sistema

### Características Técnicas
- ✅ Design responsivo para todos os dispositivos
- ✅ Interface dark mode elegante
- ✅ Validação robusta de formulários
- ✅ Armazenamento seguro de arquivos
- ✅ Monitoramento de performance com Sentry

## <a name="executar">🤸 Como Executar</a>

### Pré-requisitos

- [Node.js](https://nodejs.org/en) (versão 18 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- Conta no [Appwrite](https://appwrite.io/)
- Conta no [Twilio](https://www.twilio.com/) (opcional, para SMS)

### Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/flugo-care.git
cd flugo-care
```

2. **Instale as dependências**
```bash
npm install
```

3. **Configure as variáveis de ambiente**

Crie um arquivo `.env.local` na raiz do projeto:

```env
# APPWRITE
NEXT_PUBLIC_ENDPOINT=https://cloud.appwrite.io/v1
PROJECT_ID=seu_project_id
API_KEY=sua_api_key
DATABASE_ID=seu_database_id
PATIENT_COLLECTION_ID=sua_patient_collection_id
APPOINTMENT_COLLECTION_ID=sua_appointment_collection_id
NEXT_PUBLIC_BUCKET_ID=seu_bucket_id

# ADMIN
NEXT_PUBLIC_ADMIN_PASSKEY=123456

# TWILIO (Opcional)
TWILIO_ACCOUNT_SID=seu_twilio_sid
TWILIO_AUTH_TOKEN=seu_twilio_token
```

4. **Execute o projeto**
```bash
npm run dev
```

5. **Acesse a aplicação**

Abra [http://localhost:3000](http://localhost:3000) em seu navegador.

## <a name="configuracao">🕸️ Configuração do Appwrite</a>

1. Crie uma conta no [Appwrite](https://appwrite.io/)
2. Crie um novo projeto
3. Configure as seguintes coleções no banco de dados:
   - **patients** - Para armazenar dados dos pacientes
   - **appointments** - Para armazenar dados das consultas
4. Configure o bucket de storage para upload de documentos
5. Ajuste as permissões adequadas para cada coleção

## <a name="estrutura">📁 Estrutura do Projeto</a>

```
flugo-care/
├── app/                    # Páginas da aplicação (App Router)
├── components/             # Componentes React reutilizáveis
├── lib/                    # Utilitários e configurações
├── types/                  # Definições de tipos TypeScript
├── constants/              # Constantes da aplicação
├── public/                 # Assets públicos
└── styles/                 # Arquivos de estilização
```

## 🚀 Deploy

O projeto pode ser facilmente deployado em plataformas como:

- **Vercel** (recomendado para Next.js)
- **Netlify**
- **Railway**
- **AWS Amplify**

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

---

<div align="center">
  <p>Desenvolvido com ❤️ para melhorar o acesso à saúde</p>
</div>