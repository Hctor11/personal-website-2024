
interface Props {
    message: string;
    children: React.ReactNode;
    position?: "left" | "top" | "right" | "bottom";
}


const ToolTip = ({ message, children, position = "top" }: Props) => {
  return (
    <div className="group relative p-2">
    {children}
    <span
      className={`absolute ${
        position == "top"
          ? "top-7 right-3"
          : position == "bottom"
          ? "bottom-7"
          : position == "right"
          ? "right-7"
          : "left-7"
      } scale-0 transition-all w-max bg-zinc-800 p-2 text-xs text-white group-hover:scale-90`}
    >
      {message}
    </span>
  </div>
  )
}

export default ToolTip