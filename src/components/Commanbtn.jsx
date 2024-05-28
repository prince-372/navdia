import { Phone } from "./Icons";

const Commanbtn = (props) => {
    return (
      <>
          <div className={` ${props.cstm} cursor-pointer` }>
            <span
                className=" text-base font-bold font-Inter py-3 px-[30px] rounded-[58px] bg-CommonGradient text-white"              >
                {props.text}
                </span>
          </div>
      </>
    );
  };
  
  export default Commanbtn