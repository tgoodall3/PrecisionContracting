import { HTMLAttributes } from 'react';
import clsx from 'clsx';

type ContainerProps = HTMLAttributes<HTMLDivElement>;

const Container = ({ className, ...props }: ContainerProps) => (
  <div className={clsx('mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8', className)} {...props} />
);

export default Container;
