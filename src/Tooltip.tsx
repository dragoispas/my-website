import { FaRegQuestionCircle } from "react-icons/fa";

type TooltipInterface = {
  data: string,
}


export default function Tooltip({data} : TooltipInterface) {
  return (
    <div className="tooltip" tooltip-data={data}>
      <FaRegQuestionCircle className="tooltip-icon"/>
    </div>
  )
}