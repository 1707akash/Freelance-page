import "./Maintop.css";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

const Maintop = () => {
  return (
    <div className="maintop">
      <div className="leftIcon">
      <PersonOutlineOutlinedIcon style={{
        height:'4rem',
        width:'4rem',
        padding:'0.5rem',
        backgroundColor:'#00ff00',
        borderRadius:'50%'
      }} />
      <h4>PROFILE</h4>
      </div>

      <div className="rightDiv">
        <div className="nameDiv">
          <h1>
            JESSICA
            <br />
            GREENE
          </h1>
          <span style={{letterSpacing:'3px', fontWeight:'600'}}>FREELANCE WRITER</span>
        </div>
        <div className="mailDiv">
        <p  >I specialize in writing long-form blog contents, case-studies, ebooks, and white papers for B2Bs, tech startups and marketing agencies</p>
        <span><span className="bold" >Email:</span><span>myemail@gmail.com</span></span>
        <br />
        <span><span className="bold">Website:</span><span>mywebsite@gmail.com</span></span>
        </div>
      </div>
    </div>
  );
};

export default Maintop;
