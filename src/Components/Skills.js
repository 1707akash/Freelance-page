

import './Skills.css'
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';

const Skills = () => {
  return (
    <div className='skills'>
    <div className="skillsLeft">
    <AssignmentOutlinedIcon style={{
        height:'4rem',
        width:'4rem',
        padding:'0.5rem',
        backgroundColor:'#00ff00',
        borderRadius:'50%',
        border:'5px solid black'}} />
        <h4>SKILLS &<br />
        SAMPLES</h4>
    </div>

    <div className="skillsRight">
    <div className="one">
    <div className='skillTags'>
        <span className='bold criteria'>Writing</span>
        <span style={{color:'#0f0', fontSize:'3rem', fontWeight:'bolder', height:'2rem'}} >•••••</span>
    </div>
    <div className='skillTags'>
        <span className='bold criteria'>Editing</span>
        <span style={{color:'#0f0', fontSize:'3rem', fontWeight:'bolder', height:'2rem'}} >••••</span>
    </div>
    <div className='skillTags'>
        <span className='bold criteria'>Social Media</span>
        <span style={{color:'#0f0', fontSize:'3rem', fontWeight:'bolder', height:'2rem', alignSelf:'flex-start'}} >•••</span>
    </div>
    <div className='skillTags'>
        <span className='bold criteria'>Researching</span>
        <span style={{color:'#0f0', fontSize:'3rem', fontWeight:'bolder', height:'2rem'}} >••••</span>
    </div>
    <div className='skillTags'>
        <span className='bold criteria'>SEO</span>
        <span style={{color:'#0f0', fontSize:'3rem', fontWeight:'bolder', height:'2rem'}} >•••••</span>
    </div>
    
    </div>
    <div className="two">
    <div className="topics">
        <span className="topic">Zapier</span>
        <span className="blog">Organise Your life with the Agile Method</span>
    </div>
    <div className="topics">
        <span className="topic">Spoke</span>
        <span className="blog">Is 40 hurs a week too musch? Here's what history and science say.</span>
    </div>
    <div className="topics">
        <span className="topic">Ndash</span>
        <span className="blog">Why Generalist Writers lead to Lost profits in B2B tech</span>
    </div>
    </div>
    </div>

    </div>
  )
}

export default Skills