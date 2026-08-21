/**
 * Card — content container for BIOBRZ layouts.
 * Variants: default (white/bordered), filled (green), dark (black), ghost (transparent).
 * Minimal rounding (4px). Generous padding. Clean shadow.
 */
export function Card({
  children,
  variant = 'default',
  padding = 'md',
  hover = false,
  accent = null,
  style: extraStyle = {},
  ...props
}) {
  const variants = {
    default: {
      background: '#fff',
      border: '1px solid var(--color-green-200)',
      color: 'var(--color-black)',
    },
    offwhite: {
      background: 'var(--color-offwhite)',
      border: '1px solid var(--color-green-200)',
      color: 'var(--color-black)',
    },
    filled: {
      background: 'var(--color-green-500)',
      border: 'none',
      color: '#fff',
    },
    dark: {
      background: '#000',
      border: 'none',
      color: '#fff',
    },
    gold: {
      background: 'var(--color-gold-500)',
      border: 'none',
      color: '#000',
    },
    ghost: {
      background: 'transparent',
      border: '1px solid var(--color-green-200)',
      color: 'inherit',
    },
  };

  const paddings = {
    none: '0',
    sm:   '16px',
    md:   '32px',
    lg:   '48px',
  };

  const v = variants[variant] || variants.default;

  const style = {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '4px',
    padding: paddings[padding] || paddings.md,
    transition: 'box-shadow 200ms ease, transform 200ms ease',
    boxSizing: 'border-box',
    position: 'relative',
    overflow: 'hidden',
    ...v,
    ...(accent ? { borderLeft: `3px solid ${accent}`, paddingLeft: paddings[padding] || paddings.md } : {}),
    ...(hover ? { cursor: 'pointer', boxShadow: 'var(--shadow-sm)' } : {}),
    ...extraStyle,
  };

  const handleMouseEnter = (e) => {
    if (hover) {
      e.currentTarget.style.boxShadow = 'var(--shadow-md)';
      e.currentTarget.style.transform = 'translateY(-2px)';
    }
  };
  const handleMouseLeave = (e) => {
    if (hover) {
      e.currentTarget.style.boxShadow = hover ? 'var(--shadow-sm)' : 'none';
      e.currentTarget.style.transform = 'translateY(0)';
    }
  };

  return (
    <div
      style={style}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </div>
  );
}
