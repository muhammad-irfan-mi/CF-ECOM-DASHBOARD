import React, { useContext } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { ThemeContext } from '../../context/ContextProvider';

function AllTeamModel({ closeModel }) {
  const context = useContext(ThemeContext)
  const teams = [
    { name: 'Team Alpha' },
    { name: 'Team Beta' },
    { name: 'Team Gamma' },
  ];

  return (
    <div className={`fixed top-[26%] right-[2%] transform -translate-x-1/2 -translate-y-1/2 w-[14%] h-[33%] shadow-lg rounded-lg p-2 overflow-auto scrollbar-hide hover:scrollbar-thin hover:scrollbar-thumb-gray-400 hover:scrollbar-track-gray-200 ${context.colors.boxbg} ${context.colors.textColor}`}>
      <div onClick={closeModel}>
      <CloseIcon className={`relative left-[140px] ${context.colors.texthover}`}/>
      </div>
      <ul>
        {teams.map((team, i) => (
          <li
            key={i}
            className={`p-2 my-2 border rounded-md shadow-sm ${context.colors.texthover}`}
          >
            {team.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllTeamModel;
