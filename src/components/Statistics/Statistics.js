import {
  StatisticsDiv,
  StatisticsTitleH,
  BlockStatisticsDiv,
  StatisticsSpan,
} from './Statistics.styles';

export const Statistics = ({ stats }) => {
    
    return (
      <StatisticsDiv>
        <StatisticsTitleH>Статистика</StatisticsTitleH>

        <BlockStatisticsDiv>
          <StatisticsSpan>124567</StatisticsSpan>
          <StatisticsSpan>456789</StatisticsSpan>
          <StatisticsSpan>345678</StatisticsSpan>
        </BlockStatisticsDiv>
      </StatisticsDiv>
    );
};
