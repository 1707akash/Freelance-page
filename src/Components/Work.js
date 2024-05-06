
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import './Work.css'

const Work = () => {
  return (
    <div className='work'>

    <div className="workLeft">
    <WorkOutlineOutlinedIcon style={{
        height:'4rem',
        width:'4rem',
        padding:'0.5rem',
        backgroundColor:'#00ff00',
        borderRadius:'50%',
        border:'5px solid black'}} />
    <h4>WORK</h4>
    </div>

    <div className="workRight">
    <div className="workpresent">
    <span className='bold topspan'>Present</span>
    <div className="innerRight">
        <p className='bold firstLine' >Jessica Greene Marketing • Freelance Writer</p>
        <p>Create blog posts, landing pages, e-books and case-studies for clients</p>
    </div>
    </div>

    <div className="workyear">
    <span className='bold topspan'>2016</span>
    <div className="innerRight">
        <p className='bold firstLine' >Jessica Greene Marketing • Freelance Writer</p>
        <p>Create blog posts, landing pages, e-books and case-studies for clients</p>
    </div>
    </div>

    <div className="workDuration">
    <span className='bold topspan'>2013-2015</span>
    <div className="innerRight">
        <p className='bold firstLine' >Jessica Greene Marketing • Freelance Writer</p>
        <p>Create blog posts, landing pages, e-books and case-studies for clients</p>
    </div>
    </div>

    </div>


    </div>
  )
}

export default Work