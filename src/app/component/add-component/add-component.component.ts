import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { contact } from 'src/app/contactmodel';

@Component({
  selector: 'app-add-component',
  templateUrl: './add-component.component.html',
  styleUrls: ['./add-component.component.css']
})
export class AddComponentComponent implements OnInit {

contactform:FormGroup;

  constructor(private formbuilder : FormBuilder, private router : Router, private apiService :ApiService) { }

  ngOnInit(): void {

this.contactform = this.formbuilder.group({
  
  firstname : ['',Validators.required],
  lastname : ['',Validators.required],
  mobilenumber : ['',Validators.required],
  city : ['',Validators.required]


})
  }

  submitContactForm(data : contact){
    // console.log(this.contactform.value);

this.apiService.addcontact(data).subscribe(()=>{
  this.contactform.reset();

  this.router.navigate(["/contactList"])
})

   
  }

}
