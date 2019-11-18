import { createStackNavigator } from "react-navigation-stack";

// Components
import CoffeeList from "../Components/CoffeeList";
import CoffeeCart from "../Components/CoffeeCart";
import CoffeeDetail from "../Components/CoffeeDetail";
import Login from "../Components/Login";

const StackNav = createStackNavigator(
  {
    LoginScreen: Login,
    ListScreen: CoffeeList,
    DetailScreen: CoffeeDetail,
    CartScreen: CoffeeCart
  },
  {
    initialRouteName: "LoginScreen"
  }
);

export default StackNav;
