import React, { ReactNode } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-normal ring-offset-background transition-all duration-200 ease-in-out focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary-500 text-white hover:opacity-90',
        primary: 'bg-primary text-primary-foreground hover:opacity-90',
        destructive: 'bg-red-500 text-white hover:opacity-90',
        destructiveOutline:
          'border border-destructive text-destructive hover:bg-destructive hover:text-white',
        outline:
          'border border-primary text-primary hover:bg-blue-300 hover:bg-opacity-95 hover:text-white',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        grey: 'bg-gray-100 text-black-900 hover:bg-gray-200 hover:text-black-900 border border-gray-100 hover:border-gray-200',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md p-4',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
}

export const MyButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant = 'default', size, ...props }, ref) => {
    return (
      <TouchableOpacity
        onPress={() => {}}
        className={buttonVariants({ variant, size, className })}
      >
        <Text>{children}</Text>
      </TouchableOpacity>
    );
  }
);
