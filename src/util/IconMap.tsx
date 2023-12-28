import type { iconMapProps } from "./icons";
import ToolTip from "./ToolTip";

const IconMap = ({ icons, label }: iconMapProps) => {
  return (
    <div className="text-center w-fit">
      <div className="flex items-center justify-center">
        {icons.map((icon) => (
          <ToolTip key={icon.name} message={icon.name} position="top">
            <img src={icon.path} className="dark:filter dark:invert" alt="img" width={24} height={24} />
          </ToolTip>
        ))}
      </div>
      <p>{label}</p>
    </div>
  );
};

export default IconMap;
