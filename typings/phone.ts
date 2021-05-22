export const PHONE_NUMBER_REGEX = /^([0-9]{3}-[0-9]{4})|([0-9]{7})$/;

export enum PhoneEvents {
  UI_IS_READY = 'npwd:uiIsReady',
  PLAYER_IS_READY = 'npwd:playerIsReady',
  OPEN_APP_CONTACTS = 'npwd:app:CONTACTS',
  OPEN_APP_BANK = 'npwd:app:BANK',
  OPEN_APP_NOTES = 'npwd:app:NOTES',
  OPEN_APP_LISTINGS = 'npwd:app:MARKETPLACE',
  OPEN_APP_CAMERA = 'npwd:app:CAMERA',
  OPEN_APP_DAILER = 'npwd:app:DIALER',
  OPEN_PHONE = 'npwd:open',
  CLOSE_PHONE = 'npwd:close',
  SET_ALERT = 'npwd:setAlert',
  SET_NOTIFICATION = 'npwd:setNotification',
}
