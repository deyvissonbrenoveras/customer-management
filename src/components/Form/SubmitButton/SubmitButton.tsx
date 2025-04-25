import React from 'react';
import '../Form.css'

interface Props {
  label: string;
}

const SubmitButton: React.FC<Props> = ({ label }) => {
  return (
    <button type="submit" className='submit-button'>{label}</button>
  );
}
export default SubmitButton;