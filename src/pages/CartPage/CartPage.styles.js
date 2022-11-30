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
`;

export const StyledButton = styled(Button)`
    width: 250px;
`;