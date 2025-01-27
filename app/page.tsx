"use client";
import { useEffect, useState } from "react";
import { Roboto_Mono } from "next/font/google";

const robotoMono = Roboto_Mono({
    subsets: ["latin"],
});

export default function Home() {
    const [unity, setUnity] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setUnity((prevUnity) => prevUnity + 6.044513475115741); // Functional update
        }, 1000);

        // Cleanup interval on component unmount
        return () => clearInterval(interval);
    }, []);

    return (
        <div
            className={`flex flex-col justify-end gap-4 items-center mt-20 h-[90vh] p-8 ${robotoMono.className}`}>
            <div className="flex flex-col gap-8 justify-cente                                       r tracking-wider text-center leading-[3rem] text-3xl max-w-md sm:max-w-screen-md">
                <div className="font-light">
                    <p>Since you got here,</p>
                    <div className="font-black">
                        <p>Cristiano Ronaldo</p>
                        <p className="font-light">has already earned</p>
                    </div>
                    <p className="text-5xl font-semibold">
                        {unity.toLocaleString("en-us", {
                            style: "currency",
                            currency: "USD",
                        })}
                    </p>
                    <p className="font-light">with Al Nassr</p>
                </div>
                <div className="p-4 rounded-2xl border border-neutral-600 text-neutral-600">
                    <p className="font-light text-xl text-neutral-55                                                                                                                                         ">
                        He earns in his new contract the equivalent of $6.04 per
                        second, $362.67 per minute, $21,760.24 per hour,
                        $522,245.96 per day, $15,667,378.92 per month, and
                        $188,008,547.13 per year.
                    </p>
                </div>
            </div>
            <div className="w-full h-96 flex justify-center items-end">
                <a
                    href="https://i-am.enriquevierne.dev/"
                    className="p-2 border rounded-full text-neutral-300 hover:text-neutral-500 hover:border-neutral-500 ease-in-out duration-300">
                    developed by me.
                </a>
            </div>
        </div>
    );
}
