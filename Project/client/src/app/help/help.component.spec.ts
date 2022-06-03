import { ComponentFixture, TestBed } from "@angular/core/testing"
import { RouterTestingModule } from "@angular/router/testing";
import { SharedModule } from '../shared';
import { AuthRoutingModule } from "../auth/auth-routing.module";
import { UserService } from "../core";
import { HelpComponent } from "./help.component";

describe('help component', () => {
    let fixture: ComponentFixture<HelpComponent>
    let component:HelpComponent
    beforeEach(async() => {
      await TestBed.configureTestingModule({
        declarations: [HelpComponent],
        imports: [
            RouterTestingModule,
            SharedModule
          ],      
      }).compileComponents();
      fixture = TestBed.createComponent(HelpComponent)
      fixture.detectChanges();
    })
      
    it('Создание компонента HelpComponent', () => {
     
      expect(fixture).toBeTruthy();
    })

    it('Проверка отображения правильного шаблона HTML', () => {
      expect(fixture.nativeElement.querySelector('h1').textContent).toContain("Справка");
    }) 
})
  