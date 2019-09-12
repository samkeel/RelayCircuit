import { Sidebar } from './sidebar.model';
import { Subject } from 'rxjs';


export class SidebarService {
    sideList = new Subject<Sidebar>();
    private navList: Sidebar[] = [
        {
            id: 1, name: 'Cables',
            children: [
                { id: 1, name: 'Conduit Size', route: 'conduit-size'},
                { id: 2, name: 'Test List', route: '/'}
            ]
        },
        {
            id: 2, name: 'Test 2',
            children: [
                { id: 1, name: 'Test Conduit', route: 'conduit-size'},
                { id: 2, name: 'Test List 2', route: '/'},
                { id: 3, name: 'Test List 3', route: '/'}
            ]
        }
    ];

    getNavList() {
        return this.navList.slice();
    }
}