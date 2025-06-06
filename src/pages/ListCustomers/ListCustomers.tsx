import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";

import './ListCustomers.css';

import { removeCustomer } from "../../redux/customer/customerSlice";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

function ListCustomers() {    
    const { t } = useTranslation();
    const dispatch = useDispatch<AppDispatch>();

    const deleteCustomer = (cnpj: string) => {
        dispatch(removeCustomer(cnpj));
        toast.success(t('messages.customer_deleted_successfully'));
    };

    const customers = useSelector((state: RootState) => state.customer.list);
    return (
        <div id='register-customer-container'>
            <h1>{t('pages.registered_customers')}</h1>
            <table className="list-customers-table">
                <thead>
                    <tr>
                        <th>{t('form.company_name')}</th>
                        <th>{t('form.social_reason')}</th>
                        <th>{t('form.cnpj')}</th>
                        <th>{t('form.address')}</th>
                        <th>{t('form.city')}</th>
                        <th>{t('form.state')}</th>
                        <th>{t('actions.delete')}</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map(customer => (
                        <tr key={customer.cnpj}>
                            <td>{customer.companyName}</td>
                            <td>{customer.socialReason}</td>
                            <td>{customer.cnpj}</td>
                            <td>{customer.address}</td>
                            <td>{customer.city}</td>
                            <td>{customer.state}</td>
                            <td>
                                <button className="delete-button" onClick={() => deleteCustomer(customer.cnpj)}>
                                    {t('actions.delete')}
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ListCustomers;