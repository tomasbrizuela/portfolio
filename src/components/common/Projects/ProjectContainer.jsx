import { useEffect, useState } from "react"
import Project from "./Project"

const ProjectContainer = () => {
    const [isLoading, setLoading] = useState(true);
    const [apps, setApps] = useState([]);

    const getApps = async () => {
        let url = "https://portfolioback-815092256362.us-central1.run.app/api/project";
        fetch(url)
            .then((res) => { return res.json() })
            .then((res) => { return setApps(res.Data) })
            .then(() => setLoading(false))
    }

    useEffect(() => {
        getApps();
    }, [])
    return (
        <>
            <Project apps={apps} loading={isLoading} />
        </>
    )
}

export default ProjectContainer