import styled from 'styled-components';

interface LeaderBoardCardProps {
 user: User;
}

const Card = styled.div`
  margin-top: 50px;
  border-radius: 20px;
  height: 120px;
  display: flex;
  padding: 20px 50px;
  background-color: ${(props) => props.theme.colors.white};
  align-items: center;

  &.userRank1 {
    height: 200px;
    background-color: ${(props) => props.theme.colors.gold};
  }

  &.userRank2 {
    height: 180px;
    background-color: ${(props) => props.theme.colors.grey};
  }

  &.userRank3 {
    height: 160px;
    background-color: #cd7f32;
  }

  div:nth-child(1) {
    color: ${(props) => props.theme.colors.black};
    font-size: ${(props) => props.theme.fontSizes[8]};
  }

  div:nth-child(2) {
    height: 80px;
    width: 80px;
    border-radius: 50%;
    border: 1px solid #ffb800;
    margin-left: 4%;
  }

  div:nth-child(3) {
    color: ${(props) => props.theme.colors.black};
    font-size: ${(props) => props.theme.fontSizes[3]};
    margin-left: 4%;
  }

  div:nth-child(4) {
    color: ${(props) => props.theme.colors.black};
    font-size: ${(props) => props.theme.fontSizes[3]};
    font-weight: bold;
    text-align: right;
    margin-left: auto;
  }
`;

export default function LeaderBoardCard({ user }: LeaderBoardCardProps) {
  return (
    <Card className={`userRank${user.currentRank}`}>
      <div>{user.currentRank}</div>
      <div></div>
      <div>{user.name}</div>
      <div>{user.ninjaHolding} NINJA</div>
    </Card>
  );
}
