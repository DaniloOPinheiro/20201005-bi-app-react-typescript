import { App } from '../models/App';

export interface AppContextType {
    apps: App[];
    addApp(title: string): void;
    removeApp(app: App): void;
    toggle(app: App): void;
}