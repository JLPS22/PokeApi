# PokeApi

Este é um site que consome dados da **PokéApi** para exibir Pokémon de forma organizada, com possibilidade de filtro e troca de tema visual.

---

## 🚀 Funcionalidades do Site

### 🏠 Home e 🔍 Filter
- **🗂 Filtro:** Seleção do tipo de Pokémon e botão **Filter 🔎** para listar os correspondentes.  
- **🌗 Tema Claro/Escuro:** Alternância de cores com o botão **Change to 🌙 Dark**.  
- **🎴 Listagem de Pokémon:** Cards exibindo **imagem, nome e tipo** do Pokémon.  
- **🖱 Card Interativo:** Ao clicar, redireciona para a página detalhada do Pokémon.  
- **⚡ Carregar Mais:** Botão **Load More** adiciona 10 Pokémon a cada clique.

### 📄 Página do Card
- Exibe **imagem, nome, tipo(s), movimentos e habilidades com descrição**.  
- **🏠 Retornar Home:** Botão retorna à última página visitada (Home ou Filter).

---

## 🛠 Ferramentas Utilizadas

### ⚛️ React
- Biblioteca JavaScript para **interfaces reativas**.  
- Utiliza **Virtual DOM** para atualizar apenas o necessário, garantindo performance.  
- Componentes **reutilizáveis** e integração com **React Router** para SPA.

### 🎨 Styled Components
- Estilos **CSS-in-JS**, aplicados diretamente aos componentes.  
- Facilita **organização**, evita conflitos e permite **componentes estilizados reutilizáveis**.

### 🐙 GitHub / GitHub Pages
- **GitHub:** Controle de versão e colaboração.  
- **GitHub Pages:** Publicação gratuita do site a partir do repositório, tornando-o acessível na web.

---

## 📌 Como Executar o Site

### 1. Baixar o código ou clonar o repositório
- Acesse o repositório: [https://github.com/JLPS22/PokeApi](https://github.com/JLPS22/PokeApi)  

**Opção 1: Download ZIP**  
1. Clique no botão verde **Code**  
2. Selecione **Download ZIP**  
3. Extraia o arquivo para acessar os arquivos do projeto  

**Opção 2: Clonar via Git (recomendado)**  
1. Clique no botão verde **Code**  
2. Copie o link HTTPS  
3. Abra o terminal (ou Git Bash) na pasta onde deseja salvar o projeto  
4. Execute:  
   ```bash
   git clone https://github.com/JLPS22/PokeApi.git

### 2. Acessar a pasta do projeto
```bash
cd pokeapi
```

### 3. Instalar as dependências
```bash
npm install
```

### 4. Executar o projeto
```bash
npm run dev
```
O terminal exibirá um endereço local (geralmente http://localhost:5173/), onde o projeto poderá ser acessado no navegador.