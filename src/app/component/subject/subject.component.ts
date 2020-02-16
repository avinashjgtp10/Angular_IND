import { Component, OnInit } from '@angular/core';
import { Subject,from,BehaviorSubject,ReplaySubject,AsyncSubject } from 'rxjs'

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  constructor() { 

  }

  ngOnInit() {
   const subject=new Subject<Number>()
    subject.subscribe({
      next:(v)=>{console.log('First:'+v)}
    })
    subject.subscribe({
      next:(v)=>{console.log('Second:'+v)}
    })

    subject.next(1)
    subject.next(2)
    const observable=from([1,2,3,4,5])
    observable.subscribe(subject)
    //BehaviorSubject
    //  const behaviorSubject=new BehaviorSubject(0);//Initial Value
    //  behaviorSubject.subscribe({
    //    next:(x)=>{console.log('first',x)}
    //  })
    //  behaviorSubject.next(1)
    //  behaviorSubject.next(2)
    //  behaviorSubject.subscribe({
    //   next:(x)=>{console.log('Second',x)}
    // })
    // behaviorSubject.next(3)

      //ReplaySubject
      // const replaySUbject=new ReplaySubject(4);
      // replaySUbject.subscribe({
      //   next:(x)=>{console.log("First"+x)}
      // })
      // replaySUbject.next(1)
      // replaySUbject.next(2)
      // replaySUbject.next(3)
      // replaySUbject.next(4)  
      // replaySUbject.subscribe({
      //   next:x=>{console.log("Second"+x)}
      // })
      // replaySUbject.next(5)

      // AsyncSubject
      // const asyncSubject=new AsyncSubject()
      // asyncSubject.subscribe({
      //   next:(x)=>{console.log("First",x)}
      // })
      // asyncSubject.next(1);
      // asyncSubject.next(2);
      // asyncSubject.next(3);

      // asyncSubject.subscribe({
      //   next:(x)=>{console.log("Second",x)}
      // })  
      // asyncSubject.next(3);
      // asyncSubject.complete()
  }

}
