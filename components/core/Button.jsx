/**
 * Button — primary interactive element for BIOBRZ.
 * Variants: primary (green), accent (gold), outline, ghost, dark.
 * All variants use uppercase labels, tight tracking, and minimal rounding.
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  fullWidth = false,
  type = 'button',
  onClick,
  style: extraStyle = {},
  ...props
}) {
  const sizes = {
    sm: { padding: '8px 16px', fontSize: '11px' },
    md: { padding: '12px 24px', fontSize: '13px' },
    lg: { padding: '16px 32px', fontSize: '15px' },
  };

  const variants = {
    primary: {
      background: 'var(--color-green-500)',
      color: '#fff',
      border: 'none',
    },
    accent: {
      background: 'var(--color-gold-500)',
      color: '#000',
      border: 'none',
    },
    outline: {
      background: 'transparent',
      color: 'var(--color-green-500)',
      border: '2px solid var(--color-green-500)',
    },
    'outline-light': {
      background: 'transparent',
      color: '#fff',
      border: '2px solid rgba(255,255,255,0.6)',
    },
    ghost: {
      background: 'transparent',
      color: 'var(--color-green-500)',
      border: 'none',
    },
    dark: {
      background: '#000',
      color: '#fff',
      border: 'none',
    },
  };

  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    fontFamily: 'var(--font-primary)',
    fontWeight: 700,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    lineHeight: 1,
    borderRadius: '2px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    width: fullWidth ? '100%' : 'auto',
    transition: 'opacity 120ms ease, transform 100ms ease, background 120ms ease',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...sizes[size] || sizes.md,
    ...variants[variant] || variants.primary,
    ...extraStyle,
  };

  const handleMouseEnter = (e) => {
    if (!disabled) e.currentTarget.style.opacity = '0.82';
  };
  const handleMouseLeave = (e) => {
    if (!disabled) e.currentTarget.style.opacity = '1';
  };
  const handleMouseDown = (e) => {
    if (!disabled) e.currentTarget.style.transform = 'scale(0.97)';
  };
  const handleMouseUp = (e) => {
    if (!disabled) e.currentTarget.style.transform = 'scale(1)';
  };

  return (
    <button
      type={type}
      style={base}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      {...props}
    >
      {children}
    </button>
  );
}
