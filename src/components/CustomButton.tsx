import React, { ReactNode } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

type CustomButtonProps = {
  title: string;
};

export const CustomButton = ({ title }: CustomButtonProps) => {
  // TODO: Check if class-variance-authority works here
  return (
    <TouchableOpacity
      onPress={() => {}}
      className="bg-secondary-300 p-4 flex rounded-xl"
    >
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};
