/**
 * Input — text input for forms in BIOBRZ.
 * Includes label, helper text, error state.
 * Clean geometric style: square corners, green focus ring.
 */
export function Input({
  label,
  id,
  type = 'text',
  placeholder,
  value,
  defaultValue,
  onChange,
  error,
  helper,
  disabled = false,
  required = false,
  size = 'md',
  style: extraStyle = {},
  ...props
}) {
  const [focused, setFocused] = React.useState(false);

  const sizes = {
    sm: { padding: '8px 12px',  fontSize: '13px' },
    md: { padding: '12px 16px', fontSize: '14px' },
    lg: { padding: '14px 20px', fontSize: '16px' },
  };

  const inputStyle = {
    display: 'block',
    width: '100%',
    fontFamily: 'var(--font-primary)',
    fontWeight: 400,
    color: disabled ? 'var(--color-gray-400)' : 'var(--color-black)',
    background: disabled ? 'var(--color-gray-100)' : '#fff',
    border: error
      ? '1.5px solid var(--color-error)'
      : focused
        ? '1.5px solid var(--color-green-500)'
        : '1.5px solid var(--color-green-200)',
    borderRadius: '2px',
    outline: 'none',
    transition: 'border-color 150ms ease',
    boxSizing: 'border-box',
    cursor: disabled ? 'not-allowed' : 'text',
    ...sizes[size] || sizes.md,
  };

  const labelStyle = {
    display: 'block',
    fontFamily: 'var(--font-primary)',
    fontSize: '12px',
    fontWeight: 600,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: error ? 'var(--color-error)' : 'var(--color-green-500)',
    marginBottom: '6px',
  };

  const helperStyle = {
    display: 'block',
    fontFamily: 'var(--font-primary)',
    fontSize: '12px',
    fontWeight: 400,
    color: error ? 'var(--color-error)' : 'var(--color-gray-400)',
    marginTop: '5px',
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', ...extraStyle }}>
      {label && (
        <label htmlFor={id} style={labelStyle}>
          {label}{required && <span style={{ color: 'var(--color-error)', marginLeft: '3px' }}>*</span>}
        </label>
      )}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        disabled={disabled}
        required={required}
        style={inputStyle}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        {...props}
      />
      {(helper || error) && (
        <span style={helperStyle}>{error || helper}</span>
      )}
    </div>
  );
}
