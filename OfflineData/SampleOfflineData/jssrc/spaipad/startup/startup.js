//startup.js file
var appConfig = {
    appId: "OfflineDataApp",
    appName: "OfflineData",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "10.10.1.48",
    serverPort: "80",
    secureServerPort: "443",
    url: "http://10.10.1.48:80/middleware/MWServlet",
    secureurl: "https://10.10.1.48:443/middleware/MWServlet",
    middlewareContext: "middleware"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    initializehdrOne();
    initializeftrOne();
    kony.application.setAppHeaders([hbox192735980024418]);
    kony.application.setAppFooters([hbox192735980024368]);
    frmHomeGlobals();
    frmOfflineDataGlobals();
    frmWebSQLResultsGlobals();
};

function themeCallBack() {
    kony.application.setApplicationInitializationEvents({
        init: appInit,
        showstartupform: function() {
            frmHome.show();
        }
    });
};

function loadResources() {
    kony.theme.packagedthemes(
    ["default", "KonyTheme"]);
    globalhttpheaders = {};
    kony.theme.setCurrentTheme("KonyTheme", themeCallBack, themeCallBack);
};

function initializeApp() {
    kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: true
    })
    //If default locale is specified. This is set even before any other app life cycle event is called.
    loadResources();
};
kony.print = function() {
    return;
};