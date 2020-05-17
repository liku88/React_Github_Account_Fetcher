import React , {useState , useEffect} from 'react'
import Axios from 'axios'
import {ListGroup , ListGroupItem} from 'reactstrap'

const Repos = ({repos_url}) => {
const [repos, setRepos] = useState([])

const RepoFetcher = async () => {
    const {data} = await Axios.get(repos_url)
    setRepos(data)
}
useEffect(()=> {
    RepoFetcher()
}, [repos_url])
return(
    <ListGroup>
    {repos.map(repo => (
        <ListGroupItem key={repo.id}>
        <div className="primary">{repo.name}</div>
        <div className="primary">{repo.owner?.login}</div>
        <div className="primary">{repo.language}</div>
        <div className="primary">{repo.description}</div>
        </ListGroupItem>
    ))}
    </ListGroup>
)

}
export default Repos