import propTypes from 'prop-types';
import css from './Contacts.module.css';
export default function Contacts({ contacts, onDeleteContact }){
    return <ul className={css.list}>
        {contacts.length === 0 ? null :(
            <>
            {contacts.map(contact =>{
                return (
            <li key={contact.id} className={css.item}>
                <p>{contact.name}:</p>
                <span>{contact.number}</span>
                <button type="button"
                onClick={() => onDeleteContact(contact.id)}>Delete contact</button>
            </li>
                )
            })}
            </>
        )
        }
    </ul>
}
Contacts.propTypes = {
    onDeleteContact: propTypes.func.isRequired,
    contacts: propTypes.arrayOf(
        propTypes.shape({
            id: propTypes.string.isRequired,
            name: propTypes.string.isRequired,
            number: propTypes.string.isRequired,
        })
    )
}