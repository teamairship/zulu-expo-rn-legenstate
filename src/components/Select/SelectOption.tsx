import { ReactNode } from 'react';
import { TouchableOpacity } from 'react-native';

export const SelectOption = ({
  children,
  onSelect,
}: {
  children: ReactNode;
  onSelect: () => void;
}) => {
  return (
    <TouchableOpacity
      onPress={onSelect}
      className="px-2 py-4 hover:bg-slate-100"
    >
      {children}
    </TouchableOpacity>
  );
};
