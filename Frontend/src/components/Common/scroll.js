import { useEffect } from "react";
import { Icon } from "semantic-ui-react";

const Scroll = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <div style={{ height: "5rem" }} />

      <button
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
        style={{
          position: "fixed",
          padding: "1rem",
          fontSize: "20px",
          height: "20px",
          bottom: "20px",
          right: "40px",
          backgroundColor: "tomato",
          color: "#fff",
          justifyContent: "center",
          zIndex: "900",
        }}
      >
        <Icon name="arrow up" size />
      </button>
    </div>
  );
};
export default Scroll;
