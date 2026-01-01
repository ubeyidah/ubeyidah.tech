import Image from "next/image";

export default function Page() {
  return <div>
    <div>
      <Image src="/profile.jpg" alt="ubeyidah" width={50} height={50} className="rounded-xl aspect-square object-center object-cover" />
    </div>
  </div>
}
