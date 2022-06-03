import { ComponentFixture, TestBed } from "@angular/core/testing"
import { RouterTestingModule } from "@angular/router/testing";
import { SharedModule } from '../shared';
import { AuthRoutingModule } from "../auth/auth-routing.module";
import { UserService } from "../core";
import { HelpComponent } from "./help.component";

describe('help component', () => {
    let fixture: ComponentFixture<HelpComponent>
    let component:HelpComponent
    // beforeEach(async() => {
    //   await TestBed.configureTestingModule({
    //     declarations: [HelpComponent],
    //     imports: [
    //         RouterTestingModule,
    //         SharedModule
    //       ],      
    //   }).compileComponents();
    //   fixture = TestBed.createComponent(HelpComponent)
    //   fixture.detectChanges();
    // })
      
    // it('should create', () => {
    //   // component.authType="register"
    //   // component.profile= {
    //   //   username: "komogortseva",
    //   //   fio: "Комогорцева Юлия Владимировна ",
    //   //   email: "komog-y-v@yandex.ru",
    //   //   nameRole: "Пользователь",
    //   // };
    //   // //component.profile.username="komogortseva"
    //   // expect(component).toBeTruthy();
    //   fixture.detectChanges()
    //   const infoMessageEl: HTMLElement =
    //   fixture.debugElement.nativeElement
    //   const h1 = infoMessageEl.querySelector('p')
    //   expect(h1.textContent).toContain('komogortseva')
    // })
    beforeEach(() => {
      const userServiceStub =  {
        username: "komogortseva",
        fio: "Комогорцева Юлия Владимировна ",
        email: "komog-y-v@yandex.ru",
        nameRole: "Пользователь",

      };
  
      TestBed.configureTestingModule({
        declarations: [HelpComponent],
        imports: [
                  RouterTestingModule,
                  SharedModule
                ],
        providers: [
          { provide: UserService, useValue: userServiceStub },
        ],
      })
      fixture = TestBed.createComponent(HelpComponent)
      fixture.detectChanges();
    })
  
    it('should get message from AppService stub', () => {
      fixture.detectChanges()
      const i: HTMLElement =
        fixture.debugElement.nativeElement
      const p = i.querySelector('p')
      expect(p.textContent).toContain('komogortseva')
    })
    // it('should contain', () => {
      
    //   expect(fixture.nativeElement.querySelector('h2').textContent).toContain("Личный кабинет");
    // })
  
    // it('should contain "title"', () => {
    //   const infoMessageEl: HTMLElement = component.nativeElement
    //   const h1 = infoMessageEl.querySelector('h1')
    //   expect(h1.textContent).toContain('title')
    // })

    // it('should set LoginForm values in OnInit', () => {
    //     const comp = fixture.componentInstance
    //     comp.ngOnInit()
    //     expect(comp.loginForm.name).toBe('Bob', 'name value')
    //     expect(comp.loginForm.password).toBe(
    //       'qwerty',
    //       'password value'
    //     )
    //   })
    
    // it('send() should raise LoginForm values', () => {
    //     const comp = fixture.componentInstance
    //     comp.ngOnInit()
    //     comp.active = true

    //     comp.validate.subscribe((credentials) => {
    //         expect(comp.active).toBe(true, 'active')
    //         expect(credentials).toBe(comp.loginForm, 'send event')
    //     })

    //     comp.send()
    //     })
})
  