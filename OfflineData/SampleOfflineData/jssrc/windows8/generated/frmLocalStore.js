//Form JS File
function frmLocalStore_button1930040990143063_onClick_seq0(eventobject) {
    setItemvalues.call(this);
};

function frmLocalStore_button1930040990143161_onClick_seq0(eventobject) {
    getItemvalues.call(this);
};

function frmLocalStore_button1930040990143420_onClick_seq0(eventobject) {
    GetKey.call(this);
};

function frmLocalStore_button1930040990143570_onClick_seq0(eventobject) {
    RemoveItem.call(this);
};

function frmLocalStore_button1930040990144455_onClick_seq0(eventobject) {
    ClearItem.call(this);
};

function addWidgetsfrmLocalStore() {
    var frmLocalLblSetItem = new kony.ui.Label({
        "id": "frmLocalLblSetItem",
        "isVisible": true,
        "text": "Please enter Key,Values",
        "skin": "lblBlackFont"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 32
    }, {});
    var frmLocalTxtSet1 = new kony.ui.TextBox2({
        "id": "frmLocalTxtSet1",
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": "Key",
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "skin": "tbx2Normal",
        "focusSkin": "tbx2Focus"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 48
    }, {
        "autoFilter": false
    });
    var frmLocalTxtSet2 = new kony.ui.TextBox2({
        "id": "frmLocalTxtSet2",
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": "Value",
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "skin": "tbx2Normal",
        "focusSkin": "tbx2Focus"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [2, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 52
    }, {
        "autoFilter": false
    });
    var hbox1930040990143059 = new kony.ui.Box({
        "id": "hbox1930040990143059",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 32,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "vExpand": false,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1930040990143059.add(
    frmLocalTxtSet1, frmLocalTxtSet2);
    var button1930040990143063 = new kony.ui.Button({
        "id": "button1930040990143063",
        "isVisible": true,
        "text": "SetItem",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmLocalStore_button1930040990143063_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 1, 0, 1],
        "displayText": true,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {});
    var hbox1930040990143060 = new kony.ui.Box({
        "id": "hbox1930040990143060",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 30,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "vExpand": false,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1930040990143060.add(
    button1930040990143063);
    var vbox1930040990143057 = new kony.ui.Box({
        "id": "vbox1930040990143057",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 100,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "vExpand": false,
        "hExpand": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox1930040990143057.add(
    frmLocalLblSetItem, hbox1930040990143059, hbox1930040990143060);
    var hbox1930040990143056 = new kony.ui.Box({
        "id": "hbox1930040990143056",
        "isVisible": true,
        "skin": "hBoxRoundBorder",
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 39,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [2, 2, 2, 2],
        "padding": [1, 1, 1, 1],
        "vExpand": false,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1930040990143056.add(
    vbox1930040990143057);
    var label1930040990143153 = new kony.ui.Label({
        "id": "label1930040990143153",
        "isVisible": true,
        "text": "Please enter the key to read the value",
        "skin": "lblBlackFont"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 28
    }, {});
    var frmLocalTxtGet1 = new kony.ui.TextBox2({
        "id": "frmLocalTxtGet1",
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": "Key",
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "skin": "tbx2Normal",
        "focusSkin": "tbx2Focus"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 2, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 49
    }, {
        "autoFilter": false
    });
    var frmLocalLblGet1 = new kony.ui.Label({
        "id": "frmLocalLblGet1",
        "isVisible": true,
        "text": null,
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [2, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 51
    }, {});
    var hbox1930040990143155 = new kony.ui.Box({
        "id": "hbox1930040990143155",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 38,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "vExpand": false,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1930040990143155.add(
    frmLocalTxtGet1, frmLocalLblGet1);
    var button1930040990143161 = new kony.ui.Button({
        "id": "button1930040990143161",
        "isVisible": true,
        "text": "GetItem",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmLocalStore_button1930040990143161_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 1, 0, 1],
        "displayText": true,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {});
    var hbox1930040990143159 = new kony.ui.Box({
        "id": "hbox1930040990143159",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 34,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "vExpand": false,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1930040990143159.add(
    button1930040990143161);
    var vbox1930040990143151 = new kony.ui.Box({
        "id": "vbox1930040990143151",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 100,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "vExpand": false,
        "hExpand": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox1930040990143151.add(
    label1930040990143153, hbox1930040990143155, hbox1930040990143159);
    var hbox1930040990143149 = new kony.ui.Box({
        "id": "hbox1930040990143149",
        "isVisible": true,
        "skin": "hBoxRoundBorder",
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 36,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [2, 2, 2, 2],
        "padding": [1, 1, 1, 1],
        "vExpand": false,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1930040990143149.add(
    vbox1930040990143151);
    var vbox19282536857713 = new kony.ui.Box({
        "id": "vbox19282536857713",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 20,
        "margin": [1, 1, 1, 1],
        "padding": [1, 1, 1, 1],
        "vExpand": false,
        "hExpand": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": true,
        "paddingInPixel": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox19282536857713.add(
    hbox1930040990143056, hbox1930040990143149);
    var label1930040990143411 = new kony.ui.Label({
        "id": "label1930040990143411",
        "isVisible": true,
        "text": "Please enter the index to read the key",
        "skin": "lblBlackFont"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 27
    }, {});
    var frmLocalTxtGetKey1 = new kony.ui.TextBox2({
        "id": "frmLocalTxtGetKey1",
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": "Index",
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "skin": "tbx2Normal",
        "focusSkin": "tbx2Focus"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 2, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 49
    }, {
        "autoFilter": false
    });
    var frmLocalLblGetKey1 = new kony.ui.Label({
        "id": "frmLocalLblGetKey1",
        "isVisible": true,
        "text": null,
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [2, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 51
    }, {});
    var hbox1930040990143413 = new kony.ui.Box({
        "id": "hbox1930040990143413",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 38,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "vExpand": false,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1930040990143413.add(
    frmLocalTxtGetKey1, frmLocalLblGetKey1);
    var button1930040990143420 = new kony.ui.Button({
        "id": "button1930040990143420",
        "isVisible": true,
        "text": "Read key",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmLocalStore_button1930040990143420_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 1, 0, 1],
        "displayText": true,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {});
    var hbox1930040990143418 = new kony.ui.Box({
        "id": "hbox1930040990143418",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 35,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "vExpand": false,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1930040990143418.add(
    button1930040990143420);
    var vbox1930040990143409 = new kony.ui.Box({
        "id": "vbox1930040990143409",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 100,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "vExpand": false,
        "hExpand": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox1930040990143409.add(
    label1930040990143411, hbox1930040990143413, hbox1930040990143418);
    var hbox1930040990143407 = new kony.ui.Box({
        "id": "hbox1930040990143407",
        "isVisible": true,
        "skin": "hBoxRoundBorder",
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 47,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [2, 2, 2, 2],
        "padding": [1, 1, 1, 1],
        "vExpand": false,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1930040990143407.add(
    vbox1930040990143409);
    var label1930040990143561 = new kony.ui.Label({
        "id": "label1930040990143561",
        "isVisible": true,
        "text": "Please enter the key to delete the item",
        "skin": "lblBlackFont"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 27
    }, {});
    var frmLocalTxtIndex = new kony.ui.TextBox2({
        "id": "frmLocalTxtIndex",
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": "Key",
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "skin": "tbx2Normal",
        "focusSkin": "tbx2Focus"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 2, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 39
    }, {
        "autoFilter": false
    });
    var frmLocalLblIndex = new kony.ui.Label({
        "id": "frmLocalLblIndex",
        "isVisible": true,
        "text": null,
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [2, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 43
    }, {});
    var hbox1930040990143563 = new kony.ui.Box({
        "id": "hbox1930040990143563",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 38,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "vExpand": false,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1930040990143563.add(
    frmLocalTxtIndex, frmLocalLblIndex);
    var button1930040990143570 = new kony.ui.Button({
        "id": "button1930040990143570",
        "isVisible": true,
        "text": "RemoveItem",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmLocalStore_button1930040990143570_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 1, 0, 1],
        "displayText": true,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 82
    }, {});
    var hbox1930040990143568 = new kony.ui.Box({
        "id": "hbox1930040990143568",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 35,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "vExpand": false,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1930040990143568.add(
    button1930040990143570);
    var vbox1930040990143559 = new kony.ui.Box({
        "id": "vbox1930040990143559",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 100,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "vExpand": false,
        "hExpand": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox1930040990143559.add(
    label1930040990143561, hbox1930040990143563, hbox1930040990143568);
    var hbox1930040990143557 = new kony.ui.Box({
        "id": "hbox1930040990143557",
        "isVisible": true,
        "skin": "hBoxRoundBorder",
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 47,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [2, 2, 2, 2],
        "padding": [1, 1, 1, 1],
        "vExpand": false,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1930040990143557.add(
    vbox1930040990143559);
    var vbox19282536857707 = new kony.ui.Box({
        "id": "vbox19282536857707",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 20,
        "margin": [1, 1, 1, 1],
        "padding": [1, 1, 1, 1],
        "vExpand": false,
        "hExpand": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": true,
        "paddingInPixel": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox19282536857707.add(
    hbox1930040990143407, hbox1930040990143557);
    var label1930040990144446 = new kony.ui.Label({
        "id": "label1930040990144446",
        "isVisible": true,
        "text": "Delete all items in the local store",
        "skin": "lblBlackFont"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 22
    }, {});
    var lblLocalClear = new kony.ui.Label({
        "id": "lblLocalClear",
        "isVisible": true,
        "text": null,
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 22
    }, {});
    var button1930040990144455 = new kony.ui.Button({
        "id": "button1930040990144455",
        "isVisible": true,
        "text": "Clear",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmLocalStore_button1930040990144455_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 1, 0, 1],
        "displayText": true,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {});
    var hbox1930040990144453 = new kony.ui.Box({
        "id": "hbox1930040990144453",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 30,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "vExpand": false,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1930040990144453.add(
    button1930040990144455);
    var vbox1930040990144444 = new kony.ui.Box({
        "id": "vbox1930040990144444",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 100,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "vExpand": false,
        "hExpand": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox1930040990144444.add(
    label1930040990144446, lblLocalClear, hbox1930040990144453);
    var hbox1930040990144442 = new kony.ui.Box({
        "id": "hbox1930040990144442",
        "isVisible": true,
        "skin": "hBoxRoundBorder",
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 44,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [2, 2, 2, 2],
        "padding": [1, 1, 1, 1],
        "vExpand": false,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1930040990144442.add(
    vbox1930040990144444);
    var vbox19282536857111 = new kony.ui.Box({
        "id": "vbox19282536857111",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 20,
        "margin": [1, 1, 1, 1],
        "padding": [1, 1, 1, 1],
        "vExpand": false,
        "hExpand": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": true,
        "paddingInPixel": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox19282536857111.add(
    hbox1930040990144442);
    var vbox19282536856788 = new kony.ui.Box({
        "id": "vbox19282536856788",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 20,
        "margin": [1, 1, 1, 1],
        "padding": [1, 1, 1, 1],
        "vExpand": false,
        "hExpand": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": true,
        "paddingInPixel": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox19282536856788.add();
    var vbox19282536858391 = new kony.ui.Box({
        "id": "vbox19282536858391",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 20,
        "margin": [1, 1, 1, 1],
        "padding": [1, 1, 1, 1],
        "vExpand": false,
        "hExpand": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": true,
        "paddingInPixel": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbox19282536858391.add();
    var hbxMain = new kony.ui.Box({
        "id": "hbxMain",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 57,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [8, 1, 5, 1],
        "padding": [1, 1, 1, 1],
        "vExpand": false,
        "hExpand": true,
        "marginInPixel": false,
        "paddingInPixel": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxMain.add(
    vbox19282536857713, vbox19282536857707, vbox19282536857111, vbox19282536856788, vbox19282536858391);
    frmLocalStore.add(
    hbxMain);
};

function frmLocalStoreGlobals() {
    var MenuId = [];
    frmLocalStore = new kony.ui.Form2({
        "id": "frmLocalStore",
        "title": "Local store",
        "enabledForIdleTimeout": false,
        "type": constants.FORM_TYPE_NATIVE,
        "skin": "frm",
        "needAppMenu": true,
        "addWidgets": addWidgetsfrmLocalStore
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "layout": constants.Horizontal,
        "titleBar": true,
        "showBackButton": true,
        "directChildrenIDs": ["label12953670131523", "labelFormOptions123", "hbxMain", "vbox19282536856788", "vbox19282536857111", "hbox1930040990144442", "vbox1930040990144444", "label1930040990144446", "lblLocalClear", "hbox1930040990144453", "button1930040990144455", "vbox19282536857707", "hbox1930040990143407", "vbox1930040990143409", "label1930040990143411", "hbox1930040990143413", "frmLocalTxtGetKey1", "frmLocalLblGetKey1", "hbox1930040990143418", "button1930040990143420", "hbox1930040990143557", "vbox1930040990143559", "label1930040990143561", "hbox1930040990143563", "frmLocalTxtIndex", "frmLocalLblIndex", "hbox1930040990143568", "button1930040990143570", "vbox19282536857713", "hbox1930040990143056", "vbox1930040990143057", "frmLocalLblSetItem", "hbox1930040990143059", "frmLocalTxtSet1", "frmLocalTxtSet2", "hbox1930040990143060", "button1930040990143063", "hbox1930040990143149", "vbox1930040990143151", "label1930040990143153", "hbox1930040990143155", "frmLocalTxtGet1", "frmLocalLblGet1", "hbox1930040990143159", "button1930040990143161", "vbox19282536858391"],
        "viewConfig": {
            "referenceHeight": 0,
            "referenceWidth": 0
        }
    });
};