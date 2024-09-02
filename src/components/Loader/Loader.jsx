import css from "./Loader.module.css";

import { Circles } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className={css.loader}>
      <Circles
        height="60"
        width="60"
        color="#ff0000"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
