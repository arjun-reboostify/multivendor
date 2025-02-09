import {Button} from '@/components/ui/button'
import Themetoggle from '@/components/shared/themetoggle'
import { UserButton } from '@clerk/nextjs';
export default function Home() {
  return (
    <div><UserButton/>
<Themetoggle/>
      <h1 className="font-barlow">welcome to reboostify</h1>
      <h1 className="">welcome to reboostify</h1>
      <Button variant="outline">b</Button>
    </div>
  );
}
