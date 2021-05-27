import React, { useEffect, Fragment } from 'react';
import { Text, Box, Label, Input } from 'theme-ui';

import { DateUtils } from 'react-day-picker';
import dateFnsFormat from 'date-fns/format';
import dateFnsParse from 'date-fns/parse';

import DayPickerInput from 'react-day-picker/DayPickerInput';

interface Props {
  register: any;
  label: string;
  name: string;
  defaultValue?: string;
  mr?: number;
  placeholder?: string;
  sub?: string;
  required?: boolean;
  onChangeDate?: any;
  selected?: any;
}

const FieldDate: React.FC<Props> = ({
  name,
  label,
  placeholder,
  register,
  defaultValue,
  mr,
  sub,
  required = true,
  onChangeDate,
  selected,
}) => {
  const FORMAT = 'yyyy-MM-dd';

  const formatDate = (date: any, format: string, locale: any) => {
    return dateFnsFormat(date, format, { locale });
  };

  const parseDate = (str: string, format: string, locale: any) => {
    const parsed = dateFnsParse(str, format, new Date(), { locale });
    if (DateUtils.isDate(parsed)) {
      return parsed;
    }
    return undefined;
  };

  return (
    <Box pb={2} sx={{ position: 'relative', width: '100%' }}>
      {sub && (
        <Text color="#444" sx={{ position: 'absolute', right: 1, top: 40 }}>
          {/* <Calendar width="20" /> */}
        </Text>
      )}
      <Label htmlFor="description" mb={0}>
        {label}
      </Label>
      <DayPickerInput
        formatDate={formatDate}
        parseDate={parseDate}
        format={FORMAT}
        onDayChange={onChangeDate}
        value={selected}
        hideOnDayClick={true}
        component={(_props: any) => (
          <Input name={name} sx={{ bg: 'white' }} ref={register({ required })} {..._props} />
        )}
      />
    </Box>
  );
};

export default FieldDate;
