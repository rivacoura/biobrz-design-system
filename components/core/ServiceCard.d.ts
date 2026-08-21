/**
 * @startingPoint section="Components" subtitle="Service-line card for Tax, Advisory, Audit — light, filled, dark variants" viewport="700x360"
 */
export interface ServiceCardProps {
  /** Service line — determines accent color */
  service?: 'tax' | 'advisory' | 'audit';
  /** Small uppercase overline above the title */
  overline?: string;
  /** Card headline */
  title?: string;
  /** Body description text */
  description?: string;
  /** Optional CTA label (renders a ghost button) */
  cta?: string;
  /** CTA click handler */
  onCtaClick?: () => void;
  /** Visual style */
  variant?: 'light' | 'filled' | 'dark' | 'sky' | 'green';
  /** Additional inline style overrides */
  style?: React.CSSProperties;
}
