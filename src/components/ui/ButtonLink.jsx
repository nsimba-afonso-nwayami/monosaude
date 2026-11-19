import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const variants = {
  primary:
    "bg-green-600 hover:bg-green-500 text-white shadow-lg shadow-green-950/20",
  secondary:
    "bg-green-900 hover:bg-green-800 text-white",
  outline:
    "border border-green-600 text-green-700 hover:bg-green-600 hover:text-white",
  danger:
    "bg-red-600 hover:bg-red-500 text-white",
};

const sizes = {
  sm: "px-3 py-2 text-xs",
  md: "px-5 py-3 text-sm sm:text-base",
  lg: "px-7 py-4 text-base sm:text-lg",
};

export default function ButtonLink({
  to,
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  isHashLink = false,
  className = "",
  ...props
}) {
  const Component = isHashLink ? HashLink : Link;

  return (
    <Component
      to={to}
      className={`
        inline-flex items-center justify-center gap-3
        rounded-lg font-semibold
        transition-all duration-300
        ${variants[variant]}
        ${sizes[size]}
        ${fullWidth ? "w-full" : "w-auto"}
        ${className}
      `}
      {...props}
    >
      {children}
    </Component>
  );
}
