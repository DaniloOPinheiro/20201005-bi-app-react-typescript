import { App } from '../models/App';

const APP_STORE = 'apps';

export const get = ( ): App[] => {
    const data = localStorage.getItem(APP_STORE) || '';
    try {
        const result = JSON.parse(data) as App[];
        return result;
    } catch{
        return[];
    }
}

export const save = (data: App[]) => {
    if (data?.length >= 1) {
        localStorage.setItem(APP_STORE, JSON.stringify(data));
    }
}