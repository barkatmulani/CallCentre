export class mockData {
    callTypeList = [
        { callTypeId: 1, callTypeDesc: 'SALES'},
        { callTypeId: 2, callTypeDesc: 'SERVICE'}
    ];

    statusList = [
        { statusId: 1, statusDesc: 'NEW'},
        { statusId: 2, statusDesc: 'IN USE'},
        { statusId: 3, statusDesc: 'COMPLETED'},
    ];

    orderList = [
        { title: 'Mr', name: '', firstName: 'John', surName: 'Doe', datesold: '01/07/2019', statusId: 1, callTypeId: 2, mobilePhone: '123', homePhone: '456' },
        { title: 'Mr', name: '', firstName: 'Giacomo', surName: 'Guilizzani', datesold: '03/07/2019', statusId: 2, callTypeId: 1, mobilePhone: '123', homePhone: '456' },
        { title: 'Ms', name: '', firstName: 'Patricia', surName: 'Hogema', datesold: '05/07/2019', statusId: 3, callTypeId: 1, mobilePhone: '123', homePhone: '456' },
        { title: 'Miss', name: '', firstName: 'Valerie', surName: 'Liberty', datesold: '04/07/2019', statusId: 1, callTypeId: 1, mobilePhone: '123', homePhone: '456' },
        { title: 'Mrs', name: '', firstName: 'Mariah', surName: 'Maclaclan', datesold: '04/07/2019', statusId: 1, callTypeId: 1, mobilePhone: '123', homePhone: '456' },
    ];
}