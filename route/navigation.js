import {createAppContainer} from 'react-navigation';

import {createStackNavigator} from 'react-navigation-stack';

import Agg from '../screen/register';
import Login from '../screen/Login';
import Register from '../screen/profile';

const Route = createStackNavigator({
    Home: {
        screen: Agg,
    },
    login: {
        screen: Login,
    },
    Register: {
        screen: Register,
    }
});

export default createAppContainer(Route);