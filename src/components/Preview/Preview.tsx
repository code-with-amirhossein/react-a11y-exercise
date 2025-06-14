import { IconUserCircle } from "@tabler/icons-react";
import s from "./Preview.module.css";

type Props = {
  image: string;
  name: string;
};

/**
 * The preview of current data.
 *
 * @todo Check if the images are accessible for users.
 */
export default function Preview({ image, name }: Props) {
  return (
    <div className={s.preview}>
      {image ? (
        <img
          className={s.icon}
          src={image}
        />
      ) : (
        <IconUserCircle className={s.icon} />
      )}
      <p className={s.text}>{name || "[No name was found]"}</p>
    </div>
  );
}
