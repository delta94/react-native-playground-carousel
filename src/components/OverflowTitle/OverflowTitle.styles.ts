import { StyleSheet } from 'react-native';
import { OVERFLOW_TITLE_HEIGHT } from '../../constants';

const styles = StyleSheet.create({
  container: {
    height: OVERFLOW_TITLE_HEIGHT,
    overflow: 'hidden',
    paddingHorizontal: 10,
  },
  title: {
    fontWeight: '900',
    fontSize: 30,
    textTransform: 'uppercase',
  },
  itemContainer: {
    marginBottom: 10,
  },
  locationText: {
    marginLeft: 10,
  },
  detailWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationWrapper: {
    flex: 1,
    flexDirection: 'row',
  },
  dateWrapper: {
    flex: 1,
  },
  date: {
    alignSelf: 'flex-end',
  },
});

export default styles;
