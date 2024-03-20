import {KeyboardArrowUpRounded} from '@mui/icons-material';
import {Fab} from "@mui/material";
import './styles.scss'

function UpButton({page = false}){
    return (
        <div className={page ? "up-button up-button--pages":"up-button"}>
            <div>
                <Fab color="kaki" aria-label="add" href={"#root"}>
                    <KeyboardArrowUpRounded sx={{color: "#fff"}}/>
                </Fab>
            </div>
        </div>

    )
}

export default UpButton;