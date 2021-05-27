import React from 'react';
import { Box, Label, Input } from 'theme-ui';

import { DateUtils } from 'react-day-picker';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import dateFnsFormat from 'date-fns/format';
import dateFnsParse from 'date-fns/parse';

interface FieldDateProps {
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

const FieldDate: React.FC<FieldDateProps> = ({
  name,
  label,
  register,
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
        component={(p: any) => <Input name={name} ref={register({ required })} {...p} />}
      />
    </Box>
  );
};

export default FieldDate;
