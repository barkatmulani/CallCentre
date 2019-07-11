import { Injectable } from "@angular/core";
import { mockData } from '../mock/mock.data';
import { Observable, of } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    constructor(private mockData: mockData) {

    }

    getCallTypes(): Observable<CallType[]> {
        return of(this.mockData.callTypeList);
    }

    getStatuses(): Observable<Status[]> {
        return of(this.mockData.statusList);
    }
    
    getOrders(): Observable<Order[]> {
        return of(this.mockData.orderList);
    }
}

export class CallType {
    callTypeId: number;
    callTypeDesc: string;
}

export class Status {
    statusId: number;
    statusDesc: string;
}

export class Order {
    title: string;
    name: string;
    firstName: string;
    surName: string;
    datesold: string;
    statusId: number;
    callTypeId: number;
    mobilePhone: string;
    homePhone: string;
}
