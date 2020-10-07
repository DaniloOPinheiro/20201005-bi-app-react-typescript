import React, { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';
import { AppContextType } from '../contexts/AppContextType';
import { App }  from '../models/App';
import ListItem from './ListItem';

const List = () => {
    // const apps: App[] = [
    //     // {id:1, title:'Ir ao mercado', done: true},
    //     // {id:2, title:'Ir ao cinema', done: false},
    // ];
    // const apps= [];

    const { apps } = useContext<AppContextType>(AppContext);

    return(
        <table className="uk-table">
            <caption>Lista de Formulário</caption>
            <thead>
                <tr>
                    <th>#</th>
                    <th>App</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    apps?.map(
                        app => (<ListItem key={app.id} app={app}></ListItem>)
                        // app => (<div key={app.id}>{app.title}</div>)
                    )
                }
            </tbody>
        </table>
    );
}

export default List;