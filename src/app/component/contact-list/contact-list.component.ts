import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  data: import("/home/pushpa/angular practise project/contact-management/src/app/contactmodel").contact;

  constructor(private apiservice : ApiService) { }

  ngOnInit(): void {
this.getcontact()
  }

  getcontact(){
    this.apiservice.getcontact().subscribe(res=>{
      this.data =res;
    })
  }


  // delete
  delete(id:number){
    this.apiservice.DeleteContactComponent(id).subscribe(res=>{
      alert("contact deleted successfully !!")
      this.getcontact()
    })
  }

}
