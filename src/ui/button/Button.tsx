import React from 'react'
import { LoadingButton, LoadingButtonProps } from '@mui/lab'
import styles from './button.module.scss'

interface ButtonProps extends LoadingButtonProps {
  customVariant?: keyof typeof VARIANT_MAP;
  active?: boolean;
  width?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

const VARIANT_MAP = {
    blue_button: styles.blue_button,
    second_blue_button: styles.second_blue_button
}

const Button: React.FC<ButtonProps> = ({ customVariant = "blue_button", active, disabled, sx, loading, children, width, onClick, icon, ...props }) => {
  const variantClass = VARIANT_MAP[customVariant];
  const activeClass = active ? 'active' : '';

  return (
    <LoadingButton
      className={`${styles.button} ${variantClass} ${activeClass}`}
      style={{ 'width': width } as React.CSSProperties}
      loading={loading}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {icon ? icon : ''} {children}
    </LoadingButton>
  )
}

export default Button
