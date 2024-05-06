import './Submit.css'

const Submit = ({ Submit }) => {
    const Click = () => {
        console.log(`clicou btn`)
    }
    return (
        <>
            <button className='btnS' onClick={Click}>{Submit}</button>
       
         
        </>
    )
}
export default Submit