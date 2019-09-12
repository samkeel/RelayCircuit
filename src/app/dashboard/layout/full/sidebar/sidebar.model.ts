export interface ChildrenItems {
    id: number;
    name: string;
    route: string;
}

export interface Sidebar {
    id: number;
    name: string;
    children?: ChildrenItems[];
}

