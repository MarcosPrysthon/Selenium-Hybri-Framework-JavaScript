// const {Builder, By, Key, until} = require('selenium-webdriver');
import {By} from 'selenium-webdriver';
import sleep from '../utilities/sleep.js';

export default class LoginBusiness {
    txtFirstNameXpath = '//*[@id="layout-container"]/div/entry-create-personal-form/form/div[2]/peb-form-background/div/two-column-form/div/peb-form-field-input[1]/div/div/span'
    txtLastNameXpath = '//*[@id="layout-container"]/div/entry-create-personal-form/form/div[2]/peb-form-background/div/two-column-form/div/peb-form-field-input[2]/div/div/span'
    txtEmailXpath = '//*[@id="layout-container"]/div/entry-create-personal-form/form/div[2]/peb-form-background/div/peb-form-field-input[1]/div/div/span'
    txtPasswordXpath = '//*[@id="layout-container"]/div/entry-create-personal-form/form/div[2]/peb-form-background/div/peb-form-field-input[2]/div/div/span'
    txtConfirmPasswordXpath = '//*[@id="layout-container"]/div/entry-create-personal-form/form/div[2]/peb-form-background/div/peb-form-field-input[3]/div/div/span'
    btnSingupXpath = '//*[@id="layout-container"]/div/entry-create-personal-form/form/div[2]/button[1]/pe-progress-button-content/div'


    constructor(driver) {
        this.driver = driver
    }

    async setFirstName(fstName) {
        let _fisrtName = await this.driver.findElement(By.xpath(this.txtFirstNameXpath));
        await this.driver.actions().sendKeys(_fisrtName, fstName).perform();
    }

    async setLasName(lstName) {
        let _lastName = await this.driver.findElement(By.xpath(this.txtLastNameXpath));
        await this.driver.actions().sendKeys(_lastName, lstName).perform()   
    }

    async setEmail(email) {
        let _email = await this.driver.findElement(By.xpath(this.txtEmailXpath));
        await this.driver.actions().sendKeys(_email, email).perform()
    }

    async setPassword(password) {
        let _password = await this.driver.findElement(By.xpath(this.txtPasswordXpath));
        await this.driver.actions().sendKeys(_password, password).perform()
        await sleep(2);
    }

    async setConfirmPassword(confirmPassword) {
        let _confirmPassword = await this.driver.findElement(By.xpath(this.txtConfirmPasswordXpath))
        _confirmPassword.click()
        await this.driver.actions().sendKeys(_confirmPassword, confirmPassword).perform() 
    }

    async clickSignup() {
        await this.driver.findElement(By.xpath(this.btnSingupXpath)).click()
    }
}