import styled from 'styled-components';

export const Container = styled.div`
  border: 3px solid rgba(0, 0, 0, 0.7);
  width: 360px;
  text-align: center;
  margin: 40px;
`;

export const Image = styled.img`
  width: 200px;
  margin: 10px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.3);
`;

export const Name = styled.p`
  font-weight: bold;
  font-size: larger;
  margin: 5px;
`;

export const Location = styled.p`
  color: rgba(0, 0, 0, 0.6);
`;

export const List = styled.ul`
padding: 0;
`; 

export const Cart = styled.li`
  display: inline-block;
  margin: 10px;
  border: 2px solid rgba(0, 0, 0, 0.3);
  width: 80px;
  justify-content: center;
  align-items: center;
`;

export const Followers = styled.span`
  display: block;
  margin: 5px;
  text-align: center;
`;

export const Stats = styled.span`
  display: block;
  margin: 5px;
  text-align: center;
`;
