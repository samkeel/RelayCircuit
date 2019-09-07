
import { Subject } from 'rxjs';
import { MainCard } from './dashboardMain.model';

export class DashboardCardService {
    dashboardCardList = new Subject<MainCard>();
}