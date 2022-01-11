import Select from 'react-select';

const options = [
  { value: 'All', label: 'All' },
  { value: 'Completed', label: 'Completed' },
  { value: 'unCompleted', label: 'unCompleted' },
];
const NavBar = ({ unCompletedTodos , onChange , selectedOption}) => {
    if(!unCompletedTodos) return <h2 className='h2Text'>set your today todos! </h2>
    return(
        <header>
            <span> {unCompletedTodos} </span>
            <h2>are not completed</h2>
            <Select 
                onChange={onChange}
                value={selectedOption}
                options={options}
                className="select"
            />
        </header>
    );
}
export default NavBar; 






// const NavBar = ({ unCompletedTodos , onSelect , status}) => {
//     if(!unCompletedTodos) {
//         return <h2>set your today todos! </h2>
//     }else {
//         <header>
//             <span> {unCompletedTodos} </span>
//             <h2>are not completed</h2>
//             <select onChange={onSelect} value={status}>
//                 <option value="All"> All</option>
//                 <option value="Completed"> Completed</option>
//                 <option value="unCompleted"> unCompleted</option>
//             </select>
//         </header>
//     }
// }
// export default NavBar; 