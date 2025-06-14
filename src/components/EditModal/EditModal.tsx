import { IconX } from "@tabler/icons-react";
import { useState, type ChangeEventHandler } from "react";
import s from "./EditModal.module.css";

type Props = {
  open: boolean;
  onClose: () => void;
  onSubmit: (p: { name: string; image: string }) => void;
};

/**
 * Edit Modal component
 *
 * @todo Make sure the component accessibility roles are fine.
 * @todo Make sure the modal will work fine with keyboard.
 *
 * @see https://medium.com/cstech/achieving-focus-trapping-in-a-react-modal-component-3f28f596f35b
 * @see https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/
 */
export default function EditModal({ open, onClose, onSubmit }: Props) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const handleSubmit = () => {
    onSubmit({ name, image });
  };

  const handleNameChange: ChangeEventHandler<HTMLInputElement> = e => {
    setName(e.target.value);
  };

  const handleFileChange: ChangeEventHandler<HTMLInputElement> = e => {
    const file = e.target.files?.[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      const base64String = reader.result;

      /* eslint-disable @typescript-eslint/no-base-to-string */
      setImage(base64String?.toString() || "");
      /* eslint-enable @typescript-eslint/no-base-to-string */
    };

    reader.readAsDataURL(file);
  };

  /**
   * @todo Make sure the inputs are accessible, check lables and descriptions are okay.
   *
   * @see https://react.dev/reference/react/useId
   */
  const renderForm = () => (
    <form
      onSubmit={handleSubmit}
      className={s.form}
    >
      <div className={s.row}>
        <span>name</span>
        <input
          type="text"
          maxLength={20}
          value={name}
          onChange={handleNameChange}
        />
      </div>
      <div className={s.row}>
        <span>image</span>
        <input
          accept="image/*"
          name="profile pic"
          type="file"
          onChange={handleFileChange}
        />
      </div>
      <button
        className={s.sub}
        type="submit"
      >
        Submit
      </button>
    </form>
  );

  /**
   * render the close button of the modal.
   *
   * @todo Check if the button is fully accessible for the screen reader, can the screen reader find out what this button is going to do?
   * @todo Check if the content is still readable the user increase the text size to 200%.
   */
  const renderCloseButton = () => (
    <button
      className={s.close}
      onClick={onClose}
      style={{ marginLeft: "10px" }}
    >
      <IconX />
    </button>
  );

  return (
    <>
      {open && (
        <>
          <div
            onClick={onClose}
            className={s.overlay}
          />
          <div className={s.modal}>
            <div className={s.header}>
              <h2>Edit Profile</h2>
              {renderCloseButton()}
            </div>
            <ul className={s.info}>
              <li>the name should have maximum 20 characters</li>
              <li>only valid image formats are acceptable for image</li>
            </ul>
            {renderForm()}
          </div>
        </>
      )}
    </>
  );
}
