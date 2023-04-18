import propTypes from 'prop-types';
import css from './Filter.module.css'
export default function Filter({value, onChange}){
    return <>
    <label className={css.label}>Find contacts by name</label>
    <input className={css.inputFilter} type="text" value={value} onChange={onChange}></input>
    </>
};
Filter.propTypes = {
    value: propTypes.string.isRequired,
    onChange: propTypes.func.isRequired,
}