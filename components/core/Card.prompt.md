Versatile content container. Minimal rounding (4px), clean borders or solid fills.

```jsx
<Card>Default white card with border</Card>
<Card variant="offwhite" padding="lg">Warm background card</Card>
<Card variant="filled" padding="md">Green fill — white text</Card>
<Card variant="dark" padding="md">Black fill — white text</Card>
<Card hover accent="var(--color-gold-500)">Hoverable with gold accent bar</Card>
```

**Variants:**
- `default` — white bg, subtle green border.
- `offwhite` — warm off-white bg. For sections laid on white.
- `filled` — deep green fill, white text. Premium / feature callout.
- `dark` — black fill, white text. High-contrast emphasis.
- `gold` — golden fill, black text. CTA or highlight cards.
- `ghost` — transparent with border. For lists, table rows.

**Props:** `padding` (none/sm/md/lg), `hover` (lift on hover), `accent` (left border color).
