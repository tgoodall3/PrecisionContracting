import clsx from 'clsx';

type CheckboxPillProps = {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  className?: string;
};

const CheckboxPill = ({ label, checked, onChange, className }: CheckboxPillProps) => (
  <button
    type="button"
    onClick={() => onChange(!checked)}
    className={clsx(
      'flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue',
      checked
        ? 'border-brand-blue bg-brand-blue/10 text-brand-navy'
        : 'border-brand-gray text-brand-navy/80 hover:border-brand-blue/80 hover:text-brand-navy',
      className
    )}
    aria-pressed={checked}
  >
    <span>{label}</span>
  </button>
);

export default CheckboxPill;
