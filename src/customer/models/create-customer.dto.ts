export default interface CreateCustomerDto {
    username: string;
    password: string;
    email: string;
    first_name: string
    last_name: string;
    phone_number: string;
    address: string;
    city: string;
    state: string;
    zip: number;
}