import styles from './RoomInput.module.scss';
import classNames from 'classnames/bind';
const cn = classNames.bind(styles);

import { useCallback } from 'react';

export interface RoomInputProps {
    value: string;
    placeholder?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onClick?: () => void;
    buttonText: string;
}

export function RoomInput(props: RoomInputProps) {
    const handleClick = useCallback(() => {
        if (props.onClick) {
            props.onClick();
        }
    }, [props.onClick]);

    return (
        <div className={cn('input-group')}>
            <input
                value={props.value}
                placeholder={props.placeholder}
                onChange={props.onChange}
                onKeyPress={(e) => e.key === 'Enter' && handleClick()}
            />
            <button className={cn({'show' : props.value})} onClick={handleClick}>
                {props.buttonText}
            </button>
        </div>
    )
}