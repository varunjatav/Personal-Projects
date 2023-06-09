import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Login from './components/Login';
import Registration from './components/Registration';

function App() {
  const products = useSelector(state => state.products);
  const users = useSelector(state => state.users);
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  
  return (
    <div className="App">
    {
      products.map(product => <div key={product.id}>  {product.name} - {product.price}</div>)
    }
    {
      users.map(user => <div key={user.id}> {user.name} - {user.username} </div>)
    }
    <Registration/>
    {
      user 
      ? <input type="button" value="Log Out" onClick={()=>{
        dispatch(
          {
            type: "LOGOUT",
          }
        )
      }} /> 
      : <Login/>
    }
   
    </div>
  );
}

export default App;
