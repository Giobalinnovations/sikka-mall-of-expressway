interface SectionHeadingProps {
  title: string;
  description?: string;
  alignment?: 'left' | 'center';
}

export function SectionHeading({
  title,
  description,
  alignment = 'left',
}: SectionHeadingProps) {
  return (
    <div className={`space-y-4 ${alignment === 'center' ? 'text-center' : ''}`}>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
      {description && (
        <p
          className={`text-muted-foreground text-base md:text-lg max-w-[600px] leading-relaxed ${
            alignment === 'center' ? 'mx-auto' : ''
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
