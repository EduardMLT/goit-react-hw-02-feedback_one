import { MessageFeedback } from 'components/MessageFeedback/MessageFeedback';

import {
  StatisticsDiv,
  StatisticsTitleH,
  BlockStatisticsDiv,
  StatisticsSpan,
} from './Statistics.styled';

export const Statistics = ({ clicks, total, positiv }) => {
  return (
    <>
      <StatisticsDiv>
        <StatisticsTitleH>
          Статистика {console.log('clicks= ', { clicks })}
          {console.log('total= ', total())}
        </StatisticsTitleH>
        {total() ? (
          <BlockStatisticsDiv>
            <StatisticsSpan>Good {clicks.numberOfClicksGood}</StatisticsSpan>
            <StatisticsSpan>
              Neutral {clicks.numberOfClicksNeutral}
            </StatisticsSpan>
            <StatisticsSpan>Bad {clicks.numberOfClicksBad}</StatisticsSpan>
            <StatisticsSpan>Total {total()}</StatisticsSpan>

            {positiv() ? (
              <StatisticsSpan>Positive feedback -  {positiv()}</StatisticsSpan>
            ) : (
              <MessageFeedback message="No positive feedback! 2" />
            )}
          </BlockStatisticsDiv>
        ) : (
          <MessageFeedback message="No  feedback!" />
        )}
      </StatisticsDiv>
    </>
  );
};
