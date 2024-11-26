/* eslint-disable react/prop-types */
import ExpContainer from '../../common/ExperienceItem/ExpContainer';
import './CvStyle.css';

const Cv = ({ exp }) => {
    console.log(exp)
    return (
        <div className="CvContainer">
            <div className='cvStyle'>
                <h1 style={{ alignSelf: "center" }}>Software Developer</h1>
                <div className='cvList'>
                    {
                        exp.map((item) => <ExpContainer key={item.id} data={item} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default Cv