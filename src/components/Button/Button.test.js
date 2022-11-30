import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'

import Button from './Button';

describe('Button tests', () => {
    const onClickMock = jest.fn();

    afterEach(() => {
        jest.clearAllMocks();
    });
    
    it('Button is not disabled', () => {
        render(<Button/>);
        expect(screen.getByRole('button')).not.toBeDisabled();
    });

    it('should render button with props', () => {
        render(
            <Button className='test' backgroundColor='white' text='test'/>
        )
        expect(screen.getByRole('button')).toHaveTextContent('test');
        expect(screen.getByRole('button')).toHaveClass('btn test');
        expect(screen.getByRole('button')).toHaveStyle("background-color: white");
    });
    
    it('should trigger action on button click', () => {
        render(
            <Button onClick={onClickMock}/>
        );
        fireEvent.click(screen.getByRole('button'));
        fireEvent.click(screen.getByRole('button'));
        expect(onClickMock).toHaveBeenCalled();
        expect(onClickMock).toHaveBeenCalledTimes(2);
    })
})