import {StatisticsSection, StatisticsTitleH, StatisticsListUl, StatisticsLi, StatisticsSpanLabel, StatisticsSpanPercentage} from './StatisticsData.styles';

export const Statistics = ({ stats }) => {
    
    return (
      <StatisticsSection>
        <StatisticsTitleH>Upload stats</StatisticsTitleH>

        <div>
          <StatisticsListUl>
            {stats.map(item => (
              <StatisticsLi key={item.id}>
                <StatisticsSpanLabel>{item.label}</StatisticsSpanLabel>
                <StatisticsSpanPercentage>
                  {item.percentage}
                </StatisticsSpanPercentage>
              </StatisticsLi>
            ))}
          </StatisticsListUl>
        </div>
      </StatisticsSection>
    );
};
