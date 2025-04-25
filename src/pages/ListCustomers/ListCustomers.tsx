import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";

import './ListCustomers.css';

import {removeCustomer} from "../../redux/customer/customerSlice";
import { toast } from "react-toastify";

function ListCustomers() {    
    const dispatch = useDispatch<AppDispatch>()

    const deleteCustomer = (cnpj: string) => {
        dispatch(removeCustomer(cnpj))
        toast.success('Cliente excluído com sucesso!')
    }

    const customers = useSelector((state: RootState) => state.customer.list)
  return (
    <div id='register-customer-container'>
      <h1>Clientes cadastrados</h1>
        <table className="list-customers-table">
            <thead>
            <tr>
                <th>Nome fantasia</th>
                <th>Razão social</th>
                <th>CNPJ</th>
                <th>Endereço</th>
                <th>Cidade</th>
                <th>Estado</th>
                <th>Excluir</th>
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
                    <td><button className="delete-button" onClick={()=> {deleteCustomer(customer.cnpj)}}>x</button></td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
  );
}
export default ListCustomers;