import './App.css';
import { Suspense, useState } from 'react';
import { useEffect } from 'react';
import LeftPane from './components/leftpane/leftPane';
import RightPane from './components/rightpane/rightPane';
import MiddlePane from './components/middlepane/middlePane';
import { PageResponse } from './Model';
import { ButtonData } from './Model';
import { UserData } from './Model'
import { TrendingListData } from './Model'
import { FollowData } from './Model';


function App() {
  let [data, setData] = useState<PageResponse>()
  useEffect(() => {
    fetch("https://sandbox.nextleap.app/page/fetch")
      .then(res => res.json())
      .then((details) => setData(details))
  }, [])


  const leftPaneData: ButtonData[] | undefined = data?.sideNavigationButtons;
  const loggedInUser: UserData | undefined = data?.loggedInUser
  const tweetButton: ButtonData | undefined = data?.tweetButton
  const trendingData: TrendingListData | undefined = data?.trendingData;
  const followData: FollowData | undefined = data?.followData

  return (
    <Suspense fallback={<div className='suspensediv'>loading</div>}>
    <div className="App" key="app">
    
      <LeftPane buttonIconList={leftPaneData} loggedInUser={loggedInUser} tweetButton={tweetButton} />
      <MiddlePane data={data} loggedInUser={loggedInUser} tweetButton={tweetButton} />
      <RightPane trendingData={trendingData} followData={followData} />
    </div>
    </Suspense>
  );
}
export default App;
