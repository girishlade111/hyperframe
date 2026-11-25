import { Link } from 'react-router-dom';

export type ButtonVariant =
  | 'primary'
  | 'grey'
  | 'grey-full'
  | 'orange-full'
  | 'review'
  | 'back-dark'
  | 'back-light';

interface PrimaryButtonProps {
  to?: string;
  href?: string;
  onClick?: () => void;
  label: string;
  variant?: ButtonVariant;
  tiltedArrow?: boolean;
  className?: string;
}

export function PrimaryButton({
  to,
  href,
  onClick,
  label,
  variant = 'primary',
  tiltedArrow = false,
  className = '',
}: PrimaryButtonProps) {
  const isBack = variant === 'back-dark' || variant === 'back-light';
  const isDarkText = variant === 'grey' || variant === 'grey-full' || variant === 'review' || variant === 'back-dark';

  const arrowSrc = isBack
    ? variant === 'back-light'
      ? '/assets/icons/Arrow-Icon-02.svg'
      : '/assets/icons/Arrow-Icon-01.svg'
    : isDarkText
      ? '/assets/icons/Right-Arrow.svg'
      : '/assets/icons/Whtie-Arrow.svg';

  const variantClass =
    variant === 'primary'
      ? ''
      : variant === 'grey'
        ? 'is-grey'
        : variant === 'grey-full'
          ? 'is-grey-full'
          : variant === 'orange-full'
            ? 'is-orange-full'
            : variant === 'review'
              ? 'is-review'
              : variant === 'back-dark'
                ? 'is-back-dark'
                : 'is-back-light';

  const inner = (
    <>
      <span className="primary-btn-text-wrap">
        <span className="primary-btn-text one">{label}</span>
        <span className="primary-btn-text two" aria-hidden="true">
          {label}
        </span>
      </span>
      <span
        className={`primary-btn-icon-wrap ${tiltedArrow ? 'is-tilted' : ''} ${isBack ? 'is-back' : ''}`}
      >
        <img width={24} height={24} alt="" src={arrowSrc} className="primary-arrow one" />
        <img
          width={24}
          height={24}
          alt=""
          src={arrowSrc}
          className="primary-arrow two"
          aria-hidden="true"
        />
      </span>
    </>
  );

  if (to) {
    return (
      <Link to={to} className={`primary-button ${variantClass} ${className}`.trim()}>
        {inner}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={`primary-button ${variantClass} ${className}`.trim()}>
        {inner}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={`primary-button ${variantClass} ${className}`.trim()}>
      {inner}
    </button>
  );
}
