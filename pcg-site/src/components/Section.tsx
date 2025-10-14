import { HTMLAttributes } from 'react';
import clsx from 'clsx';

type SectionProps = HTMLAttributes<HTMLElement>;

const Section = ({ className, ...props }: SectionProps) => (
  <section className={clsx('py-16 sm:py-24', className)} {...props} />
);

export default Section;
