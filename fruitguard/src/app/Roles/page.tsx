"use client";
import Button from "../sharedComponents/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";

import {
  UserIcon,
} from "@heroicons/react/24/outline";
export default function Roles() {
const router = useRouter();
  return (
    <div>
      <div>
        <div>
          <div className="relative flex flex-col items-center px-4">

            <div className="w-60 h-12 mb-20 flex items-center justify-center mt-48">
              <Image
                src="/images/fruitguard.png"
                alt="FruitGuard logo"
                width={800}
                height={200}
                priority={true}
              />
            </div>

            <h2 className="text-[50px] font-bold text-[#683929] mt-18">Welcome to FruitGuard</h2>
            <p className=" text-[30px] mt-2  text-center w-[40%]">
              An intelligent platform to monitor traps
              Please select your role to continue
            </p>
            
            <div className="flex flex-row gap-20">
              <Button
                buttonText="Agrovet"
                variant="secondary"
                size="large"
                onClickHandler={() => router.push("/signin?role=agrovet")}
                icon={<UserIcon className="h-6 w-6" />}
                className="mt-10 flex items-center gap-3 justify-center"
              />

              <Button
                buttonText="Admin"
                variant="secondary"
                size="large"
                onClickHandler={() => router.push("/signin?role=admin")}
                icon={<UserIcon className="h-6 w-6" />}
                className="mt-10 flex items-center gap-3 justify-center"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
