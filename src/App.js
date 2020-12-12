import React, {useEffect} from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import {Provider,connect} from 'react-redux';
import store from './store/store';
import Login from './container/account/login/login';
import Newpassword from './container/account/newpassword/newpassword';
import Reset from './container/account/reset/reset';
import Signup from './container/account/signup/signup';
import Verify from './container/account/verify/verify'
import Home from './container/EC/home/home';
import Items from './container/EC/items/items';
import Details from './container/EC/details/details';
import Cart from './container/EC/cart/cart';
import SearchItem from "./container/EC/search/searchitem";
import VendorHome from "./container/Vendor/Vendor_home/home";
import Addition from "./container/Vendor/add_item/add_item";
import Detail_vendor from "./container/Vendor/detail_vendor/detail_vedor";

const App=()=>{

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/login' exact component={Login} />
          <Route path='/signup' component={Signup}  />
          <Route path='/reset-password' component={Reset}  />
          <Route path='/activate/:uid/:token/' component={Verify}  />
          <Route path='/password/reset/confirm/:uid/:token' component={Newpassword}  />
          <Route path='/products-:slug/' exact  component={Items} />
          <Route path='/search-item' exact component={SearchItem}/>
          <Route path='/products-:slug/product_details-:slug/' exact component={Details} />
          <Route path='/mycart' component={Cart}/>
          <Route path='/vendor-home/' component={VendorHome} />
          <Route path='/create-item/' component={Addition} />
          <Route path='/detail-item/' component={Detail_vendor} />
        </Switch>
      </BrowserRouter>
    </Provider>

  );
}

export default App;
