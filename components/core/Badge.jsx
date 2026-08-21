/**
 * Badge — compact label for service lines, status, and categories.
 * Always uppercase. Pill-shaped (signature for labels in BIOBRZ).
 */
export function Badge({
  children,
  variant = 'primary',
  size = 'md',
  style: extraStyle = {},
  ...props
}) {
  const variants = {
    primary:        { background: 'var(--color-green-500)',  color: '#fff' },
    accent:         { background: 'var(--color-gold-500)',   color: '#000' },
    sky:            { background: 'var(--color-blue-400)',   color: '#000' },
    dark:           { background: '#000',                    color: '#fff' },
    'subtle-green': { background: 'var(--color-green-100)',  color: 'var(--color-green-500)' },
    'subtle-gold':  { background: 'var(--color-gold-100)',   color: '#7a5e00' },
    'subtle-blue':  { background: 'var(--color-blue-100)',   color: '#2a5a7a' },
    white:          { background: 'rgba(255,255,255,0.15)', color: '#fff', border: '1px solid rgba(255,255,255,0.3)' },
  };

  const sizes = {
    sm: { padding: '3px 8px',  fontSize: '10px' },
    md: { padding: '4px 12px', fontSize: '11px' },
    lg: { padding: '6px 16px', fontSize: '13px' },
  };

  const v = variants[variant] || variants.primary;
  const s = sizes[size] || sizes.md;

  const style = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'var(--font-primary)',
    fontWeight: 600,
    letterSpacing: '0.10em',
    textTransform: 'uppercase',
    borderRadius: '100px',
    lineHeight: 1.2,
    whiteSpace: 'nowrap',
    ...s,
    ...v,
    ...extraStyle,
  };

  return (
    <span style={style} {...props}>
      {children}
    </span>
  );
}
