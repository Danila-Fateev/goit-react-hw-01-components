import styles from './Statistics.module.css';
import PropTypes from 'prop-types';

function generateRandomColorHex() {
  return (
    '#' +
    ('00000' + Math.floor(Math.random() * Math.pow(16, 6)).toString(16)).slice(
      -6
    )
  );
}

export default function Statistics({ props }) {
  return (
    <section className={styles.statistics}>
      <ul className={styles.stat_list}>
        {props.map(el => (
          <li
            className={styles.item}
            style={{ background: generateRandomColorHex() }}
            id={el.id}
          >
            <p className={styles.label}>{el.label}</p>
            <p className={styles.percentage}>{el.percentage}%</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
