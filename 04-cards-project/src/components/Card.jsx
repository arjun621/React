import {Bookmark} from 'lucide-react'

const Card = (props) => {

  return (
    <div>

      <div className="card">
        <div className="top">
          <img src={props.logo} alt="" />
          <button>Save <Bookmark size={17}/></button>
        </div>
        <div className="center">
          <h3>{props.company} <span>{props.postTime}</span></h3>
          <h2>{props.jobPost}</h2>
          <div>
            <h4>{props.jobType}</h4>
            <h4>{props.level}</h4>
          </div>
        </div>
        <div className="bottom">
          <div>
            <h3>{props.pay}</h3>
            <p>{props.location}</p>
          </div>
          <button>Apply Now</button>
        </div>
      </div>

    </div>
  )
}

export default Card
