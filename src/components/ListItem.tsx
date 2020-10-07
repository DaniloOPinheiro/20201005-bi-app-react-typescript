import React, { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';
import { AppContextType } from '../contexts/AppContextType';
import { App } from '../models/App';

interface ListItemProps {
    app: App
}

const ListItem = (props: ListItemProps) => {
    const {removeApp, toggle } = useContext<AppContextType>(AppContext)
    
    const onRemove = (app: App) => {
        removeApp(app);
    }

    const handleChange = (event: any) => {
        toggle(props.app);
    }

    return(
        <tr className="uk-animation-slide-bottom-medium">
            <td className="uk-width-auto">
                <label>
                    <input 
                        className="uk-checkbox" 
                        type="checkbox" 
                        checked={props.app.done}
                        onChange={handleChange}/>
                </label>
            </td>
            <td className="uk-width-expand">
                {props.app.title}
            </td>
            <td className="uk-width-auto">
                <button
                    className="uk-icon-button uk-button-danger"
                    button-icon="trash"
                    onClick={() => onRemove(props.app)}></button>
            </td>
        </tr>
    );
}

export default ListItem;