import styles from './App.module.scss'
import { ButtonNumbers } from './components/ButtonNumbers/ButtonNumbers'
import { ButtonOperators } from './components/ButtonOperators/ButtonOperators'
import style from '../src/components/ButtonOperators/ButtonOperators.module.scss'
import { useState } from 'react'

function App() {
	const [value, setValue] = useState('')

	const rowFirst = [1, 2, 3]
	const rowSecond = [4, 5, 6]
	const rowThird = [7, 8, 9]
	const rowFourth = [0, '.']
	return (
		<>
			<div className={styles.calculatorArea}>
				<div className={styles.equationArea}>
					<input type='text' value={value} onChange={() => value} className={styles.input} />
				</div>
				<div className={styles.row}>
					{rowFirst.flat().map((btn, i) => {
						return <ButtonNumbers key={i} text={btn} onClick={e => setValue(value + e.target.value)} />
					})}
					<ButtonOperators text='+' className={style.btn} onClick={e => setValue(value + e.target.value)} />
				</div>
				<div className={styles.row}>
					{rowSecond.flat().map((btn, i) => {
						return <ButtonNumbers key={i} text={btn} onClick={e => setValue(value + e.target.value)} />
					})}
					<ButtonOperators text='-' className={style.btn} onClick={e => setValue(value + e.target.value)} />
				</div>
				<div className={styles.row}>
					{rowThird.flat().map((btn, i) => {
						return <ButtonNumbers key={i} text={btn} onClick={e => setValue(value + e.target.value)} />
					})}
					<ButtonOperators text='x' className={style.btn} onClick={e => setValue(value + e.target.value)} />
				</div>
				<div className={styles.row}>
					{rowFourth.flat().map((btn, i) => {
						return <ButtonNumbers key={i} text={btn} onClick={e => setValue(value + e.target.value)} />
					})}
					<ButtonOperators text='C' className={style.btnC} onClick={() => setValue(value.slice(0, -1))} />
					<ButtonOperators text='/' className={style.btn} onClick={e => setValue(value + e.target.value)} />
				</div>
				<div className={styles.rowSecond}>
					<ButtonOperators text='AC' className={style.btnC} onClick={() => setValue('')} />
					<ButtonOperators text='=' className={style.btnEquals} onClick={e => setValue(value + e.target.value)} />
				</div>
			</div>
		</>
	)
}

export default App
