import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'gold';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  to?: string;
  icon?: React.ReactNode;
  showArrow?: boolean;
  isExternal?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  to,
  icon,
  showArrow = false,
  isExternal = false,
  className = '',
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 font-medium uppercase tracking-[0.12em] rounded-[2px] transition-all duration-200 select-none whitespace-nowrap focus-visible:outline-2 focus-visible:outline-[#B6945A] focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed group';

  const sizeStyles = {
    sm: 'text-[11px] px-4 py-2',
    md: 'text-[12px] sm:text-[13px] px-6 py-3',
    lg: 'text-[13px] sm:text-[14px] px-8 py-4',
  }[size];

  const variantStyles = {
    primary:
      'bg-[#193126] text-white border border-[#B6945A]/35 hover:bg-[#244434] hover:border-[#B6945A] hover:shadow-[0_4px_16px_rgba(25,49,38,0.18)]',
    secondary:
      'bg-transparent text-[#193126] border border-[#193126]/30 hover:border-[#193126] hover:bg-[#193126]/5',
    outline:
      'bg-transparent text-[#193126] border border-[#B6945A]/50 hover:bg-[#B6945A]/10 hover:border-[#B6945A]',
    gold:
      'bg-[#B6945A] text-white border border-[#B6945A] hover:bg-[#a38249] hover:shadow-[0_4px_16px_rgba(182,148,90,0.25)]',
  }[variant];

  const combinedClasses = `${baseStyles} ${sizeStyles} ${variantStyles} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {showArrow ? (
        <ArrowUpRight className="w-4 h-4 text-current transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
      ) : (
        icon
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {content}
    </button>
  );
};

export default Button;
