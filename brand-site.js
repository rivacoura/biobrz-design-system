/* BIOBRZ Brand Site — interactivity, icon gallery, and asset downloads */
(function () {
  'use strict';

  /* ──────────────────────────────────────────────────────────
     ICON LIBRARY (carregados dinamicamente da pasta icons/)
  ────────────────────────────────────────────────────────────*/
  const UI_ICONS = {};
  const ICON_NAMES = [
    'arrow-right', 'arrow-up-right', 'building', 'chart-bar', 'check', 'close',
    'document', 'external', 'instagram', 'linkedin', 'location', 'magnifier',
    'mail', 'menu', 'phone', 'service-advisory', 'service-audit', 'service-tax',
    'shield', 'star', 'user'
  ];

  /* ──────────────────────────────────────────────────────────
     COLOR DATA
  ────────────────────────────────────────────────────────────*/
  const COLOR_GROUPS = [
    { name: 'Verde — Floresta', desc: 'Âncora. Crescimento, confiança, permanência.', swatches: [
      ['Verde 500', '#3E7853', 'Primária'], ['Verde 400', '#5A9070', ''], ['Verde 300', '#8DAA91', ''],
      ['Verde 200', '#B8C9BA', 'Bordas'], ['Verde 100', '#DDE8DF', ''], ['Verde 50', '#EEF4EF', '']
    ]},
    { name: 'Ouro — Âmbar', desc: 'Acento. Distinção e direção. O diamante da bandeira.', swatches: [
      ['Ouro 500', '#DDB830', 'Acento / CTA'], ['Ouro 400', '#E8CA62', ''], ['Ouro 300', '#EED47C', ''],
      ['Ouro 200', '#F5E5A8', ''], ['Ouro 100', '#FAF1C5', ''], ['Ouro 50', '#FDF8E5', '']
    ]},
    { name: 'Azul — Névoa', desc: 'Precisão, análise, imparcialidade. A ponte ao mundo financeiro.', swatches: [
      ['Azul 400', '#B9CEDF', 'Sky'], ['Azul 300', '#C8D9E8', ''], ['Azul 200', '#D6E4EF', ''], ['Azul 100', '#E7F0F8', '']
    ]},
    { name: 'Neutros', desc: 'Off-white respira. Preto comanda.', swatches: [
      ['Off-White', '#F5F1E6', 'Fundo'], ['Branco', '#FFFFFF', ''], ['Preto', '#000000', 'Autoridade'],
      ['Cinza 800', '#1A1A1A', ''], ['Cinza 600', '#4A4A4A', 'Texto'], ['Cinza 400', '#8A8A8A', ''],
      ['Cinza 200', '#D4D4D4', ''], ['Cinza 100', '#F0F0F0', '']
    ]}
  ];

  /* ──────────────────────────────────────────────────────────
     HELPERS
  ────────────────────────────────────────────────────────────*/
  function el(tag, cls, html) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }

  function saveBlob(blob, name) {
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = name;
    document.body.appendChild(a);
    a.click();
    setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 1500);
  }

  function isLight(hex) {
    const c = hex.replace('#', '');
    const r = parseInt(c.substr(0, 2), 16), g = parseInt(c.substr(2, 2), 16), b = parseInt(c.substr(4, 2), 16);
    return (0.299 * r + 0.587 * g + 0.114 * b) > 150;
  }

  let toastTimer;
  function toast(msg) {
    let t = document.getElementById('toast');
    if (!t) { t = el('div'); t.id = 'toast'; document.body.appendChild(t); }
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.classList.remove('show'); }, 2200);
  }

  async function fetchBlob(url) {
    const r = await fetch(url);
    if (!r.ok) throw new Error('HTTP ' + r.status + ' — ' + url);
    return await r.blob();
  }

  async function fetchText(url) {
    const r = await fetch(url);
    if (!r.ok) throw new Error('HTTP ' + r.status + ' — ' + url);
    return await r.text();
  }

  /* ──────────────────────────────────────────────────────────
     LOAD ICONS — fetch all icon files from icons/ folder
  ────────────────────────────────────────────────────────────*/
  async function loadIcons() {
    for (const name of ICON_NAMES) {
      try {
        const svg = await fetchText('icons/' + name + '.svg');
        UI_ICONS[name + '.svg'] = svg;
      } catch (err) {
        console.warn('Failed to load icon: ' + name, err);
      }
    }
  }

  /* ──────────────────────────────────────────────────────────
     RENDER — color grid
  ────────────────────────────────────────────────────────────*/
  function renderColors() {
    const host = document.getElementById('color-groups');
    if (!host) return;
    COLOR_GROUPS.forEach(function (g) {
      const block = el('div', 'color-block');
      block.appendChild(el('div', 'color-block-head',
        '<h4>' + g.name + '</h4><p>' + g.desc + '</p>'));
      const row = el('div', 'swatch-row');
      g.swatches.forEach(function (s) {
        const name = s[0], hex = s[1], tag = s[2];
        const sw = el('button', 'swatch');
        sw.style.background = hex;
        sw.style.color = isLight(hex) ? '#000' : '#fff';
        if (hex === '#FFFFFF') sw.style.border = '1px solid var(--color-green-200)';
        sw.innerHTML =
          (tag ? '<span class="sw-tag">' + tag + '</span>' : '') +
          '<span class="sw-meta"><span class="sw-name">' + name + '</span>' +
          '<span class="sw-hex">' + hex + '</span></span>';
        sw.addEventListener('click', function () {
          navigator.clipboard.writeText(hex).then(function () { toast(hex + ' copiado'); });
        });
        row.appendChild(sw);
      });
      block.appendChild(row);
      host.appendChild(block);
    });
  }

  /* ──────────────────────────────────────────────────────────
     RENDER — icon gallery
  ────────────────────────────────────────────────────────────*/
  function renderIcons() {
    const host = document.getElementById('ui-icon-grid');
    if (!host) return;
    Object.keys(UI_ICONS).forEach(function (name) {
      const tile = el('button', 'icon-tile');
      const box = el('div', 'icon-box');
      box.innerHTML = UI_ICONS[name];
      const svg = box.querySelector('svg');
      if (svg) { svg.style.width = '28px'; svg.style.height = '28px'; }
      tile.appendChild(box);
      tile.appendChild(el('span', 'icon-name', name.replace('.svg', '')));
      tile.title = 'Clique para baixar ' + name;
      tile.addEventListener('click', function () {
        const blob = new Blob([UI_ICONS[name]], { type: 'image/svg+xml' });
        saveBlob(blob, name);
        toast(name + ' baixado');
      });
      host.appendChild(tile);
    });
    const count = document.getElementById('icon-count');
    if (count) count.textContent = Object.keys(UI_ICONS).length;
  }

  /* ──────────────────────────────────────────────────────────
     DOWNLOADS
  ────────────────────────────────────────────────────────────*/
  const LICENSE_NOTE =
    'BIOBRZ — Ativos de Marca\n' +
    '================================\n\n' +
    'Estes arquivos são propriedade da BioBrz Consultores e destinam-se\n' +
    'exclusivamente a aplicações oficiais da marca.\n\n' +
    'Consulte o Brand System completo antes de qualquer aplicação.\n' +
    'Nunca distorça, gire, recolora ou aplique efeitos ao logotipo.\n';

  async function withBusy(btn, fn) {
    if (btn.dataset.busy === '1') return;
    const label = btn.querySelector('.dl-label');
    const original = label ? label.textContent : '';
    btn.dataset.busy = '1';
    btn.classList.add('busy');
    if (label) label.textContent = 'Gerando…';
    try {
      await fn();
      if (label) label.textContent = 'Baixado ✓';
    } catch (err) {
      console.error(err);
      if (label) label.textContent = 'Erro — tente de novo';
      toast('Falha ao gerar o pacote');
    } finally {
      setTimeout(function () {
        btn.dataset.busy = '0';
        btn.classList.remove('busy');
        if (label) label.textContent = original;
      }, 2400);
    }
  }

  async function addLogos(zip) {
    const folder = zip.folder('Logotipos');
    
    // Adicionar PNGs (alta resolução)
    const pngFiles = ['LogoFinal.png', 'LogoFinalBranca.png', 'LogoFinalPreta.png'];
    const pngLabels = { 'LogoFinal.png': 'logo-colorida.png', 'LogoFinalBranca.png': 'logo-branca.png', 'LogoFinalPreta.png': 'logo-preta.png' };
    for (const f of pngFiles) {
      folder.file(pngLabels[f], await fetchBlob('assets/logos/' + f));
    }
    
    // Adicionar PDFs (vetoriais)
    const pdfFiles = ['LogoFinal.pdf', 'LogoFinalBranca.pdf', 'LogoFinalPreto.pdf'];
    const pdfLabels = { 'LogoFinal.pdf': 'logo-colorida.pdf', 'LogoFinalBranca.pdf': 'logo-branca.pdf', 'LogoFinalPreto.pdf': 'logo-preta.pdf' };
    for (const f of pdfFiles) {
      folder.file(pdfLabels[f], await fetchBlob('logos/' + f));
    }
    
    // Símbolo isolado
    const symFolder = folder.folder('Simbolo');
    const symFiles = { 'SimboloColorido.png': 'simbolo-colorido.png', 'SimboloBranco.png': 'simbolo-branco.png', 'SimboloPreto.png': 'simbolo-preto.png' };
    for (const f in symFiles) {
      symFolder.file(symFiles[f], await fetchBlob('assets/logos/' + f));
    }

    folder.file('LEIA-ME.txt', LICENSE_NOTE);
  }

  function addIcons(zip) {
    const folder = zip.folder('Icones');
    Object.keys(UI_ICONS).forEach(function (n) { folder.file(n, UI_ICONS[n]); });
    folder.file('LEIA-ME.txt',
      'Ícones BIOBRZ — ' + Object.keys(UI_ICONS).length + ' SVG\n' +
      '================================\n\n' +
      'Todos os ícones usam currentColor — defina a cor via CSS no elemento pai.\n' +
      '24×24, stroke-width 2, cantos retos (square/miter).\n');
  }

  async function addFonts(zip) {
    const folder = zip.folder('Tipografia-Barlow');
    const fontFiles = [
      { name: 'Barlow-Thin.ttf', weight: 100, style: 'normal' },
      { name: 'Barlow-ThinItalic.ttf', weight: 100, style: 'italic' },
      { name: 'Barlow-ExtraLight.ttf', weight: 200, style: 'normal' },
      { name: 'Barlow-ExtraLightItalic.ttf', weight: 200, style: 'italic' },
      { name: 'Barlow-Light.ttf', weight: 300, style: 'normal' },
      { name: 'Barlow-LightItalic.ttf', weight: 300, style: 'italic' },
      { name: 'Barlow-Regular.ttf', weight: 400, style: 'normal' },
      { name: 'Barlow-Italic.ttf', weight: 400, style: 'italic' },
      { name: 'Barlow-Medium.ttf', weight: 500, style: 'normal' },
      { name: 'Barlow-MediumItalic.ttf', weight: 500, style: 'italic' },
      { name: 'Barlow-SemiBold.ttf', weight: 600, style: 'normal' },
      { name: 'Barlow-SemiBoldItalic.ttf', weight: 600, style: 'italic' },
      { name: 'Barlow-Bold.ttf', weight: 700, style: 'normal' },
      { name: 'Barlow-BoldItalic.ttf', weight: 700, style: 'italic' },
      { name: 'Barlow-ExtraBold.ttf', weight: 800, style: 'normal' },
      { name: 'Barlow-ExtraBoldItalic.ttf', weight: 800, style: 'italic' },
      { name: 'Barlow-Black.ttf', weight: 900, style: 'normal' },
      { name: 'Barlow-BlackItalic.ttf', weight: 900, style: 'italic' }
    ];
    
    // Gerar CSS @font-face
    let css = '/* Barlow — BIOBRZ Design System */\n\n';
    for (const font of fontFiles) {
      folder.file(font.name, await fetchBlob('fonts/' + font.name));
      css += '@font-face {\n' +
        '  font-family: "Barlow";\n' +
        '  src: url("./' + font.name + '") format("truetype");\n' +
        '  font-weight: ' + font.weight + ';\n' +
        '  font-style: ' + font.style + ';\n' +
        '}\n\n';
    }
    
    folder.file('barlow.css', css);
    folder.file('LEIA-ME.txt',
      'Tipografia BIOBRZ — Barlow\n' +
      '================================\n\n' +
      'Fonte: Barlow (Jeremy Tribby) — SIL Open Font License 1.1.\n' +
      'Sistema de tipo único da marca. Nunca combine com uma segunda família.\n' +
      'Pesos incluídos: 100, 200, 300, 400, 500, 600, 700, 800, 900 (regular + itálico).\n\n' +
      'Uso: importe barlow.css ou instale os arquivos .ttf.\n' +
      'Especimen oficial: https://fonts.google.com/specimen/Barlow\n');
  }

  function bind(id, fn) {
    const btn = document.getElementById(id);
    if (btn) btn.addEventListener('click', function () { withBusy(btn, fn); });
  }

  function setupDownloads() {
    bind('dl-logos', async function () {
      const zip = new JSZip();
      await addLogos(zip);
      saveBlob(await zip.generateAsync({ type: 'blob' }), 'BIOBRZ-Logotipos.zip');
    });
    bind('dl-icons', async function () {
      const zip = new JSZip();
      addIcons(zip);
      saveBlob(await zip.generateAsync({ type: 'blob' }), 'BIOBRZ-Icones.zip');
    });
    bind('dl-fonts', async function () {
      const zip = new JSZip();
      await addFonts(zip);
      saveBlob(await zip.generateAsync({ type: 'blob' }), 'BIOBRZ-Barlow.zip');
    });
    bind('dl-all', async function () {
      const zip = new JSZip();
      await addLogos(zip);
      addIcons(zip);
      await addFonts(zip);
      zip.file('LEIA-ME.txt',
        'BIOBRZ — Kit de Marca Completo\n' +
        '================================\n\n' +
        'Conteúdo:\n' +
        '  /Logotipos        — 3 variações (colorida, branca, preta) + /Simbolo\n' +
        '  /Icones           — ' + Object.keys(UI_ICONS).length + ' SVG (marca + interface)\n' +
        '  /Tipografia-Barlow — fonte Barlow + CSS\n\n' +
        '"Uma marca que não precisa ser explicada."\n');
      saveBlob(await zip.generateAsync({ type: 'blob' }), 'BIOBRZ-Kit-Completo.zip');
    });
  }

  /* ──────────────────────────────────────────────────────────
     NAV — scroll spy + mobile toggle
  ────────────────────────────────────────────────────────────*/
  function setupNav() {
    const links = [].slice.call(document.querySelectorAll('.nav-link'));
    const map = {};
    links.forEach(function (l) {
      const id = l.getAttribute('href').slice(1);
      const sec = document.getElementById(id);
      if (sec) map[id] = l;
    });
    const obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          links.forEach(function (l) { l.classList.remove('active'); });
          if (map[e.target.id]) map[e.target.id].classList.add('active');
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    Object.keys(map).forEach(function (id) { obs.observe(document.getElementById(id)); });

    const nav = document.querySelector('.nav');
    window.addEventListener('scroll', function () {
      if (window.scrollY > 24) nav.classList.add('scrolled');
      else nav.classList.remove('scrolled');
    });

    const toggle = document.getElementById('nav-toggle');
    const menu = document.getElementById('nav-menu');
    if (toggle && menu) {
      toggle.addEventListener('click', function () { menu.classList.toggle('open'); });
      menu.addEventListener('click', function (e) {
        if (e.target.classList.contains('nav-link')) menu.classList.remove('open');
      });
    }
  }

  /* ──────────────────────────────────────────────────────────
     INIT
  ────────────────────────────────────────────────────────────*/
  function setupCopyBlocks() {
    document.querySelectorAll('.copy-block').forEach(function (b) {
      b.addEventListener('click', function () {
        const text = b.dataset.text || b.textContent.trim();
        navigator.clipboard.writeText(text).then(function () { toast('Copiado para a área de transferência'); });
      });
    });
  }

  async function init() {
    await loadIcons();
    renderColors();
    renderIcons();
    setupDownloads();
    setupCopyBlocks();
    setupNav();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
