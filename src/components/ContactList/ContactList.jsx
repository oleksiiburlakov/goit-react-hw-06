import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';
import c from './ContactList.module.css';

export default function ContactList() {
    const filter = useSelector((state) => state.filters.name) || '';
    const contacts = useSelector((state) => state.contacts.items);

    const visibleContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <ul className={c.list}>
            {visibleContacts.map(({ id, name, phone }) => (
                <Contact id={id} key={id} name={name} phone={phone} />
            ))}
        </ul>
    );
}