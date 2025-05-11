import styled from '@emotion/styled';
import { Box } from '@mui/material';

import Button from '../../components/Button/Button';

export const StyledBox = styled(Box)`
    width: 60%;
    margin: 24px 16px; 
    gap: 16px; 
    display: flex; 
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-left: 20%;
`;

export const StyledButton = styled(Button)`
    width: 250px;
`;

export const PaymentWrapper = styled.div`
	width: 600px;
	background: #ebebeb;
	padding: 30px 0 50px 60px;
	margin: 50px 0 50px 0;
	& .total-payment {
		font-size: 20px;
		line-height: 16px;
		margin-bottom: 50px;
	}
	& .flex-block {
		display: flex;
		align-items: end;
		gap: 15px;
		margin-bottom: 30px;
	}
	& .flex-select {
		display: flex;
		align-items: center;
		gap: 20px;
		margin-bottom: 30px;
	}
	& .cvv {
		display: flex;
		align-items: end;
		font-size: 12px;
		gap: 15px;
	}
`;

export const Title = styled.h1`
	margin-top: 20px;
	margin-bottom: 80px;
	font-weight: bold;
	font-size: 16px;
	line-height: 16px;
	font-family: 'Josefin Sans';
	text-transform: uppercase;
`;

export const CardsWrapper = styled.div`
	display: flex;
	gap: 30px;
	margin-bottom:20px ;
`;

export const FormBox = styled(Box)`
    display: flex;
    width: 100%;
    gap: 10px;
`