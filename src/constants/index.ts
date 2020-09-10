import { Dimensions } from 'react-native';

const DIMENSIONS = {
  WIDTH: Dimensions.get('window').width,
  HEIGHT: Dimensions.get('window').height,
};

const OVERFLOW_TITLE_HEIGHT = 70;

const ITEM_WIDTH = DIMENSIONS.WIDTH * 0.7;

const ITEM_HEIGHT = ITEM_WIDTH * 1.7;

export { DIMENSIONS, OVERFLOW_TITLE_HEIGHT, ITEM_WIDTH, ITEM_HEIGHT };
