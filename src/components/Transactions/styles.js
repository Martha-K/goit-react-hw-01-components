import styled from 'styled-components';


export const Table = styled.table`
  table-layout: fixed;
  width: 600px;
  border-collapse: collapse;
  margin: 20px;
`;

export const Line = styled.tr`
  text-align: center;
  border-collapse: collapse;
  border: 2px solid black;
  height: 40px;
`;

export const Head = styled.thead`
  background-color: rgb(0, 255, 255);
  font-weight: bold;
  font-size: larger;
`;

export const TableCell = styled.td`
  border-right: 2px solid black;
  border-left: 2px solid black
`;