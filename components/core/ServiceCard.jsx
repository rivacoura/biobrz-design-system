/**
 * ServiceCard — purpose-built card for the three BioBrz service lines:
 * Tax (green), Advisory (gold), Audit (blue).
 * Features: overline label, headline, description, optional CTA.
 */
export function ServiceCard({
  service = 'tax',
  overline,
  title,
  description,
  cta,
  onCtaClick,
  variant = 'light',
  style: extraStyle = {},
  ...props
}) {
  const serviceMap = {
    tax:      { label: 'Tax',      accent: 'var(--color-green-500)', bg: 'var(--color-green-100)' },
    advisory: { label: 'Advisory', accent: 'var(--color-gold-500)',  bg: 'var(--color-gold-50)'   },
    audit:    { label: 'Audit',    accent: 'var(--color-blue-400)',  bg: 'var(--color-blue-100)'  },
  };

  const svc = serviceMap[service] || serviceMap.tax;

  const variants = {
    light: {
      background: '#fff',
      border: '1px solid var(--color-green-200)',
      color: '#000',
    },
    filled: {
      background: svc.bg,
      border: 'none',
      color: '#000',
    },
    dark: {
      background: '#000',
      border: 'none',
      color: '#fff',
    },
    sky: {
      background: '#F1F6FA',
      border: 'none',
      color: '#000',
    },
    green: {
      background: 'var(--color-green-500)',
      border: 'none',
      color: '#fff',
    },
  };

  const v = variants[variant] || variants.light;

  const cardStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    padding: '32px',
    borderRadius: '4px',
    position: 'relative',
    overflow: 'hidden',
    ...v,
    ...extraStyle,
  };

  const accentBarStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '3px',
    background: svc.accent,
  };

  const overlineStyle = {
    fontFamily: 'var(--font-primary)',
    fontSize: '11px',
    fontWeight: 700,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    color: variant === 'dark' || variant === 'green' ? 'rgba(255,255,255,0.6)' : variant === 'sky' ? '#2a5a7a' : svc.accent,
  };

  const titleStyle = {
    fontFamily: 'var(--font-primary)',
    fontSize: '24px',
    fontWeight: 700,
    lineHeight: 1.2,
    margin: 0,
    color: variant === 'dark' || variant === 'green' ? '#fff' : '#000', /* title */
  };

  const descStyle = {
    fontFamily: 'var(--font-primary)',
    fontSize: '15px',
    fontWeight: 400,
    lineHeight: 1.6,
    margin: 0,
    color: variant === 'dark' || variant === 'green'
      ? 'rgba(255,255,255,0.75)'
      : variant === 'sky'
        ? 'rgba(0,0,0,0.65)'
        : 'var(--color-gray-600)',
  };

  const ctaStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    fontFamily: 'var(--font-primary)',
    fontSize: '12px',
    fontWeight: 700,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: variant === 'dark' || variant === 'green' ? '#fff' : variant === 'sky' ? '#71A4C6' : svc.accent,
    background: 'none',
    border: 'none',
    padding: 0,
    cursor: 'pointer',
    marginTop: 'auto',
  };

  return (
    <div style={cardStyle} {...props}>
      <div style={accentBarStyle} />
      {overline && <span style={overlineStyle}>{overline}</span>}
      {title    && <h3 style={titleStyle}>{title}</h3>}
      {description && <p style={descStyle}>{description}</p>}
      {cta && (
        <button style={ctaStyle} onClick={onCtaClick}>
          {cta} →
        </button>
      )}
    </div>
  );
}
