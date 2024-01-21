import { createDrawerNavigator } from "@react-navigation/drawer";
import { PedometerScreen } from './../components/screens/Pedometer';
import { Map } from './../components/screens/Map';

export function DrawerNav() {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator screenOptions={drawerStyles}>
      <Drawer.Screen name="Krokomierz" component={PedometerScreen} />
      <Drawer.Screen name="Mapa" component={Map} />
    </Drawer.Navigator>
  );
}

const drawerStyles = {
  headerStyle: {
    backgroundColor: '#3F3F3F',
  },
  headerTintColor: 'white',
  drawerStyle: {
    backgroundColor: '#6C6C6C',
    paddingTop: 20
  },
  drawerItemStyle: {
    backgroundColor: '#535353',
    borderRadius: 10,
    marginBottom: 10
  },
  drawerLabelStyle: {
    color: 'white',
    fontSize: 22,
  }
};