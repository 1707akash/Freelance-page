

import './Icons.css'
import EmojiObjectsOutlinedIcon from '@mui/icons-material/EmojiObjectsOutlined';
import BusinessCenterRoundedIcon from '@mui/icons-material/BusinessCenterRounded';
import VolumeUpRoundedIcon from '@mui/icons-material/VolumeUpRounded'
import LaptopMacTwoToneIcon from '@mui/icons-material/LaptopMacTwoTone';
import TipsAndUpdatesTwoToneIcon from '@mui/icons-material/TipsAndUpdatesTwoTone';

const Icons = () => {
  return (
    <div className='icons'>
    <div className="iconDiv">
    <EmojiObjectsOutlinedIcon style={{
        height:'4rem',
        width:'4rem',
        padding:'0.5rem',
        backgroundColor:'#00ff00',
        borderRadius:'50%',
        border:'5px solid black'}} />
    </div>

    <div className="iconDiv">
    <BusinessCenterRoundedIcon style={{
        height:'4rem',
        width:'4rem',
        padding:'0.5rem',
        backgroundColor:'#00ff00',
        borderRadius:'50%',
        border:'5px solid black'}} />
    </div>
    <div className='iconDiv'>
    <VolumeUpRoundedIcon style={{
        height:'4rem',
        width:'4rem',
        padding:'0.5rem',
        backgroundColor:'#00ff00',
        borderRadius:'50%',
        border:'5px solid black'}} />
    </div>
    <div className='iconDiv'>
    <LaptopMacTwoToneIcon style={{
        height:'4rem',
        width:'4rem',
        padding:'0.5rem',
        backgroundColor:'#00ff00',
        borderRadius:'50%',
        border:'5px solid black'}} />
    </div>
    <div className='iconDiv'>
    <TipsAndUpdatesTwoToneIcon style={{
        height:'4rem',
        width:'4rem',
        padding:'0.5rem',
        backgroundColor:'#00ff00',
        borderRadius:'50%',
        border:'5px solid black'}} />
    </div>
    </div>
    
  )
}

export default Icons