import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

import './ListCustomers.css';



function ListCustomers() {
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
                </tr>
            ))}
            </tbody>
        </table>
    </div>
  );
}
export default ListCustomers;