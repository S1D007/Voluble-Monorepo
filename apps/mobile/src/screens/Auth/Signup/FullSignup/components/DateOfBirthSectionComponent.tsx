import {View, Text, Dimensions} from 'react-native';
import React from 'react';
import TextContentsComponent from '../../../components/TextContentsComponent';
import AuthInputComponent from '../../../components/AuthInputComponent';
import DatePicker from 'react-native-date-picker';
import useGlobalStore from '../../../../../suppliers/zustand/useGlobalStore';
import useAuthStore from '../../../../../suppliers/zustand/useAuthStore';

const DateOfBirthSectionComponent = () => {
  const {colorSchema, colors} = useGlobalStore();
  const {fullSignupDetail, setFullSignupDetail} = useAuthStore();
  return (
    <React.Fragment>
      <TextContentsComponent
        title="Bhai ka Bday 🫃🏻"
        subtitle="Birthday kb hai bhoi?"
      />
      <DatePicker
        theme={colorSchema === 'dark' ? 'dark' : 'light'}
        mode="date"
        dividerColor={colors.text2}
        style={{
          width: Dimensions.get('window').width - 40,
        }}
        date={fullSignupDetail.dateOfBirth}
        onDateChange={date => {
          setFullSignupDetail({dateOfBirth: date});
        }}
        onConfirm={date => {
          setFullSignupDetail({dateOfBirth: date});
        }}
      />
    </React.Fragment>
  );
};

export default DateOfBirthSectionComponent;
