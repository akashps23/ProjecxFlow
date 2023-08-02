import { useRef, useState } from "react";
import "../../styles/popover.css";

export default function Popover(props) {
  const nameRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const onGoToRoom = (e) => {
    e.preventDefault();
    alert(props.clickedDate);
    props.setShowPopover(false);
  };
  return (
    <form
      className={`${"popover"} ${props.showPopover ? "showP" : "hideP"}`}
      onSubmit={onGoToRoom}
    >
      <input
        type="text"
        placeholder="Enter your name"
        className={"input"}
        ref={nameRef}
        autoComplete="off"
      />
      <button type="submit" className={"button"}>
        {loading ? "Loading..." : "Add Event"}
      </button>
    </form>
  );
}