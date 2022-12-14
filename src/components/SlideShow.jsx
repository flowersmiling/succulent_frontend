import { Box, styled, Typography } from '@mui/material'
import { height } from '@mui/system';
import React from 'react'
import OnScrollAnimationBox from './OnScrollAnimationBox';
import succulentplants from '../assets/images/succulentplants.png'

function SlideShow() {

    const BannerContainer = styled(Box)(() => ({
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        height: '1300px',
        padding: '10px 0px',
        backgroundColor: '	#F0FFFF',

    }));
    const BannerContent = styled(Box)(() => ({
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: 500,
        height: '100%',
        padding: '10px',
        fontFamily: "monospace"


    }));
    const BannerTitle = styled(Typography)(() => ({
        lineHeight: 2.5,
        fontSize: '40px',
        marginBottom: '10px',
        fontFamily: "monospace"


    }));
    const BannerDescription = styled(Typography)(() => ({
        lineHeight: 1.45,
        letterSpacing: 1.25,
        width: '100%',
        fontSize: '20px',
        marginBottom: '5em',
        fontFamily: "monospace"

    }));
    const BannerImg = styled('img')((src) => ({
        src: `url(${src})`,
        width: '1000px',
        marginTop: '100px'



    }));


    return (
        <div>
            <BannerContainer sx={{ height: "600px" }}>
                <BannerContent>
                    <BannerImg src={succulentplants} sx={{ width: "20%" }} />
                    {/* <Typography variant='h6'>News header</Typography> */}
                    <OnScrollAnimationBox>
                        <BannerTitle variant='h4' sx={{ xs: { position: "fixed" } }}>New Collections </BannerTitle>
                    </OnScrollAnimationBox>
                    <BannerDescription variant='subtitle'>Come with a wide range of shapes and colors, succulents and cacti stand out in common houseplants, particularly as low-maintenance types....</BannerDescription>
                </BannerContent>
            </BannerContainer>
        </div>
    )
}

export default SlideShow