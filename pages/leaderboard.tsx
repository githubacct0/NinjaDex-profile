import Head from 'next/head';
import { useState, useCallback} from 'react';
import styled from 'styled-components';
import Layout from "../components/Layout";
import LeaderBoardCard from '../components/LeaderBoardCard';
import StyledInput from '../components/StyledInput';
import Carousel from '../components/Carousel';
import { useQuery } from "@apollo/client";
import { throttle } from 'lodash';
import {QUERY_USER} from '../dgraph/queries/user';
import { LeaderboardType } from '../constants';

const FETCH_LIMIT  = 15;


const Container = styled.div`
  height: 100vh;
  overflow-y: scroll;
  color: ${(props) => props.theme.colors.grey};
`;

const Main = styled.main``;

const ContentWrapper = styled.div`
  margin: 45px 5%;
  .title {
    font-size: ${(props) => props.theme.fontSizes[7]};
    color: ${(props) => props.theme.colors.white};
    margin: 0 0 45px;
  }
`;
interface ToggleProps {
  selected?: boolean;
}

export const ClearButton = styled.div<ToggleProps>`
  background: transparent;
  padding: 5px;
  border: none;
  outline: none;
  cursor: pointer;
  color: ${(props) => (props.selected ? props.theme.colors.blue : props.theme.colors.grey)};
`;

const WeeklySeasonalToggle = styled.div`
  display: flex;
  align-items: center;
  font-size: ${(props) => props.theme.fontSizes[4]};

  div:nth-child(2) {
    margin: 0 15px;
    color: ${(props) => props.theme.colors.grey};
  }
`;

const SearchBarWrapper = styled.div`
  margin: 35px 0;
`;

export default function LeaderBoard() {
  const [leaderboardType, setLeaderBoardType] = useState<LeaderboardType>(LeaderboardType.Weekly);
  const [rankings, setUserRankings] = useState<any>([]);
  const [allFetched, setAllFetched] = useState<boolean>(false);
  const [offset, setOffset] = useState<number>(0);
 
  const { loading, error, called, fetchMore} = useQuery(QUERY_USER, 
    {variables: {first: FETCH_LIMIT, offset, order: { asc: 'currentRank' }, filter: { currentRank: { gt: 0 } } }, 
    onCompleted: (data) =>{
    if(called && data?.queryUser.length < FETCH_LIMIT) {
      setAllFetched(true);
    }
    setUserRankings([...rankings, ...data?.queryUser]);
  }});

  const withThrottleBoardScroll = useCallback(
    throttle((totalHeight, currentHeigth) => {
      if (currentHeigth >= totalHeight && !loading  && !allFetched) {
        const newOffset = offset + FETCH_LIMIT;
        fetchMore({variables: {offset: newOffset }});
        setOffset(newOffset);
      }
    }, 1000),
    [offset, loading, fetchMore, allFetched],
  );

    const onScroll = (event:any) => {
      const maxScrollPosition= (event.currentTarget.scrollHeight - event.currentTarget.clientHeight) * 0.75;
      const scrollBarPosition =event.currentTarget.scrollTop;
        withThrottleBoardScroll(maxScrollPosition,scrollBarPosition);
    }

  if(!called) {
    return <p>loading</p>;
  }

  if (error) {
    return <p>Error fetching data</p>
  }
  
  return (
    <Container onScroll={onScroll}>
      <Head>
        <title>LeaderBoard - Ninja NFT</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
      <Main>
        <Carousel />
        <ContentWrapper>
          <div className="title">Leaderboard</div>
          <WeeklySeasonalToggle>
            <ClearButton onClick={() => setLeaderBoardType(LeaderboardType.Weekly)} selected={leaderboardType === LeaderboardType.Weekly}>
              Weekly
            </ClearButton>
            <div>|</div>
            <ClearButton onClick={() => setLeaderBoardType(LeaderboardType.Seasonal)} selected={leaderboardType === LeaderboardType.Seasonal}>
              Seasonal
            </ClearButton>
          </WeeklySeasonalToggle>
          <SearchBarWrapper>
            <StyledInput />
          </SearchBarWrapper>
          {rankings.map((user: User) => {
            return(
              <LeaderBoardCard key={user.discordId} user={user} />
            )
          })}
        </ContentWrapper>
      </Main>
      </Layout>
    </Container>
  );
}
