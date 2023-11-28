// import styles from './ButtonOperators.module.scss'

export const ButtonOperators = ({ text, className, onClick }) => {
	return <button className={className} value={text} onClick={onClick}>{text}</button>
}