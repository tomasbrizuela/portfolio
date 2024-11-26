/* eslint-disable react/prop-types */
import "./ExpStyle.css"
const Exp = ({ data }) => {
    return (
        <div className="expCard">
            <h3>
                {data.title}
            </h3>
            <div className="expCompany">
                <div style={{ fontWeight: "bold" }}>
                    {data.company}
                </div>
                <div>
                    {data.year}
                </div>
            </div>
            <div className="expDescription">
                {data.description}
            </div>
        </div>
    )
}

export default Exp