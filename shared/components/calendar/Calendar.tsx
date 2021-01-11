import React, { useState } from 'react';
import CalendarPicker from 'react-native-calendar-picker';

const Calendar = () => {
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);

  const onDateChange = (date, type) => {
    //function to handle the date change
    if (type === 'END_DATE') {
      setSelectedEndDate(date);
    } else {
      setSelectedEndDate(null);
      setSelectedStartDate(date);
    }
  };

  return (
    <CalendarPicker
      startFromMonday={true}
      allowRangeSelection={false}
      minDate={new Date(2018, 1, 1)}
      maxDate={new Date(2050, 6, 3)}
      weekdays={['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun']}
      months={[
        'January',
        'Febraury',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ]}
      previousTitle="Previous"
      nextTitle="Next"
      todayBackgroundColor="#e6ffe6"
      selectedDayColor="#66ff33"
      selectedDayTextColor="#000000"
      scaleFactor={375}
      textStyle={{
        color: '#000000',
      }}
      onDateChange={onDateChange}
    />
  );
};

export default Calendar;
