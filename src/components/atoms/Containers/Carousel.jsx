import React, { Children, useState } from 'react'
import styled from 'styled-components';

const StyledCarouselHandler = styled.div`
`;
const StyledCarouselContainer = styled.div`
width:100%;
display:flex;
`;
const StyledCarouselContent = styled.div`
width:100%;
`;
const Carousel = ({ children, handleLeftCarouselElt, handleRightCarouselElt, handleCarouselElt, handleAdd, handleWithdraw }) => {

    return (
        <StyledCarouselContainer><StyledCarouselHandler onClick={handleWithdraw} >{handleLeftCarouselElt ? handleLeftCarouselElt : handleCarouselElt}</StyledCarouselHandler>
            <StyledCarouselContent>
                {children}
            </StyledCarouselContent>

            <StyledCarouselHandler onClick={handleAdd}>{handleRightCarouselElt ? handleRightCarouselElt : handleCarouselElt}</StyledCarouselHandler></StyledCarouselContainer>
    )
}

export default Carousel