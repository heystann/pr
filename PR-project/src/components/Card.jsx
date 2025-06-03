import img from "../assets/img/1.png";
import { CardButton } from "./CardButton";


export const Card = () => {
  return (
    <div className="col-xl-3 col-lg-4 col-md-6 py-2">
      <div className="card d-flex flex-colum align-items-center justify-content-center">
        <div className="card-img">
          <img src={img} alt="" />
        </div>
        <div className="card-body">
          <div className="card-head">
            Run the Jewels 2
          </div>
          <div className="card-price text-uppercase">
            buy now $9.00
          </div>
        </div>
        <CardButton />
      </div>
    </div>
  )
}