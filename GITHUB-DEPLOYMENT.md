# 🚀 Guia de Publicação no GitHub Pages

Siga estes passos para publicar o BIOBRZ Brand System no GitHub Pages:

## 1. Criar um repositório no GitHub

1. Acesse [github.com](https://github.com) e faça login
2. Clique em **"New"** ou vá para **"Your repositories"** → **"New"**
3. Nome do repositório: `biobrz-brand-system`
4. Descrição: "Sistema de identidade visual da BioBrz Consultores"
5. Escolha **Public** (para que fique acessível)
6. Clique em **"Create repository"**

## 2. Preparar os arquivos locais

Você já tem todos os arquivos prontos:
- ✅ `index.html` — Página principal
- ✅ `brand-site.js` — Script interativo
- ✅ `styles.css` — Estilos
- ✅ `assets/` — Logotipos
- ✅ `icons/` — Ícones SVG
- ✅ `fonts/` — Fontes TTF
- ✅ `logos/` — Logotipos PDF
- ✅ `README.md` — Documentação
- ✅ `.gitignore` — Configuração Git

## 3. Inicializar Git localmente

```bash
# Navegue até a pasta do projeto
cd caminho/do/projeto

# Inicialize o repositório Git
git init

# Adicione os arquivos
git add .

# Commit inicial
git commit -m "Initial commit: BIOBRZ Brand System"

# Adicione o repositório remoto
git remote add origin https://github.com/SEU_USUARIO/biobrz-brand-system.git

# Envie para o GitHub
git branch -M main
git push -u origin main
```

## 4. Ativar GitHub Pages

1. Vá para o repositório no GitHub
2. Clique em **"Settings"** (ícone de engrenagem)
3. No menu esquerdo, clique em **"Pages"**
4. Em **"Source"**, selecione:
   - Branch: `main`
   - Folder: `/ (root)`
5. Clique em **"Save"**

## 5. Acessar o site

Seu site estará disponível em:
```
https://SEU_USUARIO.github.io/biobrz-brand-system/
```

⏳ Pode levar alguns minutos para ficar ativo pela primeira vez.

## 6. Fazer atualizações futuras

Para fazer atualizações:

```bash
# Faça as alterações nos arquivos

# Adicione as mudanças
git add .

# Commit
git commit -m "Descrição das mudanças"

# Envie para GitHub
git push
```

As mudanças serão refletidas automaticamente no site!

## ✅ Checklist

- [ ] Repositório criado no GitHub
- [ ] Arquivos adicionados ao Git
- [ ] GitHub Pages ativado
- [ ] Site está acessível (pode levar até 5 minutos)
- [ ] Link funciona

## 🆘 Troubleshooting

**O site não carrega?**
- Aguarde 5 minutos (GitHub Pages demora um pouco)
- Verifique se GitHub Pages está ativado em Settings
- Limpe o cache do navegador (Ctrl+Shift+Del)

**Imagens não carregam?**
- Verifique os caminhos relativos dos arquivos
- Certifique-se de que as pastas `assets/`, `icons/`, `fonts/` foram enviadas

**Script não funciona?**
- Abra o console (F12) e veja se há erros
- Verifique se `brand-site.js` foi enviado corretamente

## 📚 Recursos úteis

- [Documentação GitHub Pages](https://docs.github.com/en/pages)
- [Git Documentation](https://git-scm.com/doc)
