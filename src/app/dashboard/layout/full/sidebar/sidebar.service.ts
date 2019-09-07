import { Sidebar } from './sidebar.model';
import { Subject } from 'rxjs';


export class SidebarService {
    sideList = new Subject<Sidebar>();

}