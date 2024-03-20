import { Component, Input, OnChanges, OnInit, SimpleChanges, DoCheck, ContentChild, ViewChild, AfterContentInit, ElementRef, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{
  ngOnDestroy(): void {
    console.log('Child component is destroyed! :');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked triggered');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit - wrapper', this.wrapper);
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked triggered');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit - wrapper', this.wrapper);
     console.log('ngAfterContentInit - \'contentWrapper', this.content);
  }
  @ViewChild('wrapper') wrapper!: ElementRef;
  @ContentChild('contentWrapper') content!: ElementRef;
  ngDoCheck(): void {
    console.log('ngDoCheck triggered');
  }
  @Input() userName = '';
  ngOnInit() {
    console.log('ngOnInit from the child component');
 }
  ngOnChanges(changes:SimpleChanges) {
     console.log('ngOnChanges triggered', changes);
 
     if (!changes['userName'].isFirstChange()){
        if (changes['userName'].currentValue === "Chris") {
           this.userName = 'Hello ' + this.userName
        } else {
           this.userName = changes['userName'].previousValue
        }
     }
  }
}
