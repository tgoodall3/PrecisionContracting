import { HTMLAttributes } from 'react';
import clsx from 'clsx';

type BadgeTone = 'primary' | 'neutral';

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  tone?: BadgeTone;
};

const toneClasses: Record<BadgeTone, string> = {
  primary: 'bg-brand-blue/15 text-brand-navy ring-1 ring-brand-blue/30',
  neutral: 'bg-brand-gray text-brand-navy ring-1 ring-brand-gray/60'
};

const Badge = ({ tone = 'primary', className, ...props }: BadgeProps) => (
  <span
    className={clsx(
      'inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide',
      toneClasses[tone],
      className
    )}
    {...props}
  />
);

export default Badge;
