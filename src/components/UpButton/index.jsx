import {KeyboardArrowUpRounded} from '@mui/icons-material';
import {Fab} from "@mui/material";
import './styles.scss'

function UpButton(){
    return (
        <div className={"up-button"}>
            <div>
                <Fab color="kaki" aria-label="add" href={"#Home"}>
                    <KeyboardArrowUpRounded sx={{color: "#fff"}}/>
                </Fab>
            </div>
        </div>

    )
}

export default UpButton;