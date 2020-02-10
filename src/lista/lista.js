import React, { useState, useEffect } from "react";
import { Table } from "@material-ui/core";
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from "@material-ui/core/TableRow";
import Paper from '@material-ui/core/Paper';
function Lista({ datos, filtro }) {
  const [mostrar, setMostrar] = useState([{}]);
  useEffect(() => {
    setMostrar([{}]);
    let filtrados = datos;
    function evaluar(condi) {
      const holi = element => {
        console.log(condi, element);
        return condi.validar(condi, element);
      };
      return holi;
    }

    let condicion = Object.keys(filtro);
    if (filtro) {
      filtro.map((filt, number) => {
        filtrados = filtrados.filter(evaluar(filt));
      });
    }
    setMostrar(filtrados);
  }, [filtro]);
  return (
    <div className="flex-center-column">
      <TableContainer component={Paper} >
      <Table>
        <TableHead>
        <TableRow>
              <TableCell>
                <p >Producto</p>
              </TableCell>
              <TableCell>
                <p >Precio</p>
              </TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
        {mostrar.map((x, i) => {
          return (
            <TableRow>
              <TableCell>
                <p key={i}>{x.name}</p>
              </TableCell>
              <TableCell>
                <p key={i}>{x.precio}</p>
              </TableCell>
            </TableRow>
          );
        })}</TableBody>
      </Table></TableContainer>
    </div>
  );
}

export default Lista;
