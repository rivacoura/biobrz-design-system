/**
 * @startingPoint section="Components" subtitle="Versatile content container — default, filled, dark, ghost variants" viewport="700x300"
 */
export interface CardProps {
  /** Card body */
  children: React.ReactNode;
  /** Visual style */
  variant?: 'default' | 'offwhite' | 'filled' | 'dark' | 'gold' | 'ghost';
  /** Internal padding size */
  padding?: 'none' | 'sm' | 'md' | 'lg';
  /** Enable hover lift effect */
  hover?: boolean;
  /** Optional left-border accent color (CSS color string) */
  accent?: string | null;
  /** Additional inline style overrides */
  style?: React.CSSProperties;
}
