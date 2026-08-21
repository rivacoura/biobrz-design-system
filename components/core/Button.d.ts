/**
 * @startingPoint section="Components" subtitle="Primary action button — primary, accent, outline, ghost, dark" viewport="700x200"
 */
export interface ButtonProps {
  /** Button label content */
  children: React.ReactNode;
  /** Visual style variant */
  variant?: 'primary' | 'accent' | 'outline' | 'outline-light' | 'ghost' | 'dark';
  /** Size — affects padding and font-size */
  size?: 'sm' | 'md' | 'lg';
  /** Disables interaction and dims the button */
  disabled?: boolean;
  /** Stretch to fill container width */
  fullWidth?: boolean;
  /** HTML button type */
  type?: 'button' | 'submit' | 'reset';
  /** Click handler */
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  /** Additional inline style overrides */
  style?: React.CSSProperties;
}
