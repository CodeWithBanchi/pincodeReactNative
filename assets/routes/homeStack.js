import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import Buttons from '../../components/Buttons'
import Waiting from '../../components/Waiting'


const screens ={
  Home:{
    screen:Buttons
  },
  Wait:{
    screen:Waiting
  },

  
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);