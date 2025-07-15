// import React from 'react';
// import { formatNumber } from '../../utils/helpers';

// interface UserStatsProps {
//   name: string;
//   points: number;
//   level: number;
//   challengesCompleted: number;
//   rank?: number;
// }

// export const UserStats: React.FC<UserStatsProps> = ({
//   name,
//   points,
//   level,
//   challengesCompleted,
//   rank
// }) => {
//   return (
//     <div className="bg-white rounded-lg shadow-md p-6 max-w-sm">
//       <div className="text-center mb-4">
//         <h2 className="text-xl font-bold text-gray-800">{name}</h2>
//         {rank && (
//           <p className="text-sm text-gray-600">Rank #{rank}</p>
//         )}
//       </div>
      
//       <div className="space-y-3">
//         <div className="flex justify-between items-center">
//           <span className="text-gray-600">Points:</span>
//           <span className="font-semibold text-blue-600">
//             {formatNumber(points)}
//           </span>
//         </div>
        
//         <div className="flex justify-between items-center">
//           <span className="text-gray-600">Level:</span>
//           <span className="font-semibold text-green-600">
//             {level}
//           </span>
//         </div>
        
//         <div className="flex justify-between items-center">
//           <span className="text-gray-600">Challenges:</span>
//           <span className="font-semibold text-purple-600">
//             {challengesCompleted}
//           </span>
//         </div>
//       </div>
      
//       <div className="mt-4 bg-gray-200 rounded-full h-2">
//         <div 
//           className="bg-blue-600 h-2 rounded-full transition-all duration-300"
//           style={{ width: `${Math.min((points % 1000) / 10, 100)}%` }}
//         />
//       </div>
//       <p className="text-xs text-gray-500 mt-1 text-center">
//         Progress to next level
//       </p>
//     </div>
//   );
// };
