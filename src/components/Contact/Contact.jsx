import { useDispatch } from "react-redux";
import {deleteContact} from '../../redux/contactsSlice'

export default function Contact({ id, name, phone }) {
    const dispatch = useDispatch();
    const handleDelete = () => dispatch(deleteContact(id));

    return (
        <li>
            <p>{name}</p>
            <p>{phone}</p>
            <button onClick={handleDelete} type="button">Delete</button>
        </li>
    );
}