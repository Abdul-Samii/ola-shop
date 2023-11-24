import { iconsType } from '@/types';
import * as FaIcons from 'react-icons/fa';

export const Icons = ({iconName, size, className}: iconsType) => {

  const SelectedIcon = FaIcons[iconName as keyof typeof FaIcons];

  return (
    <SelectedIcon size={size} className={className} />
  )
}
