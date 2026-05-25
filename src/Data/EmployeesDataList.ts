import { faTrophy, faPhone, faChartSimple, faUsers, faEnvelope, faReceipt, faStar, faArrowsRotate, faCalendar } from '@fortawesome/free-solid-svg-icons'


export const employeesDataList = [
    {id:1,name:'Dwayne Lynn',role:'Account Executive',tenure:'3 yrs',sales:874,ordersCompleted:5,target:15000,commission:87,attendance:92,performance:58,satisfaction:72,color:0, ordersFulfilled: 23, ordersPending: 83, ordersReturned: 10,
        quarterly:[800,1200,950,874],teamQ:[38000,41000,44000,46000],
        activity:[
            {icon:faReceipt,bg:'#E6F1FB',text:'Closed deal with Apex Corp — $874',time:'2h ago', createdAt: '2026-05-25T19:37:00'},
            {icon:faPhone,bg:'#E1F5EE',text:'Discovery call with Bright Systems',time:'Yesterday', createdAt: '2026-05-25T19:14:00'},
            {icon:faEnvelope,bg:'#EEEDFE',text:'Follow-up sent to 4 prospects',time:'2d ago', createdAt: '2026-05-25T18:51:00'},
            {icon:faChartSimple,bg:'#FAEEDA',text:'Q4 pipeline review submitted',time:'3d ago', createdAt: '2026-05-25T18:26:00'},
        ],
        orders:[{id:1042,client:'Apex Corp',amount:'$874',status:'fulfilled'},{id:1043,client:'Nova Ltd',amount:'$320',status:'pending'},{id:1044,client:'Bright Co',amount:'$150',status:'returned'}]
    },
    {id:2,name:'Emily Carter',role:'Senior Sales Rep',tenure:'5 yrs',sales:15432,ordersCompleted:24,target:18000,commission:1543,attendance:97,performance:86,satisfaction:91,color:1, ordersFulfilled: 123, ordersPending: 23, ordersReturned: 10,
        quarterly:[9000,32500,24800,25432],teamQ:[38000,41000,44000,46000],
        activity:[
            {icon:faTrophy,bg:'#E1F5EE',text:'Hit 86% of quarterly target — personal best',time:'1h ago', createdAt: '2026-05-25T18:07:00'},
            {icon:faReceipt,bg:'#E6F1FB',text:'Closed 3 deals this week totaling $4,200',time:'Yesterday', createdAt: '2026-05-25T17:43:00'},
            {icon:faUsers,bg:'#EEEDFE',text:'Onboarded 2 new enterprise clients',time:'3d ago', createdAt: '2026-05-25T17:19:00'},
            {icon:faStar,bg:'#FAEEDA',text:'Received 5-star client satisfaction score',time:'1w ago', createdAt: '2026-05-25T17:02:00'},
        ],
        orders:[{id:1045,client:'Summit Inc',amount:'$4,200',status:'fulfilled'},{id:1046,client:'Delta LLC',amount:'$3,800',status:'fulfilled'},{id:1047,client:'Ridge Co',amount:'$2,100',status:'pending'}]
    },
    {id:3,name:'Gavin Thompson',role:'Sales Rep',tenure:'2 yrs',sales:13842,ordersCompleted:19,target:15000,commission:1384,attendance:88,performance:79,satisfaction:83,color:2, ordersFulfilled: 200, ordersPending: 40, ordersReturned: 75,
        quarterly:[9000,11200,12900,13842],teamQ:[38000,41000,44000,46000],
        activity:[
            {icon:faReceipt,bg:'#EEEDFE',text:'Closed Horizon deal — $2,400',time:'3h ago', createdAt: '2026-05-25T16:37:00'},
            {icon:faPhone,bg:'#E6F1FB',text:'Completed 8 outbound calls today',time:'Today', createdAt: '2026-05-25T16:11:00'},
            {icon:faEnvelope,bg:'#E1F5EE',text:'Campaign sequence sent to 22 leads',time:'2d ago', createdAt: '2026-05-25T15:48:00'},
            {icon:faUsers,bg:'#FAEEDA',text:'Joined enterprise training workshop',time:'4d ago', createdAt: '2026-05-25T15:26:00'},
        ],
        orders:[{id:1048,client:'Horizon LLC',amount:'$2,400',status:'fulfilled'},{id:1049,client:'Peak Corp',amount:'$1,900',status:'fulfilled'},{id:1050,client:'Atlas Ltd',amount:'$800',status:'pending'}]
    },
    {id:4,name:'Sophia Patel',role:'Account Manager',tenure:'4 yrs',sales:13475,ordersCompleted:21,target:16000,commission:1348,attendance:95,performance:84,satisfaction:89,color:3, ordersFulfilled: 59, ordersPending: 349, ordersReturned: 18,
        quarterly:[20000,31800,13000,33475],teamQ:[38000,41000,44000,46000],
        activity:[
            {icon:faArrowsRotate,bg:'#FAEEDA',text:'Renewed 2 annual contracts this month',time:'5h ago', createdAt: '2026-05-25T15:04:00'},
            {icon:faReceipt,bg:'#E1F5EE',text:'Upsell closed with Crest Partners — $1,800',time:'Yesterday', createdAt: '2026-05-25T14:39:00'},
            {icon:faStar,bg:'#EEEDFE',text:'Client NPS score: 9.2 / 10',time:'3d ago', createdAt: '2026-05-25T14:17:00'},
            {icon:faCalendar,bg:'#E6F1FB',text:'QBR scheduled with 4 enterprise accounts',time:'1w ago', createdAt: '2026-05-25T13:51:00'},
        ],
        orders:[{id:1051,client:'Crest Partners',amount:'$1,800',status:'fulfilled'},{id:1052,client:'Orion LLC',amount:'$2,200',status:'fulfilled'},{id:1053,client:'Maple Inc',amount:'$900',status:'pending'}]
    },
    {id:5,name:'Daniel Walter',role:'Sales Rep',tenure:'1 yr',sales:12864,ordersCompleted:17,target:14000,commission:1286,attendance:91,performance:76,satisfaction:80,color:4, ordersFulfilled: 543, ordersPending: 105, ordersReturned: 49,
        quarterly:[6000,9500,24800,27864],teamQ:[38000,41000,44000,46000],
        activity:[
            {icon:faReceipt,bg:'#FAECE7',text:'Closed first enterprise deal — $3,100',time:'Today', createdAt: '2026-05-25T13:28:00'},
            {icon:faPhone,bg:'#E6F1FB',text:'Cold call blitz — 14 new connects',time:'Yesterday', createdAt: '2026-05-25T13:02:00'},
            {icon:faEnvelope,bg:'#E1F5EE',text:'Personalized outreach to 30 leads',time:'3d ago', createdAt: '2026-05-25T12:44:00'},
            {icon:faChartSimple,bg:'#FAEEDA',text:'Pipeline value grew 22% this month',time:'1w ago', createdAt: '2026-05-25T12:16:00'},
        ],
        orders:[{id:1054,client:'Zenith Corp',amount:'$3,100',status:'fulfilled'},{id:1055,client:'Blue Ridge',amount:'$1,400',status:'pending'},{id:1056,client:'Coda LLC',amount:'$600',status:'returned'}]
    },
    {id:6,name:'Alyssa Boyd',role:'Junior Sales Rep',tenure:'6 mo',sales:366,ordersCompleted:3,target:8000,commission:37,attendance:85,performance:42,satisfaction:68,color:5, ordersFulfilled: 88, ordersPending: 9, ordersReturned: 65,
        quarterly:[0,0,200,366],teamQ:[38000,41000,44000,46000],
        activity:[
            {icon:faPhone,bg:'#EAF3DE',text:'Completed sales onboarding program',time:'1d ago', createdAt: '2026-05-25T11:58:00'},
            {icon:faEnvelope,bg:'#E6F1FB',text:'First cold email sequence launched',time:'3d ago', createdAt: '2026-05-25T11:26:00'},
            {icon:faUsers,bg:'#E1F5EE',text:'Shadowed Emily on 3 discovery calls',time:'1w ago', createdAt: '2026-05-25T11:09:00'},
            {icon:faStar,bg:'#FAEEDA',text:'Closed first solo deal — $366',time:'2w ago', createdAt: '2026-05-25T10:37:00'},
        ],
        orders:[{id:1057,client:'Spark LLC',amount:'$200',status:'fulfilled'},{id:1058,client:'Nano Co',amount:'$100',status:'fulfilled'},{id:1059,client:'Pixl Inc',amount:'$66',status:'pending'}]
    },
    {id:7,name:'Terrence Mendoza',role:'Sales Rep',tenure:'2 yrs',sales:12134,ordersCompleted:16,target:14000,commission:1213,attendance:90,performance:74,satisfaction:78,color:6, ordersFulfilled: 123, ordersPending: 23, ordersReturned: 10,
        quarterly:[8000,10000,11500,12134],teamQ:[38000,41000,44000,46000],
        activity:[
            {icon:faReceipt,bg:'#FCEBEB',text:'Closed 2 mid-market deals this week',time:'4h ago', createdAt: '2026-05-25T10:22:00'},
            {icon:faPhone,bg:'#E6F1FB',text:'Follow-up calls completed for Q4 pipeline',time:'Yesterday', createdAt: '2026-05-25T10:03:00'},
            {icon:faEnvelope,bg:'#EAF3DE',text:'Reactivation campaign sent to 18 cold leads',time:'4d ago', createdAt: '2026-05-25T09:41:00'},
            {icon:faChartSimple,bg:'#FAEEDA',text:'Improved close rate by 8% vs Q3',time:'1w ago', createdAt: '2026-05-25T09:18:00'},
        ],
        orders:[{id:1060,client:'Clio Corp',amount:'$2,800',status:'fulfilled'},{id:1061,client:'Apex Ltd',amount:'$2,100',status:'fulfilled'},{id:1062,client:'Surge Co',amount:'$1,200',status:'pending'}]
    },
    {id:8,name:'Ava Anderson',role:'Sales Rep',tenure:'1.5 yrs',sales:1765,ordersCompleted:6,target:10000,commission:177,attendance:87,performance:52,satisfaction:71,color:7, ordersFulfilled: 113, ordersPending: 120, ordersReturned: 99,
        quarterly:[200,500,1200,1765],teamQ:[38000,41000,44000,46000],
        activity:[
            {icon:faPhone,bg:'#F1EFE8',text:'Rebooked 4 cancelled demos this week',time:'2h ago', createdAt: '2026-05-25T09:05:00'},
            {icon:faEnvelope,bg:'#E6F1FB',text:'Sent proposal to Verdant Systems',time:'Yesterday', createdAt: '2026-05-25T08:47:00'},
            {icon:faUsers,bg:'#E1F5EE',text:'Completed advanced negotiation training',time:'5d ago', createdAt: '2026-05-25T08:32:00'},
            {icon:faChartSimple,bg:'#FAECE7',text:'Pipeline coverage at 1.8x — working to improve',time:'1w ago', createdAt: '2026-05-25T08:14:00'},
        ],
        orders:[{id:1063,client:'Verdant Sys',amount:'$900',status:'pending'},{id:1064,client:'Fold Inc',amount:'$500',status:'fulfilled'},{id:1065,client:'Lumen Co',amount:'$365',status:'returned'}]
    },
];