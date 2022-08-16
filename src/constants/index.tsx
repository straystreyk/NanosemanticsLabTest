import { MessageType } from "../types";
import * as React from "react";

export const API_CONNECTION_STRING =
  "https://biz.nanosemantics.ru/api/bat/nkd/json/Chat";
export const UUID = "772c9859-4dd3-4a0d-b87d-d76b9f43cfa4";
export const SAY_HELLO_EVENT = "00b2fcbe-f27f-437b-a0d5-91072d840ed3";

export const updateStorage = (newArray: MessageType[]) => {
  localStorage.setItem("messages", JSON.stringify(newArray));
};

export const Icon = ({ className }: { className?: string }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <line
      x1="17.3551"
      y1="4.46885"
      x2="17.3551"
      y2="7.16885"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
    />
    <line
      x1="0.65"
      y1="-0.65"
      x2="3.35"
      y2="-0.65"
      transform="matrix(1 -8.63605e-08 -8.63605e-08 -1 14 6.51953)"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
    />
    <path
      d="M17.3231 10.6629C17.679 10.6951 17.944 11.0104 17.8831 11.3625C17.5914 13.0504 16.7641 14.6065 15.515 15.7952C14.1091 17.1331 12.2649 17.9143 10.3257 17.9934C8.38664 18.0724 6.48492 17.4438 4.97485 16.2248C3.46478 15.0057 2.44934 13.2793 2.11768 11.3671C1.78603 9.45498 2.16077 7.48745 3.17211 5.83107C4.18345 4.1747 5.76242 2.94243 7.61488 2.36382C9.46734 1.78522 11.467 1.89973 13.2413 2.68603C14.8177 3.38464 16.1208 4.57126 16.9638 6.06236C17.1397 6.37337 16.9964 6.75951 16.6722 6.90967C16.348 7.05983 15.9661 6.91675 15.7854 6.60852C15.0776 5.40114 14.0064 4.44031 12.7171 3.8689C11.2297 3.20977 9.55348 3.11378 8.00062 3.59881C6.44776 4.08384 5.12416 5.11681 4.27638 6.5053C3.4286 7.8938 3.11446 9.54312 3.39248 11.146C3.6705 12.749 4.52171 14.1962 5.78756 15.2181C7.05341 16.24 8.64756 16.7669 10.2731 16.7006C11.8986 16.6344 13.4446 15.9795 14.6231 14.858C15.6447 13.8858 16.3298 12.6203 16.5896 11.2451C16.6559 10.894 16.9673 10.6307 17.3231 10.6629Z"
      fill="currentColor"
    />
  </svg>
);
