Purpose-built card for the three BioBrz service lines: Tax, Advisory, Audit.
Accent color and top bar derive automatically from the `service` prop.

```jsx
<ServiceCard
  service="tax"
  overline="Consultoria Tributária"
  title="O imposto certo libera o crescimento."
  description="Identificamos o que foi pago além do necessário e transformamos a gestão tributária em vantagem competitiva."
  cta="Saiba Mais"
/>
<ServiceCard service="advisory" variant="filled" ... />
<ServiceCard service="audit" variant="dark" ... />
```

**Services:** `tax` (green accent), `advisory` (gold accent), `audit` (blue accent).

**Variants:** `light` (default), `filled` (tinted bg), `dark` (black), `green` (brand green).

**Top accent bar** always matches service color regardless of variant.
