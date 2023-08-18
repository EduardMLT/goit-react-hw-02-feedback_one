import styled from 'styled-components';

export const TransactionTable = styled.table`
  min-width: 700px;
  text-align: center;
  margin: 50px auto;
  border-radius: 8px;
  box-shadow: 1px 1px 8px 0px tomato;
`;

export const TableHeader = styled.thead`
  background-color: #8bdfc3;
  line-height: 40px;
  border-radius: 8px;
`;

export const TableRow = styled.tr`
  background-color: #fff;
  line-height: 40px;
  text-transform: capitalize;
  color: #808080;
  background-color: ${({ $iseven }) => ($iseven ? '#f4edada8' : '#fff')};
`;

export const TableTd = styled.td`
  border-radius: 8px;
`;