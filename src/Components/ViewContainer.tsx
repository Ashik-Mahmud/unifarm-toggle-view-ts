import React from "react";
import View from "./View";
import ViewHeader from "./ViewHeader";

type Props = {};

const ViewContainer: React.FC = (props: Props) => {
  return (
    <section>
      <div className="container">
        <ViewHeader />
        <View />
      </div>
    </section>
  );
};

export default ViewContainer;
