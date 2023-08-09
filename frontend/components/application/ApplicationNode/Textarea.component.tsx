"use client";

import Txt from "@/components/common/Txt.component";
import {
  ApplicationNode,
  ApplicationTextarea,
} from "@/constants/application/type";
import { useLocalStorage } from "@/hooks/useLocalstorage.hook";
import { FC } from "react";

interface ApplicationTexareaProps {
  data: ApplicationNode;
}

const ApplicationTexarea: FC<ApplicationTexareaProps> = ({ data }) => {
  const textData = data as ApplicationTextarea;
  const [value, setValue] = useLocalStorage(textData.name, "");

  return (
    <>
      {textData.title && (
        <label>
          <Txt typography="h6">{`${textData.title}${
            textData.require ? "*" : ""
          }`}</Txt>
          {textData.subtitle && <Txt>{` ${textData.subtitle}`}</Txt>}
        </label>
      )}
      <textarea
        className="my-2 border rounded-lg p-4 w-full resize-none"
        rows={20}
        name={textData.name}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  );
};

export default ApplicationTexarea;
