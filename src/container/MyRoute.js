import React from 'react';
import { Route } from 'react-router-dom';
import Start from './components/Start/Start';
import Page2 from './components/Page2/Page2';
import Page3 from './components/Page2/Page3';
import Page4 from './components/Page2/Page4';
import GetStart from './components/GetStart/GetStart';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import ForgotPassword from './components/Login/ForgotPassword';
import EmailSent from './components/Login/EmailSent';
import ResetPassword from './components/Login/ResetPassword';
import Address from './components/Address/Address';
import Payment from './components/Address/Payment';
import Home from './components/BootomTabPages/Home';
import Card from './components/CartAndBusket/Card';
import Busket from './components/CartAndBusket/Busket';
import Liked from './components/Liked/Liked';
import Search from './components/Search/Search';
import Search2 from './components/Search/Search2';
import Search3 from './components/Search/Search3';
import Search4 from './components/Search/Search4';
import Search5 from './components/Search/Search5';
import CheckOut from './components/CheckOut/CheckOut';
import Profile from './components/Profile/Profile';
import AccountAndProfile from './components/Profile/AccountAndProfile';
import ChangePassword from './components/Profile/ChangePassword';
import OrderHistory from './components/Profile/OrderHistory';
import TrackOrder from './components/Profile/TrackOrder';
import ContactSupport from './components/Profile/ContactSupport';
import ReferToFriend from './components/Profile/ReferToFriend';
import TermAndCondition from './components/Profile/TermAndCondition';
import Privacy from './components/Profile/Privacy';
import Layout from './components/Layout/Layout';
import OrderConfirmed from './components/CheckOut/OrderConfirmed';
import OrderWrong from './components/CheckOut/OrderWrong';
import MyAddress from './components/CheckOut/MyAddress';
import AddNewAddress from './components/CheckOut/AddNewAddress';
import PaymentMethod from './components/CheckOut/PaymentMethod';
import AddNewCard from './components/CheckOut/AddNewCard';
import Test from './components/CartAndBusket/Test';









const MyRoute = () => {
    return (
        <div>

            <Route exact path='/' component={Start}  />
            <Route  path='/page2' component={Page2}  />
            <Route  path='/page3' component={Page3}  />
            <Route  path='/page4' component={Page4}  />
            <Route  path='/getStart' component={GetStart}  />
            <Route  path='/register' component={Register}  />
            <Route  path='/login' component={Login}  />
            <Route  path='/forgotPassword' component={ForgotPassword}  />
            <Route  path='/emailSent' component={EmailSent}  />
            <Route  path='/resetPassword' component={ResetPassword}  />
            <Route  path='/address' component={Address}  />
            <Route  path='/payment' component={Payment}  />
            <Route  path='/home' component={Home}  />
            <Route  path='/product' component={Card}  />
            <Route  path='/busket' component={Busket}  />
            <Route  path='/liked' component={Liked}  />
            <Route  path='/search' component={Search}  />
            <Route  path='/search2' component={Search2}  />
            <Route  path='/search3' component={Search3}  />
            <Route  path='/search4' component={Search4}  />
            <Route  path='/search5' component={Search5}  />
            <Route  path='/checkOut' component={CheckOut}  />
            <Route  path='/profile' component={Profile}  />
            <Route  path='/accountAndProfile' component={AccountAndProfile}  />
            <Route  path='/changePassword' component={ChangePassword} />
            <Route  path='/orderHistory' component={OrderHistory} />
            <Route  path='/trackOrder' component={TrackOrder} />
            <Route  path='/contactSupport' component={ContactSupport} />
            <Route  path='/referToFriend' component={ReferToFriend} />
            <Route  path='/termAndCondition' component={TermAndCondition} />
            <Route  path='/privacy' component={Privacy} />
            <Route  path='/layout' component={Layout} />
            <Route  path='/orderConfirm' component={OrderConfirmed} />
            <Route  path='/orderWrong' component={OrderWrong} />
            <Route  path='/myAddress' component={MyAddress} />
            <Route  path='/addNewAddress' component={AddNewAddress} />
            <Route  path='/paymentMethod' component={PaymentMethod} />
            <Route  path='/addNewCard' component={AddNewCard} />

            <Route path="/test" component={Test} />
            
           
            
           
            

            
        </div>
    );
};

export default MyRoute;