import React, { createContext, useEffect, useState } from 'react';
import { App } from '../models/App';
import { get, save } from '../services/AppService';
import { AppContextType } from './AppContextType';

export const AppContext = createContext<AppContextType>({
    apps: [
        // {id:1, title:'Ir ao mercado', done: true},
        // {id:2, title:'Ir ao cinema', done: false}
    ],
    addApp: () => {},
    removeApp: () => {},
    toggle: () => {},
});

const AppProvider = (props: any) => {
    // const apps: App[] = [
    //     {id:1, title:'Ir ao mercado', done: true},
    //     {id:2, title:'Ir ao cinema', done: false}
    // ];

    const [apps, setApps] = useState<App[]>(get
        // [{id: 1, title: 'a', done: true}
        // {id: 2, title: 'b', done: false}]
    );

    useEffect(() => {
      save(apps);
    }, [apps])

    const addApp = (title: string) => {
        const app: App = { id: apps.length + 1, title: title, done: false };
        setApps([...apps, app]);
        // save(apps);
        // console.log('Adicinou' + title)
    }
    
    const removeApp = (app: App) => {
        const index = apps.indexOf(app);
        setApps(apps.filter((_, i) => i !== index));
        // save(apps);
        // console.log('Removeu' + app.title)
    }
    
    const toggle = (app: App) => {
        const index = apps.indexOf(app);
        apps[index].done = !app.done;
        setApps([...apps]);
        // console.log('Alterou' + app.title)
    }

    return(
        <AppContext.Provider value={{ apps, addApp, removeApp, toggle }}>
            {props.children}
        </AppContext.Provider>
    );
 }

export default AppProvider;