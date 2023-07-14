import { By, Builder } from 'selenium-webdriver';
import { expect } from 'chai';

import LoginBusiness from '../page_objects/loginBusiness.js';
import generateEmail from '../utilities/email_generator.js';
import base_URL from './test_config.js';
import sleep from '../utilities/sleep.js';

describe('Singup Business Page test 001', () => {
    it('The user should be able to create an account', async () => {
        let driver = new Builder().forBrowser('chrome').build();
        let loginB = new LoginBusiness(driver);

        try {
            driver.get(base_URL);
            await sleep(10);

            await loginB.setFirstName('Marcos');
            await loginB.setLasName('Prysthon');
            let genEmail = generateEmail();
            await loginB.setEmail(genEmail);
            await loginB.setPassword('Marquito123!');
            await loginB.setConfirmPassword('Marquito123!');
            await loginB.clickSignup();

            await sleep(5);
            let createTxt = await driver.findElement(By.xpath('//*[@id="layout-container"]/div/div[2]')).getText();
            expect(createTxt).to.equal('Create your free payever business account');
        } finally {
            await driver.quit();
        }
    })
})