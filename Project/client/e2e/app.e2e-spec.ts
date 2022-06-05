import { Ng2RealApp } from './app.po';
import { browser, element, by } from 'protractor';
describe('ng-demo App', () => {
  let page: Ng2RealApp;

  beforeEach(() => {
    page = new Ng2RealApp();
  });

  it('Работа навигации для главной страницы', () => {
    page.navigateToHome();
    expect(page.getText()).toEqual('Главная страница проекта "Сообщество любителей литературы"');
  });

  it('Работа навигации для страницы входа', () => {
    page.navigateToLogin();
    expect(page.getHeadingText()).toEqual('Вход');
  });
  it('Работа навигации для страницы регистрации', () => {
    page.navigateToRegister();
    expect(page.getHeadingText()).toEqual('Регистрация');
  });

  it('Невозможность отправить форму без заполненных полей', () => {
    page.navigateToLogin();
    expect(element(by.buttonText('Вход')).isEnabled()).toEqual(false);
  });

  it('Функция входа в личный кабинет', () => {
    page.navigateToLogin();
    element(by.name('email')).sendKeys('komog-y-v@yandex.ru');
    element(by.name('password')).sendKeys('1234');
    element(by.buttonText('Вход')).click();
    browser.sleep(5000);
    browser.ignoreSynchronization = true;
    expect(page.getText()).toEqual('Главная страница проекта "Сообщество любителей литературы"')
    element(by.buttonText('Личный кабинет')).click();
    browser.sleep(5000);
    browser.ignoreSynchronization = true;
    expect( element(by.css('h2')).getText()).toEqual('Личный кабинет');
  });
});
