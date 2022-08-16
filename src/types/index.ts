type ResulApiType = {
  cuid: string;
  text: {
    delay: number;
    showRate: boolean;
    value: string;
  };
};

export type MessageType = {
  id: number;
  text: string;
  from: "bot" | "user";
};

export interface RequestApiData {
  result: ResulApiType;
  id: string;
}

export interface InitApiData extends Omit<RequestApiData, "result"> {
  result: Omit<ResulApiType, "text">;
}
