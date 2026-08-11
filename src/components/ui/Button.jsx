const Button = ({
  children,
  type = "button",
  variant = "primary",
  onClick,
}) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold transition-all duration-300";

  const variants = {
    primary:
      "bg-primary text-background hover:opacity-90",

    secondary:
      "border border-borderColor bg-transparent text-textPrimary hover:bg-card",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]}`}
    >
      {children}
    </button>
  );
};

export default Button;