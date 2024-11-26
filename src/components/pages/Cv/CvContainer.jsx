import { useEffect, useState } from "react"
import Cv from "./Cv"

const CvContainer = () => {
    const [exp, setExp] = useState([]);

    useEffect(() => {
        const url = "https://portfolioback-815092256362.us-central1.run.app/api/cv";
        fetch(url)
            .then((res) => res.json())
            .then((res) => {
                let newExp = res.Data;
                newExp.sort((a, b) => b.id - a.id);
                setExp(newExp);
            })

    }, [])
    console.log(exp)
    return (
        <>
            <Cv exp={exp} />
        </>
    )
}

export default CvContainer