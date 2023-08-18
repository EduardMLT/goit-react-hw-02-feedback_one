import {FriendDiv, FriendUl, FriendLi, Status, AvatarImg, Name, Online} from './FriendList.styled';

export const FriendList = ({ stats }) => {
    
    return (
      <FriendDiv>
        <FriendUl>
          {stats.map(item => (
            <FriendLi key={item.id}>
              {item.isOnline ? (
                <Online className="status online">{item.isOnline}</Online>
              ) : (
                <Status className="status">{item.isOnline}</Status>
              )}

              <AvatarImg src={item.avatar} alt="User avatar" width="48" />
              <Name>{item.name}</Name>
            </FriendLi>
          ))}
        </FriendUl>
      </FriendDiv>
    );
    }