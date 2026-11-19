
export default function Textarea({
  label,
  id,
  name,
  placeholder = "",
  rows = 5,
  required = false,
  disabled = false,
  error,
  helperText,
  className = "",
  ...props
}) {
  const errorMessage = typeof error === "string" ? error : error?.message;

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-semibold text-gray-700 mb-2"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      <textarea
        id={id}
        name={name}
        rows={rows}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        aria-invalid={!!errorMessage}
        aria-describedby={
          errorMessage ? `${id}-error` : helperText ? `${id}-helper` : undefined
        }
        className={`
          w-full px-4 py-3 rounded-md
          border bg-gray-50 text-gray-700 text-sm
          outline-none resize-none placeholder:text-gray-400
          transition-all duration-300
          ${
            errorMessage
              ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/10"
              : "border-gray-200 focus:border-green-600 focus:ring-2 focus:ring-green-600/10"
          }
          disabled:opacity-60 disabled:cursor-not-allowed
          ${className}
        `}
        {...props}
      />

      {errorMessage && (
        <p id={`${id}-error`} className="text-xs text-red-600 mt-2">
          {errorMessage}
        </p>
      )}

      {!errorMessage && helperText && (
        <p id={`${id}-helper`} className="text-xs text-gray-500 mt-2">
          {helperText}
        </p>
      )}
    </div>
  );
}
