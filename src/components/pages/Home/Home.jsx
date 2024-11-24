import ProjectContainer from '../../common/Projects/ProjectContainer'
import SearchContainer from '../../common/SearchBar/SearchContainer'
import './HomeStyle.css'
const Home = () => {
    return (
        <div className="home">
            <div className='firstPart'>
                <SearchContainer />
            </div>
            <div className='secondPart'>
                <ProjectContainer />
            </div>
        </div>
    )
}

export default Home