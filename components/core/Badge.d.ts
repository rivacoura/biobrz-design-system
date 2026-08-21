/**
 * @startingPoint section="Components" subtitle="Compact uppercase label for services, statuses, and categories" viewport="700x120"
 */
export interface BadgeProps {
  /** Badge label */
  children: React.ReactNode;
  /** Color scheme */
  variant?: 'primary' | 'accent' | 'sky' | 'dark' | 'subtle-green' | 'subtle-gold' | 'subtle-blue' | 'white';
  /** Size */
  size?: 'sm' | 'md' | 'lg';
  /** Additional inline style overrides */
  style?: React.CSSProperties;
}
