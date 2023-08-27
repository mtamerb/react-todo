import { AiOutlineClose, AiFillCheckSquare } from "react-icons/ai";
import { RiCheckboxBlankLine } from "react-icons/ri";

function Card() {
    return (
        <div className="cars">
            <div className="option">
                {false ? (
                    <AiFillCheckSquare className="check" />
                ) : (
                    <RiCheckboxBlankLine className="check" />
                )}
                <AiOutlineClose className="close"></AiOutlineClose>
            </div>
        </div>
    );
}

export default Card;