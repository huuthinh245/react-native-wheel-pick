import { Platform } from 'react-native';
import Picker from './picker';
import DatePicker from './date-picker';

let DatePickerComponent = DatePicker;

const registerCustomDatePickerIOS = (CustomDatePickerIOS) => {
  if (Platform.OS === 'ios') {
    DatePickerComponent = CustomDatePickerIOS;
  }

  return DatePickerComponent;
};


export {
  Picker,
  DatePickerComponent as DatePicker,
  registerCustomDatePickerIOS
}
