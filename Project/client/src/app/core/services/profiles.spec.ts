import { TestBed, inject } from "@angular/core/testing";
import { ProfilesService } from "./profiles.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { HttpTestingController } from "@angular/common/http/testing";
import { Profile } from "../models";
import { Observable, ReplaySubject } from "rxjs";

describe("ProfilesService", () => {
  let service: ProfilesService;
  var profileSubject = new ReplaySubject<Profile>(1);
  var profile = profileSubject.asObservable();
  let controller: HttpTestingController;
  var profileRes:Profile;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfilesService);
  });

  it("Создание обьекта класса ProfilesService", inject(
    [ProfilesService],
    (service: ProfilesService) => {
      expect(service).toBeTruthy();
    }
  ));
  it("Получение информации для личного кабинета методом get класса ProfilesService", (done) => {
  
    (service: ProfilesService, backend: HttpTestingController) => {
      // создадим фейковый объект который должен придти с сервера
      const profiles: Profile = {
        username: "komogortseva",
        fio: "Комогорцева Юлия Владимировна ",
        email: "komog-y-v@yandex.ru",
        nameRole: "Пользователь",
      };
      profileSubject.next(profiles);
      service.get("komogortseva").subscribe(data => {
        
        expect(data).toEqual(profiles);
        done();
    });
    //   expect(service.get("komogortseva")).toEqual(profile);
    //   // сформируем сервис backend, чтобы он возвращал нам нужные данные
    //   backend
    //     .expectOne({
    //       method: "GET",
    //       url: "/api/profiles/komogortseva",
    //     })
    //     .flush(profile); // flush позволяет сбросить и указать, что должен вернуть запрос
    }
    });
});
