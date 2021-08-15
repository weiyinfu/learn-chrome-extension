const DISPLAY = "display", SYSTEM = "system", DEFAULT = "default",
    DISPLAY_ICON = {path: {16: "icon/display_16.png", 24: "icon/display_24.png", 32: "icon/display_32.png"}},
    SYSTEM_ICON = {path: {16: "icon/system_16.png", 24: "icon/system_24.png", 32: "icon/system_32.png"}},
    DEFAULT_ICON = {path: {16: "icon/default_16.png", 24: "icon/default_24.png", 32: "icon/default_32.png"}},
    KV = {power: DEFAULT};

function updatePower(a) {
    let b;
    if (a === DISPLAY) {
        chrome.power.requestKeepAwake(a)
        b = DISPLAY_ICON
    } else if (a === SYSTEM) {
        chrome.power.requestKeepAwake(a)
        b = SYSTEM_ICON
    } else {
        chrome.power.releaseKeepAwake()
        b = DEFAULT_ICON
    }
    chrome.browserAction.setIcon(b);
    chrome.browserAction.setTitle({title: chrome.i18n.getMessage("opPower_" + a)})
}

function release(a) {
    updatePower(DEFAULT);
    chrome.browserAction.setBadgeText({text: ""});
    chrome.storage.local.set(KV)
}

function onCommand(a) {
    updatePower(a);
    chrome.storage.local.set({power: a})
}

var init = false;

function startup() {
    if (!init) {
        init = true;
        chrome.browserAction.setBadgeBackgroundColor({
            color: "#29B6F6"
        })
        chrome.storage.local.get(KV, function (a) {
            updatePower(a.power)
        })
        chrome.alarms.get(function (a) {
            a ? chrome.browserAction.setBadgeText({text: "\u29d7"}) : chrome.browserAction.setBadgeText({text: ""})
        })
    }
}

chrome.alarms.onAlarm.addListener(release);
chrome.commands.onCommand.addListener(onCommand);
chrome.runtime.onStartup.addListener(startup);
chrome.runtime.onInstalled.addListener(startup);
