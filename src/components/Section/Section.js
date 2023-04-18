import propTypes from 'prop-types';
import css from './Section.module.css';
export default function Section({title, children}){
    return <section className={css.section}>
        <h2>{title}</h2>
        {children}
    </section>
}
Section.propTypes = {
    title: propTypes.string.isRequired,
    childre: propTypes.node,
}