import { Directive, ElementRef, inject, input } from "@angular/core";
import { every } from "rxjs";
import { LogDirective } from "../log.directive";

@Directive({
    selector: 'a[appSafeLink]',
    standalone: true,
    host: {
        '(click)': 'onConfirmLeaavePage($event)'
    },
    hostDirectives:[LogDirective]
})
export class SaftLinkDirective {
    queryParam = input('aftab-app', { alias: 'appSafeLink' });
    private hostElementRef = inject<ElementRef<HTMLAnchorElement>>(ElementRef);
    constructor() {
        console.log('safe link directives is Active!');
    }

    // onConfirmLeaavePage(event: MouseEvent) {
    //     const wantsToLeave = window.confirm('Do you want to leave the app?');
    //     if (wantsToLeave) {
    //         const address = (event.target as HTMLAnchorElement).href;
    //         // (event.target as HTMLAnchorElement).href = address + '?from=aftabapp';
    //         (event.target as HTMLAnchorElement).href = address + '?from=' + this.queryParam();
    //         return;
    //     }
    //     event?.preventDefault();
    // }

    onConfirmLeaavePage(event: MouseEvent) {
        const wantsToLeave = window.confirm('Do you want to leave the app?');
        if (wantsToLeave) {
            const address = this.hostElementRef.nativeElement.href;
            this.hostElementRef.nativeElement.href = address + '?from=' + this.queryParam();
            return;
        }
        event?.preventDefault();
    }
}