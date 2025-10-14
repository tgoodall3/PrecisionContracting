import { useEffect } from 'react';
import clsx from 'clsx';
import { XMarkIcon } from '@heroicons/react/24/outline';

type ToastProps = {
  open: boolean;
  message: string;
  variant?: 'success' | 'error';
  onClose?: () => void;
};

const Toast = ({ open, message, variant = 'success', onClose }: ToastProps) => {
  useEffect(() => {
    if (!open) return;
    const timer = window.setTimeout(() => onClose?.(), 4000);
    return () => window.clearTimeout(timer);
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-6 z-[60] flex justify-center px-4">
      <div
        className={clsx(
          'pointer-events-auto flex w-full max-w-md items-center justify-between rounded-lg px-4 py-3 text-sm shadow-lg ring-1',
          variant === 'success'
            ? 'bg-white text-brand-navy ring-brand-blue/30'
            : 'bg-white text-red-600 ring-red-200'
        )}
        role={variant === 'success' ? 'status' : 'alert'}
        aria-live="assertive"
      >
        <p className="pr-3">{message}</p>
        <button
          type="button"
          onClick={onClose}
          className="ml-auto inline-flex h-8 w-8 items-center justify-center rounded-full text-brand-navy/70 transition hover:text-brand-navy"
          aria-label="Dismiss notification"
        >
          <XMarkIcon className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
};

export default Toast;
