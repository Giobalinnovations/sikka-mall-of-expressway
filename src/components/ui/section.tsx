import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  id?: string;
  variant?: 'default' | 'alternate';
  className?: string;
  children: React.ReactNode;
}

export function Section({
  id,
  variant = 'default',
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'py-16',
        {
          'bg-background': variant === 'default',
          'bg-secondary/20': variant === 'alternate',
        },
        className
      )}
      {...props}
    >
      <div className="container px-4 md:px-6">{children}</div>
    </section>
  );
}
