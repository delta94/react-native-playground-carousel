import { StyleSheet } from 'react-native';
import { ITEM_WIDTH, ITEM_HEIGHT } from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
  posterWrapper: {
    position: 'absolute',
    left: -ITEM_WIDTH / 2,
  },
  poster: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
  },
});

export default styles;
