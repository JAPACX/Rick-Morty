import Card from '../Card/Card.jsx';
import styles from './Cards.module.css'




export default function Cards(props) {
  const { characters } = props;
  return (
    <div className={styles.cards}>
      {characters.map(({ id, name, species, gender, image }) => (
        <Card
          name={name}
          species={species}
          gender={gender}
          image={image}
          onClose={() => window.alert('Emulamos que se cierra la card:' + id)}
        />
      ))}
    </div>
  );
}
