import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './components/HomeScreen';
import PlayersScreen from './components/players';
import HallOfFame from './components/hallOfFame';
import Uniforms from './components/uniforms';
import ArenasLocations from './components/arenasLocations';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">

        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          
          options={{
            title: 'Home Page',

            headerStyle: { backgroundColor: '#B4975A' }, 
            headerTintColor: '#000000',
            headerTitleStyle: { fontWeight: 'bold' }
          }}
        />

        <Stack.Screen 
          name="Players" 
          component={PlayersScreen} 
          options={{ 
            title: 'Player Roster',

            headerStyle: { backgroundColor: '#ce1141' }, 
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' }
          }} 
        />

        <Stack.Screen 
          name="hallOfFame" 
          component={HallOfFame} 
          options={{ 
            title: 'Hall Of Fame',

            headerStyle: { backgroundColor: '#ce1141' }, 
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' }
          }} 
        />

        <Stack.Screen 
          name="uniforms" 
          component={Uniforms} 
          options={{ 
            title: 'Uniforms',

            headerStyle: { backgroundColor: '#ce1141' }, 
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' }
          }} 
        />

        <Stack.Screen 
          name="arenasLocations"
          component={ArenasLocations} 
          options={{ 
            title: 'Arenas and Locations',
            
            headerStyle: { backgroundColor: '#ce1141' }, 
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' }
          }} 
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
