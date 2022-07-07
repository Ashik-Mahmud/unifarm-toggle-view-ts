import React, { useState } from "react";
import View from "./View";
import ViewHeader from "./ViewHeader";

type Props = {};

const ViewContainer: React.FC = (props: Props) => {
  const [view, setView] = useState(false);
  return (
    <section>
      <div className="container">
        <ViewHeader view={view} setView={setView} />
        <View view={view} />
      </div>
    </section>
  );
};

export default ViewContainer;
