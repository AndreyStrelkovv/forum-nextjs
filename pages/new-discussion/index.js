import { Fragment } from "react";
import NewDiscussionForm from "../../components/Dicsussion/NewDiscussionForm";

export default function NewDiscussionFormPage() {

  const addDiscussionHandler = () => {

  }

  return (
    <Fragment>
      <NewDiscussionForm onAddDiscussion={addDiscussionHandler}/>
    </Fragment>
  )
}