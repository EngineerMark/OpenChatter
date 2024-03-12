import { AppBar, Box, Chip, Toolbar, Typography, useTheme } from "@mui/material";
import { ConvertToReadableSize } from "../Misc/Helpers";

function Header(props) {
    const theme = useTheme();

    return (
        <AppBar position='fixed'>
            <Toolbar variant="dense">
                <Typography variant="h6" color="inherit" component="div">
                    Open Chatter
                </Typography>
                <Box sx={{ ml: 2 }}>
                    <Typography sx={{ fontSize: 12 }}>
                        {"VRAM: " + ConvertToReadableSize(props.systemStats?.total_vram_used ?? 0, "MB") + " / " + ConvertToReadableSize(props.systemStats?.total_vram ?? 0, "MB")}
                    </Typography>
                    <Typography sx={{ fontSize: 12 }}>
                        {"RAM: " + ConvertToReadableSize(props.systemStats?.total_ram_used ?? 0, "B") + " / " + ConvertToReadableSize(props.systemStats?.total_ram ?? 0, "B")}
                    </Typography>
                </Box>
                <Box sx={{ ml: 2 }}>
                    <Typography sx={{ fontSize: 12 }}>
                        {/* API: <Chip size='small' variant='outlined' label={props.systemStats?.isApiActive ? "Active" : "Inactive"} color={props.systemStats?.isApiActive ? "success" : "error"} /> */}
                        API: <span style={{ color: props.systemStats?.isApiActive ? theme.palette.success.main : theme.palette.error.main }}>{props.systemStats?.isApiActive ? "Active" : "Inactive"}</span>
                    </Typography>
                    <Typography sx={{ fontSize: 12 }}>
                        Model: {props.systemStats?.activeApiModel?.model_name ?? 'None'}
                    </Typography>
                </Box>
                <Box sx={{ ml: 2 }}>
                    <Typography sx={{ fontSize: 12 }}>
                        Total Prompt Tokens: {(props.systemStats?.stats?.total_prompt_tokens ?? 0).toLocaleString('en-US')}
                    </Typography>
                    <Typography sx={{ fontSize: 12 }}>
                        Total Completion Tokens: {(props.systemStats?.stats?.total_completion_tokens ?? 0).toLocaleString('en-US')}
                    </Typography>
                    <Typography sx={{ fontSize: 12 }}>
                        Total Tokens: {((props.systemStats?.stats?.total_prompt_tokens ?? 0) + (props.systemStats?.stats?.total_completion_tokens ?? 0)).toLocaleString('en-US')}
                    </Typography>
                </Box>
                <Box sx={{ ml: 2 }}>
                    <Typography sx={{ fontSize: 12 }}>
                        Total User Messages: {(props.systemStats?.stats?.total_user_messages ?? 0).toLocaleString('en-US')}
                    </Typography>
                    <Typography sx={{ fontSize: 12 }}>
                        Total AI Messages: {(props.systemStats?.stats?.total_ai_messages ?? 0).toLocaleString('en-US')}
                    </Typography>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;