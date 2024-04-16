"use client";

import { useRouter } from "next/navigation";
import { ShowMoreProps } from "@/types";
import CustomButton from "./CustomButton";

const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
    
    const router = useRouter();
    const handleNavigation = () => {
        const searchParams = new URLSearchParams(window.location.search);
        const newLimit = (pageNumber + 1) * 10;
        searchParams.set("limit", newLimit.toString());

        const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
        router.push(newPathname);
    }

    return(
        <div className="w-full flex-center gap-5 mt-10">
            {!isNext && (
                <CustomButton title="Show More" handleClick={handleNavigation} btnType="button" containerStyles="bg-primary-blue text-white rounded-full"/>
            )}
        </div>
    );
};

export default ShowMore;
