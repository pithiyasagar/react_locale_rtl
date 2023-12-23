import {ViewProps} from 'react-native';

export interface HomeProps extends ViewProps {
  isArabic: boolean;

  setIsArabic(value: boolean): void;
}
