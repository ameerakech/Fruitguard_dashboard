"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "../sharedComponents/Button";

export default function Splash() {
  const handleClick = () => {};

  return (
    <div>
      <div>
        <div className="relative bg-[url('/images/trap.jpg')] bg-cover bg-center min-h-screen flex flex-col justify-center">
          <div className="absolute inset-0 bg-[#683929]/70"></div>
          <div className="relative flex flex-col items-center px-4 max-w-4xl mx-auto">
            <div className="w-full max-w-60 sm:max-w-72 h-12 mb-25 flex items-center justify-center mt-">
              <Image
                src="/images/fruitguard.png"
                alt="FruitGuard logo"
                width={800}
                height={200}
                priority={true}
                style={{ width: "100%", height: "auto" }}
              />
            </div>

            <h1 className="text-[40px] sm:text-[50px] text-[#FFC661] font-bold">
              FruitGuard
            </h1>
            <p className="text-white text-[30px] sm:text-[30px] mt-2 mb-8 text-center w-[50%] sm:w-full px-4">
              Monitor trap fill status and receive real-time alerts with FruitGuard's advanced IoT technology
            </p>
            <Link href="/Roles">
              <Button
                buttonText="Get Started"
                variant="primary"
                size="large"
                onClickHandler={handleClick}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
