import React, { Children, useState } from 'react';
import { TabBar } from 'antd-mobile';
import { useGlobalState } from '../../../store'
import { Row, Col } from 'antd';
import Home from './../BootomTabPages/Home';
import Search from '../Search/Search';
import Profile from '../Profile/Profile';
import Busket from './../CartAndBusket/Busket';
import Liked from './../Liked/Liked';
import CheckOut from './../CheckOut/CheckOut';
import Card from '../CartAndBusket/Card';
import AccountAndProfile from './../Profile/AccountAndProfile';
// import { isMobile } from 'is-mobile';

const Layout = () => {


// console.log(isMobile,'////////////////')
    
    const [selectedTab, setSelectedTab] = useState(null)
    const [fullScreen, setFullScreen] = useState(true)
    const [hidden, setHidden] = useState(false)
    const [display,setDisplay] = useState(true);
    const [numberOfCard, setNumberOfCard] = useGlobalState('numberOfCard');

  
    return (

        
        <div className="common-top-margin">
             

                    <div style={fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
                        <TabBar
                            unselectedTintColor="#949494"
                            tintColor="#33A3F4"
                            barTintColor="white"
                            hidden={hidden}
                        >

                            <TabBar.Item
                               
                                key="home"
                                icon={<div style={{
                                    width: '22px',
                                    height: '22px',
                                    background: 'url(./image/homeIcon.png) center center /  21px 21px no-repeat'
                                }}
                                />
                                }
                                selectedIcon={<div style={{
                                    width: '22px',
                                    height: '22px',
                                    background: 'url(./image/homeActive.png) center center /  21px 21px no-repeat'
                                    
                                }}
                                />
                                }
                                selected={selectedTab === 'home-tab'}
                                onPress={() => {
                                    setSelectedTab('home-tab')
                                }}
                                data-seed="logId"
                            >
                               
                             <Home  /> 
                            {/* {bottomtab()} */}
                            </TabBar.Item>

                            <TabBar.Item
                                icon={
                                    <div style={{
                                        width: '22px',
                                        height: '22px',
                                        background: 'url(./image/searchIcon.png) center center /  21px 21px no-repeat'
                                    }}
                                    />
                                }
                                selectedIcon={
                                    <div style={{
                                        width: '22px',
                                        height: '22px',
                                        background: 'url(./image/searchActive.png) center center /  21px 21px no-repeat'
                                    }}
                                    />
                                }
                                
                                key="Search"
                                selected={selectedTab === 'search-tab'}
                                onPress={() => {
                                    setSelectedTab('search-tab')
                                }}
                                data-seed="logId1"
                            >
                               <Search />
                            </TabBar.Item>

                            <TabBar.Item
                                icon={
                                    <div style={{
                                        width: '22px',
                                        height: '22px',
                                        background: 'url(./image/basketIcon.png) center center /  21px 21px no-repeat'
                                    }}
                                    />
                                }
                                selectedIcon={
                                    <div style={{
                                        width: '22px',
                                        height: '22px',
                                        background: 'url(./image/basketActive.png) center center /  21px 21px no-repeat'
                                    }}
                                    />
                                }
                               
                                key="Search"
                                selected={selectedTab === 'busket-tab'}
                                badge={numberOfCard}
                                onPress={() => {
                                    setSelectedTab('busket-tab')
                                }}
                                data-seed="logId1"
                            >


                               
                                <Busket  /> 
                              
                                 {/* <MyAddress /> */}
                              
                            </TabBar.Item>

                            <TabBar.Item
                                icon={
                                    <div style={{
                                        width: '22px',
                                        height: '22px',
                                        background: 'url(./image/favorite.png) center center /  21px 21px no-repeat'
                                    }}
                                    />
                                }
                                selectedIcon={
                                    <div style={{
                                        width: '22px',
                                        height: '22px',
                                        background: 'url(./image/likedActive.png) center center /  21px 21px no-repeat'
                                    }}
                                    />
                                }
                               
                                key="Search"
                                selected={selectedTab === 'liked-tab'}
                                onPress={() => {
                                    setSelectedTab('liked-tab')
                                }}
                                data-seed="logId1"
                            >
                               <Liked />
                            </TabBar.Item>

                            <TabBar.Item
                                icon={
                                    <div style={{
                                        width: '22px',
                                        height: '22px',
                                        background: 'url(./image/profileIcon.png) center center /  21px 21px no-repeat'
                                    }}
                                    />
                                }
                                selectedIcon={
                                    <div style={{
                                        width: '22px',
                                        height: '22px',
                                        background: 'url(./image/profileActive.png) center center /  21px 21px no-repeat'
                                    }}
                                    />
                                }
                              
                                key="Search"
                                selected={selectedTab === 'profile-tab'}
                                onPress={() => {
                                    setSelectedTab('profile-tab')
                                }}
                                data-seed="logId1"
                            >
                              
                               {display ? <Profile  setDisplay={setDisplay}/> : <AccountAndProfile  setDisplay={setDisplay}/>   }
                            </TabBar.Item>

                        </TabBar>
                    </div>

              
        </div>
    );
};

export default Layout;