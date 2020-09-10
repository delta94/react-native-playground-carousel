import { Dimensions } from 'react-native';

const DIMENSIONS = {
  WIDTH: Dimensions.get('window').width,
  HEIGHT: Dimensions.get('window').height,
};

const OVERFLOW_TITLE_HEIGHT = 70;

export { DIMENSIONS, OVERFLOW_TITLE_HEIGHT };
