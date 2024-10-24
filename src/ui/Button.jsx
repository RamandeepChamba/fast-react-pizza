import { Link } from "react-router-dom";

function Button({ children, disabled, to, type }) {
  const base =
    "text-sm rounded-full bg-yellow-400 font-semibold uppercase transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed ";

  const styles = {
    primary: base + "px-4 py-3 md:px-6 md:py-4",
    small: base + "px-4 py-2 md:px-4 md:py-2 text-xs",
    secondary:
      "text-sm rounded-full font-semibold uppercase transition-colors duration-300 border border-stone-300 text-stone-400 hover:bg-stone-300 hover:text-stone-700 focus:text-stone-700 focus:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-300 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5",
  };
  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
