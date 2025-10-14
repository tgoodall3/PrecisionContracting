import { forwardRef } from 'react';
import clsx from 'clsx';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  hint?: string;
  error?: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ id, label, hint, error, className, ...props }, ref) => (
    <div className={clsx('space-y-2', className)}>
      <label htmlFor={id} className="block text-sm font-medium text-brand-navy">
        {label}
      </label>
      <input
        id={id}
        ref={ref}
        className={clsx(
          'w-full rounded-lg border border-brand-gray bg-white px-4 py-3 text-sm shadow-sm transition focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/40',
          error && 'border-red-500 focus:border-red-500 focus:ring-red-500/40'
        )}
        {...props}
      />
      {hint && !error ? <p className="text-xs text-brand-navy/60">{hint}</p> : null}
      {error ? <p className="text-xs text-red-600">{error}</p> : null}
    </div>
  )
);

Input.displayName = 'Input';

export default Input;
