import { HTMLAttributes } from 'react';
import clsx from 'clsx';

type CardProps = HTMLAttributes<HTMLDivElement>;

const Card = ({ className, ...props }: CardProps) => (
  <div className={clsx('rounded-lg bg-white p-6 shadow-sm ring-1 ring-brand-gray/60', className)} {...props} />
);

export default Card;
