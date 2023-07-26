import React from "react";

export const ImageType = (props) => {
  const mostMatched = props.data[0];
  const student = props.student;
  const allLabels = props.data.map((elem) => elem.label);
  const sortedLabels = allLabels.sort((a, b) => a.localeCompare(b));
  return (
    <>
      <ul className="type">
        {sortedLabels.map((label) => (
          <li key={label}>
            <span>
              <img
                className={`img ${
                  label === mostMatched.label ? "selected" : null
                }`}
                src={
                  label === "N/A"
                    ? `./images/${student}/No.png`
                    : `./images/${student}/${label}.png`
                }
                alt={label}
              />
              <p className="name">{label}</p>
            </span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ImageType;
