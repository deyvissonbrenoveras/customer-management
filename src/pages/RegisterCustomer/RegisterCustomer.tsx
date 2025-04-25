import { useForm } from "react-hook-form";
import InputField from "../../components/Form/InputField/InputField";
import SubmitButton from "../../components/Form/SubmitButton/SubmitButton";

import './RegisterCustomer.css'
import { Customer } from "../../types/Customer";
import { useDispatch } from 'react-redux'
import { AppDispatch } from "../../redux/store";
import { addCustomer } from "../../redux/customer/customerSlice";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

function RegisterCustomer() {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>()
  const { register, handleSubmit, formState: { errors }, reset } = useForm<Customer>();

  const onSubmit = (data: Customer) => {
    console.log(data);
    dispatch(addCustomer(data))
    reset()
    toast.success(t('messages.customer_registered_successfully'));
  }

  return (
    <div id='register-customer-container'>
      <h1>{t('pages.register')}</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
      <InputField
        label={t('form.company_name')}
        name="companyName"
        register={register}
        validation={{ required: t('form.errors.company_name_required') }}
        errors={errors.companyName}
      />

      <InputField
        label={t('form.social_reason')}
        name="socialReason"
        register={register}
        validation={{ required: t('form.errors.social_reason_required') }}
        errors={errors.socialReason}
      />

      <div className="input-field-group">
          <InputField
            label={t('form.cnpj')}
            name="cnpj"
            register={register}
            validation={{
              required: t('form.errors.cnpj_required'),
              pattern: {
                value: /^\d{14}$/,
                message: t('form.errors.invalid_cnpj')
              }
            }}
            errors={errors.cnpj}
          />

          <InputField
            label={t('form.address')}
            name="address"
            register={register}
            validation={{ required: t('form.errors.address_required') }}
            errors={errors.address}
          />
      </div>

      <div className="input-field-group">     
          <InputField
            label={t('form.city')}
            name="city"
            register={register}
            validation={{ required: t('form.errors.city_required') }}
            errors={errors.city}
          />

          <InputField
            label={t('form.state')}
            name="state"
            register={register}
            validation={{ required: t('form.errors.state_required') }}
            errors={errors.state}
          />
      </div>

      <SubmitButton label={t('form.save')}/>
    </form>
    </div>
  );
}
export default RegisterCustomer;