Labeled text input. Green focus ring, error state in red. Square corners (2px radius).

```jsx
<Input label="Nome da Empresa" placeholder="Ex: BioBrz Consultores" />
<Input label="E-mail" type="email" required helper="Usaremos para retornar seu contato" />
<Input label="Faturamento Anual" error="Campo obrigatório" value="" />
<Input label="Telefone" disabled value="+55 61 0000-0000" />
```

**States:**
- Default — green-200 border.
- Focused — green-500 border (1.5px).
- Error — red border + red label + error message below.
- Disabled — gray bg + gray text.

**Sizes:** `sm`, `md` (default), `lg`
