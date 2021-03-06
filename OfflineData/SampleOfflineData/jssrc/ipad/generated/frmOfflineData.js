//Form JS File
function frmOfflineData_frmOfflineData_init_seq0(eventobject, neworientation) {
    preShow_frmOfflineData.call(this);
};

function frmOfflineData_frmOfflineData_preshow_seq0(eventobject, neworientation) {
    /* 
preShow_frmOfflineData.call(this);

 */
};

function frmOfflineData_segMenu_onRowClick_seq0(eventobject, sectionNumber, rowNumber) {
    onClickSegRow.call(this);
};

function frmOfflineData_btnSetItem_onClick_seq0(eventobject) {
    setItemvalues_Tablet.call(this);
};

function frmOfflineData_btnGetItem_onClick_seq0(eventobject) {
    getItemvalues_Tab.call(this);
};

function frmOfflineData_btnReadKey_onClick_seq0(eventobject) {
    GetKey_Tablet.call(this);
};

function frmOfflineData_btnRemoveItem_onClick_seq0(eventobject) {
    RemoveItem_Tablet.call(this);
};

function frmOfflineData_btnClear_onClick_seq0(eventobject) {
    ClearItem_Tablet.call(this);
};

function frmOfflineData_btnCreateDB_onClick_seq0(eventobject) {
    createDB_Tablet.call(this);
};

function frmOfflineData_btnInsertData_onClick_seq0(eventobject) {
    doTransactioninsertData_Table.call(this);
};

function frmOfflineData_btnShowData_onClick_seq0(eventobject) {
    doTransactionsqlSelect_Tablet.call(this);
};

function frmOfflineData_btnUpdateData_onClick_seq0(eventobject) {
    doTransactionUpdate_Tablet.call(this);
};

function frmOfflineData_btnDeleteData_onClick_seq0(eventobject) {
    doTransactionDelete_Tablet.call(this);
};

