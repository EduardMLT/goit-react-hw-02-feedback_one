import {
  FeedbackOptionsDiv,
  FeedbackOptionsH,
  BlockButton,
  BlockButtonButtons,
} from './FeedbackOptions.styled';


export const FeedbackOptions = () => {
  return (
    <FeedbackOptionsDiv>
      <FeedbackOptionsH>Надайте , будь ласка , відгук ...</FeedbackOptionsH>
        <BlockButton>
        <BlockButtonButtons>good</BlockButtonButtons>
        <BlockButtonButtons>neutral</BlockButtonButtons>
        <BlockButtonButtons>bad</BlockButtonButtons>
        </BlockButton>
      
    </FeedbackOptionsDiv>
  );
};  


  