import React, {useCallback, useContext} from 'react';
import {View, Picker, Text} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Button from 'react-native-button';

import {ThemeContext} from '../../contexts/ThemeProvider';

import styles from '../../themes/styles';

import {THEME_NAMES} from '../../constants';

const Home = () => {
  const {themeName, setThemeName} = useContext(ThemeContext);

  const handleChangeTheme = useCallback(
    selectedTheme => setThemeName(selectedTheme),
    [setThemeName],
  );

  return (
    <View>
      <Button style={styles.button} onPress={Actions.counterStyledClass}>
        Counter as class component
      </Button>
      <Button style={styles.button} onPress={Actions.counterStyledFunc}>
        Counter as functional component
      </Button>
      <Text>Change color scheme</Text>
      <Picker selectedValue={themeName} onValueChange={handleChangeTheme}>
        {Object.values(THEME_NAMES).map(name => (
          <Picker.Item key={name} label={name} value={name} />
        ))}
      </Picker>
    </View>
  );
};

export default Home;