function addWidgetsfrmOfflineData() {
    var segMenubox = new kony.ui.Box({
        "id": "segMenubox",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": 92
    }, {});
    var segMenu = new kony.ui.SegmentedUI2({
        "id": "segMenu",
        "isVisible": true,
        "retainSelection": true,
        "widgetDataMap": {
            "lblMenu": "lblMenu"
        },
        "rowTemplate": segMenubox,
        "widgetSkin": "sknSeg2NormalSampleApp",
        "rowSkin": "sknSeg2NormalSampleApp",
        "rowFocusSkin": "sknSeg2FocusSampleApp",
        "separatorRequired": true,
        "separatorThickness": 1,
        "separatorColor": "64646400",
        "showScrollbars": false,
        "groupCells": false,
        "screenLevelWidget": false,
        "onRowClick": frmOfflineData_segMenu_onRowClick_seq0,
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW
    }, {
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 10],
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 92
    }, {
        "indicator": constants.SEGUI_ROW_SELECT,
        "enableDictionary": false,
        "showProgressIndicator": true,
        "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
        "bounces": true,
        "editStyle": constants.SEGUI_EDITING_STYLE_NONE
    });
    var lblMenu = new kony.ui.Label({
        "id": "lblMenu",
        "isVisible": true,
        "skin": "sknLblGreyFont"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [2, 2, 2, 2],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 8
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    segMenubox.add(
    lblMenu);
    var scbMenu = new kony.ui.ScrollBox({
        "id": "scbMenu",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "scrollDirection": constants.SCROLLBOX_SCROLL_VERTICAL,
        "showScrollbars": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "enableScrollByPage": false
    }, {
        "percent": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "containerHeight": 100,
        "containerHeightReference": constants.SCROLLBOX_HEIGHT_BY_FORM_REFERENCE,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {});
    scbMenu.add(
    segMenu);
    var hbxMenu = new kony.ui.Box({
        "id": "hbxMenu",
        "isVisible": true,
        "skin": "sknHbxGreyBG",
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 80,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxMenu.add(
    scbMenu);
    var vbxMenu = new kony.ui.Box({
        "id": "vbxMenu",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 33,
        "margin": [0, 0, 0, 0],
        "vExpand": false,
        "hExpand": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbxMenu.add(
    hbxMenu);
    var lblSetItem = new kony.ui.Label({
        "id": "lblSetItem",
        "isVisible": true,
        "text": "Please enter Key,Values",
        "skin": "sknlblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 30
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var txtSetItemkey = new kony.ui.TextBox2({
        "id": "txtSetItemkey",
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": "Key",
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "skin": "sknTbx2NormalSampleApp",
        "focusSkin": "sknTbx2FocusSampleApp"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 47
    }, {
        "pasteboardType": constants.TEXTBOX_PASTE_BOARD_TYPE_NO_PASTE_BOARD,
        "showClearButton": true,
        "showProgressIndicator": true,
        "leftViewImage": null,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
        "showCloseButton": true,
        "closeButtonText": "Done",
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT,
        "placeholderSkin": "sknTxb2PlaceHolder"
    });
    var txtSetItemValue = new kony.ui.TextBox2({
        "id": "txtSetItemValue",
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": "Value",
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "skin": "sknTbx2NormalSampleApp",
        "focusSkin": "sknTbx2FocusSampleApp"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [2, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 53
    }, {
        "pasteboardType": constants.TEXTBOX_PASTE_BOARD_TYPE_NO_PASTE_BOARD,
        "showClearButton": true,
        "showProgressIndicator": true,
        "leftViewImage": null,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
        "showCloseButton": true,
        "closeButtonText": "Done",
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT,
        "placeholderSkin": "sknTxb2PlaceHolder"
    });
    var hbxSetItemKeyValue = new kony.ui.Box({
        "id": "hbxSetItemKeyValue",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 41,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxSetItemKeyValue.add(
    txtSetItemkey, txtSetItemValue);
    var btnSetItem = new kony.ui.Button({
        "id": "btnSetItem",
        "isVisible": true,
        "text": "SetItem",
        "skin": "sknBtnNormalSampleApp",
        "focusSkin": "sknBtnFocusSampleApp",
        "onClick": frmOfflineData_btnSetItem_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var hbxSetItemBtn = new kony.ui.Box({
        "id": "hbxSetItemBtn",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 29,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxSetItemBtn.add(
    btnSetItem);
    var vbxSetItem = new kony.ui.Box({
        "id": "vbxSetItem",
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
    vbxSetItem.add(
    lblSetItem, hbxSetItemKeyValue, hbxSetItemBtn);
    var hbxSetItem = new kony.ui.Box({
        "id": "hbxSetItem",
        "isVisible": true,
        "skin": "sknHbxWhiteBorder",
        "focusSkin": "sknHbxWhiteBorder",
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 17,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [4, 0, 4, 5],
        "padding": [1, 1, 1, 1],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxSetItem.add(
    vbxSetItem);
    var lblGetItem = new kony.ui.Label({
        "id": "lblGetItem",
        "isVisible": true,
        "text": "Please enter the key to read the value",
        "skin": "sknlblNormal"
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
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var txtGetItemKey = new kony.ui.TextBox2({
        "id": "txtGetItemKey",
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": "Key",
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "skin": "sknTbx2NormalSampleApp",
        "focusSkin": "sknTbx2FocusSampleApp"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 2, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 47
    }, {
        "pasteboardType": constants.TEXTBOX_PASTE_BOARD_TYPE_NO_PASTE_BOARD,
        "showClearButton": true,
        "showProgressIndicator": true,
        "leftViewImage": null,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
        "showCloseButton": true,
        "closeButtonText": "Done",
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT,
        "placeholderSkin": "sknTxb2PlaceHolder"
    });
    var lblGetItemMessage = new kony.ui.Label({
        "id": "lblGetItemMessage",
        "isVisible": true,
        "text": null,
        "skin": "sknlblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [2, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 53
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
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
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbox1930040990143155.add(
    txtGetItemKey, lblGetItemMessage);
    var btnGetItem = new kony.ui.Button({
        "id": "btnGetItem",
        "isVisible": true,
        "text": "GetItem",
        "skin": "sknBtnNormalSampleApp",
        "focusSkin": "sknBtnFocusSampleApp",
        "onClick": frmOfflineData_btnGetItem_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var hbxGetItemBtn = new kony.ui.Box({
        "id": "hbxGetItemBtn",
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
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxGetItemBtn.add(
    btnGetItem);
    var vbxGetItem = new kony.ui.Box({
        "id": "vbxGetItem",
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
    vbxGetItem.add(
    lblGetItem, hbox1930040990143155, hbxGetItemBtn);
    var hbxGetItem = new kony.ui.Box({
        "id": "hbxGetItem",
        "isVisible": true,
        "skin": "sknHbxWhiteBorder",
        "focusSkin": "sknHbxWhiteBorder",
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 18,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [4, 0, 4, 5],
        "padding": [1, 1, 1, 1],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxGetItem.add(
    vbxGetItem);
    var lblReadKey = new kony.ui.Label({
        "id": "lblReadKey",
        "isVisible": true,
        "text": "Please enter the index to read the key",
        "skin": "sknlblNormal"
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
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var txtReadKeyIndex = new kony.ui.TextBox2({
        "id": "txtReadKeyIndex",
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": "Index",
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "skin": "sknTbx2NormalSampleApp",
        "focusSkin": "sknTbx2FocusSampleApp"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 2, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 47
    }, {
        "pasteboardType": constants.TEXTBOX_PASTE_BOARD_TYPE_NO_PASTE_BOARD,
        "showClearButton": true,
        "showProgressIndicator": true,
        "leftViewImage": null,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
        "showCloseButton": true,
        "closeButtonText": "Done",
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT,
        "placeholderSkin": "sknTxb2PlaceHolder"
    });
    var lblReadKeyMessage = new kony.ui.Label({
        "id": "lblReadKeyMessage",
        "isVisible": true,
        "text": null,
        "skin": "sknlblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [2, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 53
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var hbxReadKeyIndex = new kony.ui.Box({
        "id": "hbxReadKeyIndex",
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
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxReadKeyIndex.add(
    txtReadKeyIndex, lblReadKeyMessage);
    var btnReadKey = new kony.ui.Button({
        "id": "btnReadKey",
        "isVisible": true,
        "text": "Read key",
        "skin": "sknBtnNormalSampleApp",
        "focusSkin": "sknBtnFocusSampleApp",
        "onClick": frmOfflineData_btnReadKey_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var hbxReadKeyBtn = new kony.ui.Box({
        "id": "hbxReadKeyBtn",
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
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxReadKeyBtn.add(
    btnReadKey);
    var vbxReadKey = new kony.ui.Box({
        "id": "vbxReadKey",
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
    vbxReadKey.add(
    lblReadKey, hbxReadKeyIndex, hbxReadKeyBtn);
    var hbxReadKey = new kony.ui.Box({
        "id": "hbxReadKey",
        "isVisible": true,
        "skin": "sknHbxWhiteBorder",
        "focusSkin": "sknHbxWhiteBorder",
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 23,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [4, 0, 4, 5],
        "padding": [1, 1, 1, 1],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxReadKey.add(
    vbxReadKey);
    var lblRemoveItem = new kony.ui.Label({
        "id": "lblRemoveItem",
        "isVisible": true,
        "text": "Please enter the key to delete the item",
        "skin": "sknlblNormal"
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
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var txtRemoveItemKey = new kony.ui.TextBox2({
        "id": "txtRemoveItemKey",
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": "Key",
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "skin": "sknTbx2NormalSampleApp",
        "focusSkin": "sknTbx2FocusSampleApp"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 2, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 47
    }, {
        "pasteboardType": constants.TEXTBOX_PASTE_BOARD_TYPE_NO_PASTE_BOARD,
        "showClearButton": true,
        "showProgressIndicator": true,
        "leftViewImage": null,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
        "showCloseButton": true,
        "closeButtonText": "Done",
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT,
        "placeholderSkin": "sknTxb2PlaceHolder"
    });
    var lblRemoveItemMessage = new kony.ui.Label({
        "id": "lblRemoveItemMessage",
        "isVisible": true,
        "text": null,
        "skin": "sknlblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [2, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 53
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var hbxRemoveItemKey = new kony.ui.Box({
        "id": "hbxRemoveItemKey",
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
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxRemoveItemKey.add(
    txtRemoveItemKey, lblRemoveItemMessage);
    var btnRemoveItem = new kony.ui.Button({
        "id": "btnRemoveItem",
        "isVisible": true,
        "text": "RemoveItem",
        "skin": "sknBtnNormalSampleApp",
        "focusSkin": "sknBtnFocusSampleApp",
        "onClick": frmOfflineData_btnRemoveItem_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var hbxRemoveItemBtn = new kony.ui.Box({
        "id": "hbxRemoveItemBtn",
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
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxRemoveItemBtn.add(
    btnRemoveItem);
    var vbxRemoveItem = new kony.ui.Box({
        "id": "vbxRemoveItem",
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
    vbxRemoveItem.add(
    lblRemoveItem, hbxRemoveItemKey, hbxRemoveItemBtn);
    var hbxRemoveItem = new kony.ui.Box({
        "id": "hbxRemoveItem",
        "isVisible": true,
        "skin": "sknHbxWhiteBorder",
        "focusSkin": "sknHbxWhiteBorder",
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 23,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [4, 0, 4, 5],
        "padding": [1, 1, 1, 1],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxRemoveItem.add(
    vbxRemoveItem);
    var lblClear = new kony.ui.Label({
        "id": "lblClear",
        "isVisible": true,
        "text": "Delete all items in the local store",
        "skin": "sknlblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 30
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblClearMessage = new kony.ui.Label({
        "id": "lblClearMessage",
        "isVisible": true,
        "text": null,
        "skin": "sknlblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 30
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var btnClear = new kony.ui.Button({
        "id": "btnClear",
        "isVisible": true,
        "text": "Clear",
        "skin": "sknBtnNormalSampleApp",
        "focusSkin": "sknBtnFocusSampleApp",
        "onClick": frmOfflineData_btnClear_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var hbxClearBtn = new kony.ui.Box({
        "id": "hbxClearBtn",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 40,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxClearBtn.add(
    btnClear);
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
    lblClear, lblClearMessage, hbxClearBtn);
    var hbxClear = new kony.ui.Box({
        "id": "hbxClear",
        "isVisible": true,
        "skin": "sknHbxWhiteBorder",
        "focusSkin": "sknHbxWhiteBorder",
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 18,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [4, 0, 4, 5],
        "padding": [1, 1, 1, 1],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxClear.add(
    vbox1930040990144444);
    var vbxLocalStoreMain = new kony.ui.Box({
        "id": "vbxLocalStoreMain",
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
    vbxLocalStoreMain.add(
    hbxSetItem, hbxGetItem, hbxReadKey, hbxRemoveItem, hbxClear);
    var hbxLocalStoreMain = new kony.ui.Box({
        "id": "hbxLocalStoreMain",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 101,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxLocalStoreMain.add(
    vbxLocalStoreMain);
    var scbLocalStore = new kony.ui.ScrollBox({
        "id": "scbLocalStore",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL,
        "scrollDirection": constants.SCROLLBOX_SCROLL_VERTICAL,
        "showScrollbars": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "enableScrollByPage": false
    }, {
        "percent": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 0, 0, 0],
        "containerHeight": 100,
        "containerHeightReference": constants.SCROLLBOX_HEIGHT_BY_FORM_REFERENCE,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {});
    scbLocalStore.add(
    hbxLocalStoreMain);
    var hbxLocalStore = new kony.ui.Box({
        "id": "hbxLocalStore",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 45,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxLocalStore.add(
    scbLocalStore);
    var btnCreateDB = new kony.ui.Button({
        "id": "btnCreateDB",
        "isVisible": true,
        "text": "Create database",
        "skin": "sknBtnNormalSampleApp",
        "focusSkin": "sknBtnFocusSampleApp",
        "onClick": frmOfflineData_btnCreateDB_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 2, 4, 0],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 11
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var btnInsertData = new kony.ui.Button({
        "id": "btnInsertData",
        "isVisible": true,
        "text": "Insert data",
        "skin": "sknBtnNormalSampleApp",
        "focusSkin": "sknBtnFocusSampleApp",
        "onClick": frmOfflineData_btnInsertData_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 5, 4, 0],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 11
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var btnShowData = new kony.ui.Button({
        "id": "btnShowData",
        "isVisible": true,
        "text": "Show data",
        "skin": "sknBtnNormalSampleApp",
        "focusSkin": "sknBtnFocusSampleApp",
        "onClick": frmOfflineData_btnShowData_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 5, 4, 0],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 11
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var btnUpdateData = new kony.ui.Button({
        "id": "btnUpdateData",
        "isVisible": true,
        "text": "Update data",
        "skin": "sknBtnNormalSampleApp",
        "focusSkin": "sknBtnFocusSampleApp",
        "onClick": frmOfflineData_btnUpdateData_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 5, 4, 0],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 11
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var btnDeleteData = new kony.ui.Button({
        "id": "btnDeleteData",
        "isVisible": true,
        "text": "Delete data",
        "skin": "sknBtnNormalSampleApp",
        "focusSkin": "sknBtnFocusSampleApp",
        "onClick": frmOfflineData_btnDeleteData_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 5, 4, 0],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 11
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var lblSqlUpdate = new kony.ui.Label({
        "id": "lblSqlUpdate",
        "isVisible": true,
        "text": null,
        "skin": "sknlblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 5, 4, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 11
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var vbxWebSQL = new kony.ui.Box({
        "id": "vbxWebSQL",
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
    vbxWebSQL.add(
    btnCreateDB, btnInsertData, btnShowData, btnUpdateData, btnDeleteData, lblSqlUpdate);
    var hbxWebSQL = new kony.ui.Box({
        "id": "hbxWebSQL",
        "isVisible": false,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 55,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxWebSQL.add(
    vbxWebSQL);
    var vbxLocalStore = new kony.ui.Box({
        "id": "vbxLocalStore",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 67,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "vExpand": false,
        "hExpand": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vbxLocalStore.add(
    hbxLocalStore, hbxWebSQL);
    var hbxOfflineData = new kony.ui.Box({
        "id": "hbxOfflineData",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 100,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "vExpand": false,
        "marginInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxOfflineData.add(
    vbxMenu, vbxLocalStore);
    frmOfflineData.add(
    hbxOfflineData);
};

function frmOfflineDataGlobals() {
    var MenuId = [];
    frmOfflineData = new kony.ui.Form2({
        "id": "frmOfflineData",
        "title": "Offline Data",
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "type": constants.FORM_TYPE_NATIVE,
        "skin": "sknFrmFormBgImg",
        "init": frmOfflineData_frmOfflineData_init_seq0,
        "preShow": frmOfflineData_frmOfflineData_preshow_seq0,
        "addWidgets": addWidgetsfrmOfflineData
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "needsIndicatorDuringPostShow": true,
        "formTransparencyDuringPostShow": "100",
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_DEFAULT,
        "titleBar": true,
        "titleBarSkin": "sknTitleBarSampleApp",
        "titleBarConfig": {
            "renderTitleText": true
        },
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        },
        "outTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        }
    });
};