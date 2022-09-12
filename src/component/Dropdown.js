import React, { useEffect, useState, useRef } from "react";

const Dropdown = ({ options, selected, onSelectedChange, label }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    };
    document.body.addEventListener("click", onBodyClick, { capture: true });

    return () => {
      document.body.removeEventListener("click", onBodyClick, {
        capture: true,
      });
    };
  }, []);

  const colors = options.map((color) => {
    if (color.value === selected.value) {
      return null;
    }
    return (
      <div
        key={color.label}
        className="item"
        onClick={() => {
          onSelectedChange(color);
        }}
      >
        {color.label}
      </div>
    );
  });

  return (
    <div>
      <div ref={ref} className="ui form">
        <div className="field">
          <label className="label">{label}</label>
          <div
            className={`ui selection dropdown ${open ? "visible active" : ""} `}
            onClick={() => {
              setOpen(!open);
            }}
          >
            <i className="dropdown icon"></i>
            <div className="text">{selected.label}</div>
            <div className={`menu ${open ? "visible transition" : ""}`}>
              {colors}
            </div>
          </div>
        </div>
      </div>
      <div className="ui header">
            <div className="text" style={{ color : selected.value}}>{selected.label}</div>
      </div>
    </div>
  );
};

export default Dropdown;
