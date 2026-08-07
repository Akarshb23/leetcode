import React from "react";
import Input from "../../components/common/Input";
import TextArea from "../../components/common/TextArea";
import Button from "../../components/common/Button";

function CreateProblem() {
  return (
    <div className="mx-auto max-w-[800px] px-6 py-6">
      <h1 className="text-[28px] font-semibold text-text-primary">
        Create Problem
      </h1>

      <form className="mt-5 space-y-4">
        <Input placeholder="Problem title" />

        <TextArea rows={6} placeholder="Problem description" />

        <Input placeholder="Tags (comma-separated)" />

        <div className="flex justify-end">
          <Button>Create</Button>
        </div>
      </form>
    </div>
  );
}

export default CreateProblem;
