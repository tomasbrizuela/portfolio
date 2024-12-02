/* eslint-disable react/prop-types */
import './CardStyle.css'
const Card = ({ info }) => {
    return (
        <div className='card'>
            <div className='imgDiv'>
                {
                    info.live && <i className='doted'></i>
                }
                <img className="image" src={info.image} />
            </div>
            <div className='h2Div'>
                <h2>{info.title}</h2>
            </div>
            <div className='h2Div'>
                <p>{info.description}</p>
            </div>
            <div className='tags'>
                {
                    info.Type.map((item) => {
                        return <p key={item}>{item}</p>
                    })
                }
            </div>
        </div>
    )
}

export default Card