import { UseFormRegister, FieldError, FieldValues, Path } from 'react-hook-form';

import '../Form.css'

interface InputFieldProps<T extends FieldValues> {
  label: string;
  name: Path<T>;
  type?: string;
  register: UseFormRegister<T>;
  errors?: FieldError;
  validation?: object;
  placeholder?: string;
}

const InputField = <T extends FieldValues>({
  label,
  name,
  type = 'text',
  register,
  errors,
  validation,
  placeholder
}: InputFieldProps<T>) => {
  return (
    <div className='input-field'>
      <label className='label'>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        {...register(name, validation)}
        className="input" 
      />
      {errors && <span>{errors.message}</span>}
    </div>
  );
};

export default InputField;
