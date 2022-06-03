import { TestBed } from "@angular/core/testing";
import { ProfilesService } from "./profiles.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { HttpTestingController } from "@angular/common/http/testing";
import { Profile } from "../models";

describe("ProfilesService", () => {
  let service: ProfilesService;
  let controller: HttpTestingController;
  const profiles: Profile = {
          username: "komogortseva",
          fio: "Комогорцева Юлия Владимировна ",
          email: "komog-y-v@yandex.ru",
          nameRole: "Пользователь",
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProfilesService],
    });
    service = TestBed.inject(ProfilesService);
    controller = TestBed.inject(HttpTestingController);
  });

  it('Создание обьекта класса ProfilesService', () => {
    expect(service).toBeTruthy();
  });

  it("Получение информации для личного кабинета методом get класса ProfilesService", () => {
      service.get("komogortseva").subscribe(data => {
        expect(data).toEqual(profiles);
      });
    }
  );
});
