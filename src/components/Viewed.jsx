import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router-dom'

const Viewed = ({p}) => {
    return(
        <ul>
        
          <li className="mt-3">
            <div>
              <img src={p.image} className="rounded-circle" />
            </div>
            <div>
              <h6>
                <Link to={"/profile/" + p?._id} >{p.name} {p.surname}</Link>
              </h6>
              <p>{p.bio}</p>
              <Button>Connect</Button>
            </div>
          </li>
       
        </ul>
    )
}
export default withRouter(Viewed) 