import './Button.css'
import { useState } from 'react'

const Button = ({ Button }) => {
    const [button, setButton] = useState()
    const add = (e) => {
        setButton(e.target.backgroundcolor == 'hsl(25, 97%, 53%)')
        console.log(setButton)
    }
    return (
        <>
            <button className='btn' onClick={add}>{Button}1</button>
            <button className='btn' onClick={add}>{Button}2</button>
            <button className='btn' onClick={add}>{Button}3</button>
            <button className='btn' onClick={add}>{Button}4</button>
            <button className='btn' onClick={add}>{Button}5</button>
         
        </>
    )
}
export default Button