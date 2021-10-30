import { BrowserRouter as Router, Switch ,Route} from 'react-router-dom';
import './App.css';
import GoogleLogin from './Authenticatin/GoogleLogin/GoogleLogin';
import PrivateRoute from './Authenticatin/PrivateRoute/PrivateRoute';
import AuthProvider from './ContextAPI/AuthProvider';
import Blog from './Pages/Bolg/Blog';
import BookingFrom from './Pages/BookingFrom/BookingFrom';
import Footer from './Pages/Footer/Footer';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import MyOrders from './Pages/MyOrders/MyOrders';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
      <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/Home">
            <Home></Home>
          </Route>
          <Route path="/MyOrders">
            <MyOrders></MyOrders>
          </Route>
          <Route path="/Blog">
            <Blog></Blog>
          </Route>
          <Route path="/GoogleLogin">
            <GoogleLogin></GoogleLogin>
          </Route>
          <PrivateRoute path="/BookingFrom/:_id">
            <BookingFrom></BookingFrom>
          </PrivateRoute>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
      
    </div>
  );
}

export default App;
