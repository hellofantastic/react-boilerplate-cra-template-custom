import Select, { components } from 'react-select';
import { HiOutlineChevronDown } from 'react-icons/hi';

const DropdownIndicator = props => {
  return (
    components.DropdownIndicator && (
      <components.DropdownIndicator {...props}>
        <HiOutlineChevronDown />
      </components.DropdownIndicator>
    )
  );
};

interface IDropDownSelect {
  name: string;
  options: { label: any; value: any }[] | undefined;
  selectedOption: string;
  onChangeHandler(data: any, control: any): any;
  placeholder: string;
  clear?: boolean;
  labelFormater?: any;
}
const DropDownSelect = ({
  name,
  options,
  selectedOption,
  onChangeHandler,
  placeholder,
  clear,
  labelFormater,
}: IDropDownSelect) => {
  let defaultValue = {
    label: labelFormater ? labelFormater(selectedOption) : selectedOption,
    value: selectedOption,
  };
  return (
    <Select
      components={{ DropdownIndicator }}
      isClearable={clear}
      defaultValue={selectedOption ? defaultValue : null}
      name={name}
      styles={dropDownStyles}
      menuPortalTarget={document.body}
      menuPosition={'fixed'}
      options={options}
      placeholder={placeholder ? placeholder : 'Select...'}
      onChange={onChangeHandler}
      value={
        defaultValue.label
          ? { label: defaultValue.label, value: defaultValue.value }
          : null
      }
    />
  );
};
export default DropDownSelect;

export const dropDownStyles = {
  container: (provided, state) => ({
    ...provided,
    display: 'inline-block',
    marginRight: '3px',
    width: '100%',
    maxWidth: '190px',
  }),
  control: (provided, state) => ({
    ...provided,
    borderColor: '#d6dfe4',
    '&:hover': { borderColor: '#d6dfe4' },
    height: '34px',
    minHeight: '34px',
    boxShadow: state.isFocused ? '0 0 0 1px #d6dfe4' : 'none',
    borderRadius: '3px',
  }),
  valueContainer: (provided, state) => ({
    ...provided,
    height: '34px',
    padding: '0 6px',
  }),
  singleValue: (provided, state) => ({
    ...provided,
    fontSize: '0.8rem',
    color: '#375e81',
  }),
  input: (provided, state) => ({
    ...provided,
    margin: '0px',
  }),
  indicatorSeparator: state => ({
    display: 'none',
  }),
  indicatorsContainer: (provided, state) => ({
    ...provided,

    height: '34px',
    marginTop: '-2px',
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    color: '#cbd4da',
    fontSize: '0.9rem',
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? '#f6727f' : '#fff',
    '&:hover': { backgroundColor: state.isSelected ? '#f6727f' : '#f8f8f8' },
    fontSize: '0.8rem',
  }),
  menu: (provided, state) => ({
    ...provided,
    color: state.selectProps.menuColor,
    top: '4px',
    zIndex: 999,
  }),
  placeholder: (provided, state) => ({
    ...provided,
    fontSize: '0.8rem',
    color: '#375e81',
  }),
};
