import styled from 'styled-components';

export const StatisticsSection = styled.section`
    display: block; 
    width: 100%;
    margin:  50px auto;    
    max-width: 500px;
    text-align: center;
    border-radius: 8px;
    box-shadow: 1px 1px 8px 0px tomato;
`;

export const StatisticsTitleH = styled.h2`
    font-size: 24px;
    font-weight: 600;
    padding-top: 20px;
    padding-bottom: 20px;
`;

export const StatisticsListUl = styled.ul`
  margin: auto;
  width: 90%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 100px;
  border-radius: 8px;
  border: 2px solid #909090;
  background-color: #f3f3f3;
`;

export const StatisticsLi = styled.li`
  display: grid;
  height: 50px;
  width: 80px;
  border-radius: 8px;
  border: 2px solid #909090;
  background-color: #f4edada8;
`;

export const StatisticsSpanLabel = styled.span`
  font-size: 18px;
  font-weight: 600;
`;

export const StatisticsSpanPercentage = styled.span`
  font-size: 16px;
  font-weight: 600;
  
`;