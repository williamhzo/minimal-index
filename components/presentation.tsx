import { FC } from "react";

type PresentationProps = {
  person: string;
};

export const Presentation: FC<PresentationProps> = ({ person }) => {
  return (
    <div>
      <h1>presentation</h1>
    </div>
  );
};
