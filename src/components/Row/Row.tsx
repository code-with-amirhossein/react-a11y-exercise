import type { Icon, IconProps } from "@tabler/icons-react";
import type { ForwardRefExoticComponent, RefAttributes } from "react";
import s from "./Row.module.css";

type Props = {
  children: React.ReactNode;
  color?: string;
  Icon: ForwardRefExoticComponent<IconProps & RefAttributes<Icon>>;
  onClick: () => void;
};

/**
 * Simple clickable row component.
 *
 * @todo Make sure the component is accessible for EVERYONE.
 *
 * @see https://code-with-amirhossein.github.io/a11y-for-react-devs/dev-checklists.html#don-t-be-a-div-button-creator
 */
export default function Row({ children, onClick, Icon, color }: Props) {
  return (
    <div
      className={s.row}
      onClick={onClick}
      style={{ color }}
    >
      <Icon />
      {children}
    </div>
  );
}
