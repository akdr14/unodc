import { PixelRatio } from 'react-native'

import { isAndroid, platform } from 'src/utils/constants'
import theme from './theme.style'

const titleStyle = {
  fontSize: theme.FONT_SIZE_LG,
  color: theme.SECONDARY_COLOR,
  fontWeight: theme.FONT_WEIGHT_BOLD,
}

const textStyle = {
  fontSize: theme.FONT_SIZE_MD,
  color: theme.SECONDARY_COLOR,
}

const androidFontFamily = {
  fontFamily: 'sans-serif-medium',
}

const isAndroidFontFamily = platform === 'android' ? androidFontFamily : null

const titleExtraBoldStyle = {
  ...titleStyle,
  ...isAndroidFontFamily,
  fontWeight: platform === 'android' ? ('bold' as const) : theme.FONT_WEIGHT_EXTRA_BOLD,
}

const circleStyle = (circleDimension: number): { width: number; height: number; borderRadius: number } => ({
  width: circleDimension,
  height: circleDimension,
  borderRadius: circleDimension / 2,
})

const screenStyle = {
  flex: 1,
  backgroundColor: theme.SCREEN_BACKGROUND_COLOR,
}

const tabStyle = {
  backgroundColor: theme.TABS_BACKGROUND_COLOR,
}

const shadowStyle = {
  borderWidth: 1 / PixelRatio.getPixelSizeForLayoutSize(1),
  borderColor: '#ccc',
  backgroundColor: '#fff',
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 1.5,
  elevation: 3,
}

const shadowAndroidLevelStyle = {
  ...shadowStyle,
  borderWidth: 0.8,
  elevation: 0,
}

const shadowCard = isAndroid ? shadowAndroidLevelStyle : shadowStyle

const activeTabStyle = {
  ...circleStyle(8),
  backgroundColor: theme.PRIMARY_COLOR,
  marginTop: 2.5,
}

const separatorStyle = {
  borderBottomWidth: 0.5,
  borderColor: theme.GRAY_500,
  marginVertical: 10,
}

export default {
  titleStyle,
  titleExtraBoldStyle,
  circleStyle,
  screenStyle,
  tabStyle,
  shadowStyle,
  shadowAndroidLevelStyle,
  textStyle,
  activeTabStyle,
  separatorStyle,
  shadowCard,
}
