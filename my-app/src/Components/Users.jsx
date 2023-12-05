import React from 'react'
import {Grid, useTheme} from "@mui/material";

const Users = ({count}) => {

    const theme = useTheme()

    return (
        <Grid className={'users'} display={'flex'} alignItems={'center'} justifyContent={'flex-start'}
              ml={'15px'}>
            <Grid style={{zIndex: 4}} className="NumberUsers" bgcolor={'white'} p={'4px'} position={'relative'}
                  display={'flex'} alignItems={'center'} justifyContent={'center'} width={'35px'}
                  height={'35px'} borderRadius={'50%'} ml={'-15px'}>
                <Grid className="Number" width={'100%'} height={'100%'} display={'flex'} alignItems={'center'}
                      justifyContent={'center'} fontSize={'10px'} fontWeight={700} bgcolor={'#E0E5F2'}
                      color={theme.palette.dark} borderRadius={'50%'}>+{count - 3}</Grid>
            </Grid>
            <Grid style={{zIndex: 3}} className="user" position={'relative'} bgcolor={'white'} p={'4px'}
                  borderRadius={'50%'} display={'flex'} alignItems={'center'} justifyContent={'center'}
                  width={'35px'} height={'35px'} ml={'-15px'}>
                <img style={{borderRadius: '50%', width: '100%'}} src="assets/images/User.png" alt=""/>
            </Grid>
            <Grid style={{zIndex: 2}} className="user" position={'relative'} bgcolor={'white'} p={'4px'}
                  borderRadius={'50%'} display={'flex'} alignItems={'center'} justifyContent={'center'}
                  width={'35px'} height={'35px'} ml={'-15px'}>
                <img style={{borderRadius: '50%', width: '100%'}} src="assets/images/UserThree.png" alt=""/>
            </Grid>
            <Grid style={{zIndex: 1}} className="user" position={'relative'} bgcolor={'white'} p={'4px'}
                  borderRadius={'50%'} display={'flex'} alignItems={'center'} justifyContent={'center'}
                  width={'35px'} height={'35px'} ml={'-15px'}>
                <img style={{borderRadius: '50%', width: '100%'}} src="assets/images/UserTwo.png" alt=""/>
            </Grid>
        </Grid>
    )
}
export default Users
