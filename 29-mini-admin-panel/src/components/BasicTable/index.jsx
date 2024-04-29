import { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import "./index.css";

const BasicTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios("https://northwind.vercel.app/api/products").then((res) => {
      console.log(res.data);

      setData(res.data);
    });
  }, []);
  return (
    <div>
      <form action="">
        <input type="text" placeholder="write name" required />
        <input type="text" placeholder="write unit price" required />
      </form>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>unitPrice</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {data.map((val) => {
            console.log(val);
            return (
              <tr key={uuidv4()}>
                <td>{val.name}</td>
                <td>{val.unitPrice}</td>

                <td>
                  <button
                    onClick={(e) => {
                      let arr = data.filter((elem) => elem.id != val.id);
                      setData(arr);
                      // axios.delete(
                      //   `https://northwind.vercel.app/api/products/${val.id}`
                      // );
                    }}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <button className="edit">Edit</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default BasicTable;

// import * as React from "react";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { v4 as uuidv4 } from "uuid";
// import { styled } from "@mui/material/styles";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import {
//   tableCellClasses,
//   TableCell,
// } from "@mui/material/npm i material-table";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// function CustomizedTables() {
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     axios("https://northwind.vercel.app/api/products").then((res) => {
//       console.log(res);

//       setData(res.data);
//     });
//   }, []);
//   return (
//     <div className="container">
//       <TableContainer component={Paper}>
//         <Table sx={{ minWidth: 700 }} aria-label="customized table">
//           <TableHead>
//             <TableRow>
//               <StyledTableCell>id</StyledTableCell>
//               <StyledTableCell align="right">name</StyledTableCell>
//               <StyledTableCell align="right">unitPrice</StyledTableCell>
//               <StyledTableCell align="right">delete</StyledTableCell>
//               <StyledTableCell align="right">edit</StyledTableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {data.map((el) => (
//               <StyledTableRow key={uuidv4()}>
//                 <StyledTableCell align="right">{el.id}</StyledTableCell>
//                 <StyledTableCell align="right">{el.name}</StyledTableCell>
//                 <StyledTableCell align="right">{el.unitPrice}</StyledTableCell>
//                 <StyledTableCell align="right">{el.protein}</StyledTableCell>
//               </StyledTableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </div>
//   );
// }
// export default CustomizedTables;
