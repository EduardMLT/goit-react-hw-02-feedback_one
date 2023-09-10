import { Component } from 'react';

import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

import { MessageFeedback } from 'components/MessageFeedback/MessageFeedback';

import { Statistics } from './Statistics/Statistics';

import {
  FeedbackOptionsDiv,
  FeedbackOptionsH,
  BlockButton,
  BlockButtonButtons,
} from './FeedbackOptions/FeedbackOptions.styled';




export class App extends Component {
  state = {
    numberOfClicksGood: 0,
    numberOfClicksNeutral: 0,
    numberOfClicksBad: 0,
  };

   
  handleClick = (event, prevState) => {
    this.setState(prevState => {
      const id = event.target.id;
      console.log(id, prevState);

      if (id === 'goodId') {
        return {
          numberOfClicksGood: prevState.numberOfClicksGood + 1,
        };
      }
      if (id === 'neutralId')
        return { numberOfClicksNeutral: prevState.numberOfClicksNeutral + 1 };
      if (id === 'badId')
        return { numberOfClicksBad: prevState.numberOfClicksBad + 1 };
    });
  };

  countTotalFeedback = () =>
    Object.values(this.state).reduce(
      (totalFeedback, value) => totalFeedback + value,
      0
    );

  countPositiveFeedbackPercentage = () =>
    this.state.numberOfClicksGood > 0 ? (
      `${Math.floor(
        (this.state.numberOfClicksGood / this.countTotalFeedback()) * 100
      )}%`
    ) : (
      <MessageFeedback message="No  positive feedback!" />
    );

  render() {
    return (
      <>
        <FeedbackOptionsDiv>
          <FeedbackOptionsH>Надайте , будь ласка , відгук ...</FeedbackOptionsH>
          <BlockButton>
            <BlockButtonButtons id="goodId" onClick={this.handleClick}>
              good {this.state.numberOfClicksGood}
              {console.log('Clicks Good=', this.state.numberOfClicksGood)}
            </BlockButtonButtons>
            <BlockButtonButtons id="neutralId" onClick={this.handleClick}>
              neutral {this.state.numberOfClicksNeutral}
              {console.log('Clicks Neutral=', this.state.numberOfClicksNeutral)}
            </BlockButtonButtons>
            <BlockButtonButtons id="badId" onClick={this.handleClick}>
              bad {this.state.numberOfClicksBad}
              {console.log('Clicks Bad=', this.state.numberOfClicksBad)}
            </BlockButtonButtons>
          </BlockButton>
        </FeedbackOptionsDiv>

        <FeedbackOptions
          total={this.countTotalFeedback}
          message={this.noFeedback}
        />
        <Statistics
          clicks={this.state}
          total={this.countTotalFeedback}
          positiv={this.countPositiveFeedbackPercentage}
        />
      </>
    );
  }
};
