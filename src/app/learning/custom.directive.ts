import { Directive,ElementRef ,HostListener} from "@angular/core";
import {  } from "@angular/core";

@Directive({
    selector:"[cus-directive]"
})
export class CustomDirective{
    constructor(private el:ElementRef){
        console.log("Directive element works");
        el.nativeElement.style.color = "green"
    }

    @HostListener("mouseenter") mouseenter(){
        this.el.nativeElement.style.color="yellow";
    }
    @HostListener("mouseleave") mouseleave(){
        this.el.nativeElement.style.color="green";
    }
}