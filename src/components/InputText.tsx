import clsx from 'clsx';
import { View, Text, TextInput, TextInputProps } from 'react-native';

export interface InputProps extends TextInputProps {
  Icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  name: string;
  error?: string;
  hint?: string;
  label?: string;
  valueAsNumber?: boolean;
  inputClassName?: string;
}

export const InputText = ({
  Icon,
  name,
  error,
  hint,
  label,
  valueAsNumber,
  inputClassName,
  ...rest
}: InputProps) => {
  return (
    <View className={clsx('w-full')}>
      {label ? (
        <View className="mb-1 flex text-sm">
          <Text>{label}</Text>
        </View>
      ) : null}
      <View className="relative">
        {Icon ? (
          <Icon className="text-secondary-500 absolute top-4 left-3 h-5 w-5 stroke-2" />
        ) : null}
        <TextInput
          className={clsx(
            'w-full rounded-md border border-gray-200 p-4 text-sm',
            Icon && 'pl-10',
            inputClassName && inputClassName
          )}
          {...rest}
        />
        {error ? <Text className="text-sm text-red-500">{error}</Text> : null}
        {!error && hint ? (
          <Text className="text-sm text-gray-500">{hint}</Text>
        ) : null}
      </View>
    </View>
  );
};
