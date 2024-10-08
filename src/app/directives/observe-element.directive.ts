import { isPlatformBrowser } from '@angular/common'
import {
  Directive,
  Input,
  Output,
  EventEmitter,
  ElementRef,
  AfterViewInit,
  Inject,
  PLATFORM_ID,
} from '@angular/core'
import { debounceTime, Observable, Subscription } from 'rxjs'

@Directive({
  selector: '[appObserveElement]',
  exportAs: 'intersection',
  standalone: true
})
export class ObserveElementDirective implements AfterViewInit {
  @Input() root: HTMLElement | null = null
  @Input() rootMargin = '0px'
  @Input() threshold = 0.9
  @Input() debounceTime = 500
  @Input() isContinuous = true

  @Output() isIntersecting = new EventEmitter<boolean>()

  subscription!: Subscription


  constructor(private element: ElementRef, @Inject(PLATFORM_ID) private plateformId: Object) { }
  ngAfterViewInit() {
    if (isPlatformBrowser(this.plateformId)) {
      this.subscription = this.createAndObserve()
    }
  }

  createAndObserve() {
    const options: IntersectionObserverInit = {
      root: this.root,
      rootMargin: this.rootMargin,
      threshold: this.threshold,
    }

    return new Observable<boolean>(() => {
      const intersectionObserver = new IntersectionObserver(([entry]) => {
        var id = entry.target.getAttribute('id');
        var navbarItem = document.querySelector(`[href="#${id}"]`)
        
        if (entry.isIntersecting) {
          this.element.nativeElement.classList.add("is-intersecting")
          if (navbarItem) {
            navbarItem.classList.add('active')
          }

        } else {
          this.element.nativeElement.classList.remove("is-intersecting")
          if (navbarItem) {
            navbarItem.classList.remove('active')
          }
        }
      }, options)

      intersectionObserver.observe(this.element.nativeElement)

    })
      .pipe(debounceTime(this.debounceTime))
      .subscribe(status => {
        this.isIntersecting.emit(status)
      })
  }
}
