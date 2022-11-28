import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} || Your favorite car`;
  }, [title]);
};

export default useTitle;
