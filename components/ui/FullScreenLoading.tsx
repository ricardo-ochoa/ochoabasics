import { Box, CircularProgress, Typography } from '@mui/material'

export const FullScreenLoading = () => {
  return (
    <Box display='flex' flexDirection='row' justifyContent='center' alignItems='center' mb={ 4 }>
        <CircularProgress thickness={ 2 } color='info' sx={{ marginRight: 2 }} />
        <Typography variant='h6' component='h6' textAlign='center'> Loading... </Typography>
    </Box>
  )
}
