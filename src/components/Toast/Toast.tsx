import s from "./Toast.module.css";

type Props = {
  children: React.ReactNode;
};

/**
 * Toast component that show notification on top of the screen.
 *
 * @todo Make sure of the toast is fully accessible, will it notify the blind people?
 *
 * @see https://www.w3.org/WAI/ARIA/apg/patterns/alert/
 */
export default function Toast({ children }: Props) {
  return <div className={s.toast}>{children}</div>;
}
