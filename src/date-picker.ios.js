import React, { PureComponent } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import PropTypes from 'prop-types';

export default class DatePicker extends PureComponent {
  static propTypes = {
    date: PropTypes.instanceOf(Date),
    maximumDate: PropTypes.instanceOf(Date),
    minimumDate: PropTypes.instanceOf(Date),
    mode: PropTypes.oneOf(['date', 'time', 'datetime']),
    onDateChange: PropTypes.func.isRequired,
  };

  static defaultProps = {
    mode: 'date',
    date: new Date(),
  };

  state = {
    date: new Date(),
  };

  render() {
    return (
      <DateTimePicker
        {...this.props}
        onChange={this.onDateChange}
        date={this.state.date}
      />
    );
  }

  componentDidMount() {
    this.setState({ date: this.props.date })
  }

  componentDidUpdate(prevProps) {
    if (this.props.date !== prevProps.date) {
      this.setState({ date: this.props.date })
    }
  }

  onDateChange = (event, date) => {
    this.setState({ date });
    this.props.onDateChange(date);
  }
}
