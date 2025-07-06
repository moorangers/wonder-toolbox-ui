// 'use client';

// import * as React from 'react';
// import { Languages } from 'lucide-react';

// import { useLanguage } from '@/lib/i18n/hooks';
// import { Button } from '@/components/ui/button';
// import {
//   DropdownMenu,
//   DropdownMenuItem,
//   DropdownMenuContent,
//   DropdownMenuTrigger,
// } from '@/components/ui/dropdown-menu';

// export function LanguageToggle() {
//   const { language, setLanguage } = useLanguage();

//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger asChild>
//         <Button variant="ghost" size="sm" className="h-8 w-8 px-0">
//           <Languages className="h-4 w-4" />
//           <span className="sr-only">Toggle language</span>
//         </Button>
//       </DropdownMenuTrigger>
//       <DropdownMenuContent align="end">
//         <DropdownMenuItem onClick={() => setLanguage('en')}>
//           🇺🇸 English
//         </DropdownMenuItem>
//         <DropdownMenuItem onClick={() => setLanguage('th')}>
//           🇹🇭 ไทย
//         </DropdownMenuItem>
//       </DropdownMenuContent>
//     </DropdownMenu>
//   );
// }
