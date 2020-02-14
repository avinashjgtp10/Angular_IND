import { Component, OnInit } from '@angular/core';
import { DataService } from "../../service/data.service"

import { timer, of, Observable,from,pipe } from "rxjs"
import { map,filter } from "rxjs/operators"

@Component({
  selector: 'app-observable-example',
  templateUrl: './observable-example.component.html',
  styleUrls: ['./observable-example.component.css']
})
export class ObservableExampleComponent implements OnInit {


  constructor(private loc:DataService) { 
    const sequence=new Observable(this.sequenceSubscriber)
    sequence.subscribe({
      next(num) { console.log(num); },
      complete() { console.log('Finished sequence'); }
    });

    const input=from([1,2,3,4,5])
    const output=map((x:any)=>{
      x * 10
    })

    output(input).subscribe(x=> console.log(x))
    console.log(output(input))




    //   const seq=pipe(
    //     filter((n:number)=>n%2 !== 0),
    //     map((n)=> n*n)
    //   )
  
    // const seqSub=seq(input)
    // seqSub.subscribe(
    // (x)=>{
    //   console.log(x)
    // }    
    // )
  
    // input.subscribe((data)=>{
    //   console.log(data)
    // })
    var op=map((x:any)=>{
     console.log(x*10)
    })
  
    op(input).subscribe()
    
    var finOddMul=pipe(
      filter((x:any)=>x%2 !== 0),
      map((x)=>x*x)  
    )
    finOddMul(input).subscribe(x=>{
      console.log(x)
    })
    

  // var output = this.multiplyByTen(input);
  // output.subscribe(x => console.log(x));


  }

  sequenceSubscriber(observer){
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.complete()
    return {unsubscribe(){}}
  }


  ngOnInit() {
  
  }

}
