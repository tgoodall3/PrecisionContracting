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
  'inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-60';
const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-brand-blue text-brand-navy hover:bg-brand-blue/90 focus-visible:outline-brand-blue',
  secondary: 'border border-brand-blue text-brand-blue hover:bg-brand-blue/10 focus-visible:outline-brand-blue',
  ghost: 'text-brand-navy hover:text-brand-blue focus-visible:outline-brand-blue'
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
