import { EmployeeActionComponent } from "src/app/employee/employee.actions.component";

export class EmployeeTableSetting{
    public static setting = {
        mode: 'external',
        hideSubHeader: false,
        actions: {
          position: 'right',
          add: false,
          edit : false,
          delete : false,
          custom: [
            { name: 'editrecord', title: '<i class="fa fa-pencil" title="Edit"></i>'},
            { name: 'activerecord', title: '<i class="fa fa-check" title="Active"></i>' },
            { name: 'deactiverecord', title: '<i class="fa fa-times" title="Deactive"></i>' },
          ],
        },
        pager :{
          perPage : 10
        },
        columns: {
          // action:{
          //   title: "Actions",
          //   type: "html",
          //   valuePrepareFunction: (cell,row)=>{
          //     if(row.active == '1'){
          //       let act = "<i class='fa fa-pencil' title='Edit'></i> &nbsp; ";
          //       act += "<i class='fa fa-times' title='Deactive'></i>";
          //       return act;
          //     }
          //     else{
          //       return '<i class="fa fa-check" title="Active"></i>';
          //     }
          //   }
          // }
          // empName: {
          //   title: 'Emp name',
          //   // sort : false,
          // },
          // mobile: {
          //   title: 'Mobile',
          //   // sort : false,
          // },
          // emailId: {
          //   title: 'E-mail',
          //   // sort : false,
          // },
          // roleName: {
          //   title: 'Role',
          //   // sort : false,
          // },
          
          // state: {
          //   title: 'State',
          //   // sort : false,
          // },
          // rmName: {
          //   title: 'RM Employee',
          //   // sort : false,
          // },
          
          // active: {
          //   title: 'Active',
          //   // sort : false,
          //   width : "80px"
          // }
          // actions:{
          //   title:"Actions",
          //   type:"custom",
          //   filter: false,
          //   sort: false,
          //   width: '80px',
          //   renderComponent: EmployeeActionComponent,
          //   onComponentInitFunction(instance){
          //     instance.clickOne.subscribe(row => {
          //       alert(`${row.active}`+"saved!")
          //     });
          //     instance.clickTwo.subscribe(row => {
          //       alert(`${row.empName}`+"saved!")
          //     });
          //     instance.clickThree.subscribe(row => {
          //       alert(`${row.empName}`+"saved!");
          //     });
          //   }
            
          // }
        }
    }
}