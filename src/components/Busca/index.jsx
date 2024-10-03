import Button from '../Button';
import styles from './Busca.module.css';

const Busca = () => {

    
    return (
    <form className={styles.form} action='/'>
        <input
            name='q'
            className={styles.input}
            placehoder="Digite o que voce procura"
        />
        <Button>
            Buscar
        </Button>
    </form>
    )
}

export default Busca;