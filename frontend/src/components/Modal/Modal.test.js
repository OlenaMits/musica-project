import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Modal from "./Modal";

describe('Modal tests', () => {
    const handleCloseMock = jest.fn();
    
    const baseProps = {
        closeButton: true,
        handleClose: handleCloseMock,
        backgroundColor: '#aedaa6',
        header: 'test',
        actions: <div/>,
    }

    it('should match snapshot modal hide', () => {
        const {asFragment} = render(
            <Modal 
                show={false} 
                text="modal hide"
                {...baseProps}
            />);
        expect(asFragment()).toMatchSnapshot();
    });
   
    it('should match snapshot modal visible', () => {
        const {asFragment} = render(
            <Modal 
                show={true} 
                text="modal visible"
                {...baseProps}
            />);
        expect(asFragment()).toMatchSnapshot();
    });
   
    it('should trigger action', () => {
        render(
            <Modal 
                show={true} 
                text="modal visible"
                {...baseProps}
            />);
        fireEvent.click(screen.getByTestId('modal-close-btn'));
        expect(handleCloseMock).toHaveBeenCalled();
    });
})