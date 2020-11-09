import styled from 'styled-components';

export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  padding: 36px;
  border-radius: 30px;
  margin: 20px 10px;
  -webkit-box-shadow: 0px 5px 20px 0px #d9dff38a; 
  box-shadow: 0px 5px 20px 0px #d9dff38a;
`;

export const Table = styled.table`
  border-collapse: collapse;
  border: none;
  margin-bottom: 10px;
`;

export const Heading = styled.th`
  background: #f3f3f3;
  padding: .75rem 1rem;
  font-size: 1.25rem;
  font-weight: 600;
`;

export const Body = styled.td`
  border: none;
  padding: .75rem 1rem;
  font-size: 1rem;
  font-weight: 300;
`;

export const Row = styled.tr`
  width: 100%;
  padding: 10px 20px;
  margin-bottom: 5px;
  &:nth-child(even) {
    background-color: #ebf3ff;
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
`;

export const Page =  styled.button`
  background: ${({ active })=>( active ? '#216FED': 'transparent')};
  color: ${({ active })=>( active ? '#FFF': '#000')};
  border: none;
  padding: .35rem .5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 30px;
  cursor: pointer;
  &:hover {
    background: #7caeff;
    color: #216FED;
    transition: all ease in out;
  }
  &:focus {
    border: none;
  }
`;

export const PrevPage = styled.button`
  background: ${({ disabled })=>( disabled ? '#D9E6FC': 'transparent')};
  color: ${({ disabled })=>( disabled ? '#2C76EE': '#000')};
  border: none;
  padding: .35rem .5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  cursor: pointer;
  &:hover {
    background: #7caeff;
    color: #216FED;
    transition: all ease in out;
  }
  &:focus {
    border: none;
  }
`;

export const NextPage = styled.button`
  background: ${({ disabled })=>( disabled ? '#D9E6FC': 'transparent')};
  color: ${({ disabled })=>( disabled ? '#2C76EE': '#000')};
  border: none;
  padding: .35rem .5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  cursor: pointer;
  &:hover {
    background: #7caeff;
    color: #216FED;
    transition: all ease in out;
  }
  &:focus {
    border: none;
  }
`;

export const Title = styled.h2`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 20px;
`;