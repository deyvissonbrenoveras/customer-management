import { Customer } from "../../types/Customer";

import './ListCustomers.css';

const customers: Customer[] = [
    {
        companyName: "Empresa A",
        cnpj: "12345678000195",
        socialReason: "Razão Social A",
        address: "Rua A, 123",
        city: "São Paulo",
        state: "SP"
    },
    {
        companyName: "Empresa B",
        cnpj: "98765432000196",
        socialReason: "Razão Social B",
        address: "Avenida B, 456",
        city: "Rio de Janeiro",
        state: "RJ"
    },
    {
        companyName: "Empresa C",
        cnpj: "11223344000177",
        socialReason: "Razão Social C",
        address: "Rua C, 789",
        city: "Belo Horizonte",
        state: "MG"
    },
    {
        companyName: "Empresa D",
        cnpj: "22334455000188",
        socialReason: "Razão Social D",
        address: "Avenida D, 101",
        city: "Curitiba",
        state: "PR"
    },
    {
        companyName: "Empresa E",
        cnpj: "33445566000199",
        socialReason: "Razão Social E",
        address: "Rua E, 202",
        city: "Porto Alegre",
        state: "RS"
    },
    {
        companyName: "Empresa F",
        cnpj: "44556677000100",
        socialReason: "Razão Social F",
        address: "Avenida F, 303",
        city: "Salvador",
        state: "BA"
    },
    {
        companyName: "Empresa G",
        cnpj: "55667788000111",
        socialReason: "Razão Social G",
        address: "Rua G, 404",
        city: "Fortaleza",
        state: "CE"
    },
    {
        companyName: "Empresa H",
        cnpj: "66778899000122",
        socialReason: "Razão Social H",
        address: "Avenida H, 505",
        city: "Recife",
        state: "PE"
    },
    {
        companyName: "Empresa I",
        cnpj: "77889900000133",
        socialReason: "Razão Social I",
        address: "Rua I, 606",
        city: "Manaus",
        state: "AM"
    },
    {
        companyName: "Empresa J",
        cnpj: "88990011000144",
        socialReason: "Razão Social J",
        address: "Avenida J, 707",
        city: "Florianópolis",
        state: "SC"
    }
];

function ListCustomers() {
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