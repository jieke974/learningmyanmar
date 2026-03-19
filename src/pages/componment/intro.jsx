import { Link } from "react-router";



export default function Componentintro(){
    return (
      <div className="flex justify-center">
        <Link to={"/component/buttons"}>
          <h1 className="text-red-600">Get Lesson Right Now</h1>
        </Link>
      </div>
    );
}