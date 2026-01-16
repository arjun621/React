import Card from './components/Card';

const App = () => {

  const jobs = [
  {
    company: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    postTime: "5 days ago",
    jobPost: "Senior UI/UX Designer",
    jobType: "Full Time",
    level: "Senior Level",
    pay: "$120/hr",
    location: "Mumbai, India"
  },
  {
    company: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    postTime: "3 days ago",
    jobPost: "Frontend React Developer",
    jobType: "Full Time",
    level: "Mid Level",
    pay: "$100/hr",
    location: "Bengaluru, India"
  },
  {
    company: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    postTime: "1 week ago",
    jobPost: "Senior Product Designer",
    jobType: "Full Time",
    level: "Senior Level",
    pay: "$130/hr",
    location: "Hyderabad, India"
  },
  {
    company: "Meta",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAel73XxRrOwTx8yGLTOvVpoqkLUELbaRSLg&s",
    postTime: "2 days ago",
    jobPost: "UI Engineer",
    jobType: "Contract",
    level: "Senior Level",
    pay: "$140/hr",
    location: "Remote"
  },
  {
    company: "Apple",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    postTime: "4 days ago",
    jobPost: "UX Researcher",
    jobType: "Full Time",
    level: "Mid Level",
    pay: "$125/hr",
    location: "Bengaluru, India"
  },
  {
    company: "Netflix",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    postTime: "6 days ago",
    jobPost: "Senior Visual Designer",
    jobType: "Full Time",
    level: "Senior Level",
    pay: "$150/hr",
    location: "Remote"
  },
  {
    company: "Tesla",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
    postTime: "1 day ago",
    jobPost: "UI Software Engineer",
    jobType: "Full Time",
    level: "Mid Level",
    pay: "$110/hr",
    location: "Pune, India"
  },
  {
    company: "Adobe",
    logo: "https://static.cdnlogo.com/logos/a/90/adobe.png",
    postTime: "3 days ago",
    jobPost: "Product Designer",
    jobType: "Part Time",
    level: "Junior Level",
    pay: "$80/hr",
    location: "Noida, India"
  },
  {
    company: "Spotify",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg",
    postTime: "5 days ago",
    jobPost: "UX Designer",
    jobType: "Full Time",
    level: "Mid Level",
    pay: "$105/hr",
    location: "Remote"
  },
  {
    company: "LinkedIn",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
    postTime: "2 days ago",
    jobPost: "Senior Interaction Designer",
    jobType: "Full Time",
    level: "Senior Level",
    pay: "$135/hr",
    location: "Bengaluru, India"
  }
];


  return (
    <div className='parent'>
      {jobs.map(function(elem,idx) {
        return <div key={idx}>
            <Card company={elem.company} logo={elem.logo} postTime={elem.postTime} jobPost={elem.jobPost} 
            jobType={elem.jobType} level={elem.level} pay={elem.pay} location={elem.location}/>
          </div>
      })}
    </div>
  )
}

export default App


