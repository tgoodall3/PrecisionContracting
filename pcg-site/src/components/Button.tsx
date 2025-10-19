import clsx from 'clsx';
import { ButtonHTMLAttributes, ForwardedRef, forwardRef } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'md' | 'sm';

export type ButtonStyleOptions = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  className?: string;
};

const baseClasses =
  'inline-flex items-center justify-center gap-2 rounded-lg font-semibold no-underline transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 hover:no-underline disabled:cursor-not-allowed disabled:opacity-60 active:scale-[0.98]';
const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-brand-navy text-white shadow-brand hover:bg-brand-midnight focus-visible:outline-brand-blue focus-visible:outline-offset-3',
  secondary:
    'border border-brand-cobalt/50 bg-white text-brand-navy shadow-sm hover:border-brand-cobalt hover:bg-brand-sand focus-visible:outline-brand-blue focus-visible:outline-offset-3',
  ghost: 'text-brand-cobalt hover:text-brand-navy focus-visible:outline-brand-blue focus-visible:outline-offset-3'
};
const sizeClasses: Record<ButtonSize, string> = {
  md: 'px-5 py-3 text-sm',
  sm: 'px-4 py-2 text-sm'
};

export function buttonStyles({ variant = 'primary', size = 'md', fullWidth, className }: ButtonStyleOptions = {}): string {
  return clsx(baseClasses, variantClasses[variant], sizeClasses[size], fullWidth && 'w-full', className);
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & ButtonStyleOptions;

const Button = forwardRef(function Button(
  { variant = 'primary', size = 'md', fullWidth, className, type = 'button', ...rest }: ButtonProps,
  ref: ForwardedRef<HTMLButtonElement>
) {
  return (
    <button
      ref={ref}
      type={type}
      className={buttonStyles({ variant, size, fullWidth, className })}
      {...rest}
    />
  );
});

export default Button;
