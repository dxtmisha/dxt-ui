// md5:9da1ecd3712bf6eaf746701bb9a9a64f true
export type UiFigmaMessengerCallback<Message = any> = (message: Message) => void;

export type UiFigmaMessengerCallbackItem<Message = any> = {
  callback: UiFigmaMessengerCallback<Message>;
  once: boolean;
};

export type UiFigmaMessengerItem = {
  type: string;
  callbackList: UiFigmaMessengerCallbackItem[];
};

export type UiFigmaMessengerList = Record<string, UiFigmaMessengerItem>;

/** Message payload transmitted between Figma plugin and UI. @keywords figma, messenger, payload, event */
export type UiFigmaMessengerData<Message = any> = {
  code: string;
  type: string;
  message?: Message;
};