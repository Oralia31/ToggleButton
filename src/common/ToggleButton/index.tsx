import React, { useState } from 'react';
import { CheckboxRoot, LabelRoot, ToggleSwitch } from './styles';
import { ToggleButtonProps } from './types';

const ToggleButton: React.FC<ToggleButtonProps> = ({ onChange }) => {
  const [isActiveChecked, setIsActiveChecked] = useState(false);

  const handleChange = () => {
    if (onChange) onChange(!isActiveChecked);
    setIsActiveChecked(!isActiveChecked);
  };

  return (
    <LabelRoot>
      <CheckboxRoot value={isActiveChecked} onChange={handleChange} />
      <ToggleSwitch isActive={isActiveChecked} />
    </LabelRoot>
  );
};

export default ToggleButton;
