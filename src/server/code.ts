export const doGet = (): GoogleAppsScript.HTML.HtmlOutput => {
  return HtmlService.createTemplateFromFile('index').evaluate()
    .setSandboxMode(HtmlService.SandboxMode.IFRAME)
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setTitle('React + GAS');
}
