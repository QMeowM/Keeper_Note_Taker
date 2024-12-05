import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";

function CreateArea(props) {
  const [note, setNote] = useState({ title: "", content: "" });
  const [isExpand, setIsExpand] = useState(false);

  function handleChange(event) {
    const { value, name } = event.target;
    setNote((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }

  function expand() {
    setIsExpand(true);
  }

  return (
    <div onClick={expand}>
      <form className="create-note">
        {isExpand && (
          <input
            onChange={handleChange}
            value={note.title}
            name="title"
            placeholder="Title"
          />
        )}
        <textarea
          onChange={handleChange}
          value={note.content}
          name="content"
          placeholder="Take a note..."
          rows={isExpand ? 3 : 1}
        />
        <Zoom in={isExpand && true}>
          <Fab
            onClick={(event) => {
              props.onAdd(note);
              setNote({ title: "", content: "" });
              event.preventDefault();
            }}
          >
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
// export notes;
