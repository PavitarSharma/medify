const Button = ({ type = "button", label, onClick, icon: Icon }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-primary text-white gap-1 h-12 flex items-center justify-center text-center  rounded-lg px-4 py-3 text-sm font-semibold"
    >
      {Icon && <Icon size={20} />} {label}
    </button>
  );
};

export default Button;
