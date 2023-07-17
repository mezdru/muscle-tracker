import React from "react";
import Router from "next/router";

export type TrainingItemProps = {
  id: string;
};

const TrainingItem: React.FC<{ trainingItem: TrainingItemProps }> = ({
  trainingItem,
}) => {
  return (
    <div
      onClick={() =>
        Router.push("/training/[id]", `/training/${trainingItem.id}`)
      }
    >
      item
    </div>
  );
};

export default TrainingItem;
