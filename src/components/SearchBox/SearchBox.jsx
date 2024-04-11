import css from "./SearchBox.module.css";
import { debounce } from "../../helpers/debounce";
import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/filterSlice";
const SearchBox = () => {
  const dispatch = useDispatch();

  const onChange = debounce((e) => {
    const text = e.target.value.trim();
    dispatch(setFilter(text));
  }, 200);

  return (
    <label className={css.label}>
      Find contacts by name
      <input className={css.input} type="text" onChange={onChange} />
    </label>
  );
};

export default SearchBox;
