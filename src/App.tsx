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
import { error } from 'console';


function App() {
  let [data, setData] = useState<PageResponse>()
  useEffect(() => {
    fetch("https://sandbox.nextleap.app/page/fetch")
      .then(res => {if(!res.ok)
                  {throw new Error("response not ok!")} 
                    return res.json()})
      .then((details) => setData(details))
      .catch(error=>
        {console.error(error)})
  }, [])
  
   if(data){
    const leftPaneData: ButtonData[] = data?.sideNavigationButtons;
    const loggedInUser: UserData | undefined = data?.loggedInUser
    const tweetButton: ButtonData | undefined = data?.tweetButton
    const trendingData: TrendingListData | undefined = data?.trendingData;
    const followData: FollowData | undefined = data?.followData
    return(
      <div className="App" key="app">
      <LeftPane buttonIconList={leftPaneData} loggedInUser={loggedInUser} tweetButton={tweetButton} />
      <MiddlePane data={data} loggedInUser={loggedInUser} tweetButton={tweetButton} />
      <RightPane trendingData={trendingData} followData={followData} />
    </div>
    )}
    else{
      return(
        <div>
          loading
        </div>
      )
    }
  }
    
  
export default App;
