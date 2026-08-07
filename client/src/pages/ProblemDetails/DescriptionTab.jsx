import React from "react";
import ProblemHeader from "../../components/problem/ProblemHeader";
import ProblemDescription from "../../components/problem/ProblemDescription";
import Examples from "../../components/problem/Examples";
import Constraints from "../../components/problem/Constraints";
import Hints from "../../components/problem/Hints";
import SimilarProblems from "../../components/problem/SimilarProblems";

function DescriptionTab() {
  return (
    <div className="space-y-6 text-text-primary">
      <ProblemHeader number={1} title="Two Sum" difficulty="Easy" />

      <ProblemDescription />

      <Examples />

      <Constraints />

      <Hints />

      <SimilarProblems />
    </div>
  );
}

export default DescriptionTab;
