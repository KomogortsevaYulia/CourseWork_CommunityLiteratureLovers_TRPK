import { TestBed } from "@angular/core/testing";
import { ProfilesService } from "./profiles.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { Profile } from "../models";

describe("ProfilesService", () => {
  
  let service: ProfilesService;
  //переменная с которой будем сравнивать
  const profiles: Profile = {
          username: "komogortseva",
          fio: "Комогорцева Юлия Владимировна ",
          email: "komog-y-v@yandex.ru",
          nameRole: "Пользователь",
  };
  //код который надо выполнить перед выполнением теста
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProfilesService],
    });
    //создание обьекта ProfilesService
    service = TestBed.inject(ProfilesService);
  });
  //тест для проверки создался ли обьект 
  it('Создание обьекта класса ProfilesService', () => {
    expect(service).toBeTruthy();
  });
  //тест для проверки правильно ли работает метод обьекта,возвращает ли данные и правильные ли они
  it("Получение информации для личного кабинета методом get класса ProfilesService", () => {
      service.get("komogortseva").subscribe(data => {
        expect(data).toEqual(profiles);
      });
    }
  );
});
