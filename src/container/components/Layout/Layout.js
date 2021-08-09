import React, { Children, useState } from 'react';
import { TabBar } from 'antd-mobile';
import { Row, Col } from 'antd';
import Home from './../BootomTabPages/Home';
import Search from '../Search/Search';
import Profile from '../Profile/Profile';
import Busket from './../CartAndBusket/Busket';
import Liked from './../Liked/Liked';
import CheckOut from './../CheckOut/CheckOut';
import Cart from './../CartAndBusket/Cart';
import MyAddress from './../CheckOut/MyAddress';
import AccountAndProfile from './../Profile/AccountAndProfile';


const Layout = () => {

    const [selectedTab, setSelectedTab] = useState(null)
    const [fullScreen, setFullScreen] = useState(true)
    const [hidden, setHidden] = useState(false)

    const [display,setDisplay] = useState(true);
    const [displayAddress,setDisplayAddress] = useState(true);
    




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
                               
                               {display ? <Home  setDisplay={setDisplay}  /> :  <Cart setDisplay={setDisplay} />}
                               
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
                                onPress={() => {
                                    setSelectedTab('busket-tab')
                                }}
                                data-seed="logId1"
                            >


                               
                                {display ? <Busket  setDisplay={setDisplay}/> : <CheckOut  setDisplay={setDisplay}/>   }
                              
                                 
                              
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