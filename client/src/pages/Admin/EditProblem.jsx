import React from "react";
import { useParams } from "react-router-dom";
import Input from "../../components/common/Input";
import TextArea from "../../components/common/TextArea";
import Button from "../../components/common/Button";

function EditProblem() {
  const { id } = useParams();

  return (
    <div className="mx-auto max-w-[800px] px-6 py-6">
      <h1 className="text-[28px] font-semibold text-text-primary">
        Edit Problem {id}
      </h1>

      <form className="mt-5 space-y-4">
        <Input placeholder="Problem title" defaultValue="Two Sum" />

        <TextArea rows={6} placeholder="Problem description" />

        <Input placeholder="Tags" defaultValue="Array, Hash Table" />

        <div className="flex justify-end gap-2">
          <Button variant="secondary">Cancel</Button>
          <Button>Save</Button>
        </div>
      </form>
    </div>
  );
}

export default EditProblem;
