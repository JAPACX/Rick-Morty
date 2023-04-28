import Card from '../Card/Card.jsx';
import styles from './Cards.module.css'

export default function Cards(props) {
  const { characters } = props;




  return (
    <div className={styles.cards}>
      {characters.map(({ id, name, species, gender, image }) => (
        <Card
          key={id}
          id = {id}
          name={name}
          species={species}
          gender={gender}
          image={image}
          onClose={()=>{props.onClose(id)}}
        />
      ))}
    </div>
  );
}
