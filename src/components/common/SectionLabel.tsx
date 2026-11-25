interface SectionLabelProps {
  index?: string;
  label: string;
  variant?: 'paren' | 'brace';
  theme?: 'dark' | 'light';
}

export function SectionLabel({
  index,
  label,
  variant = 'paren',
  theme = 'light',
}: SectionLabelProps) {
  if (variant === 'brace') {
    return (
      <div className="sub-title-wrap">
        <span className="sub-title-orange">{'{'}</span>
        <span className={`sub-title ${theme === 'dark' ? 'is-white' : ''}`}>{label}</span>
        <span className="sub-title-orange">{'}'}</span>
      </div>
    );
  }

  return (
    <div className="about-b-top-left-wrap">
      {index && (
        <div className="story-number-wrap">
          <span className="story-number orange-color">(</span>
          <span className={`story-number ${theme === 'dark' ? 'white' : 'grey'}`}>{index}</span>
          <span className="story-number orange-color">)</span>
        </div>
      )}
      <div className={`about-b-sub-title ${theme === 'dark' ? 'white' : ''}`}>{label}</div>
    </div>
  );
}
