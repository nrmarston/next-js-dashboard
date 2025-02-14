import { CubeTransparentIcon } from '@heroicons/react/24/solid';
import { domine } from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`${domine.className} flex flex-row items-center leading-none text-white`}
    >
      <CubeTransparentIcon className="h-12 w-12 rotate-[15deg]" />
      
      <p className="text-[44px] pl-2">Acme</p>
    </div>
  );
}
