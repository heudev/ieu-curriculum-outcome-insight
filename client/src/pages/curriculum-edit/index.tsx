import CourseDetailsForm from "./components/CourseDetailsForm";
import CourseObjectiveForm from "./components/CourseObjectiveForm";
import WeeklyTopicsForm from "./components/WeeklyTopicsForm";
import EvaluationSystem from "./components/EvaluationSystem";
import EctsWorkLoadForm from "./components/EctsWorkLoadForm";
import ProgramOutcomeTable from "./components/ProgramOutcomeTable";

export default function CurriculumEdit() {
  return (
    <div className="mt-5 space-y-4 px-30">
      <CourseDetailsForm />
      <CourseObjectiveForm />
      <WeeklyTopicsForm />
      <EvaluationSystem />
      <EctsWorkLoadForm />
      <ProgramOutcomeTable />
    </div>
  )
}