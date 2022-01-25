import React from "react";
import styled from "styled-components";
// import images from "../../public/images/model-s.jpg"


const Section = () => {
    return(
        <Wrap>
            <ItemText>
                <h1>Model S</h1>
                <p>Order Online for Touchless Delivery</p>
            </ItemText>
            
        </Wrap>
    )
}




export default Section;


const Wrap = styled.div`
width:100vw;
height:100vh;
bacjground-size:cover;
background-position:center;
background-repeat: no-repeat
backgroud-image: url('/images/model-s.jpg');  
`
const ItemText = styled.div`
padding-top:15vh;
text-alighn:center;
`