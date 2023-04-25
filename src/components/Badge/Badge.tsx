import React, { ReactElement, ReactNode } from 'react';
import './Badge.scss';
import { Text } from '../Text';

export interface BadgeProps {
  value: string;
  type?: 'text';
  size?: 'small';
  color?: 'info' | 'success' | 'warning' | 'danger' | 'primary' | 'secondary';
  children?: React.ReactNode;
  overlay?: boolean;
  icon?: React.ReactNode;
  variant?: 'faded' | 'outlined';
  letterCase?: 'upper' | 'lower' | 'capitalize' | 'none';
  rounded?: boolean
  closable?: boolean;
  onClose?: () => void;
}

export const Badge: React.FC<BadgeProps> = ({ value, type = 'text', size = '', color = '', children, overlay, variant, letterCase = 'none',  icon, rounded = false, closable = false, onClose }) => {
  return (
    <div className={`badge ${size} ${type} ${color} ${variant} ${letterCase} ${rounded ? 'rounded' : ''} ${overlay ? 'overlay' : ''}`}>
      {icon && <span className='icon-container'>{icon}</span>}
      <Text variant='description'>{value}</Text>
      {children}
      {closable && (
        <button className="badge-close" onClick={onClose}>
          <span>&times;</span>
        </button>
      )}
    </div>
  );
};

export default Badge;
