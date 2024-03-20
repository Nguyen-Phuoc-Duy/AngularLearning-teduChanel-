import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent implements OnInit{
  isChildDestroyed = false;
  destroy() {
    this.isChildDestroyed = true;
 }
  ngOnInit() {
    console.log('ngOnInit from the parent component');
 }
  userName = 'Maria';
 
  updateUser() {
     this.userName = 'Chris';
  }
}
