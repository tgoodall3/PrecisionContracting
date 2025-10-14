import { forwardRef } from 'react';
import clsx from 'clsx';

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  hint?: string;
  error?: string;
};

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ id, label, hint, error, className, children, ...props }, ref) => (
    <div className={clsx('space-y-2', className)}>
      <label htmlFor={id} className="block text-sm font-medium text-brand-navy">
        {label}
      </label>
      <div className="relative">
        <select
          id={id}
          ref={ref}
          className={clsx(
            'w-full appearance-none rounded-lg border border-brand-gray bg-white px-4 py-3 text-sm shadow-sm transition focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/40',
            error && 'border-red-500 focus:border-red-500 focus:ring-red-500/40'
          )}
          {...props}
        >
          {children}
        </select>
        <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-brand-navy/50">
          ▾
        </span>
      </div>
      {hint && !error ? <p className="text-xs text-brand-navy/60">{hint}</p> : null}
      {error ? <p className="text-xs text-red-600">{error}</p> : null}
    </div>
  )
);

Select.displayName = 'Select';

export default Select;
