



export const FeedbackOptions = ({ total, message }) => {
  //const clicks = this.state;

  <>
    console.log('total FeedbackOptions', total(), message);
    <p>{message}</p>;
  </>;
  
  
};



// export class StateExample extends Component {
//   state = {
//     numberOfClicks: 0,
//   };

//   handleClick = () => {
//     this.setState(prevState => {
//       return {
//         numberOfClicks: prevState.numberOfClicks + 1,
//       };
//     });
//   };

//   handleReset = () => {
//     this.setState({
//       numberOfClicks: 0,
//     });
//   };

//   render() {

//     return (
//       <div >
//         StateExample
//         <button onClick={this.handleClick}>{this.state.numberOfClicks}</button>
//         <button onClick={this.handleReset}>Reset</button>
        
//       </div>
//     );

//   }
// }



// import {
//   FeedbackOptionsDiv,
//   FeedbackOptionsH,
//   BlockButton,
//   BlockButtonButtons,
// } from './FeedbackOptions.styled';

// export const FeedbackOptions = () => {
//   return (
//     <FeedbackOptionsDiv>
//       <FeedbackOptionsH>Надайте , будь ласка , відгук ...</FeedbackOptionsH>
//       <BlockButton>
//         <BlockButtonButtons>good</BlockButtonButtons>
//         <BlockButtonButtons>neutral</BlockButtonButtons>
//         <BlockButtonButtons>bad</BlockButtonButtons>
//       </BlockButton>
//     </FeedbackOptionsDiv>
//   );
// };

// 3й
// handleClick = event => {
//   this.setState(prevState => {
//     const id = event.target.id;
//     console.log(id);

//     return {
//       numberOfClicksGood: prevState.numberOfClicksGood + 1,

//       numberOfClicksNeutral: prevState.numberOfClicksNeutral + 1,

//       numberOfClicksBad: prevState.numberOfClicksBad + 1,
//     };
//   });
// };

//
// switch (expr) {
//   case 'Oranges':
//     console.log('Oranges are $0.59 a pound.');
//     break;
//   case 'Apples':
//     console.log('Apples are $0.32 a pound.');
//     break;
//   case 'Bananas':
//     console.log('Bananas are $0.48 a pound.');
//     break;
//   case 'Cherries':
//     console.log('Cherries are $3.00 a pound.');
//     break;
//   case 'Mangoes':
//   case 'Papayas':
//     console.log('Mangoes and papayas are $2.79 a pound.');
//     break;
//   default:
//     console.log('Sorry, we are out of ' + expr + '.');
// }

    //  {(() => {
    //     switch (game) {
    //       case 'start':
    //         return <Start handleClick={handleClick} />
    //       case 'playing':
    //         return <Playing handleClick={handleClick} />
    //       case 'won':
    //         return <Won handleClick={handleClick} />
    //       case 'lost':
    //         return <Lost handleClick={handleClick} />
    //       default:
    //         return null
    //     }
    //   })()}

    // умова ?
    // {
    //   item.isOnline ? (
    //     <Online className="status online">{item.isOnline}</Online>
    //   ) : (
    //     <Status className="status">{item.isOnline}</Status>
    //   );
    // }

    // switch (id) {
    //   case 'goodId':
    //     return () => {
    //       console.log('goodId', numberOfClicksGood);
    //       numberOfClicksGood = prevState.numberOfClicksGood + 1;
    //     };
    //   case 'neutralId':
    //     return console.log('neutralId', prevState);
    //   case 'badId':
    //     return console.log('badId', prevState);
    //   default:
    //     return null;
    // }

    // <>
    //   Switch (id) {'{'}
    //   case 'goodId': console.log(id,'1= goodId'); break; case 'neutralId':
    //   console.log(id,'2= neutralId'); break; case 'badId': console.log(id,'3=
    //   badId'); break; default: console.log('Sorry, we are out of ');
    //   {'}'}
    // </>;