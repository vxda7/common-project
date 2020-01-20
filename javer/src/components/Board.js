import React from "react";
import // Table,
// TableBody,
// TableCell,
// TableContainer,
// TableHead,
// TableRow,
// makeStyles,
// Paper
"@material-ui/core";

const Board = ({ one }) => {
  return (
    <div>
      <h1>{one.title}</h1>
      <p>{one.content}</p>
    </div>
  );
};

export default Board;
