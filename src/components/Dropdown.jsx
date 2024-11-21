const Dropdown = (props) => {
  console.log(props.dropdownPros)

  return (
    <div className="flex flex-col justify-center gap-2 bg-slate-200 p-2 absolute mt-2">
      {props.dropdownPros.map((e) => (
        <p className="border border-transparent border-b-black last:border-b-transparent">
          {e}
        </p>
      ))}
    </div>
  )
}

export default Dropdown
