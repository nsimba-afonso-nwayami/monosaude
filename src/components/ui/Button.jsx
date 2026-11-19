
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

export default function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  type = "button",
  isLoading = false,
  disabled = false,
  className = "",
  ...props
}) {
  const isDisabled = disabled || isLoading;

  return (
    <button
      type={type}
      disabled={isDisabled}
      aria-busy={isLoading}
      className={`
        inline-flex items-center justify-center gap-3
        rounded-lg font-semibold
        transition-all duration-300
        ${variants[variant]}
        ${sizes[size]}
        ${fullWidth ? "w-full" : "w-auto"}
        ${isDisabled ? "opacity-60 cursor-not-allowed" : "cursor-pointer"}
        ${className}
      `}
      {...props}
    >
      {isLoading && (
        <i className="fas fa-spinner fa-spin"></i>
      )}

      {isLoading ? "A processar..." : children}
    </button>
  );
}
