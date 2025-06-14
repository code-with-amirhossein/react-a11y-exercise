import { IconEdit, IconEraser } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import "./App.css";
import { EditModal, Preview, Row, Toast } from "./components/index.ts";

/**
 * This project is a simple accessibility excercise. search for @todo occurences in the project for hints.
 *
 * @todo Make the app accessible. search for other todos for hints.
 *
 * @see https://chromewebstore.google.com/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd
 * @see https://code-with-amirhossein.github.io/a11y-for-react-devs/
 */
function App() {
  const [showModal, setShowModal] = useState(false);
  const [toastMessage, setToastMessasge] = useState<null | string>(null);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    const savedName = localStorage.getItem("user_name");
    const savedProfile = localStorage.getItem("user_profile");

    if (savedName) setName(savedName);
    if (savedProfile) setImage(savedProfile);
  }, []);

  const showToast = (message: string) => {
    if (toastMessage !== null) return;

    setToastMessasge(message);

    setTimeout(() => {
      setToastMessasge(null);
    }, 3000);
  };

  const submitForm = ({ name, image }: { name: string; image: string }) => {
    setName(name);
    setImage(image);
    localStorage.setItem("user_name", name);
    localStorage.setItem("user_profile", image);
    setShowModal(false);
    showToast("Data updated successfully");
  };

  const clear = () => {
    localStorage.removeItem("user_name");
    localStorage.removeItem("user_profile");
    setName("");
    setImage("");
    showToast("Data cleared successfully");
  };

  return (
    <>
      {/* TODO: Remove this lines after fixing accessibility issues */}
      <p className="sr-only">
        This page is not accessible and screen readers cannot work with them.
        but don't worry! We are going to fix the accessibility issues and make
        it accessible for everyone.
      </p>

      <h2>Profile</h2>
      <Preview
        name={name}
        image={image}
      />
      <div>
        <Row
          Icon={IconEdit}
          onClick={() => setShowModal(true)}
        >
          Edit Profile
        </Row>
        <Row
          color="#c00"
          Icon={IconEraser}
          onClick={clear}
        >
          Clear Info
        </Row>
      </div>

      <EditModal
        open={showModal}
        onClose={() => setShowModal(false)}
        onSubmit={submitForm}
      />
      {toastMessage !== null && <Toast>{toastMessage}</Toast>}
    </>
  );
}

export default App;
