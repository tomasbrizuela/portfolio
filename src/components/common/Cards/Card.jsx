/* eslint-disable react/prop-types */
import './CardStyle.css'
const Card = ({ info }) => {
    return (
        <div className='card'>
            <div className='imgDiv'>
                <img className="image" src={info.image} />
            </div>
            <div>
                <h2>{info.title}</h2>
            </div>
            <div >
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