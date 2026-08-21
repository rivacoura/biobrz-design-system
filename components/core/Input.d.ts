/**
 * @startingPoint section="Components" subtitle="Labeled text input with error, helper, and disabled states" viewport="700x280"
 */
export interface InputProps {
  /** Visible label above the input */
  label?: string;
  /** HTML id (connects label) */
  id?: string;
  /** HTML input type */
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search';
  /** Placeholder text */
  placeholder?: string;
  /** Controlled value */
  value?: string;
  /** Uncontrolled default */
  defaultValue?: string;
  /** Change handler */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /** Error message — turns border/label red */
  error?: string;
  /** Helper text below the input */
  helper?: string;
  /** Disables the field */
  disabled?: boolean;
  /** Shows required asterisk */
  required?: boolean;
  /** Size */
  size?: 'sm' | 'md' | 'lg';
  /** Additional inline style overrides */
  style?: React.CSSProperties;
}
