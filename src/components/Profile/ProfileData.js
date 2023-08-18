import { ProfileDiv, AvatarImg, Name, Tag, Location, ProfileSection, CardDiv, StatsUl, StatsLi, StatsSpanLabel, StatsSpanQuantity} from './ProfileData.styled';


export const Profile = ({
  data: {
    avatar,
    username,
    tag,
    location,
    stats: { followers, views, likes },
  },
}) => {  
  return (
    <ProfileSection>
      <ProfileDiv>
        <CardDiv>
          <AvatarImg src={avatar} alt="foto" />
          <Name>{username}</Name>
          <Tag>{tag}</Tag>
          <Location>{location}</Location>

          <StatsUl>
            <StatsLi>
              <StatsSpanLabel>Followers</StatsSpanLabel>
              <StatsSpanQuantity>{followers}</StatsSpanQuantity>
            </StatsLi>

            <StatsLi>
              <StatsSpanLabel>Views</StatsSpanLabel>
              <StatsSpanQuantity>{views}</StatsSpanQuantity>
            </StatsLi>

            <StatsLi>
              <StatsSpanLabel>Likes</StatsSpanLabel>
              <StatsSpanQuantity>{likes}</StatsSpanQuantity>
            </StatsLi>
          </StatsUl>
        </CardDiv>
      </ProfileDiv>
    </ProfileSection>
  );
};  