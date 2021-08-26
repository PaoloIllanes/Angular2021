import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-view2',
  templateUrl: './view2.component.html',
  styleUrls: ['./view2.component.css']
})
export class View2Component implements OnInit {

  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
this.router.params.subscribe(p=>{console.log('params',p);})
//console.log('snapshot',this.router.snapshot.params)
this.router.queryParams.subscribe(q=>{console.log('Query Params',q)})
console.log('snapshot qp',this.router.snapshot.queryParams)

  }

}