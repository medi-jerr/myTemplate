import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Arrow } from "./style";

export function NextArrow({ onClick }) {
  return (
    <Arrow onClick={onClick} dir="next">
      <IoIosArrowForward />
    </Arrow>
  );
}
export function PrevArrow({ onClick }) {
  return (
    <Arrow onClick={onClick} dir="prev">
      <IoIosArrowBack />
    </Arrow>
  );
}
