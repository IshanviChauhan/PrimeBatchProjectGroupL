// import React from 'react';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
// import { Button } from '../ui/button';
// import { Badge } from '../ui/badge';

// interface ChallengeCardProps {
//   id: string;
//   title: string;
//   difficulty: 'Easy' | 'Medium' | 'Hard';
//   points: number;
//   description: string;
//   tags: string[];
//   onStart?: () => void;
// }

// export const ChallengeCard: React.FC<ChallengeCardProps> = ({
//   title,
//   difficulty,
//   points,
//   description,
//   tags,
//   onStart
// }) => {
//   const getDifficultyColor = (difficulty: string) => {
//     switch (difficulty) {
//       case 'Easy': return 'bg-green-100 text-green-800';
//       case 'Medium': return 'bg-yellow-100 text-yellow-800';
//       case 'Hard': return 'bg-red-100 text-red-800';
//       default: return 'bg-gray-100 text-gray-800';
//     }
//   };

//   return (
//     <Card className="w-full max-w-md">
//       <CardHeader>
//         <div className="flex justify-between items-start">
//           <CardTitle className="text-lg">{title}</CardTitle>
//           <Badge className={getDifficultyColor(difficulty)}>
//             {difficulty}
//           </Badge>
//         </div>
//         <CardDescription>{description}</CardDescription>
//       </CardHeader>
//       <CardContent>
//         <div className="flex flex-wrap gap-2 mb-4">
//           {tags.map((tag, index) => (
//             <Badge key={index} variant="outline" className="text-xs">
//               {tag}
//             </Badge>
//           ))}
//         </div>
//         <div className="flex justify-between items-center">
//           <span className="text-sm font-medium text-blue-600">
//             {points} points
//           </span>
//           <Button onClick={onStart} size="sm">
//             Start Challenge
//           </Button>
//         </div>
//       </CardContent>
//     </Card>
//   );
// };
