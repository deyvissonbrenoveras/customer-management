import { useForm } from "react-hook-form";
import InputField from "../../components/Form/InputField/InputField";
import SubmitButton from "../../components/Form/SubmitButton/SubmitButton";

import './RegisterCustomer.css'
import { Customer } from "../../types/Customer";
import { useDispatch } from 'react-redux'
import { AppDispatch } from "../../redux/store";
import { addCustomer } from "../../redux/customer/customerSlice";

function RegisterCustomer() {

  const dispatch = useDispatch<AppDispatch>()
  const { register, handleSubmit, formState: { errors } } = useForm<Customer>();
  
  const onSubmit = (data: Customer) => {
    console.log(data);
    dispatch(addCustomer(data))
  }


  return (
    <div id='register-customer-container'>
      <h1>Registrar</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
      <InputField
        label="Nome fantasia"
        name="companyName"
        register={register}
        validation={{ required: 'O nome fantasia é obrigatório' }}
        errors={errors.companyName}
      />

      <InputField
        label="Razão social"
        name="socialReason"
        register={register}
        validation={{ required: 'A Razão social é obrigatória' }}
        errors={errors.socialReason}
      />

      <div className="input-field-group">
          <InputField
            label="CNPJ"
            name="cnpj"
            register={register}
            validation={{
              required: 'O CNPJ é obrigatório',
              pattern: {
                value: /^\d{14}$/,
                message: 'CNPJ Inválido'
              }
            }}
            errors={errors.cnpj}
          />

          <InputField
            label="Endereço"
            name="address"
            register={register}
            validation={{ required: 'Endereço é obrigatório' }}
            errors={errors.address}
          />
      </div>

      <div className="input-field-group">     
          <InputField
            label="Cidade"
            name="city"
            register={register}
            validation={{ required: 'A cidade é obrigatória' }}
            errors={errors.city}
          />

          <InputField
            label="Estado"
            name="state"
            register={register}
            validation={{ required: 'O Estado é obrigatório' }}
            errors={errors.state}
          />
      </div>

      <SubmitButton label='Salvar'/>
    </form>
    </div>
  );
}
export default RegisterCustomer;