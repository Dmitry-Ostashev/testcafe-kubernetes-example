import { Selector } from 'testcafe';

fixture`A set of examples that illustrate how to use TestCafe API`
    .page`http://devexpress.github.io/testcafe/example/`;


const developerName = Selector('#incorrect-element-id');

test('How to type text into an input (t.typeText user action)', async t => {
    await t
        .typeText(developerName, 'Peter')
        .typeText(developerName, 'Paker', { replace: true })
        .typeText(developerName, 'r', { caretPos: 2 })
        .expect(developerName.value).eql('Parker');
});