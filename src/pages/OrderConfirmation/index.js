import React from "react";
import { Container } from "@mui/material";
import { StyledBox, StyledTypography } from "./OrderConfirmation.styles";

const OrderConfirmation = () => {
    return(
        <Container>
            <StyledBox>
                <StyledTypography>
                    Thank you for your order!
                </StyledTypography>
            </StyledBox>
        </Container>
    )
};

export default OrderConfirmation;