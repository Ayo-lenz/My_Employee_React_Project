// the file was gotten from tailwind documentation (utility core foundamentals)

function Employee(props) {
  return (
    <div className="min-w-[350px] max-w-[350px] m-2 py-8 px-8 max-w-sm bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
      <img
        className="object-cover h-[100px] w-[100px] block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
        src={props.img}
        alt=""
      />
      <div className="text-center space-y-2 sm:text-left">
        <div className="space-y-0.5">
          <p className="text-lg text-black font-semibold">{props.name}</p>
          <p className="text-slate-500 font-medium">{props.role}</p>
        </div>

        {/* to get the profile from data in the modal, we use props again to link the datas from app.js which we looped through using map */}
        {/* <EditEmployee
          id={props.id}
          name={props.name} 
          role={props.role} 
          updateEmployee={props.updateEmployee}
        /> */}

        {props.editEmployee}
        {/* here we call the updateEmployee function as props cause its now a property */}
        
      </div>
    </div>
  );
} 
export default Employee