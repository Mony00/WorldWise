import { useNavigate } from "react-router-dom";
import Button from "./Button";

function BackButton() {
  const navigate = useNavigate();
  return (
    <Button
      type="back"
      onClick={(e) => {
        e.preventDefault(); // this need to vrevent the
        // form submition error, ex: if we clicked back
        // before it shows the form, does not go back
        //it prevents to submit the form if we vant to go back
        navigate(-1); // go back to previous page
      }}
    >
      &larr; Back
    </Button>
  );
}

export default BackButton;
