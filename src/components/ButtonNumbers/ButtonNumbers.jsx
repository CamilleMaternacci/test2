import styles from './ButtonNumbers.module.scss'

export const ButtonNumbers = ({ text, onClick }) => {
	return (
		<button
			className={styles.btn}
			onClick={onClick} value={text}>
			{text}
		</button>
	)
}
