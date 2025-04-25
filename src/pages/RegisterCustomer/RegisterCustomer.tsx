import { useForm } from "react-hook-form";
import InputField from "../../components/Form/InputField/InputField";
import SubmitButton from "../../components/Form/SubmitButton/SubmitButton";

interface CustomerFormData {
  companyName: string;
  cnpj: string;
  socialReason: string;
  address: string;
  city: string;
  state: string;
}

function RegisterCustomer() {

  const { register, handleSubmit, formState: { errors } } = useForm<CustomerFormData>();
  const onSubmit = (data: CustomerFormData) => {
    console.log(data);
  }


  return (
    <div>
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
        label="CNPJ"
        name="cnpj"
        register={register}
        validation={{
          required: 'O CNPJ é obrigatório',
          pattern: {
            value: /^\d{14}$/,
            message: 'Invalid CNPJ'
          }
        }}
        errors={errors.cnpj}
      />

      <InputField
        label="Razão social"
        name="socialReason"
        register={register}
        validation={{ required: 'A Razão social é obrigatória' }}
        errors={errors.socialReason}
      />

      <InputField
        label="Endereço"
        name="address"
        register={register}
        validation={{ required: 'Endereço é obrigatório' }}
        errors={errors.address}
      />

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

      <SubmitButton label='Salvar'/>
    </form>
    </div>
  );
}
export default RegisterCustomer;